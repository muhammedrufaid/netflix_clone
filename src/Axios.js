import axios from 'axios'
import { baseUrl } from './constants/constants';

const instance = axios.create({
    baseURL: baseUrl,
  });
  export default instance
  //ithine eni banneril vilikkam athinu vendi banneril import axios ne villikka axios.get method vechit 