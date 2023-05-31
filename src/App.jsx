import "./App.css";
import { GiEarthAmerica } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto bg-slate-300 min-h-[610px] my-3 flex relative">
        <div className="min-w-[620px] min-h-[555x] bg-black rounded-xl text-white">
          <div>
            <h1 className=" mt-6 ml-5 text-3xl tracking-2 w-[64px] h-[22px] ">
              exo
            </h1>
          </div>
          <div className="text-3xl mt-[220px] ml-5">
            <span className=" font-bold">100% Uptime😎</span> <br />
            <span className=" text-slate-400 my-5 text-[27px]">
              Zero Infrastructure{" "}
            </span>{" "}
            <br />
            <span className=" text-slate-400 my-5 text-[27px]">Management</span>
          </div>

          <div className="flex justify-between absolute bottom-7 ml-5 text-sm ">
            <div className="flex items-center gap-2">
              <GiEarthAmerica /> aesthisia.com
            </div>
            <div className="flex items-center gap-2 ml-[390px]">
              <AiFillLinkedin /> <BsFacebook /> <BsInstagram />
            </div>
          </div>
        </div>
        <div className="center justify-center">
          <div>
            <div className=" ml-44 mt-28  text-center">
              <h1 className="text-3xl font-semibold ">
                Welcome <samp className="text-green-800">back!</samp>
              </h1>

              <div>Glad to see you, Again!</div>
            </div>
          </div>

          <div className=" ml-44 mt-4  text-center">
            <input
              type="email"
              name=""
              id=""
              className="w-64 rounded-md p-2 my-5"
              placeholder="Enter your email"
            />
            <br />{" "}
            <input
              type="password"
              name=""
              id=""
              className="w-64 rounded-md p-2 "
              placeholder="Enter your password"
            />
            <h1 className="ml-32 text-sm">Forgot Password?</h1>
            <button className="w-64 rounded-md p-3 bg-black text-white my-9">Log In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
