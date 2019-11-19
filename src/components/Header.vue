<template>
    <div id="root" class="header">
        <!-- <h1>{{title}}</h1> -->
        <p style="text-align:left; "><button @click="goback">back</button></p>

        <p>
            <router-link :to="{name:'Index'}">Index</router-link> | 
            <router-link :to="{name:'About',params:{id:456,pid:789}}">About</router-link> |  
            <router-link :to="{name:'User'}">User</router-link> |  
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:"header"
        }
    },
    methods:{
       goback(){
           window.history.length>1?window.history.go(-1):this.$router.push("/");
       },
       tolink(){
           
       }
       
    },
    beforeCreate(){
        // alert("beforcereate");
    }
}
 
</script>

<style scoped>
.header{
    background-color: lightskyblue;
    border: 1;
}
h1{
    color: blue;
}
.router-link-active{
    background-color: red;
}
</style>