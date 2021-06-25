// 特殊情况用的特殊处理代码
const url = 'http://m.xianmaiyangsheng.com/invitation?otherId=761173&time&otherCode'
String.prototype.replaceAll = function(s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2)
}

function getUrlPatam(url, name) {
  // 获取地址栏参数
  url = decodeURIComponent(url).split('?')[1].replaceAll('&', '_and_').split('_and_').map(item => item.split('='))
  url = url.filter(item => item[0] === name).flat()
  return url[1]
}
