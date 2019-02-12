<template>
    <div>
        <div class="clearfix user">
            <div class="fl">
                <el-form :model="query" ref="query">
                    <el-form-item>
                        <el-select v-model="query.default" placeholder="请选择" size="small">
                            <el-option label="手机号码" value="1"></el-option>
                            <el-option label="用户昵称" value="2"></el-option>
                            <el-option label="用户ID" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输入搜索内容" v-model="query.keyword" size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="queryForm" size="small">查询</el-button>
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
                prop="_id"
                label="ID(内部)"
                align="center">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="username"
                label="使用人"
                align="center">
                </el-table-column>
                <el-table-column
                prop="userRole"
                label="后台角色"
                align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.userRole == '1'">尊贵VIP</span>
                        <span v-if="scope.row.userRole == '2'">普通管理</span>
                        <span v-if="scope.row.userRole == '3'">普通用户</span>
                    </template>
                </el-table-column>
                <el-table-column
                 prop="state"
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
                        <!-- <a href="javascript:" class="blue" @click="editorOpen(scope.row)">编辑</a> -->
                        <el-button type="primary" title="编辑" icon="el-icon-edit" :disabled="userRole" circle @click="editorOpen(scope.row)"></el-button>
                        <el-button type="danger" title="删除" icon="el-icon-delete" :disabled="userRole" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            background
            layout="prev, pager, next,total"
            :total="total">
            </el-pagination>
        </div>
        <!-- 创建账户弹窗 --> 
        <el-dialog title="创建账号" :visible.sync="createAccount" width="25%" center :before-close="userClose">
            <el-form :model="createForm" size="small" :rules="rules" hide-required-asterisk status-icon ref="createForm" label-width="80px" class="demo-ruleForm create-form">
                <el-form-item label="手机号" prop="checkPhone">
                    <el-input type="text" v-model="createForm.checkPhone" autocomplete="off" placeholder="输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="createForm.pass" autocomplete="off" placeholder="输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="createForm.checkPass" autocomplete="off" placeholder="再次确认密码"></el-input>
                </el-form-item>
                <el-form-item label="名称" prop="username">
                    <el-input type="text" v-model="createForm.username" placeholder="请输入使用人名称"></el-input>
                </el-form-item>
                <el-form-item label="角色配置" prop="createUserRole">
                    <el-select class="w100b" v-model="createForm.createUserRole" placeholder="请选择角色" size="small">
                        <el-option label="1 - 尊贵VIP" value="1"></el-option>
                        <el-option label="2 - 普通管理" value="2"></el-option>
                        <el-option label="3 - 普通用户" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button :plain="true" type="primary" size="small" @click="submitForm('createForm')">保存</el-button>
            </div>
        </el-dialog>
        <!-- 编辑用户弹窗 --> 
        <el-dialog title="编辑账号" :visible.sync="editorUser" width="25%" center :before-close="editorUserClose">
            <el-form :model="editorForm" size="small" hide-required-asterisk status-icon label-width="80px" class="demo-ruleForm create-form">
                <el-form-item label="手机号">
                    <el-input type="text" v-model="editorForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="editorForm.password" autocomplete="off" placeholder="输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input type="text" v-model="editorForm.username" placeholder="请输入使用人名称"></el-input>
                </el-form-item>
                <el-form-item label="角色配置">
                    <el-select class="w100b" v-model="editorForm.userRole" size="small">
                        <el-option
                        v-for="item in editorForm.editorUserRole"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="small" @click="editor(editorForm)">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {dateFor} from '../../api/utils'
import store from '../../vuex/store'
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
    name:'adminUser',
    data(){
        //手机验证
        var checkPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('手机号不能为空'));
            } else {
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                console.log(reg.test(value));
            if (reg.test(value)) {console.log(value)
                this.$axios.post('/checkUser',{type:1,value:value}).then(function(res){
                    console.log(res)
                    if(res.status){
                        return callback(new Error('手机号已存在'));
                    } else{
                        callback();
                    }
                })
            } else {
                    return callback(new Error('请输入正确的手机号'));
                }
            }
        };
        //密码验证
        var pass = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('密码不能为空'));
            } else {
            const reg = /^[a-zA-Z]\w{5,17}$/
            console.log(reg.test(value));
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入长度在6~18之间,只能包含字母、数字和下划线的密码'));
            }
            }
        };
        //密码二次验证
        let checkPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.createForm.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        };
        //用户名验证
        var username = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            } else {
                const reg = /^.{2,20}$/
                console.log(reg.test(value));
            if (reg.test(value)) {
                this.$axios.post('/checkUser',{type:2,value:value}).then(function(res){
                    console.log(res)
                    if(res.status){
                        return callback(new Error('用户名已存在'));
                    } else{
                        callback();
                    }
                })
            } else {
                    return callback(new Error('长度在 2 到 5 个字符'));
                }
            }
        };
        return{
            //禁用
            // disabled: false,
            // userRole: userRole,
            //弹出
            createAccount: false,
            editorUser: false,
            //分页
            total: 0,
            pageSize: 13,
            pageIndex: 1,
            //编辑用户
            editorForm: {
                userId: '',
                phone: '',
                password: '',
                username: '',
                userRole: '',
                editorUserRole:[{
                    value: '1',
                    label: '尊贵VIP'
                },{
                    value: '2',
                    label: '普通管理'
                },{
                    value: '3',
                    label: '普通用户'
                }]
            },
            //创建用户
            createForm: {
                checkPhone: '',
                pass: '',
                createUserRole: '',
                username:'',
            },
            tableListData:[],
            //搜索
            query: {
                keyword: '',
                default: '1'
            },
            //正则
            rules: {
                checkPhone: [
                    {validator: checkPhone, trigger: 'blur'}
                ],
                pass: [
                    {validator: pass, trigger: 'blur'}
                ],
                checkPass: [
                    {validator: checkPass, trigger: 'blur'}
                ],
                username: [
                    {validator: username, trigger: 'blur'}
                ],
                createUserRole: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        //编辑用户
        editorOpen(row){
            let that = this;
            that.editorUser = true;
            that.editorForm.userId = row._id;
            that.editorForm.phone = row.phone;
            that.editorForm.username = row.username;
            that.editorForm.userRole = row.userRole;
        },
        //编辑用户保存
        editor(form){
            let that = this;
            form = JSON.stringify(form);
            that.$axios.post('/editorUser',{form}).then((res)=>{
                console.log(res)
            })
        },
        //查找
        queryForm(){
            let that = this;
            if(that.query.keyword.length >0){
                that.$axios.post('/queryUser',{
                    type: that.query.default,
                    keyword: that.query.keyword
                }).then((res)=>{
                    that.tableListData = res.data.data;
                })
            } else{
                that.tableList(that.pageSize,that.pageIndex);
            }
        },
        //切换分页
        handleCurrentChange(val){
            var that = this;
            that.pageIndex = val;
            that.tableList(that.pageSize,that.pageIndex);
        },
        //数据生成
        tableList(pageSize,pageIndex){
            let that = this;
            that.$axios.post('/adminUser',{
                pageSize: pageSize,
                pageIndex: pageIndex,
                count: 1
            }).then((res)=>{
                that.tableListData = res.data.items;
                that.total = res.data.itemsTotle;
            })
        },
        userClose(done){
            done();
        },
        editorUserClose(done){
            done();
        },
        /* 转义日期 */
        compileDate(time){
            return dateFor.dateFormat(time)
        },
        submitForm(formName){
            let that = this;
            let obj = JSON.stringify(this.createForm);
            that.$refs[formName].validate((valid) => {
                if (valid) {
                    that.$axios.post('/createUser',{formData:obj}).then((res)=>{
                        //创建成功提醒
                        that.$message({
                            title: '成功',
                            message: '创建成功',
                            type: 'success',
                            center: true    
                        });
                        //关闭弹出
                        that.createAccount = false;
                        //重置弹窗
                        that.$refs.createForm.resetFields();
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    mounted(){
        this.tableList(this.pageSize,this.pageIndex);
    },
    computed:{
		...mapState(['userRole']),
		...mapGetters(['userRole'])
	},
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
    margin-bottom: 30px;
}
.el-dialog--center .el-dialog__body{
    padding: 5px 25px;
}
.create-form .el-form-item{
    width: 100%;
}
.el-form-item__content{
    width: 100%;
}
.w94{
    width: 94%;
}
.w100b{
    width: 100%;
}
.el-select .el-tag{
    border-color: rgba(32,160,255,.2);
    color: #20a0ff;
    height: 24px;
    line-height: 24px;
}
.el-button.is-circle {
    padding: 6px;
}
</style>