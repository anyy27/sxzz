export const tableHeightMixin = {
    data() {
        return {
            tableHeight: 0
        }
    },
    created() {
        this.__init();
    },
    methods: {
        __init() {
            console.log("init", window.innerHeight - (85 + 10 + 50 + 60 + 40 + 30 + 10))
            this.tableHeight = window.innerHeight - (85 + 10 + 50 + 60 + 40 + 30 + 10);
        }
    }

}

export const columnWidthMixin = {
    data() {
        return {
            columnWidth: "0px",
            weekWidth: "0px"
        }
    },
    mounted() {
        this.__columnWidthInit();
    },
    methods: {
        __columnWidthInit() {
            setTimeout(() => {
                if (!this.$refs.showTable) {
                    throw new Error("请在表格父元素添加ref='showTable'");
                }
                let tableObj = this.$refs.showTable, tableW = 0;
                tableObj && (tableW = this.$refs.showTable.getBoundingClientRect().width / 15);
                this.columnWidth = `${tableW}px`;
                this.weekWidth= `${tableW*2}px`;
                //console.log("12345", this.$refs.showTable.getBoundingClientRect())
            }, 200)
        }

    }
}