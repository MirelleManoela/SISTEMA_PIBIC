import { FunctionComponent, useCallback } from "react";

const CadastroSucessoAluno: FunctionComponent = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "Login_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-[36px] text-black font-inter">
      <div className="absolute top-[883px] left-[0px] bg-maroon-200 w-[1486px] h-[141px]" />
      <b className="absolute top-[477px] left-[373px]">
        Cadastro realizado com sucesso !
      </b>
      <div
        className="absolute top-[calc(50%_+_43px)] left-[calc(50%_-_185px)] rounded-[5px] bg-maroon-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[371px] h-[55px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[calc(50%_+_61px)] left-[calc(50%_-_62px)] text-[20px] font-semibold text-white inline-block w-[204px] h-[19px]">
        fazer login
      </div>
      <div className="absolute top-[-15px] left-[-28px] bg-maroon-100 w-[1394px] h-[186px]" />
      <img
        className="absolute top-[43px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
    </div>
  );
};

export default CadastroSucessoAluno;
