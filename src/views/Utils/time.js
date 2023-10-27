/**
 * HH:MM yyyy/MM/dd 
 */
function getCurrentTime () {
  var date = new Date()
  var month = zeroFill(date.getMonth() + 1)
  var day = zeroFill(date.getDate())
  var hour = zeroFill(date.getHours())
  var minute = zeroFill(date.getMinutes())
  // var second = zeroFill(date.getSeconds())

  var curTime = hour + ":" + minute + " " + day + "/" + month + "/" + date.getFullYear()

  return curTime
}


/**
 *  yyyy/MM/dd HH:MM
 */
function getCurrentTimeFromYear2min () {
  var date = new Date()
  var month = zeroFill(date.getMonth() + 1)
  var day = zeroFill(date.getDate())
  var hour = zeroFill(date.getHours())
  var minute = zeroFill(date.getMinutes())

  var curTime = date.getFullYear() + "/" + month + "/" + day + " " + hour + ":" + minute

  return curTime
}



/**
* fill 0
*/
function zeroFill (i) {
  if (i >= 0 && i <= 9) {
    return "0" + i
  } else {
    return i
  }
}




export { getCurrentTime, getCurrentTimeFromYear2min }