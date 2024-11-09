import Coverage from "./Coverage";
import Insurancecard from "./Insurancecard";
import PatientInformation from "./PatientInformation";
import TabOption from "./TabOptions";
import TabSideNav from "./TabSideNav";

const Tab = () => {
    return (
        <div>
            <div className="tab-menu">
                <TabOption tab="Responsible Parties" classLst={['tab-menu-opt active-tab-head']} />
                <TabOption tab="Tab2" classLst={['tab-menu-opt']} />
                <TabOption tab="Tab3" classLst={['tab-menu-opt']} />
                <TabOption tab="Tab4" classLst={['tab-menu-opt']} />
            </div>
            <div className="fr-vs">
                <div className="tab-nav">
                    <TabSideNav actionClass={'left-tab active-tab'} con="Patient" />
                    <TabSideNav actionClass={'left-tab'} con="Responsible Party 1" />
                </div>
                <div className="width">
                    <div className="patient-detail">
                        <p className="info-title">Patient</p>
                    </div>
                    <div className="info">
                        <PatientInformation />
                        <Insurancecard />
                        <Coverage />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tab;