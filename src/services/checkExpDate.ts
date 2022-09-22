import { regStr } from "assets/initData";

export const checkExpDate = (content: string) => {
  const res = Array.from(content.matchAll(regStr));
  return res.length ? res.map((el) => el[0]).join(", ") : "";
};
