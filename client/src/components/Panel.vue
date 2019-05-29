<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 class="center min-70">
      <div class="white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title dark>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
                No slot content defined
            </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
export default {
    props: [
        'title'
    ]
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
