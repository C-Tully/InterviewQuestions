//Goal: Fetch data from promisesData.json

function fetchData() {
  return fetch("data/promisesData.json")
    .then((resp) => {
      //inital network handling check
      if (!resp.ok) {
        throw new Error("Network response error.");
      }
      //Data successfuly fetched
      return resp.json();
    })
    .then((data) => {
      if (data.length > 0) {
        console.log("Data!", data);
        return data;
      }
    })
    .catch((error) => {
      //handle other error cases...
      //Log error's handle if possible etc
    });
}

fetchData();
