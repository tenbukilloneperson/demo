<template>
    <div>
        <div id="circle" style="width:100;height:100px;"></div>
    </div>
</template>

<script>
export default {
   methods: {
       init() {
            let e=0; 
            let Chart4 = this.$Echart.init(document.getElementById('circle'));
            let option = {
                    //  圆环内的文字设置
                    title:{
                            show:true,
                            text: '节点数10020-000<br>0哈哈哈',
                            x:'center',
                            y:'center',
                            textStyle: {
                                fontSize: '15',
                                color:'#000',
                                fontWeight: 'normal'
                            },
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{d}%",
                        show:true
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        show:true
                    },
                    series: 
                        {
                            name:'圆环',
                            type:'pie',
                            radius: ['100%', '50%'], //  圆环的宽度为直径差
                            avoidLabelOverlap: true,
                            hoverAnimation:false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {   // 指示线隐藏
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:e, name:''},
                                {value:100-e, name:''},
                            ]
                        }
                    
                };
            Chart4.setOption(option); 
        }
   },
   mounted() {
       this.init()
   }
}
</script>

<style>

</style>
