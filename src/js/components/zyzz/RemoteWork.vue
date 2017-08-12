<template>
    <div>
        <el-form  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <BaseMessage></BaseMessage>
            <div class="base-appoint">
                <p style="line-height: 40px;">预约信息</p>
                <div class="base-con">
                    <span style="font-size: 14px;color: #48576a;">预约医院:</span>
                    <el-select v-model="value8" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="font-size: 14px;color: #48576a;">预约科室:</span>
                    <el-select v-model="value9" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="font-size: 14px;color: #48576a;">病情等级:</span>
                    <el-select v-model="value10" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                        <el-option label="一般" value="0"></el-option>
                        <el-option label="急" value="1"></el-option>
                        <el-option label="危重" value="2"></el-option>
                    </el-select>
                </div>
                <div class="base-con">
                    <span class="demonstration" style="color:#48576A;">期望手术日期:</span>
                    <el-date-picker
                            v-model="value14"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0">
                    </el-date-picker>

                    <span style="font-size: 14px;color: #48576a;">预约科室:</span>
                    <el-select v-model="value5" filterable placeholder="请选择" style="height:24px;margin-left:5px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="base-con">
                    <el-form-item label="是否接受调剂:" prop="sex">
                        <el-checkbox-group v-model="sex">
                            <el-checkbox label="是" ></el-checkbox>
                            <el-checkbox label="否" ></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <span class="demonstration" style="margin-top:5px;margin-left:10px;">接受最晚时间:</span>
                    <el-date-picker
                            v-model="value1"
                            type="date"
                            style="margin-top:5px;"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </div>
            </div>
            <div class="transfer-btn">
                <div style="position:absolute;left:40%;top:20px;">
                    <el-button class="btn " type="primary" style="padding:5px 20px; border-color: #00b2b1;
  background-color: #00b2b1;" @click="goBack">返回</el-button>
                    <el-button class="btn success1" type="text" style="padding:5px 20px" @click="open">确认预约</el-button>
                </div>
            </div>
        </el-form>
    </div>
</template>
<style>
</style>
<script>
    import Vue  from  "vue";
    import  'element-ui';
    import { Button, Radio, RadioGroup, Select, Option, DatePicker, Input, Message, Loading, Popover, MessageBox } from "element-ui";
    import BaseMessage from  "../common/BaseMessage.vue";
    Vue.use(Button);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(DatePicker );
    Vue.use(Loading);
    Vue.use(Popover);
    export default{
        data (){
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }},
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
                value8: '',
                value9: '',
                value10: '',
                value1: '',
                value14: '',
                sex:'',
                value5:''
            }
        },
        components:{
            BaseMessage
        },
        methods: {
            open() {
                MessageBox.confirm('浙江大学附属第二医院   呼吸内科   ***介入手术2017-04-24    上午', '是否确认预约？', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    closeOnPressEscape:true,
                    type: 'warning'
                }).then(() => {
                    let _this=this;
                    _this.$router.push("/main/commonBox");
                }).catch(() => {
                    console.log("2");
                });
            },
            goBack(){
                let _this=this;
                _this.$router.go(-1);
            }
        }
    }
</script>