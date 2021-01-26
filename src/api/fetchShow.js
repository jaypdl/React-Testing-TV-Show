import axios from 'axios';
// import { formatSeasons } from '../utils/formatSeasons'


const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err);
      return err
    })
};

export default fetchShow;