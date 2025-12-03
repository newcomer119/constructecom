"use client";

import React from 'react'

import { RiCheckboxCircleFill,RiArrowRightUpLine } from 'react-icons/ri';

const workData = [
  {
    img : "/public/assets/work/restoration.jpg",
    name : "restoration",
    description : "Bringing damaged or aging structure back to life. We specialize in restoring buildings to their former glory while incorporating modern techniques and materials to ensure longevity and safety.",
    href : "",
  },
]

const Work = () => {
  return (
    <div className='h-screen bg-yellow-200' id='work'>Work</div>
  )
}

export default Work