import ContentLoader from "react-content-loader";

export const PlayBtnLoader = () => {
  return (
    <div className=" w-full h-full flex-1 flex animate-pulse justify-center pb-2 items-center gap-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-800 hidden md:block"></div>
        <div className="w-14 h-14 rounded-full bg-gray-800"></div>
        <div className="w-10 h-10 rounded-full bg-gray-800 hidden md:block"></div>
    </div>
  );
};
export const MusicBoxLoader = ({ classes }: { classes?: string }) => {
  return (
    <div className="min-w-[155px] h-[155px] animate-pulse rounded-3xl bg-gray-800 flex items-end">
      <div className="w-full h-16 border-gray-700 border-2 rounded-3xl px-2 py-3 flex flex-col gap-y-3 justify-end items-end">
        <div className="h-4 rounded-xl w-full bg-gray-700"></div>
        <div className="h-2 w-[60%] rounded-xl bg-gray-700"></div>
      </div>
    </div>
  );
};
export const AlbumBoxLoader = ({ classes }: { classes?: string }) => {
  return (
    <div className="min-w-[405px] h-[210px] animate-pulse rounded-3xl bg-gray-800 flex items-end justify-end">
      <div className="w-full h-[60%] rounded-b-3xl p-5 flex gap-x-4">
        <div className="flex-1 h-full w-[91px] rounded-2xl bg-gray-600"></div>
        <div className="flex-3 h-full flex flex-col justify-center gap-y-3">
          <div className="h-7 w-[65%] rounded-xl bg-gray-600"></div>
          <div className="w-[55%] flex items-center gap-x-2">
            <span className="h-5 w-5 bg-gray-600 rounded-full flex-1"></span>
            <span className="bg-gray-600 rounded-xl h-3 flex-7 w-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const MiniMusicLineBoxLoader = ({ classes }: { classes?: string }) => {
  return (
    <div className="w-full h-[70px] bg-gray-800 rounded-3xl animate-pulse justify-between flex p-2">
      <div className="flex gap-x-4">
        <div className="w-[55px] h-full bg-gray-600 rounded-2xl"></div>
        <div className="w-32 flex justify-center gap-y-3 flex-col">
          <div className="h-4 bg-gray-600 w-4/5 rounded-xl"></div>
          <div className="h-2 bg-gray-600 w-3/5 mr-1 rounded-xl"></div>
        </div>
      </div>
      <div className="h-full w-[55px] rounded-full bg-gray-600"></div>
    </div>
  );
};
export const PlaylistBoxLoader = ({ classes }: { classes?: string }) => {
  return (
    <div className="min-w-[195px] h-[290px] bg-gray-800 animate-pulse rounded-3xl flex flex-col gap-y-3 p-3">
      <div className="w-full bg-gray-600 h-[174px] rounded-2xl"></div>
      <div className="flex flex-col gap-y-3">
        <div className="h-[15px] bg-gray-600 rounded-xl"></div>
        <div className="h-[10px] w-2/3 bg-gray-600 rounded-xl"></div>
      </div>
    </div>
  );
};
export const MusicShowLoader = ({ classes }: { classes?: string }) => {
  return (
    <div className={`animate-pulse flex flex-col gap-y-2 items-center justify-center ${classes}`}>
      <div className="w-[175px] h-[175px] rounded-2xl bg-gray-800"></div>
      <div className="h-4 rounded-xl w-[80%] bg-gray-800"></div>
      <div className="h-2 rounded-lg w-[40%] bg-gray-800"></div>
    </div>
  );
};
export const ArtistCardLoader = ({ classes }: { classes?: string }) => {
  return (
    <div className="bg-gray-800 w-[240px] h-[240px] animate-pulse flex flex-col gap-y-3 rounded-tr-[65px]">
      <div className="w-full h-[150px] bg-gray-600 artist-card-radius"></div>
      <div className="flex justify-between px-3 items-center">
        <div className="h-4 w-32 bg-gray-600 rounded-xl"></div>
        <div className="h-3 w-16 bg-gray-600 rounded-xl"></div>
      </div>
      <div className="p-3">
        <div className="h-6 w-5/6 bg-gray-600 rounded-2xl"></div>
      </div>
    </div>
  );
};

export const VoiceDownloadLoader = () => {
  return (
    <div className="flex-1 h-full justify-end hidden md:flex animate-pulse items-center">
      <div className="flex gap-x-2 items-center">
        <div className="rounded-2xl w-12 h-12 bg-gray-800"></div>
        <div className="bg-gray-800 p-2 rounded-full flex items-center gap-x-2">
          <div className="h-6 w-6 rounded-xl bg-gray-600"></div>
          <div className="h-4 rounded-xl bg-gray-600 w-36"></div>
        </div>
      </div>
    </div>
  );
};
export const WaveSurferLoader = () => {
  return (
    <ContentLoader
      speed={1}
      width={315}
      height={95}
      viewBox="0 0 315 95"
      backgroundColor="#333"
      foregroundColor="#999"
      className="flex-1"
    >
      <rect x="178" y="48" rx="8" ry="8" width="131" height="11" />
      <rect x="99" y="37" rx="5" ry="5" width="39" height="35" />
      <rect x="146" y="42" rx="7" ry="7" width="26" height="24" />
    </ContentLoader>
  );
};
export const MusicPlayerInfoLoader = () => (
  <div className="h-full animate-pulse flex gap-x-4 flex-1">
    <div className="h-full min-w-[80px] bg-gray-600 rounded-2xl"></div>
    <div className="flex justify-center gap-y-3 flex-col w-full">
      <div className="h-4 w-3/6 bg-gray-600 rounded-xl"></div>
      <div className="h-2 w-2/5 bg-gray-600 rounded-xl"></div>
    </div>
  </div>
);
