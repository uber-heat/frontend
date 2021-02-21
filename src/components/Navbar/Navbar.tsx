import React from 'react'
import Logo from '../../assets/img/logo-transparent-long.png'

const Navbar: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 shadow-md">
        <div className="relative flex flex-row justify-between h-20">
          <div className=" inset-y-0 left-0 flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-black" aria-expanded="false">
              <svg className="block h-6 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="w-40">
              <img src={Logo} alt="Uber Heat" />
            </div>
          </div>
          <div className=" inset-y-0 right-0 m-6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex items-stretch">
            <button className="my-auto bg-gray-200 rounded-3xl p-2 text-sm h-10 self-center">
              <div className="flex flex-row justify-between">
                <div className="ml-2">
                  Livraison
                  </div>
                <div className="w-4 ml-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            <button className="my-auto bg-gray-200 rounded-3xl p-2 text-sm ml-6 h-10 self-center">
              <div className="flex flex-row justify-between">
                <div className="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className=" ml-4 mr-1">
                  84 rue de la République · Maintenant
                  </div>
              </div>
            </button>
            <div className="h-10 mr-2 mb-2 self-center">
              <div className="ml-6 flex items-center border-black bg-gray-100 ">
                <div className="w-6 flex items-center mx-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input type="text" className="bg-gray-100 py-4 focus:outline-none w-192" placeholder="De quoi avez-vous envie ?" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
