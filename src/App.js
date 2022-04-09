import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Cards/Cards";
function App() {
  const [allRockets, setAllRockets] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://api.spacexdata.com/v3/rockets"
  );
  const getAllRockets = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    createRocketObject(data);
  };
  const createRocketObject = (result) => {
    result.forEach(async ({rocket_id}) => {
      const res = await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
      const data = await res.json()
      setAllRockets((currentlist) => [...currentlist, data]);
    });
  };

  useEffect(() => {
    getAllRockets();
  }, []);
  return (
    <div>
      <h1>Elondex</h1>
      <div className="app-container">
        {allRockets.map((rocket)=>(
          <Card
            rocket={rocket}
            key={rocket?.rocket_id}
          />
          ))}
      </div>
    </div>
  );
}
export default App;
