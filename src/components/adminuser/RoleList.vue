<template>
    <div>
        <div class="clearfix user mb10">
            <div class="fl">
                <el-form>
                    <el-form-ietm>
                        <el-button type="primary" size="small" @click="createAccount = true">账号创建</el-button>
                    </el-form-ietm>
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
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        <!-- 创建角色弹窗 --> 
        <el-dialog title="创建角色" :visible.sync="createAccount" center width="40%" :before-close="roleClose">
            <el-form :model="creatForm" size="small"  status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
                <el-form-item label="角色名称">
                    <el-input type="text" v-model="creatForm.roleName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色编码">
                    <el-input type="text" v-model="creatForm.roleCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色描述">
                    <el-input type="textarea" v-model="creatForm.releDescribe"></el-input>
                </el-form-item>
                <el-form-item label="菜单限权">
                    <el-tree
                    :data="toolsTree"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                    :props="defaultProps">
                    </el-tree>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="small" @click="createAccount = false">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            total: 1,
            createAccount: false,
            createAccountValue: '',
            creatForm: {
                roleName: '',
                roleCode: '',
                releDescribe: '',
            },
            toolsTree:[],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        toolsTree(){
            that = this;
            that.$axios.get('/menus').then(function(res){
                that.toolsTree = res.data[0].data;
            })
        },
        roleClose(done){
            done();
        }
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

