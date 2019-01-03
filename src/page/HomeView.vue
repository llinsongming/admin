<template>
    <div>
        <el-container>
            <Header></Header>
            <el-aside width="200px">
                <el-col>
                     <el-menu
                    unique-opened
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                        <el-submenu v-for="item in nav" :index="item.url == '' ? String(item.id) : item.url" :key="item.id"  v-if="item.children.length > 1">
                            <template slot="title">
                                {{item.name}}
                            </template>
                            <el-menu-item-group>
                                <el-menu-item v-for="child in item.children" :index="child.url" @click="changeHerf(child.url)" :key="child.id">{{child.name}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item :index="item.url == '' ? String(item.id) : item.url" :key="item.id" @click="changeHerf(item.url)" v-else>
                            <template slot="title">
                                {{item.name}}
                            </template>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import Header from '../components/base/Header.vue'
export default {
    components: {
        Header
    },
    data() {
        return {
            nav : []
        }
    },
    mounted() {
        this.meuns();
    },
    methods: {
        meuns(){
            let that = this;
            that.$axios.get('/menus').then(function(res){console.log(res.data)
                that.nav = res.data;
            })
        },
        handleOpen(key, keyPath) {
            if(key.indexOf("/") === 0 ){
                this.$router.push(key)
            }else{
                return false;
            }
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        changeHerf(url){
            this.$router.push(url)
        }
    }
}
</script>

<style lang="less">
    .el-container{
        padding: 50px 0 0 0;
    }
    .el-col-12{
        width: 100%;
    }
    .el-aside{
        height: calc(~"100% - 50px");
        overflow: hidden;
    }
    .el-menu-item.is-active{
        color: #303133;
    }
    .el-menu-item-group__title{
        padding: 0;
    }
    .el-main{
        box-shadow: 0 0 15px 0 #ccc;
        padding: 15px;
        margin: 15px;
        background: #fff;
    }
    .el-menu-item{
        height: 51px;
        line-height: 51px;
        &.is-active{
            position: relative;
            background: #e4e8f1;
            &::before{
                content: '';
                display: block;
                position: absolute;
                left: 9px;
                top: 16px;
                width: 2px;
                height: 16px;
                background: #20a0ff;
            }
        }
    }
</style>
