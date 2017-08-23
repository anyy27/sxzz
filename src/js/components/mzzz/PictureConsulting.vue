<template>
    <div >
        <AllHeader @getSelect="getSelect"></AllHeader>
        <div class="Header-add">
            <el-button class="btn" type="primary" @click="arranges"><svg class="icon">
                <use xlink:href="#icon-xinzeng"></use>
            </svg> 新增门诊转诊</el-button>
        </div>
        <div class="arrange-tab">
            <el-tabs v-model="activeName" @tab-click="changeTab">
                <el-tab-pane label="我发起的" name="4"></el-tab-pane>
                <el-tab-pane label="我收到的" name="6"></el-tab-pane>
                <el-tab-pane label="已取消的" name="5"></el-tab-pane>
            </el-tabs>
        </div>
        <div v-show="activeName==4" class="arrange-table" >
            <el-table
                    :data="tableData"
                    style="width:100%;overflow: auto;">
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
                                @click="examineBill(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="kh"
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
                    <el-table-column
                            prop="qrsi"
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
        <div v-show="activeName==6" class="arrange-table" >
            <el-table
                    :data="tableData"
                    style="width:100%;overflow: auto;">
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
                                @click="examineBill(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="kh"
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
                            prop="qrsi"
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
        <div v-show="activeName==5" class="arrange-table" >
            <el-table
                    :data="tableData"
                    style="width:100%;overflow: auto;">
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
                                @click="examineBill(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="zzzt"
                        label="预约状态">
                    <template scope="scope">
                        <div v-show="scope.row.zzzt=='3'">取消</div>
                        <div v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">{{scope.row.zzzt=='1'?'成功':'失败'}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="kh"
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
                            prop="qrsi"
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
        <FooterCmp :propsTotalCols="propsTotalCols"  @changePage="changePage1" :clientH="clientH" :propsPageSize="5"/>
    </div>
</template>
<style>
</style>
<script type="text/ecmascript-6">
    import Vue from "vue";
    import AllHeader from "../common/AllHeader.vue";
    import axiosUtil from "../../utils/AxiosUtils.js";
    import FooterCmp from "../common/FooterCmp.vue";

    export default{
        data (){
            return{
                activeName:"4",
                tableData: [],
                propsTotalCols:0,
                type:"4",
                ddid:"",
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
            this.getData(1,4)
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
                        name:"transferBill",
                        params:{
                            zyzzList:res.obj
                        }
                    })
                });
            },
            examineBill(index,row){
                axiosUtil('smarthos.sxzz.byddid.list',{
                    "jgid": "59411511191ce23575a63218",
                    "yyr": "595d05b0f19b9c898a58cc70",
                    "ywlx": "0",
                    "ddid":row.ddid,
                }).then(res=>{
                    console.log(res,66666)
                    this.$router.push({
                        name:"examineBill",
                        params:{
                            applyDetail:res.obj
                        }
                    })
                });
            },
            handleEdit(index,row){
                this.$set(this.$data,'ddid',row.ddid);
//                console.log(res,55555)
                if(row.zzzt==1){
                    axiosUtil('smarthos.sxzz.qxzzsq.info',{
                        "jgid": "59411511191ce23575a63218",
                        "yyr": "595d05b0f19b9c898a58cc70",
                        "ysmc":"陈升华",
                        "ddid":row.ddid,
                    }).then(res=>{
                        console.log(res,55555)
                    });
                }else {
                    axiosUtil('smarthos.sxzz.byddid.list',{
                        "jgid": "59411511191ce23575a63218",
                        "yyr": "595d05b0f19b9c898a58cc70",
                        "ywlx": "0",
                        "ddid":row.ddid,
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
                this.getData('4',val)
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
                    "pageSize":5
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
