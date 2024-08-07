"use client";
import prisma from "@/utils/db";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    addAlbumReactHookForm,
} from "@/actions/_actions";
import { toast } from "sonner";
const AddAlbumForm = () => {
  const schema = yup.object().shape({
    albumName: yup.string().required("این ایتم نمی تواند تهی باشد"),
    albumSinger: yup.string().required("این ایتم نمی تواند تهی باشد"),
    orginalSingerName: yup.string().required("فیلد بایستی وارد شود"),
    // enSingerName: yup.string().required("فیلد بایستی وارد شود"),
    // albumPathName: yup.string().required("فیلد بایستی وارد شود"),
    albumDuration: yup.number().required("فیلد بایستی وارد شود"),
    albumGenre: yup.string().required("فیلد بایستی انتخاب شود شود"),
    albumLanguage: yup.string().required("فیلد بایستی انتخاب شود شود"),
    albumCover: yup.string().required("فیلد بایستی انتخاب شود شود"),
    albumYear: yup.date().required("فیلد بایستی انتخاب شود شود"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema) });

  const OnFormSubmit = async (data: any) => {
    console.log("data is:",data)
    try {
      const sentData = await addAlbumReactHookForm(data);
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Sonner" }), 1500)
        );
      toast.promise(promise, {
        loading: "Loading...",
        success: () => {
          return `${data.albumName} اضافه شد`;
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
        <label>نام آلبوم:</label>
        <input
          placeholder="This Is Acting"
          type="text"
          {...register("albumName")}
          className="admin-input"
        />
        {errors.albumName && (
          <p className="form-field-error">{errors.albumName?.message}</p>
        )}
        <label>خواننده:</label>
        <input
          placeholder="د ویکند"
          type="text"
          className="admin-input"
          {...register("albumSinger")}
        />
        {errors.albumSinger && (
          <p className="form-field-error">
            {errors.albumSinger?.message}
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
        <label>عکس آلبوم</label>
        <input
          type="text"
          placeholder="/musicAlbums/Adele/21/21.jpg"
          className="admin-input"
          {...register("albumCover")}
        />
        {errors.albumCover && (
          <p className="form-field-error">{errors.albumCover?.message}</p>
        )}
        <label>مدت زمان آلبوم</label>
        <input
          type="text"
          placeholder="54000"
          className="admin-input"
          {...register("albumDuration")}
        />
        {errors.albumDuration && (
          <p className="form-field-error">{errors.albumDuration?.message}</p>
        )}
        <label>تاریخ پخش آلبوم</label>
        <input
          type="date"
          className="admin-input"
          {...register("albumYear")}
        />
        {errors.albumCover && (
          <p className="form-field-error">{errors.albumCover?.message}</p>
        )}
        <label>زبان آلبوم</label>
        <input
          type="text"
          placeholder="انگلیسی"
          className="admin-input"
          {...register("albumLanguage")}
        />
        {errors.albumLanguage && (
          <p className="form-field-error">{errors.albumLanguage?.message}</p>
        )}
        <label>سبک آلبوم ؟</label>
        <select
          id="genre"
          className="admin-select"
          {...register("albumGenre")}
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
        
        <button type="submit" className="admin-button">
          {isLoading ? "لودلیگ" : "ذخیره"}
        </button>
      </form>
    </div>
  );
};

export default AddAlbumForm;
