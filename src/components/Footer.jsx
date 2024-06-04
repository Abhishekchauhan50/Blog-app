import React from 'react'

function Footer() {
  return (
    <>
    <footer className="flex w-full flex-col flex-wrap justify-between items-center py-8 px-4 bg-zinc-800 text-gray-300">
        <div className="flex flex-col space-y-4 lg:space-x-4">
            <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold text-white">PRASANG</h2>
            <h2 className=" font-bold text-white">Where Curiosity Meets Connection</h2>
            <p className="text-sm">Uncover a world of perspectives, engage in meaningful conversations, and be inspired by the journey.</p>
            </div>
            <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-bold text-white">Follow Us</h3>
            
            </div>
            <nav className="mt-4 lg:mt-0">
            <ul className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4">
                <li>
                <a href="https://www.instagram.com/preabhisheklization/" className="text-gray-300 hover:text-white">
                <i className="ri-instagram-fill"></i>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/abhishek-chauhan-94a011229/" className="text-gray-300 hover:text-white">
                <i className="ri-linkedin-box-fill"></i>
                </a>
                </li>
                <li>
                <a href="https://twitter.com/Abhishe31924145" className="text-gray-300 hover:text-white">
                    <i className="ri-twitter-x-fill"></i>
                </a>
                </li>
                <li>
                <a href="https://github.com/Abhishekchauhan50" className="text-gray-300 hover:text-white">
                <i className="ri-github-fill"></i>
                </a>
                </li>
                
            </ul>
            </nav>
            
        </div>
        <div className="mt-4 lg:mt-0 text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Your Blog Name. All Rights Reserved.
        </div>
    </footer>
    </>
  )
}

export default Footer