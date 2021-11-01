import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const [players, setPlayers] = useState([]);

  // to do something when the component renders
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/players", {
          headers: {
            authorization: `Bearer ${props.token}`,
          },
        }); // this request needs a token
        setPlayers(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchPlayers();
  }, []);

  console.log("component rendering");
  console.log("do i have a token in homepage.js?", props.token);
  return (
    <div>
      <h1>Home</h1>
      {!props.token && <Link to='/login'>You need to log in first</Link>}
      {players.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <img src={p.profilePicture} alt={p.name} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
