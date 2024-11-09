import InfoOption from "./InfoOption";
import { Edit_3 } from "../utils/img-library";

const PatientInformation = () => {
    return (
        <div className="infobox">
            <div className="fr-vc space">
                <div className="info-box-title">Personal info</div>
                <div className="fr-vc gap-5">
                    <img src={Edit_3} className="w15"/>
                    <div className="edit">Edit</div>
                </div>
            </div>
            <div className="">
                <div className="info-2">
                    <InfoOption name={"Full name"} val={"Dave S George"}/>
                    <InfoOption name={"Gender"} val={"Male"}/>
                </div>
                <div className="info-2">
                    <InfoOption name={"DOB"} val={"FEB-01-1994"}/>
                    <InfoOption name={"Phone"} val={"+1 (123) 456-7890"}/>
                </div>
                <div className="info-2">
                    <InfoOption name={"SSN"} val={"078-05-1120"}/>
                    <InfoOption name={"Relationship to subscriber"} val={"Dependant"}/>
                </div>
                <div className="info-2">
                    <InfoOption name={"Postal Address"} val={"132, My Street, Apartment 1001 Kingston, New York 12401"}/>
                    <InfoOption name={""} val={""}/>
                    
                </div>
            </div>
        </div>
    )
}

export default PatientInformation;