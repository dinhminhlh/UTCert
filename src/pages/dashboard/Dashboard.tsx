import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChevronDown, faMagnifyingGlass, faAddressCard,  faAward } from '@fortawesome/free-solid-svg-icons';
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
                  <i className="icon fa-solid fa-circle-dot"></i>Pending Connection
                </div>
                <div className="number">{pendingConnections}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <i className="icon fa-solid fa-circle-dot"></i>Connected
                </div>
                <div className="number">{connected}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <i className="icon fa-solid fa-circle-dot"></i>View Details
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
                  <i className="icon fa-regular fa-pen-to-square"></i>Draft
                </div>
                <div className="number">{draft}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <i className="icon fa-solid fa-pencil"></i>Signed
                </div>
                <div className="number">{signed}</div>
              </div>
              <div className="out-number">
                <div className="small stretched-link">
                  <i className="icon fa-solid fa-arrow-left"></i>Received
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
