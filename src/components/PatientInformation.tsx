import InfoOption from "./InfoOption";
import { Edit_3 } from "../utils/img-library";

const PatientInformation = () => {
    return (
        <div className="infobox">
            <div className="info-fr space">
                <div className="info-box-title">Personal info</div>
                <div className="info-fr-edit gap-5">
                    <img src={Edit_3} className="w20" />
                    <div className="edit">Edit</div>
                </div>
            </div>
            <div className="">
                <div className="info-2">
                    <InfoOption name={"Full name"} val={"Dave S George"} />
                    <InfoOption name={"Gender"} val={"Male"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"DOB"} val={"FEB-01-1994"} />
                    <InfoOption name={"Phone"} val={"+1 (123) 456-7890"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"SSN"} val={"078-05-1120"} />
                    <InfoOption name={"Relationship to subscriber"} val={"Dependant"} />
                </div>
                <div className="info-2">
                    {/* <InfoOption name={""} val={""} /> */}
                    {/* <InfoOption name={""} val={""} /> */}
                    <div style={{
                        width: "50%"
                    }}>
                        <div>
                            <p className="info-name">Postal Address</p>
                        </div>
                        <div>

                            <p className="info-val">132, My Street, Apartment 1001</p>
                            <p className="info-val">Kingston, New York 12401</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PatientInformation;