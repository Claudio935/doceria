import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Sidebar from './sidebar'


const Admin = () => {

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Admin