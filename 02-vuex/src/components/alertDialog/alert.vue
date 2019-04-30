/* 
使用方式: <el-alert :title="" :content="" @sure-click="sure"></el-alert>

 */

<template>
    <div class="alert">
        <div class="box">
            <div class="title">{{ title }}</div>
            <div class="con">{{ content }}</div>
            <input type="text">
            <div class="footer">
                <button @click.stop="sureEvent">确定</button>
                <button @click.stop="cancelEvent">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // info: {
        //     type: String,
        //     require: false,
        //     default: {
        //         title: '',
        //         content: ''
        //     }
        // },
        title: {
            type: String,
            require: false,
            default: () => '这是默认的标题'
        },
        content: {
            type: String,
            require: false,
            default: () => '这是默认的内容'
        },
        // directivesStatus: {
        //     type: boolean,
        //     require: false,
        //     default: () => false
        // }
    },
    watch: {},
    computed: {},
    methods: {
        // 组件中事件的处理方式  注册一个自定义事件
        sureEvent: function(evt) {
           this.$emit('sure-click',1) 
        },
        cancelEvent: function(evt) {
            this.$emit('cancel-click',evt)
        }
    },
    directives: {
        'focus': {
            // 当绑定元素插入到DOM中
            inserted: function(el) {
                el.focus()
            }
        }
    }
}
</script>

<style>
    .box {
        width: 800px;
        height: 300px;
        background-color: #000;
        color: orange;
        text-align: center;
    }
</style>
