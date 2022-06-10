<template>
   <div class="index">
      <h1>首页</h1>
      <p>state内容:{{number}}</p>
      <p>城市:{{city}}</p>
      <p>不及格成绩{{badScore}}</p>
      <p>all：{{all}}</p>
      <p><button @click="al(50)">数字</button></p>
      <p><button @click="change(100)">点击更换数据</button></p>
      <p><button @click="cityss('河南')">改变城市</button></p>
      <p><button @click="fail">获取成绩不及格</button></p>
   
   </div>
</template>
<script>
import{mapState,mapGetters,mapActions, mapMutations } from "vuex";
export default {
 data(){
    return{
      //  number:'',
      // //  city:''
    }
 },
computed:{
//     num(){
// return this.$store.state.number
// } ,
...mapState(['number','city','all']),
...mapGetters(['badScore'])
//     city(){
// return this.$store.state.city

//     }
 },
 methods:{
    ...mapActions(['change','fail','citys']),
       ...mapMutations(['cityss','al']),
      
   //  ...mapMutations({
   //     getlist:'cityss'
   //  })
   
   //  change(){
   //    this.$store.dispatch('change',100)
   //  },
   //  citys(){
   //     this.$store.commit('citys')
   //  },
   //  fail(){
   //     this.$store.dispatch('fail')
   //  }
 }
}
</script>