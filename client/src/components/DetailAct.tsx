import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Activity {
  attributes: {
    name: string;
    location: string;
    description: string;
    people: string;
    cover: {
      data :{
          id: number|string;
          attributes: {
              formats: {
                  thumbnail: {
                      url: string;
                  };
              };
          };
        };
    };

    activity_date: {
      data: {
        attributes: {
          First_date: string;
          End_date: string;
          event: string;
        };
      };
    };
  };
}

const DetailAct = () =>  {
  const { id } = useParams();
  const [activity, setActivity] = useState<Activity>();

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:1337/api/activities/${id}?populate=*`);
    setActivity(response.data.data);
  };

  const getUserData = () => {
    const stringfiedUser = localStorage.getItem("user") || "";
    if (stringfiedUser) {
      return JSON.parse(stringfiedUser);
    }
    return false;
  }

  const user = getUserData()

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!activity) {
    return <div>Loading...</div>;
  }

  console.log(activity);
  return (
    <>
    <header className="header1">
      <img src={activity.attributes.cover.data.attributes.formats.thumbnail.url}></img>
      <div className="container">
      </div>
    </header>

    <section className="Detail">
      {activity && (
        <>
          <div style={{ margin: "20px 0 0 20px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
            <p style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>
              {activity.attributes.name}
              </p>
          </div>
            <p style={{ fontSize:"20px", fontWeight: 300, margin: 0 }}>
              วันที่จัดกิจกรรม : {activity.attributes.activity_date.data.attributes.event}
              </p>
            <p style={{ fontSize:"20px", fontWeight: 300, margin: 0 }}>
              สถานที่จัดกิจกรรม: {activity.attributes.location}
              </p>
            <br />
            <div style={{ backgroundColor: "#f2f2f2", display: "inline-block", borderRadius: "10px" }}>
              <p style={{ fontSize: "25px", fontWeight: "bold", margin: "20px" }}>รายละเอียดของกิจกรรม</p>
              <p style={{ fontSize: "16px", fontWeight: 300, margin: "20px" }}>
                {activity.attributes.description}
              </p>
            </div>

            <br />
            <hr style={{ borderColor: "#f2f2f2" }} />
            <br />
            
            <div className="register">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "20px" }}>
              <div style={{ backgroundColor: "#ff8800", padding: "20px", borderRadius: "10px" }}>
                  <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
                    การเปิดรับสมัคร
                    </p>
              </div>
              <br />
              <div style={{ backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
                <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>
                  เริ่มเปิดรับสมัคร: วันที่ {activity.attributes.activity_date.data.attributes.First_date}
                  </p>
                <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>
                  ปิดรับสมัคร: วันที่ {activity.attributes.activity_date.data.attributes.End_date}
                  </p>
                  <p style={{ fontSize:"20px", fontWeight: 300, margin: 0 }}>
                  {activity.attributes.people}
                  </p>
                <br />
                <p style={{ fontSize:"25px", fontWeight: "bold", margin: 0 , color:"red"}}>
                  ปิดรับสมัครเมื่อจำนวนคนที่สมัครเต็ม
                </p>
              </div>
              <br />
              {!user && ( 
                <div> 
                  <p>คุณยังไม่ได้เข้าสู่ระบบ โปรดเข้าสู่ระบบเพื่อลงทะเบียนเข้าร่วมกิจกรรม</p>            
                  <Link to="/login">
                      <Button variant="contained" style={{ fontSize: "20px", padding: "10px" }}>
                        เข้าสู่ระบบก่อน
                      </Button>
                  </Link>
                </div> 
              )}
              {user && (               
                <Link to="/from">
                    <Button variant="contained" style={{ fontSize: "20px", padding: "10px" }}>
                      สมัครเลย!!
                    </Button>
                </Link>
              )}
            </div>
            </div>
          </div>
        </>
    )}
    </section>
    </>
  )
};

export default DetailAct;
