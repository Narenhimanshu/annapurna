import { useState } from "react";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const [showSignup, setShowSignup] = useState(false);

  const [showFeature, setShowFeature] = useState(false);
  return (
    <div className="h-screen  w-full bg-[url(./him.jpg)] bg-cover outline-none bg-center p-0  ">
      <div className=" h-17 text-white flex justify-between items-center font-sans ">
        <img
          src="./logo.png"
          height={60}
          width={60}
          className="ml-13"
          alt="logo"
        />

        <div className="flex gap-4 text-lg ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
        </div>
        <div className="flex gap-5 mr-13 text-lg font-semibold">
          <button
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
            }}
            className="cursor-pointer bg-[#ff4d4d] flex items-center px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
            className="cursor-pointer bg-[#ff4d4d] px-4 py-2 rounded-lg hover:bg-red-600"
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
          <div className=" bg-[#e5e5e5] h-[560px] w-[480px] rounded-lg px-10 py-9 flex flex-col gap-8">
            <div className="flex justify-between font-[Poppins] text-4xl font-semibold text-gray-700 ">
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
              className="text-lg border h-[60px] border-gray-500 rounded-md p-1.5 w-[100%] focus:border-green-500 outline-none"
            />
            <div className="flex justify-center items-center h-[70px] rounded-lg text-[17px]  w-[100%] bg-red-400 text-white cursor-pointer">
              <p>Send One Time Password</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-1 h-[1px] bg-gray-500"></div>
              <span className="px-1 text-gray-700 text-xl">or</span>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
            </div>

            <div className="flex flex-row justify-center px-10 items-center h-[70px] rounded-lg text-[17px]  w-[100%] border  cursor-pointer gap-1.5">
              <span className="">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-glyphs/30/FA5252/new-post.png"
                  alt="new-post"
                />
              </span>
              <p>Continue with Email</p>
            </div>

            {/* for google image */}

            <div className="flex items-center justify-center">
              <div className="flex  justify-center  items-center h-[41px] rounded-lg   w-full border  cursor-pointer gap-1.5">
                <img
                  className="h-[20px]"
                  src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                  alt="Google"
                />
                <p>Sign in with Google</p>
              </div>
            </div>
            {/* last line */}

            <div>
              <div className="flex-1 h-[1px] bg-gray-400"></div>
              <div className="flex-1 h-[1px] bg-gray-400"></div>
            </div>
            {/* last div */}

            <p className="text-[17px]">
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
          <div className=" bg-[#e5e5e5] h-[630px] w-[480px] rounded-lg px-10 py-5 flex flex-col gap-8">
            <div className="flex justify-between font-[Poppins] text-4xl font-semibold text-gray-700 ">
              <h2>Signup</h2>
              <span
                onClick={() => setShowSignup(false)}
                className="cursor-pointer"
              >
                ×
              </span>
            </div>
            <div className="flex flex-col gap-4 pt-0">
              <input
                type="text"
                placeholder="Full Name"
                className="text-lg border h-[60px] border-gray-500 rounded-md p-1.5 w-[100%] focus:border-green-500 outline-none py-1"
              />
              <input
                type="Email"
                placeholder="Email"
                className="text-lg border h-[60px] border-gray-500 rounded-md p-1.5 w-[100%] focus:border-green-500 outline-none py-1 "
              />
            </div>
            <div className="flex gap-2 justify-center items-center text-[13px]">
              <input
                type="checkbox"
                className=" h-6 w-6 rounded-[9px] accent-red-500 required"
              />
              <p>
                I agree to Annapurna{" "}
                <span className="text-red-500">
                  Terms of Service, Privacy Policy{" "}
                </span>{" "}
                <span>and</span>{" "}
                <span className="text-red-500">Content Policies</span>
              </p>
            </div>
            {/* for create account */}

            <div className="flex justify-center items-center h-[46px] rounded-lg text-[17px]  w-[100%] bg-gray-500/60 text-white cursor-pointer">
              <p>Create account</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-1 h-[1px] bg-gray-500"></div>
              <span className="px-1 text-gray-700 text-xl">or</span>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
            </div>

            {/* for login google */}
            <div className="flex items-center justify-center">
              <div className="flex  justify-center  items-center h-[41px] rounded-lg   w-full border  cursor-pointer gap-1.5">
                <img
                  className="h-[20px]"
                  src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                  alt="Google"
                />
                <p>Sign in with Google</p>
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
          <p className="  text-3xl font-semibold  ">𝘼𝙉𝙉𝘼𝙋𝙐𝙍𝙉𝘼</p>
        </div>

        <div className="bg-transparent border px-6 py-3 rounded-lg shadow-lg h-[50px] w-[600px] flex flex-row justify-between">
          <div>
            <input
              type="text"
              placeholder="Search food..."
              className="outline-none w-full h-full"
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
