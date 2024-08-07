"use client"
import { MusicBoxLoader } from "@/components/loading/loading";
import MusicBox from "@/components/MusicBox";
import Slider from "@/components/swiper/Slider";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import prisma from "@/utils/db";
import { Newspaper } from "akar-icons";
import ContentLoader, { Code } from "react-content-loader";
import useSWR from "swr";

type Music = {
  id: number;
  cover: string;
  name: string;
  singer: string;
  url: string;
  duration: string;
};

const Newest = () => {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error,isLoading } = useSWR('/api/songs/newest', fetcher);
  console.log(data)
  const myOptions = {
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
  };

  const musicSlides = data?.map((music:any) => (
    <MusicBox musicDetails={music}/>
  ));


  return (
    <div className="flex gap-y-3 flex-col mt-4">
      <h1 className="font-yekanBlack text-2xl flex items-center gap-x-3">
        <Newspaper strokeWidth={2} size={20} />
        <span>جدید ترین ها</span>
      </h1>
      <div className="w-full flex justify-between flex-nowrap overflow-x-scroll gap-x-6 md:gap-x-0">
        {!isLoading ? 
          <SwiperComponent content={musicSlides} options={myOptions} BreakPoint={
            {
              1700: {
                slidesPerView: 7,
              },
              1600: {
                slidesPerView: 6.5,
              },
              1550: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 5.5,
              },
              1400: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
              888: {
                slidesPerView: 5,
              },
              800: {
                slidesPerView: 4,
              },
              568: {
                slidesPerView: 3.5,
              },
              400: {
                slidesPerView: 3,
              },
              399: {
                slidesPerView: 2.5,
              },
              350: {
                slidesPerView: 2.20,
              },
              300: {
                slidesPerView: 2,
              },
            }
          } />
         : 
         <div className="flex flex-1 justify-around items-center flex-nowrap h-[155px] overflow-hidden gap-x-2"><MusicBoxLoader/><MusicBoxLoader/><MusicBoxLoader/><MusicBoxLoader/><MusicBoxLoader/><MusicBoxLoader/></div>
        }
      </div>
    </div>
  );
};

export default Newest;




// import MusicBox from "@/components/MusicBox";
// import Slider from "@/components/swiper/Slider";
// import SwiperComponent from "@/components/swiper/SwiperComponent";
// import prisma from "@/utils/db";
// import { Newspaper } from "akar-icons";

// type Music = {
//   id: number;
//   cover: string;
//   name: string;
//   singer: string;
//   url: string;
//   duration: string;
// };

// const Newest = async () => {
//   const getData = async () => {
//     try {
//       const response = await prisma.musics.findMany({
//         skip: 0,
//         take: 8,
//       });
//       return response;
//     } catch (error) {
//       console.error("Request Failed");
//     }
//   };

//   const musics = await getData();
//   const myOptions = {
//     spaceBetween: 20,
//     navigation: true,
//     pagination: { clickable: true },
//   };

//   const musicSlides = musics?.map((music) => (
//     <MusicBox musicDetails={music}/>
//   ));


//   return (
//     <div className="flex gap-y-3 flex-col mt-4">
//       <h1 className="font-yekanBlack text-2xl flex items-center gap-x-3">
//         <Newspaper strokeWidth={2} size={20} />
//         <span>جدید ترین ها</span>
//       </h1>
//       <div className="w-full flex justify-between flex-nowrap overflow-x-scroll gap-x-6 md:gap-x-0">
//         {musics ? (
//           <SwiperComponent content={musicSlides} options={myOptions} BreakPoint={
//             {
//               1700: {
//                 slidesPerView: 7,
//               },
//               1600: {
//                 slidesPerView: 6.5,
//               },
//               1550: {
//                 slidesPerView: 6,
//               },
//               1500: {
//                 slidesPerView: 5.5,
//               },
//               1400: {
//                 slidesPerView: 5,
//               },
//               1000: {
//                 slidesPerView: 4,
//               },
//               888: {
//                 slidesPerView: 5,
//               },
//               800: {
//                 slidesPerView: 4,
//               },
//               568: {
//                 slidesPerView: 3.5,
//               },
//               400: {
//                 slidesPerView: 3,
//               },
//               399: {
//                 slidesPerView: 2.5,
//               },
//               350: {
//                 slidesPerView: 2.20,
//               },
//               300: {
//                 slidesPerView: 2,
//               },
//             }
//           } />
//         ) : (
//           <div className="text-center">در حال بارگذاری ...</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Newest;
