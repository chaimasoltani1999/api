import axios from "axios";
import React ,  { useEffect, useState } from "react";
import './App.css';


const UserList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getListUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")

        .then(function (response) {
          setData(response.data); // Stocker la réponse complète
        })
        .catch((err) => setError(err));
    }
    getListUser();
  }, []);
  console.log("", data);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Liste des Utilisateurs</h1>
        <div className="row">
          {data.map((user) => (
            <div key={user.id} className="col-md-4 mb-3">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p> {user.phone}</p>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default UserList;