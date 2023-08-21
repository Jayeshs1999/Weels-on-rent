import '../../Components/navbar/Navbar.css'
import logo from '../../assets/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="start-part">
            <div className="logo">
                <img style={{width: "140px"}} src={logo} alt="" />
            </div>
        </div>
        <div className="last-part">
            <div className="logout">
                <AccountCircleIcon style={{width:"45px", height: '45px'}} />
            </div>
        </div>
    </div>
  )
}

export default Navbar
