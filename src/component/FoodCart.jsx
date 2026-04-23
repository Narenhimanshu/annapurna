import { useState } from "react";

const FoodCart = ({ imageUrl, rating, price, foodName }) => {
  const [countFood, setFoodCount] = useState(0);
  return (
    <div className="">
      <div className=" relative left-0 w-full group overflow-hidden md:rounded-2xl cursor-pointer md:px-2 px-1 md:py-15 py-6 ">
        <img
          src={imageUrl}
          className="bg-cover object-cover md:h-100 h-60  w-full group-hover:scale-110 transition duration-500 cursor-pointer md:py-2 p-1 md:rounded-3xl rounded-2xl"
        />

        <div className="absolute  w-[95%] flex  justify-between items-center  md:py-2 py-4 ">
          {countFood === 0 ? (
            <>
              <div className="absolute md:h-10  w-full  text-white ">
                <div className="   flex justify-between pr-2">
                  <span className="text-yellow-500 md:text-3xl text-xl font-semibold md:pl-2 pl-1.5">
                    ₹{countFood == 0 ? price : price * countFood}
                  </span>
                  <button
                    onClick={()=>{setFoodCount(1)}}
                    className=" md:right-6 bg-red-500 md:px-4 px-1.5  md:py-1.5 md:rounded-lg rounded-md shadow-md hover:bg-red-600 transition cursor-pointer pr-0"
                  >
                    Add +
                  </button>
                </div>

                <div className="text-white md:text-2xl text-[20px] font-bold flex justify-between md:px-3 px-1.5">
                  {foodName}
                  <span className="text-yellow-400">{rating}⭐</span>
                </div>
              </div>
            </>
          ) : (
            <div className=" absolute md:bottom-6 bottom-3  w-full flex justify-center items-center">
              <div className="  bg-slate-700/90   flex justify-center md:h-50 h-40 w-38 md:w-90 md:gap-2 gap-0.5 md:rounded-2xl rounded-xl">
                <div className="flex md:pt-5 pt-2">
                  <img src={imageUrl} className="md:h-40 h-30 w-30 md:w-40 md:rounded-[10px] rounded-md" />
                </div>

                <div className="flex  flex-col md:pt-4 pt-2">
                  <div className="flex md:gap-6 px-2 gap-4">
                    <p className="text-gray-300 font-semibold md:text-xl text-[15px]">
                      {foodName}
                    </p>
                    <span
                      onClick={() => {
                        setFoodCount(0);
                      }}
                      className="text-red-500 font-black md:text-xl text-[15px]"
                    >
                      ✕
                    </span>
                  </div>
                  <div className="text-white flex justify-between items-center font-semibold md:px-3">
                    <span>Price : </span>
                    <span>₹ {price} </span>
                  </div>
                  <div className="flex justify-between items-center md:text-3xl text-2xl font-semibold text-white md:px-2 px-1 ">
                    <button
                      onClick={()=>{setFoodCount(countFood-1)}}
                      className="  bg-red-800  md:px-3 px-2 md:rounded-md rounded-[4px] "
                    >
                      -
                    </button>
                    <span className="bg-transparent md:px-3 px-2">{countFood}</span>
                    <button
                      onClick={()=>{setFoodCount(countFood+1)}}
                      className=" bg-green-500 md:px-3 px-2 md:rounded-md rounded-[4px] "
                    >
                      +
                    </button>
                  </div>

                  <div className="text-white font-semibold md:text-2xl  flex md:mt-3 mt-1 px-0">
                    <p>
                      Total : <span>₹ {price * countFood}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
