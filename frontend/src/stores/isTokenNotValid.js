export default function isTokenNotValid(jsonData) {
  if (jsonData.code && jsonData.code === "token_not_valid") {
    alert("Your Token is not valid Plase Login Again");
    return false;
  }
  return true;
}
