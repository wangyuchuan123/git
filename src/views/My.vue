<template>
  <div class="my">
    <h1>我的</h1>
    <p>state内容:{{number}}</p>
    <p>城市:{{city}}</p>
      <p>不及格成绩{{$store.getters.badScore}}</p>

  </div>
</template>
<script>

export default {
 data(){
   return{
     number:'',
     city:''
   }
 },
created(){
  this.number =this.$store.state.number
  this.city=this.$store.state.city
}
}
</script>
