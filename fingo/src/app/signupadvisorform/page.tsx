import { Background, Button } from "../signupadvisor/page";
import style from "./page.module.css";
import { Input } from "@nextui-org/input";

export default function Page() {
  return (
    <div className={style.container}>
      <div>
        <Background variant="left" />
      </div>
      <div className={style.formcontainer}>
        <div className={style.signupcard}>
          <div className={style.heading}>Create an account - Advisor</div>
          <div>Welcome to FinGo!</div>
          <div className={style.inputContainer}>
            <div className={style.inputRows}>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
            </div>
            <div className={style.inputRows}>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
            </div>

            <div className={style.inputRows}>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
            </div>
            <div className={style.inputRows}>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.input} />
              </div>
              <div className={style.inputStyle}>
                <label>First Name</label>
                <input className={style.inputCertificate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
