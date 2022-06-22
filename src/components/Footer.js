import "./footer.css";

function Footer(){
    return(
        <div className="footer" >
            <div className="first">
            <img alt="" ></img>
            </div>
            <div className="centre">
                <ul>
                    <h4>Currect exchanger and converter</h4>
                    <br></br>
                    <li>Note: all the currency rates are based on USD $</li>
                    <li>Help</li>
                </ul>
                <ul>
                <h4>Products</h4>
                <br></br>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Collectives</li>
                <li>Talents</li>
                </ul>
                <ul>
                    <h4>Company</h4>
                    <li>About</li>
                    <li>Press</li>
                    <li>Work here</li>
                    <li>Legal</li>
                    <li>Privacy Policy</li>
                    <li>terms of services</li>
                    <l>Contact Us</l>
                    <li>Cookie Settings</li>
                </ul>
                <ul>
                    <h4>Network</h4>
                    <li>Technology</li>
                    <li>Culture & Recreation</li>
                    <li>Life & Arts</li>
                    <li>Science</li>
                    <li>Professional</li>
                    <li>Business</li>
                    <br></br>
                    <li>API</li>
                </ul>
            </div>
            <div className="last">
            <br></br><br></br>
            Blog Facebook Twitter LinkedIn Instagram
            </div>
        </div>
    );
}

export default Footer;