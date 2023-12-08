import { FunctionComponent, useCallback } from "react";

const FormSubmetidoAluno: FunctionComponent = () => {
  const onRectangle3Click = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onClicandoAquiTextClick = useCallback(() => {
    // Please sync "Resultados_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-17xl text-black font-inter">
      <div className="absolute top-[0px] left-[-16px] bg-maroon w-[1457px] h-[186px]" />
      <img
        className="absolute top-[45px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
      <img
        className="absolute top-[265px] left-[1344px] w-[97px] h-px"
        alt=""
        src="/rectangle-66.svg"
      />
      <div className="absolute top-[93px] left-[1271px] text-[20px] font-semibold text-white inline-block w-[87px] h-[26px]">
        Aluno
      </div>
      <img
        className="absolute top-[92px] left-[1335px] w-[22px] h-[33px] object-cover"
        alt=""
        src="/sort-down@2x.png"
      />
      <div className="absolute top-[75px] left-[1185px] rounded-[50%] bg-gainsboro w-[66px] h-16" />
      <div className="absolute top-[97px] left-[1205px] text-[18px] font-semibold inline-block w-[33px] h-7">
        AL
      </div>
      <div className="absolute top-[885px] left-[-21px] bg-maroon w-[1490px] h-[187px]" />
      <div
        className="absolute top-[943px] left-[calc(50%_-_122px)] rounded-[3px] bg-darkgoldenrod w-[100px] h-11 cursor-pointer"
        onClick={onRectangle3Click}
      />
      <b className="absolute top-[957px] left-[calc(50%_-_98px)] text-[14px] text-white">
        VOLTAR
      </b>
      <div className="absolute top-[316px] left-[87px] text-[24px] font-semibold text-darkgoldenrod">
        Formulário de Submissão
      </div>
      <div className="absolute top-[262px] left-[87px] font-semibold">
        Submissões
      </div>
      <img
        className="absolute top-[717px] left-[520px] w-[23px] h-7 object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <div className="absolute top-[205px] left-[1429px] rounded-xl bg-gray-100 w-2 h-[57px]" />
      <div className="absolute top-[208px] left-[1430px] rounded-xl bg-gray-200 w-1.5 h-[656px]" />
      <div className="absolute top-[512px] left-[calc(50%_-_452px)] font-semibold text-right">
        <p className="m-0">Parabéns pela sua Submissão!</p>
        <p className="m-0">Você pode acompanhar seu resultado</p>
      </div>
      <div
        className="absolute top-[556px] left-[941px] font-semibold text-maroon text-right cursor-pointer"
        onClick={onClicandoAquiTextClick}
      >
        clicando aqui
      </div>
    </div>
  );
};

export default FormSubmetidoAluno;
