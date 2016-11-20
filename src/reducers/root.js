import { LOAD_PAGE, LOAD_PAGE_REQUEST } from '../actions/constants'

const initialState = {
  page: 1,
  photos: [],
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PAGE_REQUEST:
      return {
        ...state,
        loading: true
      }

    case LOAD_PAGE:
      return {
        ...state,
        page: action.payload.page,
        photos: action.payload.photos,
        loading: false
      }

    default:
      return state
  }
}
