import axios from "axios";


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getIndieArtistEvents: function() {
    return axios.get("http://localhost:3001/api/events/ticketMaster ")    
  }
};
