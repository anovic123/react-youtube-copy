import axios from 'axios';

export default () => {
  return axios.request({
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
    params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '30c43fa2b1msh3b3024c6c1883e5p12c7d9jsn98cb5bc5c699',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  }) 
}