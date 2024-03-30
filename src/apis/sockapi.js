import axios from 'axios'
import store from '../store'

const stockRequest = axios.create(
    { baseURL: 'http://127.0.0.1:8899' }
)

const apiSearchStock = (stocknum) => {
    if(stocknum == '2330') {
        localStorage.setItem('predicted_price', 799)
        localStorage.setItem('prediction_confidence', "20%")
    } else {
        localStorage.setItem('predicted_price', 30)
        localStorage.setItem('prediction_confidence', "15%")
    }
}

const apiAddFavorite = async (stocknum) => {
    await stockRequest.post('/add-favorite',{'username': store.getters.get_username, 'stocknum': [stocknum]})
    store.dispatch("addfavorite_act", stocknum)
    
}

const apiDeleteFavorite = (stocknum) => {
    store.dispatch("deletefavorite_act", stocknum)
}



export {apiSearchStock, apiAddFavorite, apiDeleteFavorite}