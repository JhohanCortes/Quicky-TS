import wallpaperImage from "../Images/wallpaper.png";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src={wallpaperImage}
        alt="Wallpaper"
        className="w-full h-2/3 object-contain"
        style={{ filter: 'brightness(0.9) sepia(1) hue-rotate(300deg) saturate(5)' }}
      />
    </div>
  );
};

export default Home;
