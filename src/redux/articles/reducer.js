// create types file
import { FETCH_ARTICLES } from './actions';

export default function (state = [], action ) {

  switch (action.type) {
    case FETCH_ARTICLES:
      return [...action.payload.data.articles]
  }

  return state;
}
