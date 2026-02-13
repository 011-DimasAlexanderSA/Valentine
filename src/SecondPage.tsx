import React from "react";
import { Link } from "react-router-dom";
export default function SecondPage(): React.ReactElement{
    return (
        <>
            <img className="cursor-none" src="https://media.tenor.com/FEQRi1Y4PZgAAAAM/swing-grey-cat.gif" />
            <h1 className="select-none text-2xl font-bold text-center pt-20 text-pink-600">I knew you'd say yes! 💖</h1>
            <Link to="/Valentine/third" className="select-none block bg-pink-500 text-center mt-4 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 py-2 px-6">Next</Link>
        </>

    )
}

