import { useState } from 'react'

const Signup = () => {
    const [email, sentEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

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

            <button>Sign up</button>
        </form>
    )
}

export default Signup