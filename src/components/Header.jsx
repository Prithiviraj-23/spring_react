import AddUSer from "./AddUser.jsx";
const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">User Management</h1>
          {/* <button className=" w-[7rem] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-[50px]" onClick={<AddUSer/>}>
            AddUser
          </button> */}
        </div>
      </header>
    );
  };
  
  export default Header;
