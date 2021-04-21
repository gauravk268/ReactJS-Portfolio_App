const value = async () => {
  const citiesRef = db.collection("gauravk");

  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
};

value();
