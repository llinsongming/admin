<template>
    <div>
        <script id="editor" type="text/plain" style="height:400px;"></script>
    </div>
</template>
<script>
//utf8
import '../../../static/UE/ueditor.config.js'
import '../../../static/UE/ueditor.all.min.js'
import '../../../static/UE/lang/zh-cn/zh-cn.js'
import '../../../static/UE/ueditor.parse.min.js'  

 export default {
    name: 'UE',
    data () {
      return {
        
      }
    },
    mounted() {
      let that = this;
      that.ue = UE.getEditor('editor');
    },
    methods: {
      
    }
  }
</script>
<style lang="less" scope>
  #editor{
    display: inline-block;
  }
</style>