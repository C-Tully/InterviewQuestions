//Goal: Fetch data from promisesData.json

async function fetchData() {
  try {
    const resp = await fetch("data/promisesData.json");
    
    if(!resp.ok) {
      throw new Error("Network Response err");
    }

    const data = await resp.json();
    if(data.length > 0) {
      console.log('Data::', data)
      return data;
    } else {
      throw new Error("No data found::");
    }
  } catch (err) {
    console.error('Fetch Failed::', err.message);
    throw err;
  }
  // return fetch("data/promisesData.json")
  //   .then((resp) => {
     
  //     if (!resp.ok) {
  //       throw new Error("Network response error.");
  //     }
  //     //Data successfuly fetched
  //     return resp.json();
  //   })
  //   .then((data) => {
  //     if (data.length > 0) {
  //       console.log("Data!", data);
  //       return data;
  //     }
  //   })
  //   .catch((error) => {
  //     //handle other error cases...
  //     //Log error's handle if possible etc
  //   });
}
fetchData();
