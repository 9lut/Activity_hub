import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function DetailAct() {
  
  return (
    <div className="images" style={{ display: "flex", flexDirection: "column" }}>
      <img
        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      <div style={{ margin: "20px 0 0 20px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "40px", fontWeight: "bold", margin: 0 }}>Take Photo Practice Camp</p>
      </div>
        <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>วันที่จัดกิจกรรม : 25-26 มกราคม 2022</p>
        <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>สถานที่จัดกิจกรรม: สวนขวัญเมือง</p>
        <br />
        <div style={{ backgroundColor: "#f2f2f2", display: "inline-block", borderRadius: "10px" }}>
          <p style={{ fontSize: "30px", fontWeight: "bold", margin: "20px" }}>รายละเอียดของกิจกรรม</p>
          <p style={{ fontSize: "24px", fontWeight: 300, margin: "20px" }}>
            เป็นกิจกรรมเปิดให้ผู้ที่มีความสนใจในการถ่ายรูป
          </p>
        </div>

        <br />
        <hr style={{ borderColor: "#f2f2f2" }} />
        <br />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "20px" }}>
          <div style={{ backgroundColor: "#ff8800", padding: "20px", borderRadius: "10px" }}>
              <p style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>การเปิดรับสมัคร</p>
          </div>
          <br />
          <div style={{ backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>เริ่มเปิดรับสมัคร: 12 มกราคม 2022</p>
            <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>ปิดรับสมัคร: 20 มกราคม 2022</p>
            <br />
            <p style={{ fontSize:"32px", fontWeight: "bold", margin: 0 }}>ปิดรับสมัครเมื่อจำนวนคนที่สมัครเต็ม</p>
          </div>
          <br />
          <Link to="/from">
            <Button variant="contained" style={{ fontSize: "24px", padding: "20px" }}>
              สมัครเลย!!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailAct;
 