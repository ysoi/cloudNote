<template>
   <div>
       <div class="main">
            <div class="img-wrap">
               <h1>the cloud note is a very good app</h1>  
            </div>
            <div class="box-right">
                <el-form class="form">
                    <el-form-item>
                        <el-input placeholder="邮箱" ></el-input>
                    </el-form-item>
                      <el-form-item>
                        <el-input  placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item class="button" >
                        <el-button style="width:200px;font-weight:500px;background:#008ff0;color:#ffffff;" >登录</el-button>
                    </el-form-item>
                    <el-form-item class="button">
                        <el-button style="width:200px; font-weight:500px;background:#008ff0;color:#ffffff;">注册</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>
        </div>
        <div class="note">
            <div class="note-item">
                <div class="row-first">
                    <div class="first-left">
                        <img src="../../public/imgs/header.jpg" >
                    </div>
                    <div class="first-right">
                         <div class="right-first">
                             <h3 class="h3">用户名：地上金</h3>
                             <h3 class="h3">|</h3>
                             <h3 class="h3">主题：剖析Vue</h3>
                         </div>
                         <div class="right-second">
                             <h6>浏览：888</h6>
                             
                             <h6>回复：666</h6>
                             
                            <h6>分类：前端</h6>
                         </div>
                    </div>
                </div>
                <div class="row-second" >
                    <p>
                       简化流程：设计简洁直观的操作流程；
                       清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                       帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。 
                    </p>
                </div>
            </div>
        </div>
   </div>
   
   
</template>

<script>
export default {
  name: "headerImg"
};
</script>

<style scoped lang="scss">
.main{
    padding:20px 170px 0px;
    display:flex;
    justify-content:space-between;
}
.main .img-wrap {
  
  position: relative;

  
  width: 740px;
  height: 330px;
  background: url("../../public/imgs/header.jpg");
  border-radius: 5px;
  h1 {
    position: absolute;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    bottom: 0;
    background: rgba(155, 182, 121, 0.5);
    color: rgb(131, 15, 21);
    text-align: center;
  }

}
.main .box-right {
    width:200px;
    margin-left:20px;
    padding:20px;
    border-radius:5px;
    background:rgba(97, 226, 125,.6);  
    
}
.note{
    width:700px;
    margin-top:20px;
    margin-left:170px;
    padding:20px;
    background:rgb(196,223,155);
    border-radius:5px;
}
.note .note-item{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border:3px solid skyblue;
    padding:20px;
}
.note .note-item .row-first{
    display:flex;
    justify-content:left;
   
   .first-left{
       
      /deep/ img{
           width:60px;
           height:60px;
       }
   }
   .first-right{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .right-first{
            display:flex;
            justify-content:space-between;
           /deep/ .h3{
               margin-left:20px;
               color:rgb(62, 34, 224);
            }
        }
        .right-second{
            display:flex;
            justify-content:space-between;
            margin-left:20px;
            background: rgba(155, 182, 121, 0.5);
           /deep/ h6{
              margin-right:20px;
              font-size:20px;
              color:red;
              
           }
        }
   }
}
.note .row-second{
    color:#000;
    // 控制一段文字的行数
    -webkit-line-clamp:4;
     display:-webkit-box !important; 
  
    text-overflow:ellipsis;
    overflow:hidden;

}
</style>