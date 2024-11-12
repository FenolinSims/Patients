import { useNavigate } from "react-router-dom";

const NavOption = ({ imgsrc, actionClass }) => {
    const navigation = useNavigate();

    const navigte = () => {
        if (actionClass.includes("active-option")) {
            navigation('/');
        }
    }

    return (
        <>
            <div className={actionClass}>
                <img src={imgsrc} onClick={navigte} />
            </div>
        </>
    )
}
export default NavOption;