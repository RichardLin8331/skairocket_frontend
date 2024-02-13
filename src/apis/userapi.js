
import axios from 'axios'
import store from '../store'

const userRequest = axios.create(
    { baseURL: 'http://127.0.0.1:7788' }
)

const apiUserAuth = async (username) => {
    await  userRequest.post( '/LoginAuth', {})
    .then(() => {
        let payload = {'uname': username, 'ulog': true}
        store.dispatch("login_act", payload)
        
        
    }).catch(err => {console.log(err)})
}

export {apiUserAuth}