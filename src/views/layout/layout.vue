<template>
    <div class="index-wrap">
       <div class="header">
          <div>云笔记</div>
         
          <button @click="writeNote">写笔记</button>
          
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"layout",
    data(){
        return{

        }
    },
    methods:{
        writeNote(){
            this.$router.push("/index/writeNote");
        }
    }
};
</script>

<style scoped lang="scss">
    .index-wrap{
      color:rgb(246,246,246);
      .header{
        position:relative;
        height:50px;
        background:rgb(0,142,239);
        div{
         margin-left:170px;
         color:#fff;
         font-size:30px;
         line-height:50px;
         display:inline-block;
        }
       
        
        
         button{
            position:absolute;
            right:170px;
            top:10px;
            bottom:10px;
           display:inline-block;
           border-radius:5px;
          
           background:#fff;
           height:30px;
           font-size:20px;
           color:rgb(0,142,239);
         }
       
     }
    
     
     
    }
</style>

