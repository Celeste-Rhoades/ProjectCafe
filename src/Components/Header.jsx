import ColdBrewCafeImage from "../assets/images/ColdBrewCafe.png";
const Header = () => {
  return (
    <div className="flex w-full items-center justify-between border-b border-stone-300 bg-white shadow-xl">
      <img
        className="ml-12 h-36 w-36 object-contain"
        src={ColdBrewCafeImage}
        alt="Cold Brew Cafe"
      />
      <h1 className="text-3xl text-sky-900">Aliste's Cold Brew Cafe</h1>
      <div className="m-4 flex">
        <div className="px-2">About</div>
        <div className="mr-20 px-2">Shop</div>
      </div>
    </div>
  );
};
export default Header;
