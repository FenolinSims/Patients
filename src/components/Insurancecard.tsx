import { Edit_3 } from "../utils/img-library";
import InfoOption from "./InfoOption";
import { FakeImg } from "../utils/img-library";

const Insurancecard = () => {
    return (
        <div className="infobox">
            <div className="info-fr space">
                <div className="info-box-title">Insurance card</div>
                <div className="info-fr-edit gap-5">
                    <img src={Edit_3} className="w20"/>
                    <div className="edit">Edit</div>
                </div>
            </div>
            <div className="">
                <div className="info-2">
                    <InfoOption name={"Insurance carrier name"} val={"Delta Dental California"} />
                    <InfoOption name={"Subscriber ID"} val={"114983100201"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Patient / member ID"} val={"114983100201"} />
                    <InfoOption name={"Group / Employer name "} val={"114983100201"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Group number"} val={"00362-00001"} />
                    <InfoOption name={"Patient’s Relationship with Subscriber"} val={"Child"} />
                </div>
                <div className="info-2">
                    <div>
                        <p className="info-name">Image uploaded</p>
                        <div className="fr-vc" style={{ width: "50%" }}>
                            <img src={FakeImg} style={{
                                height:"24px"
                            }} />
                        </div>
                    </div>
                    <InfoOption name={""} val={""} />
                </div>
            </div>
        </div>
    )
}

export default Insurancecard;