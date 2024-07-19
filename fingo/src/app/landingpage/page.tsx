import NavBar from "@/components/navbar/navBar";
import style from "./page.module.css";
import Image from "next/image";
import fin from "../../assets/img/fingoMobile.svg";
import Capsule from "@/components/capsule/capsule";

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.rupee}>₹</div>
      <div className={style.navRow}>
        <div className={style.navWrapper}>
          <NavBar />
        </div>
        <div className={style.capsuleRow}>
          <Capsule text="SignUp" variant="small" />
          <Capsule text="Login" variant="small" />
        </div>
      </div>
      <div className={style.middle}>
        <div className={style.mottoStarted}>
          <div className={style.motto}>
            Find the perfect <br />
            financial advisor <br />
            for your unique
            <br /> needs.
          </div>
          <div className={style.getStarted}>
            <Capsule text="Get Started"variant="medium" />
          </div>
        </div>
        <div className="landingpage-image">
          <Image src={fin} width={554} height={580} alt="hello" />
        </div>
      </div>
    </main>
  );
}
