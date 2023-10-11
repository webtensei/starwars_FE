import axios from 'axios';
export default class SwService {
  static async getPeoples(page = 1) {
    const response = await axios.get('https://swapi.dev/api/people', {
      params: {
        page: page,
      },
    });
    return response;
  }

  static async getPerson(id = 1) {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    return response;
  }

  static async getVehicleFromUrl(url: string) {
    const response = await axios.get(url);
    return response;
  }
}
