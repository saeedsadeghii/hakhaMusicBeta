import Footer from "@/components/footer/Footer";
import MostFamous from "@/data/Discover/MostFamous";
import MostFamousArtist from "@/data/MostFamousArtist";
import PlayListSuggestion from "@/data/PlayListSuggestion";
import PopBests from "@/data/PopBests";
import Trends from "@/data/Trends";

const page = async () => {
  return(
    <article className="main-page-container px-2 md:p-0">
      <div className="col-span-1 md:col-span-3">
      <MostFamous/>
      </div>
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-5 gap-x-5">
        <div className="col-span-1 md:col-span-2">
          <Trends />
        </div>
        <div className="col-span-1 md:col-span-3">
          <PlayListSuggestion />
        </div>
      </div>
      <div className="grid grid-cols-1 md:col-span-3">
      <PopBests/>
      </div>
      <div className="col-span-1 md:col-span-3">
        <MostFamousArtist />
      </div>
      <div className="grid grid-cols-1 md:col-span-3">
      <Footer/>
      </div>
    </article>
  )
};

export default page;
