const OurProducts = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h2 className="text-2xl text-[#9C742A] font-xl font-semibold">
          Our Product
        </h2>
      </div>
      {/* Adjust margin and padding for mobile */}
      <div className="text-center leading-relaxed mt-4 mb-6 space-y-2 px-4 sm:px-0">
        {/* Adjust width for mobile using mx-auto and max-width */}
        <p className="mx-auto max-w-[90%] sm:mx-72">
          In this era of mass production, as it is very hard to stand out with
          one product, YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD. focuses on
          making the best in all sectors.
        </p>
      </div>
      {/* Adjust button padding and width for mobile */}
      <div className="flex justify-center items-center mb-10 px-4 sm:px-0">
        <a
          href="founder.html"
          className="all-news-eve-button-a inline-block bg-gradient-to-r from-[#9C742A] to-[#f1b74a] text-white px-6 py-3 transition-colors duration-300 rounded-full w-full sm:w-auto text-center"
        >
          View Products
        </a>
      </div>
    </div>
  );
};

export default OurProducts;
