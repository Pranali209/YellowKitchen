import React from 'react'
import burger from '../../assets/burger.png'

import bagel from '../../assets/bagel.png';

import chicken from '../../assets/chicken.png';
import fish from '../../assets/fish.png';
import fishnchips from '../../assets/fishnchips.png';

import pizza from '../../assets/pizza.png';
import raviolli from '../../assets/raviolli.png';
import vegan from '../../assets/vegan.png';
function Specials() {
  const images =[
    { id: 0, src: bagel ,name: "Bagel" },

  { id: 2, src: burger , name: "Burger" },
  { id: 3, src: chicken ,name: "Chicken" },
  { id: 4, src: fish ,name: "Fish"},
  { id: 5, src: fishnchips,name: "Fish Chips" },

  { id: 11, src: pizza ,name: "Pizza"},
  { id: 12, src: raviolli ,name: "Pasta"},
  { id: 13, src: vegan ,name: "Salads"},
  ]
  return (
    <div className=' my-3 p-16 max-md:p-6'>
    <div className=' flex justify-between pb-6'>
     <h1 className=' text-primary text-2xl '>Specialities </h1>
    <button className=' border-2 border-yellow-400 p-2  bg-slate-100 text-primary'>Show All</button>
    </div>
    <div className=' flex max-md:flex-wrap '>
           {
            images.map((image) => {
                return (
                    <div key={image.id} className=' m-2  flex border-1 shadow-md w-[25%] justify-center align-middle items-center flex-col '>
                        <img src={image.src} alt="image" className=' 
                         rounded-md '/>
                         <p className='text-sm text-primary py-4'>{image.name}</p>
                        </div>
                        )
           }
        )
    }
        </div>
        </div>
  )
}

export default Specials