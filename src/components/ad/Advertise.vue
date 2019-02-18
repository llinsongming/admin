<template>
    <div>
        <h2 class="mb20">发布广告</h2>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="广告标题:" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="广告链接:" prop="">
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <el-form-item label="有效时间:" required>
                <el-col :span="9">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="请选择开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="1" style="text-align:center;">-</el-col>
                <el-col :span="9">
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="请选择结束时间" v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="广告图片:" >
                <el-upload
                action="http://120.79.174.103:666/fileUPload"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <div class="slider-btn">
                    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
                </div>
                <div class="gray">右滑后，发布广告将会生效</div>
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
                date1: '',
                date2: '',
            },
            rules: {
                title: [
                    { required: true, message: '广告标题不能为空', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
            },
            dialogImageUrl: '',
            imageUrl: '',
            dialogVisible: false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            value3: 0,
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || 'image/png' || 'image/gif';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
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
</style>
