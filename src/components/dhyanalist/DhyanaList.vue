<template>
    <div>
        <div>
            <el-form :model="query">
                <el-form-item label="关键词" class="displayLine">
                    <el-input placeholder="输入搜索内容" v-model="query.leyword" size="small"></el-input>
                </el-form-item>
                <el-form-item>
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
        <div class="table-list">
            <el-table
                :data="userMsg"
                border
                style="width: 100%"
                >
                <el-table-column
                prop="userId"
                label="禅说ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop="userId"
                label="禅说内容"
                align="center">
                </el-table-column>
                <el-table-column
                prop="userId"
                label="禅说类型"
                align="center">
                </el-table-column>
                <el-table-column
                prop="userId"
                label="用户ID"
                align="center">
                </el-table-column>
                <el-table-column
                prop="userId"
                label="发布时间"
                align="center">
                </el-table-column>  
                <el-table-column
                prop="userId"
                label="状态"
                align="center">
                </el-table-column>  
                <el-table-column
                prop="userId"
                label="操作"
                align="center">
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
export default {
    data(){
        return{
            total: 0,
            pageSize: 15,
            page: 1,
            userMsg:[],
            //搜索
            query: {
                keyword: '',
                date: ''
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
.el-form-item__content{
    display: inline-block;
}
.el-date-editor--daterange.el-input__inner{
    width: 240px;
}
</style>
