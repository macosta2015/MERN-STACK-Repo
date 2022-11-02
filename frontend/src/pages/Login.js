import { useState } from 'react'

const Login = () => {
    const [email, sentEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email: </label>
            <input 
                type="email"
                onChange={(e) => sentEmail(e.target.value)}
                value={email}
            />
            <label>Password: </label>
            <input 
                type="email"
                onChange={(e) => setPassword(e.target.value)}
                value={email}
            />

            <button>Log in</button>
        </form>
    )
}

export default Login