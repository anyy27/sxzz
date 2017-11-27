<template>
    <div class="plugin-area">
        <el-select v-model="rule.provinceId" placeholder="请选择" @change="getCity"
                   style="width: 114px">
            <el-option
                v-for="item in provinces"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="rule.cityId" placeholder="请选择" @change="getRegion"
                   style="width: 114px">
            <el-option
                v-for="item in citys"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="rule.regionId" @change="changeRegion" placeholder="请选择" style="width: 114px">
            <el-option
                v-for="item in regions"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    import api from "../utils/AxiosUtils"

    export default {
        props: ["ruleForm"],
        data() {
            return {
                provinces: [],
                citys: [],
                regions: [],
                map: {
                    provinces: "",
                    citys: "provinceId",
                    regions: "cityId"
                }
            };
        },
        computed: {},
        components: {},
        created() {
            this.zxs = ["110000", "120000", "310000", "500000"];
            this.rule = this.ruleForm;
            this.init();
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            async init() {
                this.getData("smarthos.sxzz.province.list", 'provinces');
                let {provinceId, cityId, regionId} = this.ruleForm;
                provinceId && cityId && (this.getData("smarthos.sxzz.city.list", 'citys', provinceId));
                provinceId && cityId && regionId && (this.getData("smarthos.sxzz.region.list", 'regions', cityId))
            },
            async getCity(value, name) {
                let city = await this.getData("smarthos.sxzz.city.list", 'citys', value);
                this.rule.cityId = city.id;
                let index = this.provinces.findIndex((res) => {
                    return res.id = value;
                }), zxsArr = this.provinces[index];
                console.log("zxsArr", zxsArr);


                /*if (this.zxs.indexOf(value + "") >= 0) {
                    console.log("into zxs", value);
                    let citys = this.citys;

                    let index = this.provinces.findIndex((res) => {
                        return res.id = value;
                    }), c = this.provinces[index];
                    this.regions = citys;
                    this.rule.regionId = this.regions[0].id;
                } else {

                }*/
                this.$emit("change", this.rule);
            },
            async getRegion(value) {
                let region = await this.getData("smarthos.sxzz.region.list", 'regions', value);
                region && (this.rule.regionId = region.id);
                this.$emit("change", this.rule);
            },

            changeRegion(value) {
                this.rule.regionId = value;
                this.$emit("change", this.rule);
            },

            async getData(service, field, value) {
                let opt = {};
                if (field !== "provinces") {
                    opt[this.map[field]] = value;
                }
                let ret = await api(service, opt);
                if (ret.code == 0) {
                    this.$set(this.$data, field, ret.list);
                }
                return ret.list[0];
            }
        }
    };
</script>

<style scoped lang="scss">
    .plugin-area {
        display: inline-block;
    }
</style>
