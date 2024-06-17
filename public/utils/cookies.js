function definirCookie(cahve, valor) {
  document.cookie = `${cahve}=${valor};path=/`;
}

function obterCookie(cahve) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${cahve}=`))
    ?.split("=")[1];
}

function removerCookie(cahve) {
  document.cookie = `${cahve}=; expires=Thu, 01 Jan 1970 00:00:00`;
}

export { definirCookie, obterCookie, removerCookie };
