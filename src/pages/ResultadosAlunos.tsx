import { FunctionComponent, useCallback } from "react";

const ResultadosAluno: FunctionComponent = () => {
  const onVOLTARTextClick = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onConfiguraesTextClick = useCallback(() => {
    // Please sync "Configuracoes_conta_aluno" to the project
  }, []);

  const onSubmissesTextClick = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
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
      <div className="absolute top-[943px] left-[702px] rounded-[3px] bg-darkgoldenrod w-[81px] h-9" />
      <b
        className="absolute top-[952px] left-[715px] text-[14px] text-white cursor-pointer"
        onClick={onVOLTARTextClick}
      >
        VOLTAR
      </b>
      <div className="absolute top-[317px] left-[115px] text-[36px] font-semibold inline-block w-[378px]">
        Resultados
      </div>
      <div className="absolute top-[219px] left-[650px] font-semibold inline-block w-[705px] h-[43px]">{`                                                  Certificados                `}</div>
      <div className="absolute top-[219px] left-[1067px] font-semibold">
        Resultados
      </div>
      <div
        className="absolute top-[219px] left-[1213px] font-semibold cursor-pointer"
        onClick={onConfiguraesTextClick}
      >
        Configurações
      </div>
      <div
        className="absolute top-[219px] left-[743px] font-semibold cursor-pointer"
        onClick={onSubmissesTextClick}
      >
        Submissões
      </div>
      <div
        className="absolute top-[219px] left-[649px] font-semibold cursor-pointer"
        onClick={onHomeTextClick}
      >
        Home
      </div>
      <div className="absolute top-[265px] left-[637px] box-border w-[732.03px] h-0.5 border-t-[2px] border-solid border-peru" />
      <div className="absolute top-[263px] left-[1047px] bg-peru w-[155px] h-1" />
      <div className="absolute top-[512px] left-[704px] w-[99px] h-[135px]" />
      <div className="absolute top-[628px] left-[646px] font-semibold inline-block w-[429px] h-[70px]">
        Sem resultados
      </div>
      <img
        className="absolute top-[504px] left-[655px] w-[129px] h-[119px] object-cover"
        alt=""
        src="/image-8@2x.png"
      />
    </div>
  );
};

export default ResultadosAluno;
