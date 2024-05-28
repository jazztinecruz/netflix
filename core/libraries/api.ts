import axios from 'axios'

import grabError from './error'

type Props = {
  url: string
}

const api = async ({ url }: Props) => {
  try {
    console.log(1, url)
    const requestUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-movies`
    console.log(2, requestUrl, url)
    try {
      const { data } = await axios.post(
        requestUrl,
        { url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      console.log(11, data)
      return data
    } catch (error) {
      console.log('request post method in api', error)
    }
  } catch (error) {
    grabError(error)
  }
}
export default api
