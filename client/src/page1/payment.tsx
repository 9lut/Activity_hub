import { ChangeEvent, useState } from 'react';
import { SelectChangeEvent} from '@mui/material';
import Result from '../models/Result';
import AppBar from '../components/appbar';
import './payment.css';

function Payment() {
  const [home, setHome] = useState<Result[]>([]);

  return (
    <>
    <AppBar />
    <header className="header">
        <div className="container">
        </div>
      </header>
      <div className="payment-container"> 
        <div className="payment-container05">
          <form className="payment-form11">
          <h1>Payment</h1><br></br>
            <span className="payment-text03">กรุณาสแกนเพื่อชำระเงิน</span>
            <img
              src="https://sv1.picz.in.th/images/2023/03/03/etU5Fu.png"
              className="payment-image2"
            />
          </form>
        <div className="payment-container06">
          <h1 className="payment-text04">
          </h1>
          <text className="pay">
            ธนาคารกสิกรไทย : หมายเลขบัญชี 111-111-1111
          </text>
          <text className="pay">
            ชื่อบัญชี Activity-HUB
          </text>
          <text className="pay">
          กรุณาแนบไฟล์สลิปการโอนเงิน
          </text>
            <div className="limit-file">
              <text>(อัปโหลดไฟล์ไม่เกิน 2MB)</text>
            </div>
          <input type='file' id="myFile" name='filename'></input>
          <button className="button">ยืนยัน</button>
        </div>
      </div>
      </div>
    </>
  )
};

export default Payment;