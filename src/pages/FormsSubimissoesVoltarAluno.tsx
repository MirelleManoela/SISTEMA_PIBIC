import { FunctionComponent, useCallback } from "react";

const FormSubmissoesVoltarAluno: FunctionComponent = () => {
  const onRectangle3Click = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onRectangle6Click = useCallback(() => {
    // Please sync "form_submissoes_salvo_aluno" to the project
  }, []);

  const onImage1IconClick = useCallback(() => {
    // Please sync "form_submissoes_modalidade_aluno" to the project
  }, []);

  const onImage2IconClick = useCallback(() => {
    // Please sync "form_submissoes_area_tematica_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-dimgray font-inter">
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
      <div className="absolute top-[93px] left-[1271px] font-semibold text-white inline-block w-[87px] h-[26px]">
        Aluno
      </div>
      <img
        className="absolute top-[92px] left-[1335px] w-[22px] h-[33px] object-cover"
        alt=""
        src="/sort-down@2x.png"
      />
      <div className="absolute top-[75px] left-[1185px] rounded-[50%] bg-gainsboro w-[66px] h-16" />
      <div className="absolute top-[97px] left-[1205px] text-[18px] font-semibold text-black inline-block w-[33px] h-7">
        AL
      </div>
      <div className="absolute top-[885px] left-[-21px] bg-maroon w-[1490px] h-[187px]" />
      <div
        className="absolute top-[943px] left-[593px] rounded-10xs bg-darkgoldenrod w-[100px] h-11 cursor-pointer"
        onClick={onRectangle3Click}
      />
      <div className="absolute top-[944px] left-[723px] rounded-10xs bg-darkgoldenrod w-[123px] h-11" />
      <b className="absolute top-[957px] left-[622px] text-sm text-white">
        VOLTAR
      </b>
      <b className="absolute top-[958px] left-[742px] text-sm text-white">
        SUBMETER
      </b>
      <div className="absolute top-[316px] left-[87px] text-[24px] font-semibold text-darkgoldenrod">
        Formulário de Submissão
      </div>
      <div className="absolute top-[262px] left-[87px] text-[36px] font-semibold text-black">
        Submissões
      </div>
      <div className="absolute top-[calc(50%_-_105px)] left-[calc(50%_-_262px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[518px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_159px)] font-medium inline-block w-[236px] h-[19px]">
        Resumo
      </div>
      <div className="absolute top-[calc(50%_-_147px)] left-[calc(50%_-_259px)] font-medium inline-block w-[354px] h-[19px]">
        Selecione uma modalidade
      </div>
      <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_265px)] font-medium inline-block w-[354px] h-[19px]">
        Selecione a área temática
      </div>
      <div
        className="absolute top-[calc(50%_+_289px)] left-[calc(50%_-_109px)] rounded-8xs bg-darkgoldenrod shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[174px] h-[47px] cursor-pointer"
        onClick={onRectangle6Click}
      />
      <div className="absolute top-[calc(50%_+_304px)] left-[calc(50%_-_47px)] font-semibold text-white inline-block w-[203px] h-4">
        Salvar
      </div>
      <div className="absolute top-[calc(50%_-_105px)] left-[calc(50%_-_262px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <img
        className="absolute top-[425px] left-[931px] w-[23px] h-[23px] object-cover cursor-pointer"
        alt=""
        src="/image-1@2x.png"
        onClick={onImage1IconClick}
      />
      <div className="absolute top-[calc(50%_+_83px)] left-[calc(50%_-_262px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[524px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_101px)] left-[calc(50%_-_159px)] font-medium inline-block w-[236px] h-[19px]">
        Pesquisa Científica
      </div>
      <div className="absolute top-[calc(50%_+_161px)] left-[calc(50%_-_210px)] font-medium inline-block w-[236px] h-[19px]">
        Arquivos
      </div>
      <div className="absolute top-[calc(50%_+_168px)] left-[calc(50%_-_1px)] font-medium inline-block w-[236px] h-[19px]">
        Regras de submissões
      </div>
      <div className="absolute top-[calc(50%_+_83px)] left-[calc(50%_-_262px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_+_7px)] left-[calc(50%_-_262px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[524px] h-[55px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[calc(50%_+_25px)] left-[calc(50%_-_159px)] font-medium inline-block w-[236px] h-[19px]">
        Computação/Tecnologia
      </div>
      <div className="absolute top-[calc(50%_+_9px)] left-[calc(50%_-_262px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <img
        className="absolute top-[535px] left-[938px] w-[23px] h-[23px] object-cover cursor-pointer"
        alt=""
        src="/image-1@2x.png"
        onClick={onImage2IconClick}
      />
      <div className="absolute top-[715px] left-[510px] rounded-10xs bg-darkgoldenrod w-[175px] h-9" />
      <div className="absolute top-[717px] left-[719px] rounded-10xs bg-darkgoldenrod w-[231px] h-9" />
      <div className="absolute top-[722px] left-[557px] text-base font-medium text-white">
        pdf, docx
      </div>
      <div className="absolute top-[725px] left-[772px] text-base font-medium text-white">
        Regras de avaliação
      </div>
      <img
        className="absolute top-[722px] left-[733px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/download-from-cloud@2x.png"
      />
      <img
        className="absolute top-[717px] left-[520px] w-[23px] h-7 object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <div className="absolute top-[205px] left-[1429px] rounded-xl bg-gray-100 w-2 h-[57px]" />
      <div className="absolute top-[208px] left-[1430px] rounded-xl bg-gray-200 w-1.5 h-[656px]" />
    </div>
  );
};

export default FormSubmissoesVoltarAluno;
