import { Link,Outlet } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import Container from "./Container";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="bg-accent">
      <Container>
          {/* upper portion of navbar */}
       <div className="flex justify-between items-center">
       <div>
            <img src="Images/logo.png" alt="logo" />
        </div>
        <div >
            <ul className="flex justify-between items-center gap-5">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/incidents">Incidents</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li><Link>Activities</Link></li>
                <li><Link>Documents</Link></li>
                <li><Link>Cypher AI</Link></li>
            </ul>
        </div>

        <div className="flex justify-between items-center gap-5">
            <img src="Images/notification.png" alt="" />
            <div className="flex justify-between items-center">
                <img src="" alt="" />
                <div>
                    <h5>Usman Zafar</h5>
                    <p>usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>

       </div>

       <div className=" w-full border border-b-[1px] border-[#3F3F46]">

        </div>
         {/* lower portion of navbar */}
       
      </Container>
      <Outlet></Outlet>
    </nav>
    
  )
}

export default Navbar