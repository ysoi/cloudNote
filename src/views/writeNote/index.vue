<template>
    <div class="container">
       <el-form class="form">
           <el-form-item label="标题"  class="title" >
               <el-input placeholder="请输入笔记标题"></el-input>
           </el-form-item>
           <el-form-item label="内容" >
               <template> 
                   <div>
                      <div id="editorElem" style="text-align:left"></div>
                      <button v-on:click="getContent">查看内容</button>
                   </div>
                </template>
           </el-form-item>
           <el-form-item>
               <template>
                   <h5>标签</h5>
               </template>
           </el-form-item>
           <el-form-item >
               <el-button type="primary" >发布</el-button>
           </el-form-item>
       </el-form>
    </div>
</template>

<script>
    import E from "wangeditor";

    export default {
        name:"writeNote",
        data(){
            return{
               editorContent:""
            }
        },
        methods:{
          getContent(){
              alert(this.editorContent)
          }
        },

        mounted(){
            var editor=new E("#editorElem")
            editor.customConfig.onchange=(html)=>{
                this.editorContent=html
            }
            editor.create()
        }
    }
</script>
<style>
.container .form .title{
    font-size:30px;
    font-weight:700px;
}

</style>


<style scoped lang="scss">
    .container{
       margin:20px 170px 0px 170px;
       background:rgb(196,223,155);
       padding:10px 20px 20px 20px;
       .form{
          .title{
            
          }
       }  
               
    
    }    
    
</style>    