function DetailAct() {
  return (
    <div className="image" style={{ display: "flex", flexDirection: "column" }}>
      <img
        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      <div style={{ margin: "20px 0 0 20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "40px", fontWeight: "bold", margin: 0 }}>Take Photo Practice Camp</p>
        </div>
        <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>Date: 25-26 January 2022</p>
        <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>Location: Raman Train Station</p>
        <br />
        <hr style={{ borderColor: "#f2f2f2" }} />
        <br />
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ backgroundColor: "#ff8800", padding: "20px", borderRadius: "10px" }}>
            <p style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>การเปิดรับสมัคร</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px" }}>
            <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>Registration Starts: 12 January 2022</p>
            <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>Registration Ends: 20 January 2022</p>
            <p style={{ fontSize:"24px", fontWeight: 300, margin: 0 }}>Limited spots available, register soon!</p>
          </div>
        </div>
        <button type="button" className="btn btn-primary" style={{ float: "left" }}>Register Now!</button>
      </div>
    </div>
  );
}

export default DetailAct;
 