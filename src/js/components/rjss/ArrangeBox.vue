<template>
    <div>
        <div class="commonbox-box">
            <div v-show="shows1">
                <p style="text-align: center;" v-show="success">
                    <svg class="icon success" >
                        <use xlink:href="#icon-zhengque"></use>
                    </svg>
                </p>
                <p  style="text-align: center;"  v-show="defaults">
                    <svg class="icon success" >
                        <use xlink:href="#icon-shibai" ></use>
                    </svg>
                </p>
                <p style="text-align: center;"  v-show="waiting">
                    <svg class="icon success" >
                        <use xlink:href="#icon-dengdai"></use>
                    </svg>
                </p>
                <h1 v-show="zyzzList.zzzt==1||zyzzList.zzzt==2">{{zyzzList.zzzt==1?'成功':'失败'}}</h1>
                <h1 v-show="zyzzList.zzzt==3||zyzzList.zzzt==0">{{zyzzList.zzzt==3?'已取消':'待审核'}}</h1>
            </div>
            <p style="font-weight: bold;font-size: 16px;text-align: center;margin-top:30px;" v-show="shows2">西湖区西溪街道社区卫生服务中心转诊单</p>
            <div style="width:100%;height:100px;" v-show="shows2"></div>
            <p style="text-align: center;" v-show="shows1">西湖区西溪街道社区卫生服务中心转诊单</p>

            <div class="commonbox-con">
                <div class="commonbox-news">
                    <div><span>预约号码:</span><span> {{zyzzList.yyh}}</span></div>
                    <div><span>预约医院:</span><span> {{zyzzList.yymc}}</span></div>
                    <div><span>手术名称:</span><span> {{zyzzList.ssmc}}</span></div>
                    <div><span>申请科室:</span><span> {{zyzzList.sqksmc}}</span></div>
                    <!--<div><span>门办电话:</span><span> 0571-56005123</span></div>-->
                    <div style="margin-top:20px;"><span>患者姓名:</span><span> {{zyzzList.yhxm}}</span></div>
                    <div><span>身份证号:</span><span> {{zyzzList.zjhm}}</span></div>
                    <div><span>联系方式:</span><span> {{zyzzList.sjhm}}</span></div>
                </div>
                <div class="commonbox-news" style="margin-left:1%;">
                    <div><span>预约科室:</span><span> {{zyzzList.qrksmc}}</span></div>
                    <div><span>期望手术时间:</span><span> &nbsp&nbsp{{zyzzList.sqyyrq}}</span><span style="margin-left:20px;">{{ampm}}</span><span style="margin-left:20px;">{{zyzzList.jzsj}}</span></div>
                    <div><span>申请医院:</span><span> {{zyzzList.sqyymc}}</span></div>
                    <div><span>申请人电话:</span><span> {{zyzzList.sqysxm}}</span><span>&nbsp&nbsp {{zyzzList.sqysdh}}</span></div>
                    <!--<div><span>门办地址:</span><span> 门诊大楼二楼医患沟通中心</span></div>-->
                    <div style="margin-top:20px;"><span>患者性别:</span><span> {{zyzzList.xb}}</span></div>
                    <div><span>患者年龄:</span><span> {{zyzzList.age}}</span></div>
                    <div><span>联系地址:</span><span> {{zyzzList.lxdz}}</span></div>
                </div>
            </div>
            <div class="commonbox-btn">
                <el-button class="btn commonboxbtn" type="text" style="padding:5px 20px;" @click="open1">打印</el-button>
                <el-button class="btn commonboxbtn" type="text" style="padding:5px 20px;" @click="open">关闭</el-button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import { formatUnixTime } from "../../utils/DateFormat.js";
    import { getLodop } from "../../utils/LodopFuncs";
    import { MessageBox } from "element-ui";
    export default{
        data(){
            return {
                zyzzList:{},
                shows1:true,
                shows2:false,
                success:false,
                defaults:false,
                waiting:false,
                ampm:""
            }
        },
        mounted:function(){
            this.zyzzList=this.$route.params.zyzzList;
            if(this.zyzzList.sqyylx=="0"){
                this.ampm="上午"
            }else if(this.zyzzList.sqyylx=="1"){
                this.ampm="下午"
            }
            if(this.zyzzList.zzzt=="1"){
                this.success=true;
                this.defaults=false;
                this.waiting=false;
            }else if(this.zyzzList.zzzt=="2"){
                this.success=false;
                this.defaults=true;
                this.waiting=false;
            }else if(this.zyzzList.zzzt=="0"){
                this.success=false;
                this.defaults=false;
                this.waiting=true;
            }
            console.log("zzzzzz",this.zyzzList);
        },
        methods:{
            open(){
                let _this=this;
                _this.$router.go(-1);
            },
            open1(){
                this.shows1=false;
                this.shows2=true;
            }
        }
    }
</script>