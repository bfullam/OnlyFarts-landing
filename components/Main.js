export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            The onchain <br />fart-ketplace for creatives
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            OnlyFarts is a decentralized marketplace for digital creators to buy and sell flatulatory audio experiences.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="https://www.youtube.com/watch?v=snoe0OHKTfQ"
            >
              <span className="justify-center">Join the waitlist</span>
            </a>
          </div>
          <br />
          <div className="flex flex-col">
              <div className="text-lg">Coming soon</div>
              <div className="flex flex-row space-x-5 pt-5">
                <img src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" className="w-40" />
                <img src="/images/Google_Play_Store_Badge_EN.png" alt="Google Play Store" className="w-40" />
              </div>
            </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="md:ml-1 ml-24"
            style={{ width: "34rem" }}
            alt="iPhone-12"
            src="/images/mockup.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
}
