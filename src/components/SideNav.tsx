import { BurgerMenu, HealthSafety, Profile } from "../utils/img-library";
import NavOption from "./NavOption";

const SideNav = () => {
    return(
        <>
            <div className="left-nav">
                <NavOption actionClass={'menu-action'} imgsrc={BurgerMenu}/>
                <NavOption actionClass={'menu-action active-option'} imgsrc={Profile}/>
                <NavOption actionClass={'menu-action'} imgsrc={HealthSafety}/>
            </div>
        </>
    )
}
export default SideNav;

