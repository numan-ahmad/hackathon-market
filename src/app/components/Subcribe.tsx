const Subcribe = () => {
  return (
    <div className="pt-6 mx-auto">
      <div className="relative">
        <div className="flex flex-col items-center justify-center py-10">
          <h3 className="mb-2 px-5 text-center text-3xl font-bold tracking-normal text-[#212121] sm:mb-4 sm:text-4xl">
            Subscribe Our Newsletter
          </h3>
          <p className="mb-4 px-5 text-center text-base tracking-normal text-gray-700 sm:mb-8">
            Get the latest information and promo offers directly
          </p>
          <div className="mx-auto flex w-full max-w-xl flex-col items-center space-x-0 space-y-3 px-1 sm:flex-row sm:space-x-3 sm:space-y-0 sm:px-5">
            <input
              type="email"
              className="flex h-10 w-full bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none border-[1px] border-gray-600 focus:rounded-md focus:border-black focus-visible:border-[2px] focus-visible:ring-0"
              placeholder="Email"
              defaultValue=""
            />
            <button
              className="items-center justify-center rounded-md text-sm font-medium text-white py-2 inline-block w-auto whitespace-nowrap bg-[#212121] px-5 focus-visible:bg-[#212121]"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute inset-0 -z-50 flex items-center justify-center">
          <div className="text-[54px] font-bold text-gray-200 sm:text-8xl sm:font-extrabold">
            Newsletter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe
