<template>
    <div>
        <h2 class="mb20">创建文章</h2>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="新闻标题:" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item  label="频道类型:" prop="">
                <el-select v-model="form.default" placeholder="请选择" >
                </el-select>
            </el-form-item>
             <el-form-item  label="文章类型:" prop="">
                <el-select v-model="form.source.default" placeholder="请选择" >
                    <el-option label="图文" value="1"></el-option>
                    <el-option label="音频" value="2"></el-option>
                    <el-option label="视频" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="列表图:" >
                <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <span class="gray">只能上传一张图片</span>
            </el-form-item>
            <el-form-item label="排序权重:" prop="priority">
                <el-input v-model="form.priority"></el-input>
            </el-form-item>
            <el-form-item label="新闻内容:" prop="newsContent">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="btn-primary">保存</el-button>
                <el-button type="primary" class="btn-default">预览</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// const UE = require('ueditor')
export default {
    data(){
        return{
            form: {
                title: '',
                url: '',
                default: '',
                source: {
                    keyword: '',
                    default: ''
                },
                priority: 0
            },
            rules: {
                title: [
                    { required: true, message: '新闻标题不能为空', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                newsContent: [
                    { required: true, message: '新闻内容不能为空', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                priority: [
                    { required: true, message: '权重不能为空', trigger: 'blur' },
                    { min: 1, max: 2, message: '权重在 1 到 99', trigger: 'blur' }
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
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file, fileList) {
            
        },
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
