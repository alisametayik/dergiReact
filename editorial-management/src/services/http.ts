import axios from 'axios'
import qs from 'qs'

import env from '../config/env'
const { API_URL } = env

const languages: { [key: string]: string } = {
  tr: 'tr-TR',
  en: 'en-US',
}

const http = axios.create({
  baseURL: API_URL,
  timeout: 0,
  paramsSerializer: (params: any) => qs.stringify(params, { encode: false }),
})

const { request, response } = http.interceptors

request.use(
  (req) => {
    const { headers } = req
    const commons = headers!.common

  
    if (!commons.hasOwnProperty('Content-Type')) headers.common['Content-Type'] = 'application/json'


    

    return req
  },
  (err) => Promise.reject(err)
)
export default http