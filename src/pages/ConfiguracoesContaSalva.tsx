import { FunctionComponent, useCallback } from "react";

const ConfiguracoesContaSalvaAlun: FunctionComponent = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

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

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[-27px] left-[-100px] bg-maroon w-[1552px] h-56" />
      <div className="absolute top-[889px] left-[-36px] bg-maroon w-[1488px] h-[164px]" />
      <div
        className="absolute top-[953px] left-[629px] rounded-[3px] bg-darkgoldenrod w-[81px] h-9 cursor-pointer"
        onClick={onRectangle2Click}
      />
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
      <div className="absolute top-[370px] left-[615px] rounded-[50%] bg-darkgoldenrod w-[110px] h-[103px]" />
      <img
        className="absolute top-[391px] left-[646px] w-[45px] h-[61px] object-cover"
        alt=""
        src="/image-9@2x.png"
      />
      <div className="absolute top-[calc(50%_+_104px)] left-[calc(50%_-_203px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[293px] h-[46px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_42px)] left-[calc(50%_-_203px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[293px] h-[45px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_57px)] left-[calc(50%_-_122px)] font-medium text-dimgray inline-block w-[187px] h-[15px]">
        Aluno
      </div>
      <div className="absolute top-[calc(50%_+_167px)] left-[calc(50%_-_203px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[293px] h-[45px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_253px)] left-[calc(50%_-_122px)] rounded-8xs bg-darkgoldenrod shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[146px] h-[45px]" />
      <div className="absolute top-[calc(50%_+_266px)] left-[calc(50%_-_75px)] font-semibold text-white inline-block w-[161px] h-4">
        Salvar
      </div>
      <div className="absolute top-[calc(50%_+_118px)] left-[calc(50%_-_122px)] font-medium text-gray inline-block w-52 h-[26px]">
        aluno@email.com
      </div>
      <div className="absolute top-[calc(50%_+_185px)] left-[calc(50%_-_122px)] font-medium text-dimgray inline-block w-[187px] h-3.5">
        *****
      </div>
      <div className="absolute top-[calc(50%_+_42px)] left-[calc(50%_-_203px)] rounded-8xs bg-darkgoldenrod w-[70px] h-[45px]" />
      <div className="absolute top-[calc(50%_+_104px)] left-[calc(50%_-_203px)] rounded-8xs bg-darkgoldenrod w-[70px] h-[46px]" />
      <div className="absolute top-[calc(50%_+_167px)] left-[calc(50%_-_203px)] rounded-8xs bg-darkgoldenrod w-[70px] h-[45px]" />
      <div className="absolute top-[487px] left-[607px] bg-darkgoldenrod w-[126px] h-8" />
      <div className="absolute top-[494px] left-[651px] text-[16px] text-white inline-block w-[94px] h-[25px]">
        Upload
      </div>
      <img
        className="absolute top-[489px] left-[615px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/image-10@2x.png"
      />
      <div className="absolute top-[312px] left-[951px] bg-lightgreen w-[428px] h-[65px]" />
      <img
        className="absolute top-[370px] left-[951px] w-[428.02px] h-[7px]"
        alt=""
        src="/line-25.svg"
      />
      <div className="absolute top-[334px] left-[965px]">
        Informações da conta salvas com sucesso!
      </div>
      <div className="absolute top-[962px] left-[642px] text-[14px] font-semibold text-white">
        VOLTAR
      </div>
    </div>
  );
};

export default ConfiguracoesContaSalvaAlun;
