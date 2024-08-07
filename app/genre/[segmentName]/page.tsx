import MusicLineBox from '@/components/musicLineBox/MusicLineBox';
import prisma from '@/utils/db';
import React from 'react'

const page = async ({params}:{params:string}) => {
  const musicGenre = params.segmentName;
  const getData = async () => {
    // Single function for both album and songs
    try {
      const musics = await prisma.musics.findMany({
        where: { en_genre: musicGenre },
    })
      return  musics 
    } catch (error) {
      console.error("Request Failed:", error);
    }
  };
  const data = await getData();
  console.log(data)
  return (
    <div>
        {data?.map((data) =>(
            <MusicLineBox musicDetails={data}/>
        ))}
    </div>
  )
}

export default page