import React,{useEffect,useState} from 'react'
import {getForms} from '../api/api'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexWrap:'nowrap',
        flexDirection:'column',
        maxWidth:"30%",
        border:"2px solid",
        marginBottom:"8px"

    },
    text:{
        margin:'3px'
    }
}))

const Listing = () => {
    const classes = useStyles()
    const [forms, setForms] = useState([])
    useEffect(() => {
        (async () => {
            const forms = await getForms()
            setForms(forms)
          })()
        
        console.log("hari forms",forms)
        return () => {
            
        }
    }, [])
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'5rem' ,flexDirection:'column'}}>
            <h2>List</h2>
            {(forms.length>=1)?forms.map(form=>{
                return(<div className={classes.root} >
                    <span className={classes.text} ><b>URL:</b> {form.id}</span>
                    {form.body?<span className={classes.text}><b>Name:</b> {form.body.question}</span>:null}
                    <span className={classes.text}><b>Created At:</b> {form.createdAt}</span>
                </div>)
            }):'List will be here'}
            
        </div>
    )
}

export default Listing
