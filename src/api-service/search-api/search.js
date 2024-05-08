import API from "../api";

class SearchClient {

  async GetConnectedCardsByClientId(id) {
    try {
      var response = await API.get(
        "/Clients/GetConnectedCardsByClientId/" + id
      );
      if (response.status !== 200) {
        Error(response.message);
      } else {
        return response.data;
      }
    } catch (err) {
      Error("Greška kod pribavljanja informacija o klijentu.");
    }
  }

  async ManageConnectedCards(data) {
    try {
      var response = await API.post("/Clients/ManageConnectedCards", data);
      if (response.status !== 200) {
        Error(response.message);
      } else {
        return response.data;
      }
    } catch (err) {
      Error("Greška kod izmene kartica.");
    }
  }
}

export default SearchClient;
