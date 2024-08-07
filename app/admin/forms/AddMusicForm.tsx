"use client";
import prisma from "@/utils/db";
import React from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { addMusicReactHookForm } from "@/actions/_actions";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
const AddMusicForm = () => {
  const schema = yup.object().shape({
    songName: yup.string().required("این ایتم نمی تواند تهی باشد"),
    songSinger: yup.string().required("این ایتم نمی تواند تهی باشد"),
    // songEnSingerPath: yup.string().required("فیلد بایستی وارد شود"),
    songEnSinger: yup.string().required("فیلد بایستی وارد شود"),
    songCover: yup.string().required("فیلد بایستی وارد شود"),
    songPath: yup.string().required("فیلد بایستی وارد شود"),
    // songPathName: yup.string().required("فیلد بایستی وارد شود"),
    songDuration: yup.number().required("فیلد بایستی وارد شود"),
    songAlbum: yup.string().required("فیلد بایستی وارد شود"),
    songPlaylist: yup.string().required("فیلد بایستی وارد شود"),
    songGenre: yup.string().required("فیلد بایستی انتخاب شود شود"),
    songEnGenre: yup.string().required("فیلد بایستی وارد شود"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema) });

  const OnFormSubmit = async (data: any) => {
    console.log("Data is :", data);
    try {
      const processedData = await addMusicReactHookForm(data);
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Sonner" }), 1500)
        );
      toast.promise(promise, {
        loading: "Loading...",
        success: () => {
          return `${data.songName} اضافه شد`;
        },
        error: "Error",
      });
    } catch (error) {
      return toast.error("یک مشکلی پیش اومد کنسول رو چک کن!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(OnFormSubmit)}
      dir="ltr"
      className="flex flex-col gap-y-2 w-96 article-glass rounded-xl"
    >
      <div className="flex flex-col gap-y-2 h-96 overflow-y-scroll px-4 rounded-xl">
        <label>نام موزیک:</label>
        <input
          placeholder="نام"
          type="text"
          {...register("songName")}
          className="admin-input"
        />
        {errors.songName && (
          <p className="form-field-error">{errors.songName?.message}</p>
        )}
        <label>خواننده:</label>
        <input
          type="text"
          placeholder=" د ویکند"
          {...register("songSinger")}
          className="admin-input"
        />
        {errors.songSinger && (
          <p className="form-field-error">{errors.songSinger?.message}</p>
        )}
        <label> خواننده به انگلیسی:</label>
        <input
          placeholder="The Weeknd"
          type="text"
          className="admin-input"
          {...register("songEnSinger")}
        />
        {errors.songEnSinger && (
          <p className="form-field-error">{errors.songEnSinger?.message}</p>
        )}
        {/* <label> مسیر خواننده به انگلیسی:</label>
        <input
          placeholder="TheWeeknd"
          type="text"
          className="admin-input"
          {...register("songEnSingerPath")}
        />
        {errors.songEnSinger && (
          <p className="form-field-error">{errors.songEnSinger?.message}</p>
        )} */}
        <label>کاور:</label>
        <input
          type="text"
          placeholder="/musicAlbums/Adele/30/30.jpg"
          className="admin-input"
          {...register("songCover")}
        />
        {errors.songCover && (
          <p className="form-field-error">{errors.songCover?.message}</p>
        )}
        <label>مسیر موزیک:</label>
        <input
          type="text"
          //value={`/music/`}
          placeholder="/music/Sia/Reasonable Women/Sia-Go-on.mp3"
          className="admin-input"
          {...register("songPath")}
        />
        <label>مدت زمان:</label>
        <input
          type="number"
          placeholder="مدت زمان را به ثانیه وارد کنید"
          {...register("songDuration", { required: true })}
          className="admin-input"
        />
        {errors.songDuration && (
          <p className="form-field-error">{errors.songDuration?.message}</p>
        )}
        {errors.songPath && (
          <p className="form-field-error">{errors.songPath?.message}</p>
        )}
        {/* <label>مسیر ادرس"Path Name":</label>
        <input
          type="text"
          placeholder="https://hakhamusic.app/music/onTheFloor"
          className="admin-input"
          {...register("songPathName")}
        />
        {errors.songPathName && (
          <p className="form-field-error">{errors.songPathName?.message}</p>
        )} */}
        <label> آلبوم:</label>
        <input type="text" className="admin-input" {...register("songAlbum")} />
        {errors.songAlbum && (
          <p className="form-field-error">{errors.songAlbum?.message}</p>
        )}
        <label> پلی لیست:</label>
        <input
          type="text"
          className="admin-input"
          {...register("songPlaylist")}
        />
        {errors.songPlaylist && (
          <p className="form-field-error">{errors.songPlaylist?.message}</p>
        )}
        <label>ژانر</label>
        <select id="genre" className="admin-select" {...register("songGenre")}>
          <option value="">یک مورد را انتخاب کنید</option>
          <option value="pop">پاپ</option>
          <option value="رپ">رپ</option>
          <option value="بی کلام">بی کلام</option>
          <option value="دنس الکترونیک">دنس الکترونیک</option>
        </select>
        <label>ژانر به انگلیسی</label>
        <input
          type="text"
          placeholder="pop"
          className="admin-input"
          {...register("songEnGenre")}
        />
        {errors.songEnGenre && (
          <p className="form-field-error">{errors.songEnGenre?.message}</p>
        )}
      </div>
      <button type="submit" className="admin-button">
        {isLoading ? "لودلیگ" : "ذخیره"}
      </button>
    </form>
  );
};

export default AddMusicForm;
