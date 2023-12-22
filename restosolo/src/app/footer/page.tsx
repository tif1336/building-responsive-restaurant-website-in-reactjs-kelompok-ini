"use client";

import React from "react";

interface ProfileData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

interface OpeningHour {
  day: string;
  opening_time: string;
  closing_time: string;
}

const Footer: React.FC = () => {
  const [profile, setProfile] = React.useState<ProfileData[]>([]);

  React.useEffect(() => {
    fetch("https://resto-solo-app-production.up.railway.app/api/profile/")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  const [openHours, setOpenHours] = React.useState<OpeningHour[]>([]);
  React.useEffect(() => {
    fetch("https://resto-solo-app-production.up.railway.app/api/opening-hour/")
      .then((response) => response.json())
      .then((data) => setOpenHours(data));
  }, []);

  return (
    /* Footer Section Start */
    <footer id="contact" className="bg-secondary pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold text-4xl text-white mb-5">
              {profile.length > 0 ? profile[0].name : ""}
            </h2>
            <p className="font-bold text-2xl mb-2">
              {profile.length > 0 ? profile[0].email : ""}
            </p>
            <p>{profile.length > 0 ? profile[0].address : ""}</p>
            <p className="pt-2">{profile.length > 0 ? profile[0].phone : ""}</p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">
              Opening Hours
            </h3>
            <p className="text-slate-300 mb-3">
              Monday - Friday <br />
              at {openHours[0] && openHours[0].opening_time.slice(0, 5)} -{" "}
              {openHours[0] && openHours[0].closing_time.slice(0, 5)}
            </p>
            <p className="text-slate-300">
              Saturday - Sunday <br />
              at {openHours[4] && openHours[4].opening_time.slice(0, 5)} -{" "}
              {openHours[4] && openHours[4].closing_time.slice(0, 5)}
            </p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">
              Site Links
            </h3>
            <ul>
              <li className="text-slate-300">
                <a
                  href="#home"
                  className="inline-block text-base hover:text-orange-600 mb-3"
                >
                  Home
                </a>
              </li>
              <li className="text-slate-300">
                <a
                  href="#about"
                  className="inline-block text-base hover:text-orange-600 mb-3"
                >
                  About
                </a>
              </li>
              <li className="text-slate-300">
                <a
                  href="#portfolio"
                  className="inline-block text-base hover:text-orange-600 mb-3"
                >
                  Menu
                </a>
              </li>
              <li className="text-slate-300">
                <a
                  href="#clients"
                  className="inline-block text-base hover:text-orange-600 mb-3"
                >
                  FAQ
                </a>
              </li>
              <li className="text-slate-300">
                <a
                  href="#blog"
                  className="inline-block text-base hover:text-orange-600 mb-3"
                >
                  Testimonial
                </a>
              </li>
              <li className="text-slate-300">
                <a
                  href="#contact"
                  className="inline-block text-base hover:text-orange-600 mb-3"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            {/* Youtube */}
            <a
              href="https://www.youtube.com/watch?v=xZs3gBMIqzU"
              className="w-9 h-9 mr-3 flex justify-center items-center text-slate-300 hover:text-white grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <title>Youtube</title>
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                ></path>
                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kulinerdisolo/?hl=id"
              className="w-9 h-9 mr-3 flex justify-center items-center text-slate-300 hover:text-white grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <title>Instagram</title>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </a>
          </div>
          <p className="font-medium text-sm text-slate-400 text-center">
            Built with 💖 by{" "}
            <a href="#" className="font-bold text-white ">
              Kelompok Ini
            </a>
            , using{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="font-bold text-orange-600"
            >
              Next js & Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
    /* Footer Section End */
  );
};

export default Footer;
