(function(window){
  function es(){
    var es = {};

    es.config = {
      name : "Easy Storage"
    }

    //Localstorage Add
    es.crtLSI = function(value, key){
      localStorage.setItem(value, JSON.stringify(key));
    }
    //Localstorage Add
    es.crtLSI = function(value, key){
      localStorage.setItem(value, JSON.stringify(key));
    }
    //Retrive Localstorage Item
    es.getLSI = function(key){
      return JSON.parse(localStorage[key] || null)
    }
    //Remove LocalStorage Item
    es.removeLSI = function(key){
      localStorage.removeItem(key)
    }
    //Clear LocalStorage
    es.clearLS = function(){
      localStorage.clear()
    }
    //Create Cookies
    es.crtCookie = function(key, value, expires,date){
      if (expires && date) {
        document.cookie = str1 + "=" + str2 + ";" + expires + "=" + date
      }else {
        document.cookie = str1 + "=" + str2;
      }
    }
    //Retrive Cookie
    es.getCookie = function(cookie){
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(cookie) == 0) {
          return c.substring(cookie.length, c.length);
        }
      }
      return "";
    }
    //Remove Cookie
    es.removeCookie = function(cookie){
      document.cookie = cookie + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    //Clear Cookies
    es.clearCookie = function(){
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
    //Save data to sessionStorage
    es.crtSS = function(key, value){
      sessionStorage.setItem(key, value)
    }
    //Get saved data from sessionStorage
    es.getSS = function(key){
      return sessionStorage.getItem(key)
    }
    // Remove saved data from sessionStorage
    es.delSS = function(key){
      sessionStorage.removeItem(key)
    }
    //Removed all saved data from sessionStorage
    es.clrSS = function(){
      sessionStorage.clear()
    }
    return es;
  }
  if(typeof(window.es) === 'undefined'){
    window.es= es()
  }
})(window);

console.log(es);
