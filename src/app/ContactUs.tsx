"use client"
import React, { useState } from 'react'

const ContactUs = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError]: any[] = useState([])
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('First Name:', firstName)
    console.log('Last Name:', lastName)
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    // Check if the phone number is provided
    if (!phone || phone.trim() === "") {
      setError(["Phone number is required."]);
      return; // Prevent submission if phone number is empty
    }
  
    const res = await fetch('/api/contact/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });
  
    const { msg, success } = await res.json();
  
    // Update error/success based on the backend response
    setError(msg);
    setSuccess(success);
  
    if (success) {
      // Reset form fields if successful
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <div className='bg-gray-300 py-20' id='contact'>
      <div className='w-9/12 mx-auto'>
        <h2 className='text-center text-3xl py-3'>Let&apos;s Work Together!</h2>
        <div className='text-center text-xl py-2'>Connections made in the workplace, which are helpful for career and business growth.</div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='First Name' type="text" />
          <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Last Name' type="text" />
          <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email Address' type="text" />
          <input className='w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm xlg:text-lg xsm:w-9/12 2xs:w-9/12' onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Phone number' type="text" />
          <textarea name="" id="" onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Enter message' className='xlg:min-h-12 xlg:text-lg min-h-12 w-3/12 mx-auto px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-sm sm:min-h-10 xsm:w-9/12 2xs:w-9/12'></textarea>
          <button className='w-3/12 mx-auto bg-gray-700 text-white px-4 py-2 rounded-md border-gray-900 border-2 hover:border-green-600 text-lg my-3 sm:w-6/12 sm:text-base xlg:text-lg xsm:w-9/12 2xs:w-9/12'>Send Message</button>
          <div className='py-4'>
            {error && error.map((e: any, i: number)=>{
              return <div className={`${success ? 'text-green-500': 'text-red-600'} text-center`} key={i}>{e}</div>
            })}
          </div>
        </form>

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