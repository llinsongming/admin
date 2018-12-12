<template>
    <div>
        <el-container>
            <Header></Header>
            <el-aside width="200px">
                <el-col>
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                        <el-submenu v-for="item in nav" :index="item.url == '' ? String(item.id) : item.url" :key="item.id">
                            <template slot="title">
                                {{item.name}}
                            </template>
                            <el-menu-item-group>
                                <el-menu-item v-for="child in item.children" :key="child.id">{{child.name}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
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
            that.$axios.get('/menus').then(function(res){console.log(res)
                that.nav = res.data[0].data;
            })
        },
        handleOpen(key, keyPath) {
            this.$router.push(key)
        },
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
</style>
