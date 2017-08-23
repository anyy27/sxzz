<template>
    <div class="base-top"  style="width: auto">
        <p style="line-height: 40px;">基本信息</p>
        <div class="base-message">
            <div class="base-doc">
                <el-button class="btn" type="primary" style="padding:5px 20px;">读市民卡</el-button>
            </div>
            <div class="base-docs" style="margin-top:10px;">
                <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <div class="base-con">
                        <el-form-item label="就诊卡号:"  >
                            <div class="base-idcard" style="width:120px;margin-left:10px;">
                                <el-select v-model="ruleForm.klx" placeholder="请选择卡号">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                </el-select>
                            </div>
                            <div class="base-idcard" style="margin-left:10px;">
                                <el-input
                                        v-model="ruleForm.kh"
                                        width="200"
                                        size="small"
                                ></el-input>
                            </div>
                        </el-form-item>

                        <el-form-item label="姓名:">

                            <el-input
                                    v-model="ruleForm.yhxm"
                                    style="width:100px;"
                                    size="small"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号:"  style="margin-left:150px;" >
                            <el-input
                                    v-model="ruleForm.zjhm"
                                    width="200"
                                    size="small"
                            ></el-input>
                        </el-form-item>
                    </div>
                    <div class="base-con">
                        <el-form-item label="性别:" >
                            <el-radio class="radio" v-model="ruleForm.xb" label="男">男</el-radio>
                            <el-radio class="radio" v-model="ruleForm.xb" label="女">女</el-radio>
                        </el-form-item>
                        <el-form-item label="年龄:" >
                            <el-input
                                    v-model="ruleForm.age"
                                    style="width:100px;"
                                    size="small"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="患者手机号:"  style="margin-left:80px;">
                            <el-input
                                    v-model="ruleForm.sjhm"
                                    width="100"
                                    size="small"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="其他联系方式:"  style="margin-left:40px;">
                            <el-input
                                    v-model="ruleForm.lxdh"
                                    width="100"
                                    size="small"
                            ></el-input>
                        </el-form-item>

                    </div>
                    <div class="base-con">
                        <el-form-item label="家庭住址:" >
                            <div class="block">
                                <el-select v-model="ruleForm.provinceId" placeholder="请选择"  @change="getProvincess"  style="width: 150px"  >
                                    <el-option
                                            v-for="item in provinces"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="ruleForm.cityId" placeholder="请选择" @change="getEaras"  style="width: 150px">
                                    <el-option
                                            v-for="item in citys"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="ruleForm.regionId" placeholder="请选择"  style="width: 150px">
                                    <el-option
                                            v-for="item in earas"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-input
                                        v-model="ruleForm.lxdz"
                                        style="width:200px;"
                                        size="small"
                                        placeholder="街道等详细地址选择填写"
                                ></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="医生电话:"  style="margin-left:40px;">
                            <el-input
                                    v-model="ruleForm.sqysdh"
                                    width="100"
                                    size="small"
                            ></el-input>
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


                    <el-input
                            type="text"
                            style="width:60%;margin-left:70px;"
                            v-model="ruleForm.zdjg"
                            width="200"
                            size="small"
                    ></el-input>

                    <el-button class="btn" type="primary" style="margin-left:20px;padding:5px 10px;" >常用诊断</el-button>

                </div>

                <div class="base-con" style="height:60px;margin-top:10px;">
                    <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;">病情描述:</span>
                    <el-input
                            type="textarea"
                            style="width:70%;margin-left:70px;resize: none;"
                            v-model="ruleForm.bqms"
                            width="200"
                            size="small"
                    ></el-input>
                </div>
                <div  style="margin-top:10px;position:relative;">
                    <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;">病例附件:</span>
                    <div class="add-pic-list" >
                               <span v-show="oldImgList" class="showImg" v-for="(item,index) of oldImgList">
                                <img :src="item.wjdz" alt="">
                               </span>


                    </div>
                    <div class="ghost-btn-wrap">
                                   <span v-show="oldNameList"  class="showText" v-for="(item,index) of oldNameList">
                                       {{item.name}}
                                   </span>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>
<style>
    .showImg{
        display: inline-block;
        width: 60px;
        height: 60px;
        margin-right: 5px;
        position: relative;
    }
    .showImg:hover .showImgSon{
        display: block;
    }
    .showImgSon{
        position: absolute;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        vertical-align: middle;
        background: black;
        opacity: .7;
        color: white;
        display: none;
        cursor: pointer;
    }
    .showImg  img{
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }
    .showText{
        display: inline-block;
        min-width: 150px;
        height: 30px;
        width: auto;
        line-height: 1px;
        text-align: center;
        border: 1px solid gainsboro;
        border-radius: 5px;
        background: white;
        padding: 15px 40px;
        font-size: 14px;
        color: grey;
        margin-right: 5px;
        position: relative;
        box-sizing: border-box;
    }
    .showText:hover .showTextSon{
        display: block;
    }
    .showTextSon{
        position: absolute;
        display: none;
        top:10px;
        right: 5px;
    }
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
    import { API_URL } from "../../data/Url.js";
    import { basicParam }from "../../data/basicParam";
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
    const upLoadFileCountMax = 9;//最大上传数量
    export default{
        data(){
            return{
                options: [{
                    value:0,
                    label: '省医保'
                }, {
                    value: 1,
                    label: '市医保'
                }, {
                    value: 2,
                    label: '市民卡'
                }, {
                    value: 3,
                    label: '就诊卡'
                }],
                oldImgList:[],
                oldNameList:[],
                citys:[],
                provinces:[],
                earas:[],
                ruleForm: {
                    klx: Number,
                    kh: '',
                    yhxm: '',
                    zjhm: '',
                    xb:'',
                    cityId:'',
                    provinceId:'',
                    regionId:'',
                    age:'',
                    sjhm:'',
                    zdjg:"",
                    lxdz:'',
                    lxdh:'',
                    bqms:'',
                    wjidList:[],
                    sqysdh:''
                },
            }
        },

        mounted(){
           console.log('数据')
           this.applyDetail  = this.$route.params.applyDetail;
                this.ruleForm = {
                    ...this.ruleForm,
                    ...this.applyDetail
                }
                console.log(this.ruleForm,9999999999999999888888888);
                this.oldImgList = this.applyDetail.tpwjdzs
                this.oldNameList = this.applyDetail.fjwjdzs
                this.ruleForm.provinceId =parseInt(this.applyDetail.provinceId)
                this.ruleForm.cityId =parseInt(this.applyDetail.cityId)
                this.ruleForm.regionId =parseInt(this.applyDetail.regionId)
            this.getData();
        },
        methods: {
            getValue(value){
                console.log(value,8888)
                this.$set(this.$data.ruleForm,'zdjg',value)
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
            getData(id){

                axiosUtil('smarthos.sxzz.province.list',{}).then(res=>{
                    if(res.succ){
                        console.log(res,123123123)
                        var list = res.list;
                        this.provinces = list;


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
                        this.earas = list;

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
                        this.citys = list;
                    }else {
                        alert(res.msg)
                    }
                })
            },

        }
    }
</script>