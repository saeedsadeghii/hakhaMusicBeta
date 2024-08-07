"use server";
import { removeSpaces } from "@/components/functions/Functions";
import prisma from "@/utils/db";
import React from "react";
import { toast } from "sonner";
export async function addMusicReactHookForm(data: any) {
  try {
    console.log("Action data is:", data);
    const createdMusic = await prisma.musics.create({
      data: {
        name: data.songName,
        pathName: removeSpaces(data.songName),
        singer: data.songSinger,
        orginal_singer_name: data.songEnSinger,
        en_singer: removeSpaces(data.songEnSinger),
        cover: data.songCover,
        url: data.songPath,
        album: data.songAlbum,
        duration: data.songDuration,
        playlist: data.songPlaylist,
        genre: data.songGenre,
        en_genre: data.songEnGenre,
      },
    });
    if (createdMusic) {
      console.log("data set in database succesfully");
    } else {
      console.log("data seting failed");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function addArtistReactHookForm(data: any) {
  try {
    console.log("Action data is:", data);
    const createdMusic = await prisma.artists.create({
      data: {
        name: data.singerName,
        orginal_singer_name: data.orginalSingerName,
        en_singer: removeSpaces(data.orginalSingerName),
        image: data.singerCover,
        national: data.singerNational,
        discription: data.singerDiscription,
        famous: data.singerFamous,
        followers: 0,
      },
    });
    if (createdMusic) {
      console.log("data set in database succesfully");
    } else {
      console.log("data seting failed");
    }
  } catch (error) {
    console.error(error);
  }
}
export async function addAlbumReactHookForm(data: any) {
  try {
    console.log("Action data is:", data);
    const createdMusic = await prisma.albums.create({
      data: {
        name: data.albumName,
        singer: data.albumSinger,
        orginal_singer_name: data.orginalSingerName,
        en_singer: removeSpaces(data.orginalSingerName),
        pathName: removeSpaces(data.albumName),
        duration: data.albumDuration,
        genre: data.albumGenre,
        language: data.albumLanguage,
        cover: data.albumCover,
        year: data.albumYear,
        like: 0,
      },
    });
    if (createdMusic) {
      console.log("data set in database succesfully");
    } else {
      console.log("data seting failed");
    }
  } catch (error) {
    console.error(error);
  }
}
export async function addPlaylistReactHookForm(data: any) {
  try {
    console.log("Action data is:", data);
    const createdMusic = await prisma.playlist.create({
      data: {
        name: data.playlistName,
        singer: data.singerName,
        en_singer: data.enSingerName,
        orginal_singer_name: data.orginalSingerName,
        pathName: data.playlistPathName,
        genre: data.playlistGenre,
        en_genre: data.playlistEnGenre,
        cover: data.playlistCover,
        date: data.playlistDate,
      },
    });
    if (createdMusic) {
      console.log("data set in database succesfully");
    } else {
      console.log("data seting failed");
    }
  } catch (error) {
    console.error(error);
  }
}

export const likeProcces = async (userId:string, contentId:string, contentType:string) => {
  switch (contentType) {
    case 'music':
      try {
        const existingLike = await prisma.likeMusic.findFirst({
          where: { userId, contentId: contentId },
        });
    
        if (existingLike) {
          await prisma.likeMusic.delete({
            where: { id: existingLike.id },
          });
          return false;
        } else {
          await prisma.likeMusic.create({
            data: {
              userId,
              contentId,
            },
          });
          return true;
        }
      } catch (error) {
        console.error("Error managing like:", error);
        return false;
      }
      break;
      case 'album':
        try {
          const existingLike = await prisma.likeAlbum.findFirst({
            where: { userId, contentId: contentId },
          });
      
          if (existingLike) {
            await prisma.likeAlbum.delete({
              where: { id: existingLike.id },
            });
            return false;
          } else {
            await prisma.likeAlbum.create({
              data: {
                userId,
                contentId,
              },
            });
            return true;
          }
        } catch (error) {
          console.error("Error managing like:", error);
          return false;
        }
        break;
        case 'artist':
          try {
            const existingLike = await prisma.likeArtist.findFirst({
              where: { userId, contentId: contentId },
            });
        
            if (existingLike) {
              await prisma.likeArtist.delete({
                where: { id: existingLike.id },
              });
              await prisma.artists.update({
                where: {
                    id: contentId,
                },
                data: {
                    followers: {
                        decrement: 1,
                    },
                },
            });
              return false;
            } else {
              await prisma.likeArtist.create({
                data: {
                  userId,
                  contentId,
                },
              });
              await prisma.artists.update({
                where: {
                    id: contentId,
                },
                data: {
                    followers: {
                        increment: 1,
                    },
                },
            });
              return true;
            }
          } catch (error) {
            console.error("Error managing like:", error);
            return false;
          }
          break;
          case 'playlist':
            try {
              const existingLike = await prisma.likePlaylist.findFirst({
                where: { userId, contentId: contentId },
              });
          
              if (existingLike) {
                await prisma.likePlaylist.delete({
                  where: { id: existingLike.id },
                });
                return false;
              } else {
                await prisma.likePlaylist.create({
                  data: {
                    userId,
                    contentId,
                  },
                });
                return true;
              }
            } catch (error) {
              console.error("Error managing like:", error);
              return false;
            }
            break;
    default:
      break;
  }
};
// export const likeProcces:React.FC<string> = async (userId, contentId, contentType) => {
//   try {
//     const existingLike = await prisma.likeMusic.findFirst({
//       where: { userId, contentId: contentId },
//     });

//     if (existingLike) {
//       await prisma.likeMusic.delete({
//         where: { id: existingLike.id },
//       });
//       return false;
//     } else {
//       await prisma.likeMusic.create({
//         data: {
//           userId,
//           contentId,
//         },
//       });
//       return true;
//     }
//   } catch (error) {
//     console.error("Error managing like:", error);
//     return false;
//   }
// };

