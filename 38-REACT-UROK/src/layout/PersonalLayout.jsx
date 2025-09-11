import useAuth from "../hooks/useAuth"

export default function PersonalLayout(props) {
    const userInfo = JSON.parse(localStorage.getItem('userData'))
    const { logout } = useAuth()

    const clickHandler = () => {
        logout()
        props.onLogout()
    }

    return <div className="personal-layout">
        <p>Hello, {userInfo.username}</p>
        <br />
        <button onClick={clickHandler}>Logout</button>
        <div>
            {props.children}
        </div>
    </div>
}