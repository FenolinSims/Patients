import { Add } from "../utils/img-library";

const SubHeader = ({showPopup,setShowPopup}) => {
    const onShow = () =>{
        console.log(showPopup);
        setShowPopup(true)
    }
    return (
        <div className="subheader-menu">
            <div className="header-left">
                <p className="subheader">Patients</p>
            </div>
            <div className="header-right fr-vc">
                <select className="select-box">
                    <option>All Patients</option>
                </select>
                <div className="button"  onClick={onShow}>
                    <img style={{
                        width: "15px"
                    }} src={Add}/>
                    <div style={{ color: "white" }}>
                        New Patients
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader;