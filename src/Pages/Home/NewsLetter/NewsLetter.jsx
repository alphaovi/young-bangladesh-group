import newsLetterBackgroundImage from "../../../assets/images/news-letter-background.jpg";

const Newsletter = () => {
  return (
    <div
      className="overlay bg-gray-900 bg-opacity-75 py-12"
      style={{
        backgroundImage: `url(${newsLetterBackgroundImage})`, // Set the background image
        backgroundSize: "cover", // Ensure the image covers the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      <div className="container mx-auto px-4 text-white">
        <div className="row">
          <div className="col text-center">
            <h5 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h5>
            <p className="text-gray-300 mb-8">
              Subscribe for the latest newsletters, achievements, news, and
              events.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <form
              action=" "
              method="GET"
              encType="multipart/form-data"
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <input
                type="text"
                placeholder="Type Name"
                className="w-full sm:w-auto px-4 py-2 bg-white text-gray-400  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
              />
              <input
                type="text"
                placeholder="Type E-mail"
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-white text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="submit"
                value="Submit"
                className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-[#9C742A] to-[#ffc14d] text-white rounded-full hover:from-[#ffc14d] hover:to-[#9C742A] transition duration-300 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
