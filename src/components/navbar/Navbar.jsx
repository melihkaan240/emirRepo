import "./navbar.css";
import { Home2, LocationDiscover, Scanner, Microscope,ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Container">
      <div className="title">
        <p className="p1">Phantom</p>
        <p className="p2">Pentest</p>
      </div>


<div className="optionsContainer">

      <div className="options">
        <div className="childSectionHead">
        <Home2 size="26" color="white" />
        <Link to="/"className="textOptions" >
        <p >Home</p>
        </Link>
        </div>

      </div>
      <div className="options">
        <div className="childSectionHead">
        <LocationDiscover size="26" color="white" />
        <p className="textOptions">Discovery</p>
        </div>
        <div className="childSections">
        <Link to="/discovery"className="textOptions" >
        <p className="childSectionsText">subfinder</p>

        </Link>
        <Link to="/"className="textOptions" >
        <p className="childSectionsText">naabu</p>
        </Link>
        
        </div>
      </div>
      <div className="options">
        <div className="childSectionHead">
        <Scanner size="26" color="white" />
        <p className="textOptions">Enrich</p>
        </div>
        <div className="childSections">
        <p className="childSectionsText">lorem ipsum</p>
        <p className="childSectionsText">lorem ipsum</p>
        <p className="childSectionsText">lorem ipsum</p>
        </div>
      </div>
      <div className="options">
        <div className="childSectionHead">
        <Microscope size="26" color="white" />
        <p className="textOptions">Detect</p>
        </div>
        <div className="childSections">
        <p className="childSectionsText">lorem ipsum</p>
        <p className="childSectionsText">lorem ipsum</p>
        <p className="childSectionsText">lorem ipsum</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
