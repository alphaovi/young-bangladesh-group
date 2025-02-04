import { useNavigate } from "react-router-dom";

const OurCompany = ({ companyData }) => {
  const { _id,  logo } = companyData;

  const navigate = useNavigate();

  const handleFullDetailShow = () => {
    console.log("fullDetails", _id);
    navigate(`/each-company-details/${_id}`);
  };
  return (
    <div>
      <img
        onClick={handleFullDetailShow}
        className="border border-gray-500 p-2 rounded-lg cursor-pointer"
        src={logo}
        alt=""
      />
    </div>
  );
};

export default OurCompany;
