export function resetAccountPwd(data: {id: string}) {
  return {
    option: {
      url: "/admin-user/reset-password",
      method: "GET",
      data
    }
  }
}
