export default function useAuth() {
    const fetchUsers = async () => {
        const resp = await fetch('mock/users.json')
        const users = await resp.json()
        return users
    }

    const login = async (username, password) => {
        const users = await fetchUsers()
        const user = users.find(el => el.username === username && el.password === password)
        if (user == undefined) return false
        
        localStorage.setItem('logged', 'true')
        localStorage.setItem('userData', JSON.stringify(user))
        return true
    }


    const logout = () => {
        localStorage.removeItem('logged')
        localStorage.removeItem('userData')
    }

    return {
        login,
        logout
    }
}