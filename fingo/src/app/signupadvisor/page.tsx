import Image from "next/image";
import style from "./page.module.css";
import stairbg from "../../assets/img/bg-loginflow.svg";
import { IoIosArrowDropright } from "react-icons/io";

interface BackgroundPositionProps {
  variant: "left" | "right";
}

export function Background({ variant }: BackgroundPositionProps) {
  return (
    <div className={`${style.background} ${style[variant]}`}>
      <div className={style.rupee}>₹</div>
      <Image src={stairbg} alt="background image" className={style.image} />
    </div>
  );
}

export function Button({ text }: { text: string }) {
  return (
    <button className={style.button}>
      <span>{text}</span>
    </button>
  );
}

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.motto}>
        FinGo: The
        <br /> future of
        <br /> financial
        <br /> advising is
        <br /> here.
      </div>
      <div>
        <Background variant="left" />
      </div>

      <div className={style.signupcard}>
        <span className={style.heading}>Create an account </span>
        <span style={{ fontSize: "17px" }}>
          Choose if you are an Advisor or Client
        </span>
        <div>{Button({ text: "Advisor" })}</div>
        <div>{Button({ text: "Client" })}</div>
        <IoIosArrowDropright
          color="rgba(0, 233, 207, 1)"
          size={40}
          className={style.arrow}
        />
      </div>
    </div>
  );
}
