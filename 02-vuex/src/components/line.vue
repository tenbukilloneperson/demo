<template>
    <div>
        <div id="link" style="width:1200px; height:500px"></div>
        <!-- <div class="box">
            <el-steps :active="active" >
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div> -->
        <div class="box">
            <p>首次部署</p>
            <p>首次部署</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
        init() {
            let myEchart = this.$Echart.init(document.querySelector('#link'))
            let option = {
                        backgroundColor: '#FBFBFB',
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['充值','消费','娱乐', '周五']
                        },

                        calculable : true,
                        xAxis : [
                            {
                                axisLabel:{ // 设置水平轴上的文字旋转
                                    rotate: 30,
                                    interval:0
                                },
                                axisLine:{  // 坐标轴线的样式
                                lineStyle :{
                                    color: '#CECECE'
                                }
                                },
                                type : 'category',
                                boundaryGap : false,   // 让折线图从0 开始
                                data : function (){
                                    var list = [];
                                    for (var i = 10; i <= 18; i++) {
                                        if(i<= 12){
                                            list.push('2016-'+i + '-01');
                                        }else{
                                            list.push('2017-'+(i-12) + '-01');
                                        }
                                    }
                                    return list;
                                }()
                            }
                        ],
                        yAxis : [
                            {

                                type : 'value',
                                axisLine:{  // 坐标轴线的样式
                                    lineStyle :{
                                        color: '#CECECE'
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'充值',
                                type:'line', 
                                symbol:'circle',
                                smooth: 0.2,   // 折现的弧度
                                color:['#66AEDE'], // 折线的颜色
                                data:[800, 300, 500, 800, 300, 600,500,600]
                            },
                            {
                                name:'消费',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['#90EC7D'],
                                data:[600, 300, 400, 200, 300, 300,200,400]
                            },
                            {
                                name:'娱乐',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['grey'],
                                data:[6000, 3000, 4000, 2000, 3000, 300,200,400]
                            },
                            {
                                name:'娱乐',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['grey'],
                                data:[6000, 3000, 4000, 2000, 3000, 300,200,400]
                            }
                        ]
                };
            myEchart.setOption(option);
        },
        next() {
        if (this.active++ > 2) this.active = 0;
      }
    },
    mounted() {
        this.init()
    }
}
</script>

<style>
    .box {
        width: 750px;
        width: 19.2rem ;
        height: 500px;
        background-color: orange;
        font-size: .4rem ;
        color: #000;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 100px;
    }
</style>
