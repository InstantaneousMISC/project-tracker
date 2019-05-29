<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 class="center min-70">
      <panel title="register">
          <form name="register-form" autocomplete="off">
            <v-text-field type="email" name="email" label="Enter Email" v-model="email" placeholder="Email"/>
            <v-text-field type="password" name="password" label="Password Email" v-model="password" placeholder="password" autocomplete="new-password"/>
            <br>
            <div class="error-txt" v-html="error">
            </div>
            <br>
            <v-btn dark class="teal" @click='register'>Register</v-btn>
          </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import AuthService from '@/services/AuthService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
        "email" : "",
        "password" : "",
        "error": null
    }
  },
  methods: {
      async register () {
        try{
          const response = await AuthService.register({
              email: this.email,
              password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        }catch(err){
          this.error = err.response.data.error
        }
      }
  }, 
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error-txt{
    color:red;
  }
  .center{
    margin:auto;
  }
  .min-70{
    min-width:70%;
  }
</style>
