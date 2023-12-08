import { FunctionComponent, useCallback } from "react";

const ConfiguracoesContaAluno: FunctionComponent = () => {
  const onResultadosTextClick = useCallback(() => {
    // Please sync "Resultados_aluno" to the project
  }, []);

  const onCertificadosTextClick = useCallback(() => {
    // Please sync "Certificados_aluno" to the project
  }, []);

  const onSubmissesTextClick = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  const onRectangle6Click = useCallback(() => {
    // Please sync "Configuracoes_conta_salva_aluno" to the project
  }, []);

  const onVOLTARTextClick = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[-27px] left-[-100px] bg-maroon w-[1552px] h-56" />
      <div className="absolute top-[889px] left-[-36px] bg-maroon w-[1488px] h-[164px]" />
      <img
        className="absolute top-[28px] left-[86px] w-[300px] h-[115px] object-cover"
        alt=""
        src="/unicap-1@2x.png"
      />
      <div className="absolute top-[233px] left-[676px] font-semibold inline-block w-[686px] h-11">
        {" "}
        Configurações
      </div>
      <div
        className="absolute top-[233px] left-[1065px] font-semibold cursor-pointer"
        onClick={onResultadosTextClick}
      >
        Resultados
      </div>
      <div
        className="absolute top-[233px] left-[912px] font-semibold cursor-pointer"
        onClick={onCertificadosTextClick}
      >
        Certificados
      </div>
      <div
        className="absolute top-[233px] left-[761px] font-semibold cursor-pointer"
        onClick={onSubmissesTextClick}
      >
        Submissões
      </div>
      <div
        className="absolute top-[233px] left-[673px] font-semibold cursor-pointer"
        onClick={onHomeTextClick}
      >
        Home
      </div>
      <div className="absolute top-[276px] left-[644px] box-border w-[736px] h-0.5 border-t-[2px] border-solid border-darkgoldenrod" />
      <div className="absolute top-[273px] left-[1186px] bg-peru w-[204px] h-1" />
      <div className="absolute top-[325px] left-[86px] text-[36px] font-semibold inline-block w-[468px] h-10">
        Configurações da Conta
      </div>
      <div className="absolute top-[385px] left-[627px] rounded-[50%] bg-darkgoldenrod w-[110px] h-[103px]" />
      <img
        className="absolute top-[406px] left-[658px] w-[45px] h-[61px] object-cover"
        alt=""
        src="/image-9@2x.png"
      />
      <div className="absolute top-[calc(50%_+_119px)] left-[calc(50%_-_191px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[293px] h-[46px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_57px)] left-[calc(50%_-_191px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[293px] h-[45px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_72px)] left-[calc(50%_-_110px)] font-medium text-dimgray inline-block w-[187px] h-[15px]">
        Aluno
      </div>
      <div className="absolute top-[calc(50%_+_182px)] left-[calc(50%_-_191px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[293px] h-[45px] border-[1px] border-solid border-gainsboro" />
      <div
        className="absolute top-[calc(50%_+_268px)] left-[calc(50%_-_110px)] rounded-8xs bg-darkgoldenrod shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[146px] h-[45px] cursor-pointer"
        onClick={onRectangle6Click}
      />
      <div className="absolute top-[calc(50%_+_281px)] left-[calc(50%_-_63px)] font-semibold text-white inline-block w-[161px] h-4">
        Salvar
      </div>
      <div className="absolute top-[calc(50%_+_133px)] left-[calc(50%_-_110px)] font-medium text-gray inline-block w-52 h-[26px]">
        aluno@email.com
      </div>
      <div className="absolute top-[calc(50%_+_200px)] left-[calc(50%_-_110px)] font-medium text-dimgray inline-block w-[187px] h-3.5">
        *****
      </div>
      <div className="absolute top-[calc(50%_+_57px)] left-[calc(50%_-_191px)] rounded-8xs bg-darkgoldenrod w-[70px] h-[45px]" />
      <div className="absolute top-[calc(50%_+_119px)] left-[calc(50%_-_191px)] rounded-8xs bg-darkgoldenrod w-[70px] h-[46px]" />
      <div className="absolute top-[calc(50%_+_182px)] left-[calc(50%_-_191px)] rounded-8xs bg-darkgoldenrod w-[70px] h-[45px]" />
      <div className="absolute top-[502px] left-[619px] bg-darkgoldenrod w-[126px] h-8" />
      <div className="absolute top-[509px] left-[663px] text-[16px] text-white inline-block w-[94px] h-[25px]">
        Upload
      </div>
      <img
        className="absolute top-[504px] left-[627px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/image-10@2x.png"
      />
      <div className="absolute top-[953px] left-[629px] rounded-[3px] bg-darkgoldenrod w-[81px] h-9" />
      <b
        className="absolute top-[962px] left-[640px] text-[14px] text-white cursor-pointer"
        onClick={onVOLTARTextClick}
      >
        VOLTAR
      </b>
    </div>
  );
};

export default ConfiguracoesContaAluno;
