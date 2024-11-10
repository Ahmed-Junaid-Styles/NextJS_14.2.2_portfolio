import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-gray-300 py-20' id='contact'>
        <div className='w-9/12 mx-auto'>
            <h2 className='text-center text-3xl py-3'>Let&apos;s Work Together!</h2>
            <div className='text-center text-xl py-2'>Connections made in the workplace, which are helpful for career and business growth.</div>
            <div className='flex flex-col'>
            <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' placeholder='First Name' type="text" />
            <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' placeholder='Last Name' type="text" />
            <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' placeholder='Email Address' type="text" />
            <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' placeholder='Phone number' type="text" />
            <select name="" id="" className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12'>
              <option value="a" disabled>Select an option</option>
              <option value="a" >Frontend Development</option>
              <option value="a" >Backend Development</option>
              <option value="a" >Full Stack Development</option>
            </select>
            <textarea name="" id="" placeholder='Enter message' className='xlg:min-h-12 xlg:text-lg min-h-12 w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm sm:min-h-10 xsm:w-9/12 2xs:w-9/12'></textarea>
            <button className='w-3/12 mx-auto bg-gray-700 text-white px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-base xlg:text-lg xsm:w-9/12 2xs:w-9/12'>Send Message</button>
            
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-3/12 bg-green-500 text-white my-3 py-2 rounded-lg sm:w-6/12 xsm:w-9/12 2xs:w-9/12'>
                <div className='text-center text-xl text-gray-700 font-bold sm:text-lg xlg:text-xl xsm:text-base 2xs:text-base'>Phone Number</div>
                <div className='text-center text-lg sm:text-base xlg:text-lg xsm:text-sm 2xs:text-xs'>+92 347 1240 769</div>
              </div>
              <div className='w-3/12 bg-green-500 text-white my-3 py-2 rounded-lg sm:w-6/12 xsm:w-9/12 2xs:w-9/12'>
                <div className='text-center text-xl text-gray-700 font-bold sm:text-lg xlg:text-xl xsm:text-base 2xs:text-base'>Email Address</div>
                <div className='text-center text-lg sm:text-sm xlg:text-lg xsm:text-sm 2xs:text-xs'> ahmedjunaidstyles@gmail.com</div>
              </div>
              <div className='w-3/12 bg-green-500 text-white my-3 py-2 rounded-lg sm:w-6/12 xsm:w-9/12 2xs:w-9/12'>
                <div className='text-center text-xl text-gray-700 font-bold sm:text-lg xlg:text-xl xsm:text-base 2xs:text-base'>Address</div>
                <div className='text-center text-lg sm:text-base xlg:text-lg xsm:text-sm 2xs:text-xs'>Landhi, Karachi, Pakistan</div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default ContactUs