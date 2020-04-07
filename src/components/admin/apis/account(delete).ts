export function deleteAccount(data: any) {
  return {
    option: {
      method: "GET",
      url: "/admin-user/delete",
      data
    }
  }
}
