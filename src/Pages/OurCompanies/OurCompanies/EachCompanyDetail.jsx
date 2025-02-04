import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EachCompanyDetail = () => {
  const { id } = useParams();
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the fetched data in the console
        const selectedCompany = data.find(
          (company) => company._id === String(id) // Ensure the ID is a string for comparison
        );
        setCompanyDetails(selectedCompany);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!companyDetails)
    return <p className="text-center text-red-500">Company not found</p>;

  return (
    <div className="container chairman-bg chairman__message__Pb">
      <div className="grid lg:grid-cols-2">
        {/* Company Logo and Basic Info */}
        <div className="col-lg-5 col-12">
          <div className="chairman-image p-20">
            <img
              src={companyDetails.logo}
              alt={companyDetails.companyName}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Company Details */}
        <div className="col-lg-6 col-12 message__pb mt-8 lg:mt-0 lg:pl-8 p-20">
          <h2 className="message-heading text-3xl font-bold text-gray-800">
            {companyDetails.companyName}
          </h2>
          <p className="mt-6 text-gray-700">
            <span className="chairman-name font-bold text-lg">
              {companyDetails.nameOne}
            </span>
            <br />
            {companyDetails.nameOneDesignation}
          </p>

          <p className="mt-6 text-gray-700">
            <span className="chairman-name font-bold text-lg">
              {companyDetails.nameTwo}
            </span>
            <br />
            {companyDetails.nameTwoDesignation}
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="grid lg:grid-cols-2 mt-8">
        <div className="col-lg-5 col-12">
          <div className="p-20">
            {companyDetails.aboutUs && (
              <div>
                <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
                <p className="mt-4 text-gray-700">{companyDetails.aboutUs}</p>
              </div>
            )}

            {companyDetails.aboutOurServices &&
              companyDetails.aboutOurServicePointOne &&
              companyDetails.aboutOurServicePointTwo &&
              companyDetails.aboutOurServicePointThree &&
              companyDetails.aboutOurServicePointFour && (
                <div>
                  <h2 className="message-heading text-3xl font-bold text-gray-800 mt-8">
                    About Our Services
                  </h2>
                  <p className="mt-6 text-gray-700">
                    {companyDetails.aboutOurServices}
                  </p>

                  <p className="my-5 ml-5 font-semibold">
                    <li>{companyDetails.aboutOurServicePointOne}</li>
                    <li>{companyDetails.aboutOurServicePointTwo}</li>
                    <li>{companyDetails.aboutOurServicePointThree}</li>
                    <li>{companyDetails.aboutOurServicePointFour}</li>
                  </p>
                </div>
              )}

            {companyDetails.ourTeam && (
              <div>
                <h2 className="message-heading text-3xl font-bold text-gray-800 mt-8">
                  Our Team
                </h2>
                <p className="mt-6 text-gray-700">{companyDetails.ourTeam}</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Details */}
        <div className="col-lg-6 col-12 message__pb mt-8 lg:mt-0 lg:pl-8 p-20">
          {companyDetails.manufacture && (
            <div>
              <h2 className="message-heading text-3xl font-bold text-gray-800">
                Manufacture
              </h2>
              <p className="mt-6 text-gray-700">{companyDetails.manufacture}</p>
            </div>
          )}

          {companyDetails.commitedToOne &&
            companyDetails.commitedToTwo &&
            companyDetails.commitedToThree &&
            companyDetails.commitedToFour &&
            companyDetails.commitedToFive && (
              <div className="mt-5">
                <h2 className="message-heading text-3xl font-bold text-gray-800">
                  Commited To:
                </h2>
                <p className="my-5 ml-2">
                  <li>{companyDetails.commitedToOne}</li>
                  <li>{companyDetails.commitedToTwo}</li>
                  <li>{companyDetails.commitedToThree}</li>
                  <li>{companyDetails.commitedToFour}</li>
                  <li>{companyDetails.commitedToFive}</li>
                </p>
              </div>
            )}

          {companyDetails.ourMission && (
            <div>
              <h2 className="message-heading text-3xl font-bold text-gray-800">
                Our Mission
              </h2>
              <p className="mt-6 text-gray-700">{companyDetails.ourMission}</p>
            </div>
          )}

          {companyDetails.ourVision && (
            <div>
              <h2 className="message-heading text-3xl font-bold text-gray-800 mt-8">
                Our Vision
              </h2>
              <p className="mt-6 text-gray-700">{companyDetails.ourVision}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EachCompanyDetail;
