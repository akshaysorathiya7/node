import React from 'react'

function Login() {
    const { email, SetEmail } = React.useState();
    const { password, SetPassword } = React.useState();

    const onLogin = () => {
        console.log(email, password);
    }
    return (
        <div>
            <h1>Login Here</h1>
            <input type="text" id="login" onChange={(e) => SetEmail(e.target.value)} placeholder="Enter your usernames" />
            <input type="password" id="password" onChange={(e) => SetPassword(e.target.value)} placeholder="Enter your password" />
            <button id="login" onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login