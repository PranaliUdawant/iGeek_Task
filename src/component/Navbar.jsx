import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/action/Useraction'
export default function Navbar() {
    const { login, logout} = useSelector(state => state.User)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/');
    }

    return <>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">iGeek</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {
                        login ? <><div class="navbar-nav">
                        <Link class="nav-link text-light active" to="/dashboard">DashBoard</Link>
                    </div></> : ""
                    }
                </div>
            </div>
            {
                login && <button className="btn btn-light" onClick={handleLogout}>LogOut</button>

            }
        </nav>
    </>
}
