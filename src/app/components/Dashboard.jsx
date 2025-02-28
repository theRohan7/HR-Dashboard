import {
  Bell,
  ChevronDown,
  Menu,
  MessageSquareMore,
  Search,
} from "lucide-react";
import "../CSS/Dashboard.css";
import { cardsData, graphCardData } from "../dashboardData";
import Card from "./Card";
import GraphCard from "./GraphCard";
import Announcement from "./Announcement";
import Schedule from "./Schedule";

function Dashboard() {
  return (
    <div className="dashboard-main">
      <nav className="dashboard-nav">
        <div className="dashboard-nav-left">
          <Menu className="hamburger-menu" />
          <div className="searchbox">
            <input type="text" placeholder="Search" />
            <Search className="search-icon"  />
          </div>
        </div>

        <div className="profile-btns">
          <div className="bell-icon">
            <Bell fill="#B2B2B2" color="#B2B2B2" />
            <span className="notification"></span>
          </div>
          <MessageSquareMore  color="#B2B2B2" />
          <img
            src="https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GXmWp3LcnLQHMk6agVqLOmrg0-3I9FLRAEPJN8901J9GWggooyUL4J4qz6ghR0jIGJISIFunnW3DPkCQnvnDb5fbTe1W29-jNgKTnlQsB73q5wM8Pd5MH4BQ1L1uwObK3vZdGm7Kl0nofNawLzK21CirWTqbj3sIDvJSQwsD9B2~5RrFpGHGe6ujSXJWYgqWdkCAVWc~zeMwYvMUN0DsW4s76~jXg4l0Zg-lTYcpm1zu8wMmpnaB~-cJKeCal8Q5bnzLyAOHlJHvkzvHOx~b624XTNyj4PQeLcIgL8Boe-nzm3H5rXOGwBkfpoRRjoNXwioiHUpJ9LPeRLdMeEHsBQ__"
            alt="Profile Image"
          />

          <span className="username">Admirra John</span>

          <ChevronDown  color="#B2B2B2" />
        </div>
      </nav>
      <h2 className="heading">Dashboard</h2>
      <div className="dashboard-container">
        <div className="cards-announcements">
          <div className="cards">
            {cardsData.map((card) => {
              return <Card data={card} key={card.id} />;
            })}
          </div>
          <div className="graph-card">
            {graphCardData.map(card => {
                return <GraphCard data={card} key={card.id} />
            })
            }
          </div>
          <Announcement />
        </div>
        <div className="activity-schedule">
          <div className="activity">
            <div className="activity-header">
              <h3>Recently Activity</h3>
            </div>
            <div className="activity-content">
              <p className="activity-timeline" >10:40 AM, Fri 10 Sept 2021</p>
              <h3>You Poster a New Job</h3>
              <p className="activity-description" >
              Kindly check the requirements and terms of work and make sure everything is right.
              </p>
              <div className="activity-footer">
                <span>Today you makes 12 Activity</span>
                <button>See All Activity</button>
              </div>
            </div>
          </div>
          <div className="schedule">
            <Schedule />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
