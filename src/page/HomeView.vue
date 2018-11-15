<template>
    <div>
        <Header></Header>
        <el-container>
            <el-aside width="200px">
                <el-menu>
                    12
                </el-menu>
            </el-aside>
            <el-main>
                12
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

        }
    },
    mounted() {
        this.menuGet()
    },
    methods: {
        menuGet:function() {
            console.log(this)
        }
    }
}
</script>

<style lang="less">
    .el-container{
        padding: 50px 0 0 0;
    }
</style>
