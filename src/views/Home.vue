<template>
  <div class="home">
    <img alt="Vue logo" circle src="../assets/logo.jpeg">
  </div>
  <CRow>
    <CCol class="hone1" span="8">span: 8</CCol>
    <CCol @click="goChat" span="8">span: 8</CCol>
    <CCol span="8">span: 8</CCol>
  </CRow>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import {getRecommendatoryCategorys, getBanners, getBrandVideos} from '@/api/mall';
import Toast from 'vant/lib/toast';
export default {
  components: {
  },
  setup() {
    const data = reactive({
			isShow: false,
			categoryList: [],
			swipeList: [],
			brandList: [
				{list:[]},
				{list:[]}
			]
		})

    onMounted(()=>{
			Toast.loading({
				message: '加载中...',
				forbidClick: true
			});
			
			getRecommendatoryCategorys().then((res)=>{
				data.categoryList = res.data;
			})

			getBanners().then((res)=>{
				data.swipeList = res.data;
			})

			getBrandVideos().then((res)=>{
				data.brandList = res.data;
			})

		})

    return {
			...toRefs(data),
			
		}
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 500px;
  height: 500px;
  
}
.hone1{
  @include box-center;
}
</style>