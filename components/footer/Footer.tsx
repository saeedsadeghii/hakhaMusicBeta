import { InstagramFill, TelegramFill, XFill } from "akar-icons";
import Link from "next/link";
import React from "react";
import { Instagram } from "react-content-loader";

const Footer = () => {
  return (
    <footer className="footer shadow-2xl">
      <div className="h-full flex flex-col">
        <div className="flex flex-col items-center md:flex-row gapy-5 gap-x-20 h-full px-[5vw]">
          <div className="flex-1 h-60 mb-5 md:mb-0">
            <h1 className="gradient-text text-5xl font-yekanBlack mb-5">
              هخاموزیک
            </h1>
            <p>
              هخاموزیک، دنیایی از نغمه‌های دلنشین و لحن‌های ماندگار، در انتظار
              شماست.
              <br />
              ما تلاش می‌کنیم تا با ارائه جدیدترین و باکیفیت‌ترین موسیقی‌ها،
              تجربه‌ای لذت‌بخش از شنیدن موسیقی را برای شما رقم بزنیم.
            </p>
          </div>
          <div className="flex-2 flex md:flex-row flex-col gap-y-5 md:gap-y-0 w-full md:w-fit justify-around items-center">
            <div className="flex flex-2 w-full md:w-fit justify-around">
              <div className="w-1/3 md:flex-1 ">
                <h2 className="gradient-text text-3xl underline mb-5">شروع</h2>
                <ul className="pr-3 pt-3 flex flex-col gap-y-3">
                  <li className="footer-item-li">
                    <Link href={`/auth`}>ورود</Link>
                  </li>
                  <li className="footer-item-li">
                    <Link href={`/auth`}>جدید ترین ها</Link>
                  </li>
                  <li className="footer-item-li">
                    <Link href={`/auth`}>خواننده ها</Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/3 md:flex-1">
                <h2 className="gradient-text text-3xl underline mb-5">شروع</h2>
                <ul className="pr-3 pt-3 flex flex-col gap-y-3">
                  <li className="footer-item-li">
                    <Link href={`/auth`}>ورود</Link>
                  </li>
                  <li className="footer-item-li">
                    <Link href={`/auth`}>جدید ترین ها</Link>
                  </li>
                  <li className="footer-item-li">
                    <Link href={`/auth`}>خواننده ها</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center md:justify-start">
              <h2 className="gradient-text text-3xl underline mb-5 ">
                شبکه های اجتماعی
              </h2>
              <ul className="pr-3 pt-3 flex gap-x-5 ">
                <li className="footer-item-social-media">
                  <Link href={`/auth`}>
                    <InstagramFill strokeWidth={1.5} size={36} />
                  </Link>
                </li>
                <li className="footer-item-social-media">
                  <Link href={`/auth`}>
                    <TelegramFill strokeWidth={1.5} size={36} />
                  </Link>
                </li>
                <li className="footer-item-social-media">
                  <Link href={`/auth`}>
                    <XFill strokeWidth={1.5} size={36} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-ful">
          <div className="flex items-center gap-x-1">
            <span className="text-2xl">&#169;</span>
            <span>تمامی حقوق محفوظ است</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
