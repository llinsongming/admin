<template>
    <div>
        <div class="clearfix user">
            <div class="fl">
                <el-form>
                    <el-form-ietm>
                        <el-select v-model="value" placeholder="请选择" size="small">
                            <el-option label="手机号码" value="1"></el-option>
                            <el-option label="用户昵称" value="2"></el-option>
                            <el-option label="用户ID" value="3"></el-option>
                        </el-select>
                    </el-form-ietm>
                    <el-form-item>
                        <el-input placeholder="输入搜索内容" size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="fr">
                <el-form>
                    <el-form-item>
                        <el-button type="primary" size="small">账号创建</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">角色列表</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">菜单列表</el-button>
                    </el-form-item>
                </el-form>
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
                label="ID(内部)"
                align="center">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="user"
                label="使用人"
                align="center">
                </el-table-column>
                <el-table-column
                label="后台角色"
                align="center">
                </el-table-column>
                <el-table-column
                label="是否启用"
                align="center">
                </el-table-column>
                <el-table-column
                label="最近登录时间"
                align="center">
                </el-table-column>
                <el-table-column
                label="操作"
                align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value: ""
        }
    }
}
</script>
