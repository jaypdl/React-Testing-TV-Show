import axios from 'axios';
// import { formatSeasons } from '../utils/formatSeasons'


const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
};

export default fetchShow;