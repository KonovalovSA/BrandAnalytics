import { message } from "../library/toast.js";

export const checkName = function (name) {
  name = name.trim();

  if (!name) {
    message("Укажите имя", "error");
    return false;
  }

  return true;
};

export const checkLife = function (life) {
  if (isNaN(life)) {
    message("Необходимо ввести число", "error");
    return false;
  }
  if (life === "" || life === undefined) {
    message("Укажите количество жизней", "error");
    return false;
  }
  if (life < 0) {
    message("Значение не может быть меньше нуля", "error");
    return false;
  }

  return true;
};
