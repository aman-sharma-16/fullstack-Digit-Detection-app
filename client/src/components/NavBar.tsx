const NavBar = () => {
  return (
    <div className="bg-slate-800 h-14 text-white flex items-center shadow-md">
      <div className="h-11 w-11 bg-gray-300 rounded-full flex items-center justify-center mix-blend-soft-hard shadow-md m-2">
        <img
          src="app-logo-black.svg"
          alt="app logo"
          className="w-8 h-8 object-contain"
        />
      </div>
      <p className="text-center w-[90%] uppercase font-semibold tracking-[6px] md:text-xl md:tracking-[24px]">The Digit Classifier</p>
    </div>
  );
};

export default NavBar;
