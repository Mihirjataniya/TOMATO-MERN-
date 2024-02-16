import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-full top-0 fixed py-2 px-10 max-sm:px-4 z-10 bg-black items-center flex justify-between border-b border-gray-500 '>
            <div className='flex items-center justify-center'>
                <svg height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-4.3 -4.3 25.81 25.81" xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path fill="#fb1313" stroke="#1c1c1c" strokeWidth="0.6883199999999999" d="M12.889,2.805l-0.324,0.136c-0.497,0.208-0.791,0.479-1.044,0.753 c0.232,0.108,0.455,0.246,0.667,0.411c0.473,0.385,0.792,0.801,1.042,1.353l0.376,0.825l-0.9-0.111 c-0.645-0.078-1.077,0.066-1.496,0.205c-0.171,0.058-0.346,0.116-0.529,0.156c0.012,0.076,0.021,0.153,0.027,0.229 c0.04,0.456-0.021,0.919-0.179,1.376c-0.211,0.573-0.499,1.009-0.94,1.425L9.292,9.842L8.955,9.614 C8.454,9.273,8.099,8.888,7.804,8.365C7.607,7.997,7.48,7.621,7.426,7.235c-0.206,0.036-0.41,0.043-0.61,0.051 C6.376,7.303,5.92,7.32,5.345,7.622L4.542,8.045L4.601,7.14c0.039-0.604,0.19-1.105,0.492-1.625 c0.183-0.302,0.398-0.564,0.646-0.784c-0.057-0.05-0.113-0.102-0.168-0.153c-0.324-0.299-0.659-0.609-1.28-0.802l-0.867-0.27 l0.531-0.467C0.957,3.942,0,6.579,0,9.539c0,4.146,3.852,7.507,8.604,7.507c4.751,0,8.604-3.361,8.604-7.507 C17.208,6.483,16.105,3.58,12.889,2.805z"></path>
                                <path fill="#fb1313" d="M6.333,4.893C6.018,5.112,5.748,5.398,5.531,5.757c-0.213,0.366-0.385,0.79-0.424,1.402 C6.38,6.49,7.173,7.005,7.916,6.495C7.9,6.655,7.896,6.813,7.91,6.972c0.027,0.383,0.137,0.76,0.336,1.13 C8.454,8.471,8.731,8.834,9.24,9.179c0.446-0.421,0.662-0.824,0.809-1.222c0.138-0.396,0.187-0.785,0.152-1.168 c-0.021-0.249-0.078-0.495-0.167-0.738c0.805,0.116,1.377-0.563,2.733-0.396c-0.254-0.559-0.565-0.895-0.893-1.162 c-0.33-0.259-0.683-0.43-1.056-0.523c-0.077-0.02-0.153-0.034-0.232-0.046c0.47-0.394,0.772-1.041,1.783-1.463 c-0.499-0.359-0.936-0.497-1.353-0.565c-0.416-0.061-0.807-0.035-1.177,0.07c-0.37,0.102-0.72,0.281-1.046,0.546 C8.668,2.618,8.547,2.74,8.43,2.874C7.981,1.423,7.451,0.265,7.403,0.162L7.056,0.323c0.011,0.025,0.565,1.231,1.023,2.724 c-0.024-0.022-0.05-0.043-0.076-0.061C7.654,2.753,7.289,2.608,6.91,2.542C6.533,2.474,6.139,2.485,5.732,2.585 C5.323,2.694,4.902,2.872,4.44,3.277c1.225,0.381,1.515,1.157,2.19,1.437C6.528,4.769,6.428,4.827,6.333,4.893z M8.879,4.154 c0.005,0,0.01,0.003,0.014,0.004C8.875,4.166,8.856,4.176,8.838,4.185C8.851,4.175,8.865,4.165,8.879,4.154z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <h1 className='text-[44px] max-sm:text-[22px] text-red-600 font-Lobster'>Tomato</h1>
            </div>
            <div className='flex gap-5 text-xl max-sm:text-lg font-medium items-center'>
                <Link className={` ${location.pathname === '/' ? 'text-red-600' : 'hover:text-gray-300'} `} to={'/'}>Home</Link>
                {localStorage.getItem('authToken') ?
                    <>
                        <Link className={` ${location.pathname === '/cart' ? 'text-red-600' : 'hover:text-gray-300'}`} to={'/cart'}><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h9.8a2 2 0 0 0 1.92-1.61L23 6H6" />
                        </svg>

                        </Link>
                        <Link
                            className={` ${location.pathname === '/userProfile' ? 'text-red-600' : 'hover:text-gray-300'}`}
                            to={'/userProfile'}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="4" width="18" height="2" fill={`${location.pathname === '/userProfile' ? '#ff0000' : '#fff'}`} />
                                <rect x="3" y="10" width="18" height="2" fill={`${location.pathname === '/userProfile' ? '#ff0000' : '#fff'}`} />
                                <rect x="3" y="16" width="18" height="2" fill={`${location.pathname === '/userProfile' ? '#ff0000' : '#fff'}`} />
                            </svg>
                        </Link>

                    </>
                    :
                    <>
                        <Link className={` ${location.pathname === '/login' ? 'text-red-600' : 'hover:text-gray-300'}`} to={'/login'}>Login</Link>
                        <Link className={` ${location.pathname === '/signup' ? 'text-red-600' : 'hover:text-gray-300'}`} to={'/signup'}>Signup</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar
