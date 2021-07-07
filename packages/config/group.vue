<template>
  <div>
    <el-form-item label="图标">
      <el-select v-model="data.icon" placeholder="请选择">
        <el-option
          v-for="item in list"
          :key="item.value"
          :label="item.label"
          :value="item.value">
            <span style="float: left"><i :class="item.value"></i></span>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="开启折叠">
      <el-switch v-model="data.arrow"></el-switch>
    </el-form-item>
    <el-form-item label="默认展开"
                  v-if="data.arrow">
      <el-switch v-model="data.collapse"></el-switch>
    </el-form-item>
  </div>
</template>
<script>

export default {
  name: "config-group",
  props: ['data'],
  data() {
    return {
      iconList: [{
        label: 'element-ui',
      }],
      list: [ {value:'el-icon-info'}, {value:'el-icon-error'}, {value:'el-icon-success'}, {value:'el-icon-warning'}, {value:'el-icon-question'}]

    }
  }
}
</script>
<style lang="scss" scoped>
</style>
