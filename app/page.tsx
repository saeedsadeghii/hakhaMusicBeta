import FamousArtist from "@/data/FamousArtist";
import Newest from "@/data/Newest";

import FamousAlbums from "@/data/FamousAlbums";
import { Banner } from "@/data/mainPage/Banner";
import FamousGenre from "@/data/genres/FamousGenre";
import Footer from "@/components/footer/Footer";
import Trends from "@/data/Trends";
import PlayListSuggestion from "@/data/PlayListSuggestion";
import PopBests from "@/data/PopBests";
import MostFamousArtist from "@/data/MostFamousArtist";

export default async function Home() {
  return (
    <article className="main-page-container">
      <div className="col-span-1 md:col-span-3 main-page-container">
        <div className="col-span-3 2xl:col-span-2 flex items-center justify-center">
          <Banner />
        </div>
        <div className="hidden 2xl:block xl:col-span-1 p-2 md:p-0">
          <FamousArtist />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-5 gap-x-7 p-2 md:p-0">
        <div className="lg:col-span-2 col-span-3">
          <Newest />
        </div>
        <div className="lg:col-span-1 col-span-3">
          <FamousGenre />
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 p-2 md:p-0">
        <FamousAlbums />
      </div>
      <div className="col-span-1 md:col-span-3 p-2 md:p-0">
        <PopBests />
      </div>
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 lg:grid-cols-5 gap-5 p-2 md:p-0">
        <div className="col-span-1 lg:col-span-2">
          <Trends />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <PlayListSuggestion />
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 p-2 md:p-0">
        <PopBests />
      </div>
      <div className="col-span-1 md:col-span-3 p-2 md:p-0">
        <MostFamousArtist />
      </div>
      <Footer />
    </article>
  );
}
// Like a music
// async function likeMusic(userId, musicId) {
//   const like = await prisma.like.create({
//     data: {
//       userId,
//       musicId,
//     },
//   });
//   return like;
// }

// // Unlike a music
// async function unlikeMusic(userId, musicId) {
//   await prisma.like.delete({
//     where: {
//       userId,
//       musicId,
//     },
//   });
// }
