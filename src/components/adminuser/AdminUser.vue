<template>
    <div>
        <div class="clearfix user">
            <div class="fl">
                <el-form :model="query">
                    <el-form-item>
                        <el-select v-model="query.default" placeholder="请选择" size="small">
                            <el-option label="手机号码" value="1"></el-option>
                            <el-option label="用户昵称" value="2"></el-option>
                            <el-option label="用户ID" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输入搜索内容" v-model="query.leyword" size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="fr">
                <el-form>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="createAccount = true">账号创建</el-button>
                    </el-form-item>
                    <el-form-item>
                        <router-link :to="{path: 'home/roleList'}"><el-button type="primary" size="small" >角色列表</el-button></router-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">菜单列表</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="table-list">
            <el-table
                :data="tableListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="ID(内部)"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="手机号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="使用人"
                align="center">
                </el-table-column>
                <el-table-column
                prop="signature"
                label="后台角色"
                align="center">
                </el-table-column>
                <el-table-column
                label="是否启用"
                align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state === 1">启用</span>
                        <span v-if="scope.row.state === 0">禁用</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="最近登录时间"
                align="center">
                    <template slot-scope="scope">
                        {{compileDate(scope.row.recentLoginTime)}}
                    </template>
                </el-table-column>
                <el-table-column
                label="操作"
                align="center">
                    <template slot-scope="scope">
                        <a href="javascript:" class="blue">编辑</a>
                        <a href="javascript:" class="red ml20">删除</a>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination
            :page-size="pageSize"
            background
            layout="prev, pager, next,total"
            :total="total">
            </el-pagination>
        </div>
        <!-- 创建账户弹窗 --> 
        <el-dialog title="创建账号" :visible.sync="createAccount" width="25%" center :before-close="userClose">
            <el-form :model="creatForm" size="small"  status-icon ref="ruleForm2" label-width="70px" class="demo-ruleForm">
                <el-form-item label="手机号">
                    <el-input type="text" v-model="creatForm.phone" autocomplete="off" placeholder="输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="creatForm.pass" autocomplete="off" placeholder="输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="creatForm.checkPass" autocomplete="off" placeholder="再次确认密码"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model.number="creatForm.username" placeholder="请输入使用人名称"></el-input>
                </el-form-item>
                <el-form-item label="角色配置">
                    <el-select class="w94" v-model="createAccountValue" placeholder="请选择角色" size="small">
                        <el-option label="1 - 尊贵VIP" value="1"></el-option>
                        <el-option label="2 - 普通管理" value="2"></el-option>
                        <el-option label="3 - 普通用户" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="small" @click="createAccount = false">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {dateFor} from '../../api/utils'
export default {
    name:'adminUser',
    data(){
        return{
            total: 0,
            createAccount: false,
            createAccountValue: '',
            pageSize: 15,
            creatForm: {
                phone: '',
                pass: '',
                username:'',
                checkPass:''
            },
            tableListData:[],
            //搜索
            query: {
                keyword: '',
                default: '1'
            }
        }
    },
    methods: {
        tableList(){
            let that = this;
            that.$axios.get('/adminUser').then((res)=>{
                that.tableListData = res.data[0].data;
                that.pageSize = res.data[0].page.pageSize;
                that.total = res.data[0].page.totalRows;
            })
        },
        userClose(done){
            done();
        },
        /* 转义日期 */
        compileDate(time){
            return dateFor.dateFormat(time)
        }
    },
    mounted(){
        this.tableList()
    }
}
</script>
<style lang="less" scoped>
.el-pagination{
    text-align: center;
}
.el-dialog__header{
    text-align: left;
}
.el-form-item--small.el-form-item{
    margin-bottom: 10px;
}
.el-dialog--center .el-dialog__body{
    padding: 5px 25px;
}
.el-form-item__content{
    width: 100%;
}
.w94{
    width: 94%;
}

</style>
