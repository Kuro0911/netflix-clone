import React,{useEffect , useState} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav-kuro"}`}>
            <img 
                className="nav-logo"
                src="https://lh3.googleusercontent.com/yRzaF4RP7GL558uptij8ySaCBmxHCa4m1M5ian6qC5cwqTSIECuqOVLVLRatXkgfSQFqaPX4V2inoZouoCEOPScLrT4FYzIpEgLwqug_EVn8QvWJF1Www9wrxyn4-PjHVRr2-XO9fA=w474-h148-p-k" 
                alt="Netflix"
            />
            <img 
                className="nav-profile"
                src="https://lh3.googleusercontent.com/Os0eg1CYwpqlkTovCTVEI0SuBFH0adgc2hWx9_0Bm5wgosjD0nqTMx0WOPUI0kg4tjvAx-SP2SgCDbRBftjdNbXFGbqd3-fIJbAxKYTVtK3BmOQFYJIlrQWOUH3M3ezmQ8iDiSR5CQ=s120-p-k"
                alt="profile"
            />            
        </div>
    )
}

export default Nav
