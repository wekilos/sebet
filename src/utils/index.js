export const logout = () => {
  localStorage.removeItem("profile");
};

export const isLogin = () => {
  if (localStorage.getItem("profile")) {
    var data = JSON.parse(localStorage.getItem("profile"));
    if (data.token) {
      return true;
    } else {
      localStorage.removeItem("profile");
    }
  }
  return false;
};

export const isLoginAdmin = () => {
  if (localStorage.getItem("profile")) {
    var data = JSON.parse(localStorage.getItem("profile"));
    if (data.permission && data.token) {
      return true;
    } else {
      localStorage.removeItem("profile");
    }
  } else {
    return false;
  }
};
