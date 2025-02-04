import { RiFacebookFill } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderTopArea = () => {
  return (
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        {/* Flex container with responsive adjustments */}
        <div className="flex flex-col sm:flex-row justify-end items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Left Side - Follow Us */}
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <p className="text-sm font-medium">Follow Us</p>
            <div className="flex space-x-3">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 h-[15px] w-[15px] cursor-pointer"
              >
                <RiFacebookFill />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 h-[15px] w-[15px] cursor-pointer"
              >
                <CiTwitter />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 h-[15px] w-[15px] cursor-pointer"
              >
                <FaInstagram />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 h-[15px] w-[15px] cursor-pointer"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTopArea;