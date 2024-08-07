export interface Song {
    id: string;
    name: string;
    url: string;
    cover: string;
    singer: string;
    album:string
  }
export interface Music {
    musicId: string;
    musicCover: string;
    musicName: string;
    musicSinger: string;
    musicUrl: string;
    musicDuration: string;
    musicAlbum:string,
    musicLikeCount:bigint;
    musicEnSinger:string;
    musicGenre:string;
    musicPlayList:string
    musicPathName:string
  }
export interface albumPrompt {
    name: string;
    singer: string;
    duration: string;
    year: string;
    cover: string;
    language: Date;
    like: bigint;
  }
  export interface AlbumBoxPrompt {
    albumId:string
    albumName : string;
    albumSinger : string 
    albumCover : string
    albumDuration : string
    albumLanguage : string
    albumYear : string
    albumLike : string;
    albumPathName:string;
  }
export interface FamousArtistPrompt{
  name:string;
  image:string;
  national:string;
  discription:string;
  famous:string;
  followers: bigint
}