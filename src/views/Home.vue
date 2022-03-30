<template>
  <div>
    <div id="mask">
      <img id="promptpic" src="../assets/scape.png" alt="">
      <div style="color:white;position: absolute;top:70vh;font-size: 1.3rem">请旋转屏幕</div>
    </div>
    <div class="header">
      <img id="bgimg" src="../assets/bg.png" alt="">
      <el-menu
          id="menu"
          :default-active="activeIndex"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
      >
        <el-menu-item class="menuItem" index="home">Home</el-menu-item>
        <el-menu-item class="menuItem" index="news">NEWS</el-menu-item>
        <el-menu-item class="menuItem" index="weapons">WEAPONS</el-menu-item>
        <el-menu-item class="menuItem" index="map">MAP</el-menu-item>
        <el-menu-item class="menuItem" index="characters">CHARCTERS</el-menu-item>
        <el-menu-item class="menuItem" index="wallpapers">WALLPAPERS</el-menu-item>
      </el-menu>
      <img class="logo" src="../assets/logo.png" alt="">
      <div id="line"><span style="text-align: center;color: #A9B7BA;position: relative;top:1.2rem;font-size: 2rem">CHARCTERS</span></div>
    </div>

    <div class="outer">
      <div class="imgbox">
        <span class="pic" v-for="(item,index) in imgList" :key="index">
          <img class="theimg" :src="item.image" />
        </span>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent, ref} from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    setup(){
      const activeIndex = ref('characters')
      let imgList = [{image:require('../assets/img-1.jpg')}]
      for(let i =0;i<4;i++)imgList.push(imgList[0])
      const router = useRouter()
      const handleSelect = (menuname: string) => {
        router.push({
          path: '/'+menuname?? '/not-found'
        })
      }
      return{
        activeIndex,
        imgList,
        handleSelect
      }
    },

  })
</script>

<style>
body{
  margin: 0;
  background-color: rgb(40,39,39);
}
/*竖屏移动端显示遮罩*/
@media screen and (orientation: portrait) and (min-width:301px) and (max-width:450px){
  #mask{
    width:100%;
    height:100%;
    background-color:#000;
    filter:alpha(opacity=50);
    -moz-opacity:0.5;
    opacity:0.5;
    position:absolute;
    left:0px;
    top:0px;
    z-index: 9999;
    display: flex;
    justify-content: center;
  }
  #promptpic{
    height: 200px;
    margin: auto;
    animation: rot 2s linear infinite;
    animation-name: rot;
  }
  @keyframes rot
  {
    0%{
      -webkit-transform: rotate(0deg);
    }
    25%{
      -webkit-transform: rotate(90deg);
    }
    50%{
      -webkit-transform: rotate(0deg);
    }
  }
}
@media screen and (orientation: portrait) {
  #bgimg{
    display: none;
  }
  #menu{
    background-color: rgba(84,92,100,0.5);
    margin: 20px;
    border-radius:5px;
    border: none;
  }
  .menuItem:hover{
    background-color: #282727 !important;
  }
  .menuItem{
    background-color: rgba(84,92,100,0.5) !important;
  }
  .logo{
    display: none;
  }
  #line{
    border-bottom:solid ;
    border-bottom-color: #A9B7BA;
    position: relative;
    left: -50%;
    text-align: center;
    vertical-align: center;
    transform: scale(0.5);
    width: 200%;
    height:200%;
  }
  .imgbox{
    transform: scale(0.8);
    position: relative;
    top:-13rem
  }
  .theimg{
    border: #282727;
    margin-bottom: 20%;
  }
 }
/*横屏pc端*/
@media screen and (orientation:landscape){
   #mask{display: none}
   #bgimg{
     position: absolute;
     top:0;
     left: 0;
     width: 100%;
   }
   #menu{
     background-color: rgba(84,92,100,0.5);
     margin: 20px;
     border-radius:5px;
     border: none;
   }
   .menuItem:hover{
     background-color: #282727 !important;
   }
   .menuItem{
     background-color: rgba(84,92,100,0.5) !important;
   }
   .logo{
     position:absolute;
     z-index: 1000;
     margin: 5px;
     left:200px;
   }
   #line{
     border-bottom:solid ;
     border-bottom-color: #A9B7BA;
     position: relative;
     top:90px;
     left: -50%;
     text-align: center;
     vertical-align: center;
     transform: scale(0.5);
     width: 200%;
     height:200%;
   }
   .outer{
     width: 100%;
     height: 100%;
     margin: 0;
     padding:0;
     top:190px;
     position: absolute;
   }
   .imgbox{
     display: flex;
     margin: 3% 1% 0 3%;
     flex-flow: row wrap;
   }
   .pic{
     padding: 3px;
     width: 30%;
     overflow: hidden;
     border: #282727;
   }


 }

</style>
