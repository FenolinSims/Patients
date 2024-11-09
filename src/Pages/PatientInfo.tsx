import Header from "../components/Header"
import PatientHeader from "../components/PatientHeader"
import SideNav from "../components/SideNav"
import { Picture2 } from "../utils/img-library"

const PatientInfo = () => {
    return (
        <>
            <Header Picture={Picture2} />
            <SideNav />
            <div className="content-body">
                <PatientHeader />
            </div>
        </>
    )
}

export default PatientInfo