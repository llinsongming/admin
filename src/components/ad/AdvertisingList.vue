<template>
    <div>
        <div class="title">有效期内</div>
        <div class="table-list">
            <el-table
                :data="advertisingListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="广告ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="广告标题"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="广告链接"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="广告图片"
                align="center">
                    <template slot-scope="scope">
                        <!-- <img class="img-size" :src="scope.row.avatar" alt=""> -->
                        <img class="img-size" src="" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                prop=""
                label="有效期"
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
        <div class="title">有效期内</div>
        <div class="table-list">
            <el-table
                :data="advertisingFailureListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="广告ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="广告标题"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="广告链接"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="广告图片"
                align="center">
                    <template slot-scope="scope">
                        <!-- <img class="img-size" :src="scope.row.avatar" alt=""> -->
                        <img class="img-size" src="" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                prop=""
                label="有效期"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="创建时间"
                align="center">
                </el-table-column>  
                <el-table-column
                label="状态"
                align="center">
                    <template slot-scope="scope">
                        <a class="">禁用</a>
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
