export const util ={
    DOMAIN: "http://www.baidu.com", 
    getDomain() {
        return this.DOMAIN;
    },
compileStr(code) {
    var c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return escape(c);
  }, //加密函数
  uncompileStr(code) {
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
  }, //解密函数
  //设置cookie
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie =
      cname + "=" + this.compileStr(escape(cvalue)) + "; " + expires;
  },
  //获取cookie
  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1);
      if (c.indexOf(name) != -1) {
        var cnameValue = this.uncompileStr(
          unescape(c.substring(name.length, c.length))
        );
        return cnameValue;
      }
    }
    return "";
  },
  //清除cookie
  clearCookie(cname) {
    this.setCookie(cname, "", -1);
  }
}