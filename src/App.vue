<style lang="less">
	html,body{
	width:@maxWidth;
	height:100%;
	min-width:@minWidth;
	overflow: inherit !important;
    padding-right: inherit !important;
	/*font:12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif*/
	color:#colors[black];
}
</style>
<template>
  <div id="app">
  	<a-locale-provider :locale="zh_CN">
    	<router-view/>
	</a-locale-provider>	
  </div>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  name: 'App',
  data() {
    return {
      zh_CN,
    }
  }
}
</script>