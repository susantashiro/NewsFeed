import axios from 'axios';
import {
  NEWS_API_EVERYTHING_ROOT_URL,
  NEWS_API_HEADLINES_ROOT_URL,
} from '../../utilities/constants';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

export function fetchArticles(searchTerm, sortBy) {
  const searchQuery = searchTerm ? `&q=${searchTerm}` : '';
  const sortByQuery = sortBy ? `&sortBy=${sortBy}` : '';
  const url = searchTerm ? NEWS_API_EVERYTHING_ROOT_URL : NEWS_API_HEADLINES_ROOT_URL;
  const request = axios.get(`${url}${searchQuery}${sortByQuery}`, { crossdomain: true });

  return {
    type: FETCH_ARTICLES,
    payload: request,
  }
}
