<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <BaseMessage></BaseMessage>
        </el-form>
        <div class="news-con">
            <p style="line-height: 40px;">预约信息</p>
            <div class="base-con">
                <el-input v-model="input" placeholder="输入医生姓名直接查询" style="width:200px;"></el-input>
                <el-button class="btn" type="primary" style="padding:5px 20px;" >快速搜索</el-button>
                <span style="font-size: 14px;color: #48576a;">接诊医院:</span>
                <el-select v-model="value8" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span style="font-size: 14px;color: #48576a;">接诊科室:</span>
                <el-select v-model="value9" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span style="font-size: 14px;color: #48576a;">接诊医生:</span>
                <el-select v-model="value10" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
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
                index:0,
                disabled:true,
                currentFirstDate:'',
                dateList:[],
                value8:'',
                value9:'',
                value10:'',
                arrangeList:[
                    {
                        name:'李康飞',
                        monday:{
                            am:5,
                            pm:8
                        }
                    },{
                        name:'李东燕',
                        tuesday:{
                            am:50,
                            pm:86
                        }
                    },
                ],
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

            }
        },
        components:{
            BaseMessage
        },
        mounted(){
            this.setDate(new Date());
            this.getData()
        },
        methods:{
            getData(){
                axiosUtil('smarthos.sxzz.docscheme.list',{
                    "jgid": "59411511191ce23575a63218",
                    "yyid": "095101",
                    "ysid": "1136"
                }).then(res=>{
                    console.log(res,88888);
                    var list = res.list;
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
                date = this.addDate(date,week*-1);
                this.currentFirstDate = new Date(date);
                var arr = [];
                console.log(this.formatDate(date),9999999)
                for(var i = 0;i<7;i++){
                    arr.push(this.formatDate(i==0 ? date : this.addDate(date,1)))
                };
                console.log(arr,88888);
                this.$set(this.$data,'dateList',arr)
            },
            addDate(date,n){
                date.setDate(date.getDate()+n);
                return date;
            },
            nextDate(){
                console.log(2121323232);
                this.index++
                this.$set(this.$data,'disabled',false);
                this.setDate(this.addDate(this.currentFirstDate,7));
            },
            lastDate(){
                console.log(this.index,212121)
                if(this.index==0){
                    this.$set(this.$data,'disabled',true);
                }else {
                    this.index--;
                    this.setDate(this.addDate(this.currentFirstDate,-7));
                }

            },
            test(){

            },
            and(value){
                console.log(value);
            }
        }
    }
</script>