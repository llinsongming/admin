<template>
    <div>
        <div class="clearfix user mb10">
            <div class="fl">
                <el-form>
                    <el-form-item>
                        <el-button type="primary" size="small" >账号创建</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="fr">
                <a href="javascript:" @click="$router.go(-1)" class="return">返回 &gt;</a>
            </div>
        </div>
        <div class="table-list">
            <el-table
                :data="tableData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="角色ID"
                align="center">
                </el-table-column>
                <el-table-column
                label="角色名称"
                align="center">
                </el-table-column>
                <el-table-column
                label="角色编码"
                align="center">
                </el-table-column>
                <el-table-column
                label="角色描述"
                align="center">
                </el-table-column>
                <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    
                </template>
                </el-table-column>
            </el-table>
            <div class="page">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            total: 1,
            tableData: []
        }
    },
    methods: {
        
    },
    mounted(){
        
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

