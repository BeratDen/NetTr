import isTokenNotValid from "./isTokenNotValid";

export default function validateJWTToken() {
  const endPoint = `${process.env.REACT_APP_API_URL}token/verify/`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("access") }),
  };
  fetch(endPoint, options)
    .then((response) => {
      response.json();
    })
    .then((x) => {
      // TODO: Refresh Token afterward
      console.log(x);
      isTokenNotValid(x);
    });
}
