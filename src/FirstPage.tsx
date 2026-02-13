import React from 'react';
import { Link } from 'react-router-dom';

function changeButtonPosition() {
  const noButton = document.getElementById('no') as HTMLButtonElement;

  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
  noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;

}

export default function FirstPage(): React.ReactElement {
    return (
    <>
        <h1 className="select-none text-4xl font-bold text-center pt-20 text-pink-600">Happy Valentine's Day!</h1>
        <img className='cursor-none' src="https://media.tenor.com/KTx1WW-lmfUAAAAi/peach-and-goma-peach-goma.gif" />
        <h1 className="select-none text-2xl font-bold text-center text-pink-600">Will you be my Valentine?</h1>
        <div>
            <Link to="/Valentine/sec" id="yes" className="select-none cursor-pointer px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300">Yes</Link>
            <button onClick={changeButtonPosition} onMouseEnter={changeButtonPosition} id="no" className="select-none cursor-pointer px-6 py-3 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors duration-300 ml-4">No</button>
        </div>
    </>
    )
}