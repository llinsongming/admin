<template>
    <div>
        <div class="title">待推送 <span style="font-size:14px;margin-left:20px;font-weight:300;">推送只能禁用，禁用后不能重新启动</span></div>
        <div class="table-list">
            <el-table
                :data="advertisingListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="推送ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="推送内容"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="推送跳转"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="推送类型	"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="用户ID"
                align="center">
                </el-table-column>  
                <el-table-column
                prop=""
                label="推送时间"
                align="center">
                </el-table-column> 
                <el-table-column
                prop=""
                label="更新时间"
                align="center">
                </el-table-column> 
                <el-table-column
                prop=""
                label="创建时间"
                align="center">
                </el-table-column> 
                <el-table-column
                label="操作"
                align="center">
                    <template slot-scope="scope">
                        <a href="javascript:" class="blue">禁用</a>
                    </template>
                </el-table-column>
            </el-table>
        </div> 
        <div class="text-right">
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
        <div class="title">已完成</div>
        <div class="table-list">
            <el-table
                :data="advertisingListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="推送ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="推送内容"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="推送跳转"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="推送类型	"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="用户ID"
                align="center">
                </el-table-column>  
                <el-table-column
                prop=""
                label="推送时间"
                align="center">
                </el-table-column> 
                <el-table-column
                prop=""
                label="更新时间"
                align="center">
                </el-table-column> 
                <el-table-column
                prop=""
                label="创建时间"
                align="center">
                </el-table-column> 
                <el-table-column
                label="操作"
                align="center">
                    <template slot-scope="scope">
                        <a href="javascript:" class="blue">禁用</a>
                    </template>
                </el-table-column>
            </el-table>
        </div> 
        <div class="text-right">
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
            advertisingListData: [],
            advertisingFailureListData: []
        }
    },
    methods: {
        
        /* 转义日期 */
        compileDate(time){
            return dateFor.dateFormat(time)
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
.el-pagination{
    text-align: center;
}
.text-right{
    text-align: right;  
}
.page{
    display: inline-block;
}
</style>
