import { Picture_D } from "../utils/img-library";
import { Cake } from "../utils/img-library";
import { Edit2 } from "../utils/img-library";
import { Edit1 } from "../utils/img-library";
import Tab from "./Tab";

const PatientHeader = () => {
    return (
        <div className="">
            <div className="patientHeader">
                <p className="title ">Patient Info</p>
                <p style={{ fontSize: "11px" }}><span style={{ color: "#049C8A" }}>Patients</span> / Patient Info</p>
            </div>
            <div className="fr-vc profileinfo ">
                <div className="fr-vc">

                    <div>
                        <img src={Picture_D} style={{ width: "40px" }} />
                    </div>
                    <div>
                        <div className="name">
                            Dave S George
                        </div>
                        <div className="fr-vc">
                            <p className="pdetail">Male (21)</p>
                            <div className="fr-vc gap-5">
                                <img src={Cake} style={{ width: "16px" }} />
                                <p className="pdetail">Jun 25 2000</p>
                            </div>
                            <div className="fr-vc gap-5">
                                <img src={Edit2} style={{ width: "16px" }} />
                                <p className="pdetail">Exam : <span className="date">mm-dd-yyyy</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="button">
                        <img style={{
                            width: "14px"
                        }} src={Edit1} />
                        <div style={{ color: "white", fontSize: "12px" }}>
                            Edit
                        </div>
                    </button>
                </div>
            </div>
            <Tab />
        </div>
    )
}

export default PatientHeader;