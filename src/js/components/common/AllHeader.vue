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
                <el-select v-model="hospital" placeholder="请选择预约医院" style="width:100%;" @change="selectHospital">
                    <el-option
                            v-for="item in hospitalList"
                            :key="item.yyid"
                            :label="item.yymc"
                            :value="item.yyid"
                           >
                    </el-option>
                </el-select>
            </div>
            <div class="date-box" style="width:180px;">
                <el-select v-model="office" placeholder="请选择预约科室" style="width:100%;">
                    <el-option
                            v-for="item in officeList"
                            :key="item.ksid"
                            :label="item.ksmc"
                            :value="item.ksid"
                           >
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
<script type="text/ecmascript-6">
    import Vue from "vue";
    import axiosUtil from "../../utils/AxiosUtils.js"
    export default{
       data() {
           return {
               hospital:'',
               hospitalList:[],
               officeList:[],
               office:'',
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
    },
        mounted(){
            this.getHospital()
        },
        methods:{
           getHospital(){
                axiosUtil('smarthos.sxzz.hos.list',{
                    "qyid":"0",
                    "ywlx":"0"
                }).then(res=>{
                    console.log(res,9999)
                    if(res.succ){
                        this.$set(this.$data,'hospitalList',res.list)
                    }else {
                        alert(res.msg)
                    }
                })
            },
            selectHospital(id){
                console.log(id,565656);
                this.getOffice(id)
            },
            getOffice(id){
                axiosUtil('smarthos.sxzz.dept.list',{
                    "yyid": id,
                }).then(res=>{
                    console.log(res,232323)
                    if(res.succ){
                        this.$set(this.$data,'officeList',res.list)
                    }else {
                        alert(res.msg)
                    }
                })
            }
        }
}
</script>