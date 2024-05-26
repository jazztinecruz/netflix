import axios from 'axios'

import grabError from './error'

type Props = {
  url: string
}

const api = async ({ url }: Props) => {
  try {
    const requestUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-movies`
    const { data } = await axios.post(
      requestUrl,
      { url },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return data
  } catch (error) {
    grabError(error)
  }
}
export default api
