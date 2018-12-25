<template>
    <div>
        <div class="clearfix user">
        <el-form :model="query">
            <div class="fl">
                <div class="title">创建频道</div>
            </div>
            <div class="fr">
                <el-button type="primary" size="small" class="btn-primary">账号频道</el-button>
            </div>
        </el-form>
            
        </div>
        <div class="table-list">
            <el-table
                :data="newsListData"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="频道ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="频道名称"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="排序权重"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="是否订阅"
                align="center">
                </el-table-column>
                <el-table-column
                prop=""
                label="状态"
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
    </div>
</template>
<script>
import {dateFor} from '../../api/utils'
import axios from 'axios'
export default {
    data(){
        return{
            newsListData:[]
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
