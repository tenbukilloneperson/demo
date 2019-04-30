/*
  1. npm install --save vue-quill-editor
  2. import VueQuillEditor from 'vue-quill-editor'
  3.
 */
<template>
  <div class="editor">
    <quill-editor ref="myTextEditor"
      v-model="content"
      :config="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)">
    </quill-editor>
    <!-- 如果你需要手动控制数据流，就需要像这样手动监听changed事件 -->
    <!-- <quill-editor ref="myTextEditor"
      :content="content"
      :config="editorOption"
      @change="onEditorChange($event)">
    </quill-editor> -->
  </div>
</template>

<script>
// editor option example:
export default {
  data () {
    return {
      content: '请输入内容',
      editorOption: {
      //  theme: 'bubble',  // 主题bubble  和 snow
      //  modules: {
      //     toolbar:[
      //         ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
      //         ['blockquote', 'code-block'],     //引用，代码块

      //         [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
      //         [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
      //         [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
      //         [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
      //         [{ 'direction': 'rtl' }],             // 文本方向

      //         [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
      //         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题

      //         [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
      //         [{ 'font': [] }],     //字体
      //         [{ 'align': [] }],    //对齐方式

      //         ['clean'],    //清除字体样式
      //         ['image','video']    //上传图片、上传视频

      //       ]
      //  }
      }
    }
  },
  // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
      console.log(this.content)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    }
  },
  // if you need to get the current editor object, you can find the editor object like this, the $ref object is a ref attribute corresponding to the dom redefined
  // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
  computed: {
    editor () {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  mounted () {
    console.log('this is my editor', this.editor)
    // this.editor to do something...
  }
}
</script>

<style>
.ql-container {
  width: 100%;
  height: 500px;
}

</style>
