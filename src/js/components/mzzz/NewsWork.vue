<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                <el-select v-model="somedata.office" filterable placeholder="请选择" style="height:24px;margin-left:5px;" @change="getDocList(value)">
                    <el-option
                            v-for="item in officeList"
                            :key="item.ksid"
                            :label="item.ksmc"
                            :value="item.ksmc"
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
                            </el-table-column>
                            <el-table-column
                                    prop="monday.pm"
                                    label="下午"
                                    width="50"
                            >
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
                            </el-table-column>
                            <el-table-column
                                    prop="tuesday.pm"
                                    label="下午"
                                    width="50"
                            >
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
                            </el-table-column>
                            <el-table-column
                                    prop="wednesday.pm"
                                    label="下午"
                                    width="50"
                            >
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
                            </el-table-column>
                            <el-table-column
                                    prop="thursday.pm"
                                    label="下午"
                                    width="50"
                            >
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
                            </el-table-column>
                            <el-table-column
                                    prop="friday.pm"
                                    label="下午"
                                    width="50"
                            >
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
                            </el-table-column>
                            <el-table-column
                                    prop="saturday.pm"
                                    label="下午"
                                    width="50"
                            >
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
                            </el-table-column>
                            <el-table-column
                                    prop="sunday.pm"
                                    label="下午"
                                    width="50"
                            >
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">
    import Vue from "vue";
    import  'element-ui';
    import BaseMessage from  "../common/BaseMessage.vue";
    import axiosUtil from "../../utils/AxiosUtils.js"
    import { Button, Radio, RadioGroup, Select, Option, DatePicker, Input, Message, Loading, Popover, MessageBox } from "element-ui";
    Vue.use(Button);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(DatePicker );
    Vue.use(Loading);
    Vue.use(Popover);
    export default{
        data(){
            return{
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
            handleEdit(index, row) {
                console.log(index, row,111111);
            },
            getDocList(val){
                this.getData()
            },
            getHospital(){
                axiosUtil('smarthos.sxzz.hos.list',{
                    "qyid":"0",
                    "ywlx":"0"
                }).then(res=>{
                    if(res.succ){
                        this.$set(this.$data,'hospitalList',res.list)
                    }else {
                        alert(res.msg)
                    }
                });

            },
            selectHospital(id){
                this.getOffice(id);

                this.getData();
            },
            getOffice(id){
                axiosUtil('smarthos.sxzz.dept.list',{
                    "yyid":id,
                }).then(res=>{
                    if(res.succ){
                        this.$set(this.$data,'officeList',res.list)
                    }else {
                        alert(res.msg)
                    }
                })
            },
            getData(){
                axiosUtil('smarthos.sxzz.docscheme.list',{
                    "jgid": "59411511191ce23575a63218",
                    "yyid": this.somedata.hospital,
                    "ysid": "1136",
                    "mzksmc":this.somedata.office?this.somedata.office:"呼吸内科",
                }).then(res=>{
                    console.log(res,88888);
                    if(res.succ){
                        var list = res.list;
                        var arr = [];
                        for(var i=0;i<list.length;i++){
                            var obj = {};
                            obj.name = list[i].ysxm;
                            obj.pbid = list[i].pbid;
                            var dayList = [];
                            for(var j=0;j<list[i].pb.length;j++){
                                var dateObj = {};
                                dateObj.am = list[i].pb[j].swsyhy;
                                dateObj.pm = list[i].pb[j].xwsyhy;
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
                        console.log(arr,565656565)
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
                console.log(row.pbid,column.property,123456789);
                console.log(column.property.split('.')[0]);
                this.$set(this.$data,'pbid',row.pbid)
                if(column.property.split('.')[1]){
                    this.$set(this.$data,'yylx',0)
                }else {
                    this.$set(this.$data,'yylx',1)
                }
                switch (column.property.split('.')[0]){
                    case 'monday':
                        this.$set(this.$data,'hyrq',this.dateList[0].date)
                    break;
                    case 'tuesday':
                        this.$set(this.$data,'hyrq',this.dateList[1].date)
                    break;
                    case 'wednesday':
                        this.$set(this.$data,'hyrq',this.dateList[2].date)
                    break;
                    case 'thursday':
                        this.$set(this.$data,'hyrq',this.dateList[3].date)
                    break;
                    case 'friday':
                        this.$set(this.$data,'hyrq',this.dateList[4].date)
                    break;
                    case 'saturday':
                        this.$set(this.$data,'hyrq',this.dateList[5].date)
                    break;
                    case 'sunday':
                        this.$set(this.$data,'hyrq',this.dateList[6].date)
                    break;
                }
                console.log(this.hyrq,2323232323);
                this.sourceList()
            },
            sourceList(){
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
            }
        }
    }
</script>