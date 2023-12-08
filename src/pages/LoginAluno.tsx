import { FunctionComponent, useCallback } from "react";

const LoginAluno: FunctionComponent = () => {
  const onRectangle3Click = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  const onCadastreSeTextClick = useCallback(() => {
    // Please sync "Cadastro_aluno" to the project
  }, []);

  const onEsqueciMinhaSenhaClick = useCallback(() => {
    // Please sync "Recuperar_senha_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[883px] left-[0px] bg-maroon w-[1440px] h-[141px]" />
      <img
        className="absolute top-[186px] left-[0px] w-[1440px] h-[697px] object-cover"
        alt=""
        src="/design-sem-nome-3@2x.png"
      />
      <div className="absolute top-[375px] left-[566px] w-[353px] h-[293px] text-dimgray">
        <div className="absolute top-[0px] left-[0px] w-[353px] h-[293px]">
          <div className="absolute top-[29px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[296px] h-[65px] border-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[110px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[296px] h-[63px] border-[1px] border-solid border-gainsboro" />
          <div
            className="absolute top-[233px] left-[13px] rounded-8xs bg-brown shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[296px] h-[50px] cursor-pointer border-[1px] border-solid border-brown"
            onClick={onRectangle3Click}
          />
          <div className="absolute top-[249px] left-[130px] font-semibold text-white inline-block w-[87px] h-[17px]">
            Entrar
          </div>
          <div className="absolute top-[56px] left-[90px] font-medium inline-block w-[71px] h-[17px]">
            usuário
          </div>
          <div className="absolute top-[128px] left-[90px] font-medium inline-block w-20 h-4">
            senha
          </div>
          <div className="absolute top-[29px] left-[1px] rounded-8xs bg-darkgoldenrod w-[71px] h-[65px]" />
          <div className="absolute top-[111px] left-[1px] rounded-8xs bg-darkgoldenrod w-[71px] h-[62px]" />
        </div>
      </div>
      <div className="absolute top-[340px] left-[579px] text-[36px] font-medium inline-block w-[188px] h-[27px]">
        Login
      </div>
      <div className="absolute top-[676px] left-[579px] font-semibold inline-block w-[296px] h-[17px]">
        Não tem conta?
      </div>
      <div
        className="absolute top-[676px] left-[729px] font-semibold cursor-pointer"
        onClick={onCadastreSeTextClick}
      >
        <span>{` `}</span>
        <span className="text-midnightblue">Cadastre-se</span>
      </div>
      <b
        className="absolute top-[554px] left-[576px] lowercase text-midnightblue cursor-pointer"
        onClick={onEsqueciMinhaSenhaClick}
      >
        Esqueci minha senha
      </b>
      <div className="absolute top-[0px] left-[0px] bg-maroon w-[1448px] h-[186px]" />
      <img
        className="absolute top-[45px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
    </div>
  );
};

export default LoginAluno;
