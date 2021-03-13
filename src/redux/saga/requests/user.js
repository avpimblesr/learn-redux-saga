import axios from 'axios'

export function requestGetUser() {
  return axios.request({
    method:'get',
    url:'https://my-json-server.typicode.com/avpimblesr/demo/user'
  })
}