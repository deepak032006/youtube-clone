import { Search, Menu, Video, Bell, User } from "lucide-react";
import './Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <Menu className="hamburger"/>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube"/>
      </div>

      <div className="center">
        <input
          type="text"
          placeholder="Search"
        />
        <button>
          <Search className="search"/>
        </button>
      </div>
      
      <div className="right">
        <Video className="video"/>
        <Bell className="bell"/>
        <User className="user"/>
      </div>
    </nav>
  );
};

export default Navbar;