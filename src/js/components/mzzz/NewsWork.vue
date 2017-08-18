<template>
    <div>
        <el-form   label-width="100px" class="demo-ruleForm">
            <BaseMessage></BaseMessage>
        </el-form>
        <div class="news-con">
            <p style="line-height: 40px;">预约信息</p>
            <div class="base-con">
                <span style="font-size: 14px;color: #48576a;">接诊医院:</span>
                <el-select v-model="somedata.hospital" filterable placeholder="请选择" style="height:24px;margin-left:5px;" @change="selectHospital">
                    <el-option
                            v-for="item in hospitalList"
                            :key="item.yyid"
                            :label="item.yymc"
                            :value="item.yyid"
                    >
                    </el-option>
                </el-select>
                <span style="font-size: 14px;color: #48576a;">接诊科室:</span>
                <el-select v-model="somedata.office" filterable placeholder="请选择" style="height:24px;margin-left:5px;" @change="getDocList">
                    <el-option
                            v-for="item in officeList"
                            :key="item.ksid"
                            :label="item.ksmc"
                            :value="item.ksid"
                    >
                    </el-option>
                </el-select>

            </div>
            <div>
                <el-button :disabled="disabled" @click="lastDate" type="primary" style="padding:5px 20px;" >上周</el-button>
                <el-button  type="primary" @click="nextDate" style="padding:5px 20px;" >下周</el-button>
            </div>
            <div class="news-table">
                <el-table
                        :data="arrangeList"
                        height="280"
                        border
                        @cell-click="and"
                >
                    <el-table-column
                            prop="name"
                            label="医生"
                            width="130">
                        <template scope="scope">
                            <div>{{scope.row.name==''?'普通医生':scope.row.name}}</div>
                        </template>
                    </el-table-column>

                    <el-table-column :label="dateList[0].date" prop="monday">
                        <el-table-column
                                :label="dateList[0].week"
                                >
                            <el-table-column
                                    prop="monday.am"
                                    label="上午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.monday.am=='0'?'':scope.row.monday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="monday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.monday.pm=='0'?'':scope.row.monday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column :label="dateList[1].date" props="tuesday">
                        <el-table-column
                                :label="dateList[1].week"
                                >
                            <el-table-column
                                    prop="tuesday.am"
                                    label="上午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.tuesday.am=='0'?'':scope.row.tuesday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="tuesday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.tuesday.pm=='0'?'':scope.row.tuesday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column :label="dateList[2].date" props="wednesday">
                        <el-table-column
                                prop="name"
                                :label="dateList[2].week"
                                >
                            <el-table-column
                                    prop="wednesday.am"
                                    label="上午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.wednesday.am=='0'?'':scope.row.wednesday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="wednesday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.wednesday.pm=='0'?'':scope.row.wednesday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column :label="dateList[3].date" props="thursday">
                        <el-table-column
                                prop="name"
                                :label="dateList[3].week"
                                >
                            <el-table-column
                                    prop="thursday.am"
                                    label="上午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.thursday.am=='0'?'':scope.row.thursday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="thursday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.thursday.pm=='0'?'':scope.row.thursday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column :label="dateList[4].date" props="friday">
                        <el-table-column
                                prop="name"
                                :label="dateList[4].week"
                                >
                            <el-table-column
                                    prop="friday.am"
                                    label="上午"
                                    :data="dateList[4].date"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.friday.am=='0'?'':scope.row.friday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="friday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.friday.pm=='0'?'':scope.row.friday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column :label="dateList[5].date" props="saturday">
                        <el-table-column
                                prop="name"
                                :label="dateList[5].week"
                                >
                            <el-table-column
                                    prop="saturday.am"
                                    label="上午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.saturday.am=='0'?'':scope.row.saturday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="saturday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.saturday.pm=='0'?'':scope.row.saturday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>

                    <el-table-column :label="dateList[6].date" props="sunday">
                        <el-table-column
                                prop="name"
                                :label="dateList[6].week"
                                >
                            <el-table-column
                                    prop="sunday.am"
                                    label="上午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.sunday.am=='0'?'':scope.row.sunday.am}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="sunday.pm"
                                    label="下午"
                                    width="50"
                            >
                                <template scope="scope">
                                    <div>{{scope.row.sunday.pm=='0'?'':scope.row.sunday.pm}}</div>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <span @click="open">打开</span>
     <div class="dialog" v-show="dialogVisible">
         <div style="width:100%;height:50px;line-height: 50px;border:1px solid #ccc;color:#848484;box-sizing: border-box;padding:0px 20px;">
             <p>预约信息</p>
         </div>
         <div style="width:90%;margin-left:5%;height:80px;">
             <div class="newsworks">
                 <span>身份证号:</span>
                 <span>135568985967854</span>
             </div>
             <div class="newsworks">
                 <span>姓名:</span>
                 <span>135568985967854</span>
             </div>
             <div class="newsworks">
                 <span>就诊时间:</span>
                 <span>135568985967854</span>
             </div>
             <div class="newsworks">
                 <span>预约医院:</span>
                 <span>浙二医院</span>
             </div>
             <div class="newsworks">
                 <span>预约科室:</span>
                 <span>骨科</span>
             </div>
             <div class="newsworks">
                 <span>预约医生:</span>
                 <span>刘进</span>
             </div>
             <div class="newsworks">
                 <span style="color:red;">当前剩余号源还剩:</span>
                 <span style="color:red;">16</span>
             </div>
         </div>
         <el-table
                 :data="tableData"
                 height="330"
                 style="width:90%;margin-left:5%;">
             <el-table-column
                     prop="date"
                     label="就诊序号"
                     width="180">
             </el-table-column>
             <el-table-column
                     prop="name"
                     label="就诊时间"
                     width="180">
             </el-table-column>
             <el-table-column
                     prop="address"
                     label="挂号费">
             </el-table-column>
             <el-table-column
                     prop="address"
                     label="诊疗费">
             </el-table-column>
         </el-table>
         <div class="btn-con">
         <el-button  class="btn success1" type="text" style="padding:5px 50px" >上一步</el-button>
         <el-button class="btn" type="primary" style="padding:5px 50px;" @click="SureYuyue">确认预约</el-button>
         </div>
         </div>
        <div class="BigBox" v-show="dialogVisible1"></div>
    </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">
    import Vue from "vue";
//    import  'element-ui';
    import BaseMessage from  "../common/BaseMessage.vue";
    import axiosUtil from "../../utils/AxiosUtils.js"
    import { Button, Radio, RadioGroup, Select, Option, DatePicker, Input, Message, Loading, Popover, MessageBox , Dialog } from "element-ui";

    Vue.use(Button);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(DatePicker );
    Vue.use(Loading);
    Vue.use(Popover);
    Vue.use(Dialog);
    export default{
        data(){
            return{
                dialogVisible:false,
                dialogVisible1:false,
                hospitalList:[],
                officeList:[],
                index:0,
                disabled:true,
                currentFirstDate:'',
                dateList:[],
                value8:'',
                value9:'',
                value10:'',
                somedata:{
                    hospital:'',
                    office:''
                },
                arrangeList:[],
                hyrq:'',
                yylx:0,
                pbid:''

            }
        },
        components:{
            BaseMessage
        },
        mounted(){
           this.setDate(new Date());
//            this.getData();
            this.getHospital();
        },
        methods:{
            SureYuyue:function(){
                this.dialogVisible=false;
                this.dialogVisible1=false;
            },
            open:function(){
                this.dialogVisible=true;
                this.dialogVisible1=true;
            },
            handleEdit(index, row) {
            },
            getDocList(val){
                this.getData(val)
            },
            getHospital(){
                axiosUtil('smarthos.sxzz.hos.list',{
                    "qyid":"0",
                    "ywlx":"0"
                }).then(res=>{
                    console.log(res,555565656)
                    if(res.succ){
                        this.$set(this.$data,'hospitalList',res.list)
                    }else {
                        alert(res.msg)
                    }
                });

            },
            selectHospital(id){
                this.getOffice(id);
            },
            getOffice(id){
                axiosUtil('smarthos.sxzz.outdept.list',{
                    "yyid":id,
                }).then(res=>{
                    if(res.succ){
                        this.$set(this.$data,'officeList',res.list)
                    }else {
                        alert(res.msg)
                    }
                })
            },
            getData(val){
                axiosUtil('smarthos.sxzz.outscheme.list',{
                    "jgid": "59411511191ce23575a63218",
                    "yyid": this.somedata.hospital,
                    "ksid": val
                }).then(res=>{
                    if(res.succ){
                        var list = res.list;
                        var arr = [];
                        for(var i=0;i<list.length;i++){
                            var obj = {};
                            obj.name = list[i].ysxm;
//                            obj.pbid = list[i].pbid;
                            var dayList = [];
                            for(var j=0;j<list[i].pb.length;j++){
                                var dateObj = {};
                                dateObj.am = list[i].pb[j].swsyhy;
                                dateObj.pm = list[i].pb[j].xwsyhy;
                                dateObj.pbid = list[i].pb[j].pbid;
                                dateObj.pmpbid = list[i].pb[j].pmpbid;
                                dayList.push(dateObj);
                            }
                            obj.monday = dayList[0];
                            obj.tuesday = dayList[1];
                            obj.wednesday = dayList[2];
                            obj.thursday = dayList[3];
                            obj.friday = dayList[4];
                            obj.saturday = dayList[5];
                            obj.sunday = dayList[6];
                            arr.push(obj)
                        };
                        this.$set(this.$data,'arrangeList',arr)
                    }else{
                       alert(res.msg)
                    }
                })
            },
            formatDate(date){
                var year = date.getFullYear()+'-';
                var month = (date.getMonth()+1>9?date.getMonth()+1:'0'+(date.getMonth()+1))+'-';
                var day = (date.getDate()>9?date.getDate():'0'+(date.getDate()))
                var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][date.getDay()];
                return {
                    date:year+month+day,
                    week:week
                }
            },
            setDate(date){
                var week = date.getDay()-1;
//                date = this.addDate(date,week*-1);
                this.currentFirstDate = new Date(date);
                var arr = [];
                for(var i = 0;i<7;i++){
                    arr.push(this.formatDate(i==0 ? date : this.addDate(date,1)))
                };
                this.$set(this.$data,'dateList',arr)
            },
            addDate(date,n){
                date.setDate(date.getDate()+n);
                return date;
            },
            nextDate(){
                this.index++
                this.$set(this.$data,'disabled',false);
                this.setDate(this.addDate(this.currentFirstDate,7));
            },
            lastDate(){
                if(this.index==0){
                    this.$set(this.$data,'disabled',true);
                }else {
                    this.index--;
                    this.setDate(this.addDate(this.currentFirstDate,-7));
                }

            },
            test(){

            },
            and(row, column, cell){
                this.$set(this.$data,'pbid',row.pbid)
                if(column.property.split('.')[1]=='am'){
                    this.$set(this.$data,'yylx',0)
                }else {
                    this.$set(this.$data,'yylx',1)
                }
                switch (column.property){
                    case 'monday.am':
                        this.$set(this.$data,'hyrq',this.dateList[0].date);
                        this.$set(this.$data,'pbid',row.monday.pbid)
                    break;
                    case 'monday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[0].date);
                        this.$set(this.$data,'pbid',row.monday.pmpbid)
                    break;
                    case 'tuesday.am':
                        this.$set(this.$data,'hyrq',this.dateList[1].date)
                        this.$set(this.$data,'pbid',row.tuesday.pbid)
                    break;
                    case 'tuesday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[1].date)
                        this.$set(this.$data,'pbid',row.tuesday.pmpbid)
                    break;
                    case 'wednesday.am':
                        this.$set(this.$data,'hyrq',this.dateList[2].date)
                        this.$set(this.$data,'pbid',row.wednesday.pbid)
                    break;
                    case 'wednesday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[2].date)
                        this.$set(this.$data,'pbid',row.wednesday.pmpbid)
                    break;
                    case 'thursday.am':
                        this.$set(this.$data,'hyrq',this.dateList[3].date)
                        this.$set(this.$data,'pbid',row.thursday.pbid)
                    break;
                    case 'thursday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[3].date)
                        this.$set(this.$data,'pbid',row.thursday.pmpbid)
                    break;
                    case 'friday.am':
                        this.$set(this.$data,'hyrq',this.dateList[4].date)
                        this.$set(this.$data,'pbid',row.friday.pbid)
                    break;
                    case 'friday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[4].date)
                        this.$set(this.$data,'pbid',row.friday.pmpbid)
                    break;
                    case 'saturday.am':
                        this.$set(this.$data,'hyrq',this.dateList[5].date)
                        this.$set(this.$data,'pbid',row.saturday.pbid)
                    break;
                    case 'saturday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[5].date)
                        this.$set(this.$data,'pbid',row.saturday.pmpbid)
                    break;
                    case 'sunday.am':
                        this.$set(this.$data,'hyrq',this.dateList[6].date)
                        this.$set(this.$data,'pbid',row.sunday.pbid)
                    break;
                    case 'sunday.pm':
                        this.$set(this.$data,'hyrq',this.dateList[6].date)
                        this.$set(this.$data,'pbid',row.sunday.pmpbid)
                    break;
                }
                this.sourceList();
                this.$set(this.$data,'dialogTableVisible',true)
            },
            sourceList(){
                if(this.pbid){
                    axiosUtil('smarthos.sxzz.outorder.list',{
                        "jgid": "59411511191ce23575a63218",
                        "yyid": this.somedata.hospital,
                        "pbid":this.pbid,
                        "hyrq":this.hyrq,
                        "yylx":this.yylx,
                        "yhid":"1",
                        "yyr": "595d05b0f19b9c898a58cc70"
                    }).then(res=>{
                        console.log(res,7777777777755555555)
                    })
                }else {
                  alert('号源列表为空！')
                }


            }
        }
    }
</script>