import Products from "../../Products/Products/Products";
import galleryImage1 from "../../../assets/gallery/1.jpg";
import galleryImage2 from "../../../assets/gallery/2.jpg";
import galleryImage3 from "../../../assets/gallery/3.jpg";
import galleryImage4 from "../../../assets/gallery/4.jpg";
const Gallery = () => {
  return (
    <div>
      <div>
          <div className="grid lg:grid-cols-4 gap-6 mt-5 px-10">
            <div className="border border-gray-400 p-2 shadow-2xl">
              <img
                className="h-72 w-96 p-3 rounded-full"
                src={galleryImage1}
                alt=""
              />
            </div>
            <div className="border border-gray-400 p-2 shadow-2xl">
              <img
                className="h-72 w-96 p-3 rounded-full"
                src={galleryImage2}
                alt=""
              />
            </div>
            <div className="border border-gray-400 p-2 shadow-2xl">
              <img
                className="h-72 w-96 p-3 rounded-full"
                src={galleryImage3}
                alt=""
              />
            </div>
            <div className="border border-gray-400 p-2 shadow-2xl">
              <img
                className="h-72 w-96 p-3 rounded-full"
                src={galleryImage4}
                alt=""
              />
            </div>
          </div>
        </div>
      <div>
        <Products></Products>
      </div>
    </div>
  );
};

export default Gallery;
