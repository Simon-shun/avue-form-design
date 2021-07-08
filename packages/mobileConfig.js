export default [
    {
      title: '布局字段',
      list: [{
        type: 'group',
        label: '选项卡',
        icon: 'icon-group',
        span: 24,
        arrow: true,
        collapse: true,
        children:{
          column: []
        }
      }]
    },
    {
      title: '输入字段',
      list: [
        {
        type: 'input',
        label: '单行文本',
        icon: 'icon-input',
        span: 24,
      }, {
        type: 'password',
        label: '密码',
        icon: 'icon-password',
        span: 24,
      }, {
        type: 'textarea',
        label: '多行文本',
        icon: 'icon-textarea',
        span: 24,
      }, {
        type: 'number',
        label: '数字',
        icon: 'icon-number',
        controls: true,
        span: 24,
      }]
    },
    {
      title: '选择字段',
      list: [{
        type: 'radio',
        label: '单选框组',
        icon: 'icon-radio',
        tags: true,
        dicData: [
          { label: '选项一', value: '0' },
          { label: '选项二', value: '1' },
          { label: '选项三', value: '2' },
        ],
        span: 24,
        dicOption: 'static',
        props: {
          label: 'label',
          value: 'value'
        }
      }, {
        type: 'checkbox',
        label: '多选框组',
        icon: 'icon-checkbox',
        tags: true,
        dicData: [
          { label: '选项一', value: '0' },
          { label: '选项二', value: '1' },
          { label: '选项三', value: '2' },
        ],
        span: 24,
        dicOption: 'static',
        props: {
          label: 'label',
          value: 'value'
        }
      }, {
        type: 'select',
        label: '下拉选择器',
        icon: 'icon-select',
        dicData: [
          { label: '选项一', value: '0' },
          { label: '选项二', value: '1' },
          { label: '选项三', value: '2' },
        ],
        // 用于做级联配置
        cascaderItem: [],
        span: 24,
        dicOption: 'static',
        props: {
          label: 'label',
          value: 'value'
        }
      }]
    },
    {
      title: '上传字段',
      list: [{
        type: 'upload',
        label: '上传',
        icon: 'icon-upload',
        span: 24,
        showFileList: true,
        multiple: true,
        limit: 10,
        // props: {},
        propsHttp: {},
        canvasOption: {},
        headersConfig: [],
        dataConfig: []
      }],
    },
    {
      title: '日期时间字段',
      list: [{
        type: 'date',
        label: '日期',
        icon: 'icon-date',
        span: 24,
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd'
      }, {
        type: 'time',
        label: '时间',
        icon: 'icon-time',
        span: 24,
        format: 'HH:mm:ss',
        valueFormat: 'HH:mm:ss'
      }, {
        type: 'datetime',
        label: '日期时间',
        icon: 'icon-datetime',
        span: 24,
        format: 'yyyy-MM-dd HH:mm:ss',
        valueFormat: 'yyyy-MM-dd HH:mm:ss'
      }],
    },
    {
      title: '其他字段',
      list: [{
        type: 'switch',
        label: '开关',
        icon: 'icon-switch',
        span: 24,
        value: '0',
        dicData: [{ label: '', value: '0' }, { label: '', value: '1' }]
      }, {
        type: 'rate',
        label: '评价',
        icon: 'icon-star',
        span: 24,
        max: 5,
        value: 0,
        texts: ['极差', '失望', '一般', '满意', '惊喜'],
        color: '#ee0a24',
      }, {
        type: 'slider',
        label: '滑块',
        icon: 'icon-slider',
        span: 24,
        min: 0,
        max: 10
      }]
    }
  ]
  