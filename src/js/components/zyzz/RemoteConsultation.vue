<template>
   <div>
       <AllHeader   v-on:child-pop="listenToMyBoy">
               <div class="date-box" slot="btn">
                   <el-button class="btn" type="primary"  @click="sendAll" style="padding:5px 20px;">查询</el-button>
               </div>
       </AllHeader>
       <div class="Header-add">
           <el-button class="btn" type="primary" @click="arranges"><svg class="icon">
               <use xlink:href="#icon-xinzeng"></use>
           </svg> 新增日间手术转诊</el-button>
       </div>
       <div class="arrange-tab">
           <el-tabs v-model="activeName" @tab-click="changeTab">
               <el-tab-pane label="我发起的" name="4"></el-tab-pane>
               <el-tab-pane label="已取消的" name="5"></el-tab-pane>
           </el-tabs>
       </div>
       <div v-show="activeName=='4'" class="arrange-table" >
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
                               @click="handleEdit(scope.$index, scope.row)">转诊单</el-button>
                       <el-button
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)">
                           <div v-show="scope.row.zzzt=='1'||scope.row.zzzt=='2'">
                               {{scope.row.zzzt=='1'?'确认单':'重新预约'}}
                           </div>
                           <div v-show="scope.row.zzzt=='0'">
                                审核
                           </div>

                       </el-button>
                       <el-button
                               size="small"
                               @click="handleDelete(scope.$index, scope.row)">查看</el-button>
                   </template>
               </el-table-column>
               <el-table-column
                       prop="zzzt"
                       label="预约状态">
                   <template scope="scope">
                       <div v-show="scope.row.zzzt=='0'">待审核</div>
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
                       prop="yyrq"
                       label="期望住院日期">
               </el-table-column>
               <el-table-column
                       prop="djrq"
                       label="接受最晚时间">
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
                       prop="bqdj"
                       label="病情等级">
               </el-table-column>
           </el-table>
       </div>
       <div v-show="activeName=='5'" class="arrange-table" >
           <el-table
                   :data="tableData"
                   style="width:100%;overflow: auto;">
               <el-table-column
                       prop="date"
                       label="操作"
                       width="250">
                   <template scope="scope">
                       <el-button
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)">转诊单</el-button>
                       <el-button v-show="scope.row.zzzt=='1'"
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)">确认单</el-button>
                       <el-button
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)">
                           改约
                       </el-button>
                       <el-button
                               size="small"
                               @click="handleDelete(scope.$index, scope.row)">查看</el-button>
                   </template>
               </el-table-column>
               <el-table-column
                       prop="zzzt"
                       label="预约状态">
                   <template scope="scope">
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
                       prop="yyrq"
                       label="期望住院日期">
               </el-table-column>
               <el-table-column
                       prop="djrq"
                       label="接受最晚时间">
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
                       prop="bqdj"
                       label="病情等级">
               </el-table-column>
           </el-table>

           <el-pagination
                   @size-change="handleSizeChange"
                   :current-page.sync="currentPage1"
                   :page-size="5"
                   layout="total, prev, pager, next"
                   >
           </el-pagination>

       </div>
   </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">
    import Vue from "vue";
    import { formatUnixTime } from "../../utils/DateFormat.js";
    import AllHeader from "../common/AllHeader.vue";
    import axiosUtil from "../../utils/AxiosUtils.js"
    export default{
        data (){
            return{
                activeName:"4",
                starttime:'',
                endtime:'',
                hospital:'',
                office:'',
                state:'',
                tableData: []
            }
        },
        components:{
            AllHeader,
        },
        mounted(){
          this.getData()
        },
        methods:{
            arranges:function(){
                this.$router.push("remoteConsultation/remoteWork");
            },
            listenToMyBoy:function(somedata){
                this.childWords = somedata
                console.log( "11111",this.childWords);
                 this.starttime=formatUnixTime( this.childWords.date[0]).substring(0,10);
                 this.endtime=formatUnixTime( this.childWords.date[0]).substring(0,10);
                 this.hospital=this.childWords.hospital;
                 this.office=this.childWords.office;
                 this.state=this.childWords.state;
            },
            sendAll:function(){
                let _this=this;
                console.log(_this.starttime)
                let options={
                    starttime:_this.starttime,
                    endtime:_this.endtime,
                    cxyyid:_this.hospital,
                    ksid:_this.office,
                    zzzt:_this.state,
                    yyr:'595d05b0f19b9c898a58cc70',
                    czlx:"4",
                    ywlx:"2",
                    pageNo:'1',
                    pageSize:'5',
                };
                axiosUtil("smarthos.sxzz.order.list",options).then(function(res){
                     _this.tableData=res.list;
                     console.log("2222",_this.tableData)
                })
            },
            changeTab(val){
                console.log(val.name,6666);
                this.getData(val.name)
            },
            getData(val){
                axiosUtil('smarthos.sxzz.order.list',{
                    "jgid": "59411511191ce23575a63218",
                    "yyid": "59411511191ce23575a63218",
                    "yyr": "595d05b0f19b9c898a58cc70",
                    "ywlx": "2",
                    "czlx": val?val:4,
                    "pageNum":"1",
                    "pageSize":"10"
                }).then(res=>{
                    console.log(res,33333);
                if(res.succ){
                    this.$set(this.$data,'tableData',res.list)
                }else {
                    alert(res.msg)
                }
            })
            },
        }
    }
</script>
