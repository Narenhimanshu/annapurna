import { useState } from "react";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const [showSignup, setShowSignup] = useState(false);

  const [showFeature, setShowFeature] = useState(false);
  return (
    <div className="h-screen  w-full bg-[url(/him.jpg)] bg-cover outline-none bg-center p-0  ">
      <div className=" md:h-17 h-20 text-white flex justify-between items-center font-sans ">
        <img src="./logo.png" md:height={60} height={30} width={30} md:width={60} className="md:ml-13 ml-6" alt="logo" />

        <div className="flex md:gap-4 gap-1 md:text-lg text-[13px] ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
        </div>
        <div className="flex md:gap-5 gap-2 md:mr-13  md:text-lg text-[12px] font-semibold">
          <button
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
            }}
            className="cursor-pointer bg-[#ff4d4d] flex items-center md:px-4 px-1.5 md:py-2  md:rounded-lg rounded-[4px] hover:bg-red-600"
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
            className="cursor-pointer bg-[#ff4d4d] md:px-4 px-1.5 md:py-2 py-0.5 md:rounded-lg rounded-[4px] mr-6 hover:bg-red-600"
          >
            Signup
          </button>
        </div>
      </div>

      {/* {
          showFeature &&(
            <div className="h-full w-full bg-slate-700">
              <div className="h-full w-full bg-white">
             
              </div>
            </div>
          )
        } */}

      {/* for login button click */}
      {showLogin && (
        <div className="flex justify-center items-center fixed inset-0 bg-black">
          <div className=" bg-[#e5e5e5] md:h-[560px] h-[390px] md:w-[480px] w-[310px] md:rounded-lg rounded-[6px] md:px-10 px-6 md:py-9 py-5 flex flex-col md:gap-8 gap-4">
            <div className="flex justify-between font-[Poppins] md:text-4xl text-2xl font-semibold text-gray-700 ">
              <h2>Login </h2>
              <span
                onClick={() => setShowLogin(false)}
                className="cursor-pointer"
              >
                ×
              </span>
            </div>
            <input
              type="digit"
              placeholder="Phone"
              className="md:text-lg text-[15px] border md:h-[60px] h-[40px] border-gray-500 md:rounded-md rounded-md md:p-1.5 p-1 w-[100%] focus:border-green-500 outline-none"
            />
            <div className="flex justify-center items-center md:h-[60px] h-[40px] md:rounded-lg rounded-md md:text-xl text-[14px]  w-[100%] bg-red-400 text-white cursor-pointer">
              <p>Send One Time Password</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-1 h-[1px] bg-gray-500"></div>
              <span className="px-1 text-gray-700 md:text-xl text-sm">or</span>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
            </div>

            <div className="flex flex-row justify-center md:px-10 items-center md:h-[60px] h-[40px] md:rounded-lg rounded-md md:text-xl text-[14px]  w-[100%] border  cursor-pointer gap-1.5">
              <span className="">
                <img
                  md:width="25" width={17}
                  md:height="25" height={17}
                  src="https://img.icons8.com/ios-glyphs/30/FA5252/new-post.png"
                  alt="new-post"
                />
              </span>
              <p>Continue with Email</p>
            </div>

            {/* for google image */}

            <div className="flex items-center justify-center">
              <div className="flex  justify-center  items-center md:h-[60px] h-[40px] md:rounded-lg rounded-md   w-full border  cursor-pointer gap-1.5">
                <img
                  className="md:h-[20px] h-[17px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh1Kyfo9hJplmkiOKcHD9XcpUvlJaZrh5ZA&s"
                  alt="Google"
                />
                <p className="text-14px">Sign in with Google</p>
              </div>
            </div>
            {/* last line */}

            <div>
              <div className="flex-1 h-[1px] bg-gray-400"></div>
              <div className="flex-1 h-[1px] bg-gray-400"></div>
            </div>
            {/* last div */}

            <p className="md:text-[17px] text-[16px]">
              New to Annapurna?{" "}
              <span
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
                className="text-red-600 cursor-pointer"
              >
                Create account
              </span>
            </p>
          </div>
        </div>
      )}

      {/* click on Signup */}

      {showSignup && (
        <div className="flex justify-center items-center fixed inset-0 bg-black/70">
          <div className=" bg-[#e5e5e5] md:h-[630px]  md:w-[480px] w-[320px] md:rounded-lg rounded-md md:px-10 px-6 md:py-5 py-3 flex flex-col md:gap-8 gap-5">
            <div className="flex justify-between font-[Poppins] md:text-4xl text-2xl font-semibold text-gray-700 ">
              <h2>Signup</h2>
              <span
                onClick={() => setShowSignup(false)}
                className="cursor-pointer"
              >
                ×
              </span>
            </div>
            <div className="flex flex-col md:gap-4 gap-2 pt-0">
              <input
                type="text"
                placeholder="Full Name"
                className="md:text-lg text-[15px] border md:h-16 h-10 border-gray-500 rounded-md p-1.5 w-[100%] focus:border-green-500 outline-none md:py-1 py-0.5"
              />
              <input
                type="Email"
                placeholder="Email"
                className="md:text-lg text-[15px] border md:h-16 h-10 border-gray-500 rounded-md p-1.5 w-[100%] focus:border-green-500 outline-none md:py-1 py-0.5 "
              />
            </div>
            <div className="flex gap-2 justify-center items-center md:text-[13px] text-xs">
              <input
                type="checkbox"
                className=" h-6 w-6 rounded-[9px] accent-red-500 required"
              />
              <p>
                I agree to Annapurna{" "}
                <span className="text-red-500">
                  Terms of Service, Privacy Policy{" "}
                </span>
                <span>and</span>{" "}
                <span className="text-red-500">Content Policies</span>
              </p>
            </div>
            {/* for create account */}

            <div className="flex justify-center items-center md:h-16 h-10 md:rounded-lg rounded-md md:text-[17px]  w-[100%] bg-gray-500/60 text-white cursor-pointer">
              <p>Create account</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-1 h-[1px] bg-gray-500"></div>
              <span className="px-1 text-gray-700 md:text-xl text-[17px]">or</span>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
            </div>

            {/* for login google */}
            <div className="flex items-center justify-center">
              <div className="flex  justify-center  items-center md:h-[41px] h-10 md:rounded-lg rounded-md   w-full border  cursor-pointer gap-1.5">
                <img
                  className="md:h-5 h-[19px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh1Kyfo9hJplmkiOKcHD9XcpUvlJaZrh5ZA&s"
                  alt="Google"
                />
                <p className="md:text-2xl text-[16px]">Sign in with Google</p>
              </div>
            </div>
            {/* for line */}
            <div>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
            </div>

            <p className="py-0">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setShowLogin(true);
                  setShowSignup(false);
                }}
                className="text-red-400 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}

      <div className="bg-transparent h-screen w-full text-white flex justify-center items-center flex-col">
        <div className="">
          <p className="  md:text-3xl text-2xl font-semibold  ">𝘼𝙉𝙉𝘼𝙋𝙐𝙍𝙉𝘼</p>
        </div>

        <div className="bg-transparent border px-6 py-3 rounded-lg shadow-lg h-[50px] md:w-[600px] w-[300px] flex flex-row justify-between">
          <div>
            <input
              type="text"
              placeholder="Search food..."
              className="outline-none md:w-full w-[80%] h-full"
            />
          </div>
          {/* <div className="bg-red-400 flex justify-center items-center h-[50px] w-[50px]">
            <span>
              <img height={50} width={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSIblY4OhYsM1ak8YYftISWUK3vL0lfdy6Q&s"
                alt=""
              />
            </span>
          </div> */}
        </div>
      </div>

      {/* show feature */}
    </div>
  );
};

export default Navbar;
