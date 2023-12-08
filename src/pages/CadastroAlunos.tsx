import { FunctionComponent, useCallback } from "react";


const CadastroAluno: FunctionComponent = () => {
  const onRectangle6Click = useCallback(() => {
    // Please sync "Cadastro_ sucesso_aluno" to the project
  }, []);

  const onRectangle11Click = useCallback(() => {
    // Please sync "Início_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-dimgray font-inter">
      <div className="absolute top-[966px] left-[869px] text-[12px] font-semibold text-black">
        <span>{`Já tem conta? `}</span>
        <span className="text-mediumblue">Conecte-se</span>
      </div>
      <div className="absolute top-[878px] left-[0px] bg-maroon w-[1364px] h-[148px]" />
      <div className="absolute top-[2px] left-[0px] bg-maroon w-[1350px] h-[186px]" />
      <img
        className="absolute top-[54px] left-[78px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-1@2x.png"
      />
      <img
        className="absolute top-[54px] left-[78px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-1@2x.png"
      />
      <img
        className="absolute top-[183px] left-[0px] w-[1350px] h-[710px] object-cover"
        alt=""
        src="/design-sem-nome-2@2x.png"
      />
      <div className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_165px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-14 border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_132px)] left-[calc(50%_-_165px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_114px)] left-[calc(50%_-_62px)] font-medium inline-block w-[50px] h-[19px]">
        RA
      </div>
      <div className="absolute top-[calc(50%_+_22px)] left-[calc(50%_-_165px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <img
        className="absolute top-[calc(50%_+_99px)] left-[calc(50%_-_169px)] rounded-8xs w-[379px] h-[62px]"
        alt=""
        src="/rectangle-6.svg"
      />
      <div className="absolute top-[calc(50%_+_120px)] left-[calc(50%_-_62px)] font-medium inline-block w-48 h-[18px]">
        confirmar senha
      </div>
      <div
        className="absolute top-[calc(50%_+_210px)] left-[calc(50%_-_165px)] rounded-8xs bg-brown shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[371px] h-[55px] cursor-pointer"
        onClick={onRectangle6Click}
      />
      <div className="absolute top-[calc(50%_-_217px)] left-[calc(50%_-_165px)] text-[36px] font-medium text-black inline-block w-[247px] h-[29px]">
        Cadastre-se
      </div>
      <div className="absolute top-[calc(50%_+_228px)] left-[calc(50%_-_70px)] font-semibold text-white inline-block w-[204px] h-[19px]">
        Concluir Cadastro
      </div>
      <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_62px)] font-medium text-gray inline-block w-[212px] h-8">
        email
      </div>
      <div className="absolute top-[calc(50%_+_43px)] left-[calc(50%_-_62px)] font-medium inline-block w-[90px] h-[18px]">
        senha
      </div>
      <div className="absolute top-[calc(50%_-_132px)] left-[calc(50%_-_165px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_165px)] rounded-8xs bg-darkgoldenrod w-[89px] h-14" />
      <div className="absolute top-[calc(50%_+_22px)] left-[calc(50%_-_165px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_+_99px)] left-[calc(50%_-_165px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[54px]" />
      <div
        className="absolute top-[957px] left-[621px] bg-darkgoldenrod w-[98px] h-[26px] cursor-pointer"
        onClick={onRectangle11Click}
      />
      <b className="absolute top-[961px] left-[636px] text-[16px] text-white">
        VOLTAR
      </b>
    </div>
  );
};

export default CadastroAluno;
