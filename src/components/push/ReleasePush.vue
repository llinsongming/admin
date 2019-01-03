<template>
    <div>
        <h2 class="mb20">发布推送</h2>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="新闻标题:" prop="title">
                <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item  label="推荐跳转:" prop="">
                <el-select v-model="form.default" placeholder="请选择" >
                    <el-option label="应用内-新闻详情" value="1"></el-option>
                    <el-option label="应用内-禅说详情" value="2"></el-option>
                    <el-option label="应用内-学堂文章" value="3"></el-option>
                    <el-option label="应用内-活动" value="4"></el-option>
                    <el-option label="应用内-禅师个人主页" value="5"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item  label="推荐类型:" prop="">
                <el-select v-model="form.source.default" placeholder="请选择" >
                    <el-option label="全部用户" value="1"></el-option>
                    <el-option label="禅师" value="2"></el-option>
                    <el-option label="信众" value="3"></el-option>
                    <el-option label="指定用户" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="ID:" prop="priority">
                <el-input v-model="form.priority"></el-input>
            </el-form-item>
            <el-form-item label="新闻内容:" prop="">
                <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
                class="w200">
                </el-date-picker>
                <span style="color: #95b3be;margin-left: 10px;">！推送时间不选择表示立即推送</span>
            </el-form-item>
            <el-form-item>
                <div class="slider-btn">
                    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
                </div>
                <div class="gray">右滑后，推送消息将会生效</div>
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
                priority: '',
                date: ''
            },
            rules: {
                title: [
                    { required: true, message: '新闻标题不能为空', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                priority: [
                    { required: true, message: 'ID不能为空', trigger: 'blur' },
                    { min: 1, max: 4, message: 'ID在 1 到 4 个字符', trigger: 'blur' }
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
  .w200{
      width: 200px;
  }
</style>
