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
                             <el-form-item label="身份证号:" prop="pid" >
                                 <el-input
                                         v-model="ruleForm.pid"
                                         width="200"
                                         size="small"
                                         @blur="getUser(ruleForm.pid)"
                                 ></el-input>
                             </el-form-item>
                             <el-form-item label="姓名:" prop="name">
                                 <el-input
                                         v-model="ruleForm.name"
                                         style="width:100px;"
                                         size="small"
                                 ></el-input>
                             </el-form-item>
                          <el-form-item label="就诊卡号:" prop="cid">
                              <el-input
                                      v-model="ruleForm.cid"
                                      width="200"
                                      size="small"
                              ></el-input>
                          </el-form-item>


                      </div>
                         <div class="base-con">
                             <el-form-item label="性别:" prop="sex">
                                     <el-radio class="radio" v-model="ruleForm.sex" label="男">男</el-radio>
                                     <el-radio class="radio" v-model="ruleForm.sex" label="女">女</el-radio>
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
                                     <el-select v-model="value1" placeholder="请选择"  @change="getProvincess"  style="width: 150px"  >
                                         <el-option
                                                 v-for="item in provinces"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                     <el-select v-model="value2" placeholder="请选择" @change="getEaras"  style="width: 150px">
                                         <el-option
                                                 v-for="item in citys"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                     <el-select v-model="value3" placeholder="请选择"  style="width: 150px">
                                         <el-option
                                                 v-for="item in earas"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                     <el-input
                                             v-model="ruleForm.address"
                                             style="width:200px;"
                                             size="small"
                                             placeholder="街道等详细地址选择填写"
                                     ></el-input>
                                 </div>
                             </el-form-item>
                         </div>
                  </el-form>
              </div>
          </div>
           <p style="line-height: 40px;">病情资料</p>
           <div class="base-message">
               <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="position: relative">
               <div class="base-con" style="margin-top:10px;float: left;width: 40%">
                   <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;" >初步诊断:</span>
                   <!--<span style="font-size: 14px;color: #48576a;">初步诊断:</span>-->
                   <!--<el-select v-model="value8" filterable placeholder="请选择" style="height:24px;margin-left:5px;">-->
                       <!--<el-input>-->
                       <!--</el-input>-->
                   <!--</el-select>-->

                   <el-input
                           type="text"
                           style="width:60%;margin-left:70px;"
                           v-model="diagnoseValue"
                           width="200"
                           size="small"
                   ></el-input>

                   <el-button class="btn" type="primary" style="margin-left:20px;padding:5px 10px;" @click="getDiagnoseList">常用诊断</el-button>

               </div>
                   <div class="diagnoseList" v-show="showDiagnoseList">
                       <p>常用诊断
                           <span class="delete"><el-button @click="hideDiagnose"  type="primary" style="padding:5px 10px;background: white;color: grey;border: none">X</el-button>
                               </span>
                       </p>
                       <ul>
                           <li @click="getValue(item.zdxx)" v-for="item of diagnoseList"><span>{{item.zdxx}}</span><span class="delete"><el-button  type="primary" style="padding:5px 10px;" @click="delDiagnose(item.zdid)">X</el-button></span></li>
                       </ul>
                       <div class="inputDiagnose">
                           <el-input
                                   type="text"
                                   style="margin-top:10px;resize: none;"
                                   v-model="zdxx"
                                   size="small"
                           ></el-input>
                       </div>
                       <div class="btnDiagnose">
                           <div style="float: right">
                               <el-button  type="primary" style="padding:5px 10px;" @click="addDiagnose" >加入常用诊断</el-button>
                           </div>

                       </div>

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
.diagnoseList{
    float: left;
    width: 300px;
    border: 1px solid gray;
    margin-top: 13px;
    position: absolute;
    left: 40%;
    top: 0;
    z-index: 888;
    background: white;
}
    .diagnoseList p{
        border-bottom: 1px solid gray;
        padding: 8px;
    }
    .diagnoseList ul{
        border-bottom: 1px solid lightgrey;
        padding-bottom: 10px;
        max-height: 200px;
        overflow: auto;
    }
    .diagnoseList li{
        padding: 10px 8px 0 8px ;

    }
    .delete{
        display: inline-block;
        float: right;
    }
    .inputDiagnose{
    }
    .btnDiagnose{
        padding: 10px 8px 10px 8px ;
        overflow: hidden;
    }
</style>
<script type="text/ecmascript-6">
  import Vue from "vue";
  import axiosUtil from "../../utils/AxiosUtils.js"
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
              userDetail:{},
              zdxx:'',
              diagnoseValue:"",
              diagnoseList:[],
              showDiagnoseList:false,
              value1:'',
              value2:"",
              value3:'',
              citys:[],
              provinces:[],
              earas:[],
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
      mounted(){
        this.getData();
      },
      methods: {
          getValue(value){
              this.$set(this.$data,'diagnoseValue',value)
          },
          hideDiagnose(){
              this.$set(this.$data,'showDiagnoseList',false)
          },
          addDiagnose(){
              axiosUtil('smarthos.sxzz.cbzdAdd.info',{
                  "yyid": "59411511191ce23575a63218",
                  "jgid": "59411511191ce23575a63218",
                  "ysid": "595d05b0f19b9c898a58cf48",
                  "zdxx": this.zdxx
              }).then(res=>{
                  console.log(res,66666);
                  if(res.succ){
                      this.getDiagnoseList();
                      this.zdxx=''
                  }else {
                      alert(res.msg)
                  }
              })
          },
          delDiagnose(id){
              console.log(id,212121);
              if(confirm('确认删除？')) {
                  axiosUtil('smarthos.sxzz.cbzdDelete.info',{
                      "yyid": "59411511191ce23575a63218",
                      "jgid": "59411511191ce23575a63218",
                      "zdid":id
                  }).then(res=>{
                      console.log(res,66666);
                      if(res.succ){
                          this.getDiagnoseList()
                      }else {
                          alert(res.msg)
                      }
                  })
              }else {
                  return false;
              }
          },
          getDiagnoseList(){
              this.$set(this.$data,'showDiagnoseList',true)
                  axiosUtil('smarthos.sxzz.cbzdSelect.info',{
                      "yyid": "59411511191ce23575a63218",
                      "jgid": "59411511191ce23575a63218",
                      "yyr":"595d05b0f19b9c898a58cf48"
                  }).then(res=>{
                      console.log(res,66666);
                      if(res.succ){
                          this.$set(this.$data,'diagnoseList',res.list)
                      }else {
                          alert(res.msg)
                      }
                  })
          },
          getUser(id){
              console.log(id,7878787878878)
              axiosUtil('smarthos.sxzz.user.list',{
                  "yyid": "59411511191ce23575a63218",
                  "sfzh": "330724199011261131"
              }).then(res=>{
                  if(res.succ){
                      this.$set(this.$data,'userDetail',res.list[0])
                      this.$set(this.$data,'value1',res.list[0].provinceId);
                      this.getData(res.list[0].provinceId)
                      this.getCity(res.list[0].provinceId,res.list[0].regionId)
                      this.earasList(res.list[0].regionId,res.list[0].cityId)
//                      this.$set(this.$data,'value2',res.list[0].cityId)
//                      this.$set(this.$data,'value3',res.list[0].cityId)
                      this.$set(this.$data.ruleForm,'sex',res.list[0].xb)
                      this.$set(this.$data.ruleForm,'name',res.list[0].yhxm)
                      this.$set(this.$data.ruleForm,'mobilephone',res.list[0].sjhm)
                      this.$set(this.$data.ruleForm,'otherphone',res.list[0].lxdh)
                      this.$set(this.$data.ruleForm,'age',res.list[0].klx)
                      this.$set(this.$data.ruleForm,'address',res.list[0].lxdz)
                  }else {
                     alert(res.msg)
                  }
              })
          },
          getData(id){
              console.log(123123123)
              axiosUtil('smarthos.sxzz.province.list',{}).then(res=>{
                  if(res.succ){
                      var list = res.list;
                      if(id){
                          function check(item) {
                              return item.id==id
                          }
                          this.$set(this.$data,'value1',list.filter(check)[0].name)
                      }else {
                          var provincesList = [];
                          for(var i=0;i<list.length;i++){
                              var provinceObj = {};
                              provinceObj.label=list[i].name;
                              provinceObj.value=list[i].id;
                              provincesList.push(provinceObj)
                          }
                          this.$set(this.$data,'provinces',provincesList)
                      }

                  }else {
                      alert(res.msg)
                  }
              })
          },
          getProvincess(value){
              this.getCity(value)
          },
          getEaras(value){
              this.earasList(value)
          },
          earasList(value,id){
              axiosUtil('smarthos.sxzz.region.list',{
                  cityId:value
              }).then(res=>{
                  if(res.succ){
                      var list = res.list;
                      if(id){
                          function check(item) {
                              return item.id==id
                          }
                          this.$set(this.$data,'value3',list.filter(check)[0].name)
                      }else {
                          var earaList = [];
                          for(var i=0;i<list.length;i++){
                              var earaObj = {};
                              earaObj.label=list[i].name;
                              earaObj.value=list[i].id;
                              earaList.push(earaObj)
                          }
                          this.$set(this.$data,'earas',earaList)
                      }

                  }else {
                      alert(res.msg)
                  }
              })
          },
          getCity(value,id){
              axiosUtil('smarthos.sxzz.city.list',{
                  provinceId:value
              }).then(res=>{
                  if(res.succ){
                      var list = res.list;
                      if(id){
                          function check(item) {
                              return item.id==id
                          }
                          this.$set(this.$data,'value2',list.filter(check)[0].name)
                      }else{
                          var cityList = [];
                          for(var i=0;i<list.length;i++){
                              var cityObj = {};
                              cityObj.label=list[i].name;
                              cityObj.value=list[i].id;
                              cityList.push(cityObj)
                          }
                          this.$set(this.$data,'citys',cityList)
                      }

                  }else {
                      alert(res.msg)
                  }
              })
          },
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