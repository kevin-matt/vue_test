export default {
  route: {
    dashboard: '首页',
    fruInfo: 'FRU信息',
    fruInfoChild: '系统FRUs',
    deviceInfo: '设备信息',
    deviceInfoChild: '设备摘要信息',
    hddInfoChild: '硬盘状态信息',
    serverHealth: '服务器健康',
    sensorReadingChild: '传感器读数',
    eventLogChild: '事件日志',
    auditLogChild: '审核日志',
    deviceChangeLogChild: '设备更换日志',
    systemPostCodeChild: '系统开机自检代码',
    thermalManage: '散热管理',
    fanTachControlChild: '风扇转速控制',
    fanPolicyUpdateChild: '风扇策略更新',
    firmwareUpdate: '固件更新',
    configuration: '配置',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragSelect: '拖拽 Select',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    Table: 'Table',
    dynamicTable: '动态 Table',
    dragTable: '拖拽 Table',
    inlineEditTable: 'Table 内编辑',
    complexTable: '综合 Table',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！',
    switchLang: '切换为中文'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  },
  dashboard: {
    summaryInfoTitle: '摘要信息',
    summaryHeadName: '名称',
    summaryHeadInfo: '信息/版本',
    summaryHeadData: '日期',
    UIDTitle: '服务器UID灯',
    HostName: '主机名',
    deviceInfoTitle: '设备信息',
    deviceHeadName: '名称',
    deviceHeadStatus: '状态',
    deviceHeadStatus0: '不在位',
    deviceHeadStatus1: '在位',
    deviceHeadDetail: '详细信息',
    deviceHeadNum: '编号',
    chartTitle: '事件日志',
    chartLegend: '未使用条目',
    chartLegend2: '使用条目'
  },
  fruInfo: {
    sysFruTitle: '机箱信息',
    sysFruTitle2: '主板信息',
    sysFruTitle3: '产品信息',
    tableTitle: '标题',
    ChassisType: '机箱类型',
    ChassisPartNumber: '机箱零件号',
    ChassisSerial: '机箱序列号',
    ChassisExtra: '机箱客户自定义',
    BoardMfgDate: '制造日期时间',
    BoardMfg: '主板制造商名称',
    BoardProduct: '主板产品名称',
    BoardSerial: '主板序列号',
    BoardPartNumber: '主板零件号',
    BoardExtra: '主板客户自定义',
    ProductManufacturer: '产品制造商名称',
    ProductName: '产品名称',
    ProductPartNumber: '产品零件号',
    ProductVersion: '产品版本号',
    ProductSerial: '产品序列号',
    ProductAssetTag: '产品资产标签',
    ProductExtra: '产品客户自定义'
  },
  deviceInfo: {
    deviceTitle: '设备摘要信息',
    typeName: '类型名',
    number: '编号',
    status: '状态',
    detail: '详细信息',
    present: '在位',
    absent: '不在位'
  },
  hddInfo: {
    hddTitle: '硬盘状态信息',
    hddBack: '硬盘背板',
    hddSlot: '硬盘插槽',
    hddType: '硬盘类型',
    hddPresent:	'硬盘在位',
    hddError: '硬盘错误',
    present: '在位',
    absent: '不在位'
  },
  sensorReading: {
    sensorReadingTitle: '传感器读数',
    name: '名称',
    reading: '读值',
    sensorType: '传感器类型',
    unit: '单位',
    status: '状态',
    placeholder: '请选择',
    'Reading Period Disabled': '停止刷新 (0s)',
    'Reading Period': '秒刷新一次',
    'NA': 'NA',
    'Normal': '正常',
    'Normal State': '正常状态',
    'Abnormal': '不正常',
    'Disabled': '禁用',
    'degrees C': '摄氏度',
    'degrees F': '华氏度',
    'degrees K': '开氏度',
    'Volts': '伏特',
    'Amps': '安培',
    'Watts': '瓦特',
    'Joules': '焦耳',
    'Coulombs': '库仑',
    'VA': 'VA',
    'Nits': '尼特',
    'lumen': '流明',
    'lux': '勒克司',
    'Candela': '坎德拉',
    'kPa': 'kPa',
    'PSI': 'PSI',
    'Newton': '牛顿',
    'CFM': 'CFM',
    'RPM': 'RPM',
    'Hz': '赫兹',
    'microsecond': '微秒',
    'millisecond': '毫秒',
    'second': '秒',
    'minute': '分',
    'hour': '时',
    'day': '天',
    'week': '周',
    'mil': '密耳',
    'inches': '英寸',
    'feet': '英尺',
    'cu in': '立方英寸',
    'cu feet': '立方英尺',
    'mm': '毫米',
    'cm': '厘米',
    'm': '米',
    'cu cm': '立方厘米',
    'cu m': '立方米',
    'liters': '公升',
    'fluid ounce': '液盎司',
    'radians': '弧度',
    'steradians': '球面度',
    'revolutions': '转速',
    'cycles': '周期',
    'gravities': '重力',
    'ounce': '盎司',
    'pound': '镑',
    'ft-lb': '英尺-磅',
    'oz-in': '盎司-英寸',
    'gauss': '高斯',
    'gilberts': 'gilberts',
    'henry': '亨利',
    'millihenry': '毫亨',
    'farad': '法拉',
    'microfarad': '微法',
    'ohms': '欧姆',
    'siemens': '西门子',
    'mole': '摩尔',
    'becquerel': 'becquerel',
    'PPM': 'PPM',
    'Decibels': '分贝',
    'DbA': 'DbA',
    'DbC': 'DbC',
    'gray': 'gray',
    'sievert': 'sievert',
    'color temp deg K': 'color temp deg K',
    'bit': '比特',
    'kilobit': '千比特',
    'megabit': '兆比特',
    'gigabit': '吉比特',
    'byte': '字节',
    'kilobyte': '千字节',
    'megabyte': '兆字节',
    'gigabyte': '吉字节',
    'word': 'word',
    'dword': '双字节',
    'qword': '四字节',
    'line': 'line',
    'hit': '命中',
    'miss': '失误',
    'retry': '重试',
    'reset': '重置',
    'overrun': 'overrun',
    'underrun': 'underrun',
    'collision': '碰撞',
    'packets': '封装',
    'messages': '消息',
    'characters': 'characters',
    'error': '错误',
    'correctable error': '可修正的错误',
    'uncorrectable error': '无法修正的错误',
    'fatal error': '致命的错误',
    'grams': '克',
    'Lower Non-critical - going low': '低非临界 － 降低',
    'Lower Non-critical - going high': '低非临界 － 升高',
    'Lower Critical - going low': '低临界 － 降低',
    'Lower Critical - going high': '低临界 － 升高',
    'Lower Non-recoverable - going low': '低不可恢复 － 降低',
    'Lower Non-recoverable - going high': '低不可恢复 － 升高',
    'Upper Non-critical - going low': '高非临界 － 降低',
    'Upper Non-critical - going high': '高非临界 － 升高',
    'Upper Critical - going low': '高临界 － 降低',
    'Upper Critical - going high': '高临界 － 升高',
    'LUpper Non-recoverable - going low': '高不可恢复 － 降低',
    'Upper Non-recoverable - going high': '高不可恢复 － 升高',
    'Transition to Idle': '转至空闲',
    'Transition to Active': '转至活动',
    'Transition to Busy': '转至忙碌',
    'State Deasserted': '解除活动状态',
    'State Asserted': '进入活动状态',
    'Predictive Failure deasserted': '预测错误-非断言',
    'Predictive Failure asserted': '预测错误-断言',
    'Limit Not Exceeded': '未超出限制',
    'Limit Exceeded': '超出限制',
    'Performance Met': '性能满足',
    'Performance Lags': '性能滞后',
    'transition to OK': '转至 OK',
    'transition to Non-critical from OK': '从 OK 转至非临界',
    'transition to Critical from less severe': '从不太严重转至临界',
    'transition to Non-recoverable from less severe': '从不太严重转至不可恢复',
    'transition to Non-critical from more severe': '从更严重转至非临界',
    'transition to Critical from Non-recoverable': '从不可恢复转至临界',
    'transition to Non-recoverable': '转至不可恢复',
    'Monitor': '监控器',
    'Informational': '信息',
    'Device Removed / Device Absent': '设备移除 / 设备不存在',
    'Device Inserted / Device Present': '插入设备 / 设备存在',
    'Device Disabled': '禁用设备',
    'Device Enabled': '启用设备',
    'transition to Running': '转至运行',
    'transition to In Test': '转至测试',
    'transition to Power Off': '转至关机',
    'transition to On Line': '转至上线',
    'transition to Off Line': '转至下线',
    'transition to Off Duty': '转至下班',
    'transition to Degraded': '转至降级',
    'transition to Power Save': '转至节能',
    'Install Error': '安装错误',
    'Fully Redundant': '完全冗余',
    'Redundancy Lost': '冗余丢失',
    'Redundancy Degraded': '冗余降级',
    'Non-redundant:Sufficient Resources from Redundant': '非冗余：从冗余变为充足',
    'Non-redundant:Sufficient Resources from Insufficient Resources': '非冗余：从不足变为充足',
    'Non-redundant:Insufficient Resources': '非冗余：资源不足',
    'Redundancy Degraded from Fully Redundant': '从完全冗余变为冗余降级',
    'Redundancy Degraded from Non-Redundant': '从非冗余变为冗余降级',
    'D0 Power State': 'D0 电源状态',
    'D1 Power State': 'D1 电源状态',
    'D2 Power State': 'D2 电源状态',
    'D3 Power State': 'D3 电源状态',
    'General Chassis intrusion': '一般机箱入侵',
    'Drive Bay intrusion': '驱动插槽入侵',
    'I/O Card area intrusion': 'I/O卡区域入侵',
    'Processor area intrusion': '处理器区域入侵',
    'LAN Leash Lost': 'LAN Leash Lost',
    'Unauthorized dock': '未认证的Dock',
    'FAN area intrusion': '风扇区域入侵',
    'Secure Mode (Front Panel Lockout) Violation attempt': '违规尝试锁定前面板',
    'Pre-boot Password Violation - user password': 'pre-boot 用户密码违规',
    'Pre-boot Password Violation attempt - setup password': 'pre-boot 设定密码违规',
    'Pre-boot Password Violation - network boot password': 'pre-boot 网络启动密码违规',
    'Other pre-boot Password Violation': 'Pre-boot 其它密码违规',
    'Out-of-band Access Password Violation': 'Out-of-band访问密码违规',
    'IERR': 'IERR',
    'Thermal Trip': '极限温度',
    'FRB1/BIST failure': 'FRB1/BIST 故障',
    'FRB2/Hang in POST failure': 'FRB2/Hang 开机自检故障',
    'FRB3/Processor Startup/Initialization failure': 'FRB3/处理器启动/初始化失败',
    'Configuration Error': '配置错误',
    'SM BIOS Uncorrectable CPU-complex Error': 'SM BIOS无法更正的CPU复杂错误',
    'Processor Presence detected': '检测到处理器存在',
    'Processor disabled': '禁用处理器',
    'Terminator Presence Detected': '检测到终结器存在',
    'Processor Automatically Throttled': '处理器自动调节',
    'Machine check exception': '机器检查异常',
    'Correctable Machine Check Error': '可修正的机器检查错误',
    'Presence detected': '检测到存在',
    'Power Supply Failure detected': '检测到电源故障',
    'Predictive Failure': '可预测故障',
    'Power Supply input lost': '电源AC电丢失',
    'Power Supply input lost or out-of-range': 'AC电丢失或超出范围',
    'Power Supply input out-of-range but present': 'AC电存在但超出范围',
    'Configuration error': '配置错误',
    'Power Supply Inactive': '电源不活跃',
    'Power Off / Power Down': '关机/掉电',
    '240VA Power Down': '240伏安电源关闭',
    'Interlock Power Down': '联锁断电',
    'AC lost / Power input lost': 'AC电丢失',
    'Soft Power Control Failure': '软电源控制故障',
    'Correctable ECC': '可修正的ECC',
    'Uncorrectable ECC': '不可修正的ECC',
    'Parity': '奇偶校验位',
    'Memory Scrub Failed': '内存擦除失败',
    'Memory Device Disabled': '内存设备禁用',
    'Correctable ECC / other correctable memory error logging limit reached': '达到可修正的ECC日志记录限制',
    'Spare': '备用内存',
    'Memory Automatically Throttled': '内存自动调节',
    'Critical Overtemperature': '临界过热',
    'Drive Present': '驱动存在',
    'Drive Fault': '驱动故障',
    'Hot Spare': '热备份',
    'Consistency Check / Parity Check in progress': '一致性检查/奇偶校验正在进行中',
    'In Critical Array': '在临界阵列',
    'In Failed Array': '在故障阵列',
    'Rebuild/Remap in progress': '重新建立/重新对应 进行中',
    'Rebuild/Remap Aborted': '重新建立/重新对应 已中止',
    'System Firmware Error': '系统固件错误',
    'System Firmware Hang': '系统固件hang住',
    'System Firmware Progress': '系统固件进展',
    'Correctable Memory Error Logging Disabled': '禁用可修正的内存错误日志记录',
    'Event Type Logging Disabled': '禁用事件类型日志',
    'Log Area Reset/Cleared': '日志区重置/清除',
    'All Event Logging Disabled': '禁用所有事件日志',
    'SEL full': '日志满了',
    'SEL Almost Full': '日志几乎要满了',
    'Correctable Machine Check Error Logging Disabled': '禁用可修正的机器检查错误日志记录',
    'BIOS Watchdog Reset': 'BIOS Watchdog重启',
    'OS Watchdog Reset': 'OS Watchdog 重启',
    'OS Watchdog Shut Down': 'OS Watchdog关闭',
    'OS Watchdog Power Down': 'OS Watchdog关机',
    'OS Watchdog Power Cycle': 'OS Watchdog循环开机',
    'OS Watchdog NMI / Diagnostic Interrupt': 'OS Watchdog NMI/Diag中断',
    'OS Watchdog Expired, status only': 'OS Watchdog超期',
    'OS Watchdog pre-timeout Interrupt, non-NMI': 'OS Watchdog预超时非NMI中断',
    'System Reconfigured': '系统重新配置',
    'OEM System Boot Event': 'OEM 系统启动事件',
    'Undetermined system hardware failure': '未确认的系统硬体故障',
    'Entry added to Auxiliary Log': '新增栏位到辅助日志',
    'PEF Action': 'PEF 操作',
    'Timestamp Clock Sync': '时间戳时钟同步',
    'Front Panel NMI / Diagnostic Interrupt': '前面板NMI/Diag 中断',
    'Bus Timeout': '总线超时',
    'I/O channel check NMI': 'I/O通道检查NMI',
    'Software NMI': '软件NMI',
    'PCI PERR': 'PCI PERR',
    'PCI SERR': 'PCI SERR',
    'EISA Fail Safe Timeout': 'EISA Fail Safe 超时',
    'Bus Correctable Error': '总线可更改的错误',
    'Bus Uncorrectable Error': '总线不可更改的错误',
    'Fatal NMI': '致命的NMI',
    'Bus Fatal Error': '总线致命错误',
    'Bus Degraded': '总线降级',
    'Power Button pressed': '电源按钮被按下',
    'Sleep Button pressed': '睡眠按钮被按下',
    'Reset Button pressed': '重启按钮被按下',
    'FRU latch open': 'FRU latch打开',
    'FRU service request button': 'FRU服务请求按钮',
    'Cable/Interconnect is connected': '电缆/互连连接 ',
    'Configuration Error - Incorrect cable connected': '配置错误-连接的电缆有误',
    'Initiated by power up': '开机启动',
    'Initiated by hard reset': '硬重启启动',
    'Initiated by warm reset': '热重启启动',
    'User requested PXE boot': '用户要求PXE启动',
    'Automatic boot to diagnostic': '自动启动到diagnostic',
    'OS / run-time software initiated hard reset': 'OS发起的冷重启',
    'OS / run-time software initiated warm reset': 'OS发起的热重启',
    'System Restart': '系统重启',
    'No bootable media': '没有可引导的媒介',
    'Non-bootable diskette left in drive': '没有剩余的可引导磁盘驱动器',
    'PXE Server not found': '未找到PXE服务器',
    'Invalid boot sector': '无效的引导扇区',
    'Timeout waiting for user selection of boot source': '等待用户选择启动源超时',
    'A: boot completed': 'A:启动完成',
    'C: boot completed': 'C:启动完成',
    'PXE boot completed': 'PXE 启动完成',
    'Diagnostic boot completed': 'Diagnostic 启动完成',
    'CD-ROM boot completed': 'CD-ROM 启动完成',
    'ROM boot completed': 'ROM启动完成',
    'boot completed - boot device not specified': '启动完成-设备不清楚',
    'Base OS/Hypervisor Installation started': '基本操作系统/管理程序安装开始',
    'Base OS/Hypervisor Installation completed': '基本操作系统/管理程序安装完成',
    'Base OS/Hypervisor Installation aborted': '基本操作系统/管理程序安装中止',
    'Base OS/Hypervisor Installation failed': '基本操作系统/管理程序安装失败',
    'Critical stop during OS load / initialization': 'OS加载/初始化过程关键性中止',
    'Run-time Critical Stop': 'Run-time关键性终止',
    'OS Graceful Stop': 'OS正常停止',
    'OS Graceful Shutdown': 'OS正常关机',
    'Soft Shutdown initiated by PEF': 'PEF发起的软关机',
    'Agent Not Responding': '代理无回应',
    'Fault Status asserted': '进入错误状态',
    'Identify Status asserted': '进入识别状态',
    'Slot / Connector Device installed/attached': '插槽/接口设备安装/附上',
    'Slot / Connector Ready for Device Installation': '插槽/接口准备好安装设备',
    'Slot/Connector Ready for Device Removal': '插槽/接口准备好移除设备',
    'Slot Power is Off': '插槽断电',
    'Slot / Connector Device Removal Request': '请求移除插槽/接口设备',
    'Interlock asserted': '进入连锁状态',
    'Slot is Disabled': '插槽禁用',
    'Slot holds spare device': '插槽有备用设备',
    'S0/G0 working': 'S0/G0:工作状态',
    'S1 sleeping with system h/w & processor context maintained': 'S1:系统硬体休眠中,处理器上下文已维护',
    'S2 sleeping, processor context lost': 'S2:处理器上下文丢失',
    'S3 sleeping, processor & h/w context lost, memory retained.': 'S3:处理器和硬体上下文丢失,内存保留',
    'S4 non-volatile sleep / suspend-to disk': 'S4:非易失性休眠/挂起到硬盘',
    'S5 / G2 soft-off': 'S5/G2:软关机',
    'S4 / S5 soft-off, particular S4 / S5 state cannot be determined': 'S4/S5:软关机,不能确定特定的S4/S5状态',
    'G3 / Mechanical Off': 'G3:机械性关机',
    'Sleeping in an S1, S2, or S3 states': 'S1/S2/S3状态休眠',
    'G1 sleeping': 'G1:休眠',
    'S5 entered by override': 'S5:通过重写输入',
    'Legacy ON state': 'Legacy ON 状态',
    'Legacy OFF state': 'Legacy OFF 状态',
    'Unknown': '未知',
    'Timer expired': '定时器到期',
    'Hard Reset': '硬重启',
    'Power Down': '关机',
    'Power Cycle': '循环开机',
    'Timer interrupt': '定时器中断',
    'platform generated page': '平台产生的页面',
    'Entity Absent': '实体不存在',
    'Entity Disabled': '实体被禁用',
    'Entity Present': '实体存在',
    'platform generated LAN alert': '平台产生的LAN alert',
    'Platform Event Trap generated': '平台产生的event trap',
    'platform generated SNMP trap': '平台产生SNMP trap',
    'LAN Heartbeat Lost': 'LAN Heartbeat丢失',
    'LAN Heartbeat': 'LAN Heartbeat',
    'sensor access degraded or unavailable': '传感器访问降级或者不可用',
    'controller access degraded or unavailable': '控制器访问降级或者不可用',
    'management controller off-line': '管理控制器离线',
    'management controller unavailable': '管理控制器不可用',
    'Sensor failure': '传感器故障',
    'FRU failure': 'FRU故障',
    'battery low': '电池低',
    'battery failed': '电池故障',
    'battery presence detected': '检测到电池存在',
    'Session Activated': '会话激活',
    'Session Deactivated': '会话使无效',
    'Invalid Username or Password': '无效的用户名或者密码',
    'Invalid password disable': '禁用无效密码',
    'Hardware change detected with associated Entity': '检测到与实体相关的硬件改变',
    'Firmware or software change detected with associated Entity': '检测到和实体相关的固件或软件改变',
    'Hardware incompatibility detected with associated Entity': '检测大和实体相关的硬件不兼容',
    'Firmware or software incompatibility detected with associated Entity': '检测到和实体相关的固件或软件不兼容',
    'Entity is of an invalid or unsupported hardware version': '实体的硬件版本无效或不支持',
    'Entity contains an invalid or unsupported firmware or software version': '实体的固件或软件版本无效或不支持',
    'Hardware Change detected with associated Entity was successful': '检测到与实体相关的硬件改变成功',
    'Software or F/W Change detected with associated Entity was successful': '检测到和实体相关的固件或软件改变成功',
    'FRU Not Installed': 'FRU未安装',
    'FRU Inactive': 'FRU未活动',
    'FRU Activation Requested': 'FRU请求激活',
    'FRU Activation In Progress': 'FRU激活中',
    'FRU Active': 'FRU活动中',
    'FRU Deactivation Requested': 'FRU请求失活',
    'FRU Deactivation In Progress': 'FRU失活中',
    'FRU Communication Lost': 'FRU通信丢失',
    'None': '',
    'Platform Security Violation Attempt': '平台安全性违规尝试',
    'Other Units-based Sensor': '其它基于单位的传感器',
    'Drive Slot': '驱动插槽',
    'Button / Switch': '按钮/开关',
    'Microcontroller / Coprocessor': '微控制器/核心处理器',
    'System Boot / Restart Initiated': '系统启动/重启引发',
    // sensor type
    'OEM': 'OEM',
    'reserved': '保留',
    'Temperature': '温度',
    'Voltage': '电压',
    'Current': '电流',
    'Fan': '风扇',
    'Physical Security': '物理安全',
    'Platform Security': '平台安全',
    'Processor': '处理器',
    'Power Supply': '电源',
    'Power Unit': '电力装置',
    'Cooling Device': '冷却设备',
    'Other': '其它',
    'Memory': '内存',
    'Drive Slot / Bay': '驱动器槽',
    'POST Memory Resize': '内存后调整',
    'System Firmwares': '系统固件',
    'Event Logging Disabled': '禁用事件日志',
    'Watchdog1': '看门狗1',
    'System Event': '系统事件',
    'Critical Interrupt': '紧急中断',
    'Button': '按钮',
    'Module / Board': '模块/主板',
    'Microcontroller': '微控制器',
    'Add-in Card': '外插卡',
    'Chassis': '机箱',
    'Chip Set': '芯片组',
    'Other FRU': '其它FRU',
    'Cable / Interconnect': '电缆/互连',
    'Terminator': '终结器',
    'System Boot Initiated': '系统启动',
    'Boot Error': '启动故障',
    'OS Boot': 'OS启动',
    'OS Critical Stop': 'OS严重停止',
    'Slot / Connector': '插槽/连接器',
    'System ACPI Power State': '系统ACPI电源状态',
    'Watchdog2': '看门狗2',
    'Platform Alert': '平台警报',
    'Entity Presence': '实体存在',
    'Monitor ASIC': '监控专用ASIC',
    'LAN': 'LAN',
    'Management Subsys Health': '管理子系统健康',
    'Battery': '电池',
    'Session Audit': '会话审计',
    'Version Change': '版本改变',
    'FRU State': 'FRU状态'
  },
  eventLog: {
    eventLogTitle: '事件日志',
    btn1: '重新载入',
    btn2: '清理日志',
    btn3: '导出日志',
    Num: 'ID',
    Owner: '所有者',
    WarningLevel: '警告级别',
    Time: '时间',
    Name: '名称',
    Type: '类型',
    Description: '描述',
    Info: '信息',
    Warning: '警告',
    Error: '严重'
  },
  auditLog: {
    auditLogTitle: '审核日志',
    btn1: '导出日志',
    btn2: '清理日志',
    Num: 'ID',
    Hostname: '主机名',
    UserName: '用户名',
    ServiceName: '服务名称',
    Client_ip: '客户端IP',
    Operation: '操作',
    Time: '时间'
  },
  deviceChangeLog: {
    deviceChangeLogTitle: '设备更换日志',
    btn1: '清理日志',
    Num: 'ID',
    Hostname: '主机名',
    UserName: '用户名',
    ServiceName: '服务名称',
    Client_ip: '客户端IP',
    Operation: '操作',
    Time: '时间'
  },
  systemPostCode: {
    systemPostCodeTitle: '系统开机自检代码',
    currentPostCode: '当前开机自检代码',
    postCodeHistory: '开机自检代码历史记录'
  },
  fanTachControl: {
    fanTachControlTitle: '风扇信息',
    ID: 'ID',
    status: '状态',
    speed: '当前转速 (RPM)',
    cycle: '占空比 (%)',
    success: '正常',
    error: '异常',
    info: '暂时不可用',
    fanTachControlTitle2: '转速控制',
    manual: '手动控制风扇',
    auto: '自动控制风扇',
    pwmId: 'PWM ID',
    speedControl: '转速控制 (%)',
    fanControl: '控制风扇',
    placeholder: '输入20~100',
    submit: '提交'
  },
  fanPolicyUpdate: {
    fanPolicyUpdateTitle: '风扇策略更新',
    uploadTip: '只能上传文件名为 FSC_temp.dat 的文件',
    step1: '选择文件',
    step2: '上传文件',
    step3: '更新策略',
    success: '更新成功',
    error: '更新失败',
    return: '重新选择文件',
    loading: '上传文件中，请稍候...',
    removeTip: '确定移除'
  },
  firmwareUpdate: {
    BIOSTitle: 'BIOS固件更新',
    BMCTitle: 'BMC固件更新',
    BackupBMCTitle: '备用BMC固件更新',
    CPLDTitle: 'CPLD固件更新',
    BIOSUploadTip: '文件类型必须为 .bin，并且文件大小上限为 8MB',
    BMCUploadTip: '文件类型必须为 .tar，并且文件大小上限为 64MB',
    CPLDUploadTip: '文件类型必须为 .aje，并且文件大小上限为 1MB'
  },
  configuration: {
    configurationTitle: '配置',
    userManage: '用户管理',
    networkSetting: '网络设置',
    timeSetting: '日期 & 时间',
    ntpSetting: 'NTP 设置',
    serivceManage: '服 务',
    ldapSetting: 'LDAP/AD',
    smtpSetting: 'SMTP 设置',
    restore: '保存 & 恢复',
    powerOnMode: '上电恢复',
    powerCapping: '用电控制',
    snmpSetting: 'SNMP 设置',
    trapSetting: 'Trap 设置',
    sessionManage: '会话管理',
    ipAccessControl: 'IP访问控制',
    bootOptionSetting: '启动设置',
    dualMirrorSetting: '双镜像设置',
    userManageConfig: {
      userManageConfigTitle: '用户管理',
      ID: 'ID',
      userName: '用户名',
      userPrivilege: '用户权限',
      userEnable: '启用 / 停用',
      action: '操作',
      enable: '启用',
      disable: '停用',
      callback: '回叫',
      user: '用户',
      operator: '操作者',
      administrator: '管理员',
      OEM: 'OEM',
      access: '无法访问',
      add: '新增',
      modify: '修改',
      delete: '删除',
      addUserTitle: '新增用户',
      modifyUserTitle: '修改用户',
      password: '更改密码',
      passwordSize: '密码大小',
      passwordSize16: '16 字符',
      passwordSize20: '20 字符',
      oldPassword: '旧密码',
      newPassword: '新密码',
      confirmPass: '确认密码',
      passExpiration: '密码有效期（天）',
      placeholder: '请选择用户权限',
      enableUser: '启用用户',
      cancelBtn: '取 消',
      confirmBtn: '提 交',
      validateUserName: '请输入用户名',
      validatePass: '请输入密码',
      validatePassAgain: '请再次输入密码',
      validatePassInconsistent: '两次输入密码不一致!',
      validateOldPassInconsistent: '新旧密码不能一致!',
      validatePassExpiration: '请输入密码有效期',
      userNameHelp: "至少一个字符。首字符必须是'a-z','A-Z','0-9','_'，",
      userNameHelp2: "其后字符必须是'a-z','A-Z','0-9', '_', '-', '.'。",
      userNameHelp3: "另外，'$'仅可以用作最后一个字符，不能用作开头",
      userNameHelp4: '用户名不支持中文字符',
      newPasswordHelp: '至少一个字符。可以是ASCII表中的从空格到波浪线的任何字符。',
      comfirmMsg: '此操作将永久删除该用户, 是否继续?',
      comfirmTitle: '提示',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      successMsg: '删除成功!',
      errorMsg: '删除失败!',
      cancelMsg: '已取消删除'
    },
    networkSettingConfig: {
      networkSettingConfigTitle: '管理设备的网络设置',
      lanFail: '局域网故障转移',
      lanEnable: '启用',
      lanDisable: '禁用',
      lanInterface: 'LAN接口',
      lanInterfacePlaceholder: '请选择LAN接口',
      macAddress: 'MAC地址',
      macAddressPlaceholder: '请输入MAC地址',
      networkSettingConfigTitle2: 'IPv4 配置',
      autoIP: '自动获取IP地址（DHCP）',
      manualIP: '手动设置IP地址',
      IP: 'IP',
      IPPlaceholder: '请输入IP',
      mask: '掩码',
      maskPlaceholder: '请输入掩码',
      gateway: '网关',
      gatewayPlaceholder: '请输入网关',
      networkSettingConfigTitle3: 'IPv6 配置',
      ipv6Enable: 'IPv6 启用',
      ipv6Address: 'IPv6 地址',
      ipv6AddressPlaceholder: '请输入 IPv6 地址',
      addressPrefixLength: '地址前缀长度',
      addressPrefixLengthPlaceholder: '请输入地址前缀长度',
      networkSettingConfigTitle4: 'DNS 配置',
      primaryDNS: '主 DNS',
      primaryDNSPlaceholder: '请输入主 DNS',
      secondDNS: '次 DNS',
      secondDNSPlaceholder: '请输入次 DNS',
      networkSettingConfigTitle5: 'VLAN 配置',
      vlanEnable: 'VLAN 启用',
      vlanID: 'VLAN ID',
      vlanIDPlaceholder: '请输入 VLAN ID',
      vlanPriority: 'VLAN 优先级',
      vlanPriorityPlaceholder: '请输入 VLAN 优先级',
      confirmBtn: '提 交',
      comfirmMsg: '修改网络设置可能会导致所有的会话失效，需要重新登录网页，请确认是否继续?'
    },
    timeSettingConfig: {
      timeSettingConfigTitle: '日期 & 时间',
      currentTime: '当前时间',
      timePlaceholder: '请选择日期 & 时间',
      timeZone: '时区',
      timeZonePlaceholder: '请选择时区',
      comfirmMsg: '修改 BMC 时间 / 日期可能会导致网页会话结束，请问是否继续？',
      successMsg: '修改成功！',
      cancelMsg: '已取消修改'
    },
    ntpSettingConfig: {
      ntpSettingConfigTitle: 'NTP 设置',
      enable: '启用',
      OEM: 'OEM',
      ntpServer: 'NTP 服务器',
      ntpServerPlaceholder: '请输入 NTP 服务器',
      comfirmMsg: '同步 NTP 时间 / 日期可能会导致网页会话结束，请问是否继续？'
    },
    serivceManageConfig: {
      serivceManageConfigTitle: '服务管理',
      ID: 'ID',
      service: '服务',
      webService: 'WEB',
      kvmService: 'KVM',
      sshService: 'SSH',
      sessionTimeout: '会话超时（秒）',
      sessionTimeoutHelp: '输入范围：0 ~ 65534，0 表示无穷大',
      maxSession: '最大会话数',
      serviceSecurityPort: '服务安全端口',
      serviceUnSecurePort: '服务非安全端口',
      action: '操作',
      modify: '修改',
      comfirmMsg: '端口更改后，需要重新启动才能生效',
      validatePort: '值必须大于 0 且小于 65535',
      validatePortNum: '值必须为整数'
    },
    ldapSettingConfig: {
      ldapSettingConfigTitle: 'LDAP',
      ldapSettingConfigTitle2: 'AD',
      enable: '启用',
      server: '服务器',
      port: '端口',
      baseDN: '根DN',
      adminBindDN: '管理员绑定DN',
      adminBindPassword: '管理员绑定密码',
      userSearchDN: '用户搜索DN',
      userSearchDNHelp: '用户存储位置的默认LDAP路径',
      userSearchScope: '用户搜索范围',
      userIDAttribute: '用户ID属性',
      userPrivilege: '角色',
      validateServerIP: '输入限制: a~z 或 A~Z 或 0~9 或 . 或 -'
    },
    smtpSettingConfig: {
      smtpSettingConfigTitle: 'SMTP 设置',
      lanChannel: 'Lan 通道',
      lanChannelPlaceholder: '请选择 Lan 通道',
      smtpServer: 'SMTP 服务器',
      smtpServerPlaceholder: '请输入 SMTP 服务器',
      port: '端口',
      senderEmail: '寄件人电子邮件',
      senderEmailPlaceholder: '请输入寄件人电子邮件',
      authMethod: '验证方法',
      authMethodPlaceholder: '请选择验证方法',
      userName: '用户名',
      userNamePlaceholder: '请输入用户名',
      password: '密码',
      passwordPlaceholder: '请输入密码',
      enable: '启用',
      validateEmailAddr: '请输入合法的email地址'
    },
    snmpSettingConfig: {
      snmpSettingConfigTitle: 'SNMP 设置',
      enable: '启用',
      snmpVersion: 'SNMP 版本',
      RoCommunity: '只读团体名',
      RoCommunityPlaceholder: '请输入只读团体名',
      RwCommunity: '读写团体名',
      RwCommunityPlaceholder: '请输入读写团体名',
      userAccessMode: '用户访问模式',
      userName: '用户名',
      userNamePlaceholder: '请输入用户名',
      authMethod: '验证方法',
      authPassword: '验证密码',
      authPasswordPlaceholder: '请输入验证密码',
      confirmAuthPassword: '确认验证密码',
      confirmAuthPasswordPlaceholder: '请输入确认验证密码',
      encryptMethod: '加密方法',
      encryptPassword: '加密密码',
      encryptPasswordPlaceholder: '请输入加密密码',
      confirmEncryptPassword: '确认加密密码',
      confirmEncryptPasswordPlaceholder: '请输入确认加密密码',
      validatePassAgain: '请再次输入密码',
      validatePassInconsistent: '两次输入密码不一致!',
      validatePassLenght: '长度在 8 到 16 个字符'
    },
    powerOnModeConfig: {
      powerOnModeConfigTitle: '上电恢复策略',
      serverOn: '服务器常开',
      serverOff: '服务器常关',
      beforeDown: '服务器恢复掉电前状态',
      powerOnRandom: '延迟随机时间后上电',
      powerOnDelay: '延迟固定时间后上电',
      delayTime: '延迟（最大）时间（秒）',
      powerOnDelayTimePlaceholder: '请输入延迟（最大）时间'
    },
    powerCappingConfig: {
      powerCappingConfigTitle: '用电控制',
      powerEnable: '功耗限定启用',
      powerDisable: '功耗限定停用',
      powerLimit: '最大功耗限制（瓦特）',
      powerLimitPlaceholder: '请输入最大功耗限制',
      powerConsumLimit: '功耗限制冗余（瓦特）',
      powerConsumLimitPlaceholder: '请输入功耗限制冗余',
      currentTotalPower: '当前总功耗（瓦特）',
      powerLimitState: '功耗限制状态'
    },
    trapSettingConfig: {
      trapSettingConfigTitle: 'Trap 设置',
      alertLevel: '警报级别',
      unspecified: '不明',
      warningCritical: '警告和严重',
      critical: '严重',
      all: '所有',
      destinationType: '目的地类型',
      smtpReceiverMailAddr: 'SMTP 接收人电子邮件地址',
      smtpReceiverMailAddrPlaceholder: '请输入 SMTP 接收人电子邮件地址',
      smtpReceiverMailAddrErr: '请输入正确的邮件地址',
      smtpEmailSubject: 'SMTP 电子邮件主题',
      smtpEmailSubjectPlaceholder: '请输入 SMTP 电子邮件主题',
      smtpEmailContent: 'SMTP 电子邮件内容',
      smtpEmailContentPlaceholder: '请输入 SMTP 电子邮件内容',
      snmpDestAddr: 'SNMP目的地地址',
      snmpDestAddrPlaceholder: '请输入 SNMP目的地地址',
      snmpVersion: 'SNMP 版本',
      snmpEngineID: 'SNMP TRAP EngineID',
      snmpEngineIDPlaceholder: '请输入 SNMP TRAP EngineID',
      userName: '用户名',
      userNamePlaceholder: '请输入用户名',
      authMethod: '验证方法',
      authPassword: '验证密码',
      authPasswordPlaceholder: '请输入验证密码',
      confirmAuthPassword: '确认验证密码',
      confirmAuthPasswordPlaceholder: '请输入确认验证密码',
      encryptMethod: '加密方法',
      encryptPassword: '加密密码',
      encryptPasswordPlaceholder: '请输入加密密码',
      confirmEncryptPassword: '确认加密密码',
      confirmEncryptPasswordPlaceholder: '请输入确认加密密码',
      validatePassAgain: '请再次输入密码',
      validatePassInconsistent: '两次输入密码不一致!',
      validatePassLenght: '长度在 8 到 16 个字符'
    },
    sessionManageConfig: {
      sessionManageConfigTitle: '会话管理',
      ID: 'ID',
      type: '类型',
      IP: 'IP',
      userName: '用户名',
      time: '时间',
      action: '操作',
      delete: '删除',
      comfirmMsg: '此操作将删除用户会话, 是否继续?',
      comfirmTitle: '提示',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      successMsg: '删除成功!',
      errorMsg: '删除失败!',
      cancelMsg: '已取消删除'
    },
    ipAccessControlConfig: {
      ipAccessControlConfigTitle: 'IP访问控制',
      ID: 'ID',
      IP: 'IP',
      MACAddr: 'MAC地址',
      dateRange: '日期范围（BMC本地时间）',
      dateRangeForm: '日期范围',
      rule: '规则',
      allow: '允许',
      deny: '禁止',
      action: '操作',
      add: '新增',
      delete: '删除',
      comfirmMsg: '此操作将删除该会话, 是否继续?',
      comfirmTitle: '提示',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      successMsg: '删除成功!',
      errorMsg: '删除失败!',
      cancelMsg: '已取消删除',
      addTitle: '新增',
      datePolicy: 'Date 政策',
      startDate: '请选择开始日期',
      endDate: '请选择结束日期',
      validateMacAddr: 'IP / Mac 最少必须填一项',
      validateIPErr: '请输入合法的 IP',
      validateIPErr2: 'IP不能相同',
      validateMacAddrErr: '请输入正确的 MAC 地址'
    },
    bootOptionSettingConfig: {
      bootOptionSettingConfigTitle: '启动选项设置',
      bootType: '启动类型',
      timeliness: '时效性',
      bootOption: '启动选项',
      nextStartup: '仅用于下次启动',
      allStartup: '应用于所有启动',
      none: '无',
      pxe: '从PXE启动',
      hardDrive: '从硬盘启动',
      cd: '从CD / DVD启动',
      bios: '启动时进入 BIOS 设置',
      media: '从软盘 / 可移动媒体启动'
    }
  }
}
