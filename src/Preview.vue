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
        this.widgetFormPreview =   eval("(" + localStorage.getItem("avue-form-data") + ")") 
        console.log('widgetFormPreview',this.widgetFormPreview);

    },
    methods:{
 // 预览 - 弹窗 - 确定
        handlePreviewSubmit(form, done) {
        if (done) {
            this.$alert(this.widgetModels).then(() => {
            done()
            }).catch(() => {
            done()
            })
        } else {
            this.$refs.form.validate((valid, done) => {
            if (valid) this.$alert(this.widgetModels).then(() => {
                done()
            }).catch(() => {
                done()
            })
            })
        }
        },
    }
}
</script>