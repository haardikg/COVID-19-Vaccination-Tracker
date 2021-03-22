import React from 'react'
import { RiTestTubeFill } from 'react-icons/ri';

function Nav() {
    return (
        <div className="bg-green-300 h-20 flex justify-center items-center">
            <h1 className="text-4xl font-poppins">COVID-19 Vaccination Tracker</h1>
            <RiTestTubeFill className="w-8 h-8"/>
        </div>
    )
}

export default Nav
