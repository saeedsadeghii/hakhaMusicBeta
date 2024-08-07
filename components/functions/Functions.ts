import { ReactNode } from "react";

export const SongName=(music_name:string,MaxLength:Number) : ReactNode =>{
    const maxLength = MaxLength;
    const truncatedString = music_name.length > maxLength ? music_name.substring(0, maxLength) + ".." : music_name;
    return truncatedString;
}
export const FormatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${paddedMinutes}:${paddedSeconds}`;
};

export const jsonResponse = (response:any)=> JSON.stringify(response, (key, value) =>
  typeof value === "bigint" ? value.toString() : value
);
export function removeSpaces(str:string) {
  return str.replace(/\s+/g, '');
}