"use client";
import React from 'react'
import prisma from "@/utils/db";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    addAlbumReactHookForm,
    addPlaylistReactHookForm,
} from "@/actions/_actions";
import { toast } from "sonner";
const AddPlaylistForm = () => {
    const schema = yup.object().shape({
        playlistName: yup.string().required("این ایتم نمی تواند تهی باشد"),
        singerName: yup.string().required("این ایتم نمی تواند تهی باشد"),
        enSingerName: yup.string().required("فیلد بایستی وارد شود"),
        orginalSingerName: yup.string().required("فیلد بایستی وارد شود"),
        playlistPathName: yup.string().required("فیلد بایستی وارد شود"),
        playlistGenre: yup.string().required("فیلد بایستی انتخاب شود شود"),
        playlistEnGenre: yup.string().required("فیلد بایستی انتخاب شود شود"),
        playlistCover: yup.string().required("فیلد بایستی انتخاب شود شود"),
        playlistDate: yup.date().required("فیلد بایستی انتخاب شود شود"),
      });
      const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
      } = useForm({ resolver: yupResolver(schema) });
    
      const OnFormSubmit = async (data: any) => {
        console.log("data is:",data)
        try {
          const sentData = await addPlaylistReactHookForm(data);
          const promise = () =>
            new Promise((resolve) =>
              setTimeout(() => resolve({ name: "Sonner" }), 1500)
            );
          toast.promise(promise, {
            loading: "Loading...",
            success: () => {
              return `${data.playlistName} اضافه شد`;
            },
            error: "Error",
          });
        } catch (error) {
          return toast.error("یک مشکلی پیش اومد کنسول رو چک کن!");
        }
      };
  return (
    <div className="w-96 h-[90vh] p-5 article-glass rounded-2xl overflow-y-scroll">
      <form
        onSubmit={handleSubmit(OnFormSubmit)}
        dir="ltr"
        className="flex flex-col gap-y-2"
      >
        <label>نام پلی لیست:</label>
        <input
          placeholder="This Is Acting"
          type="text"
          {...register("playlistName")}
          className="admin-input"
        />
        {errors.playlistName && (
          <p className="form-field-error">{errors.playlistName?.message}</p>
        )}
        <label>نام مسیر مسیر پلی لیست</label>
        <input
          type="text"
          placeholder="ThisIsActing"
          {...register("playlistPathName")}
          className="admin-input"
        />
        {errors.playlistPathName && (
          <p className="form-field-error">{errors.playlistPathName?.message}</p>
        )}
        <label>خواننده:</label>
        <input
          placeholder="د ویکند"
          type="text"
          className="admin-input"
          {...register("singerName")}
        />
        {errors.singerName && (
          <p className="form-field-error">
            {errors.singerName?.message}
          </p>
        )}
        <label>خواننده به انگلیسی:</label>
        <input
          placeholder="The Weeknd"
          type="text"
          className="admin-input"
          {...register("orginalSingerName")}
        />
        {errors.orginalSingerName && (
          <p className="form-field-error">
            {errors.orginalSingerName?.message}
          </p>
        )}
        <label>اسم خواننده بدون فاصله:</label>
        <input
          placeholder="TheWeeknd"
          type="text"
          className="admin-input"
          {...register("enSingerName")}
        />
        {errors.enSingerName && (
          <p className="form-field-error">
            {errors.enSingerName?.message}
          </p>
        )}
        <label>عکس پلی لیست</label>
        <input
          type="text"
          placeholder="/playlistPic/GENRE/SINGER OR SEPRATE/NAME.*"
          className="admin-input"
          {...register("playlistCover")}
        />
        {errors.playlistCover && (
          <p className="form-field-error">{errors.playlistCover?.message}</p>
        )}
        <label>تاریخ پخش پلی لیست</label>
        <input
          type="date"
          className="admin-input"
          {...register("playlistDate")}
        />
        {errors.playlistDate && (
          <p className="form-field-error">{errors.playlistDate?.message}</p>
        )}
        <label>سبک آلبوم ؟</label>
        <select
          id="genre"
          className="admin-select"
          {...register("playlistGenre")}
        >
          <option value="">یک مورد را انتخاب کنید</option>
          <option value="پاپ">پاپ</option>
          <option value="رپ">رپ</option>
          <option value="جاز">جاز</option>
          <option value="دنس الکترونیک">دنس الکترونیک</option>
          <option value="بی کلام">بی کلام</option>
          <option value="هیپ هاپ">هیپ هاپ</option>
          <option value="راک">راک</option>
          <option value="کلاسیک">کلاسیک</option>
          <option value="بلوز">بلوز</option>
        </select>
        <label>سبک پلی لیست  به انگلیسی ؟</label>
        <select
          id="genre"
          className="admin-select"
          {...register("playlistEnGenre")}
        >
          <option value="">یک مورد را انتخاب کنید</option>
          <option value="pop">پاپ</option>
          <option value="rap">رپ</option>
          <option value="jazz">جاز</option>
          <option value="dance electronic">دنس الکترونیک</option>
          <option value="wordless">بی کلام</option>
          <option value="hip hop">هیپ هاپ</option>
          <option value="rock">راک</option>
          <option value="clasic">کلاسیک</option>
          <option value="bluz">بلوز</option>
        </select>
        
        
        <button type="submit" className="admin-button">
          {isLoading ? "لودلیگ" : "ذخیره"}
        </button>
      </form>
    </div>
  )
}

export default AddPlaylistForm