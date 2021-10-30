import "./App.css";




function App() 
{
  const [myCar, setMyCar] = useState("candidate1");

  const handleChange = (event) => {
    setMyCar(event.target.value)
}

  return 
  (
    <>
    <form>
      <select value={selected_candidate} onChange={handleChange}>
        <option value="candidate1">candidate1</option>
        <option value="candidate2" selected>candidate2</option>
        <option value="candidate3">candidate3</option>
      </select>
    </form>
    </>
  );
}

export default App;
