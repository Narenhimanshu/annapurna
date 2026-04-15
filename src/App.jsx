import React from 'react'
import Navbar from './component/Navbar'
import FoodCart from './component/FoodCart'

const foods=[
  {
    id:1,
    foodName:"Delicious Pizza",
    imageUrl:"./pizza1.jpg",
    rating:5.1,
    price:240
  },
  {
    id:2,
    foodName:" Healthy Pizza",
    imageUrl:"./pizza2.jpg",
    rating:4.9,
     price:250
  },
  {
    id:3,
    foodName:"Paner Pizza",
    imageUrl:"./pizza3.jpg",
    rating:4.8,
     price:200
  },
  {
    id:4,
    foodName:"Spicy Pizza",
    imageUrl:"./pizza4.jpg",
    rating:4.7,
     price:220
  },
  {
    id:5,
    foodName:"Soft Burger",
    imageUrl:"./alan.jpg",
    rating:4.6,
    price:210
  },
  {
    id:6,
    foodName:"Paneer Burger",
    imageUrl:"./burger.jpg",
    rating:4.5,
    price:200
  },
  {
    id:7,
    foodName:"Soft Burger",
    imageUrl:"./burger2.jpg",
    rating:5.1,
     price:180,
  },
  {
    id:8,
    foodName:"Butter Mushroom",
    imageUrl:"./butterM.jpg",
    rating:4.2,
    price:200
  },
  {
    id:9,
    foodName:"Chilli Paneer",
    imageUrl:"./ChilliPaneer.jpg",
    rating:4.2,
     price:500
  },
  {
    id:10,
    foodName:"Butter Mushroom1",
    imageUrl:"./mushroom2.jpg",
    rating:4.0,
     price:400
  },
  {
    id:11,
    foodName:"Mutter Mushroom",
    imageUrl:"./mushroom3.jpg",
    rating:3.2,
     price:250
  },
  {
    id:12,
    foodName:"Rajma-Chawal2",
    imageUrl:"./rajamaChawal.jpg",
    rating:2.2,
     price:150
  },
  // {
  //   id:13,
  //   foodName:"Rajma-Chawal",
  //   imageUrl:"./Rajma-Chawal2.jpg",
  //   rating:3.9,
  //   price:230
  // },

];

 const features=[
      {
        id:1,
        paragraph:"Order your favorite food quickly with an easy-to-use interface."
      },
      {
        id:2,
        paragraph:"Add or remove items from the cart with real-time price updates."
      },
      {
        id:3,
        paragraph:"Explore a wide variety of dishes with smart search and filters."
      },
      {
        id:4,
        paragraph:"Enjoy secure payment options like UPI, cards, and cash on delivery."
      },
      {
        id:5,
        paragraph:"Track your order live from preparation to delivery."
      },
      {
        id:6,
        paragraph:"Check ratings and reviews before placing your order."
      },
      {
        id:7,
        paragraph:"Get fast delivery with estimated time and easy reordering from history."
      }
    ]

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-3 md:grid-cols-4 bg-slate-900  gap-3">
        {
          foods.map((food)=>(
            <FoodCart
            key={food.id}
            foodName={food.foodName}
            imageUrl={food.imageUrl}
            rating={food.rating}
            price={food.price}
            />
          ))
        }
      </div>
    </div>
    
    
  )
}

export default App