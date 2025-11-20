"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet, Wallet2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hotel } from './chatbox';
import Link from 'next/link';
import axios from 'axios';

type Props = {
    hotel: Hotel
}
function hotelCardItem({ hotel }: Props) {
    const [photoUrl, setPhotoUrl] = useState<string>();

    useEffect(() => {
        hotel && getGooglePlaceDetail();
    }, [hotel])


    const getGooglePlaceDetail = async () => {
        const result = await axios.post('/api/google-place-detail', { placeName: hotel.hotel_name });
        if (result.data.e) {
            return;
        }
        setPhotoUrl(result.data);
    }
    return (
        <div className='flex flex-col gap-1'>
            <Image
                src={hotel.hotel_image_url}
                alt={hotel?.hotel_name || 'HOTEL image'}
                width={400}
                height={200}
                className="rounded-xl shadow object-cover mb-2"
            />

            {/* <Image src={photoUrl?photoUrl : '/placeholder.jpg'} alt='place-image' width={400} height={200} className='rounded-xl shadow object-cover mb-2' /> */}
            <h2 className='font-semibold text-lg '>{hotel?.hotel_name}</h2>
            <h2 className='text-gray-500'>{hotel.hotel_address}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex gap-2 text-green-600'><Wallet />{hotel.price_per_night}</p>
                <p className='flex text-yellow-500 gap-2'><Star />{hotel.rating}</p>
            </div>
            <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel?.hotel_name)}`} target='_blank'><Button variant={'outline'} className=' mt-1 w-full'>View</Button></Link>
            {/* <p className='line-clamp-2text-gray-500 text-sm'>{hotel.description}</p> */}

        </div>
    )
}

export default hotelCardItem
