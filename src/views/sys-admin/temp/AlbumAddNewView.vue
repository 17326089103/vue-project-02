<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right"
                   style="font-size:16px;">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <i class="el-icon-s-promotion"></i>后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>添加相册</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <el-input v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="排序序号" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        description: '',
        sort: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入相册名称', trigger: 'blur' },
          { min: 2, max: 15, message: '相册名称长度必须在 2 到 15 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入相册简介', trigger: 'blur' },
          { min: 2, max: 35, message: '相册简介长度必须在 2 到 35 个字符', trigger: 'blur' }
        ],
        sort: [
          { required: true, message: '请输入排序序号', trigger: 'blur' },
          { pattern: /^([0-9]{1}|[1-9]{1}[0-9]{1})$/, message: '排序序号必须是 0~99 之间的数字', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = 'http://localhost:9080/albums/add-new';
          console.log('url = ' + url);

          let formData=this.qs.stringify(this.resetForm())


          this.axios.post(url, formData).then((response) => {
            let jsonResult = response.data;
            if (jsonResult.state == 20000) {
              this.$message({
                message: '添加相册成功！',
                type: 'success'
              });
              this.resetForm(formName);
            } else {
              this.$alert(jsonResult.message, '操作失败', {
                confirmButtonText: '确定',
                callback: action => {}
              });
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>