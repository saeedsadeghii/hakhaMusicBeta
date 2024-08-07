"use client";
import prisma from "@/utils/db";
import React from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import {
  addArtistReactHookForm,
  addMusicReactHookForm,
} from "@/actions/_actions";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const AddSingerForm = () => {
  const router = useRouter();
  const schema = yup.object().shape({
    singerName: yup.string().required("این ایتم نمی تواند تهی باشد"),
    // enSingerName: yup.string().required("این ایتم نمی تواند تهی باشد"),
    orginalSingerName: yup.string().required("فیلد بایستی وارد شود"),
    singerCover: yup.string().required("فیلد بایستی وارد شود"),
    singerNational: yup.string().required("فیلد بایستی وارد شود"),
    singerDiscription: yup.string().required("فیلد بایستی وارد شود"),
    singerFamous: yup.string().required("فیلد بایستی انتخاب شود شود"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema) });

  const OnFormSubmit = async (data: any) => {
    try {
      const sentData = await addArtistReactHookForm(data);
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Sonner" }), 1500)
        );
      toast.promise(promise, {
        loading: "Loading...",
        success: () => {
          return `${data.singerName} اضافه شد`;
        },
      });
    } catch (error) {
      return toast.error("یک مشکلی پیش اومد کنسول رو چک کن!");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(OnFormSubmit)}
        dir="ltr"
        className="flex flex-col gap-y-2 w-96"
      >
        <label>نام خواننده:</label>
        <input
          placeholder="د ویکند"
          type="text"
          {...register("singerName")}
          className="admin-input"
        />
        {errors.singerName && (
          <p className="form-field-error">{errors.singerName?.message}</p>
        )}
        {/* <label>نام مسیر خواننده</label>
        <input
          type="text"
          placeholder="theWeeknd"
          {...register("enSingerName")}
          className="admin-input"
        />
        {errors.enSingerName && (
          <p className="form-field-error">{errors.enSingerName?.message}</p>
        )} */}
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
        <label>ملیت خواننده</label>
        <input
          type="text"
          //value={`/musicAlbums/`}
          placeholder="امریکایی"
          className="admin-input"
          {...register("singerNational")}
        />
        {errors.singerNational && (
          <p className="form-field-error">{errors.singerNational?.message}</p>
        )}
        <label>توضیحات خواننده</label>
        <textarea
          //value={`/music/`}
          placeholder="یک خوانده محبوب امریکایی کانادایی است"
          className="admin-input"
          {...register("singerDiscription")}
        ></textarea>
        {errors.singerDiscription && (
          <p className="form-field-error">
            {errors.singerDiscription?.message}
          </p>
        )}
        <label>عکس خواننده</label>
        <input
          type="text"
          placeholder="امریکایی"
          className="admin-input"
          {...register("singerCover")}
        />
        {errors.singerCover && (
          <p className="form-field-error">{errors.singerCover?.message}</p>
        )}
        <label>خواننده محبوبه ؟</label>
        <select
          id="genre"
          className="admin-select"
          {...register("singerFamous")}
        >
          <option value="">یک مورد را انتخاب کنید</option>
          <option value="yes">بله</option>
          <option value="no">خیر</option>
        </select>
        <button type="submit" className="admin-button">
          {isLoading ? "لودلیگ" : "ذخیره"}
        </button>
      </form>
    </div>
  );
};

export default AddSingerForm;
