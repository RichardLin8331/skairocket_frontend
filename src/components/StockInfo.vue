<template>
    <div>
        <h2>{{ stocknum }}</h2>
        <div v-show=logged_in>
            <b-button v-if="IsInFavorite" v-on:click="deletefavoritebutton">Delete From Favorite</b-button>
            <b-button v-else v-on:click="addfavoritebutton">Add Favorite </b-button>

        </div>
        <p>Price is {{ predicted_price }}</p>
        <p>Confidence is {{ prediction_confidence }}</p>
        
    </div>
</template>

<script>

import {apiSearchStock, apiAddFavorite, apiDeleteFavorite} from "@/apis/sockapi"
export default {
    data() {
        return {
            stocknum : this.$route.params.stocknum,
            logged_in: this.$store.getters.get_login,
            predicted_price: 0,
            prediction_confidence: "",
        }
        
    },
    computed: {
        IsInFavorite: function() {
            if(this.$store.getters.get_stock_in_favorite(this.$route.params.stocknum) == -1) return false
            else return true
        }
    },
    methods: {
        addfavoritebutton(event) {
            event.preventDefault()
            apiAddFavorite(this.$route.params.stocknum)
        },
        deletefavoritebutton(event) {
            event.preventDefault()
            apiDeleteFavorite(this.$route.params.stocknum)
        },
    },
    created(){
        apiSearchStock(this.$route.params.stocknum)
        this.predicted_price = localStorage.getItem('predicted_price')
        this.prediction_confidence = localStorage.getItem('prediction_confidence')
    }
    
}
</script>