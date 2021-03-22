import React from 'react'
import { RiTestTubeFill } from 'react-icons/ri';

function Nav() {
    return (
        <div className="bg-green-300 h-20 flex justify-center items-center">
            <h1 className="sm:text-4xl text-3xl font-bold font-poppins">COVID-19 Vaccination Tracker</h1>
            <RiTestTubeFill className="w-8 h-8 hidden sm:inline"/>
        </div>
    )
}

export default Nav
