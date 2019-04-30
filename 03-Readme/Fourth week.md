#  vuex的使用
```js
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const store = new Vue.Store({
        state: {},
        getters: {},
        mutations: {},
        actions: {},
        modules: {}
    })
```

## 1. state
```js
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['name','age']),
            ...{
                // 写自己的计算属性
            }
        }
    }

    export default {
        computed: {
            ...mapState({
                name: state => return state.name,
                Age: state => return state.age
            }),
            ...{
                // 写自己的计算属性
            }
        }
    }
```


## 2. mutations
```html
    <button @click.stop="add(100)">点击+100<button>
```
```js
    // 实现是通过this.$store.commit('add',num)
    import { mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations(['add','cancel']),
            ...{
                // 写自己的方法
            }
        }
        methods: {
            ...mapMutations({
                // 可以将当前页面的this.add() 映射为this.$store.commit('addd')
                add: 'addd'
            }),
            ...{
                // 写自己的属性
            }
        }
    }

    
    // store中需要做如下修改
    new Vuex.Store({
        mutations: {
            add: function(state,num) {
                // 第一个参数state,后续参数为传递的参数
                state.count += num;
            }
        }
    })
```

## 3. getters
```js
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([sumCount]),
            ...mapState(['name','age']),
            ...{
                
            }
        }
    }

     // store中需要做如下修改
    new Vuex.Store({
        getters: {
            sumCount: function(state) {
                // 第一个参数state,后续参数为传递的参数
                return state.count1 + state.count2
            }
        }
    })
```


## 4. actions
`vuex中改变状态的唯一方法就是提交mutations,且为同步的;而actions通过派遣mutations来异步改变状态的方法`
```js
    // this.$store.dispatch('addAsync', payload)

    import { mapActions } from 'vuex'
    methods: {
        ...mapActions(['addAsync'])
    }

    // Actions中的修改
    new Vuex.Store({
        mutations: {
            add(state,num) {
                state.num += num;
            }
        },
        actions: {
            addAsync(context){    // context 一个跟store具有相同属性和方法的实例
               setTimeout(() => {
                   context.commit('add')
               },1000) 
            }
        }
    })
```

#  

# Promise对象

​    `基本用法  先实例化一个promise`  

 ```js
  let promise = new Promise((resolve,reject) =>{
        if (true) {
            resolve('成功')
        } else {            
            reject('失败')
        }
    })

 
	// 使用
    promise.then(res => {
        console.log(res) // 打印 '成功'
    }).catch(error => {
        console.log(error) //打印 '失败' 
    })

 ```



# 字体图标

```js
//在vue中使用阿里iconfont
```





`vuex的使用`
`Date() 和 new Date()的使用`
`对象的合并Object.assign()和扩展符(...)`
`数组去重`
`vue-cli 3.0的使用`
`组件的封装事件的处理`
`elementui 布局的使用 el-row / el-col (gutter, offset , span )`