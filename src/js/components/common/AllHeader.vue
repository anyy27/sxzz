<template>
    <div class="Header-title">
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
            <div class="date-box" style="width:180px;">
                <el-select v-model="value4" placeholder="请选择预约状态" style="width:100%;">
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
                <el-button class="btn" type="primary" style="padding:5px 20px;">查询</el-button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import Vue from "vue";
    export default{
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
            value4:'',
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