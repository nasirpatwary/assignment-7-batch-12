import Container from "../shard/Container";
import { FaLinkedinIn, FaFacebookF  } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-black text-[#a1a1aa] lg:px-8 pt-12">
      <Container>
        <div className="grid md:grid-cols-5 lg:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2 text-white">
              CS — Ticket System
            </h3>
            <p className="text-sm max-w-[45ch]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-2 text-white">Social Links</h4>
            <div className="space-y-2 text-sm">
              <span className="flex gap-2"><RiTwitterXLine className="bg-white rounded-full p-1 size-6 text-black" />@CS — Ticket System</span>
              <span className="flex gap-2"><FaLinkedinIn className="bg-white rounded-full p-1 size-6 text-black" />@CS — Ticket System</span>
              <span className="flex gap-2"><FaFacebookF  className="bg-white rounded-full p-1 size-6 text-black" />@CS — Ticket System</span>
              <span className="flex gap-2"><TfiEmail className="bg-white rounded-full p-1 size-6 text-black" />support@cst.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <hr className="text-gray-700" />
          <p className="text-white py-4 text-left md:text-center text-sm">© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;