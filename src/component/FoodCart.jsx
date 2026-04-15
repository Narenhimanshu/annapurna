import { useState } from "react";

const FoodCart = ({ imageUrl, rating, price, foodName }) => {
  const [countFood, setFoodCount] = useState(0);
  return (
    <div className="">
      <div className=" relative left-0 w-full group overflow-hidden rounded-2xl cursor-pointer px-2 py-15 ">
        <img
          src={imageUrl}
          className="bg-cover object-cover h-100 w-full group-hover:scale-110 transition duration-500 cursor-pointer py-2 rounded-3xl"
        />

        <div className="absolute  w-[95%] flex  justify-between items-center  py-2 ">
          {countFood === 0 ? (
            <>
              <div className="absolute h-10 w-full  text-white ">
                <div className="   flex justify-between">
                  <span className="text-yellow-500 text-3xl font-semibold pl-2">
                    ₹{countFood == 0 ? price : price * countFood}
                  </span>
                  <button
                    onClick={()=>{setFoodCount(1)}}
                    className=" right-6 bg-red-500 px-4 py-1.5 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer"
                  >
                    Add +
                  </button>
                </div>

                <div className="text-white text-2xl font-bold flex justify-between px-3">
                  {foodName}
                  <span className="text-yellow-400">{rating}⭐</span>
                </div>
              </div>
            </>
          ) : (
            <div className=" absolute bottom-6 left-0 w-full flex justify-center items-center">
              <div className="  bg-slate-700/90   flex justify-center h-50 w-90 gap-2 rounded-2xl">
                <div className="flex pt-5">
                  <img src={imageUrl} className="h-40 w-40 rounded-[10px]" />
                </div>

                <div className="flex  flex-col pt-4">
                  <div className="flex gap-6">
                    <p className="text-gray-300 font-semibold text-xl">
                      {foodName}
                    </p>
                    <span
                      onClick={() => {
                        setFoodCount(0);
                      }}
                      className="text-red-500 font-black text-xl"
                    >
                      ✕
                    </span>
                  </div>
                  <div className="text-white flex justify-between items-center font-semibold px-3">
                    <span>Price : </span>
                    <span> ₹ {price}</span>
                  </div>
                  <div className="flex justify-between items-center text-3xl font-semibold text-white px-2">
                    <button
                      onClick={()=>{setFoodCount(countFood-1)}}
                      className="  bg-red-800  px-3 rounded-md "
                    >
                      -
                    </button>
                    <span className="bg-transparent px-3 ">{countFood}</span>
                    <button
                      onClick={()=>{setFoodCount(countFood+1)}}
                      className=" bg-green-500 px-3 rounded-md "
                    >
                      +
                    </button>
                  </div>

                  <div className="text-white font-semibold text-2xl flex mt-3">
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
