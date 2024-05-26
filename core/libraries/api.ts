import axios from 'axios'

import grabError from './error'

type Props = {
  url: string
}

const api = async ({ url: getUrl }: Props) => {
  try {
    const requestUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-movies`
    const response = await axios.post(
      requestUrl,
      { url: getUrl },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  } catch (error) {
    grabError(error)
  }
}
export default api
