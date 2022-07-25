import Head from "next/head";
import Avatar from "../components/Avatar";
import {MicrophoneIcon, SearchIcon, ViewGridIcon} from "@heroicons/react/solid"
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const Router = useRouter()
  const searchInputRef = useRef(null)
  const search = (e) =>{
    e.preventDefault()
    const query = searchInputRef.current.value
    
    if(!query) return 

    Router.push(`/search?q=${query}`)
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
        {/* Avatar */}
        <Avatar url='https://lh3.googleusercontent.com/a-/AFdZucogqpCWuc8VxNTSWPL1kg7chhyK9nLoOmbGUcdQ71A=s83-c-mo'/>
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-32 flex-grow w-4/5">
        <Image
          src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type= 'text' 
          className="focus:outline-none flex-grow"/>
          <MicrophoneIcon className="h-5 text-gray-500"/>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 
        sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="button">Google search</button>
          <button onClick={search} className="button">I'm feeling lucky</button>
        </div>
      </form>
      <Footer/>

    </div>
  )
}
