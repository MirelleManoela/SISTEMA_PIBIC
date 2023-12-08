import { FunctionComponent, useCallback } from "react";

const FormSubmissoesAreaTematica: FunctionComponent = () => {
  const onRectangle3Click = useCallback(() => {
    // Please sync "Submissoes_aluno" to the project
  }, []);

  const onImage1IconClick = useCallback(() => {
    // Please sync "form_submissoes_modalidade_aluno" to the project
  }, []);

  const onImage2IconClick = useCallback(() => {
    // Please sync "form_submissoes_voltar_aluno" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-white font-inter">
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
      <div className="absolute top-[93px] left-[1271px] font-semibold inline-block w-[87px] h-[26px]">
        Aluno
      </div>
      <img
        className="absolute top-[92px] left-[1335px] w-[22px] h-[33px] object-cover"
        alt=""
        src="/sort-down@2x.png"
      />
      <div className="absolute top-[75px] left-[1185px] rounded-[50%] bg-gainsboro-200 w-[66px] h-16" />
      <div className="absolute top-[97px] left-[1205px] text-[18px] font-semibold text-black inline-block w-[33px] h-7">
        AL
      </div>
      <div className="absolute top-[885px] left-[-21px] bg-maroon w-[1490px] h-[187px]" />
      <div
        className="absolute top-[943px] left-[593px] rounded-10xs bg-darkgoldenrod w-[100px] h-11 cursor-pointer"
        onClick={onRectangle3Click}
      />
      <div className="absolute top-[944px] left-[723px] rounded-10xs bg-darkgoldenrod w-[123px] h-11" />
      <b className="absolute top-[957px] left-[622px] text-sm">VOLTAR</b>
      <b className="absolute top-[958px] left-[742px] text-sm">SUBMETER</b>
      <div className="absolute top-[316px] left-[87px] text-[24px] font-semibold text-darkgoldenrod">
        Formulário de Submissão
      </div>
      <div className="absolute top-[262px] left-[87px] text-[36px] font-semibold text-black">
        Submissões
      </div>
      <div className="absolute top-[calc(50%_+_304px)] left-[calc(50%_-_47px)] font-semibold inline-block w-[203px] h-4">
        Salvar
      </div>
      <img
        className="absolute top-[722px] left-[733px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/download-from-cloud@2x.png"
      />
      <div className="absolute top-[205px] left-[1429px] rounded-xl bg-gray-100 w-2 h-[57px]" />
      <div className="absolute top-[208px] left-[1430px] rounded-xl bg-gray-200 w-1.5 h-[656px]" />
      <div className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_269px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[518px] h-[55px] border-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[calc(50%_-_93px)] left-[calc(50%_-_166px)] font-medium text-dimgray inline-block w-[236px] h-[19px]">
        Resumo
      </div>
      <div className="absolute top-[calc(50%_-_153px)] left-[calc(50%_-_266px)] font-medium text-dimgray inline-block w-[354px] h-[19px]">
        Selecione uma modalidade
      </div>
      <div className="absolute top-[calc(50%_+_283px)] left-[calc(50%_-_116px)] rounded-8xs bg-darkgoldenrod shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[174px] h-[47px]" />
      <div className="absolute top-[calc(50%_+_298px)] left-[calc(50%_-_54px)] font-semibold inline-block w-[203px] h-4">
        Salvar
      </div>
      <div className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_269px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <img
        className="absolute top-[419px] left-[924px] w-[23px] h-[23px] object-cover cursor-pointer"
        alt=""
        src="/image-1@2x.png"
        onClick={onImage1IconClick}
      />
      <div className="absolute top-[calc(50%_+_77px)] left-[calc(50%_-_269px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[524px] h-[55px] border-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[calc(50%_+_95px)] left-[calc(50%_-_166px)] font-medium text-dimgray inline-block w-[236px] h-[19px]">
        Título
      </div>
      <div className="absolute top-[calc(50%_+_155px)] left-[calc(50%_-_217px)] font-medium text-dimgray inline-block w-[236px] h-[19px]">
        Arquivos
      </div>
      <div className="absolute top-[calc(50%_+_162px)] left-[calc(50%_-_8px)] font-medium text-dimgray inline-block w-[236px] h-[19px]">
        Regras de submissões
      </div>
      <div className="absolute top-[calc(50%_+_77px)] left-[calc(50%_-_269px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <div className="absolute top-[calc(50%_+_1px)] left-[calc(50%_-_269px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[524px] h-[55px] border-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[calc(50%_+_19px)] left-[calc(50%_-_166px)] font-medium text-dimgray inline-block w-[315px] h-[19px]">
        Computação/Tecnologia
      </div>
      <div className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_266px)] font-medium text-dimgray inline-block w-[354px] h-[19px]">
        Selecione a área temática
      </div>
      <div className="absolute top-[calc(50%_+_3px)] left-[calc(50%_-_269px)] rounded-8xs bg-darkgoldenrod w-[89px] h-[55px]" />
      <img
        className="absolute top-[529px] left-[931px] w-[23px] h-[23px] object-cover cursor-pointer"
        alt=""
        src="/image-1@2x.png"
        onClick={onImage2IconClick}
      />
      <div className="absolute top-[709px] left-[503px] rounded-10xs bg-darkgoldenrod w-[175px] h-9" />
      <div className="absolute top-[711px] left-[712px] rounded-10xs bg-darkgoldenrod w-[231px] h-9" />
      <div className="absolute top-[716px] left-[550px] text-base font-medium">
        pdf, docx
      </div>
      <div className="absolute top-[719px] left-[765px] text-base font-medium">
        Regras de avaliação
      </div>
      <img
        className="absolute top-[716px] left-[726px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/download-from-cloud@2x.png"
      />
      <img
        className="absolute top-[711px] left-[513px] w-[23px] h-7 object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <div className="absolute top-[calc(50%_+_113px)] left-[calc(50%_-_265px)] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[524px] h-[55px] border-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[576px] left-[450px] bg-gainsboro-100 w-[523px] h-11" />
      <div className="absolute top-[615px] left-[451px] bg-gainsboro-100 w-[523px] h-11" />
      <div className="absolute top-[659px] left-[454px] bg-cornflowerblue w-[523px] h-11" />
      <div className="absolute top-[613px] left-[453px] box-border w-[522.05px] h-0.5 border-t-[2px] border-solid border-dimgray" />
      <div className="absolute top-[655px] left-[452px] box-border w-[522.05px] h-0.5 border-t-[2px] border-solid border-dimgray" />
      <div className="absolute top-[667px] left-[548px] font-medium text-black">
        Computação/Tecnologia
      </div>
      <div className="absolute top-[577px] left-[554px] font-medium text-black">
        Cinema/Artes
      </div>
      <div className="absolute top-[622px] left-[550px] font-medium text-black">
        Jogos/Animes
      </div>
    </div>
  );
};

export default FormSubmissoesAreaTematica;
