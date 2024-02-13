<template>
  <div>
    <b-form @submit="onSubmit"  v-if="show" >
      
      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col>
          <b-form-input
            id="input-1"
            v-model="form.username"
            placeholder="Enter Username"
            required
          ></b-form-input>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>

      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col>
          <b-form-input
            id="input-1"
            v-model="form.useremail"
            placeholder="Enter Email"
            required
          ></b-form-input>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>
      
      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col >
          <b-form-input
            id="input-1"
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="auto">
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>
    


    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
      <p>not true is {{ nottrue }}</p>
      <p>{{ $store.getters.get_login }}</p>
    </b-card>
  </div>
</template>

<script>

  import { apiUserAuth } from "../apis/userapi.js";

  export default {
    data() {
      return {
        form: {
          username: '',
          useremail: '',
          password: '',
          checked: [],
          
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        nottrue: false,
        show: true,
        
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        apiUserAuth().then(data => this.nottrue = data)
        .then(()=> {
          console.log(this.nottrue)
          
        })
        
        
        alert(JSON.stringify(this.form))
      },
      
    }
  }
</script>

<style>
  .spacer {
      padding-top: 20px;
      padding-bottom: 14px
  }
</style>