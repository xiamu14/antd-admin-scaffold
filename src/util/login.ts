const USER_INFO = "user_info";

interface User {
  nickname: string;
  accessToken: string;
  detail: Record<string, any>;
}

export const login = {
  isLogin: () => localStorage.getItem(USER_INFO),

  saveUserInfo: (user: User) => {
    localStorage.setItem(USER_INFO, JSON.stringify(user));
  },

  getUserInfo: () => {
    const userInfo: null | string = localStorage.getItem(USER_INFO);
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return null;
  },

  logout: () => {
    localStorage.removeItem(USER_INFO);
  },
};
