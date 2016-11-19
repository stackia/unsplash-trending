import { LOAD_PAGE, LOAD_PAGE_REQUEST } from './constants'
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: '2c18ab618b8d6f8d055fee4898ea3f221cb9b1f50d5214e3044edb59d81f325f',
  secret: 'afee77f6463d645ef47bd00616acbd73e65e5ae171f362aec13533812396d3b2',
  callbackUrl: 'https://www.baidu.com'
})

function loadPageRequest() {
  return {
    type: LOAD_PAGE_REQUEST
  }
}

function loadPage(page, photos) {
  return {
    type: LOAD_PAGE,
    payload: {
      page,
      photos
    }
  }
}

export default function (page) {
  return async (dispatch) => {
    dispatch(loadPageRequest())
    const photos = await unsplash.photos.listPhotos(page, 12, 'popular').then(toJson)
    dispatch(loadPage(page, photos))
  }
}