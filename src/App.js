import "./App.css";

function clickMe() {}

function App() {
  return (
    <>
      <div>
        <button onClick={clickMe}>Button1</button>
      </div>

      <div>
        <button onClick={clickMe}>Button2</button>
      </div>
      <div>
        <button onClick={clickMe}>Button3</button>
      </div>
      <div>
        <button onClick={clickMe}>Button4</button>
      </div>
    </>
  );
}

export default App;
