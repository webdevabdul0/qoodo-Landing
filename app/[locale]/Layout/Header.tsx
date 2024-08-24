"use client";

import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [headerToggle, setHeaderToggle] = useState(false);
  const [bg, setBg] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    // Change header background on scroll
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setBg(true);
      } else {
        setBg(false);
      }

      // Detect scroll direction
      const direction = window.scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY = window.scrollY;
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        bg ? "bg-[#08081a]" : ""
      } ${scrollDirection === "down" ? "-top-24" : "top-0"}`}
    >
      <div className="w-full sm:px-[20px] xl:px-[100px] sm:py-5">
        <div className="h-[90px] pl-[30px] pr-5 py-5 rounded-[30px] flex justify-between items-center">
          <div className="justify-start items-center gap-[50px] xl:gap-[100px] flex">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="40"
                viewBox="0 0 200 40"
                fill="none"
              >
                <path
                  d="M38.0808 21.1805V20.9558C38.0808 21.0307 38.0808 21.1056 38.0808 21.1805ZM35.9387 30.0859C34.3448 32.8631 32.0389 35.1661 29.2581 36.758C27.381 37.8337 25.3235 38.5591 23.1862 38.8988H38.0821V24.0254C37.7416 26.1587 37.0153 28.2123 35.9387 30.0859Z"
                  fill="#56FFFD"
                />
                <path
                  d="M37.936 18.6718C37.8979 18.3736 37.8509 18.0754 37.8001 17.7836C37.1732 14.2668 35.5016 11.0197 33.0025 8.46441C32.993 8.45363 32.9828 8.44346 32.972 8.43396C32.5646 8.01097 32.1368 7.61295 31.6887 7.23987C29.2886 5.20298 26.3892 3.84048 23.2878 3.29218C22.9956 3.24015 22.6983 3.1932 22.3985 3.1564C20.8799 2.96362 19.343 2.96362 17.8245 3.1564C17.5259 3.1932 17.2299 3.24015 16.9351 3.29218C13.6953 3.86742 10.6765 5.32186 8.20919 7.49624C5.74184 9.67063 3.9211 12.4811 2.94632 15.62C2.72689 16.3299 2.5508 17.0524 2.41904 17.7836C2.36695 18.0754 2.31994 18.3736 2.28309 18.6718C2.09176 20.1886 2.09176 21.7233 2.28309 23.24C2.31994 23.537 2.36695 23.8352 2.41904 24.1283C2.5508 24.8599 2.72689 25.5828 2.94632 26.2931C3.66212 28.5781 4.82852 30.697 6.3768 32.5249C6.73679 32.9479 7.11796 33.3569 7.5203 33.752C9.55523 35.7531 12.0376 37.2419 14.7624 38.0956C15.4712 38.3141 16.1925 38.49 16.9224 38.6222C17.2171 38.673 17.5132 38.7199 17.8118 38.7567C18.5701 38.8552 19.334 38.9043 20.0988 38.9039V32.2051C19.3768 32.1799 18.6589 32.0847 17.9553 31.9209V31.7458C15.8616 31.3046 13.9357 30.2804 12.4005 28.7917C11.9951 28.4002 11.6201 27.9785 11.2786 27.5303C9.82111 25.6264 9.03811 23.2929 9.05258 20.8963C9.07025 17.9916 10.2334 15.2109 12.29 13.157C14.3465 11.103 17.1307 9.94134 20.039 9.9237H20.0962C22.4764 9.92251 24.7907 10.7043 26.6815 12.1482C27.1273 12.4866 27.547 12.8582 27.9368 13.2598C29.4313 14.7941 30.4591 16.7206 30.901 18.8152H31.0763C31.2403 19.5179 31.3357 20.2348 31.3609 20.9559H38.0694C38.0697 20.1922 38.0209 19.4293 37.9233 18.6718"
                  fill="white"
                />
                <path
                  d="M20.1113 32.2052C20.1863 32.2052 20.2625 32.2115 20.3375 32.2128V38.9027H20.1113V32.2052Z"
                  fill="#030303"
                />
                <path
                  d="M31.1525 21.1805H31.3774C31.3774 21.2465 31.3774 21.3074 31.3774 21.381C31.3786 24.0437 30.3975 26.6134 28.6217 28.5994C26.8458 30.5853 24.3996 31.8482 21.7504 32.1468C21.3489 32.1927 20.945 32.2156 20.5408 32.2153C20.4722 32.2153 20.4062 32.2153 20.3414 32.2153V31.9894C20.737 31.9882 21.1323 31.9658 21.5255 31.9222C24.1704 31.6235 26.6129 30.3639 28.3881 28.3832C30.1633 26.4024 31.1472 23.8389 31.1525 21.1805Z"
                  fill="#030303"
                />
                <path
                  d="M38.082 20.9558C38.082 21.0307 38.082 21.1056 38.082 21.1805H31.3811C31.3811 21.106 31.3786 21.0311 31.3735 20.9558H38.082Z"
                  fill="#030303"
                />
                <path
                  d="M29.258 36.7632H35.9386L35.9387 30.0859C34.3448 32.8631 32.0389 35.1661 29.2581 36.758M35.8115 20.9508C35.8026 21.0257 35.7937 21.1006 35.7836 21.1754H35.9386V18.8152C35.9387 19.5306 35.8963 20.2455 35.8115 20.9559M20.1113 36.6363C19.4 36.721 18.6843 36.7633 17.9679 36.7632H20.3375V36.6084L20.1113 36.6363Z"
                  fill="#56FFFD"
                />
                <path
                  d="M35.7925 16.5311C35.7557 16.2329 35.7087 15.9347 35.6566 15.6428C35.1126 12.5971 33.7816 9.74602 31.7954 7.37185L31.6887 7.24495C28.9972 4.04265 25.2645 1.88676 21.1431 1.15401C20.8508 1.10198 20.5548 1.05503 20.2537 1.01823C18.735 0.827257 17.1984 0.827257 15.6797 1.01823C15.3811 1.05503 15.0851 1.10198 14.7903 1.15401C11.5524 1.73187 8.53571 3.18717 6.06966 5.36099C3.6036 7.53481 1.78299 10.3436 0.806637 13.4806C0.587849 14.1885 0.411773 14.9088 0.279358 15.6378C0.228536 15.9296 0.181526 16.2278 0.143409 16.526C-0.0478031 18.0428 -0.0478031 19.5775 0.143409 21.0942C0.181526 21.3899 0.228536 21.6881 0.279358 21.9825C0.41158 22.714 0.587657 23.4369 0.806637 24.1473C1.83338 27.411 3.76832 30.3156 6.38563 32.5224L6.51268 32.6239C8.31518 34.1218 10.394 35.2525 12.6317 35.9524C13.3403 36.1715 14.0616 36.3473 14.7916 36.479C15.0864 36.5297 15.3824 36.5779 15.681 36.6147C16.4394 36.7121 17.2033 36.7609 17.968 36.7607V29.8449C15.6087 29.8049 13.3209 29.0294 11.4246 27.6268L11.2976 27.5278C9.46107 26.1407 8.10679 24.2129 7.42567 22.0162C6.74456 19.8194 6.77095 17.4646 7.50114 15.2837C8.23133 13.1027 9.62849 11.2057 11.4956 9.86C13.3628 8.5143 15.6057 7.78782 17.9083 7.78299H17.9667C19.6603 7.78711 21.3299 8.18346 22.8442 8.94088C24.3586 9.6983 25.6764 10.7962 26.6941 12.1482L26.7945 12.2751C28.1971 14.1691 28.9722 16.4534 29.0116 18.8089H35.9386C35.9388 18.0452 35.89 17.2822 35.7925 16.5248"
                  fill="#4A60FF"
                />
                <path
                  d="M29.0141 19.0144C29.0144 19.4185 28.9915 19.8223 28.9455 20.2237C28.9099 20.5477 28.8599 20.8667 28.7955 21.1805C28.3712 23.2624 27.3431 25.1736 25.8391 26.6761C24.3352 28.1786 22.4219 29.206 20.3375 29.6304C20.0224 29.6947 19.7026 29.7451 19.3782 29.7814C18.9762 29.827 18.5719 29.8494 18.1674 29.8487H17.9679V18.8152H29.0115C29.0115 18.8812 29.0115 18.9421 29.0115 19.0144"
                  fill="#3ED8FF"
                />
                <path
                  d="M38.0821 24.0254C37.7416 26.1587 37.0153 28.2123 35.9387 30.0859C34.3448 32.8631 32.0389 35.1661 29.2581 36.758C26.5425 38.3111 23.4668 39.1267 20.3375 39.1235H38.3069V21.1805C38.3076 22.1333 38.2325 23.0846 38.0821 24.0254Z"
                  fill="#3ED8FF"
                />
                <path
                  d="M38.1609 18.8965C38.124 18.5983 38.077 18.3013 38.0249 18.0082C37.3811 14.3842 35.6261 11.0492 33.0025 8.46441C32.993 8.45363 32.9828 8.44346 32.972 8.43396C32.5959 8.06427 32.2036 7.71023 31.7954 7.37185C29.4172 5.39022 26.5621 4.06317 23.5127 3.52192C23.2205 3.47116 22.9244 3.42294 22.6233 3.38614C21.1046 3.19517 19.568 3.19517 18.0493 3.38614C17.752 3.42294 17.4547 3.47116 17.1599 3.52192C13.9219 4.09896 10.905 5.55364 8.43864 7.72706C5.9723 9.90048 4.15145 12.709 3.17498 15.8459C2.95676 16.5539 2.78111 17.2743 2.64897 18.0031C2.59688 18.2963 2.54987 18.5932 2.51302 18.8914C2.32011 20.4081 2.32011 21.943 2.51302 23.4596C2.54987 23.7553 2.59688 24.0535 2.64897 24.3479C2.78062 25.0794 2.95627 25.8023 3.17498 26.5127C3.87427 28.7474 5.00519 30.8236 6.50382 32.624C6.82654 33.0135 7.16705 33.3853 7.52026 33.7495C9.59589 35.8628 12.1616 37.4319 14.9898 38.3177C15.6985 38.5368 16.4198 38.7126 17.1498 38.8443C17.4433 38.8964 17.7406 38.9433 18.0392 38.9801C18.7976 39.0775 19.5615 39.1262 20.3261 39.126V32.2103C20.2512 32.2103 20.1749 32.2103 20.1 32.2027C19.378 32.1774 18.6601 32.0822 17.9566 31.9184C15.8432 31.428 13.9152 30.3419 12.4017 28.7892C10.3959 26.7389 9.27513 23.9849 9.27998 21.1184C9.29797 18.214 10.4613 15.4336 12.5178 13.3799C14.5743 11.3263 17.3583 10.1647 20.2664 10.1471H20.3236C23.1696 10.1582 25.8999 11.2734 27.938 13.2573C29.4964 14.7701 30.5862 16.6985 31.0775 18.8127C31.2416 19.5154 31.3369 20.2324 31.3622 20.9534C31.3622 21.0279 31.3647 21.1028 31.3698 21.1781H38.2956C38.2957 20.4143 38.2469 19.6514 38.1494 18.8939"
                  fill="white"
                />
                <path
                  d="M31.3824 21.381C31.3835 24.0445 30.4017 26.6149 28.6248 28.6009C26.8479 30.587 24.4005 31.8494 21.7504 32.1468C21.3489 32.1927 20.945 32.2156 20.5408 32.2153C20.4722 32.2153 20.4062 32.2153 20.3414 32.2153V21.1805L31.3811 21.1805C31.3811 21.2464 31.3812 21.3074 31.3812 21.381"
                  fill="white"
                />
                <path
                  d="M64.5743 25.984H59.034L61.5351 28.7399C61.397 28.7487 61.2539 28.7525 61.1058 28.7525C60.1468 28.7512 59.2098 28.4662 58.4129 27.9334C57.6161 27.4006 56.9951 26.6439 56.6285 25.759C56.2619 24.874 56.166 23.9004 56.353 22.961C56.5399 22.0217 57.0014 21.1587 57.6791 20.4811C58.4699 19.6983 59.506 19.2107 60.6139 19.1C61.7218 18.9892 62.8342 19.262 63.7647 19.8727C64.6952 20.4834 65.3873 21.3949 65.7251 22.4545C66.0629 23.5141 66.0259 24.6575 65.6203 25.6931L69.0686 29.4734C70.2235 27.8579 70.8005 26.003 70.7996 23.9085C70.7996 21.2323 69.8537 18.9482 67.9618 17.0561C66.0699 15.1641 63.7862 14.2176 61.1109 14.2168C58.4338 14.2168 56.1489 15.1628 54.2561 17.0549C52.3634 18.9469 51.417 21.2311 51.417 23.9073C51.417 26.5852 52.3634 28.8697 54.2561 30.7609C56.1489 32.6521 58.4338 33.5982 61.1109 33.599C62.5146 33.6149 63.9047 33.3217 65.1821 32.7403L65.9584 33.599H71.4974L64.5743 25.984Z"
                  fill="white"
                />
                <path
                  d="M91.2597 17.0083C89.35 15.0918 87.0487 14.1339 84.3556 14.1348C81.6625 14.1356 79.3582 15.0934 77.4426 17.0083C75.5329 18.9163 74.5781 21.2165 74.5781 23.9087C74.5781 26.6009 75.5329 28.9044 77.4426 30.8193C79.3522 32.729 81.6566 33.6839 84.3556 33.6839C87.0546 33.6839 89.3559 32.729 91.2597 30.8193C93.1752 28.9112 94.133 26.6077 94.133 23.9087C94.133 21.2097 93.1752 18.9096 91.2597 17.0083ZM87.8026 27.364C87.3489 27.8167 86.8104 28.1757 86.2178 28.4205C85.6252 28.6653 84.9902 28.7912 84.3489 28.7909C83.0538 28.7903 81.8119 28.2759 80.8966 27.3608C79.9812 26.4458 79.4673 25.205 79.4679 23.9115C79.4684 22.618 79.9835 21.3778 80.8997 20.4635C81.584 19.784 82.4542 19.3217 83.4009 19.1347C84.3476 18.9477 85.3284 19.0444 86.2203 19.4125C87.1121 19.7807 87.875 20.404 88.4132 21.2039C88.9513 22.0039 89.2407 22.9449 89.2449 23.9087C89.2547 24.5527 89.1318 25.1917 88.8836 25.7862C88.6355 26.3806 88.2675 26.9177 87.8026 27.364Z"
                  fill="white"
                />
                <path
                  d="M114.131 17.0083C112.224 15.0918 109.923 14.1339 107.229 14.1348C104.534 14.1356 102.23 15.0934 100.316 17.0083C98.406 18.9163 97.4512 21.2165 97.4512 23.9087C97.4512 26.6009 98.406 28.9044 100.316 30.8193C102.226 32.729 104.53 33.6839 107.229 33.6839C109.927 33.6839 112.228 32.729 114.131 30.8193C116.044 28.9112 117.001 26.6077 117.001 23.9087C117.001 21.2097 116.043 18.9096 114.126 17.0083M110.671 27.364C110.217 27.8167 109.678 28.1757 109.086 28.4205C108.493 28.6653 107.858 28.7912 107.217 28.7909C105.922 28.7903 104.68 28.2759 103.765 27.3608C102.849 26.4458 102.335 25.205 102.336 23.9115C102.336 22.618 102.851 21.3778 103.768 20.4635C104.452 19.7842 105.322 19.3221 106.269 19.1352C107.216 18.9482 108.197 19.0449 109.088 19.413C109.98 19.7812 110.743 20.4043 111.282 21.2042C111.82 22.004 112.11 22.9449 112.114 23.9087C112.124 24.5528 112.001 25.192 111.753 25.7865C111.504 26.381 111.136 26.918 110.671 27.364Z"
                  fill="white"
                />
                <path
                  d="M134.989 6.31641V23.9078C134.991 24.7114 134.794 25.5031 134.416 26.2125C134.038 26.9219 133.49 27.5272 132.822 27.9746C132.154 28.422 131.385 28.6978 130.584 28.7774C129.784 28.857 128.976 28.738 128.232 28.431C127.488 28.1239 126.832 27.6383 126.321 27.0173C125.811 26.3962 125.461 25.6589 125.304 24.8706C125.148 24.0824 125.188 23.2677 125.422 22.4988C125.656 21.7298 126.076 21.0304 126.645 20.4626C127.091 19.9978 127.628 19.6299 128.223 19.3818C128.817 19.1337 129.457 19.0108 130.101 19.0208V14.1338C127.4 14.1338 125.096 15.0916 123.189 17.0073C121.283 18.923 120.328 21.2231 120.324 23.9078C120.324 26.6059 121.279 28.9094 123.189 30.8183C125.1 32.7273 127.404 33.6821 130.101 33.683C132.793 33.683 135.094 32.7281 137.004 30.8183C138.914 28.9086 139.872 26.605 139.879 23.9078V6.31641H134.989Z"
                  fill="white"
                />
                <path
                  d="M159.525 17.0083C157.615 15.0918 155.314 14.1339 152.622 14.1348C149.93 14.1356 147.626 15.0934 145.709 17.0083C143.8 18.9163 142.845 21.2165 142.845 23.9087C142.845 26.6009 143.8 28.9044 145.709 30.8193C147.62 32.729 149.924 33.6839 152.622 33.6839C155.32 33.6839 157.621 32.729 159.525 30.8193C161.442 28.9112 162.4 26.6077 162.4 23.9087C162.399 21.2097 161.441 18.9096 159.525 17.0083ZM156.069 27.364C155.147 28.2478 153.914 28.7352 152.636 28.7217C151.358 28.7082 150.136 28.1948 149.233 27.2916C148.329 26.3885 147.816 25.1677 147.804 23.8911C147.791 22.6145 148.281 21.384 149.166 20.4635C149.851 19.7836 150.721 19.3209 151.668 19.1337C152.615 18.9464 153.596 19.043 154.488 19.4112C155.38 19.7794 156.143 20.4028 156.681 21.2031C157.22 22.0033 157.509 22.9447 157.513 23.9087C157.523 24.5527 157.4 25.1919 157.152 25.7864C156.904 26.3808 156.536 26.9179 156.07 27.364"
                  fill="white"
                />
                <path
                  d="M197.123 17.0083C195.213 15.0918 192.912 14.1339 190.218 14.1348C187.525 14.1356 185.221 15.0934 183.305 17.0083C181.398 18.9163 180.445 21.2165 180.445 23.9087C180.445 26.6009 181.4 28.9044 183.309 30.8193C185.219 32.729 187.523 33.6839 190.222 33.6839C192.921 33.6839 195.223 32.729 197.126 30.8193C199.042 28.9112 200 26.6077 200 23.9087C200 21.2097 199.042 18.9096 197.126 17.0083M193.669 27.364C193.216 27.8167 192.677 28.1757 192.085 28.4205C191.492 28.6653 190.857 28.7912 190.216 28.7909C188.92 28.7903 187.679 28.2759 186.763 27.3608C185.848 26.4458 185.334 25.205 185.335 23.9115C185.335 22.618 185.85 21.3778 186.766 20.4635C187.451 19.784 188.321 19.3217 189.268 19.1347C190.214 18.9477 191.195 19.0444 192.087 19.4125C192.979 19.7807 193.742 20.404 194.28 21.2039C194.818 22.0039 195.107 22.9449 195.112 23.9087C195.121 24.5527 194.998 25.1917 194.75 25.7862C194.502 26.3806 194.134 26.9177 193.669 27.364Z"
                  fill="white"
                />
                <path
                  d="M177.494 14.1348H172.606V33.6839H177.494V14.1348Z"
                  fill="white"
                />
                <path
                  d="M182.384 9.25195H177.496V14.1339H182.384V9.25195Z"
                  fill="white"
                />
                <path
                  d="M170.086 28.8008H165.198V33.6827H170.086V28.8008Z"
                  fill="white"
                />
              </svg>
            </Link>
            <nav className="hidden lg:flex gap-10 font-semibold font-gilroy">
              <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <li>
                  <Link href="/#features" scroll={true}>
                    {t("Features")}
                  </Link>
                </li>
                <li>
                  <Link href="/#logs" scroll={true}>
                    {t("Logs")}
                  </Link>
                </li>
                <li>
                  <Link href="/#industries" scroll={true}>
                    {t("Industries")}
                  </Link>
                </li>
                <li>
                  <Link href="/#standards" scroll={true}>
                    {t("Standards")}
                  </Link>
                </li>
                <li>
                  <Link href="/audit" scroll={true}>
                    {t("Audit")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <a href="bookDemo" className="hidden lg:block">
            <div className="h-[49px] px-[25px] py-[15px] bg-[#4a60ff] rounded-[14px] border border-[#6971a2] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium leading-tight">
                {t("Book a Demo")}
              </div>
              <FaChevronRight />
            </div>
          </a>

          <div
            onClick={() => setHeaderToggle((prev) => !prev)}
            className="lg:hidden cursor-pointer"
          >
            <FiMenu size={32} />
          </div>
        </div>
      </div>

      {/* Side menu for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-2/5 bg-black-100 bg-opacity-95 shadow-lg transform ${
          headerToggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-5 sm:p-10">
          <div
            onClick={() => setHeaderToggle(false)}
            className="cursor-pointer"
          >
            <FiX size={32} />
          </div>
        </div>
        <nav className="flex flex-col p-5">
          <ul className="flex flex-col gap-10 items-center justify-center">
            <li>
              <Link
                href="/#features"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/#logs"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                {t("Logs")}
              </Link>
            </li>
            <li>
              <Link
                href="/#industries"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                {t("Industries")}
              </Link>
            </li>
            <li>
              <Link
                href="/#standards"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                {t("Standards")}
              </Link>
            </li>
            <li>
              <Link
                href="/audit"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                {t("Audit")}
              </Link>
            </li>
            <li>
              <a
                href="bookDemo"
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-[#4A60FF] "
              >
                {t("Book Demo")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
