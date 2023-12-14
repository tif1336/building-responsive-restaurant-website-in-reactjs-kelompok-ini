import React from "react";

const Footer: React.FC = () => {
  return (
    /* Footer Section Start */
    <footer className="bg-secondary pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/4">
            <h2 className="font-bold text-4xl text-white mb-5">Resto Solo</h2>
            <p className="font-bold text-2xl mb-2">restosolo@mail.com</p>
            <p>Jl. Jeruk No.03</p>
            <p>Surakarta</p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/4">
            <h3 className="font-semibold text-xl text-white mb-5">Get in Touch</h3>
            <ul>
              <li className="text-slate-300">
                <a href="#" className="inline-block text-base hover:text-primary mb-3">
                  Signature Menu
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#" className="inline-block text-base hover:text-primary mb-3">
                  Careers
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#" className="inline-block text-base hover:text-primary mb-3">
                  Direction
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/4">
            <h3 className="font-semibold text-xl text-white mb-5">Opening Hours</h3>
            <p className="text-slate-300 mb-3">
              Monday - Friday <br />
              at 09.00 a.m - 23.00 p.m
            </p>
            <p className="text-slate-300">
              Saturday - Sunday <br />
              at 08.00 a.m - 24.00 p.m
            </p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/4">
            <h3 className="font-semibold text-xl text-white mb-5">Site Links</h3>
            <ul>
              <li className="text-slate-300">
                <a href="#home" className="inline-block text-base hover:text-primary mb-3">
                  Home
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#about" className="inline-block text-base hover:text-primary mb-3">
                  About
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#portfolio" className="inline-block text-base hover:text-primary mb-3">
                  Menu
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#clients" className="inline-block text-base hover:text-primary mb-3">
                  FAQ
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#blog" className="inline-block text-base hover:text-primary mb-3">
                  Blog
                </a>
              </li>
              <li className="text-slate-300">
                <a href="#contact" className="inline-block text-base hover:text-primary mb-3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            {/* Youtube */}
            <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
          <p className="font-medium text-sm text-slate-400 text-center">
            Dibuat dengan 💖 oleh{" "}
            <a href="#" className="font-bold text-white ">
              Kelompok Ini
            </a>
            , menggunakan{" "}
            <a href="https://tailwindcss.com" target="_blank" className="font-bold text-orange-600">
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