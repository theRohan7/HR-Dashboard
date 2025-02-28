import { ChevronDown, Ellipsis, Pin } from "lucide-react";
import "../CSS/Announcement.css";
import { announcements } from "../dashboardData";

function Announcement() {
  return (
    <div className="announcement-container">
      <div className="announcement-header">
        <h3>Announcement</h3>
        <div className="dropdown" >
          Today, 13 Sep 2021 <ChevronDown  color="#B2B2B2" />
        </div>
      </div>

      <div className="announcement-content">
        {announcements.map((item, idx) => (
          <div key={idx} className="announcement" >
            <div className="announcement-text" >
              <h4 className="announcement-title" >{item.title}</h4>
              <p className="announcement-timeline" >{item.timeline}</p>
            </div>
            <div className="announcement-icon" >
              <Pin fill="#B2B2B2" color="#B2B2B2" />
              <Ellipsis fill="#B2B2B2" color="#B2B2B2" />
            </div>
          </div>
        ))}
      </div>
      <button>See All Announcement</button>
    </div>
  );
}

export default Announcement;
