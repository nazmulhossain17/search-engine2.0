import StartPage from "./components/StartPage/StartPage";
// import "./App.css";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      {/* <h1 classNameName="text-3xl">Hello</h1> */}

      {/* <StartPage />
      <div classNameName="flex flex-col items-center mt-6">
        <Input />
      </div> */}

      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
            alt="Google"
            className="h-8 mr-2"
          />
          <h1 className="text-xl font-bold">Google</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 rounded-md"
            placeholder="Search Google..."
          />
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md ml-2">
            Search
          </button>
        </div>
      </header>
    </>
  );
}

export default App;
