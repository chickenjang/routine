import { NavLink } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to='/mind'>마음가짐</NavLink>
                </li>
                <li>
                    <NavLink to='/bucket'>버킷리스트</NavLink>
                </li>
                <li>
                    <NavLink to='/vision'>비전보드</NavLink>
                </li>
                <li>
                    <NavLink to='/manda'>만다트라</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;