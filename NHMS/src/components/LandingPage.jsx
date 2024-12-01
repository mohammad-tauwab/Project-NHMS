import { Link } from "react-router-dom";
import style from "../assets/css/App.module.css";
import logo from "../assets/images/logo.png";
import Animation from "./Animation";

function LandingPage() {
  return (
    <>
      <div className="flex w-full container m-auto bg-white">
        <div className="hidden md:block">
          <Animation></Animation>
        </div>
        <div className={`w-full h-full relative mx-0 text-center overlay`}>
          <div
            className={`border-2 ${style.landingcontainer} border-black w-[400px] h-[500px] absolute
            top-[50%] left-[50%] -translate-x-[50%] translate-y-[10%]
            md:translate-x-0 md:top-[10%] md:left-[55%] 
            hover:rounded-[50px] hover:bg-white hover:shadow-xl hover:shadow-black text-center
            p-3`}
            id="overlay"
          >
            <div className={`${style.overlay}`}>
              <div className={`my-[40%] ${style.title}`}>
                XYZ NURSING HOME <br />
                <span className={`${style.tagline}`}>
                  This is my tagline
                </span>{" "}
                <br />
                <span className={``}>This is the message of the firm </span>
              </div>
            </div>

            <img
              src={logo}
              alt=""
              className={`text-center m-auto mt-3 w-[100px]`}
            />
            <form action="" className="mt-2 p-2 bg-transparent">
              <fieldset className="border-[1px] border-slate-400 p-1 rounded-lg">
                <legend>Verify Your identity</legend>
                <input
                  type="text"
                  name="loginid"
                  placeholder="Login ID"
                  className="w-[80%] p-1 bg-transparent ml-2 text-[15px] mt-2"
                />
                <input
                  type="password"
                  name="pwd"
                  className="w-[80%] p-1 bg-transparent ml-2  text-[15px]"
                  placeholder="Password"
                />
                <Link
                  to="/main"
                  name="loginID"
                  className=" px-2 mt-4 mb-2 border-slate-400 border-[1px] hover:rounded-2xl hover:bg-blue-400 "
                >
                  Submit
                </Link>
              </fieldset>
            </form>
          </div>
        </div>
        <span
          className={`maintitle absolute left-[40%] bottom-[0%] text-cneter ${style.maintitle} text-[25px]
          translate-x-0 md:text-[45px] mt-4`}
        >
          @aayu consulatncy
        </span>
      </div>
    </>
  );
}
export default LandingPage;
