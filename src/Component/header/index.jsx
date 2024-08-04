import React from 'react'

function Header() {
  return (
    <nav className="flex justify-between items-center py-4 px-20 bg-white shadow-lg max-md:w-screen max-md:px-2 max-md:flex-col  ">
    <div className="text-black  text-2xl font-bold">yellowkitchen</div>
    <div className="space-x-10 flex   justify-between ">
      <button className="text-slate-500  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=' w-4 h-3 fill-slate-500 inline-block my-[6px]'>
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
        Log in</button>
      <button className=' text-slate-500  '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className=' w-4 h-3 fill-slate-500 inline-block'>
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        0</button>
      <div className=' w-8 h-8 rounded-full max-md:hidden  bg-slate-100 flex justify-center align-middle items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=' w-5 fill-slate-500'>
          <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" /></svg>
      </div>

    </div>
  </nav>
  )
}

export default Header