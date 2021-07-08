<template>
    <div>
        <avue-form 
            ref="form"
            :option="widgetFormPreview"
            v-model="widgetModels"
            @submit="handlePreviewSubmit">
        </avue-form>
    </div>
</template>
<script>

export default {
    data(){
        return {
          widgetFormPreview:{},
          widgetModels:{}

        }
    },
    mounted(){
        this.widgetFormPreview = eval("(" + localStorage.getItem("avue-form-data") + ")") 
    },
    methods:{
 // 预览 - 弹窗 - 确定
        handlePreviewSubmit() {
        this.$toast({message:JSON.stringify(this.widgetModels),position: 'top'})
        },
    }
}
</script>