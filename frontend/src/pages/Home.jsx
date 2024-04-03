import React from 'react'
import Button from '../components/Button'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { IoSearchOutline, IoShareSocial } from 'react-icons/io5'
import { FaFileUpload } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className="w-full py-12 mt-5 max-w-6xl mx-auto flex justify-center">
          <div className="container flex flex-col items-center py-10 gap-10 px-5 space-y-4 md:gap-8 md:px-10 md:flex-row lg:gap-12 xl:gap-16">
            <div className="order-1 w-full max-w-3xl grid gap-4 md:gap-2 lg:gap-4 lg:w-1/2 lg:order-1 xl:gap-4">
              <div className="space-y-3">
                <h3 className='text-3xl ml-2 tracking-wide'>WELCOME! TO</h3>
                <h1 className="text-6xl font-bold tracking-wider">NOTESSHARE</h1>
                <p className="text-gray-500 dark:text-gray-400 tracking-wide ml-1">Explore a comprehensive collection of subject notes, created to help you excel in yourstudies.
                  Start your learning journey today!
                </p>
              </div>
              <div className='ml-3 flex gap-10'>
                <Button>Explore</Button>
                <Button className='bg-green-400 text-gray-50'>Upload</Button>
              </div>
            </div>
            <div className="order-2 overflow-hidden rounded-xl p-5">
              <img
                alt="Hero"
                className="object-cover object-center mx-auto overflow-hidden "
                src="../public/Hero.svg"
                width="550"
                loading='lazy'
              />
            </div>
          </div>
        </section>


        {/* Feature Section */}
        <section className="w-full py-12 mt-5 max-w-6xl mx-auto">
          <div className='tag text-4xl py-5 text-center font-bold leading-4 tracking-wide'>
            <h1>Features</h1>
          </div>

          <div className='featurecard grid grid-cols-3 text-center'>
            <div className="feature-items flex flex-wrap mt-6">
              <div className="f-item flex flex-col justify-center items-center rounded-lg w-80 h-96 mx-4 my-6 p-8 relative transition duration-300 bg-gray-100 text-gray-400 hover:bg-green-400 hover:text-white dark:bg-[#1d1d1d] dark:hover:bg-green-400 ">
                <div className="f-img flex items-center justify-center rounded-full  p-5 mb-4 bg-gray-200 dark:bg-[#272727]">
                  <p><FaFileUpload size="2em" className='text-green-400'/></p>
                </div>
                <div className="f-text text-style px-2">
                  <h2 className="text-xl font-bold mb-3 text-gray-700 dark:text-white">Upload Notes</h2>
                  <p className="dark:text-gray-500 mb-5"> Simplify your note-taking process by uploading documents. Easily upload your notes, documents, and files for convenient access anytime, anywhere.</p>
                </div>
                <div className="f-input my-auto">
                  <input type="button" className="f-btn bg-green-500 uppercase text-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 cursor-pointer" value="more" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[7rem] h-[2px] bg-green-400"></div>
              </div>
            </div>

            <div className="feature-items flex flex-wrap mt-6">
              <div className="f-item flex flex-col justify-center items-center rounded-lg w-80 h-96 mx-4 my-6 p-8 relative transition duration-300 bg-gray-100 text-gray-400 hover:bg-green-400 hover:text-white dark:bg-[#1d1d1d] dark:hover:bg-green-400 ">
                <div className="f-img flex items-center justify-center rounded-full p-5 mb-4 bg-gray-200 dark:bg-[#272727]">
                  <p><IoSearchOutline size="2em" className='text-green-400'/></p>
                </div>
                <div className="f-text text-style">
                  <h2 className="text-xl font-bold mb-3 text-gray-700 dark:text-white">Search Notes</h2>
                  <p className="dark:text-gray-500 px-3 mb-5">Navigate through your notes effortlessly and find the notes you need with our powerful search functionality, saving you valuable time.</p>
                </div>
                <div className="f-input my-auto">
                  <input type="button" className="f-btn bg-green-500 uppercase text-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 cursor-pointer" value="more" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[7rem] h-[2px] bg-green-400"></div>
              </div>
            </div>

            <div className="feature-items flex flex-wrap mt-6">
              <div className="f-item flex flex-col justify-center items-center rounded-lg w-80 h-96 mx-4 my-6 p-8 relative transition duration-300 bg-gray-100 text-gray-400 hover:bg-green-400 hover:text-white dark:bg-[#1d1d1d] dark:hover:bg-green-400 ">
                <div className="f-img flex items-center justify-center rounded-full p-5 mb-4 bg-gray-200 dark:bg-[#272727]">
                  <p><IoShareSocial size="2em" className='text-green-400' /></p>
                </div>
                <div className="f-text text-style">
                  <h2 className="text-xl font-bold mb-3 text-gray-700 dark:text-white">Share with Others</h2>
                  <p className="dark:text-gray-500 px-2 mb-5">  Share your notes seamlessly with friends, classmates, or colleagues to collaborate and excel together. Enabling seamless knowledge exchange.</p>
                </div>
                <div className="f-input my-auto">
                  <input type="button" className="f-btn bg-green-500 uppercase text-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 cursor-pointer" value="more" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[7rem] h-[2px] bg-green-400"></div>
              </div>
            </div>
          </div>
        </section>

        {/* AchiveMent Section */}
        <div className='flex justify-center gap-40 text-center p-10 mt-5 font-semibold text-xl bg-green-400 text-white'>
          <div className="div-1">
            <h1>50+</h1>
            <h3>Daily Signup</h3>
          </div>
          <div className="div-2">
            <h1>200+</h1>
            <h3>Active members</h3>
          </div>
          <div className="div-3">
            <h1>300+</h1>
            <h3>Daily Downloads</h3>
          </div>
          <div className="div-4">
            <h1>150+</h1>
            <h3>Different Notes</h3>
          </div>
        </div>


        {/* Know more section */}

        <section className="w-full py-5 mt-10 max-w-6xl mx-auto">
          <h1 className='tag text-3xl py-5 text-center font-bold leading-4 tracking-wide'>What you Need to Know about</h1>

          <div className='p-5'>
            <div className="about-sec p-5 mb-5 ">
              <div className="about-content flex justify-evenly items-center gap-10 px-10">
                <div className="about-img p-3 w-[40%]">
                  <img src="../upload.svg" alt="Teachers" className="w-96" loading='lazy'/>
                </div>
                <div className="about-desc p-5 w-[70%]">
                  <h3 className="font-semibold text-2xl mb-2">Teacher and Individuals Can Upload Notes</h3>
                  <p className="text-gray-400 px-2">Teachers and individuals alike can contribute to global education by uploading their notes, enriching learning experiences worldwide.
                  Empower educators and individuals globally by sharing your notes, enriching learning journeys for students everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-sec p-5 mb-5 ">
              <div className="about-content flex justify-evenly items-center gap-10 px-10">
                <div className="about-desc p-5 w-[70%]">
                  <h3 className="font-semibold text-2xl mb-2">Students and Folks Can Access using Links</h3>
                  <p className="text-gray-400 px-2">Easily download notes using shared links, facilitating seamless access for students and individuals to valuable educational materials, fostering a 
                    collaborative environment for learning and knowledge exchange.
                  </p>
                </div>
                <div className="about-img p-3 w-[40%]">
                  <img src="../share.svg" alt="Teachers" className="w-96" loading='lazy'/>
                </div>
              </div>
            </div>

            <div className="about-sec p-5 mb-5 ">
              <div className="about-content flex justify-evenly items-center gap-10 px-10">
              <div className="about-img p-3 w-[40%]">
                  <img src="../download.svg" alt="Teachers" className="w-96" loading='lazy'/>
                </div>
                <div className="about-desc p-5 w-[70%]">
                  <h3 className="font-semibold text-2xl mb-2">Students can Select Notes by Rating</h3>
                  <p className="text-gray-400 px-2">Empower students to make informed choices in their learning journey by allowing them to select notes based on ratings, ensuring access to top-quality 
                  educational content rated by peers and experts.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Review */}
        <section className="w-full py-5 mt-5 max-w-6xl mx-auto">
          <h1 className='tag text-3xl py-10 text-center font-bold leading-4 tracking-wide'>Reviews</h1>

          <div className="mx-auto p-4 md:px-6 max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

            <div className="p-6 h-[20rem] rounded-md shadow-md flex flex-col gap-4 bg-gray-50 hover:bg-gray-100 dark:dark:bg-[#1d1d1d] dark:hover:bg-[#242424]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full">
                  <img className='w-10 h-10 rounded-full' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                </div>
              </div>
              <div className="gap-4 px-3 text-gray-500 text-sm leading-7">
                <p className="inline">
                  <span><RiDoubleQuotesL size="1.5em" className='inline mb-3 text-green-400' /> </span>
                  Remarkable platform for students! The interactive community, diverse note collection, and seamless downloading options truly enhance the learning experience. 
                  A game-changer in education!
                  <span><RiDoubleQuotesR size="1.5em" className='inline mb-3 text-green-400' /></span>
                </p>
              </div>
            </div>

            <div className="p-6 h-[20rem] rounded-md shadow-md flex flex-col gap-4 bg-gray-50 hover:bg-gray-100 dark:dark:bg-[#1d1d1d] dark:hover:bg-[#242424]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full">
                  <img className='w-10 h-10 rounded-full' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Mike Liam</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                </div>
              </div>
              <div className="gap-4 px-3 text-gray-500 text-sm leading-7">
                <p className="inline">
                  <span><RiDoubleQuotesL size="1.5em" className='inline mb-3 text-green-400' /> </span>
                  Outstanding resource! The ability to access, rate, and share notes has greatly enhanced my learning journey. I couldn't imagine studying without it!
                  <span><RiDoubleQuotesR size="1.5em" className='inline mb-3 text-green-400' /></span>
                </p>
              </div>
            </div>

            <div className="p-6 h-[20rem] rounded-md shadow-md flex flex-col gap-4 bg-gray-50 hover:bg-gray-100 dark:dark:bg-[#1d1d1d] dark:hover:bg-[#242424]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full">
                  <img className='w-10 h-10 rounded-full' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Michele Rude</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                </div>
              </div>
              <div className="gap-4 px-3 text-gray-500 text-sm leading-7">
                <p className="inline">
                  <span><RiDoubleQuotesL size="1.5em" className='inline mb-3 text-green-400' /> </span>
                  Incredibly helpful platform! The feature-rich interface, coupled with the vast selection of notes, has significantly elevated my learning experience. 
                  Highly recommended for students at all levels.
                  <span><RiDoubleQuotesR size="1.5em" className='inline mb-3 text-green-400' /></span>
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Contact */}
        <div className='contact'>
          <div className="hero py-10">
            <div className="hero-content text-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold">Join Our Community</h1>
                <p className="py-6 px-5 text-gray-400">Be part of our community by subscribing to our newsletter. Receive valuable insights, study tips, and updates on new notes. Join us on our educational journey!</p>
                <div className="join gap-5">
                <input id="email-address" name="email" type="email" autoComplete="email" required className="w-[20rem] outline-none border-none flex-auto rounded-md bg-gray-100 px-3.5 py-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400 focus:outline focus:outline-green-400 shadow-sm sm:text-sm sm:leading-6" placeholder="Enter your email" /> 
                <Button type="submit">Suscribe</Button>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
