const Header = (props) => {
  return (
    <div className="flex bg-blue-400 py-3 px-10">
      <h1 className="text-2xl font-bold">{props.title}</h1>
    </div>
  );
};

export default Header;
