import request from "@/utils/request";

export function getList(params) {
  return request({
    url: "/vue-admin-template/company2",
    method: "get",
    params,
  });
}
