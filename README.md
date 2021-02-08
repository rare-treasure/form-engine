### 介绍
form-engine基于 [vue](https://www.npmjs.com/package/vue) + [element-ui](https://element.eleme.cn/#/zh-CN/component/installation) , 可解决各种各样的表单需求。使用前必须要引入element-ui。

* 设计理念
  * 面向现代浏览器，高效的简洁 API 设计，减少不必要的冗余代码
  * 为快速开发而设计，支持多种视图扩展，强大的功能的同时兼具性能

* 计划
  * [-] v1.0 基于 vue2.0 + element-ui + ts，支持所有主流的浏览器，实现表单引擎的一切实用的功能
    * 1、 灵活的配置项
    * 2、 编辑/查看两种视图
    * 3、 自定义模板/插槽
    * 4、 溢出隐藏
    * 5、 双击复制
    * ...

  tip：目前仅第一点功能实现，后续功能迭代中…

  * [ ] v2.0 基于已有功能，进行底层升级，以支撑已经到来的vue 3.0，同时兼具功能与性能

### 安装 && 引入

> * #### 安装

``` bash
npm install v-form-engine --save
```
> * #### 引入

##### 全局引入

```javascript
import Vue from 'vue';
import ElementUi from 'element-ui';
import vFormEngine from 'v-form-engine';

// 如果并未全局引入element-ui, 需要进行全局引入才能使用
Vue.use(vFormEngine);
```

##### 局部引入

```javascript
<script>
// 如果并未全局引入element-ui, 需要进行全局引入才能使用
import { FormEngine } from 'v-form-engine';

export default {
  components: {
    FormEngine
  }
}
</script>
```

##### 直接引入

```html
<!-- 如果并未全局引入element-ui, 需要进行全局引入才能使用 -->
<script src="https://unpkg.com/v-form-engine"></script>
```

### 示例

##### 简单示例

```javascript
<template>
  <form-engine :items="items" :form-data="formData" style="width: 600px"></form-engine>
</template>

<script>
export default {
  data() {
    return {
      items:[
        {
          label: 'test1',
          prop: 'test1',
          type: 'time-select'
        }
      ],
      formData: {}
    }
  }
}
</script>
```

##### 在线预览

[预览](https://codepen.io/xiaofan9/pen/MWjMWQj)

### 文档
简版文档：[请点击这里](https://www.yuque.com/pingfan-mm82t/iqx0qm/form-engine)

## License

[MIT](LICENSE) © 2020-present, sifan
