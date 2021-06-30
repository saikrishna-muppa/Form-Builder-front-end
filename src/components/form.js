import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { DialogActions } from '@material-ui/core';

import {postForm} from '../api/api'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
        main:{
        margin:"20px",
        display:'flex',
        flexDirection:'column'
    },
    input:{
        width:"250px",


    }
  }));

const Form = () => {
    const classes = useStyles()
    let answw={}
    const [open, setOpen] = useState(false)
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionType, setQuestionType] = useState('')
    const [answer, setAnswer] = useState({})
    const changeHandler=(e)=>{
        setQuestionTitle(e.target.value)
    }
    const selecthandler=(e)=>{
        setQuestionType(e.target.value)
        // console.log(questionType,questionTitle)
    }

    const showText=()=>{
        // setAnswer({"type":'textfield'})
        answw={"type":'textfield',"question":questionTitle}
        // console.log("bhbifeh")
        return(<TextField label="answer" />)
    }
    const showRadio=()=>{
        // setAnswer({"type":"radio","options":["HTML","CSS","javascript"]})
        answw={"type":"radio","options":["HTML","CSS","javascript"],"question":questionTitle}
        return(<div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">HTML</label>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label for="css">CSS</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
            <label for="javascript">JavaScript</label>
            </div>
        )
    }
    const showCheckbox=()=>{

        return(<div>
            <textarea style={{padding:"26px 66px",marginLeft:"10px"}} onChange={(e)=>{
                const ans = e.target.value.split('\n')
                // console.log(ans)
                // setAnswer({"type":"radio","options":[ans]})
                answw={"type":"checkbox","options":[ans],"question":questionTitle}
            }} ></textarea>
        </div>)
    }

    const onSubmit=()=>{
        console.log(answw)
        postForm(answw)
        setOpen(false)
    }
   
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'5rem'}}>
            <button style={{padding:"16px 30px",backgroundColor:"gold",border:"none",borderRadius:"4px"}} onClick={()=>{
                setOpen(true)
            }}>Add Question</button>

            <Dialog fullWidth className={classes.dialog}
            maxWidth='sm'
                open={open}
                onClose={()=>{setOpen(false)}}
            >
                <DialogTitle>ADD QUESTION</DialogTitle>
                <div className={classes.main}>
                <TextField  variant="outlined" required label="Question" onChange={(e)=>{changeHandler(e)}} className={classes.input} />

                <label >Answer:</label>
                <select onChange={(e)=>{selecthandler(e)}} defaultCheck style={{margin:'10px',padding:"16px"}}>
                    <option  >Select</option>
                    <option  value="text">Text</option>
                    <option value="checkbox">Multi Choice Checkbox</option>
                    <option value="radio">Radio</option>
                </select>
                
                {(questionType==="text")?showText() :(questionType=="radio")?showRadio():(questionType=="checkbox")?showCheckbox():null}
                </div>
                <DialogActions>
                    <button className="submit-btn" onClick={onSubmit}>Submit</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Form
