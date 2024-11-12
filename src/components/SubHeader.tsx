import { Add } from "../utils/img-library";

const SubHeader = ({ showPopup, setShowPopup }) => {
    const onShow = () => {
        console.log(showPopup);
        setShowPopup(true)
    }
    return (
        <div className="subheader-menu">
            <div className="subheader-menu-mid">
                <div className="header-left">
                    <p className="subheader">Patients</p>
                </div>
                <div className="header-right fr-vc">
                    <select className="select-box" disabled>
                        <option>All Patients</option>
                    </select>
                    <div className="button" onClick={onShow}>
                        <img className="button_add" src={Add} />
                        <div className="btn-subheader">
                            New Patient
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader;