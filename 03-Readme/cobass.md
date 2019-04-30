## 1. axios 封装和统一设置

```js	
/**
  * axios封装
  * 请求拦截、响应拦截、错误统一处理
  */
import axios from 'axios';
import router from '../router';
import store from '../store';
import login from "../views/login"
import { Message } from 'element-ui';



/**
  * 提示函数
  * 禁止点击蒙层、显示一秒后关闭
  */
const tip = msg => {
  /* Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  }); */
  console.log(msg)
  Message({
    message: msg,
    type: 'error'
  });
}

/**
  * 跳转登录页
  * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
  */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: login
    }
  });
  localStorage.clear();
}

/**
  * 请求失败后的错误统一处理
  * @param {Number} status 请求失败的状态码
  */
const errorHandle = (status, other) => {
  // 状态码判断
  // console.log(status);
  switch (status) {
   
    
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      // tip('登录过期，请重新登录');
      localStorage.clear();
      // store.commit('loginSuccess', null);
      Message({
        message: "登录过期，请重新登录",
        type: 'error'
      });
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
      case 500:
        Message({
          message: "服务器端出现错误，请联系管理员",
          type: 'error'
        });
        setTimeout(() => {
          toLogin();
        }, 1000);
      break;
      case 400:
      Message({
        message: "服务器端出现错误，请联系管理员",
        type: 'error'
      });
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
        default:
        Message({
          message: "服务器端出现错误，请联系管理员 ",
          type: 'error'
        });
      setTimeout(() => {
        toLogin();
      }, 1000);
  }
}
// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头   application/json x-www-form-urlencoded


/**
  * 请求拦截器
  * 每次请求前，如果存在token则在请求头中携带token
  */
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const userId = localStorage.getItem('userId');
    const name = localStorage.getItem('name');
    const roleId = localStorage.getItem('roleId');
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.defaults.headers.common['userId'] = encodeURIComponent(userId);
    instance.defaults.headers.common['name'] = encodeURIComponent(name);
    instance.defaults.headers.common['roleId'] = encodeURIComponent(roleId);
    const token = localStorage.getItem('token');
    //  console.log(token);
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.data.status, response.data.message);
      // console.log(response.data.status);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // console.log(error.response);
      if (error.response) {
          store.commit('del_token');
          router.replace({
              path:'/login',
          })
        
      }


    }
  });



// 开始响应拦截器
// axios.interceptors.response.use(function (response) { // ①10010 token过期（30天） ②10011 token无效
//    console.log()
//   if (response.data.code != "200") {
   
//       localStorage.removeItem('token') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
   
//       router.replace({
   
//           path: '/login' // 到登录页重新获取token
   
//       })
   
//   } else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
   
//       localStorage.setItem('token', response.data.token) // 覆盖原来的token(默认一天刷新一次)
   
//   }
   
//       return response
   
//   }, function (error) {
   
//       return Promise.reject(error)
   
//   })
export default instance;

```

`axios默认是不携带cookie的，如果携带需要设置withCredentials: true`

`axios设置自定义请求头时,使用encodeURIConmonent()来转码 头上不允许携带汉字`

`axios自定义请求头的方式axios.default.headers.common['roleId'] ='123'  

`java中requestParams参数对应我们的urlencoded形式(对应&)`

`java中的requestBody对应json格式`

## 2. Echarts图

```js

```
## 3. 定义全局过滤器的方法(作用:处理常用文本)
```js
    // 1. 新建filter.js文件 并导出包含所有filter一个对象(定义过滤器必须形参和返回值(return))
    export default {
        filterName1: function (value) {
            return value.split(',').revser().join('')
        },
        filterName2: function (value) {
            return ...
        }
        // ...更多过滤器 
    }

    // 2. 在main.js中引入 并在vue实例之前(注意是在vue实例化之前)注册为全局的过滤器
    import filters from './filter.js'
    Object.keys(filters).forEach(filterName => {
        Vue.filter(filterName,filters[filterName])
    })

    // 3. 使用过滤器(在插值表达式或者v-bind绑定的值中使用)
    {{ message | filterName1 }}
    <div v-bind:id="rawId | filterName2"></div>
```
## 4. elementUI中组件常见问题
```js
    // 1. <el-date-picker></el-date-picker>  日期选择器
    `禁用当前月之后的日期`                :picker-options="forbiddenTime"
    `文本框不可输入`                     :editable="false"
    `不显示关清除时间按钮`               :clearable="false"
    data() {
        return {
           forbiddenTime: {
               disabledDate(time) {
                   return time.getTime() > Date.now() - 8.64e6  
               }
           } 
        }
    }

    // 2. el-table 表格
```

5. ###  select获取选中的文本和value

   ```html
    <body>
    	<select name="city" id="city">
   		<option value="beijing">北京</option>
   		<option value="shanghai">上海</option>
   		<option value="hangzhou">杭州</option>
    	</select>
    	<script>
   		document.querySelector('#city').onchange = function () {
   			// this.selectedIndex  --这个是选中的option的索引
   			console.log(this.options[this.selectedIndex].text)  // 文本
   			console.log(this.options[this.selectedIndex].value) // value
   		}
    	</script>
    </body>
   ```

   

## 6. ES 6的方法

```js
// 1. forEach 
// 2. 不改变原数组的方法 find() findIndex() filter()  
var arr = [{name: 'lxn',age:18},{name: 'zs',age:20}]
arr.find(item => item.name === 'lxn')  // {name: 'lxn',age: 20}
arr.filter(item => item.name === 'lxn') // [{name: 'lxn',age: 20}]
//区别就是filter返回的仍旧是数组 而find返回的是满足条件的某一项
```

## 7.   关于上传文件

```html
<input type="file" @change="choosefile('file')" value="选择文件" ref="file"/>
<script>
    this.$refs.file.files[0]
</script>    
```

