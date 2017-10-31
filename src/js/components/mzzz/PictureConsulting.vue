
<template>
    <div >
        <div class="deal-content marginP remote-consultation-wrap content-bg-color">
        <AllHeader @getSelect="getSelect" :ywlx="ywlx"></AllHeader>
        <div class="Header-add" v-show="shzt=='0'">
            <el-button class="btn" type="primary" @click="arranges"><svg class="icon">
                <use xlink:href="#icon-xinzeng"></use>
            </svg> 新增门诊转诊</el-button>
        </div>
        <div class="arrange-tab">
            <el-tabs v-show="shzt=='0'" v-model="activeName" @tab-click="changeTab">
                <el-tab-pane label="我发起的" name="4"></el-tab-pane>
                <el-tab-pane label="我收到的" name="6"></el-tab-pane>
                <el-tab-pane label="已取消的" name="5"></el-tab-pane>
            </el-tabs>
            <el-tabs v-show="shzt=='1'" v-model="activeName" @tab-click="changeTab">
                <el-tab-pane label="转出" name="3"></el-tab-pane>
                <el-tab-pane label="转入" name="2"></el-tab-pane>
            </el-tabs>
        </div>
        <div v-show="activeName==4&&shzt=='0'" class="arrange-table" >
            <el-table
                    :data="tableData"
                    stripe
                    height="400"
                    style="width:100%;">
                <el-table-column
                        prop="date"
                        label="操作"
                        width="200">
                    <template scope="scope">
                        <el-button
                                size="small"
                                @click="goTransferBill(scope.$index, scope.row)">转诊单</el-button>
                        <el-button
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)">{{scope.row.zzzt=='1'?'撤销':'重新预约'}}</el-button>
                        <el-button
                                size="small"
                                @click="examineBill(scope.$index, scope.row)">{{scope.row.zzzt=='0'?'编辑':'查看'}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'" :class="{active:scope.row.zzzt=='2',active1:scope.row.zzzt=='1'}">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yyh"
                        label="预约号">
                </el-table-column>
                <el-table-column
                        prop="sqsj"
                        label="转诊日期">
                </el-table-column>

                    <el-table-column
                            prop="yyrq"
                            label="就诊日期">
                    </el-table-column>
                    <el-table-column
                            prop="yymc"
                            label="就诊序号">
                    </el-table-column>
                <el-table-column
                        prop="yhxm"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="xb"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="lxdh"
                        label="联系方式">
                </el-table-column>
                <el-table-column
                        prop="zjhm"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        prop="sqyymc"
                        label="申请医院">
                </el-table-column>
                <el-table-column
                        prop="sqksmc"
                        label="申请科室">
                </el-table-column>
                <el-table-column
                        prop="sqysxm"
                        label="申请医生">
                </el-table-column>
                <el-table-column
                        prop="yymc"
                        label="预约医院">
                </el-table-column>
                <el-table-column
                        width="10px"
                >
                </el-table-column>
                <el-table-column
                        prop="qrksmc"
                        label="预约科室">
                </el-table-column>
                <el-table-column
                        prop="qrysxm"
                        label="预约专家">
                </el-table-column>
            </el-table>
        </div>
        <div v-show="activeName==6&&shzt=='0'" class="arrange-table" >
            <el-table
                    :data="tableData"
                    stripe
                    height="400"
                    style="width:100%;">
                <el-table-column
                        prop="zzzt"
                        label="操作"
                        width="120">
                    <template scope="scope">
                        <el-button
                                size="small"
                                @click="goTransferBill(scope.$index, scope.row)">转诊单</el-button>
                        <el-button
                                size="small"
                                @click="examineBill(scope.$index, scope.row)">{{scope.row.zzzt=='0'?'编辑':'查看'}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div :class="{active:scope.row.zzzt=='2',active1:scope.row.zzzt=='1'}" v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yyh"
                        label="预约号">
                </el-table-column>
                <el-table-column
                        prop="sqsj"
                        label="转诊日期">
                </el-table-column>
                <el-table-column
                        width="10px"
                >
                </el-table-column>

                <slot name="newDate">
                    <el-table-column
                            prop="yyrq"
                            label="就诊日期">
                    </el-table-column>
                    <el-table-column
                            prop="yymc"
                            label="就诊序号">
                    </el-table-column>
                </slot>

                <el-table-column
                        prop="yhxm"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="xb"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="lxdh"
                        label="联系方式">
                </el-table-column>
                <el-table-column
                        prop="zjhm"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        prop="sqyymc"
                        label="申请医院">
                </el-table-column>
                <el-table-column
                        prop="sqksmc"
                        label="申请科室">
                </el-table-column>
                <el-table-column
                        prop="sqysxm"
                        label="申请医生">
                </el-table-column>
                <el-table-column
                        prop="yymc"
                        label="预约医院">
                </el-table-column>
                <el-table-column
                        width="10px"
                >
                </el-table-column>
                <el-table-column
                        prop="qrksmc"
                        label="预约科室">
                </el-table-column>
                <el-table-column
                        prop="qrysxm"
                        label="预约专家">
                </el-table-column>
            </el-table>
        </div>
        <div v-show="activeName==5&&shzt=='0'" class="arrange-table" >
            <el-table
                    :data="tableData"
                    stripe
                    height="400"
                    style="width:100%;">
                <el-table-column
                        prop="date"
                        label="操作"
                        width="80">
                    <template scope="scope">

                        <!--<el-button-->
                                <!--size="small"-->
                                <!--@click="goTransferBill(scope.$index, scope.row)">转诊单</el-button>-->
                        <el-button
                                size="small"
                                @click="examineBill(scope.$index, scope.row)">{{scope.row.zzzt=='0'?'编辑':'查看'}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div :class="{active:scope.row.zzzt=='2',active1:scope.row.zzzt=='1'}" v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yyh"
                        label="预约号">
                </el-table-column>
                <el-table-column
                        prop="sqsj"
                        label="转诊日期">
                </el-table-column>

                <el-table-column
                        prop="yyrq"
                        label="就诊日期">
                </el-table-column>

                <el-table-column
                        prop="yymc"
                        label="就诊序号">
                </el-table-column>

                <el-table-column
                        prop="yhxm"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="xb"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="lxdh"
                        label="联系方式">
                </el-table-column>
                <el-table-column
                        prop="zjhm"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        prop="sqyymc"
                        label="申请医院">
                </el-table-column>
                <el-table-column
                        prop="sqksmc"
                        label="申请科室">
                </el-table-column>
                <el-table-column
                        prop="sqysxm"
                        label="申请医生">
                </el-table-column>
                <el-table-column
                        prop="yymc"
                        label="预约医院">
                </el-table-column>
                <el-table-column
                        prop="qrksmc"
                        label="预约科室">
                </el-table-column>
                <el-table-column
                        prop="qrysxm"
                        label="预约专家">
                </el-table-column>
            </el-table>
        </div>
        <div v-show="activeName==3&&shzt=='1'" class="arrange-table" >
            <el-table
                    :data="tableData"
                    stripe
                    height="400"
                    style="width:100%;">
                <el-table-column
                        prop="date"
                        label="操作"
                        width="120">
                    <template scope="scope">

                        <el-button
                                size="small"
                                @click="goTransferBill(scope.$index, scope.row)">转诊单</el-button>
                        <el-button
                                size="small"
                                @click="examineBill(scope.$index, scope.row)">{{scope.row.zzzt=='0'?'编辑':'查看'}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div :class="{active:scope.row.zzzt=='2',active1:scope.row.zzzt=='1'}" v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yyh"
                        label="预约号">
                </el-table-column>
                <el-table-column
                        prop="sqsj"
                        label="转诊日期">
                </el-table-column>

                <el-table-column
                        prop="yyrq"
                        label="就诊日期">
                </el-table-column>

                <el-table-column
                        prop="yymc"
                        label="就诊序号">
                </el-table-column>

                <el-table-column
                        prop="yhxm"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="xb"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="lxdh"
                        label="联系方式">
                </el-table-column>
                <el-table-column
                        prop="zjhm"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        prop="sqyymc"
                        label="申请医院">
                </el-table-column>
                <el-table-column
                        prop="sqksmc"
                        label="申请科室">
                </el-table-column>
                <el-table-column
                        prop="sqysxm"
                        label="申请医生">
                </el-table-column>
                <el-table-column
                        prop="yymc"
                        label="预约医院">
                </el-table-column>
                <el-table-column
                        prop="qrksmc"
                        label="预约科室">
                </el-table-column>
                <el-table-column
                        prop="qrysxm"
                        label="预约专家">
                </el-table-column>
            </el-table>
        </div>
        <div v-show="activeName==2&&shzt=='1'" class="arrange-table" >
            <el-table
                    :data="tableData"
                    stripe
                    height="400"
                    style="width:100%;">
                <el-table-column
                        prop="date"
                        label="操作"
                        width="120">
                    <template scope="scope">

                        <el-button
                                size="small"
                                @click="goTransferBill(scope.$index, scope.row)">转诊单</el-button>
                        <el-button
                                size="small"
                                @click="examineBill(scope.$index, scope.row)">{{scope.row.zzzt=='0'?'编辑':'查看'}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div :class="{active:scope.row.zzzt=='2',active1:scope.row.zzzt=='1'}" v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yyh"
                        label="预约号">
                </el-table-column>
                <el-table-column
                        prop="sqsj"
                        label="转诊日期">
                </el-table-column>

                <el-table-column
                        prop="yyrq"
                        label="就诊日期">
                </el-table-column>

                <el-table-column
                        prop="yymc"
                        label="就诊序号">
                </el-table-column>

                <el-table-column
                        prop="yhxm"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="xb"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="lxdh"
                        label="联系方式">
                </el-table-column>
                <el-table-column
                        prop="zjhm"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        prop="sqyymc"
                        label="申请医院">
                </el-table-column>
                <el-table-column
                        prop="sqksmc"
                        label="申请科室">
                </el-table-column>
                <el-table-column
                        prop="sqysxm"
                        label="申请医生">
                </el-table-column>
                <el-table-column
                        prop="yymc"
                        label="预约医院">
                </el-table-column>
                <el-table-column
                        prop="qrksmc"
                        label="预约科室">
                </el-table-column>
                <el-table-column
                        prop="qrysxm"
                        label="预约专家">
                </el-table-column>
            </el-table>
        </div>
        <FooterCmp :propsTotalCols="propsTotalCols"  @changePage="changePage1"  :propsPageSize="7"/>
            <div class="MessageBox1" v-show="shows6">
                <div style="border-bottom:1px solid #ccc;box-sizing: border-box;padding:2px 0px;">
                    <h1>是否确认撤销?</h1>
                </div>
                <br style="background:#ccc;">
                <p style="margin-top:10px;"><span>{{hosname}}</span><span style="margin-left:20px;"     >{{deptname}}</span><span style="margin-left:20px;">{{patname}}</span></p>
                <p style="margin-top:20px;"><span>{{qrtime}}</span><span style="margin-left:20px;">{{qrclock}}</span></p>
                <el-button  class="btn success1" type="text" style="padding:6px 8px;position:absolute;
right:100px;bottom:20px;" @click="SendAppoint">再想想</el-button>
                <el-button class="btn" type="primary" size="small" @click="arranges1" style="position:absolute;bottom:20px;right:20px;"> 确认撤销</el-button>
            </div>
            <div class="MessageBack" v-show="shows6">
            </div>
        </div>
    </div>
</template>
<style>
    .active{
        color: red;
    }
    .active1{
        color:#10BF18;
    }
</style>
<script type="text/ecmascript-6">
    import Vue from "vue";
    import AllHeader from "../common/AllHeader.vue";
    import { Badge, Loading, MessageBox ,Message} from "element-ui";
    import axiosUtil from "../../utils/AxiosUtils.js";
    import FooterCmp from "../common/FooterCmp.vue";
    export default{
        data (){
            return{
                hosname:"",
                ywlx:"0",
                deptname:"",
                patname:"",
                qrtime:"",
                qrclock:"",
                shzt:JSON.parse(localStorage.getItem('shzt')),
                activeName:'',
                tableData: [],
                propsTotalCols:0,
                type: '',
                ddid:"",
                shows6:false,
                dialogVisible:false,
                selectObj:{
                    starttime:"",
                    endtime:"",
                    ksid:'',
                    cxyyid:"",
                    zzzt:''
                }
            }
        },
        components:{
            AllHeader,
            FooterCmp
        },
        mounted(){
            this.activeName = this.shzt==0?"4":"3";
            this.type = this.shzt=='0'?'4':'3';
            this.getData(1,this.type)
        },
        methods:{
            goTransferBill(index,row){
                axiosUtil('smarthos.sxzz.byddid.list',{
                    "jgid": "59411511191ce23575a63218",
                    "yyr": "595d05b0f19b9c898a58cc70",
                    "ywlx": "0",
                    "ddid":row.ddid,
                }).then(res=>{
                    console.log(res,7777)
                    this.$router.push({
                        name:"mzzzbox",
                        params:{
                            zyzzList:res.obj
                        }
                    })
                });
            },
            examineBill(index,row){
                if(row.zzzt!="0"){
                    axiosUtil('smarthos.sxzz.byddid.list',{
                        "jgid": "59411511191ce23575a63218",
                        "yyr": "595d05b0f19b9c898a58cc70",
                        "ywlx": "0",
                        "ddid":row.ddid
                    }).then(res=>{
                        console.log(res,66666)
                        this.$router.push({
                            name:"examineBill",
                            params:{
                                applyDetail:res.obj
                            }
                        })
                    });
                }else{
                    axiosUtil('smarthos.sxzz.byddid.list',{
                        "jgid": "59411511191ce23575a63218",
                        "yyr": "595d05b0f19b9c898a58cc70",
                        "ywlx": "0",
                        "ddid":this.ddid,
                    }).then(res=>{
                        console.log(res,66666)
                        this.$router.push({
                            name:"reappointment",
                            params:{
                                applyDetail:res.obj
                            }
                        })
                    });
                }

            },
            SendAppoint(){
                this.shows6=false;
            },
            arranges1(){
               this.shows6=false;
                axiosUtil('smarthos.sxzz.qxzzsq.info',{
                    "jgid": "59411511191ce23575a63218",
                    "yyr": "595d05b0f19b9c898a58cc70",
                    "ysmc":"陈升华",
                    "ddid":this.ddid,
                }).then(res=>{
                    console.log(res,55555);
                    if(res.succ){
                        this.getData(1,this.type);
                    }else {
                        alert(res.msg);
                    }
                });
            },
            handleEdit(index,row){
                this.ddid=row.ddid;
                 console.log("11/111",row);
                if(row.zzzt==1){
                    this.hosname=row.sqyymc;
                    this.deptname=row.sqksmc;
                    this.patname=row.yhxm;
                    this.qrtime=row.qrsj;
                    this.qrclock=row.jzsj;
                    this.shows6=true;

                }else {
                    axiosUtil('smarthos.sxzz.byddid.list',{
                        "jgid": "59411511191ce23575a63218",
                        "yyr": "595d05b0f19b9c898a58cc70",
                        "ywlx": "0",
                        "ddid":this.ddid,
                    }).then(res=>{
                        console.log(res,66666)
                        this.$router.push({
                            name:"reappointment",
                            params:{
                                applyDetail:res.obj
                            }
                        })
                    });
                }
            },
            getSelect(val){
                console.log(val,1414141414);
                this.$set(this.$data,'selectObj',val);
                this.getData(1,this.type,val)
            },
            arranges:function(){
                this.$router.push("pictureConsulting/newswork");
            },
            changeTab(val){
                console.log(val.name,6666);
                this.type=val.name?val.name:4;
                this.getData(1,this.type)
            },
            getData(pageNum,type,selectObj){
                let _this=this
                axiosUtil('smarthos.sxzz.order.list',{
                        ...selectObj,
                    "jgid": "59411511191ce23575a63218",
                    "yyid": "59411511191ce23575a63218",
                    "yyr": "595d05b0f19b9c898a58cc70",
                    "ywlx": "0",
                    "czlx": type,
                    "pageNum":pageNum,
                    "pageSize":7
                }).then(res=>{
                    console.log(res,33333);
                    if(res.succ){
                        _this.propsTotalCols=res.page.total;
                        this.$set(this.$data,'tableData',res.list)
                    }else {
                        alert(res.msg)
                    }
                })
            },
            changePage1(pageNum){
                this.getData(pageNum,this.type);
            }
        },
    }
</script>

