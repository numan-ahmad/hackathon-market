const Footer = () => {
  return (
    <div className="mt-5">
      <div className="flex w-[60%] flex-col items-start justify-between space-y-10 px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:mx-auto lg:w-[100%] lg:flex-row lg:space-x-32 lg:space-y-0 lg:px-20">
        <div className="flex basis-2/5 flex-col space-y-8">
          <a className="cursor-pointer" href="/">
            <img
              alt="logo"
              fetchPriority="high"
              width="136"
              height="24"
              src="https://hackathon-with-shadcn-ui.vercel.app/_next/image?url=%2FLogo.webp&w=256&q=75"
            />
          </a>
          <p className="mt-3 text-gray-600">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex space-x-4">
            <div className="rounded-lg bg-gray-100 px-5 py-5">
              <a
                href="https://www.facebook.com"
                className="social-icon"
                aria-label="linkedin"
                target="_blabk"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="facebook"
                  width="25"
                  height="25"
                >
                  <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                </svg>
              </a>
            </div>
            <div className="rounded-lg bg-gray-100 px-5 py-5">
              <a
                href="https://www.twitter.com"
                className="social-icon"
                aria-label="linkedin"
                target="_blabk"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  id="twitter"
                >
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                </svg>
              </a>
            </div>
            <div className="rounded-lg bg-gray-100 px-5 py-5">
              <a
                href="https://www.linkedin.com"
                className="social-icon"
                aria-label="linkedin"
                target="_blabk"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 5 1036 990"
                  id="linkedin"
                >
                  <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex basis-1/5 flex-col space-y-5">
          <p className="text-xl font-semibold text-gray-700">Company</p>
          <ul className="space-y-3 text-gray-600">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Terms of Use</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">How it Works</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex basis-1/5 flex-col space-y-5">
          <p className="text-xl font-semibold text-gray-700">Support</p>
          <ul className="space-y-3 text-gray-600">
            <li className="cursor-pointer">Support Carrer</li>
            <li className="cursor-pointer">24h Service</li>
            <li className="cursor-pointer">Quick Chat</li>
          </ul>
        </div>
        <div className="flex basis-1/5 flex-col space-y-5">
          <p className="text-xl font-semibold text-gray-700">Contact</p>
          <ul className="space-y-3 text-gray-600">
            <li className="cursor-pointer">Whatsapp</li>
            <li className="cursor-pointer">Support 24h</li>
          </ul>
        </div>
      </div>
      <div className="mt-5 border-t-[1px] border-t-black text-gray-500">
        <div className="flex flex-col items-start justify-between space-x-0 space-y-5 px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:flex-row lg:space-x-20 lg:space-y-0 lg:px-20">
          <div className="">Copyright © 2023 Dine Market</div>
          <div className="">
            Design by.
            <span className="text-lg font-semibold text-gray-900">
              Numan's
            </span>
          </div>
          <div className="">
            Code By.
            <span className="text-lg font-semibold text-gray-900">
              github.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
