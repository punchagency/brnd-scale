import Cookies from "js-cookie";

export function setAuthToken(token: string) {
  Cookies.set("authToken", token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
}

export function getAuthToken() {
  return Cookies.get("authToken");
}

export function removeAuthToken() {
  Cookies.remove("authToken");
}
