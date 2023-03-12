import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAddressCard, 
  faAward,
  faCircleExclamation ,
  faUser,
  faEye,
  faDraftingCompass,
  faSign,
  faReceipt
} from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css";

const Dashboard = () => {
  const [pendingConnections, setPendingConnections] = useState(0);
  const [connected, setConnected] = useState(0);
  const [viewDetails, setViewDetails] = useState(0);
  const [draft, setDraft] = useState(0);
  const [signed, setSigned] = useState(0);
  const [received, setReceived] = useState(0);
  return (
    <>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary mb-4">
            <div className="card-body">
              <FontAwesomeIcon icon={faAddressCard} />Contacts
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <div className="out-number">
                <div className="small stretched-link">
                  <FontAwesomeIcon icon={faCircleExclamation} />Pending Connection
                </div>
                <div className="number">{pendingConnections}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <FontAwesomeIcon icon={faUser} />Connected
                </div>
                <div className="number">{connected}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <FontAwesomeIcon icon={faEye} />View Details
                </div>
                <div className="number">{viewDetails}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning mb-4">
            <div className="card-body">
              <FontAwesomeIcon icon={faAward} />Credentials
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <div className="out-number">
                <div className="small stretched-link">
                  <FontAwesomeIcon icon={faDraftingCompass} />Draft
                </div>
                <div className="number">{draft}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <FontAwesomeIcon icon={faSign} />Signed
                </div>
                <div className="number">{signed}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <FontAwesomeIcon icon={faReceipt} />Received
                </div>
                <div className="number">{received}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
