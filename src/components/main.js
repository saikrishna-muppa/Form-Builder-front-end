import React from 'react'
// import Form from './form'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'10rem'}}>
            
            <Link to='/newForm'><button className="create-new-one" >Create</button></Link>
            <Link to='/listForm'><button className="list">List</button></Link>
            {/* <Form/> */}
        </div>
    )
}

export default Main
