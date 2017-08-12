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
           <el-tabs v-model="activeName" >
               <el-tab-pane label="我发起的" name="first"></el-tab-pane>
               <el-tab-pane label="已取消的" name="third"></el-tab-pane>
           </el-tabs>
       </div>
       <div class="arrange-table" v-show="activeName='first'">
           <el-table
                   :data="tableData"
                   style="width:100%;overflow: auto;">
               <el-table-column
                       prop="date"
                       label="操作"
                       inline-template
                       width="100">
                   <div style="width:100%;height:40px;line-height: 24px;display:flex;">
                       <div class="arrange-font" title="转诊单">
                           <svg class="icons f2" >
                               <use xlink:href="#icon-dayinzhuanzhendan"></use>
                           </svg>
                       </div>
                       <div class="arrange-font" title="确认单">
                           <svg class="icons f2">
                               <use xlink:href="#icon-chexiao" ></use>
                           </svg>
                       </div>
                       <div class="arrange-font" title="查看">
                           <svg class="icons f2" >
                               <use xlink:href="#icon-chakan"></use>
                           </svg>
                       </div>
                   </div>
               </el-table-column>
               <el-table-column
                       prop="zzzt=='1'?'成功':'失败'"
                       label="预约状态">
               </el-table-column>
               <el-table-column
                       prop="ddid"
                       label="预约号">
               </el-table-column>
               <el-table-column
                       prop="sqsj"
                       label="转诊日期">
               </el-table-column>
               <el-table-column
                       prop="yyrq"
                       label="期望手术日期">
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
                       prop="address"
                       label="年龄">
               </el-table-column>
               <el-table-column
                       prop="sjhm"
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
                       prop="ssmc"
                       label="手术名称">
               </el-table-column>
           </el-table>
           <el-pagination
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
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
<script>
    import Vue from "vue";
    import { formatUnixTime } from "../../utils/DateFormat.js";
    import AllHeader from "../common/AllHeader.vue";
    import axiosUtil from "../../utils/AxiosUtils.js";
    export default{
        data (){
            return{
                activeName:"first",
                starttime:'',
                endtime:'',
                hospital:'',
                office:'',
                state:'',
                tableData: []
            }
        },
        components:{
            AllHeader
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
            }
        }
    }
</script>
