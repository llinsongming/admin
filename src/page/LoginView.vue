<template>
    <div class="login">
        <div class="login-box">
            <h2>后台登录</h2>
            <form action="">
                <el-input placeholder="请输入手机号" v-model="input1" >
                    <template slot="prepend">手机号</template>
                </el-input>
                <el-input type="password" placeholder="请输入密码" v-model="input2" >
                    <template slot="prepend">密码</template>
                </el-input>
                <el-button type="primary" :plain="true" @click="login">登录</el-button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input1: '',
            input2: '',
        }
    },
    methods: {
        login(){
            let that = this;
            that.$axios.post('/login',{username:that.input1,password:that.input2}).then(function(res){console.log(res)
                if(res.status){
                    window.localStorage.setItem('access_token',res.data);
                    that.$router.push({name:'home',params:{username:that.input1}})
                }else{
                    that.$message.error('账号或密码错误');
                }
            })
        },
    },
    mounted(){

    }
}
</script>
<style lang="less">
.login{
    width: 100%;
    height: 100%;
    .login-box{
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translateY(-50%);
        margin-left: -250px;
        width: 500px;
        padding: 60px 80px;
        background: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0 0 20px 0 #ccc;
        -moz-box-shadow: 0 0 20px 0 #ccc;
        -o-kit-box-shadow: 0 0 20px 0 #ccc;
        -ms-box-shadow: 0 0 20px 0 #ccc;
        box-shadow: 0 0 20px 0 #ccc;
    }
    h2{
        text-align: center;
        color: #364347;
        margin-bottom: 35px;
    }
    .el-select .el-input {
        width: 100%;
    }
    .el-input-group{
        margin-bottom: 20px;
    }
    .el-button{
        width: 100%;
    }
    .el-input-group__prepend{
        width: 90px;
        text-align: center;
    }
}
</style>
