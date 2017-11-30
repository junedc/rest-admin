export default [
  {
    name: '首页',
    url: '/',
    icon: 'icon-home',
  },
  {
    title: true,
    name: '内容管理',
  },
  {
    name: '专栏',
    url: '/rest/courses',
    icon: 'icon-notebook',
  },
  {
    name: '一条',
    url: '/rest/posts',
    icon: 'icon-control-play',
  },
  {
    name: '书',
    url: '/rest/posts?query={"where":{"is_book":true}}',
    icon: 'icon-control-play',
  },

  {
    title: true,
    name: '运营管理',
  },
  {
    name: '广告',
    url: '/rest/ads',
    icon: 'icon-camera',
  },
  {
    name: '订单',
    url: '/rest/orders',
    icon: 'icon-basket',
  },
  {
    name: '已售',
    url: '/rest/order_items',
    icon: 'icon-basket',
  },

  {
    name: '兑换码',
    url: '/rest/vouchers',
    icon: 'icon-key',
  },
  {
    name: '评论',
    url: '/rest/comments',
    icon: 'icon-bubble',
  },
  {
    name: '用户',
    url: '/rest/users',
    icon: 'icon-people',
  },

  {
    name: '第三方账号',
    url: '/rest/oauths',
    icon: 'icon-people',
  },


  {
    title: true,
    name: '系统设置',
  },
  {
    name: '充值价格表',
    url: '/rest/charges',
    icon: 'icon-list',
  },
  {
    name: '系统配置',
    url: '/rest/options',
    icon: 'icon-settings',
  },
  {
    name: '属性管理',
    url: '/rest/properties',
    icon: 'icon-puzzle',
  },

  {
    name: '分类管理',
    url: '/rest/categories',
    icon: 'icon-menu',
  },
  {
    name: '管理员',
    url: '/rest/admin_users',
    icon: 'icon-people',
  },
  {
    name: '注销',
    url: '/login',
    icon: 'icon-login',
  },

  {
    title: true,
    name: '底层数据',
  },
  {
    name: '设备',
    url: '/rest/devices',
    icon: 'icon-screen-smartphone',
  },
  {
    name: '短信记录',
    url: '/rest/sms',
    icon: 'icon-screen-smartphone',
  },
  {
    name: '支付记录',
    url: '/rest/pay_logs',
    icon: 'icon-list',
  },
  {
    name: '钱包记录',
    url: '/rest/wallet_logs',
    icon: 'icon-list',
  },
]