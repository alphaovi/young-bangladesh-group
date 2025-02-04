import chairmanPhoto from "../../../../assets/founder/Founder-image.jpg";

const ChairmanMessage = () => {
  return (
    <div className="container chairman-bg chairman__message__Pb">
      <div className="grid lg:grid-cols-2">
        {/* Chairman Image and Designation */}
        <div className="col-lg-5 col-12">
          <div className="chairman-image p-20">
            <img
              src={chairmanPhoto}
              alt="Young Bangla Manufacturing Group Chairman"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Chairman's Message */}
        <div className="col-lg-6 col-12 message__pb mt-8 lg:mt-0 lg:pl-8 p-20">
          <h2 className="message-heading text-3xl font-bold text-gray-800">
            Managing Director's Message
          </h2>
          <p className="message-description mt-4 text-gray-700 leading-relaxed">
            Bangladesh is a country rich in natural resources and a growing
            commitment to sustainable development. It is our privilege to
            contribute to the global effort in reducing carbon emissions and
            promoting eco-friendly solutions. Carbon management is crucial for
            protecting our environment, ensuring a healthier planet, and
            securing a sustainable future for generations to come.
            <br />
            <br />
            By choosing eco-friendly solutions, you are not only helping to
            combat climate change but also supporting the livelihoods of
            millions who depend on a greener economy. I deeply appreciate the
            unwavering support from our valued customers and my dedicated
            colleagues, whose passion and commitment inspire me to strive for a
            better, cleaner tomorrow.
            <br />
            <br />
            If you are looking for reliable and innovative carbon solutions,
            Green Future Carbon Solutions Ltd. is the name you can trust. Our
            name stands for quality, innovation, and a steadfast commitment to a
            sustainable future.
            <br />
            <br />
            Thank you all for your continued support and belief in our mission.
          </p>
          <p className="mt-6 text-gray-700">
            <span className="chairman-name font-bold text-lg">
              Miraj Mohammad Tarequl Hasan
            </span>
            <br />
            Managing Director
            <br />
            Young Bangla Manufacturing Industries Co. LTd
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
