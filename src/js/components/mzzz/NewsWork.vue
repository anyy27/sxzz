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
            <div class="news-table">
                <el-table
                        :data="tableData3"
                        height="280"
                        border
                        @cell-click="and"
                >
                    <el-table-column
                            prop="date"
                            label="<上一周"
                            width="60">
                    </el-table-column>
                    <el-table-column label="周一">
                        <el-table-column
                                prop="name1"
                                label="上午"
                                width="50"
                               >
                        </el-table-column>
                        <el-table-column
                                prop="name2"
                                label="下午"
                                width="50"
                                >
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="周二">
                        <el-table-column
                                prop="name3"
                                label="上午"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name4"
                                label="下午"
                                width="50"
                        >
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="周三">
                        <el-table-column
                                prop="name5"
                                label="上午"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name6"
                                label="下午"
                                width="50"
                        >
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="周四">
                        <el-table-column
                                prop="name7"
                                label="上午"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name8"
                                label="下午"
                                width="50"
                        >
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="周五">
                        <el-table-column
                                prop="name9"
                                label="上午"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name10"
                                label="下午"
                                width="50"
                        >
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="周六">
                        <el-table-column
                                prop="name11"
                                label="上午"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name12"
                                label="下午"
                                width="50"
                        >
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="周日">
                        <el-table-column
                                prop="name13"
                                label="上午"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name14"
                                label="下午"
                                width="50"
                        >
                        </el-table-column>
                    </el-table-column>

                    <el-table-column
                            prop="date"
                            label="下一周>"
                            >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import Vue from "vue";
    import  'element-ui';
    import BaseMessage from  "../common/BaseMessage.vue";
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
                value8:'',
                value9:'',
                value10:'',
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
                tableData3: [{
                    date1: '小王1',
                    name1: '121',
                    name2: '122',
                    name3: '123',
                    name4: '124',
                    name5: '125',
                    name6: '126',
                    name7: '127',
                    name8: '128',
                    name9: '129',
                    name10: '1210',
                    name11: '1211',
                    name12: '1212',
                    name13: '1213',
                    name14: '1214',
                    province1: '上海1',
                    city1: '普陀区1',
                    address1: '上海市普陀区金沙江路 1518 弄1',
                    zip1: 2003331
                }, {
                    date2: '小王2',
                    name2: '122',
                    province2: '上海2',
                    city2: '普陀区2',
                    address2: '上海市普陀区金沙江路 1518 弄2',
                    zip2: 2003332
                },
                    {
                        date: '小王',
                        name: '12',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '小王',
                        name: '12',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },{
                    date: '小王',
                    name: '12',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '小王',
                    name: '12',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '小王',
                    name: '12',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '小王',
                    name: '12',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '小王',
                    name: '12',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        },
        components:{
            BaseMessage
        },
        methods:{
            and(value){
                console.log(value);
            }
        }
    }
</script>