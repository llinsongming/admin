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
        </div>
        <div class="table-list">
            <el-table
                :data="userListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="ID(内部)"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="头像"
                align="center">
                    <template slot-scope="scope">
                        <!-- <img class="img-size" :src="scope.row.avatar" alt=""> -->
                        <img class="img-size" src="" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="手机号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="用户昵称"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="账号类别"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="直播房间ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="创建时间"
                align="center">
                    <span slot-scope="scope">
                        {{compileDate(scope.row.registerTime)}}
                    </span>
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
            :total="total"
            :pager-count="5">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {dateFor} from '../../api/utils'
import axios from 'axios'
export default {
    data(){
        return{
            total: 0,
            pageSize: 15,
            page: 1,
            userListData:[],
            //搜索
            query: {
                keyword: '',
                default: '1'
            }
        }
    },
    methods: {
        userTableListData(){
            var that = this;
            // that.$axios.post('/user',{page:that.page,pageSize:that.pageSize}).then((res)=>{
            //     that.userListData = res.data.items;
            //     that.total = res.data.itemsTotle;
            // });
            
        },
        /* 转义日期 */
        compileDate(time){
            return dateFor.dateFormat(time)
        }
    },
    mounted(){
        this.userTableListData()
    }
}
</script>
<style lang="less" scoped>
.el-pagination{
    text-align: center;
}
</style>
