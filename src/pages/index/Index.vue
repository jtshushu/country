<template>
	<v-country @country="getCountry"></v-country>
</template>
<script>
export default {  
  methods: {    
	//获取插件的值
	getCountry(country){
		console.log(country);	
	}
  },
}
</script> 