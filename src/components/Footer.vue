<template>
    <div id="root" class="footer">
        <h1>date:{{date}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            date:Date()
        }
    }
}
</script>

<style scoped>
.footer{
    background-color: lightgreen;
}
h1{
    color: blue;
}
</style>