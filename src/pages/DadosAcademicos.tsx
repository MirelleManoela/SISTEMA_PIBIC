import { FunctionComponent, useCallback } from "react";

const InfoAutorDadosAcademicosAl: FunctionComponent = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onRectangle7Click = useCallback(() => {
    // Please sync "Info_autor_dados_academicos_sucesso_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-white font-inter">
      <div className="absolute top-[-4px] left-[0px] bg-maroon w-[1486px] h-[186px]" />
      <img
        className="absolute top-[45px] left-[87px] w-[223px] h-[83px] object-cover"
        alt=""
        src="/unicap-2@2x.png"
      />
      <div className="absolute top-[92px] left-[1262px] font-semibold inline-block w-[87px] h-[26px]">
        Aluno
      </div>
      <img
        className="absolute top-[88px] left-[1326px] w-[22px] h-[33px] object-cover"
        alt=""
        src="/sort-down@2x.png"
      />
      <div className="absolute top-[68px] left-[1186px] rounded-[50%] bg-gainsboro w-[66px] h-16" />
      <div className="absolute top-[89px] left-[1205px] text-[18px] font-semibold text-black inline-block w-[33px] h-7">
        AL
      </div>
      <div className="absolute top-[885px] left-[0px] bg-maroon w-[1465px] h-[139px]" />
      <div
        className="absolute top-[952px] left-[625px] rounded-[3px] bg-darkgoldenrod w-[81px] h-9 cursor-pointer"
        onClick={onRectangle2Click}
      />
      <b className="absolute top-[963px] left-[638px] text-[14px]">VOLTAR</b>
      <div className="absolute top-[327px] left-[80px] text-[24px] font-semibold text-darkgoldenrod">
        Dados Acadêmicos
      </div>
      <div className="absolute top-[273px] left-[80px] text-[36px] font-semibold text-black">{`Informações do Autor `}</div>
      <div className="absolute top-[calc(50%_-_1px)] left-[calc(50%_-_216px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-14 border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_77px)] left-[calc(50%_-_216px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_59px)] left-[calc(50%_-_113px)] font-medium text-dimgray inline-block w-[236px] h-[19px]">
        Turma
      </div>
      <div className="absolute top-[calc(50%_+_77px)] left-[calc(50%_-_216px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <img
        className="absolute top-[calc(50%_+_154px)] left-[calc(50%_-_220px)] rounded-8xs w-[379px] h-[62px]"
        alt=""
        src="/rectangle-6.svg"
      />
      <div className="absolute top-[calc(50%_+_175px)] left-[calc(50%_-_113px)] font-medium text-dimgray inline-block w-48 h-[18px]">
        Campus
      </div>
      <div
        className="absolute top-[calc(50%_+_251px)] left-[calc(50%_-_128px)] rounded-8xs bg-darkgoldenrod shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[185px] h-[55px] cursor-pointer"
        onClick={onRectangle7Click}
      />
      <div className="absolute top-[calc(50%_+_267px)] left-[calc(50%_-_71px)] font-semibold inline-block w-[204px] h-[19px]">
        Salvar
      </div>
      <div className="absolute top-[calc(50%_+_16px)] left-[calc(50%_-_113px)] font-medium text-gray inline-block w-[212px] h-8">
        Turno
      </div>
      <div className="absolute top-[calc(50%_+_98px)] left-[calc(50%_-_113px)] font-medium text-dimgray inline-block w-[236px] h-[18px]">
        RA
      </div>
      <div className="absolute top-[calc(50%_-_77px)] left-[calc(50%_-_216px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_-_1px)] left-[calc(50%_-_216px)] rounded-8xs bg-darkgoldenrod w-[89px] h-14" />
      <div className="absolute top-[calc(50%_+_77px)] left-[calc(50%_-_216px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_+_154px)] left-[calc(50%_-_216px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[54px]" />
      <img
        className="absolute top-[413px] left-[1186px] w-[97px] h-px"
        alt=""
        src="/rectangle-66.svg"
      />
    </div>
  );
};

export default InfoAutorDadosAcademicosAl;
