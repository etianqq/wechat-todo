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

module.exports = {
  formatTime: formatTime,
  getRandomId: getRandomId
}
