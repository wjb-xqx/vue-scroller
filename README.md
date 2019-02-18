# my-project

> vue-scroller组件上拉刷新，下拉刷新学习案例
## How to use

```bash
npm i vue-scroller -S
```

```js
/* ignore this if you include vue-scroller.js by <script> tag from a cdn, such as unpkg */
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
```

```html
<scroller 
  :on-refresh="refresh"
  :on-infinite="infinite">
  <!-- content goes here -->
</scroller>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
