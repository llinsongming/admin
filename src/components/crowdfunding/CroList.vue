<template>
    <div>
        <div class="clearfix user">
            <div class="fl">
                <el-form :model="query">
                    <el-form-item>
                        <el-select v-model="query.default" placeholder="请选择" size="small">
                            <el-option label="标题" value="1"></el-option>
                            <el-option label="ID" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输入搜索内容" v-model="query.leyword" size="small"></el-input>
                    </el-form-item>
                    <el-form-item class="ml20">
                        <el-date-picker
                        v-model="query.date"    
                        clearable
                        type="daterange"    
                        placeholder="选择日期范围"
                        size="small"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="table-list">
            <el-table
                :data="newsListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="状态"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="标题"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="目标金额"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="累计募集金额"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="封面"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="接受的寺院id"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="接受的寺院"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="创建时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="更新时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="排序权重"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="众筹状态"
                align="center">
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
            newsListData:[],
            //搜索
            query: {
                keyword: '',
                default: '1'
            }
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
.el-date-editor--daterange.el-input__inner{
    width: 240px;
}
</style>
