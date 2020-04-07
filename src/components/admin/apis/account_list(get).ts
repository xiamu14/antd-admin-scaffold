export function getAccountList(data: any) {
  return {
    option: {
      url: "/admin-user/index",
      method: "GET",
      data
    }
  }
}
