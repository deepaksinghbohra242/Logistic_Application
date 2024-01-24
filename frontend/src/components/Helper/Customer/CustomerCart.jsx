import React from 'react';
import Boxx from '../../../assets/image/Boxx.jpg';

const CustomerCart = () => {
  return (
    <>

      <div className="container w-2/3 mt-20">
        <div className="pointer-events-auto w-full h-screen">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only"></span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={Boxx} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">delivery form uk</a>
                            </h3>
                            <p className="ml-4">$90.00</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">etc</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">truck</p>

                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Summary</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={Boxx} alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">bed delivery</a>
                            </h3>
                            <p className="ml-4">$32.00</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Blue</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500"> mini truck</p>

                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Summary</button>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout Orders</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                   <span>or</span>
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                     Continue
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerCart