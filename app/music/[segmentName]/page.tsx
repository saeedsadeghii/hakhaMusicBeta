import MusicLineBox from "@/components/musicLineBox/MusicLineBox";
import PlayPauseBtn from "@/components/musicPlayer/PlayPauseBtn";
import { Music } from "@/types/types";
import { Alarm, DoubleCheck, MusicAlbum, PersonCheck } from "akar-icons";
import Image from "next/image";
import Link from "next/link";
import BlueTick from "@/assets/imgIcons/BlueTick.png";
import Like from "@/components/like/Like";
import prisma from "@/utils/db";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
const page = async ({ params }: { params: any }) => {
  const musicName = params.segmentName;
  const session = await getServerSession(authOptions);
  const getData = async () => {
    try {
      const response = await prisma.musics.findFirst({
        where: { pathName: musicName },
      });
      const user = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });
      const userId = user?.id;

      const updatedvisitedCount = await prisma.musics.update({
        where: { id: response?.id },
        data: { visited: { increment: 1 } },
      });
      return {
        response,
        userId,
      };
    } catch (error) {
      console.error("Request Failed");
    }
  };
  const data = await getData();
  const song = data?.response;
  const userId = data?.userId;
  const likeCheck = async () => {
    const foundMusic = await prisma.musics.findFirst({
      where: {
        id: song?.id,
        likes: {
          some: {
            userId: userId,
          },
        },
      },
    });
    if (foundMusic !== null) {
      return true;
    } else {
      return false;
    }
  };
  const isLiked = await likeCheck();
  // console.log("like condition is :",isLiked)
  // const [isPlayingStates, setIsPlayingStates] = useState<boolean[]>(
  //   new Array(musicID.length).fill(false)
  // );
  if (song?.pathName !== musicName) {
    return notFound();
  } else
    return (
      <article>
        <div
          className="
        w-full md:bg-primary shadow-md md:rounded-s-full rounded-3xl md:p-5  flex md:flex-row flex-col gap-x-8
        justify-center items-center md:items-start md:justify-start
      "
        >
          <Image
            width={600}
            height={600}
            src={song?.cover as string}
            alt="Music Cover"
            className="rounded-3xl shadow-lg border-secondary w-5/6 md:w-[240px]"
          />

          <div
            className="
        flex justify-between h-fit md:h-[240px] w-4/5 md:w-full items-center md:items-start md:flex-col
        "
          >
            <div className="flex flex-col gap-y-2 flex-3 pt-6 ">
              <div>
                <h1 className="gradient-text text-5xl font-yekanBlack">
                  {song?.name as string}
                </h1>
                <Link
                  href={`/artist/${song?.en_singer}`}
                  className="flex hover:underline duration-200 gap-x-1 items-center"
                >
                  <PersonCheck strokeWidth={1.5} size={20} />
                  <span className="text-lg font-semibold text-gray-400 flex items-center gap-x-1">
                    <span>{song?.singer}</span>
                    <Image
                      src={BlueTick}
                      alt="Blue Tick"
                      width={20}
                      height={20}
                    />
                  </span>
                </Link>
              </div>

              <div className="flex justify-between items-center md:items-start md:flex-col gap-y-1 mr-1 mt-2">
                <div className="flex gap-x-2 items-center flex-1">
                  <Alarm strokeWidth={1.5} size={16} />
                  <span className="text-sm text-gray-400">
                    3:27 دقیقه{song?.duration}
                  </span>
                </div>
                <div className="flex gap-x-2 items-center flex-1">
                  <MusicAlbum strokeWidth={1.5} size={16} />
                  <span className="text-sm text-gray-400">{song?.album}</span>
                </div>
                <div className="flex gap-x-2 items-center flex-1">
                  <DoubleCheck strokeWidth={1.5} size={16} />
                  <span className="text-sm text-gray-400">
                    {song?.visited?.toLocaleString("FA-IR")} بازدید
                  </span>
                </div>
              </div>

              <div className="flex-1 md:flex-row justify-between md:justify-start flex md:items-center items-end md:gap-x-5">
                <div className="">
                  <PlayPauseBtn songID={song} />
                </div>
                <div className="p-1">
                  <Like
                    identifyMusic={song?.id}
                    userId={userId}
                    isLiked={isLiked}
                    contentType="music"
                    Disabeld={session?false:true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col flex  md:p-5 px-5 md:mx-5 rounded-b-3xl my-5 md:my-0">
          <MusicLineBox musicDetails={song} />
        </div>
      </article>
    );
};

export default page;
