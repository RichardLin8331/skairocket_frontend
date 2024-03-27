
import axios from 'axios'
import store from '../store'

const userRequest = axios.create(
    { baseURL: 'http://127.0.0.1:8899' }
)

const apiUserAuth = async (username) => {
    await  userRequest.post( '/LoginAuth', {})
    .then(() => {
        let payload = {'uname': username, 'ulog': true}
        store.dispatch("login_act", payload)
        
        
    }).catch(err => {console.log(err.data)})
}

const apiUserCreate = async (username_create, password_create) => {
    await  userRequest.post( '/user-create', {
        'username': username_create,
        'password': password_create
    })
    .then((response) => {
        console.log(response.data.user_create_result)
        if(response.data.user_create_result == 'true') {
            alert("Successfully Create New User")
        }
        
        
    }).catch(err => {console.log(err.data)})
}

const apiUserProtected = async() => {
    await  userRequest.post( '/user_router/user-protected', {})
  .then(response => {
    // Set the access token in the component state
        alert(response.data.message)
    })
  };

export {apiUserAuth, apiUserCreate, apiUserProtected}