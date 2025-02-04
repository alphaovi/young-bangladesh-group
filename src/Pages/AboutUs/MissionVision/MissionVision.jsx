import managingDirectorPhoto from "../../../assets/founder/Founder-image.jpg";

const MissionVision = () => {
  return (
    <main id="main" className="site-main">
      {/* Mission and Vision Section */}
      <div className="container-fluid p-5 bg-gray-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex justify-center px-10">
            <img
              src={managingDirectorPhoto}
              alt="Founder Image"
              className="w-full"
            />
          </div>

          <div>
            <h4 className="text-4xl font-bold">Our Mission</h4>
            <p className="mt-3 text-xl">
              Providing excellent product and services
            </p>
            <br />
            <h1 className="text-4xl font-bold">Our Vision</h1>
            <p className="mt-3 text-xl">
              To be the most reliable and efficient manufacturing, export,
              import service provider offering a broad spectrum of related
              services and committed to service excellence and be renowned for
              our integrity and ability to deliver.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MissionVision;
