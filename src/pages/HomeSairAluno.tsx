import { FunctionComponent, useCallback } from "react";

const HomeSairAluno: FunctionComponent = () => {
  const onSortDownIconClick = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  const onSubmissesTextClick = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onCertificadosTextClick = useCallback(() => {
    // Please sync "Certificados_aluno" to the project
  }, []);

  const onResultadosTextClick = useCallback(() => {
    // Please sync "Resultados_aluno" to the project
  }, []);

  const onConfiguraesTextClick = useCallback(() => {
    // Please sync "Configuracoes_conta_aluno" to the project
  }, []);

  const onRectangle4Click = useCallback(() => {
    // Please sync "Início_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[-15px] left-[0px] bg-maroon w-[1474px] h-[213px]" />
      <img
        className="absolute top-[50px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
      <div className="absolute top-[96px] left-[1271px] font-semibold text-white inline-block w-[87px] h-[26px]">
        Aluno
      </div>
      <img
        className="absolute top-[90.94px] left-[1333.91px] w-[22.17px] h-[33.12px] object-cover cursor-pointer"
        alt=""
        src="/sort-down@2x.png"
        onClick={onSortDownIconClick}
      />
      <div className="absolute top-[75px] left-[1185px] rounded-[50%] bg-gainsboro w-[66px] h-16" />
      <div className="absolute top-[97px] left-[1205px] text-[18px] font-semibold inline-block w-[33px] h-7">
        AL
      </div>
      <div className="absolute top-[885px] left-[-21px] bg-maroon w-[1469px] h-[187px]" />
      <img
        className="absolute top-[188px] left-[0px] w-[1456px] h-[697px] object-cover"
        alt=""
        src="/design-sem-nome-4@2x.png"
      />
      <div className="absolute top-[273px] left-[563px] bg-peru w-[118px] h-1" />
      <div className="absolute top-[270.75px] left-[562px] box-border w-[784.01px] h-0.5 border-t-[2px] border-solid border-darkgoldenrod" />
      <div
        className="absolute top-[226px] left-[679px] font-semibold text-center inline-block w-[148px] h-[73px] cursor-pointer"
        onClick={onSubmissesTextClick}
      >
        Submissões
      </div>
      <div
        className="absolute top-[226px] left-[871px] font-semibold cursor-pointer"
        onClick={onCertificadosTextClick}
      >
        Certificados
      </div>
      <div
        className="absolute top-[226px] left-[1030px] font-semibold cursor-pointer"
        onClick={onResultadosTextClick}
      >
        Resultados
      </div>
      <div
        className="absolute top-[226px] left-[1187px] font-semibold cursor-pointer"
        onClick={onConfiguraesTextClick}
      >
        Configurações
      </div>
      <div className="absolute top-[226px] left-[587px] font-semibold">
        Home
      </div>
      <div className="absolute top-[226px] left-[587px] font-semibold">
        Home
      </div>
      <img
        className="absolute top-[544px] left-[832px] w-[121px] h-[43px]"
        alt=""
        src="/rectangle-59.svg"
      />
      <b className="absolute top-[541px] left-[404px] text-17xl">
        Sistema de Certificados
      </b>
      <b className="absolute top-[53.13%] left-[58.68%] text-17xl text-white">
        PIBIC
      </b>
      <div
        className="absolute top-[125px] left-[1256px] bg-darkgoldenrod w-[118px] h-[38px] cursor-pointer"
        onClick={onRectangle4Click}
      />
      <div className="absolute top-[133px] left-[1295px] font-semibold text-white">
        Sair
      </div>
    </div>
  );
};

export default HomeSairAluno;
