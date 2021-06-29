import React,{useState,useEffect} from 'react'
import './Login.css'
function Login(){

    const [Error,ChangeError] = useState("");
    const [name,changeName] = useState("");
    const [emailadd,changeEmailadd] = useState("");
    const [password,changePassword] = useState("");

    const checkerror = ()=>{
        if(name.length <= 3){
           return  ChangeError("Name should be greater than 3")
        }

        if(emailadd.includes("@")===false){
            return ChangeError("Invalid email")
        }
        if(password.length<6 || password.length>15){
            return ChangeError("Password should be greater than 5 and less than 16")
        }
        return ChangeError("")
    }

    useEffect(()=>{
        checkerror();
    },[name,emailadd,password])



    return(
        <div className="loginwrapper">
            <section className="login">
                <div className="loginbody">
                    <div className="container">
                        <h1 className="hey">👋 Hey!</h1>

                        <input value={name} type="text" className="input login__name--input" placeholder="Your Name" onChange={(e)=>changeName(e.target.value)} />
                        <input  value={emailadd} type="text" className="input login__email--input" placeholder="Your Email" onChange={(e)=>changeEmailadd(e.target.value)} />
                        <input value={password} type="password" className="input login__password--input" placeholder="Your Password" onChange={(e)=>changePassword(e.target.value)} />
                        {Error?<p style={{color:"red",fontSize:"10px"}}>{Error}</p>:""}
                        <input type="button" disabled={Error?true:false} className="login__submit--btn"  value={"Create My Account"}/>
                        <p className="footer--login">Already have an account? <a href="/">Login</a></p>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Login