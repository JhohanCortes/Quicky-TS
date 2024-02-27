import logo from "../Images/wallpaper.png";

const Footer = () => {
    return (
      <footer className="bg-primary shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="PONER " className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-16" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0">
            </ul>
          </div>
          <hr className="border-white sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center cursor-pointer">
            <a href="https://jhohancortes.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Jhohan Cortes</a>
          </span>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  