import React, { useState } from 'react'

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {addUser} from "../Utils/ApiUtilUser"
import "./../Components/Style/login.css"

function UserSign () {

  const [loder , setLoder] = useState(false);
  const [inputdata, setInputData] = useState( {
    Name: "",
    email: "",
    contact: "",
    password: "",
    Confirm_Password: ""
  } );

  const handleInput = ( e ) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData( { ...inputdata, [name]: value } );
  }


const [err, setErr]= useState("")

  // const navigate = useNavigate();
  const onSubmitData = async ( e ) => {
    e.preventDefault();
    console.log( inputdata );
    const { Name, email, contact, password, Confirm_Password } = inputdata;

    if ( email === "" )
    {
      toast.error( "email dharouri" );
    }
    else if ( Name === "" )
    {
      toast.error( "da5el email shih!" )
    }
    else if ( !email.includes( "@" ) )
    {
      toast.error( "da5el email shih" )
    }
    else if ( contact.length < 10 )
    {
      toast.error( "da5el noumrou shih" )
    }
    else if ( password === "" )
    {
      toast.error( "mot de passe dharouri" )
    }
    else if ( password.length < 4 )
    {
      toast.error( "mot de passe 9sir barcha" )
    }
    else if ( password.length > 20 )
    {
      toast.error( "mot de passe twil barcha" )
    }
    else if ( Confirm_Password !== password )
    {
      toast.error( "mot de passett mahomsh kif kif" )
    }
    else
    {
      setLoder(true);
      addUser(inputdata).then(data=>{
        if(data.status==="Failed"){
          setErr("User deja mawjoud")
          setLoder(false)
        }else if(data.status==="c bon sajelt"){
          toast.success("oumourek mrigla");
          setLoder(false)
          setErr("")
          setInputData({
            Name: "",
            email: "",
            contact: "",
            password: "",
            Confirm_Password: ""
          })
        }
      });
 
 }

}

  return (
    <>
      <div className="container-of-login-form-in-my-side" id='form'>
      
        <form onSubmit={onSubmitData}>
        <h4 className='fom-name-in-login-form'>dekhel compte mte3ek</h4>
        <h6 style={{color:"red"}}>{err}</h6>
          <input type="text" name="Name" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Name'  value={inputdata.Name}/>

          <input type="email" name="email" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Email' value={inputdata.email} />

          <input type="tel" name="contact" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Contact' value={inputdata.contact}/>

          <input type="password" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='password' name='password' value={inputdata.password} />

          <input type="password" className='login-admin-the-css-for-form' onChange={handleInput} placeholder='Confirm Password' name='Confirm_Password' value={inputdata.Confirm_Password}/>

          <div id="button-container-in-admin-login-page"> <button type='submit' id="button-container-in-admin-login-page-btn" >{loder?<div id="loder-of-the-button-of-the-login-submit"></div>:"Register"}</button></div>

        </form>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="light"
        />
      </div>
    </>
  )
}

export default UserSign



