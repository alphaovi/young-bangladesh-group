const AchievementsSection = ({ achievement }) => {
    const { image } = achievement;
  
    return (
      <div className="m-5 cursor-pointer overflow-hidden">
        <div className="transition-transform duration-300 hover:scale-105">
          <img
            src={image}
            alt="Achievement"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  };
  
  export default AchievementsSection;