import { Edit_3 } from "../utils/img-library";
import InfoOption from "./InfoOption";

const Coverage = () => {
    return (
        <div className="infobox">
            <div className="info-fr space">
                <div className="info-box-title">Coverage</div>
                <div className="info-fr-edit gap-5">
                    <img src={Edit_3} className="w20"/>
                    <div className="edit">Edit</div>
                </div>
            </div>
            <div className="">
                <div className="info-2">
                    <InfoOption name={"Eligibility"} val={"Eligible"} />
                    <InfoOption name={"Network participation"} val={"Out of Network"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Policy network type"} val={"PPO"} />
                    <InfoOption name={"Policy effective date"} val={"Jun/01/2019"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Benefit Max"} val={"$2,000.00"} />
                    <InfoOption name={"Renewal"} val={"Lifetime"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Benefit Remaining"} val={"$500.00"} />
                    <InfoOption name={"Coinsurance Percentage"} val={"50%"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Pre-Auth & Pre-D"} val={"None"} />
                    <InfoOption name={"Waiting Period"} val={"None"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Age Restrictions"} val={"19 max- Student"} />
                    <InfoOption name={"Deductible"} val={"$0.00"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Coordination of Benefits"} val={"Standard"} />
                    <InfoOption name={"Assignment of Benefits"} val={"Practice"} />
                </div>
                <div className="info-2">
                    <InfoOption name={"Medically Necessary Only"} val={"Yes"} />
                    <InfoOption name={""} val={""} />
                </div>
            </div>
        </div>
    )
}

export default Coverage;