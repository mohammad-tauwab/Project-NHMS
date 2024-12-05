function fetchWithTimeOut(url = "", object = {}, dataformat = "", callback) {

  fetch(url, object) // passing the signal control to fetch function so that it can be aborted using signal controll. When we call controller.abort we have associated controller with signal which will abort the function to whihc the signal as an object is passed.
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      } 
        switch (dataformat.toUpperCase()) {
          case "TEXT":
            return res.text();
          case "STATUS":
            return res.status();
          case "ARRAYBUFFER":
            return res.arrayBuffer();
          default:
            return res.json();
        }
      
    })
    .then((data) => callback("data", data))
    .catch((err) => callback("error", err));
}

export default fetchWithTimeOut;
