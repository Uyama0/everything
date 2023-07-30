import "./style/style.css";

function App() {
  return (
    <>
      <div className="flex justify-center mt-3">
        <button
          type="button"
          className="px-5 py-2.5 text-white text-center rounded-lg bg-gradient-to-bl from-purple-500 to-pink-400"
        >
          Home
        </button>
      </div>
      <div className="mt-10">
        <div className="grid relative max-w-full grid-cols-[aut">
          <div className="bg-red-200"></div>
          <div className="bg-red-200"></div>
          <div className="bg-red-200"></div>
          <div className="bg-red-200"></div>
        </div>
      </div>
    </>
  );
}

export default App;
