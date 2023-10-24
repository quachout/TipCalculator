import React from "react";
import Tipping from "./Tipping";
// import goatHero from "../images/goatHero.jpg"
const Hero = () => {
    return (
        <div className='w-full h-screen relative overflow-hidden'>
            {/* <img src={goatHero} alt="hero" /> */}
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.unsplash.com/photo-1697621666147-5e607c3c4a38?auto=format&fit=crop&q=80&w=1213&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />

            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>

            <div className=" absolute top-0 w-full h-full text-white">
                <div className='mx-auto max-w-[600px] p-4'>
                    <h1 className="font-bold text-3xl md:text-5xl mt-5 drop-shadow-2xl text-center">Tip Calculator</h1>

                    <Tipping />

                    {/* <button className=" text-white">Submit</button> */}
                </div>
            </div>

            <div className="absolute bottom-0 right-0 p-2 text-white">
                <p className="text-[10px] ">Coded with &lt;3 <a href='https://chrisquach.com' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline'}}>Christopher Wu Quach</a></p>
            </div>
        </div>
    )
}

export default Hero