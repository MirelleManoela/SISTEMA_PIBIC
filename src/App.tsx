import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeAluno from "./pages/HomeAluno";
import CadastroAluno from "./pages/CadastroAlunos";
import CadastroSucessoAluno from "./pages/CadastroSucesso";
import CertificadosAluno from "./pages/CertificadosAlunos";
import ConfiguracoesContaAluno from "./pages/ConfiguracoesContas";
import ConfiguracoesContaSalvaAlun from "./pages/ConfiguracoesContaSalva";
import InfoAutorDadosAcademicosAl from "./pages/DadosAcademicos";
import InfoAutorDadosAcademicosSu from "./pages/DadosAcademicosSu";
import InfoAutorDadosPessoaisAlun from "./pages/DadosPessoais";
import InfoAutorDadosPessoaisSuce from "./pages/DadosPessoaisSuce";
import FormSubmissoesAreaTematica from "./pages/FormsAreaTematica";
import FormSubmissoesSalvoAluno from "./pages/FormsSubimisoesSalvoAlunos";
import FormSubmetidoAluno from "./pages/FormsSubmetidoAluno";
import FormSubmissoesVoltarAluno from "./pages/FormsSubimissoesVoltarAluno";
import FormSubmissoesAluno from "./pages/FormsSubmissoesAlunos";
import FormSubmissoesModalidadeAlu from "./pages/FormsSubmissoesModalidadeAluno";
import HomeSairAluno from "./pages/HomeSairAluno";
import LoginAluno from "./pages/LoginAluno"; 
import RecuperarSenhaAluno from "./pages/RecuperarSenha";
import ResultadosAluno from "./pages/ResultadosAlunos";
import SubmissoesAluno from "./pages/SubmissoesAlunos";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeAluno />} />
      <Route path="/cadastro-aluno" element={<CadastroAluno />} /> 
      <Route path="/CadastroSucessoAluno" element={<CadastroSucessoAluno />} /> 
      <Route path="/CertificadosAluno" element={<CertificadosAluno />} /> 
      <Route path="/ConfiguracoesContaAluno" element={<ConfiguracoesContaAluno />} /> 
      <Route path="/ConfiguracoesContaSalvaAlun" element={<ConfiguracoesContaSalvaAlun />} /> 
      <Route path="/InfoAutorDadosAcademicosAl" element={<InfoAutorDadosAcademicosAl />} /> 
      <Route path="/InfoAutorDadosAcademicosSu" element={<InfoAutorDadosAcademicosSu />} /> 
      <Route path="/InfoAutorDadosPessoaisAlun" element={<InfoAutorDadosPessoaisAlun />} /> 
      <Route path="/InfoAutorDadosPessoaisSuce" element={<InfoAutorDadosPessoaisSuce />} /> 
      <Route path="/FormSubmissoesAreaTematica" element={<FormSubmissoesAreaTematica />} /> 
      <Route path="/FormSubmissoesSalvoAluno" element={<FormSubmissoesSalvoAluno />} /> 
      <Route path="/FormSubmetidoAluno" element={<FormSubmetidoAluno />} /> 
      <Route path="/FormSubmissoesAluno" element={<FormSubmissoesAluno />} /> 
      <Route path="/FormSubmissoesModalidadeAlu" element={<FormSubmissoesModalidadeAlu />} /> 
      <Route path="/HomeSairAluno" element={<HomeSairAluno />} /> 
      <Route path="/LoginAluno" element={<LoginAluno />} /> 
      <Route path="/RecuperarSenhaAluno" element={<RecuperarSenhaAluno />} /> 
      <Route path="/ResultadosAluno" element={<ResultadosAluno />} /> 
      <Route path="/SubmissoesAluno" element={<SubmissoesAluno />} /> 
      <Route path="/FormSubmissoesVoltarAluno" element={<FormSubmissoesVoltarAluno />} /> 


      

    </Routes>
  );
}
export default App;
