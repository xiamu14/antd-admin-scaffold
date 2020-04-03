export interface LoginRes {
  code: number;
  msg: "";
  data: {
    accessToken: string;
    isAdmin: number;
  };
}

export function loginApi(data: { name: string; pwd: string }) {
  return {
    option: {
      method: "POST",
      url: "/auth/login",
      data,
    },
  };
}
