import Swal from "sweetalert2";


const Product = ({ productData }) => {
  const { imageUrl } = productData;

  //   handle photo pop up
  const handlePhotoPopUp = () => {
    Swal.fire({
        html: `
        <img className="items-center" src=${imageUrl}>
        `
    });
  };
  return (
    <div className="border border-gray-400 p-2 shadow-2xl">
      <img
        onClick={handlePhotoPopUp}
        className="h-72 w-96 p-3 rounded-full cursor-pointer"
        src={imageUrl}
        alt=""
      />
    </div>
  );
};

export default Product;
