<template>
  <div id="app">
   <router-view></router-view>
        <div class="footer">
            <router-link to="/index">首页</router-link>
           
            <router-link to="/my">我的</router-link>
        </div>
  </div>
</template>

<style lang="scss">
.footer{
display: flex;
justify-content: space-around;
position: fixed;
left: 0;
bottom: 0;
width: 7.5rem;
height: 1rem;
line-height: 1rem;
background-color: aqua;
}
a{
  text-decoration: none;
}
</style>
