<template>
    <div class="header">
        <div class="logo fl">
            <h1>
                <router-link to="/home">
                    <img src="../../assets/img/logo.png" alt="logo">
                    福报运营管理后台
                </router-link>
            </h1>
        </div>
        <div class="exit fr">
            <el-button type="text">退出</el-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .header{
        z-index: 1000;
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        line-height: 50px;
        width: 100%;
        min-width: 1250px;
        background: #2599f2;
        background: linear-gradient(90deg,#2599f2,#3b7eed);
        padding: 0 20px;
        a{
            img{
                display: inline-block;
                vertical-align: middle;
                padding: 0 20px;
            }
            color: #fff;
            font-size: 18px;
            width: 100%;
            height: 100%;
            display: block;
        }
        .exit{
            .el-button--text{
                color: #fff;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
</style>

