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

function Dashboard() {
  return (
    <div className="dashboard-main">
      <nav className="dashboard-nav">
        <div className="dashboard-nav-left">
          <Menu className="hamburger-menu" />
          <div className="searchbox">
            <input type="text" placeholder="Search" />
            <Search className="search-icon" />
          </div>
        </div>

        <div className="profile-btns">
          <div className="bell-icon">
            <Bell />
            <span className="notification"></span>
          </div>
          <MessageSquareMore />
          <img
            src="https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GXmWp3LcnLQHMk6agVqLOmrg0-3I9FLRAEPJN8901J9GWggooyUL4J4qz6ghR0jIGJISIFunnW3DPkCQnvnDb5fbTe1W29-jNgKTnlQsB73q5wM8Pd5MH4BQ1L1uwObK3vZdGm7Kl0nofNawLzK21CirWTqbj3sIDvJSQwsD9B2~5RrFpGHGe6ujSXJWYgqWdkCAVWc~zeMwYvMUN0DsW4s76~jXg4l0Zg-lTYcpm1zu8wMmpnaB~-cJKeCal8Q5bnzLyAOHlJHvkzvHOx~b624XTNyj4PQeLcIgL8Boe-nzm3H5rXOGwBkfpoRRjoNXwioiHUpJ9LPeRLdMeEHsBQ__"
            alt="Profile Image"
          />

          <span className="username">Admirra John</span>

          <ChevronDown />
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
        <div className="activity-schedule"></div>
      </div>
    </div>
  );
}

export default Dashboard;
