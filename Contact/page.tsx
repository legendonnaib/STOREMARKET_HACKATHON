'use client';

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="logo-img"
            width={50}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <h1 className="font-title text-lg font-bold">Furniro</h1>
        </div>

        <nav className="flex items-center justify-between w-full">
          <ul className="flex items-center space-x-6 mx-auto">
            <li><Link href="/" target="_blank">Home</Link></li>
            <li><Link href="/Shop" target="_blank">Shop</Link></li>
            <li><Link href="/Blog" target="_blank">Blog</Link></li>
            <li><Link href="/Contact" target="_blank">Contact</Link></li>
          </ul>

          <div className="flex items-center gap-[45px] ml-auto">
            <Link href="/profile">
              <Icon icon="mdi:account-outline" className="w-7 h-7 text-black" aria-label="Account" />
            </Link>
            <Link href="/search">
              <Icon icon="mdi:magnify" className="w-7 h-7 text-black" aria-label="Search" />
            </Link>
            <Link href="/wishlist">
              <Icon icon="mdi:heart-outline" className="w-7 h-7 text-black" aria-label="Wishlist" />
            </Link>
            <Link href="/cart">
              <Icon icon="mdi:cart-outline" className="w-7 h-7 text-black" aria-label="Cart" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/images/header.png"
          alt="header"
          width={1440}
          height={316}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="mt-2 text-lg">
            <span className="text-black-300">Home</span> &gt; <span className="text-black">Contact</span>
          </p>
        </div>
      </div>


    <section className="md:mt-[98px] mt-10 px-5 mb-[63px] max-w-[1440px] mx-auto">
        <div className="text-center max-w-[644px] mx-auto ">
            <h1 className="text-black text-[36px] font-semibold leading-normal">Get In Touch With Us</h1>
            <p className="text-[#9F9F9F] text-center text-[16px] font-normal leading-normal">For More Information About Our
                Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always
                Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="flex md:gap-10 flex-wrap md:justify-center mt-20 ">
            <div className="md:w-[40%] mt-9 px-5">


                <div className="flex items-start gap-[30px]">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" fill="none">
                            <path
                                d="M11 0.120087C8.08369 0.123477 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123477 11 0.120087ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.7698C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013Z"
                                fill="black" />
                        </svg>
                    </div>
                    <div className="max-w-[212px]">
                        <h4 className="text-black text-[24px] font-medium leading-normal">Address</h4>
                        <p className="text-black text-[16px] font-normal leading-normal">236 5th SE Avenue, New York
                            NY10000, United States</p>
                    </div>
                </div>
                <div className="flex items-start   gap-[30px] my-[42px]">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M25.6091 21.425L20.5279 16.805C20.2877 16.5867 19.972 16.4703 19.6476 16.4803C19.3232 16.4903 19.0154 16.626 18.7891 16.8587L15.7979 19.935C15.0779 19.7975 13.6304 19.3462 12.1404 17.86C10.6504 16.3687 10.1991 14.9175 10.0654 14.2025L13.1391 11.21C13.3721 10.9839 13.508 10.676 13.5181 10.3515C13.5281 10.027 13.4115 9.71129 13.1929 9.47124L8.5741 4.39124C8.35541 4.15044 8.05145 4.00437 7.72679 3.98407C7.40214 3.96376 7.08235 4.07082 6.83535 4.28249L4.12285 6.60874C3.90674 6.82564 3.77775 7.11431 3.76035 7.41999C3.7416 7.73249 3.3841 15.135 9.1241 20.8775C14.1316 25.8837 20.4041 26.25 22.1316 26.25C22.3841 26.25 22.5391 26.2425 22.5804 26.24C22.886 26.2229 23.1745 26.0933 23.3904 25.8762L25.7154 23.1625C25.9279 22.9163 26.0357 22.5968 26.0159 22.2721C25.996 21.9475 25.85 21.6435 25.6091 21.425Z"
                                fill="black" />
                        </svg>
                    </div>
                    <div className="max-w-[212px] ">
                        <h4 className="text-black text-[24px] font-medium leading-normal">Address</h4>
                        <p className="text-black text-[16px] font-normal leading-normal">Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className="flex items-start gap-[30px]">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g clip-path="url(#clip0_63_247)">
                                <path
                                    d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_247">
                                    <rect width="23" height="23" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="max-w-[212px]">
                        <h4 className="text-black text-[24px] font-medium leading-normal">Address</h4>
                        <p className="text-black text-[16px] font-normal leading-normal">Monday-Friday: 9:00 - 22:00
                            Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[50%] w-full px-5 ">
                <form action="#">
                <div>
                    <label className="block w-full mb-[22px] mt-[36px]" >Your Name</label>
                    <div className="border border-[#9F9F9F] rounded-[10px] bg-white py-[16px] max-w-[528.75px]">
                        <input type="text" placeholder="Your Name" id="name"/>
                    </div>
                </div>
                <div>
                    <label className="block w-full mb-[22px] mt-[36px]">Email address</label>
                    <div className="border border-[#9F9F9F] rounded-[10px] bg-white py-[16px] max-w-[528.75px]">
                        <input type="email" placeholder="Email Address" id="email"/>
                    </div>
                </div>
                <div>
                    <label className="block w-full mb-[22px] mt-[36px]">Subject</label>
                    <div className="border border-[#9F9F9F] rounded-[10px] bg-white py-[16px] max-w-[528.75px]">
                        <input type="text" placeholder="Subject" id="subject"/>
                    </div>
                </div>

                <div>
                    <label className="block w-full mb-[22px] mt-[36px]">Message</label>
                    <div className="border border-[#9F9F9F] rounded-[10px] bg-white py-[16px] max-w-[528.75px]">
                        <textarea name="Message" id="msg"
                            className="outline-none bg-transparent border-none w-full pl-[29px] resize-none"
                            placeholder="Hi! i’d like to ask about">
                            </textarea>

                    </div>
                </div>

                <div className="mt-[49px]">
                    <button
                        className="text-white text-[16px] font-normal leading-normal bg-[#B88E2F] rounded-[5px] px-[89px] py-[13px]"
                        type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </section>



    <section className="bg-[#FAF3EA] py-[100px] mt-[58px]">
        <div className="feature md:flex md:px-[53px] px-10 md:justify-around  flex-wrap max-w-[1440px] mx-auto">
            <div className="flex gap-[10px] flex-wrap">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path
                            d="M49.3547 3.51562C48.0744 3.51562 46.8741 3.86121 45.839 4.46156V1.75781C45.839 0.787031 45.052 0 44.0812 0H15.9562C14.9853 0 14.1983 0.787031 14.1983 1.75781V4.48301C13.155 3.8693 11.941 3.51562 10.6455 3.51562C6.76848 3.51562 3.61426 6.66984 3.61426 10.5469C3.61426 13.5041 4.49059 16.3615 6.14844 18.8102C8.97078 22.9789 12.4511 24.0607 15.331 25.2127C16.9916 29.348 20.3496 32.6252 24.5384 34.1769L23.2422 42.4219H22.9875C20.0797 42.4219 17.714 44.7875 17.714 47.6953V56.4844H15.9562C14.9854 56.4844 14.1984 57.2714 14.1984 58.2422C14.1984 59.213 14.9854 60 15.9562 60H44.0812C45.052 60 45.839 59.213 45.839 58.2422C45.839 57.2714 45.052 56.4844 44.0812 56.4844H42.3234V47.6953C42.3234 44.7875 39.9577 42.4219 37.05 42.4219H36.7952L35.4991 34.177C39.6941 32.623 43.0558 29.3386 44.7139 25.1948C47.4344 24.1066 51.0005 23.0217 53.8518 18.8102C55.5097 16.3615 56.386 13.504 56.386 10.5469C56.3859 6.66984 53.2317 3.51562 49.3547 3.51562ZM14.1853 20.968C9.89926 19.2536 7.12988 15.1631 7.12988 10.5469C7.12988 8.60836 8.70699 7.03125 10.6455 7.03125C12.584 7.03125 14.1611 8.60836 14.1611 10.5469C14.1611 10.6705 14.1741 10.791 14.1984 10.9073V19.3359C14.1984 19.9009 14.2288 20.4588 14.2869 21.0087L14.1853 20.968ZM38.8078 56.4844H21.2296V52.9688H38.8078V56.4844ZM37.05 45.9375C38.0192 45.9375 38.8078 46.7261 38.8078 47.6953V49.4531H21.2296V47.6953C21.2296 46.7261 22.0182 45.9375 22.9875 45.9375C23.9411 45.9375 34.8134 45.9375 37.05 45.9375ZM26.801 42.4219L27.9642 35.023C28.6368 35.1107 29.3225 35.1562 30.0187 35.1562C30.7149 35.1562 31.4006 35.1105 32.0732 35.023L33.2364 42.4219H26.801ZM42.3234 19.3359C42.3234 26.1207 36.8035 31.6406 30.0187 31.6406C23.2339 31.6406 17.714 26.1207 17.714 19.3359V10.5469H42.3234V19.3359ZM42.3234 7.03125H17.714V3.51562H42.3234V7.03125ZM45.8148 20.968L45.7523 20.993C45.8093 20.4483 45.8389 19.8955 45.8389 19.3359V10.5469C45.839 8.60836 47.4161 7.03125 49.3547 7.03125C51.2932 7.03125 52.8703 8.60836 52.8703 10.5469C52.8703 15.1631 50.1009 19.2537 45.8148 20.968Z"
                            fill="#242424" />
                    </svg>
                </div>
                <div>
                    <h1>High Quality</h1>
                    <p className="text-[20px] font-medium leading-[150%] text-[#898989] mt-3">crafted from top materials</p>
                </div>
            </div>
            <div className="flex gap-[10px] flex-wrap my-8 md:my-0">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                        <g clip-path="url(#clip0_117_3326)">
                            <path
                                d="M57.119 21.2612C56.3273 18.8097 56.6648 15.1296 54.607 12.2882C52.533 9.42438 48.9259 8.61039 46.889 7.1207C44.8736 5.64672 42.9986 2.43918 39.6085 1.33293C36.314 0.257852 32.9451 1.71672 30.333 1.71672C27.7213 1.71672 24.3526 0.2575 21.0575 1.33281C17.668 2.43883 15.7914 5.64707 13.7773 7.12035C11.7427 8.60828 8.13289 9.42449 6.05926 12.2879C4.0032 15.127 4.3373 18.8154 3.54699 21.2611C2.79488 23.5888 0.333008 26.3825 0.333008 30.0003C0.333008 33.6203 2.79207 36.4032 3.54699 38.7393C4.33871 41.1909 4.00121 44.8709 6.05902 47.7123C8.13289 50.5763 11.7399 51.3902 13.777 52.88C15.792 54.3537 17.6674 57.5615 21.0575 58.6676C24.3498 59.742 27.7239 58.2838 30.333 58.2838C32.9384 58.2838 36.3205 59.7405 39.6085 58.6677C42.9982 57.5617 44.8735 54.3542 46.8887 52.8802C48.9233 51.3923 52.5331 50.5761 54.6068 47.7127C56.6629 44.8735 56.3286 41.1854 57.119 38.7394C57.8711 36.4116 60.333 33.618 60.333 30.0003C60.333 26.3805 57.8745 23.5984 57.119 21.2612ZM52.6587 37.298C51.7359 40.1545 51.9777 43.3512 50.8105 44.963C49.6276 46.5962 46.5199 47.3423 44.1219 49.0963C41.7501 50.8308 40.0878 53.5804 38.1545 54.2112C36.3254 54.8082 33.3446 53.5961 30.3331 53.5961C27.2996 53.5961 24.3495 54.8107 22.5117 54.2112C20.5786 53.5804 18.9186 50.8327 16.5443 49.0962C14.1604 47.3528 11.035 46.5914 9.85555 44.9628C8.69211 43.3564 8.92473 40.1375 8.0075 37.2981C7.10844 34.5162 5.02051 32.1074 5.02051 30.0003C5.02051 27.891 7.10656 25.4905 8.00727 22.7025C8.93012 19.8462 8.68836 16.6492 9.85555 15.0375C11.0377 13.4054 14.1478 12.6569 16.5443 10.9042C18.9235 9.1641 20.5754 6.42109 22.5114 5.78934C24.339 5.19309 27.3295 6.40445 30.3329 6.40445C33.3719 6.40445 36.3146 5.18898 38.1543 5.78934C40.0872 6.42004 41.7486 9.16879 44.1219 10.9043C46.5054 12.6477 49.631 13.4091 50.8105 15.0377C51.9741 16.6444 51.7402 19.86 52.6585 22.7023V22.7024C53.5576 25.4843 55.6455 27.8931 55.6455 30.0003C55.6455 32.1095 53.5595 34.51 52.6587 37.298ZM41.131 22.4774C42.0464 23.3928 42.0464 24.8767 41.131 25.792L29.3998 37.5231C28.4845 38.4385 27.0004 38.4384 26.0852 37.5231L19.5351 30.973C18.6198 30.0577 18.6196 28.5737 19.535 27.6585C20.4504 26.7433 21.9345 26.7432 22.8495 27.6585L27.7425 32.5513L37.8162 22.4775C38.7316 21.5622 40.2157 21.5622 41.131 22.4774Z"
                                fill="#242424" />
                        </g>
                        <defs>
                            <clipPath id="clip0_117_3326">
                                <rect width="60" height="60" fill="white" transform="translate(0.333008)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h1>Warranty Protection</h1>
                    <p className="text-[20px] font-medium leading-[150%] text-[#898989] mt-3">Over 2 years</p>
                </div>
            </div>
            <div className="flex gap-[10px] flex-wrap my-8 md:my-0">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                        <g clip-path="url(#clip0_117_3334)">
                            <path
                                d="M56.0149 31.1019V3.77964C56.0149 2.80489 55.2247 2.01465 54.2499 2.01465H6.9621C5.98736 2.01465 5.19711 2.80489 5.19711 3.77964V33.28C4.34568 33.404 3.51331 33.7346 2.77696 34.2812C0.455644 35.9273 -0.0933855 39.6109 1.85104 41.8827L9.80091 51.5204C14.7219 57.2798 19.9495 57.9854 27.7208 57.9854C34.3898 57.9854 37.3713 58.0148 43.1835 56.6905L48.8429 55.3369C49.7606 56.6184 51.2175 57.4485 52.8552 57.4485H55.6432C58.4133 57.4485 60.667 55.0744 60.667 52.1561V36.3784C60.6671 33.592 58.6119 31.3031 56.0149 31.1019ZM48.0817 34.7326L45.73 33.5382C41.8634 31.5865 37.3929 31.5142 33.4652 33.3403C32.3936 33.7618 30.0564 35.1759 28.8441 35.1286H20.6837C17.9769 35.1286 15.7747 37.3307 15.7747 40.0376V41.3247C15.7595 41.3087 15.7436 41.2936 15.7287 41.2773L9.90128 34.9519C9.54864 34.5692 9.15245 34.2489 8.72721 33.9919V16.481H23.1711V22.951C23.1711 23.9257 23.9613 24.7159 24.9361 24.7159H36.0732C37.048 24.7159 37.8382 23.9257 37.8382 22.951V16.481H52.4851V31.1018C50.4229 31.2611 48.7033 32.7364 48.0817 34.7326ZM26.7009 16.481H34.3081V21.186H26.7009V16.481ZM52.485 12.951H37.8382V5.54463H52.4851V12.951H52.485ZM34.3083 5.54463V12.9511H26.701V5.54463H34.3083ZM23.1709 5.54463V12.9511H8.72709V5.54463H23.1709ZM42.3643 53.2568C36.9952 54.4865 33.7616 54.4367 27.7842 54.4367C20.4889 54.4367 16.9639 54.3188 12.5242 49.274L4.57431 39.6363C3.1915 37.8357 5.69613 35.7101 7.3051 37.3435L13.1325 43.669C14.6726 45.2941 16.6107 46.1885 18.9994 46.2411H35.1559C36.1307 46.2411 36.9209 45.4508 36.9209 44.4761C36.9209 43.5013 36.1307 42.7111 35.1559 42.7111H19.3046V40.0373C19.3046 39.277 19.9231 38.6583 20.6836 38.6583H28.844C30.6824 38.79 33.3359 37.2549 34.9533 36.541C37.895 35.1733 41.2433 35.2274 44.1354 36.6872L47.8317 38.5646V51.9489L42.3643 53.2568ZM57.1371 52.156C57.1371 53.1278 56.467 53.9184 55.6433 53.9184H52.8554C52.0317 53.9184 51.3617 53.1278 51.3617 52.156V36.3784C51.3617 35.4066 52.0318 34.6159 52.8554 34.6159H55.6433C56.467 34.6159 57.1371 35.4065 57.1371 36.3784V52.156Z"
                                fill="#242424" />
                        </g>
                        <defs>
                            <clipPath id="clip0_117_3334">
                                <rect width="60" height="60" fill="white" transform="translate(0.666992)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h1>Free Shipping</h1>
                    <p className="text-[20px] font-medium leading-[150%] text-[#898989] mt-3">Order over 150 $</p>
                </div>
            </div>
            <div className="flex gap-[10px] flex-wrap">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <g clip-path="url(#clip0_117_3340)">
                            <path
                                d="M54.6935 23.9628C54.2992 10.6825 43.3741 0 29.9999 0C16.6257 0 5.70059 10.6825 5.30612 23.9628L3.5293 25.7396V37.7898L5.294 39.5545V47.7647C5.294 52.5652 9.19941 56.4706 13.9999 56.4706H16.1858C16.9142 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7986 56.4681 29.8997 56.4706 29.9999 56.4706C38.522 56.4706 45.6526 50.3981 47.2921 42.3529H51.9073L56.4705 37.7898V25.7396L54.6935 23.9628ZM29.9999 3.52941C40.4741 3.52941 49.1953 11.174 50.8806 21.1765H47.2921C45.6526 13.1313 38.522 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11918C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6708 21.1765C37.9662 21.1594 33.9368 21.5068 30.6147 16.6506L29.0015 14.2926L27.6152 16.7907C25.5952 20.4306 22.8748 21.1765 19.4117 21.1765H16.3289C17.9001 15.0944 23.4337 10.5882 29.9999 10.5882C36.5661 10.5882 42.0997 15.0944 43.6708 21.1765ZM12.3528 38.8235H9.55436L7.05871 36.3279V27.2015L9.55436 24.7059H12.3528V38.8235ZM8.82341 47.7647V42.3529H12.7042C13.3686 45.6441 14.9581 48.6652 17.3129 51.0916C16.8193 51.6191 16.4321 52.2467 16.1858 52.9412H13.9999C11.1455 52.9412 8.82341 50.6191 8.82341 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6788 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6788 56.4706 24.7058 56.4706ZM44.1175 38.8235C44.1175 46.608 37.7844 52.9412 29.9999 52.9412C29.8987 52.9412 29.7967 52.9392 29.6948 52.9368C28.9652 50.8851 27.0047 49.4118 24.7058 49.4118C21.0822 49.4198 21.14 49.3936 20.6884 49.4352C17.6246 46.7498 15.8822 42.9248 15.8822 38.8235V24.7059H19.4117C22.5348 24.7059 26.3384 24.1909 29.2826 20.6076C33.1673 24.6786 37.9146 24.7059 42.1761 24.7059H44.1175V38.8235ZM52.9411 36.3279L50.4454 38.8235H47.6469V24.7059H50.4454L52.9411 27.2015V36.3279Z"
                                fill="#242424" />
                        </g>
                        <defs>
                            <clipPath id="clip0_117_3340">
                                <rect width="60" height="60" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h1 className="text-[#242424] font-poppins text-xl font-semibold leading-[1.5]">24 / 7 Support</h1>
                    <p className="text-[20px] font-medium leading-[150%] text-[#898989] mt-1">Dedicated support</p>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
     
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
          Newsletter
        </h3>
      </div>

      <div>
        <form
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          action="/subscribe"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
  
      <h2 className="font-title"><b>Funiro</b></h2>

      <div>
        <h3 className="font-bold text-lg mb-4">Courses</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Business</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Development</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Technology</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Programming</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Career</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Resume</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Learning</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Interview Preparation</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Jobs</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">About Us</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Help/Support</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms and Conditions</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Partners</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-600 mt-12">
    <p>&copy; 2023 furino. All rights reserved. <span className="text-blue-600 hover:text-blue-700">Privacy Policy</span> | <span className="text-blue-600 hover:text-blue-700">Terms of Service</span> | <span className="text-blue-600 hover:text-blue-700">Cookie Settings</span></p>
  </div>
    </section>
    </div>
  );
}
