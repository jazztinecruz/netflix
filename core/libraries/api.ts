import axios from 'axios'

type Props = {
  url: string
}

const api = async ({ url: getUrl }: Props) => {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-movies`, { getUrl })
    return data
  } catch (error) {
    console.log('error', error)
  }
}
export default api
