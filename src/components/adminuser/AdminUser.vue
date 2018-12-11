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
                2
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
