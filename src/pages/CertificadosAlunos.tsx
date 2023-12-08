import { FunctionComponent, useCallback } from "react";

const CertificadosAluno: FunctionComponent = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  const onResultadosTextClick = useCallback(() => {
    // Please sync "Resultados_aluno" to the project
  }, []);

  const onConfiguraesTextClick = useCallback(() => {
    // Please sync "Configuracoes_conta_aluno" to the project
  }, []);

  const onSubmissesText1Click = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onHomeText1Click = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[0px] left-[-16px] bg-maroon w-[1457px] h-[187px]" />
      <div className="absolute top-[93px] left-[1271px] font-semibold text-white inline-block w-[87px] h-[26px]">
        Aluno
      </div>
      <img
        className="absolute top-[91px] left-[1334px] w-[22px] h-[33px] object-cover"
        alt=""
        src="/sort-down@2x.png"
      />
      <div className="absolute top-[75px] left-[1185px] rounded-[50%] bg-gainsboro w-[66px] h-16" />
      <div className="absolute top-[97px] left-[1205px] text-[18px] font-semibold inline-block w-[33px] h-7">
        AL
      </div>
      <div className="absolute top-[885px] left-[-21px] bg-maroon w-[1457px] h-[187px]" />
      <img
        className="absolute top-[17px] left-[80px] w-[300px] h-[115px] object-cover"
        alt=""
        src="/unicap-1@2x.png"
      />
      <div
        className="absolute top-[943px] left-[678px] rounded-[3px] bg-darkgoldenrod w-[81px] h-9 cursor-pointer"
        onClick={onRectangle2Click}
      />
      <b className="absolute top-[952px] left-[691px] text-[14px] text-white">
        VOLTAR
      </b>
      <img
        className="absolute top-[258.95px] left-[590px] w-[774px] h-[4.05px]"
        alt=""
        src="/line-11.svg"
      />
      <div className="absolute top-[217px] left-[614px] font-semibold text-center inline-block w-[360px] h-[73px]">
        Submissões
      </div>
      <div className="absolute top-[217px] left-[898px] font-semibold">
        Certificados
      </div>
      <div
        className="absolute top-[217px] left-[1057px] font-semibold cursor-pointer"
        onClick={onResultadosTextClick}
      >
        Resultados
      </div>
      <div
        className="absolute top-[217px] left-[1201px] font-semibold cursor-pointer"
        onClick={onConfiguraesTextClick}
      >
        Configurações
      </div>
      <div className="absolute top-[217px] left-[614px] font-semibold">
        Home
      </div>
      <div className="absolute top-[264px] left-[886px] bg-peru w-[150px] h-1" />
      <div
        className="absolute top-[217px] left-[614px] font-semibold text-center inline-block w-[360px] h-[73px] cursor-pointer"
        onClick={onSubmissesText1Click}
      >
        Submissões
      </div>
      <div
        className="absolute top-[217px] left-[614px] font-semibold cursor-pointer"
        onClick={onHomeText1Click}
      >
        Home
      </div>
      <img
        className="absolute top-[258px] left-[1344px] w-[97px] h-px"
        alt=""
        src="/rectangle-62.svg"
      />
      <div className="absolute top-[307px] left-[136px] text-[36px] font-semibold inline-block w-[314px] h-9">
        Certificados
      </div>
      <div className="absolute top-[387px] left-[136px] font-semibold inline-block w-24 h-[34px]">
        TÍTULO
      </div>
      <div className="absolute top-[385px] left-[1214px] font-semibold inline-block w-[74px] h-[29px]">
        AÇÃO
      </div>
      <div className="absolute top-[442px] left-[136px] inline-block w-[328px] h-[25px]">
        Pesquisa Científica II
      </div>
      <div className="absolute top-[429px] left-[1078px] bg-darkgoldenrod w-[295px] h-[45px]" />
      <b className="absolute top-[440px] left-[1117px] inline-block text-white w-[280px] h-[53px]">
        Download do Certificado
      </b>
      <img
        className="absolute top-[438px] left-[1084px] w-6 h-[26px] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="absolute top-[500.5px] left-[95.5px] box-border w-[1278px] h-px border-t-[1px] border-solid border-darkgray" />
    </div>
  );
};

export default CertificadosAluno;
