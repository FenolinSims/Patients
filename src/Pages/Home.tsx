import { useState } from "react";
import DashBox from "../components/DashBox";
import Header from "../components/Header";
import Popup from "../components/Popup";
import SideNav from "../components/SideNav";
import SubHeader from "../components/SubHeader";
import { Layer_1 } from "../utils/img-library";
import { Layer_2 } from "../utils/img-library";
import { Play_arrow } from "../utils/img-library";
import { Picture } from "../utils/img-library";
import HomeTable from "../components/HomeTable";

const Home = () => {
    const[showPopup,setShowPopup] = useState(false);

    return (
        <>
            <Header Picture={Picture} />
            <SideNav />
            <SubHeader showPopup={showPopup} setShowPopup={setShowPopup}/>
            <div className="content-body content-body-home ">
                <div className="dashbox-mr">
                    <DashBox imgsrc={Layer_1} con1="1384" con2="patients" con3="added in last month" dashCls={["bg-lylow"]} dashfontcls={["txt-ylow"]} />
                    <DashBox imgsrc={Layer_2} con1="46" con2="wishlinks" con3="sent in last month " dashCls={["bg-lpink"]} dashfontcls={["txt-pink"]} />
                    <div className="bg-green dashbox">
                        <p className="con4">Learn how to send Wishlinks</p>
                        <button className="button1">
                            <img className="play-vdo" src={Play_arrow} />
                            <div className="play-vdo-txt">
                                Play Video
                            </div>
                        </button>
                    </div>
                </div>
            <HomeTable />
            </div>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
        </>
    )
}
export default Home;