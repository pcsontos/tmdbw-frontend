import axios from 'axios'

export const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php'
export function searchMovie(name) {
  const params = new URLSearchParams
  params.append('action', 'query')
  params.append('format', 'json')
  params.append('list', 'search')
  params.append('origin', '*')
  params.append('srsearch', encodeURI(name))

  return axios({
    method: 'GET',
    url: WIKIPEDIA_API,
    params
  })
}

export function searchPageByPageId(id) {
  const params = new URLSearchParams
  params.append('action', 'query')
  params.append('format', 'json')
  params.append('prop', 'info|extracts')
  params.append('origin', '*')
  params.append('inprop', 'url')
  params.append('pageids', encodeURI(id))

  return axios({
    method: 'GET',
    url: WIKIPEDIA_API,
    params
  })
}

// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info|extracts&inprop=url&pageids=


