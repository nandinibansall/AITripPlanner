import React from 'react'
import Chatbox from './_components/chatbox';
import Itinerary from './_components/Itinerary';
function createNewTrip() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-10'>
      <div>
        <Chatbox />
      </div>
      <div className='col-span-2'>
        <Itinerary/>
      </div>
    </div>
  )
}

export default createNewTrip
