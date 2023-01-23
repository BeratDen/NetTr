import routes from "./Routes";
import { generatePath } from "react-router";
import store from "./stores";
import { login, logout } from "./stores/auth";
import { closeModal, openModal } from "./stores/modal";

export const url = (path, params = {}) => {
  let lastRoute, url;
  path = path.split(".").map((p) => {
    if (!lastRoute) {
      lastRoute = routes.find((r) => r.name === p);
      url = lastRoute.path;
    } else {
      lastRoute = lastRoute.children.find((r) => r.name === p);
      url += "/" + lastRoute.path;
    }
  });
  return generatePath(url.replace(/\/\//gi, "/"), params);
};

export const loginHandle = (user) => {
  store.dispatch(login(user));
};
export const logoutHandle = () => {
  store.dispatch(logout());
};
export const openModalHandle = (modal) => {
  store.dispatch(openModal(modal));
};
export const closeModalHandle = () => {
  store.dispatch(closeModal());
};
