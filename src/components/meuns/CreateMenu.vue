<template>
    <div>
        <div class="clearfix user mb10">
            <div class="fl">
                <el-form>
                    <el-form-ietm>
                        <el-button type="primary" size="small" @click="createAccount = true">菜单列表</el-button>
                    </el-form-ietm>
                </el-form>
            </div>
            <div class="fr">
                <a href="javascript:" @click="$router.go(-1)" class="return">返回 &gt;</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        
    },
    mounted(){
        this.toolsTree()
    }
}
</script>
<style lang="less" scoped>
.return{
    color: #999;
    &:hover{
        color: #20a0ff;
    }
}
.el-pagination{
    text-align: center;
}
.el-dialog__header{
    text-align: left;
}
.el-form-item{
    width: 100%;
}
// .el-input,.el-textarea,.el-tree{
//     width: 80%;
// }
</style>

