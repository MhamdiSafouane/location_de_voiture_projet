import React, { useState } from 'react'
import './../Components/Style/Form.css'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {addAdmin} from ".././Utils/ApiUtilAdmin";



function AdminSign() {
  const [inputdata, setInputData] = useState( {
    Name: "",
    email: "",
    contact: "",
    password: "",
    Confirm_Password: ""
  } );
  const [err, setErr] = useState("");
const [loder,setLoder] = useState(false)
  

  const navigate = useNavigate();

  const onSubmitData = async ( e ) => {
    e.preventDefault();
 
    const { Name, email, contact, password, Confirm_Password } = inputdata;
    if ( email === "" )
    {
      toast.error( "email dharouri" );
    }
    else if ( Name === "" )
    {
      toast.error( "dakhel mail s7i7 !" )
    }
    else if ( !email.includes( "@" ) )
    {
      toast.error( "dakhel mail s7i7 !" )
    }
    else if ( contact.length < 10 )
    {
      toast.error( "dakhel noumrou tlf s7i7!" )
    }
    else if ( password === "" )
    {
      toast.error( "mot de passe dharouri" )
    }
    else if ( password.length < 4 )
    {
      toast.error( "mot de passe 9sir" )
    }
    else if ( password.length > 20 )
    {
      toast.error( "mot de passe twil barcha" )
    }
    else if ( Confirm_Password !== password )
    {
      toast.error( "mot de passet mosh metab9in" )
    }
    else
    {
      setLoder(true);
      addAdmin(inputdata).then(data=>{
        if(data.status==="shy aawed mara o5ra"){
          setLoder(false)
          setErr("User deja mawjoud ")
        }else if(data.status==="sa7it"){
          toast.success("tasjilek mrigel");
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
      
    })
    }

  }

  return (
    <>
      <div className="container-of-login-form-in-my-side"  id='form'>
 
        <form onSubmit={onSubmitData}>
        <h4 className='fom-name-in-login-form'>tasjil compte mta3 l admin</h4>
        <h6 style={{color:"red"}}>{err}</h6>

          <input type="text" name="Name" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,Name:e.target.value})} value={inputdata.Name} placeholder='esmek' />

          <input type="email" name="email" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,email:e.target.value})} value={inputdata.email} placeholder='mail mte3ek' />

          <input type="tel" name="contact" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,contact:e.target.value})} value={inputdata.contact} placeholder='Contact mte3ek' />

          <input type="password" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,password:e.target.value})} value={inputdata.password} placeholder='password' name='mot de passe' />

          <input type="password" className='login-admin-the-css-for-form' onChange={e=>setInputData({...inputdata,Confirm_Password:e.target.value})} value={inputdata.Confirm_Password} placeholder='mot de passe mara o5ra' name='Confirm_Password' />

          <div id="button-container-in-admin-login-page">  <button type='submit' id="button-container-in-admin-login-page-btn" >{loder?<div id="loder-of-the-button-of-the-login-submit"></div> :"sajel"}</button></div>
       
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

export default AdminSign

