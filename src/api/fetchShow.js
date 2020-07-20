import axios from 'axios'

const fetchShow = () => {
  return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
  .then(res => {
    console.log(res)
    return res.data
  })
  .catch(err => {
    console.log('there was an error fetching data', err)
  })
}

export default fetchShow
