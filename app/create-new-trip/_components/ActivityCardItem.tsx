"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet, Wallet2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Activity } from './chatbox';
import Link from 'next/link';
import axios from 'axios';


type Props = {
  activity: Activity
}
function ActivityCardItem({ activity }: Props) {
  const [photoUrl, setPhotoUrl] = useState<string>();

  useEffect(() => {
    activity && getGooglePlaceDetail();
  }, [activity])


  const getGooglePlaceDetail = async () => {
    const result = await axios.post('/api/google-place-detail', { placeName: activity.place_name + activity.place_address });
    if (result.data.e) {
      return;
    }
    setPhotoUrl(result.data);
  }
  return (
    <div>
      <Image
        src={activity.place_image_url}
        alt={activity?.place_name || 'Activity image'}
        width={400}
        height={200}
        className="rounded-xl shadow object-cover mb-2"
      />

      {/* <Image src={photoUrl ? photoUrl
      : '/placeholder.jpg'} alt={activity.place_name} width={400} height={200} className='rounded-xl shadow object-cover mb-2' /> */}
      <h3 className='font-semibold text-lg'>{activity?.place_name}</h3>
      <p className='text-gray-500 text-sm line-clamp-2'>{activity?.place_details}</p>
      <h2 className='flex gap-2 text-blue-500 line-clamp-1'> <Ticket />{activity.ticket_pricing}</h2>
      <p className='flex text-orange-400 gap-2 line-clamp-1'> <Clock />{activity.best_time_to_visit}</p>
      <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity?.place_name)}`} target='_blank'><Button size={'sm'} variant={'outline'} className='w-full mt-2'> View <ExternalLink /></Button></Link>
    </div>
  )
}

export default ActivityCardItem
