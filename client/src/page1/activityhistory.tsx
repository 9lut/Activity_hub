import AppBar from '../components/appbar';
import './activityhistory.css';

function ActivityHistory() {
    return (
    <div>
      <AppBar />
      <div className="status-container">
        <div className="status-container1">
          <img
            src="https://sv1.picz.in.th/images/2023/03/07/ecGP9q.png"
            alt="image"
            className="user-image"
          />
        </div>
        <span className="user-name">ชื่อผู้ใช้</span>
        <span className="user-email">อีเมล</span>
        <h1 className="head">ประวัติการสมัคร</h1>
        <div className="status-container2">
          <img
            src="https://sv1.picz.in.th/images/2023/03/07/ecGimg.jpg" 
            alt="image"
            className="status-image"
          />
          <span className="act-name">CN ANGEL RUN MINIMARATHON 2023</span>
          <span className="act-date">14 พฤษภาคม 2566</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
        </div>
      </div>
    </div>
    );
  };
  
  export default ActivityHistory;