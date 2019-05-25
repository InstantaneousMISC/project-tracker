<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email"
    v-model="email"
    placeholder="Email"
    />
    <input type="password" name="password"
    v-model="password"
    placeholder="password"
    />
    <button @click='register'>Register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
        "email" : "",
        "password" : ""
    }
  },
  methods: {
      async register () {
          await AuthService.register({
              email: this.email,
              password: this.password
          })
      }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
