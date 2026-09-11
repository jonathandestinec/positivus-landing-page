import Image from 'next/image'
import React from 'react'

const Nav = () => {


    return (
        <nav className="px-25 flex items-center justify-between mt-15 bg-white w-full">

            <div>
                <Image src="/assets/logoname.png" alt="Logo" width={219.54} height={50} />
            </div>

            {/* Links and CTA */}

            <div className=' flex items-center justify-between gap-10'>

                {/* Links */}
                <div>
                    <ul className=' flex items-center justify-evenly gap-4'>
                        <li className=' inline-block px-4 py-2 text-[20px] text-black font-normal cursor-pointer'>About us</li>
                        <li className=' inline-block px-4 py-2 text-[20px] text-black font-normal cursor-pointer'>Services</li>
                        <li className=' inline-block px-4 py-2 text-[20px] text-black font-normal cursor-pointer'>Use Cases</li>
                        <li className=' inline-block px-4 py-2 text-[20px] text-black font-normal cursor-pointer'>Pricing</li>
                        <li className=' inline-block px-4 py-2 text-[20px] text-black font-normal cursor-pointer'>Blog</li>
                    </ul>
                </div>

                {/* CTA */}
                <div>
                    <button className=' bg-none border border-black text-black px-8.75 py-5 rounded-[14px] cursor-pointer'>
                        <h4  className='text-[20px]'>Request a quote</h4>
                    </button>
                </div>

            </div>

        </nav>
    )



}

export default Nav