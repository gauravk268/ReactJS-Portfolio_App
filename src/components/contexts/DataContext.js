import React, { useEffect, useState, useContext } from "react";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [data, setData] = useState([
    { aboutMsg: "", skills: [], languages: [], tools: [], achievements: [] },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = () => {
      fetch("https://gauravk268.github.io/assets/data/data.json")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.log("Data Error: ", error);
          const localData = require("../data/data.json");
          // console.log("local data: ", localData);
          setData(localData);
        });
    };

    const getData = () => {
      fetch("https://gauravk268.github.io/assets/data/projects.json")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setProjects(data);
        })
        .catch((error) => {
          console.log("Project Error: ", error);
          const localProject = require("../data/projects.json");
          // console.log("local data: ", localData);
          setData(localProject);
        });
    };

    getProjects();
    getData();
    setLoading(false);
  }, []);

  const value = {
    loading,
    projects,
    data,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
}