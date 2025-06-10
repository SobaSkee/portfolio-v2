import React from 'react'
import pictureFrame from "../assets/projects/picture-frame-reg.svg"
import picklepals from "../assets/projects/picklepals.png"


const Pictureframe = () => {
  return (
    <div className='relative h-96 w-96'>
        <img src={pictureFrame} alt="picture-frame" className='w-full h-full absolute top-0 left-0' />
        <img src={picklepals} alt="picklepals" className='z-2 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </div>
  )
}

export default Pictureframe