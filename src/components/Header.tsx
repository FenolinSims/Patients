import { Logo } from "../utils/img-library";
import HeaderOption from "./HeaderOption";

const Header = ({Picture}) => {
    return (
        <div className="header-menu">
            <div className="header-left">
                <HeaderOption imgsrc={Logo} />
                <p className="company-name">Hello Ortho</p>
            </div>
            <div className="header-right">
                <HeaderOption imgsrc={Picture} />
            </div>
        </div>
    )
}

export default Header;