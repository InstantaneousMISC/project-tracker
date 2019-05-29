<template>
    <v-toolbar fixed class="teal" dark>
        <v-toolbar-title class="mr-4" >
            <span @click="navigateTo({name: 'root'})" class="main-logo">Project-Tracker</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                flat
                dark
                @click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>

            <v-btn
                flat
                dark
                @click="navigateTo({name: 'login'})"  v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
            <v-btn flat dark
                @click="navigateTo({name: 'register'})"  v-if="!$store.state.isUserLoggedIn">
                Sign Up
            </v-btn>
            <v-btn flat dark
                @click="logout()"  v-if="$store.state.isUserLoggedIn">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
/* eslint-disable */
export default {
    methods: {
        navigateTo (route){
            this.$router.push(route)
        },
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser' , null)
            this.$router.push({
                name: 'root'
            })
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-logo{
        cursor:pointer;
        background-color:rbga(100,100,100, .3);
    }
    .main-logo:hover{
        color:darkblue;
    }
</style>
