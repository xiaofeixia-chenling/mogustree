import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import 'vant/lib/toast/style';
//全局使用样式，
import './style/index.scss';
//---1 那为什么从外部引入的SassMagic的scss文件不在main.js里引入而要在vue.config.jsn呢?
// vue.config.js里配的全局引用的scss文件里是用sass语法变量的，如果不在vue.config.js里配置
//其实在.vue文件里<style land="scss"></style>里可以写 import '@/style/gobal.scss'引用起来
//只是写在了vue.config.js里的话相当于它帮助了开发者完成了在每个vue里引入这一步，不用开发者自己来方便而已。
//----2 而像 import './style/index.scss'里的scss都是在重置具体元素的样式
//没有定义什么css变量需要被.vue文件在<style></style>里引用赋值的，所以直接在main.js里写一遍全局引用就ok

createApp(App).use(store).use(router).mount('#app')
