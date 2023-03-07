import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function DetailAct() {
  
  return (
    <>
    <header className="header">
      <div className="container">
      </div>
    </header>

    <section className="Detail">
      <div style={{ margin: "20px 0 0 20px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>
          Take Photo Practice Camp
          </p>
      </div>
        <p style={{ fontSize:"20px", fontWeight: 300, margin: 0 }}>
          วันที่จัดกิจกรรม : 25-26 มกราคม 2022
          </p>
        <p style={{ fontSize:"20px", fontWeight: 300, margin: 0 }}>
          สถานที่จัดกิจกรรม: สวนขวัญเมือง
          </p>
        <br />
        <div style={{ backgroundColor: "#f2f2f2", display: "inline-block", borderRadius: "10px" }}>
          <p style={{ fontSize: "25px", fontWeight: "bold", margin: "20px" }}>รายละเอียดของกิจกรรม</p>
          <p style={{ fontSize: "16px", fontWeight: 300, margin: "20px" }}>
            เป็นกิจกรรมเปิดให้ผู้ที่มีความสนใจในการถ่ายรูป
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
              เริ่มเปิดรับสมัคร: 12 มกราคม 2022
              </p>
            <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>
              ปิดรับสมัคร: 20 มกราคม 2022
              </p>
            <br />
            <p style={{ fontSize:"25px", fontWeight: "bold", margin: 0 , color:"red"}}>
              ปิดรับสมัครเมื่อจำนวนคนที่สมัครเต็ม
              </p>
          </div>
          <br />

          <Link to="/from">
            <Button variant="contained" style={{ fontSize: "20px", padding: "10px" }}>
              สมัครเลย!!
            </Button>
          </Link>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default DetailAct;
