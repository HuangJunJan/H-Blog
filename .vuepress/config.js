const headConf = require('./config/headConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
const friendLinkConf = require('./config/friendLinkConf')
const pluginsConf = require('./config/pluginsConf')

module.exports = {
  "title": "H's blog",
  "description": "This is H's blog and note!",
  "dest": "public",
  "base": '/H-Blog/',
  "head": headConf,
  "theme": "reco",
  "plugins": pluginsConf,
  "themeConfig": {
    "nav": navConf,
    "sidebar": "auto",
    "sidebar": sidebarConf,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": friendLinkConf,
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "Hay-J",
    "authorAvatar": "/avatar.png",
    "record": "这是一个简单的博客",
    "startYear": "2021",
    valineConfig: {
      appId: 'w8LRtv6dzdubvJLHbvOxOygc-gzGzoHsz',// your appId
      appKey: 'MQDIkHUgSV09XRsisfkepHeU', // your appKey
      avatar: '',
      notify: false,
      verify: false,
      visitor: true,
      placeholder: "在这写评论",
    }
  },
  "markdown": {
    "lineNumbers": true
  }
}