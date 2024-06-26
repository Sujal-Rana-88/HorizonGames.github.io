import React from 'react'

const Email = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b] '>
    <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1>
                    Contact us for any query
                </h1>

                <p>
                    Sign Up today to stay updated with new game launches
                </p>
            </div>
            <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type='email'
                        placeholder='email'
                        className='p-3 flex w-full rounded-md text-black' />       

                        <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none py-3'>
                               Notify me                 
                        </button> 
                    </div>
                    <p>
                        We are concerened about the security of your data ,Read{" "}
                    <span className='text-[#00df9a] underline'>
                            Privacy policy
                    </span>
                    </p>
            </div>
            <hr className='my-8 bg-gray-700 border-1'/>

    </div>
      
    </div>
  )
}

export default Email
