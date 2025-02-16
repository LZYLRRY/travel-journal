import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./assets/data";

function App() {
  const travelData = data.map((data) => {
    return <Entry key={data.id} obj={data} />;
  });

  return (
    <>
      <Header />
      <div className="container">{travelData}</div>
    </>
  );
}

export default App;
