// Title of portfolio

import React from "react"

function Title() {
    return <div className=" mt-20 md:flex md:justify-center md:items-end" id="title">

        <div className="flex justify-center">
            <img className=" rounded-full w-40 md:h-48" src="../pics/personal.jpg" alt="personal-pic" />
        </div>

        <div className="text-center mt-8 md:pl-12 md:text-left">
            <p>Hi, my name is</p>
            <h1 className=" text-heading text-2xl font-semibold py-3 md:text-3xl">Shady Hussein</h1>
            <p>I'm a frontend web developer</p>
            <p>I like building useful projects</p>
            <i><p className="font-semibold mt-6">You can find a sample of my work on Github</p></i>
        </div>

    </div>
}

export default Title