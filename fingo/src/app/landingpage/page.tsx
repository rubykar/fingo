import NavBar from "@/components/navbar/navBar";
import style from "./page.module.css";
import Image from "next/image";
import fin from "../../assets/img/fingoMobile.svg";

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.rupee}>₹</div>
      <NavBar />
      <div className={style.middle}>
        <div className={style.motto}>
          Find the perfect <br />
          financial advisor <br />
          for your unique
          <br /> needs.
        </div>
        <div className="landingpage-image">
          <Image src={fin} width={554} height={580} alt="hello" />
        </div>
      </div>
    </main>
  );
}
