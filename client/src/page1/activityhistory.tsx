import AppBar from '../components/appbar';
import { getUserData } from '../models/Userdetail';
import './activityhistory.css';

const ActivityHistory:React.FC = (props) => {
  const user = getUserData()
    return (
    <div>
      <AppBar />
      <div className="history-container">
        <div className="history-container1">
          <img
            src="https://sv1.picz.in.th/images/2023/03/07/ecGP9q.png"
            alt="image"
            className="user-image"
          />
        </div>
        <span className="user-name">ชื่อ : {user.username}</span>
        <h1 className="head">ประวัติการสมัคร</h1>
        <div className="history-container2">
          <img
            src="https://sv1.picz.in.th/images/2023/03/07/ecGimg.jpg" 
            alt="image"
            className="history-image"
          />
          <span className="act-name">CN ANGEL RUN MINIMARATHON 2023</span>
          <span className="act-date">14 พฤษภาคม 2566</span>
          <span className="act-status">สถานะการสมัคร : ได้รับเข้าร่วมกิจกรรม</span>
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