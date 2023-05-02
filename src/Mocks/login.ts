interface ILogin {
  Email: string;
  Senha: string;
}

export function ResponseLogin(request: ILogin) {
  console.log(request);
  return {
    status: 200,
    data: {
      mensagem: "LOGIN EFETUADO COM SUCESSO!",
    },
  };
}
