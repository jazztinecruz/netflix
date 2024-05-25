import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

import grabError from '@/core/libraries/error'

export const POST = async (request: NextRequest) => {
  const body = await request.json()
  const { getUrl } = body

  try {
    const url = new URL(`${process.env.API_BASE_URL}${getUrl}`)
    url.searchParams.set('api_key', process.env.API_KEY!)

    const options = { method: 'GET', headers: { accept: 'application/json' } }
    const { data } = await axios.get(url.toString(), options)
    const movies = data?.results ? data.results : data
    return NextResponse.json(movies, { status: 200, statusText: 'Success' })
  } catch (error) {
    if (error instanceof Error) {
      grabError(error)
      return NextResponse.json({ error: error.message }, { status: 500, statusText: 'Internal Server Error' })
    }
  }
}