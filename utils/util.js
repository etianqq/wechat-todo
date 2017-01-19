function formatTime(dateStr) {
  var date = new Date(dateStr);
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getRandomId(){
  return Math.random() * 1000000000;
}

function getRandomImg(){
  var index = Math.ceil(Math.random() * 3);
  return "p" + index + '.jpg';
}

function getAudioConfig() {
  return {
    poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg?max_age=2592000',
    name: '安静',
    author: '周杰伦',
    src: 'http://dl.stream.qqmusic.qq.com/C400000amRvH3wxv56.m4a?vkey=2729342A5B228A41383E2E818F44B38BE857E08DA87B17B6B87E3F3DA5041F1A7D90347B86111E803C17740BB43B200F47628F8AFCB5EA3D&guid=6180405497&fromtag=30',
  }
}

module.exports = {
  formatTime: formatTime,
  getRandomId: getRandomId,
  getRandomImg: getRandomImg,
  getAudioConfig: getAudioConfig
}
