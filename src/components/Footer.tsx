import logo from "../Images/wallpaper.png";

const Footer = () => {
  return (
    <footer className="bg-primary shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={logo} className="h-16 md:h-16 object-contain" alt="QuickyTS logo" />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0">
          </ul>
        </div>
        <hr className="border-white my-4 md:my-8" />
        <span className="block text-sm text-white text-center cursor-pointer">
          <a href="https://jhohancortes.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Jhohan Cortes</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
