import useCompanyData from "../../../Hooks/useCompanyData";
import OurCompany from "./OurCompany";

const OurCompanies = () => {
  const [companyDatas] = useCompanyData();
  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="text-3xl font-semibold">Our Companies</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 p-6">
        {companyDatas.map((companyData) => (
          <OurCompany
            key={companyData._id}
            companyData={companyData}
          ></OurCompany>
        ))}
      </div>
    </div>
  );
};

export default OurCompanies;
