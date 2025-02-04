import { useEffect, useState } from "react";

const useCompanyData = () => {
  const [companyDatas, setCompanyDatas] = useState([]);

  useEffect(() => {
    fetch("companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanyDatas(data);
      });
  }, []);
  return [companyDatas]
};

export default useCompanyData;
