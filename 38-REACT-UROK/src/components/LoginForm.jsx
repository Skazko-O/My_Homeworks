import Password from "antd/es/input/Password"
import { useState } from "react"
import useAuth from "../hooks/useAuth"

export default function LoginForm(props) {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const {login} =useAuth()

    const changeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const submitHendler = async (e) => {
        e.preventDefault()
        const isLogged = await login(values.username, values.password)
        console.log('isLogged', isLogged);
        props.onLogin(isLogged)


    }
    return (
        <form onSubmit={submitHendler}>
            <input type="text" placeholder="Username" value={values.username} name="username" onChange={changeHandler} required />
            <br />
            <input type="password" placeholder="Password" value={values.password} name="password" onChange={changeHandler} required />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}