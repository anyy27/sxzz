<template>
    <div>
        <AllHeader></AllHeader>
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
                        prop="name"
                        label="预约状态">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="预约号">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="转诊日期">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="就诊日期">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="检查地点">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="联系方式">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="申请医院">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="申请科室">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="申请医生">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="预约医院">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="预约科室">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="检查项目">
                </el-table-column>
            </el-table>
        </div>
    </div>

</template>
<style>

</style>
<script>
    import Vue from "vue";
    import AllHeader from "../common/AllHeader.vue";
    export default{
        data (){
            return{
                activeName:"first",
                tableData: [{
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        components:{
            AllHeader
        },
        methods:{
            arranges:function(){
                this.$router.push("videoConsultation/jczz");
            }
        }
    }

</script>
