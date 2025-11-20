
import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import React from 'react'


function FinalUi({ viewTrip,disable }: any) {

    return (

        <div className="flex flex-col items-center justify-center mt-6 p-6 bg-white rounded-2xl shadow-md">

            <Globe2 className="text-primary text-4xl animate-bounce" />

            <h2 className="mt-3 text-lg font-semibold text-primary">

                Planning your dream trip...
            </h2>

            <p className="text-gray-500 text-sm text-center mt-1">
                 Gathering best destinations, activities, and travel details for you. Sit tight!
            </p>

                <Button disabled={disable} onClick={viewTrip} className='w-full mt-2'>View Trip</Button>
        </div> 
    )
}

export default FinalUi