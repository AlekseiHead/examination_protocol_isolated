
import { useState, useEffect } from "react";

//Функция хранения введенных данных в localStorage
function getStorageValue(key: string, defaultValue: any) {
  // getting stored value
	const saved: any = localStorage.getItem(key);
	const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};