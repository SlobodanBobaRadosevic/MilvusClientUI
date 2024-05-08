import API from "../api";

class SearchClient {

  async search(data) {
    try {
      var response = await API.post(
        "search", data, 
        { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }
      );
      if (response.status !== 200) {
        Error(response.message);
      } else {
        return response.data;
      }
    } catch (err) {
      Error("Greška.");
    }
  }

  async create_index(data) {
    try {
      var response = await API.post(
        "create_index", data, 
        { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }
      );
      if (response.status !== 200) {
        Error(response.message);
      } else {
        return response.data;
      }
    } catch (err) {
      Error("Greška.");
    }
  }
}

export default SearchClient;
