import { useFormik } from 'formik';
import PopupInput from "./PopupInput";
import { PopupImg } from "../utils/img-library";
import { Checkbox, FormControlLabel } from '@mui/material';
// import { CountryFlag } from "../utils/img-library";

const Popup = ({ showPopup, setShowPopup }) => {
    const formik = useFormik({
        initialValues: {
            patientName: '',
            phone: '',
            email: '',
            isResponsibleParty: false,
            status: '',
        },
        onSubmit: (values) => {
            let tempStorage = []
            if (localStorage.getItem("formData") != null && localStorage.getItem("formData") != "") {
                tempStorage = JSON.parse(localStorage["formData"]);
            }
            const tempVal = { ...values }
            const statuses = ["Sent", "Expired", "Completed"];
            tempVal.status = statuses[Math.floor(Math.random() * statuses.length)];
            tempStorage.push({ ...tempVal });
            localStorage.setItem('formData', JSON.stringify(tempStorage));
            setShowPopup(false)
            location.reload()
        },
    });

    const onClose = () => {
        setShowPopup(false);
    }

    return (
        <div className={`backdrop ${!showPopup ? "dnone" : ""}`}>
            <div className="popup" >
                <div className="close" onClick={onClose}></div>
                <div className="popupimg-box">
                    <img src={PopupImg} className="popupimg" alt="Popup" />
                </div>
                <form onSubmit={formik.handleSubmit} className="ml">
                    <p className="popup-title">Add patient</p>
                    <PopupInput
                        label="Patient Name"
                        name="patientName"
                        {...formik}
                    />
                    <div className="fr-vc">
                        {/* <img src={Checkbox} alt="Checkbox" /> */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="isResponsibleParty"
                                    checked={formik.values.isResponsibleParty}
                                    onChange={formik.handleChange}
                                    color="success"
                                />
                            }
                            label="Patient is the responsible party"
                        />
                    </div>
                    <PopupInput
                        label="Phone"
                        name="phone"
                        {...formik}
                    />
                    <PopupInput
                        label="Email ID"
                        name="email"
                        {...formik}
                    />
                    <button type="submit" className="btn">Add</button>
                </form>
            </div>
        </div >

    );
};

export default Popup;
