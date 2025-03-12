import React, { useEffect, useState, useContext } from "react";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const localData = require("../data/data.json");
  const [data, setData] = useState(localData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      fetch("https://gauravk268.github.io/assets/data/data.json")
        .then((response) => response.json())
        .then((data) => {
          if(data!==undefined) setData(data);
          // console.log("data", data);
        });
    };

    getData();
    setLoading(false);
  }, []);

  const value = {
    loading,
    data,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
}
