<template>
    <div>
        <h2 class="mb20">创建新闻</h2>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="新闻标题:" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="关键词:" prop="">
                <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
                </el-tag>
                <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item label="新闻内容:" prop="newsContent">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form: {
                title: '',
                url: '',
            },
            rules: {
                title: [
                    { required: true, message: '新闻标题不能为空', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                newsContent: [
                    { required: true, message: '新闻内容不能为空', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ]
            },
            dialogImageUrl: '',
            dialogVisible: false,
            value3: 0,
            dynamicTags: [],
            inputVisible: false,
            inputValue: ''
        }   
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
            this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        getUEContent() {
            let content = this.$refs.ue.getUEContent();
            this.$notify({
            title: '获取成功，可在控制台查看！',
            message: content,
            type: 'success'
            });
            console.log(content)
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
.el-form-item{
    width: 100%;
}
 .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .button-new-tag{
      margin-left: 0;
  }
</style>
