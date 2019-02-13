<template>
    <div class="header">
        <div class="logo fl">
            <h1>
                <router-link to="/home">
                    <img src="../../assets/img/logo.png" alt="logo">
                    福报运营管理后台
                </router-link>
                <router-link to="/home" class="logon2">
                    <img src="../../assets/img/logo.png" alt="logo">
                </router-link>
            </h1>
        </div>
        <div class="exit fr">
            {{username}}
            <el-button type="text" @click="exit">退出</el-button>
        </div>
    </div>
</template>
<script>
import store from '../../vuex/store'
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
    methods:{
        exit(){
            this.$store.commit('signOut');
            this.$router.push('/login');
        }
    },
    computed:{
        //计算用户名的属性
		...mapState(['username']),
		...mapGetters(['username'])
	},
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
        // min-width: 1250px;
        background: #2599f2;
        background: linear-gradient(90deg,#2599f2,#3b7eed);
        padding: 0 20px;
        a{
            img{
                display: inline-block;
                vertical-align: middle;
                padding: 0 70px 0 35px;
            }
            color: #fff;
            font-size: 18px;
            width: 100%;
            height: 100%;
            display: block;
        }
        .exit{
            color: #fff;
            .el-button--text{
                color: #fff;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .logon2{
            position: fixed;
            top: 0;
            left: 0;
            padding-left: 20px;
            height: 50px;
            width: 160px;
            background: #2996e9;
        }
    }
</style>

