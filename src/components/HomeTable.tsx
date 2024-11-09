import { useNavigate } from "react-router-dom";
import { Email, Phone, Tdots } from "../utils/img-library";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";

const HomeTable = () => {
  const navigation = useNavigate();
  const [allPatients, setAllPatients] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setAllPatients(JSON.parse(storedData));
    }
  }, []);


  const getStatusClass = (status) => {
    switch (status) {
      case 'Sent':
        return 'bg-ylow';
      case 'Expired':
        return 'bg-red';
      case 'Completed':
        return 'bg-green';
      default:
        return 'bg-grey';
    }
  };
  return (
    <div className="home-table-box">
      <table className="home-table">
        <thead>
          <tr>
            <th>Patients</th>
            <th></th>
            <th></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allPatients && allPatients.length > 0 ? (
            allPatients.map((item, index) => {
              return (
                <tr key={index} onClick={() => navigation('patient-info')}>
                  <td>
                    <div className="fr-vc">
                      <Avatar name={item.patientName} size="30" round />
                      <div>
                        <div className="table-btxt">{item.patientName || 'Patient Name'}</div>
                        <div className="">
                          <span className="table-sub-txt">Phone :</span>
                          <span className="table-sub-txt"> {item.phone || '3298478344'}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="table-bad-td">
                    <div className="table-icoc">
                      <div className="table-ico table-iconb">
                        <img className="table-ico-img" src={Phone} alt="Mobile" />
                      </div>
                      <div className="table-ico table-iconb">
                        <img className="table-ico-img" src={Email} alt="Email" />
                      </div>
                    </div>
                  </td>
                  <td className="table-bad-td">
                    <div className="table-badge">
                      <div className={`table-bad-dot ${getStatusClass(item.status)}`}></div>
                      <div>{item.status}</div>
                    </div>
                  </td>
                  <td className="table-action">
                    <div className="table-ico">
                      <img className="table-ico-img" src={Tdots} alt="Options" />
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No patients
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div >
  );
};

export default HomeTable;
