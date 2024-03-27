<template>
    <b-form @submit="onSubmit"  >
        <b-form-input
            id="input-1"
            v-model="form.stocknum"
            placeholder="Enter Stock Number"
            required
          ></b-form-input>
          <b-button type="submit" variant="primary" pill>Submit</b-button>
    </b-form>
    
</template>

<script>

  import { apiUserCreate } from "../apis/userapi.js";

  export default {
    data() {
      return {
        form: {
          stocknum:''
          
        },
        nottrue: false,
        show: true,
        
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        apiUserCreate(this.form.stocknum)
        alert(JSON.stringify(this.form))
      },
      
    }
  }
</script>