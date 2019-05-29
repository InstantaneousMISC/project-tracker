<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 class="center min-70">
      <panel title="Songs">
        <div v-for="song in songs" :key="song.title">
            {{song.title}}
            {{song.artist}}
            {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
    data(){
        return{
            songs: [
                {
                title: 'Float On',
                artist: 'Me',
                album: 'Different Agenda'
                },
                {
                title: 'Seeing',
                artist: 'Mr.Cabell',
                album: 'Seeing From the Inside'
                }
            ]
        }
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
