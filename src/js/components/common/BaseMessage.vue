<template>
       <div class="base-top">
        <p style="line-height: 40px;">基本信息</p>
          <div class="base-message">
           <div class="base-doc">
               <el-button class="btn" type="primary" style="padding:5px 20px;">读市民卡</el-button>
           </div>
              <div class="base-docs" style="margin-top:10px;">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                         <div class="base-con">
                          <el-form-item label="就诊卡号:" prop="cid">
                              <el-input
                                      v-model="ruleForm.cid"
                                      width="200"
                                      size="small"
                              ></el-input>
                          </el-form-item>
                          <el-form-item label="姓名:" prop="name">
                              <el-input
                                      v-model="ruleForm.name"
                                      style="width:100px;"
                                      size="small"
                              ></el-input>
                          </el-form-item>
                          <el-form-item label="身份证号:" prop="pid">
                              <el-input
                                      v-model="ruleForm.pid"
                                      width="200"
                                      size="small"
                              ></el-input>
                          </el-form-item>
                      </div>
                         <div class="base-con">
                             <el-form-item label="性别:" prop="sex">
                                 <el-checkbox-group v-model="ruleForm.sex">
                                     <el-checkbox label="男" ></el-checkbox>
                                     <el-checkbox label="女" ></el-checkbox>
                                 </el-checkbox-group>
                             </el-form-item>
                             <el-form-item label="年龄:" prop="age">
                                 <el-input
                                         v-model="ruleForm.age"
                                         style="width:100px;"
                                         size="small"
                                 ></el-input>
                             </el-form-item>
                             <el-form-item label="患者手机号:" prop="mobilephone">
                                 <el-input
                                         v-model="ruleForm.mobilephone"
                                         width="100"
                                         size="small"
                                 ></el-input>
                             </el-form-item>
                             <el-form-item label="其他联系方式:" prop="otherphone">
                                 <el-input
                                         v-model="ruleForm.otherphone"
                                         width="100"
                                         size="small"
                                 ></el-input>
                             </el-form-item>
                         </div>
                         <div class="base-con">
                             <el-form-item label="家庭住址:" prop="address">
                                 <div class="block">
                                     <el-cascader
                                             :options="options1"
                                             v-model="selectedOptions"
                                             @change="handleChange">
                                     </el-cascader>
                                 </div>
                                 <el-input
                                         v-model="ruleForm.address"
                                         style="width:200px;"
                                         size="small"
                                         placeholder="街道等详细地址选择填写"
                                 ></el-input>
                             </el-form-item>
                         </div>
                  </el-form>
              </div>
          </div>
           <p style="line-height: 40px;">病情资料</p>
           <div class="base-message">
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
               <div class="base-con" style="margin-top:10px;">
                   <span style="font-size: 14px;color: #48576a;">初步诊断:</span>
                   <el-select v-model="value8" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                       <el-option
                               v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                       </el-option>
                   </el-select>
                   <el-button class="btn" type="primary" style="margin-left:20px;padding:5px 10px;">常用诊断</el-button>
               </div>
                   <div class="base-con" style="height:60px;margin-top:10px;">
                       <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;">病情描述:</span>
                           <el-input
                                   type="textarea"
                                   style="width:70%;margin-left:70px;resize: none;"
                                   v-model="docsay"
                                   width="200"
                                   size="small"
                           ></el-input>
                   </div>
                   <div  style="margin-top:10px;position:relative;">
                       <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;">病例附件:</span>
                           <div class="add-pic-list" >
                               <el-upload
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       list-type="picture-card"
                                       accept="image/jpg,image/png"
                                       :on-preview="handlePictureCardPreview"
                                       :on-remove="handleRemove"
                                       :file-list="fileList1">
                                   <i class="el-icon-plus"></i>
                               </el-upload>
                               <el-dialog v-model="dialogVisible" size="tiny">
                                   <img width="100%" :src="dialogImageUrl" alt="">
                               </el-dialog>
                           </div>
                           <div class="ghost-btn-wrap">
                               <el-upload
                                       class="upload-demo"
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       :on-change="handleChange"
                                       :file-list="fileList2">
                                   <el-button size="small" type="primary">点击上传</el-button>
                               </el-upload>
                           </div>
                       <p  style="color:#afafaf;font-size: 12px;">仅支持pdf、xls、xlsx、doc、docx、txt格式，文件小于5M。</p>
                   </div>
               </el-form>
           </div>
       </div>
</template>
<style>
</style>
<script>
  import Vue from "vue";
  import { Form, FormItem,Button, Select, Option, DatePicker,Input, Message, Upload } from "element-ui";
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Button);
  Vue.use(Input);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(DatePicker );
  Vue.use(Upload);
  export default{
      data(){
          return{
              fileList1:[],
              fileList2:[],
              options1: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }]
              }],
              selectedOptions: [],
              imgUploadList:[],
              fileUploadList:[],
              options: [{
                  value: '选项1',
                  label: '黄金糕'
              }, {
                  value: '选项2',
                  label: '双皮奶'
              }, {
                  value: '选项3',
                  label: '蚵仔煎'
              }, {
                  value: '选项4',
                  label: '龙须面'
              }, {
                  value: '选项5',
                  label: '北京烤鸭'
              }],
              value8: '',
              ruleForm: {
                  cid: '',
                  name: '',
                  pid: '',
                  region: '',
                  sex:[],
                  mobilephone:'',
                  otherphone:'',
                  age:'',
                  address:'',
                  begin:'',
                  docsay:''
              },
              rules: {
                  cid: [
                      { required: true, message: '请输入医保卡号', trigger: 'blur' },
                      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                  ],
                  name: [
                      { required: true, message: '请输入姓名', trigger: 'blur' },
                      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                  ],
                  pid: [
                      { required: true, message: '请输入身份证号', trigger: 'blur' },
                      { min: 18, max: 18, message: '长度 18 个字符', trigger: 'blur' }
                  ],
                  age: [
                      { message: '请输入年龄', trigger: 'blur' },
                  ],
                  mobilephone: [
                      { required: true, message: '请输入手机号', trigger: 'blur' },
                      { min: 18, max: 18, message: '长度 11个字符', trigger: 'blur' }
                  ],
                  otherphone: [
                      { message: '请输入身份证号', trigger: 'blur' },
                      { min: 18, max: 18, message: '长度 11 个字符', trigger: 'blur' }
                  ],
                  sex: [
                      { sex:"array", required: true, message: '请至少选择一个性别', trigger: 'blur' },
                  ]
              }
          }
      },
      methods: {
          submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                  if (valid) {
                      alert('submit!');
                  } else {
                      console.log('error submit!!');
                      return false;
                  }
              });
          },
          resetForm(formName) {
              this.$refs[formName].resetFields();
          },
          handleRemove(file, fileList) {
              console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
              this.dialogImageUrl = file.url;
              this.dialogVisible = true;
          },
          handlePreview(file) {
              console.log(file);
          },
          handleChange(file, fileList) {
              this.fileList2 = fileList.slice(-3);
          }
      }
  }
</script>