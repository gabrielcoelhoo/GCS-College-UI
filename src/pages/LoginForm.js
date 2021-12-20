import React, { useState } from 'react';
import '../styles/style.css'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");


    function submitLogin() {
        console.log(email, password)
        fetch(`http://localhost:8080/api/submitLogin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            }),
        })
            .then((response) => response.json())
            .then(responseJson => {
                console.log(responseJson);
            })
    }


    return (
        <div className="centerContent">
            <h1>Login Subscription</h1>
            <form>
                <label>
                    <p className='fieldName'>Email</p>
                    <input className='inputUser' type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p className='fieldName'>Password</p>
                    <input className='inputUser' type="text" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p className='fieldName'>Confirm Password</p>
                    <input className='inputUser' type="text" onChange={e => setConfirmation(e.target.value)} />
                </label>
                <div className='spaceUP20PX'>
                    <button
                        onClick={submitLogin}
                        className='btnSubmit'
                        type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;


//comments section just type in one line in UI - done
//should break when reaches the end of a container  - done

//maybe I split this screen into two due to the number of parameters - doing

