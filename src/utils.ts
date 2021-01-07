import { HANDLE_NAME_KEY } from '@/const';

export function saveHandleName(handleName: string) {
  localStorage.setItem(HANDLE_NAME_KEY, handleName);
}

export function getHandleName() {
  return localStorage.getItem(HANDLE_NAME_KEY);
}
