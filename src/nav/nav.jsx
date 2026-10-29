import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./nav.css"
import { faAddressBook, faBars, faCircleInfo, faHouse } from "@fortawesome/free-solid-svg-icons"
export default function Nav() {
    return (
        <>
        <nav className="nav">
            <header>
                <h1>React</h1>
            </header>
            <ul className="nav-links">
                <li><a href="https://www.google.com"><FontAwesomeIcon icon={faHouse} /> HomeHome</a></li>
                <li><a href="https://www.google.com"><FontAwesomeIcon icon={faCircleInfo} /> About</a></li>
                <li><a href="https://www.google.com"><FontAwesomeIcon icon={faAddressBook} /> Contact</a></li>
            </ul>
            <div className="nav-toggle">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
        </>
    )
}
