<template>
    <div>
        <!--时间选择-->
        <div class="date-boxs">
            <div class="date-box">
            <div class="block">
                <span class="demonstration">转诊时间:</span>
                <el-date-picker
                        v-model="value6"
                        type="daterange"
                        placeholder="选择日期范围">
                </el-date-picker>
            </div>
        </div>
            <div class="date-box" style="width:180px;">
                <el-select v-model="value2" placeholder="请选择预约医院" style="width:100%;">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled">
                    </el-option>
                </el-select>
            </div>
            <div class="date-box" style="width:180px;">
                <el-select v-model="value3" placeholder="请选择预约科室" style="width:100%;">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled">
                    </el-option>
                </el-select>
            </div>
            <div class="date-box">
                <el-button>查询</el-button>
            </div>
            <div class="date-box">
                <el-button class="btn" type="primary">导出excel</el-button>
            </div>
        </div>
            <div class="hosptial-table">
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="按医院" name="first"> </el-tab-pane>
                    <el-tab-pane label="按科室" name="second"> </el-tab-pane>
                    <el-tab-pane label="按业务" name="third"> </el-tab-pane>
                </el-tabs>
                <!--表格-->
                <el-table
                        :data="data2"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="序号"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            type="selection"
                            label="选中"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="医院名称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="1月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="2月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="3月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="4月">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="5月">
                     </el-table-column>
                    <el-table-column
                            prop="address"
                            label="6月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="7月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="8月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="9月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="10月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="11月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="12月">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="全年">
                    </el-table-column>
                </el-table>
            </div>
    </div>
</template>
<style>

</style>
<script>
    import Vue from "vue";
    export default {
        data() {
            return {
                options2: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
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
                value2:'',
                value3:'',
                value6:'',
                activeName:'first',
                data2:[{
                    date: '1',
                    name: '王小虎',
                    address: '上海市'
                }, {
                    date: '2',
                    name: '王小虎',
                    address: '上海市'
                }, {
                    date: '3',
                    name: '王小虎',
                    address: '上海市'
                }, {
                    date: '4',
                    name: '王小虎',
                    address: '上海市'
                }]
            }
        }
    }
</script>