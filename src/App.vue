<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <h1>hello lz!</h1> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <User :users="users"/> -->
    <Home />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'

export default {
  name: 'app',
  data(){
    return{
      users:[
                {name:"AA",age:"15"},
                {name:"BB",age:"18"},
                {name:"BB",age:"18"},
                {name:"BB",age:"18"},
            ]
    }
  },
  components: {
    HelloWorld,
    User,
    Header,
    Footer,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
