import { FunctionComponent, useCallback } from "react";

const RecuperarSenhaAluno: FunctionComponent = () => {
  const onRectangle4Click = useCallback(() => {
    // Please sync "Recuperar_senha_sucesso_aluno" to the project
  }, []);

  const onRectangle7Click = useCallback(() => {
    // Please sync "Login_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-white font-inter">
      <div className="absolute top-[883px] left-[0px] bg-maroon w-[1486px] h-[141px]" />
      <b className="absolute top-[329px] left-[518px] text-[36px] text-black">
        Recuperar Senha
      </b>
      <div className="absolute top-[calc(50%_+_67px)] left-[calc(50%_-_79px)] font-semibold inline-block w-[204px] h-[19px]">
        fazer login
      </div>
      <div className="absolute top-[-15px] left-[-28px] bg-maroon w-[1468px] h-[186px]" />
      <img
        className="absolute top-[43px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
      <div className="absolute top-[calc(50%_+_11px)] left-[calc(50%_-_192px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-14 border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_192px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_49px)] left-[calc(50%_-_89px)] font-medium text-dimgray inline-block w-[236px] h-[19px]">
        RA
      </div>
      <div
        className="absolute top-[calc(50%_+_127px)] left-[calc(50%_-_93px)] rounded-8xs bg-darkgoldenrod shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[141px] h-[55px] cursor-pointer"
        onClick={onRectangle4Click}
      />
      <div className="absolute top-[calc(50%_+_145px)] left-[calc(50%_-_53px)] font-semibold inline-block w-[204px] h-[19px]">
        Enviar
      </div>
      <div className="absolute top-[calc(50%_+_28px)] left-[calc(50%_-_89px)] font-medium text-gray inline-block w-[212px] h-8">
        Email
      </div>
      <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_192px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_+_11px)] left-[calc(50%_-_192px)] rounded-8xs bg-darkgoldenrod w-[89px] h-14" />
      <div
        className="absolute top-[937px] left-[617px] bg-darkgoldenrod w-[126px] h-[34px] cursor-pointer"
        onClick={onRectangle7Click}
      />
      <div className="absolute top-[944px] left-[calc(50%_-_69px)] text-[16px] font-semibold">
        VOLTAR
      </div>
    </div>
  );
};

export default RecuperarSenhaAluno;
