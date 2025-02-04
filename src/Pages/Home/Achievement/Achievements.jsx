import { useEffect, useState } from "react";
import AchievementsSection from "./AchievementsSection";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch("achievements.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAchievements(data); // Set the entire array, not just data[0]
      })
      .catch((error) => {
        console.error("Error fetching achievements:", error);
      });
  }, []);

  return (
    <div className="my-5">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#9C742A]">Achievements</h1>
      </div>
      <div className="grid grid-cols-2">
        {/* Static Image */}
        {/* <div className="m-5 mx-10 cursor-pointer overflow-hidden">
          <div className="transition-transform duration-300 hover:scale-105">
            <img
              src="https://www.akij.net/img/achievement-single.png"
              alt="Static Achievement"
            />
          </div>
        </div> */}

        {/* Dynamic Achievements */}
        {/* <div className="grid grid-cols-2 gap-4 -ml-40 mt-5">
          {achievements.map((achievement) => (
            <AchievementsSection
              key={achievement._id}
              achievement={achievement}
            />
          ))}
        </div> */}
      </div>
      <div>
        <p className="text-gray-500 uppercase text-center opacity-70 font-bold">
          You've reached the end of the list
        </p>
      </div>
    </div>
  );
};

export default Achievements;
