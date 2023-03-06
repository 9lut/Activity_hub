import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('user')
        navigate('/')
    })
    return (
        <div>
            <h1>กำลังโหลด</h1>
        </div>
    )
}

export default Logout