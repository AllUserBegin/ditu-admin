import foo from './util';
import * as constants from './constants';

function CheckLogin()
{
  var user = sessionStorage.getItem("user");
  return null==user;
}

function login(data)
{
  
  sessionStorage.setItem("user", JSON.stringify(data));
  var user = sessionStorage.getItem("user");  
  foo.clearCookie("username");
}

function logout()
{
  var user = sessionStorage.getItem("user");
  if(null!=user)
  {
    sessionStorage.removeItem("user");
  }
}

function  getDomain() {
  return constants.dev;
}


export default{ CheckLogin, login,getDomain};