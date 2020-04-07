export function addAccount(data: any) {
  return {
    option: {
      method: "POST",
      url: "/admin-user/add",
      data
    }
  }
}
