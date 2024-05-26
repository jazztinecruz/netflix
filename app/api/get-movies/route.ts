import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

import grabError from '@/core/libraries/error'

export const POST = async (request: NextRequest) => {
  console.log(3)
  const body = await request.json()
  console.log(4)
  const { url } = body
  console.log(5)

  try {
    const requestUrl = new URL(`${process.env.API_BASE_URL}${url}`)
    console.log(6)
    requestUrl.searchParams.set('api_key', process.env.API_KEY!)
    console.log(7)
    const options = { method: 'GET', headers: { accept: 'application/json' } }
    console.log(8)
    const { data } = await axios.get(requestUrl.toString(), options)
    console.log(9)
    const movies = data?.results ? data.results : data
    console.log(10)
    return NextResponse.json(movies, { status: 200, statusText: 'Success' })
  } catch (error) {
    if (error instanceof Error) {
      grabError(error)
      return NextResponse.json({ error: error.message }, { status: 500, statusText: 'Internal Server Error' })
    }
  }
}
