import { FunctionComponent, useCallback } from "react";

const SubmissoesAluno: FunctionComponent = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  const onVOLTARTextClick = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  const onRectangle4Click = useCallback(() => {
    // Please sync "Info_autor_dados_pessoais_aluno" to the project
  }, []);

  const onRectangle5Click = useCallback(() => {
    // Please sync "Info_autor_dados_academicos_aluno" to the project
  }, []);

  const onCertificadosTextClick = useCallback(() => {
    // Please sync "Certificados_aluno" to the project
  }, []);

  const onConfiguraesTextClick = useCallback(() => {
    // Please sync "Configuracoes_conta_aluno" to the project
  }, []);

  const onRectangle6Click = useCallback(() => {
    // Please sync "form_submissoes_aluno" to the project
  }, []);

  const onResultadosTextClick = useCallback(() => {
    // Please sync "Resultados_aluno" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "Home_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[0px] left-[-16px] bg-maroon w-[1457px] h-[186px]" />
      <img
        className="absolute top-[45px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
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
      <div className="absolute top-[886px] left-[0px] bg-maroon w-[1459px] h-[139px]" />
      <div
        className="absolute top-[943px] left-[calc(50%_-_53px)] rounded-[3px] bg-darkgoldenrod w-[81px] h-9 cursor-pointer"
        onClick={onRectangle2Click}
      />
      <b
        className="absolute top-[952px] left-[681px] text-[14px] text-white cursor-pointer"
        onClick={onVOLTARTextClick}
      >
        VOLTAR
      </b>
      <img
        className="absolute top-[264.98px] left-[638px] w-[707px] h-0.5"
        alt=""
        src="/line-10.svg"
      />
      <div className="absolute top-[267px] left-[724px] bg-peru w-[157px] h-1" />
      <div
        className="absolute top-[393px] left-[80px] bg-darkgoldenrod w-[248px] h-[83px] cursor-pointer"
        onClick={onRectangle4Click}
      />
      <div
        className="absolute top-[393px] left-[380px] bg-darkgoldenrod w-[248px] h-[83px] cursor-pointer"
        onClick={onRectangle5Click}
      />
      <div className="absolute top-[221px] left-[646px] font-semibold inline-block w-[827px] h-[97px]">{`                   Submissões                                           `}</div>
      <div
        className="absolute top-[221px] left-[899px] font-semibold cursor-pointer"
        onClick={onCertificadosTextClick}
      >
        Certificados
      </div>
      <div
        className="absolute top-[221px] left-[1185px] font-semibold cursor-pointer"
        onClick={onConfiguraesTextClick}
      >
        Configurações
      </div>
      <div className="absolute top-[297px] left-[80px] text-17xl font-semibold inline-block w-[484px] h-[42px]">
        Informações do Aluno
      </div>
      <div className="absolute top-[419px] left-[128px] font-semibold text-white inline-block w-[177px] h-[31px]">
        Dados Pessoais
      </div>
      <div className="absolute top-[421px] left-[411px] font-semibold text-white inline-block w-[280px] h-[72px]">
        Dados Academicos
      </div>
      <div
        className="absolute top-[654px] left-[80px] bg-darkgoldenrod w-[311px] h-[83px] cursor-pointer"
        onClick={onRectangle6Click}
      />
      <div className="absolute top-[564px] left-[80px] text-17xl font-semibold inline-block w-[356px] h-[37px]">
        Submissões
      </div>
      <div className="absolute top-[685px] left-[calc(50%_-_611px)] font-semibold text-white inline-block w-[496px] h-[62px]">
        Formulário de Submissão
      </div>
      <div
        className="absolute top-[221px] left-[1048px] font-semibold cursor-pointer"
        onClick={onResultadosTextClick}
      >
        Resultados
      </div>
      <div
        className="absolute top-[221px] left-[646px] font-semibold cursor-pointer"
        onClick={onHomeTextClick}
      >
        Home
      </div>
    </div>
  );
};

export default SubmissoesAluno;
