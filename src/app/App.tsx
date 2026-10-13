import { useState, useEffect, useRef } from 'react';
import { motion, MotionConfig } from 'motion/react';
import {
  Brain,
  GraduationCap,
  Shield,
  Users,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Award,
  Target,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Calendar,
  FileText,
  Zap,
  AlertCircle,
  CheckCircle,
  TrendingDown,
  BarChart3,
  Globe,
  ArrowLeft,
  Library,
  Check,
  LayoutList,
  SlidersHorizontal
} from 'lucide-react';
import radarLogo from '../imports/radar-logo.png';
import radarLogoClaro from '../imports/radar-logo-claro.png';
import radarIcone from '../imports/radar-icone.png';
import radarIconeClaro from '../imports/radar-icone-claro.png';
import hubLogo from '../imports/hub-logo.png';
import hubLogoClaro from '../imports/hub-logo-claro.png';
import liaExperts from '../imports/lia-experts.webp';

type ModoLeitura = 'executiva' | 'completa';

// Fonte única de verdade das seções da edição.
// `executiva: true` = permanece visível na Leitura executiva.
const SECOES = [
  { id: 'insight', label: 'Insight', executiva: true },
  { id: 'resumo', label: 'Resumo', executiva: true },
  { id: 'movimentos', label: 'Sinais', executiva: false },
  { id: 'ausencias', label: 'Ausências', executiva: false },
  { id: 'recorrentes', label: 'Recorrentes', executiva: false },
  { id: 'concorrencia', label: 'Concorrência', executiva: false },
  { id: 'benchmarks', label: 'Benchmarks', executiva: false },
  { id: 'aceleradores', label: 'Aceleradores', executiva: false },
  { id: 'experts', label: 'Experts', executiva: false },
  { id: 'analise', label: 'Análise', executiva: false },
  { id: 'hype', label: 'Hype', executiva: false },
  { id: 'oportunidades', label: 'Oportunidades', executiva: true },
  { id: 'edicoes', label: 'Arquivo', executiva: true },
];

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b' | 'edicao-julho-2026' | 'edicao-agosto-2026' | 'edicao-agosto-2026-b' | 'edicao-setembro-2026' | 'edicao-setembro-2026-b';

// Cartões do arquivo, da edição mais recente para a mais antiga.
const ARQUIVO: { rotulo: string; titulo: string; resumo: string; view: View }[] = [
  {
    rotulo: "Setembro de 2026 · Edição #12",
    titulo: "A IA só ensina quando faz o aluno pensar em vez de dar a resposta",
    resumo: "Ensaios com tutores de IA mediram ganho pequeno, e só com o desenho certo; um modelo aberto barato empatou com a tutoria humana. A disputa passou do modelo para o desenho pedagógico.",
    view: "edicao-setembro-2026-b",
  },
  {
    rotulo: "Setembro de 2026 · Edição #11",
    titulo: "A regra saiu, e ela não proíbe a IA: proíbe delegar a decisão sobre o aluno",
    resumo: "O CNE aprovou as diretrizes em 1º de setembro e Nova York suspendeu IA generativa até o 8º ano no dia seguinte. A régua passou a ser quem assina a decisão.",
    view: "edicao-setembro-2026",
  },
  {
    rotulo: "Agosto de 2026 · Edição #10",
    titulo: "A mediação pedagógica deixou de ser reserva de valor e virou default da plataforma",
    resumo: "A evidência nomeou o comportamento que prejudica e a OpenAI embutiu o antídoto no produto. Mediar genericamente virou commodity em três semanas.",
    view: "edicao-agosto-2026-b",
  },
  {
    rotulo: "Agosto de 2026 · Edição #09",
    titulo: "A home virou o produto: a disputa saiu do conteúdo e foi para a camada que decide",
    resumo: "Classroom reconstrói a home por papel para 150M de usuários, Coursera aposta US$ 100 mi contra o próprio catálogo e o MEC institui o EducaLab.",
    view: "edicao-agosto-2026",
  },
  {
    rotulo: "Julho de 2026 · Edição #08",
    titulo: "A era dos anúncios acabou: consolidação — quem não constrói capacidade, compra",
    resumo: "Cogna vai a 90% do Educbank, Teachy faz o 1º M&A de IA em educação da AL, Khan admite 15% de uso e Anthropic lança o Claude for Teachers.",
    view: "edicao-julho-2026",
  },
  {
    rotulo: "Junho de 2026 · Edição #07",
    titulo: "O Gemini entrou direto no ENEM: a batalha é pelo estudante dentro do exame",
    resumo: "Google anuncia simulados gratuitos do ENEM com a Akira Enem, CNE encerra consulta pública e a disputa migra do produto para o canal de distribuição.",
    view: "edicao-junho-2026-b",
  },
  {
    rotulo: "Junho de 2026",
    titulo: "O Brasil no ponto de inflexão: IA virou objeto de regulação, capital e escala",
    resumo: "CNE aprova semáforo de riscos, BNDES injeta R$ 300M na Positivo e Plurall IA gera 26 mil PEIs em 3 meses.",
    view: "edicao-junho-2026",
  },
  {
    rotulo: "Maio de 2026",
    titulo: "A próxima disputa não será pela melhor funcionalidade",
    resumo: "Mercado migra de features isoladas para ecossistemas integrados. CNE regulamenta, Moderna Core e Positivo+AWS definem novo benchmark.",
    view: "edicao-maio-2026",
  },
  {
    rotulo: "Abril de 2026",
    titulo: "MEC abre sandbox para testar IA na educação",
    resumo: "Análise sobre ambiente de experimentação para avaliar soluções educacionais com IA e antecipação de critérios de validação no setor.",
    view: "edicao-abril-2026",
  },
];

// ─── Edição Abril 2026 (arquivo) ────────────────────────────────────────────
function EdicaoAbril2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Abril de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Abril de 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              O MEC abre sandbox de IA para educação básica:<br />
              <span className="text-azul-600">quem molda os critérios, molda o próximo PNLD</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O Ministério da Educação abriu um ambiente de experimentação controlado para soluções de IA, avaliando por inovação, escalabilidade e governança ética — sinalizando os critérios que guiarão contratos públicos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Principais <span className="text-azul-600">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "MEC abre sandbox regulatório para IA na educação básica", desc: "Players que participam ganham vantagem direta no PNLD futuro e contratos públicos. Critérios: inovação + escalabilidade + governança ética — requisitos de entrada, não diferenciais.", cor: "border-azul-600" },
                { titulo: "CNE forma comissão especial para diretrizes de IA (básica e superior)", desc: "Regulação virá no 2º semestre de 2026 — janela de 6 meses para adequação. Empresas sem governança auditável terão barreira de entrada no mercado público.", cor: "border-rosa-600" },
                { titulo: "BNCC Computação torna IA curricular em todas as escolas em 2026", desc: "Demanda estrutural criada por lei — não depende de adoção voluntária. Janela de 12–18 meses antes de commodity. Diferencial: formação docente integrada.", cor: "border-rosa-600" },
                { titulo: "Arco/Geekie consolida Teacher Assistant com OpenAI", desc: "Primeiro player BR com IA generativa integrada ao fluxo pedagógico. Cria pressão sobre concorrentes — Plurall/SOMOS precisam acelerar integração.", cor: "border-azul-600" },
                { titulo: "MEC lança curso 'IA na prática docente' e plataforma MEC Idiomas com tutor IA", desc: "Estado forma professores para IA antes que o mercado o faça. Cria expectativa docente que plataformas privadas precisam igualar ou superar.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Movimentos <span className="text-azul-600">de Abril</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "MEC Sandbox de IA: ambiente regulatório aberto", desc: "O Ministério da Educação abriu inscrições para sandbox regulatório avaliando soluções de IA por inovação, escalabilidade e governança ética. Publicação do documento orientador 'IA na Educação Básica'.", impacto: "Empresas que participarem moldam os critérios que valerão nos próximos ciclos do PNLD. É uma janela que se fecha em 12–18 meses.", cor: "from-azul-600 to-azul-700" },
                { num: "02", titulo: "BNCC Computação: IA obrigatória em todas as escolas em 2026", desc: "A partir de 2026, a BNCC Computação passa a ser obrigatória em todas as escolas brasileiras, tornando o trabalho com IA parte estruturada do currículo.", impacto: "Janela de 12–18 meses para sistemas de ensino sem solução de IA curricular. Quem chegar primeiro com formação + ferramenta integradas captura o mercado.", cor: "from-azul-700 to-azul-800" },
                { num: "03", titulo: "Arco/Geekie + OpenAI: Teacher Assistant em expansão", desc: "A Arco Educação reporta avanços na parceria com OpenAI anunciada em 2024. O Teacher Assistant, que gera planos pedagógicos personalizados para alunos com deficiência, está em expansão.", impacto: "Primeiro grande player BR com IA generativa no fluxo pedagógico. Cria pressão sobre Plurall/SOMOS para acelerarem suas próprias integrações.", cor: "from-azul-500 to-azul-600" },
                { num: "04", titulo: "MEC lança curso de IA para docentes e plataforma de idiomas com IA", desc: "Curso 'IA na prática docente' disponível na Plataforma Mais Professores. Lançamento da MEC Idiomas com tutor de IA que corrige pronúncia e permite prática de conversação.", impacto: "Estado formando professores para IA cria expectativa docente que plataformas privadas precisarão igualar ou superar.", cor: "from-azul-600 to-lilas-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Impacto estratégico</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    O MEC não abriu só um sandbox — abriu o processo de definição dos critérios do próximo PNLD. Quem participa agora molda as regras que valerão para todos depois.
                  </p>
                  <p className="text-white/70 text-sm">
                    Governança ética, escalabilidade e inovação deixaram de ser diferenciais opcionais e viraram requisitos de entrada no mercado público de educação.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Entrar no MEC Sandbox — janela fechando", desc: "Submeter solução com foco em governança ética e escalabilidade. Critérios explícitos: inovação + escalabilidade + governança. Posicionamento privilegiado em contratos públicos e PNLD futuros.", destaque: true },
                { titulo: "Formação docente integrada à ferramenta", desc: "BNCC Computação obrigatória em 2026 cria demanda estrutural. Produto que ensina o professor enquanto ele usa — não em curso separado — tem adoção comprovada e retenção alta.", destaque: true },
                { titulo: "IA com dado longitudinal do aluno", desc: "Ferramentas genéricas não têm histórico. As soluções dos grupos educacionais têm — mas não estão usando. Conectar IA ao histórico real cria diferenciação que nenhuma big tech consegue replicar.", destaque: false },
                { titulo: "Governança auditável para compliance CNE", desc: "CNE publicará diretrizes no 2º semestre de 2026. Produto que entrega rastreabilidade + log auditável + relatório para gestor vira requisito de entrada no mercado público regulado.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Abril de 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EdicaoMaio2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Maio de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Maio de 2026
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A próxima disputa da IA na educação não será pela melhor{" "}
              <span className="text-azul-600">funcionalidade</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O mercado migra de features isoladas para ecossistemas operacionais integrados —
              CNE regulamenta, Moderna Core e Positivo+AWS definem o novo benchmark.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Principais <span className="text-azul-600">Implicações</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  titulo: "CNE regulamenta uso de IA na educação",
                  desc: "Nova regulamentação institucionaliza a IA como parte da operação escolar — governança, rastreabilidade e transparência tornam-se diferenciais competitivos.",
                  cor: "border-rosa-600"
                },
                {
                  titulo: "Ecossistemas integrados definem o novo benchmark",
                  desc: "Moderna Core e Positivo+AWS sinalizam: a competição migrou de features isoladas para jornadas completas — conteúdo + analytics + IA + acompanhamento.",
                  cor: "border-azul-600"
                },
                {
                  titulo: "Analytics operacional ganha força",
                  desc: "Plurall 2026 e outros players apostam em dados que viram ação pedagógica — IA prescritiva supera IA descritiva.",
                  cor: "border-rosa-600"
                },
                {
                  titulo: "Consolidação via M&A acelera",
                  desc: "Árvore adquire Typper — mercado entra em fase de concentração e fortalecimento de ecossistemas. Integração e interoperabilidade tornam-se críticas.",
                  cor: "border-azul-600"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Movimentos <span className="text-azul-600">de Maio</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  num: "01",
                  titulo: "Moderna Core: ecossistema integrado",
                  desc: "Plataforma completa combinando conteúdo, IA, analytics e acompanhamento — novo benchmark do setor educacional.",
                  cor: "from-azul-600 to-azul-700"
                },
                {
                  num: "02",
                  titulo: "Positivo + AWS: IA generativa em escala",
                  desc: "Parceria traz infraestrutura enterprise e capacidade técnica robusta para IA generativa no ambiente educacional.",
                  cor: "from-ambar-500 to-ambar-600"
                },
                {
                  num: "03",
                  titulo: "Plurall 2026: analytics operacional",
                  desc: "SOMOS Educação aposta em inteligência pedagógica acionável — dados virando recomendações práticas para professores.",
                  cor: "from-lilas-500 to-lilas-600"
                },
                {
                  num: "04",
                  titulo: "Árvore adquire Typper",
                  desc: "Primeira grande aquisição EdTech do ciclo — mercado entra em fase de consolidação e fortalecimento de plataformas proprietárias.",
                  cor: "from-azul-700 to-azul-800"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    A vantagem competitiva migrou de "ter IA" para "ter IA operacional integrada
                    ao ecossistema educacional" — features isoladas perdem valor,
                    plataformas completas ganham mercado.
                  </p>
                  <p className="text-white/70 text-sm">
                    Quem conectar conteúdo + analytics + IA + formação docente numa jornada única define o padrão.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  titulo: "Copiloto docente integrado",
                  desc: "IA que assiste o professor em planejamento, adaptação de conteúdo e acompanhamento, conectada ao ecossistema.",
                  destaque: true
                },
                {
                  titulo: "Analytics pedagógico acionável",
                  desc: "Transformar dados em recomendações práticas para intervenção pedagógica — sair do dashboard para a ação.",
                  destaque: true
                },
                {
                  titulo: "Telemetria de aprendizagem",
                  desc: "Rastrear jornada do aluno com granularidade para personalização real e evidências de impacto.",
                  destaque: false
                },
                {
                  titulo: "Integração de jornada completa",
                  desc: "IA que conecta diagnóstico → intervenção → acompanhamento → avaliação numa experiência unificada.",
                  destaque: false
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Maio de 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Edição Junho 2026 (arquivo) ────────────────────────────────────────────
function EdicaoJunho2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Junho de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Junho de 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              O Brasil chegou ao ponto de inflexão:<br />
              <span className="text-azul-600">IA na educação virou objeto de regulação, capital e escala</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              CNE aprovou diretrizes com semáforo de riscos, BNDES injetou R$ 300M na Positivo e Plurall IA gerou 26 mil PEIs em 3 meses. O mercado não discute mais se — disputa quem chega primeiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Principais <span className="text-azul-600">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "CNE aprova semáforo de riscos para IA (mai/2026)", desc: "Compliance vira requisito de entrada — não diferencial opcional. Produtos sem governança auditável perdem acesso ao mercado público regulado.", cor: "border-azul-600" },
                { titulo: "BNDES injeta R$ 300M na Positivo para IA + plataforma MARIA com GPT", desc: "Capital institucional valida o setor — modelo replicável por outros grupos. Vertical integrada (hardware + software + IA própria) cria vantagem estrutural.", cor: "border-rosa-600" },
                { titulo: "Moderna relança Aprova Brasil com IA para 800k alunos e SAEB (mai/2026)", desc: "Defesa de base instalada com upgrade tecnológico — produto com 15 anos ganha nova vida. Integrar conteúdo + avaliação SAEB + IA + analytics num único produto é o novo benchmark público.", cor: "border-rosa-600" },
                { titulo: "Google + UNICEF entram no mercado público BR com Gemini e NotebookLM (mai/2026)", desc: "Big tech contorna ausência de conteúdo BR via parceria institucional multilateral. Resposta não é produto melhor — é relacionamento mais profundo com redes e secretarias.", cor: "border-azul-600" },
                { titulo: "Plurall IA: 26 mil PEIs gerados, 2 mil escolas ativas em 3 meses", desc: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado deixou de ser hipótese — é demanda comprovada e mercado aberto.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Movimentos <span className="text-azul-600">de Junho</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "CNE aprova diretrizes com semáforo de riscos para IA", desc: "CNE aprovou parecer que classifica tecnologias por risco: proibiu vigilância emocional e perfilização psicológica; exige supervisão humana em correção automatizada.", impacto: "Compliance vira requisito de entrada no mercado público. Produto sem governança auditável perde acesso a contratos regulados.", cor: "from-azul-600 to-azul-700" },
                { num: "02", titulo: "BNDES injeta R$ 300M na Positivo — plataforma MARIA integra GPT", desc: "Positivo fechou financiamento de até R$ 300M com BNDES para Plano de Inovação 2026–2028, incluindo MARIA, assistente de IA que monta planos de estudo personalizados.", impacto: "Vertical integrada (hardware + software + IA própria) cria vantagem estrutural difícil de replicar por players apenas de software.", cor: "from-azul-700 to-azul-800" },
                { num: "03", titulo: "Moderna relança Aprova Brasil com IA para 800k alunos", desc: "Soluções Moderna lançou nova versão do Aprova Brasil com monitoramento em tempo real, análise de performance no SAEB e intervenção pedagógica baseada em IA.", impacto: "Produto de 15 anos ganhou nova vida com IA integrada. Benchmark: conteúdo + SAEB + analytics em plataforma única.", cor: "from-azul-500 to-azul-600" },
                { num: "04", titulo: "Google + UNICEF parceria 3 anos no Brasil", desc: "Parceria trienal anuncia uso de Gemini e NotebookLM em escolas públicas brasileiras. Google.org destina R$ 5M para expandir programa Experience AI no Brasil.", impacto: "Big tech contorna ausência de conteúdo brasileiro via parceria institucional multilateral — canal de distribuição diferente dos players privados.", cor: "from-azul-600 to-lilas-600" },
                { num: "05", titulo: "Plurall IA: 26 mil PEIs gerados em 3 meses", desc: "Em 3 meses de uso, mais de 2 mil escolas criaram pelo menos um PEI na plataforma Plurall IA, com 26 mil conteúdos adaptados gerados. Predição por IA prevista para 2026.", impacto: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado saiu de hipótese para demanda comprovada.", cor: "from-azul-600 to-azul-700" },
                { num: "06", titulo: "Bett Brasil 2026: 65 mil visitantes, +40% vs 2025", desc: "Maior edição da história do evento com lançamentos de Somos, Moderna, Super Professor, SoftBank Robotics (Léia) e relatório OCDE em português.", impacto: "Mercado saiu do discurso para o produto. Volume de lançamentos indica corrida por posicionamento antes da regulação final do CNE.", cor: "from-azul-700 to-azul-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Impacto estratégico</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    O Brasil saiu do "se" e entrou no "quem chega primeiro". Regulação aprovada, capital institucional injetado, escala comprovada — o mercado entrou em fase de corrida por posicionamento.
                  </p>
                  <p className="text-white/70 text-sm">
                    Quem conectar compliance + dado longitudinal + IA prescritiva numa jornada única define o padrão do próximo ciclo educacional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "PEI automatizado com IA para inclusão", desc: "Plurall IA provou a escala — 26 mil PEIs em 3 meses. Com 5,1M de alunos com deficiência no Brasil e menos de 30% com PEI adequado, a oportunidade é enorme e urgente.", destaque: true },
                { titulo: "Governança auditável para compliance CNE", desc: "CNE definiu o semáforo. Produto que entrega rastreabilidade de decisões de IA + log auditável + relatório para gestor vira requisito de entrada no mercado público regulado.", destaque: true },
                { titulo: "Analytics prescritivo com dado SAEB", desc: "Moderna Aprova Brasil mostrou o modelo: SAEB + recomendação pedagógica + IA. Oportunidade para plataformas com dado de desempenho conectar performance com intervenção.", destaque: false },
                { titulo: "Produto de formação docente integrada à ferramenta", desc: "79% dos professores não sabem ensinar com IA. Produto que treina o professor enquanto ele usa — não em curso separado — tem retenção comprovada e diferenciação durável.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Junho de 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


// ─── Edição Junho 2026 · #07 — 2ª quinzena (arquivo) ────────────────────────
function EdicaoJunho2026B({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Junho de 2026 · Ed. #07</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #07 · 08 – 19 Jun 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              O Gemini entrou direto no ENEM:<br />
              <span className="text-azul-600">a batalha agora é pelo estudante brasileiro dentro do exame mais disputado do país</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O Google anunciou simulados gratuitos do ENEM no Gemini, desenvolvidos com a Akira Enem, enquanto o CNE encerrava a consulta pública sobre IA na educação. O campo de batalha migrou do produto para o canal de distribuição.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Principais <span className="text-azul-600">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "Big techs passaram a competir diretamente pela distribuição educacional", desc: "Simulado ENEM gratuito no Gemini (parceria com Akira Enem) é o primeiro produto de IA do Google desenhado para o contexto brasileiro — canal direto a 10M+ de vestibulandos, sem passar pela escola.", cor: "border-azul-600" },
                { titulo: "Regulação de IA entrou em fase prática", desc: "CNE encerrou consulta pública sobre as diretrizes: proibição de vigilância emocional e supervisão humana obrigatória em correção automatizada. Compliance virou requisito de entrada.", cor: "border-rosa-600" },
                { titulo: "Gratuidade virou estratégia de aquisição em escala", desc: "Google Summit gratuito para professores, MEC Idiomas gratuito (212k usuários em dias), Khan Academy gratuito até 2027 — zero cost como canal de adoção antes de monetizar.", cor: "border-rosa-600" },
                { titulo: "O diferencial migrou do conteúdo para o dado de aprendizagem", desc: "Gemini tem alcance, mas não tem histórico do aluno. Quem tem o dado longitudinal tem o ativo que a big tech não copia.", cor: "border-azul-600" },
                { titulo: "Coordenador pedagógico emergiu como buyer estratégico", desc: "Geekie lançou a Ultravisão da Coordenação — dado consolidado de turma em tempo real. Coordenador renova contrato e influencia a compra do próximo ciclo.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Movimentos da <span className="text-azul-600">Quinzena</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Gemini lança simulados gratuitos do ENEM com a Akira Enem", desc: "Anunciado no Google for Brasil (10/jun): testes completos ou por área, diagnóstico detalhado e plano de estudos personalizado, gratuitos no app Gemini.", impacto: "Canal direto a 10M+ vestibulandos sem passar por escola ou sistema de ensino. Ameaça específica a preparatórios.", cor: "from-azul-600 to-azul-700" },
                { num: "02", titulo: "CNE encerra consulta pública sobre IA na Educação", desc: "Consulta via Brasil Participativo (18/mai–14/jun) colheu contribuições sobre as diretrizes de IA na educação básica e superior antes da fase final.", impacto: "Quem participou tem argumento técnico de alinhamento regulatório. Compliance virou moat, não custo.", cor: "from-azul-700 to-azul-800" },
                { num: "03", titulo: "MEC Idiomas: 212 mil usuários em dias com tutor de IA gratuito", desc: "Plataforma pública de inglês e espanhol (A1–C2) com agente de IA para dúvidas e conversação, em app e web.", impacto: "Estado entregando IA de qualidade gratuita cria benchmark público difícil de bater por preço. Diferencial privado: personalização e dado longitudinal.", cor: "from-azul-500 to-azul-600" },
                { num: "04", titulo: "Geekie One lança Ultravisão da Coordenação", desc: "Tela de gestão com dados consolidados de alunos, turmas e professores em tempo real, específica para coordenadores pedagógicos.", impacto: "Coordenador como buyer estratégico: produto que o serve cria retenção que ferramenta de aluno não cria.", cor: "from-azul-600 to-lilas-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Impacto estratégico</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    O Google não entrou na educação pela porta da escola — entrou pela porta do vestibulando. Quem tem canal direto ao aluno não precisa convencer a escola.
                  </p>
                  <p className="text-white/70 text-sm">
                    Para players BR, o diferencial deixou de ser funcionalidade — é o dado do aluno que a big tech não tem.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Simulado adaptativo com histórico longitudinal", desc: "Big tech tem alcance; plataforma que combina banco ENEM + histórico real de 3+ anos + diagnóstico por escola tem diferencial que o Google não copia.", destaque: true },
                { titulo: "Produto de IA auditável e alinhado ao CNE", desc: "Supervisão humana e proibição de vigilância emocional viram critério de licitação. Quem chegar adequado primeiro tem argumento técnico único.", destaque: true },
                { titulo: "Formação docente integrada à própria plataforma", desc: "Professor formado pelo Google usa Gemini. Resposta: formação dentro da ferramenta, não fora — retenção que curso externo não tem.", destaque: false },
                { titulo: "Analytics prescritivo para coordenador pedagógico", desc: "Coordenador renova contrato e apresenta resultado para direção. Visão consolidada de turma e professor cria retenção estrutural.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Junho de 2026 · Edição #07</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


// ─── Edição Julho 2026 · #08 (arquivo) ──────────────────────────────────────
function EdicaoJulho2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Julho de 2026 · Ed. #08</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #08 · 20 Jun – 17 Jul 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A era dos anúncios acabou:<br />
              <span className="text-azul-600">a IA na educação entrou na fase de consolidação — quem não constrói capacidade, compra</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Cogna foi a 90% do Educbank, Teachy fez o primeiro M&A de IA em educação da América Latina, a Khan Academy admitiu que só 15% usam o Khanmigo e a Anthropic lançou o Claude for Teachers com privacidade negociada com o sindicato. O mercado passou a comprar talento, base instalada e uso real medido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Principais <span className="text-azul-600">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "O M&A virou o atalho para capacidade de IA", desc: "Teachy comprou a Nero.AI (acquihiring de sete dígitos). Construir capacidade interna ficou mais lento que a janela competitiva — comprar talento pronto virou estratégia.", cor: "border-azul-600" },
                { titulo: "O ecossistema se expandiu para além do pedagógico", desc: "Cogna elevou a Somos a 90% do Educbank (R$ 46,3M): dado financeiro + dado pedagógico no mesmo grupo cria retenção que feature não cria.", cor: "border-rosa-600" },
                { titulo: "Uso real virou a métrica que define produto", desc: "Khan Academy admitiu 15% de engajamento no Khanmigo e refez o produto embutido na prática, medindo 'acerto no item seguinte'. IA como app separado falhou no maior case do mundo.", cor: "border-rosa-600" },
                { titulo: "A big tech encontrou seu novo canal: o professor", desc: "Claude for Teachers (14/jul): premium gratuito para docentes K-12 dos EUA, padrões dos 50 estados e privacidade validada pelo sindicato AFT. Compliance virou arma de aquisição de mercado.", cor: "border-azul-600" },
                { titulo: "Compliance ganhou data no Brasil", desc: "Consulta encerrada, seminário nacional e homologação do MEC no horizonte — adequação às diretrizes do CNE virou cronograma do 2º semestre de 2026.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Movimentos da <span className="text-azul-600">Edição</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Cogna eleva participação no Educbank para 90%", desc: "Compra de mais 47% por R$ 46,3 milhões (26/jun). O Educbank é a camada financeira da escola privada: cobrança, mensalidades e crédito.", impacto: "O grupo dono do Plurall passa a controlar dado financeiro + pedagógico no mesmo ecossistema — retenção estrutural.", cor: "from-azul-600 to-azul-700" },
                { num: "02", titulo: "Teachy compra Nero.AI — 1º M&A de IA em educação da AL", desc: "Acquihiring de sete dígitos (2/jul): time de desenvolvimento e propriedade intelectual incorporados.", impacto: "Talento de IA virou ativo comprável. Abre o ciclo de consolidação — edtechs com capacidade técnica viram alvo.", cor: "from-azul-700 to-azul-800" },
                { num: "03", titulo: "Khan Academy admite 15% de uso e relança o Khanmigo", desc: "108 milhões de interações, mas só 15% dos alunos usam. Versão reconstruída: IA embutida na prática e métrica de 'acerto no item seguinte'.", impacto: "O tutor como app separado morreu. IA embutida no fluxo, medida por aprendizagem transferida, é o novo benchmark.", cor: "from-azul-500 to-azul-600" },
                { num: "04", titulo: "Anthropic lança Claude for Teachers (14/jul)", desc: "Premium gratuito para professores K-12 verificados dos EUA, padrões dos 50 estados, piloto em Detroit e privacidade em parceria com o sindicato AFT.", impacto: "A disputa chegou ao professor como canal. Confiança institucional e compliance viraram arma competitiva.", cor: "from-azul-600 to-lilas-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Impacto estratégico</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    O mercado saiu da fase de prometer e entrou na fase de provar e consolidar: quem mede aprendizagem de verdade, controla camadas da operação escolar e sela confiança com o professor define o próximo ciclo.
                  </p>
                  <p className="text-white/70 text-sm">
                    Feature não é mais notícia — consolidação, evidência e confiança institucional são.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Auditoria de uso real + IA embutida no fluxo", desc: "Medir engajamento real (não licenças) e mover a IA para os pontos de fricção do estudo. Métrica de aprendizagem transferida como argumento comercial inédito no BR.", destaque: true },
                { titulo: "Assistente docente BNCC com pacto público de privacidade", desc: "Replicar o modelo Claude for Teachers no contexto BR: alinhado à BNCC e ao CNE, com compromisso de privacidade validado por entidades docentes.", destaque: true },
                { titulo: "Tese de build vs buy para capacidade de IA", desc: "Mapear boutiques e squads de IA com tração antes da próxima janela de consolidação — o caso Teachy tende a inflacionar os alvos.", destaque: false },
                { titulo: "Preparatório conectado ao histórico e ao currículo", desc: "Responder à distribuição gratuita do Gemini com dado longitudinal, vínculo pedagógico e acompanhamento docente.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Julho de 2026 · Edição #08</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


// ─── Edição Agosto 2026 · Ed. #09 (arquivo) ─────────────────────────────────
function EdicaoAgosto2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Agosto de 2026 · Ed. #09</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #09 · 08 Jul – 03 Ago 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A home virou o produto:<br />
              <span className="text-azul-600">a disputa saiu do conteúdo e foi para a camada que decide o que cada pessoa vê</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O Google reconstruiu a home do Classroom por papel para 150 milhões de usuários, a Coursera colocou US$ 100 milhões numa empresa que monta jornada por lacuna e os modelos pequenos derrubaram o custo de personalizar. Personalização deixou de ser funcionalidade e virou arquitetura de produto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Principais <span className="text-azul-600">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "A home por papel virou padrão — e o piso subiu para 150 milhões de usuários", desc: "O Classroom trocou a lista de turmas por painéis distintos para professor, aluno e gestor. Entregar a mesma tela para todos os perfis virou atraso competitivo visível.", cor: "border-azul-600" },
                { titulo: "A economia de modelos pequenos mudou a conta do custo por aluno", desc: "Gemini Flash e Flash-Lite a 350 tokens/s e 17% menos tokens, com o topo de linha atrasado. Roteamento entre modelos especializados virou decisão de arquitetura que define margem.", cor: "border-rosa-600" },
                { titulo: "Segurança de agentes virou infraestrutura aberta de indústria", desc: "Mais de 70 empresas — NVIDIA, Microsoft, IBM, Red Hat, Hugging Face, Linux Foundation — criaram aliança para padronizar identidade, permissão, log e auditoria. Sem OpenAI, Google e Anthropic.", cor: "border-azul-600" },
                { titulo: "O MEC ganhou estrutura permanente de IA com o EducaLab", desc: "Laboratório de dados, serviços digitais e IA instituído por portaria, com ambiente controlado e previsão de parcerias. Estruturas assim precedem diretrizes, chamadas e financiamento.", cor: "border-azul-600" },
                { titulo: "O capital apostou em jornada adaptativa, não em catálogo", desc: "Coursera investiu US$ 100 milhões na LearnVector, de Andrew Ng, por um terço da empresa — um voto de quem tem o maior catálogo do mundo contra o próprio modelo de prateleira.", cor: "border-rosa-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Movimentos da <span className="text-azul-600">Edição</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Classroom troca a lista de turmas por home que muda conforme o papel", desc: "Rollout mundial para mais de 150 milhões de usuários: professor vê fila de correção e insights; aluno vê entregas dos próximos 7 dias; gestor vê analytics da rede.", impacto: "A tela inicial deixou de ser índice e virou camada de decisão. O espaço aberto é personalizar além do cargo.", cor: "from-azul-600 to-azul-700" },
                { num: "02", titulo: "Google lança três modelos pequenos e adia o topo de linha", desc: "Gemini 3.6 Flash, 3.5 Flash-Lite (350 tokens/s) e Flash Cyber, todos com janela de 1 milhão de tokens. O Pro segue atrasado.", impacto: "Confirma a economia de modelos pequenos: roteamento entre modelos especializados define o custo por aluno.", cor: "from-azul-700 to-azul-800" },
                { num: "03", titulo: "MEC institui o EducaLab, laboratório permanente de dados e IA", desc: "Portaria nº 526 cria o laboratório com quatro eixos, ambiente digital controlado sob a LGPD e parcerias com universidades e empresas.", impacto: "Pela primeira vez o MEC tem estrutura fixa olhando IA — e uma porta de entrada para quem chegar com governança madura.", cor: "from-azul-500 to-azul-600" },
                { num: "04", titulo: "Coursera investe US$ 100 milhões na LearnVector, de Andrew Ng", desc: "IA agêntica que planeja a trilha individual, adapta ao modo de aprender e acompanha até o domínio. Coursera fica com um terço do negócio.", impacto: "A próxima geração de plataformas organiza a experiência por lacuna e objetivo — não por grade de cursos.", cor: "from-azul-600 to-lilas-600" },
                { num: "05", titulo: "Mais de 70 empresas criam aliança aberta para segurança de agentes", desc: "NVIDIA, Microsoft, IBM, Red Hat, Hugging Face, Mozilla e Linux Foundation vão construir em código aberto identidade, permissões, guardrails e auditoria.", impacto: "Governança de agentes virou padrão técnico aberto — vocabulário que rede e mantenedor podem exigir em contrato.", cor: "from-azul-700 to-azul-800" },
                { num: "06", titulo: "Brasil entra como fundador do bloco de governança de IA da China", desc: "A WAICO foi formalizada em Xangai com 29 países fundadores do Sul Global, sem G7 ou União Europeia.", impacto: "Soberania de dados e capacitação tendem a ganhar peso nos critérios de compra pública brasileira.", cor: "from-azul-600 to-azul-700" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Impacto estratégico</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    O valor migrou do que a plataforma guarda para o que ela decide mostrar. A volta às aulas não vai premiar quem anunciar mais uma funcionalidade, e sim quem chegar com camada de decisão personalizada por perfil, evidência de aprendizagem e governança escrita.
                  </p>
                  <p className="text-white/70 text-sm">
                    O acervo virou insumo. A camada de decisão virou o produto.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Home personalizada por perfil, um nível acima do padrão", desc: "Personalizar por disciplina, série, histórico, objetivo e material em uso — dado que só quem opera a jornada completa possui.", destaque: true },
                { titulo: "Arquitetura de roteamento entre modelos por tarefa", desc: "Modelo econômico para alto volume, modelo nacional para contexto brasileiro e modelo de ponta só para raciocínio complexo.", destaque: true },
                { titulo: "Aproximação estruturada com o EducaLab", desc: "Levar caso de uso com governança madura ao eixo de IA aplicada do laboratório enquanto os critérios estão sendo escritos.", destaque: false },
                { titulo: "Camada de governança sobre padrão aberto", desc: "Adotar os frameworks da aliança em vez de construir do zero e transformar isso em anexo técnico comercial.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Agosto de 2026 · Edição #09</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Edição #10 · 04–24 ago 2026 (arquivo) ──────────────────────────────────
function EdicaoAgosto2026B({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Agosto de 2026 · Ed. #10</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #10 · 04 – 24 Ago 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A mediação pedagógica deixou de ser a nossa reserva de valor<br />
              <span className="text-azul-600">e virou default da plataforma</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A evidência nomeou o comportamento que faz mal — terceirizar a tarefa. Semanas depois, a OpenAI embutiu no ChatGPT for Teens a detecção de atalho e o redirecionamento para modo de estudo. O remédio que a escola deveria aplicar passou a vir de fábrica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que mudou de <span className="text-azul-600">direção</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "A tese da edição anterior caiu em três semanas", desc: "Mediar o uso era a resposta que sobrava para quem está dentro da escola quando o acesso virou grátis. O ChatGPT for Teens tornou a trava de atalho nativa, gratuita e ligada por padrão.", cor: "border-azul-600" },
                { titulo: "Duas linhas de receita viraram produto gratuito de terceiro", desc: "Acesso a IA de ponta e formação docente genérica em IA passaram a existir de graça e com qualidade na mesma quinzena, vindos de fora do setor educacional.", cor: "border-rosa-600" },
                { titulo: "A conversa saiu de quantos usam para que efeito produz", desc: "Estudo longitudinal com 26.811 alunos por 30 meses: a IA subiu a nota da tarefa em 18% e derrubou a da prova em cerca de 20% em seis meses. Cerca de 80% da perda se concentra em quem terceiriza a tarefa.", cor: "border-azul-600" },
                { titulo: "O vácuo de governança ganhou tamanho comparável entre países", desc: "Maior base já reunida sobre IA no ensino superior: 88% dos estudantes e 77% dos docentes usando, com a América Latina em 92% e 79%. Só 31% dos docentes participam da política de IA da própria instituição.", cor: "border-rosa-600" },
                { titulo: "Esperar a norma brasileira deixou de ser estratégia viável", desc: "Terceira edição consecutiva sem homologação do parecer de IA, agora com as câmaras do CNE em recomposição. A indefinição virou variável de planejamento.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinais */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Sinais da Edição</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Cinco <span className="text-azul-600">sinais</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "A plataforma passou a mediar o uso sozinha e por padrão", desc: "ChatGPT for Teens aplicado automaticamente de 13 a 17 anos, com Study Mode padrão, detecção de atalho na tarefa e Study Hours definidas por pais. Junto vieram os plugins educacionais da OpenAI e o hub de estudo do Gemini.", impacto: "As três maiores empresas de IA chegaram ao mesmo desenho: chat aberto não é formato de estudo. Mediar genericamente deixou de diferenciar.", cor: "from-azul-700 to-azul-800" },
                { num: "02", titulo: "A evidência nomeou qual comportamento prejudica", desc: "Working paper do CEPR com 26.811 estudantes por 30 meses. Cerca de 80% da perda se concentra em quem entrega rápido demais com nota alta — marcador observável de terceirização.", impacto: "Não existe efeito da IA em geral: existe efeito de um padrão específico, que pode ser detectado e interrompido.", cor: "from-azul-600 to-azul-700" },
                { num: "03", titulo: "O vácuo de governança ganhou recorte latino-americano", desc: "45.398 respostas em 35 países. Adoção quase universal convivendo com avaliação sem orientação adequada e docentes fora da construção da política institucional.", impacto: "Política escrita sem o professor não muda prática de sala. O problema é de processo, não de texto.", cor: "from-azul-600 to-lilas-600" },
                { num: "04", titulo: "Os sistemas de ensino brasileiros convergiram no mesmo desenho", desc: "Bernoulli Reload com portfólio segmentado por público, Cosmos do Poliedro restrito ao acervo autoral, Meu Arco integrando camadas e Moderna Core com IA nos bastidores.", impacto: "Convergência dessa ordem não é tendência, é padrão consolidado — e portanto custo de entrada.", cor: "from-azul-500 to-azul-600" },
                { num: "05", titulo: "A regulação travou de novo, com o colegiado se reorganizando", desc: "Portaria MEC nº 664 abriu a recomposição das câmaras do CNE enquanto o parecer de IA seguia aguardando homologação.", impacto: "Deixou de ser lentidão de trâmite e passou a ser instabilidade institucional. Produto precisa de governança configurável.", cor: "from-azul-700 to-azul-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Leitura estratégica</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    A disputa deixou de ser sobre se o produto media — isso a big tech já entrega de graça. Passou a ser sobre mediar com o contexto que ela não tem: o capítulo, o enunciado, se vale nota e o histórico do aluno.
                  </p>
                  <p className="text-white/70 text-sm">
                    Mediação genérica virou commodity. Mediação curricular ainda não tinha dono no Brasil.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Mediação curricular: a trava que sabe o que foi pedido", desc: "Mesmo mecanismo de contenção da plataforma, com o que ela não tem: qual capítulo a turma estuda, se a atividade vale nota e o que o aluno errou antes.", destaque: true },
                { titulo: "Evidência de percurso como artefato de avaliação", desc: "Versões, tentativas, tempo e revisões dentro do editor. Se a entrega deixou de provar aprendizagem, a prova migra para o processo.", destaque: true },
                { titulo: "Política de uso configurável no produto", desc: "Regra por atividade, série e disciplina, versionada e auditável, construída no mesmo fluxo em que o professor cria a tarefa.", destaque: false },
                { titulo: "Fechar o ciclo entre uso de IA e resultado", desc: "Devolver ao professor o que aconteceu antes da entrega, cruzado com desempenho posterior — camada indisponível para quem opera de fora da escola.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Agosto de 2026 · Edição #10</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


function EdicaoSetembro2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Setembro de 2026 · Ed. #11</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #11 · 25 Ago – 10 Set 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A regra saiu — e ela não proíbe a IA.<br />
              <span className="text-azul-600">Proíbe delegar a decisão sobre a vida escolar do aluno</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Depois de quatro edições travado na última milha, o parecer do CNE foi aprovado em 1º de setembro. O objeto da vedação não é a ferramenta: é quem assina o resultado. No dia seguinte, a maior rede escolar dos Estados Unidos suspendeu IA generativa até o 8º ano. Dois sistemas, duas jurisdições, a mesma conclusão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que mudou de <span className="text-azul-600">direção</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "A mediação saiu do campo competitivo e entrou no campo legal — com o eixo deslocado", desc: "Decisão: Reclassificar o roadmap por quem assina cada decisão que o produto toma sobre o aluno — não por funcionalidade.", cor: "border-azul-600" },
                { titulo: "O setor ganhou o primeiro prazo regulatório concreto: doze meses após a homologação", desc: "Decisão: Definir agora o que precisa mudar no produto e no contrato, para não descobrir isso no mês onze.", cor: "border-rosa-600" },
                { titulo: "Correção automática de texto autoral virou produto proibido, e detector de IA perdeu força probatória", desc: "Decisão: Auditar onde o produto decide sozinho e inserir validação humana registrável antes de a norma entrar em vigor.", cor: "border-azul-600" },
                { titulo: "A faixa dos anos iniciais deixou de ser mercado endereçável para IA autônoma", desc: "Decisão: Reposicionar produto infantil de autônomo para instrumento do professor, e tratar desligamento remoto de função como requisito técnico.", cor: "border-rosa-600" },
                { titulo: "Conformidade documentada virou argumento comercial antes de virar exigência de contrato", desc: "Decisão: Transformar o rastro que já existe em peça de proposta comercial, e onde não existe, priorizá-lo acima de nova funcionalidade.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinais */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Sinais da Edição</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Cinco <span className="text-azul-600">sinais</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "O CNE aprovou as diretrizes e definiu o que a máquina não pode decidir", desc: "O Conselho Nacional de Educação aprovou em 1º de setembro as diretrizes nacionais para uso de IA em todos os níveis, etapas e modalidades.", impacto: "O objeto da regulação não é a ferramenta, é a delegação.", cor: "from-azul-700 to-azul-800" },
                { num: "02", titulo: "A maior rede escolar dos Estados Unidos suspendeu IA generativa até o 8º ano", desc: "Um dia depois da decisão brasileira, o prefeito Zohran Mamdani e o chanceler de educação Kamar Samuels anunciaram a moratória mais ampla dos Estados Unidos para IA generativa voltada ao estudante: um ano de suspensão, válido no ano letivo 2026-2027, para alunos do 2-K ao 8º ano.", impacto: "Duas das maiores jurisdições educacionais das Américas chegaram à mesma restrição por faixa etária em 48 horas, por caminhos independentes — e isso transforma o que parecia posição pedagógica em consenso regulatório emergente.", cor: "from-azul-600 to-azul-700" },
                { num: "03", titulo: "A FTD assumiu o controle da Estuda.com e comprou capacidade de avaliação por IA", desc: "A FTD Educação anunciou a aquisição do controle acionário total da Estuda.com, consolidando uma parceria firmada em 2020; o valor não foi divulgado.", impacto: "Um grupo editorial comprou capacidade de avaliação por IA no mesmo mês em que avaliação por IA passou a ser regulada — e é aí que a leitura fica interessante.", cor: "from-azul-600 to-lilas-600" },
                { num: "04", titulo: "O Poliedro foi premiado por um projeto de IA que mantém a autoria humana no centro", desc: "O Poliedro conquistou o terceiro lugar na categoria Escala da Premiação Impacto Brasil 2026, realizada pelo Agile Trends, com a Supernova — iniciativa que combina práticas ágeis, inteligência artificial e curadoria especializada na produção de conteúdo didático.", impacto: "É o caso brasileiro que já operava a arquitetura que a norma acabou de exigir, e com número para mostrar.", cor: "from-azul-500 to-azul-600" },
                { num: "05", titulo: "A formação docente virou obrigação curricular — e a oferta já tem dono", desc: "Além das vedações, a norma do CNE cria dever de formação: os cursos de licenciatura passam a incluir uso pedagógico das novas tecnologias, análise de dados escolares e avaliação ética de ferramentas, e as instituições ficam obrigadas a promover formação continuada dos profissionais de educação.", impacto: "A norma criou uma demanda obrigatória de formação sem criar a oferta correspondente, e o vácuo já está sendo preenchido por quem tem escala e distribuição gratuita.", cor: "from-azul-700 to-azul-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Leitura estratégica</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    A régua deixou de ser usa ou não usa IA e passou a ser quem assina a decisão. Assinatura humana com rastro deixou de ser boa prática e virou requisito de conformidade — com relógio rodando a partir da homologação.
                  </p>
                  <p className="text-white/70 text-sm">
                    Conformidade com rastro é o único tipo que não se improvisa em doze meses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Registro de decisão pedagógica como infraestrutura", desc: "Definir esquema de evento antes da próxima feature; retrofit é impossível, não apenas caro.", destaque: true },
                { titulo: "Mapa próprio de conformidade, publicado antes dos pares", desc: "Exercício conjunto de produto, pedagógico e jurídico nesta janela; independe da homologação.", destaque: true },
                { titulo: "Desligamento de função por série, turma e rede", desc: "Flags com escopo hierárquico e integração confiável ao cadastro do aluno; testar a matriz de estados.", destaque: false },
                { titulo: "Fluxo de validação humana que não devolve o trabalho ao professor", desc: "Calibrar confiança por item antes de desenhar a amostragem; sem isso a revisão vira aleatória.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Setembro de 2026 · Edição #11</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


function EdicaoSetembro2026B({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="Radar" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-azul-600 leading-tight">Setembro de 2026 · Ed. #12</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-azul-600 hover:bg-azul-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-azul-600 text-white text-sm font-medium rounded-lg hover:bg-azul-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-azul-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #12 · 11 – 30 Set 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A IA só ensina quando<br />
              <span className="text-azul-600">faz o aluno pensar em vez de dar a resposta</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Os ensaios controlados com tutores de IA publicados em agosto e setembro mediram ganho pequeno, e só quando o tutor guiava o aluno por perguntas e exigia domínio antes de avançar. Ao mesmo tempo, a maioria dos americanos passou a dizer que a IA faz mais mal que bem na escola, sem separar um uso do outro. Cabe ao produto tornar essa diferença visível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que mudou de <span className="text-azul-600">direção</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "A IA que faz o aluno trabalhar ensina, mas pouco, e o resultado depende do desenho", desc: "Decisão: trocar a promessa de transformação por uma meta de ganho mensurável e o desenho que a sustenta.", cor: "border-azul-600" },
                { titulo: "O modelo deixou de diferenciar: o aberto mais barato empatou com o tutor humano", desc: "Decisão: posicionar o produto pelo desenho pedagógico, e não pelo modelo.", cor: "border-rosa-600" },
                { titulo: "O público americano virou contra a IA na escola, e Los Angeles tirou a IA de todos os alunos", desc: "Decisão: ter evidência de aprendizagem pronta antes que a objeção chegue ao comprador brasileiro.", cor: "border-azul-600" },
                { titulo: "As big techs passaram a formar o professor para decidir com a IA", desc: "Decisão: incluir a formação do professor no próprio produto, em vez de tratá-la como material de apoio separado.", cor: "border-rosa-600" },
                { titulo: "Nenhum sistema de ensino publicou evidência de impacto da própria IA", desc: "Decisão: montar uma linha de base de aprendizagem com uma rede parceira, para não depender de números de terceiros.", cor: "border-azul-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinais */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Sinais da Edição</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Cinco <span className="text-azul-600">sinais</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Dois ensaios grandes com tutor de IA saíram, e o ganho é pequeno", desc: "No ensaio de dois anos com o Khanmigo em modo coach, em Hamilton County (Tennessee), o ganho foi de cerca de 1,3 ponto percentil por período, parecido com o da prática no Khan Academy sem IA. Outro estudo, com mais de 6 mil alunos, mediu cerca de 3 pontos a mais com IA e domínio obrigatório, uma semana depois e só no conteúdo praticado.", impacto: "O ganho existe, é pequeno e depende do desenho: modo coach, domínio antes de avançar e retomada do erro.", cor: "from-azul-700 to-azul-800" },
                { num: "02", titulo: "Um modelo aberto barato empatou com o tutor humano, a um custo 918 vezes menor", desc: "O StudentBench, pré-print da Handshake AI Research, comparou tutores de IA e tutoria humana com 2.383 pessoas estudando para o GRE. A IA teve ganho estatisticamente equivalente ao humano, a US$ 0,0052 por ponto percentual contra US$ 4,81.", impacto: "Escolher modelo virou decisão de custo; a disputa vai para quem desenha a experiência em volta dele.", cor: "from-azul-600 to-azul-700" },
                { num: "03", titulo: "O público americano virou contra a IA na escola, e Los Angeles tirou a IA de todos os alunos", desc: "Na pesquisa da NBC News, 53% dos adultos disseram que a IA faz mais mal que bem na educação básica, contra 27%. Educadores ouvidos pelo Washington Post falaram em ilusão de aprendizagem, e Los Angeles bloqueou a IA generativa para todos os alunos nos equipamentos da escola.", impacto: "A objeção não separa a IA que responde da que faz o aluno trabalhar. O produto precisa separar.", cor: "from-rosa-600 to-rosa-700" },
                { num: "04", titulo: "As big techs passaram a formar o professor para decidir com a IA", desc: "A OpenAI ampliou a OpenAI Academy com uma trilha para educadores e anunciou um programa de formadores. A Anthropic abriu o Claude for Teachers para escolas e redes e começou a trabalhar com fundações brasileiras em ferramentas para a rede pública.", impacto: "A formação genérica virou oferta gratuita; o que segue aberto é formar o professor no material que a escola adotou.", cor: "from-azul-600 to-lilas-600" },
                { num: "05", titulo: "No Brasil, a correção de redação por IA continua em rede pública enquanto a regra espera assinatura", desc: "O Espírito Santo seguiu com a correção de redação por IA na plataforma Letrus, avaliada por ensaio randomizado do J-PAL. O parecer do CNE que veda IA para dar nota a redação continuou sem homologação.", impacto: "A devolutiva formativa tem resultado medido; a nota dada pela máquina, não. A fronteira entre as duas virou a questão.", cor: "from-azul-700 to-azul-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-azul-600 transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-lilas-500 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Leitura estratégica</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rosa-600" />
              <span className="text-sm text-rosa-600 font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-azul-600 to-navy-900 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascoteInverso} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    O modelo de IA ficou barato e deixou de diferenciar os produtos. O que diferencia agora é o desenho pedagógico, que decide se a IA ensina ou só responde, e a prova de que o aluno aprende com ela.
                  </p>
                  <p className="text-white/70 text-sm">
                    A pergunta do cliente vai deixar de ser se o produto tem IA e passar a ser se há prova de que o aluno aprende com ela.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="py-20 px-6 bg-azul-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              O que construir <span className="text-azul-600">a partir disso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titulo: "Painel de uso produtivo para o professor", desc: "Classificar cada interação do aluno com a IA e mostrar o resultado por turma e período; registrar as conversas com política de retenção desde já.", destaque: true },
                { titulo: "Tutor que entra no erro, dentro de uma trilha com domínio obrigatório", desc: "Começar pelo banco de itens: calibrar dificuldade e mapear pré-requisitos por habilidade da BNCC.", destaque: true },
                { titulo: "Linha de base de aprendizagem com uma rede parceira", desc: "Fechar a rede parceira e o desenho do estudo, com o recurso ligado e desligado por turma.", destaque: true },
                { titulo: "Devolutiva formativa separada da atribuição de nota", desc: "Separar devolutiva e nota no modelo de dados e exigir validação humana registrada para nota em texto autoral.", destaque: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-azul-600 to-navy-900 text-white border-transparent shadow-lg'
                      : 'bg-white border-azul-200 hover:border-rosa-600 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-azul-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-azul-600'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-azul-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-azul-600 text-azul-600 rounded-xl font-medium hover:bg-azul-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-azul-600 text-white rounded-xl font-medium hover:bg-azul-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Radar" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Setembro de 2026 · Edição #12</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const MESES_ABREV: Record<string, string> = { Abr: 'Abril', Mai: 'Maio', Jun: 'Junho' };

// Trilha no formato "#11 texto → #12 texto"; aceita "#08 a #10" e, para as
// edições sem número, o mês ("Mai/26 texto").
function LinhaDoTempo({ trilha, rotulo, className = '' }: { trilha: string; rotulo: string; className?: string }) {
  const passos = trilha.split(' → ');
  return (
    <ol aria-label={rotulo} className={`space-y-2.5 ${className}`}>
      {passos.map((passo, j) => {
        const num = passo.match(/^#(\d+)(?: a #(\d+))?\s+(.*)$/);
        const mes = passo.match(/^(Abr|Mai|Jun)\/(\d{2})\s+(.*)$/);
        const edicao = num
          ? num[2] ? `Edições #${num[1]}–${num[2]}` : `Edição #${num[1]}`
          : mes ? `${MESES_ABREV[mes[1]]} de 20${mes[2]}` : '';
        const texto = num ? num[3] : mes ? mes[3] : passo;
        const atual = j === passos.length - 1;
        return (
          <li key={j} className="relative flex flex-col sm:flex-row sm:gap-3 pl-5">
            {!atual && <span aria-hidden="true" className="absolute left-[5px] top-3.5 -bottom-3 w-px bg-gray-300" />}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-[5px] size-[11px] rounded-full border-2 ${
                atual ? 'bg-azul-600 border-azul-600 ring-4 ring-azul-100' : 'bg-white border-gray-300'
              }`}
            />
            <span className={`shrink-0 sm:min-w-[6.25rem] whitespace-nowrap text-[11px] font-bold tabular-nums leading-5 ${atual ? 'text-azul-700' : 'text-gray-500'}`}>
              {edicao}
            </span>
            <span className={`text-sm md:text-xs leading-5 ${atual ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
              {texto}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

type Plataforma = {
  player: string;
  produto: string;
  mercado: 'Plataforma privada' | 'Plataforma pública';
  publicos: string[];
  entregue: string;
  leitura: string;
  fonte: string;
  fonteLabel: string;
  historico: string;
};

type LinhaConcorrencia = {
  player: string;
  grupo: string;
  movimento: string;
  estrategia: string;
  exposicao: string;
  impacto: string;
};

type OpcaoTipo = { valor: string; rotulo: string; curto: string };

function useFiltros<T extends { player: string }>(itens: T[], tipoDe: (item: T) => string) {
  const [tipo, setTipo] = useState('todas');
  const [empresas, setEmpresas] = useState<string[]>([]);
  const doTipo = itens.filter(f => tipo === 'todas' || tipoDe(f) === tipo);
  const visiveis = doTipo.filter(f => empresas.length === 0 || empresas.includes(f.player));
  return {
    itens,
    tipoDe,
    tipo,
    empresas,
    doTipo,
    visiveis,
    trocarTipo: (valor: string) => {
      setTipo(valor);
      setEmpresas(sel => sel.filter(p => valor === 'todas' || itens.some(f => f.player === p && tipoDe(f) === valor)));
    },
    alternarEmpresa: (player: string) =>
      setEmpresas(sel => (sel.includes(player) ? sel.filter(p => p !== player) : [...sel, player])),
    desmarcarEmpresas: () => setEmpresas([]),
    limpar: () => {
      setTipo('todas');
      setEmpresas([]);
    },
  };
}

const chipFiltro = (ativo: boolean) =>
  `inline-flex items-center gap-1.5 h-11 sm:h-9 px-4 rounded-full border text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,scale] duration-150 active:scale-96 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-600 ${
    ativo ? 'bg-navy-900 border-navy-900 text-white' : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
  }`;

function BarraFiltros<T extends { player: string }>({
  id,
  rotulo,
  unidade,
  opcoes,
  filtro,
}: {
  id: string;
  rotulo: string;
  unidade: string;
  opcoes: OpcaoTipo[];
  filtro: ReturnType<typeof useFiltros<T>>;
}) {
  const { itens, tipoDe, tipo, empresas, doTipo, visiveis } = filtro;
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);
  const filtrando = tipo !== 'todas' || empresas.length > 0;

  useEffect(() => {
    if (!aberto) return;
    const fora = (e: PointerEvent) => {
      const alvo = e.target as Node;
      if (!painelRef.current?.contains(alvo) && !botaoRef.current?.contains(alvo)) setAberto(false);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', fora);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('pointerdown', fora);
      document.removeEventListener('keydown', esc);
    };
  }, [aberto]);

  return (
    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
      {filtrando && (
        <button
          type="button"
          onClick={filtro.limpar}
          className="h-11 sm:h-9 px-3 rounded-full text-sm font-medium text-azul-600 hover:bg-azul-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-600"
        >
          Limpar filtros
        </button>
      )}
      <div role="group" aria-label={rotulo} className="flex flex-wrap gap-2">
        {opcoes.map(t => {
          const ativo = tipo === t.valor;
          const total = t.valor === 'todas' ? itens.length : itens.filter(f => tipoDe(f) === t.valor).length;
          return (
            <button key={t.valor} type="button" aria-pressed={ativo} onClick={() => filtro.trocarTipo(t.valor)} className={chipFiltro(ativo)}>
              {ativo && <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />}
              {t.rotulo}
              <span className={`text-xs tabular-nums ${ativo ? 'text-white/70' : 'text-gray-500'}`}>{total}</span>
            </button>
          );
        })}
      </div>

      <div className="relative">
        <button
          ref={botaoRef}
          type="button"
          aria-expanded={aberto}
          aria-controls={id}
          onClick={() => setAberto(v => !v)}
          className={chipFiltro(empresas.length > 0)}
        >
          <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
          Mais filtros
          {empresas.length > 0 && (
            <span className="min-w-5 h-5 px-1.5 rounded-full bg-white text-navy-900 text-xs font-semibold tabular-nums inline-flex items-center justify-center">
              <span className="sr-only">empresas marcadas: </span>
              {empresas.length}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-[rotate] duration-150 ${aberto ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>

        {aberto && (
          <div
            ref={painelRef}
            id={id}
            className="absolute start-0 sm:start-auto sm:end-0 top-full mt-2 z-20 w-64 max-w-[calc(100vw-3rem)] rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5"
          >
            <fieldset>
              <legend className="px-2 pt-1 pb-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Empresas</legend>
              {doTipo.map(f => (
                <label
                  key={f.player}
                  className="flex items-center gap-3 min-h-11 sm:min-h-9 px-2 rounded-lg text-sm text-gray-800 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={empresas.includes(f.player)}
                    onChange={() => filtro.alternarEmpresa(f.player)}
                    className="w-4 h-4 accent-azul-600"
                  />
                  <span className="flex-1">{f.player}</span>
                  {tipo === 'todas' && (
                    <span className="text-xs text-gray-500">{opcoes.find(o => o.valor === tipoDe(f))?.curto}</span>
                  )}
                </label>
              ))}
            </fieldset>
            {empresas.length > 0 && (
              <button
                type="button"
                onClick={filtro.desmarcarEmpresas}
                className="w-full min-h-11 sm:min-h-9 mt-1 px-2 rounded-lg text-start text-sm font-medium text-azul-600 hover:bg-azul-50"
              >
                Desmarcar empresas
              </button>
            )}
          </div>
        )}
      </div>
      <p role="status" className="sr-only">
        Mostrando {visiveis.length} de {itens.length} {unidade}
      </p>
    </div>
  );
}

const TIPOS_PLATAFORMA: OpcaoTipo[] = [
  { valor: 'todas', rotulo: 'Todas', curto: '' },
  { valor: 'Plataforma privada', rotulo: 'Privadas', curto: 'Privada' },
  { valor: 'Plataforma pública', rotulo: 'Públicas', curto: 'Pública' },
];

function RadarFuncionalidades({ itens }: { itens: Plataforma[] }) {
  const filtro = useFiltros(itens, f => f.mercado);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mb-5">
        <div className="flex items-center gap-2">
          <img src={radarIcone} alt="" width={234} height={229} className="h-6 w-auto" />
          <h3 className="text-xl font-bold text-navy-900">Radar de funcionalidades</h3>
        </div>
        <BarraFiltros id="radar-filtro-empresas" rotulo="Filtrar plataformas por tipo" unidade="plataformas" opcoes={TIPOS_PLATAFORMA} filtro={filtro} />
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {filtro.visiveis.map((f, i) => (
          <motion.div
            key={f.player}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
              <h4 className="font-bold text-gray-900 text-lg leading-snug">{f.player}</h4>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                  f.mercado === 'Plataforma pública' ? 'bg-ambar-100 text-ambar-700' : 'bg-azul-100 text-azul-700'
                }`}
              >
                {f.mercado}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{f.produto}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {f.publicos.map(p => (
                <span key={p} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                  {p}
                </span>
              ))}
            </div>

            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">O que está no produto</p>
            <p className="text-sm md:text-xs text-gray-700 leading-relaxed mb-4">{f.entregue}</p>

            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">O que isso significa</p>
            <p className="text-sm md:text-xs text-gray-700 leading-relaxed mb-5">{f.leitura}</p>

            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Histórico no Radar</p>
            <LinhaDoTempo trilha={f.historico} rotulo={`Histórico de ${f.player} por edição`} className="bg-gray-50 rounded-xl px-4 py-3.5 mb-5" />

            <a
              href={f.fonte}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-azul-600 hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {f.fonteLabel}
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
}

const TIPOS_MERCADO: OpcaoTipo[] = [
  { valor: 'todas', rotulo: 'Todos', curto: '' },
  { valor: 'privado', rotulo: 'Privado', curto: 'Privado' },
  { valor: 'publico', rotulo: 'Público', curto: 'Público' },
];

const TOM_TABELA = {
  privado: { barra: 'bg-azul-600', thead: 'bg-azul-50', th: 'text-azul-700', par: 'bg-white hover:bg-azul-50/30', impar: 'bg-azul-50/20 hover:bg-azul-50/40' },
  publico: { barra: 'bg-rosa-600', thead: 'bg-ambar-50', th: 'text-ambar-700', par: 'bg-white hover:bg-ambar-50/30', impar: 'bg-ambar-50/20 hover:bg-ambar-50/40' },
};

function ConcorrenciaDireta({ privado, publico }: { privado: LinhaConcorrencia[]; publico: LinhaConcorrencia[] }) {
  const todas = [...privado.map(l => ({ ...l, mercado: 'privado' })), ...publico.map(l => ({ ...l, mercado: 'publico' }))];
  const filtro = useFiltros(todas, l => l.mercado);
  const tabelas = (['privado', 'publico'] as const)
    .map(m => ({ mercado: m, linhas: filtro.visiveis.filter(l => l.mercado === m) }))
    .filter(t => t.linhas.length > 0);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mb-5">
        <h3 className="text-xl font-bold text-navy-900">Concorrência direta</h3>
        <BarraFiltros id="concorrencia-filtro-empresas" rotulo="Filtrar concorrentes por mercado" unidade="concorrentes" opcoes={TIPOS_MERCADO} filtro={filtro} />
      </div>

      {tabelas.map(({ mercado, linhas }) => {
        const tom = TOM_TABELA[mercado];
        return (
          <div key={mercado} className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-1.5 h-5 rounded-full ${tom.barra}`} />
              <h4 className="text-base font-bold text-navy-900">{mercado === 'privado' ? 'Mercado privado' : 'Mercado público'}</h4>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tom.thead}>
                    {['Player', 'Grupo / Soluções', 'Movimento observado', 'Posição diante da evidência', 'Exposição', 'Impacto'].map(h => (
                      <th key={h} className={`px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider ${tom.th}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {linhas.map((row, i) => (
                    <tr key={row.player} className={`${i % 2 === 0 ? tom.par : tom.impar} transition-colors`}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm md:text-xs leading-relaxed">{row.grupo}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm md:text-xs leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm md:text-xs leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.exposicao === 'Baixa' ? 'bg-green-100 text-green-700' : 'bg-amarelo-100 text-amarelo-800'}`}>
                          {row.exposicao}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.impacto === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-azul-100 text-azul-700'}`}>
                          {row.impacto}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('insight');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentView, setCurrentView] = useState<View>('main');
  const [modoLeitura, setModoLeitura] = useState<ModoLeitura>('completa');
  const modoExecutivo = modoLeitura === 'executiva';
  const secoesVisiveis = SECOES.filter(s => !modoExecutivo || s.executiva);

  useEffect(() => {
    const handleScroll = () => {
      const current = secoesVisiveis.map(s => s.id).find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modoLeitura]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEdicao = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'edicao-setembro-2026-b') {
    return (
      <EdicaoSetembro2026B
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-setembro-2026') {
    return (
      <EdicaoSetembro2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-agosto-2026-b') {
    return (
      <EdicaoAgosto2026B
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-agosto-2026') {
    return (
      <EdicaoAgosto2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-julho-2026') {
    return (
      <EdicaoJulho2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-junho-2026-b') {
    return (
      <EdicaoJunho2026B
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-junho-2026') {
    return (
      <EdicaoJunho2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-maio-2026') {
    return (
      <EdicaoMaio2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  if (currentView === 'edicao-abril-2026') {
    return (
      <EdicaoAbril2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={radarIcone}
        mascoteInverso={radarIconeClaro}
      />
    );
  }

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-white">
      <a
        href="#insight"
        onClick={e => { e.preventDefault(); scrollToSection('insight'); }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-azul-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Pular para o conteúdo
      </a>
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Masthead — identidade à esquerda, procedência à direita */}
          <div className="flex items-center justify-between gap-4 h-14 md:h-[60px]">

            <div className="flex items-center gap-3.5 min-w-0">
              <img src={radarLogo} alt="Radar" className="h-7 md:h-8 w-auto shrink-0" />
              <span aria-hidden="true" className="hidden lg:block w-px h-7 bg-gray-200" />
              <span className="hidden lg:block text-[11px] leading-snug text-gray-500 max-w-[10.5rem]">Inteligência Estratégica de IA na Educação</span>
            </div>

            <div className="hidden sm:flex items-center gap-5 shrink-0">
              <div className="text-right leading-none">
                <span className="block text-[11px] font-bold text-azul-600 uppercase tracking-[0.16em]">Edição #13</span>
                <span className="block text-[11px] text-gray-500 mt-1.5 tabular-nums">1–13 out 2026</span>
              </div>
              <div className="w-px h-9 bg-gray-200" />
              <img src={hubLogo} alt="Hub de IA, Produto e Experiência" className="h-9 w-auto" />
            </div>
          </div>

          {/* Sumário da edição — indicador de seção em vez de pílula */}
          <nav aria-label="Seções desta edição" className="flex items-center justify-start md:justify-center gap-0.5 border-t border-gray-100 overflow-x-auto flex-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {secoesVisiveis.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`relative px-3 py-2.5 text-xs whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? 'text-azul-600 font-semibold'
                    : 'text-gray-500 font-medium hover:text-navy-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span aria-hidden="true" className="absolute inset-x-2.5 bottom-0 h-[2px] bg-azul-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* ── INSIGHT DA QUINZENA ── */}
      <section id="insight" className="relative pt-[97px] md:pt-[101px] bg-white">
        {/* Faixa navy com as formas orgânicas da identidade do Hub */}
        <div className="relative overflow-hidden bg-navy-900 text-white">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 600"
            preserveAspectRatio="xMaxYMid slice"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full md:w-[40vw] opacity-25 md:opacity-100"
          >
            <path d="M400 0H118c-40 92 32 172 132 192 80 16 120 60 150 90z" className="fill-azul-600" />
            <path d="M400 330c-100-10-160 50-190 120-30 70-90 120-170 150h360z" className="fill-lilas-500" />
            <path d="M20 592c100-30 150-90 180-162 35-80 100-130 200-130v45c-80 0-128 40-156 105-34 80-94 135-174 150z" className="fill-amarelo-400" />
            <g className="fill-white" opacity="0.6">
              {[0, 1, 2, 3].map(l => [0, 1, 2, 3, 4].map(c => (
                <circle key={`${l}-${c}`} cx={300 + c * 18} cy={470 + l * 18} r="2.4" />
              )))}
            </g>
          </svg>

          <div className="relative max-w-6xl mx-auto px-6 pt-14 md:pt-24 pb-44 md:pb-52">
            <motion.div
              initial="oculto"
              animate="visivel"
              variants={{ visivel: { transition: { staggerChildren: 0.1 } } }}
              className="md:max-w-[56%]"
            >
              <motion.div
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="flex items-center gap-2.5 mb-6"
              >
                <Sparkles className="w-4 h-4 text-amarelo-400" strokeWidth={2} />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/75">Insight da quinzena</span>
              </motion.div>

              <motion.h1
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-[clamp(2rem,3.8vw,3.25rem)] text-white font-extrabold mb-7 leading-[1.08] tracking-[-0.025em] text-balance"
              >
                A IA na escola está saindo da mão do aluno <span className="text-amarelo-400">e indo para a mão do professor.</span>
              </motion.h1>

              <motion.p
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-base md:text-[17px] text-white/80 leading-[1.7]"
              >
                Em outubro, o MEC sinalizou que vai liberar a IA para corrigir redação desde que a nota fique com o professor, um distrito americano proibiu a IA para todos os alunos semanas depois de liberar o Gemini para parte deles, e um ensaio universitário mediu notas mais baixas nas turmas que ganharam um tutor de IA. Na direção contrária, Google e OpenAI abriram ferramentas de estudo para alunos mais novos. <strong className="font-semibold text-white">O recurso que trabalha com o professor deve ganhar o aval da regra; o que depende do aluno sozinho ficou exposto</strong>.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Bloco de tensão sobreposto à borda da faixa */}
        <div className="relative max-w-6xl mx-auto px-6 -mt-28 md:-mt-32 pb-16">
          <div className="bg-white rounded-3xl p-6 md:p-9 shadow-[0_1px_2px_rgba(1,34,112,0.06),0_16px_40px_-16px_rgba(1,34,112,0.28)]">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 mb-6">A tensão que organiza esta edição</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-2 border-green-500 pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wide">O que a evidência sustenta</p>
                    </div>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                      A IA com o professor no fluxo, corrigindo como primeiro leitor e deixando a nota para ele, está perto de ganhar aval na regra brasileira e já funciona em redes estaduais. Do outro lado, um ensaio com grupo de comparação mostrou que só oferecer um tutor de IA à turma, sem desenho para isso, pode baixar a nota.
                    </p>
                  </div>
                  <div className="border-l-2 border-red-400 pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide">O que ela derruba</p>
                    </div>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                      A ideia de que basta pôr a IA nas mãos do aluno para ele aprender mais. Onde a ferramenta chegou ao aluno sem desenho e sem controle da escola, a resposta foi proibir: em Frederick County, o distrito voltou atrás semanas depois de liberar o Gemini.
                    </p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-gray-100">
                  <p className="text-sm md:text-xs text-gray-800 leading-relaxed">
                    <span className="font-bold text-azul-600">A conclusão:</span> o comprador vai separar o que a IA faz com o professor do que ela faz com o aluno sozinho. O recurso voltado ao aluno vai precisar mostrar <em>desenho, controle da escola e evidência</em>; o que trabalha com o professor, com a nota assinada e registrada, ficou do lado da regra.
                  </p>
                </div>
          </div>
        </div>
      </section>

      {/* ── SELETOR DE MODO DE LEITURA ── */}
      <section className="py-10 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-sm font-bold text-navy-900 mb-1">Como você quer ler esta edição?</h2>
            <p className="text-xs text-gray-600">Você pode trocar a qualquer momento.</p>
          </div>

          <div role="radiogroup" aria-label="Modo de leitura" className="grid sm:grid-cols-2 gap-4">
            {[
              {
                valor: 'executiva' as ModoLeitura,
                icone: <Target className="w-4 h-4" />,
                titulo: 'Leitura executiva',
                tempo: '3 min · 3 seções',
                desc: 'A mudança da quinzena e o que fazer com ela.',
              },
              {
                valor: 'completa' as ModoLeitura,
                icone: <LayoutList className="w-4 h-4" />,
                titulo: 'Leitura aprofundada',
                tempo: '15 min · edição completa',
                desc: 'Inclui evidências, concorrência, casos de fora e o que entra no roadmap.',
              },
            ].map(opcao => {
              const selecionado = modoLeitura === opcao.valor;
              return (
                <button
                  key={opcao.valor}
                  role="radio"
                  aria-checked={selecionado}
                  onClick={() => setModoLeitura(opcao.valor)}
                  className={`text-left rounded-2xl border-2 p-5 transition-all ${
                    selecionado
                      ? 'border-azul-600 bg-azul-50/50 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={selecionado ? 'text-azul-600' : 'text-gray-600'}>{opcao.icone}</span>
                      <span className={`font-bold text-sm ${selecionado ? 'text-azul-600' : 'text-gray-900'}`}>
                        {opcao.titulo}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
                        selecionado ? 'bg-azul-600 border-azul-600' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {selecionado && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </span>
                  </div>
                  <p className={`text-xs font-semibold mb-2 ${selecionado ? 'text-rosa-600' : 'text-gray-600'}`}>
                    {opcao.tempo}
                  </p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{opcao.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESUMO EXECUTIVO ── */}
      <section id="resumo" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo executivo</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              O que mudou e <span className="text-azul-600">o que decidir</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base max-w-3xl text-pretty">
              Cinco pontos para a liderança, cada um com a decisão que exige.
            </p>

            <div className="grid md:grid-cols-2 gap-5 items-start">
              {[
                {
                  tag: "Mudança de regra",
                  tagCor: "bg-azul-100 text-azul-700",
                  conclusao: "A regra brasileira deve liberar a IA na correção, com a nota sempre do professor",
                  raciocinio: "Reportagens de 13 de outubro dizem que o MEC vai homologar o parecer do CNE com mudanças: a IA passa a poder corrigir redação e questão dissertativa como primeiro filtro, e a nota e a decisão de aprovar ou reprovar ficam com o professor. Redes estaduais como Paraná, São Paulo e Espírito Santo já usam IA na correção de redação.",
                  decisao: "Desenhar a correção assistida para o professor revisar e assinar a nota, com registro, antes que o texto oficial saia."
                },
                {
                  tag: "Vento contra",
                  tagCor: "bg-red-100 text-red-700",
                  conclusao: "A proibição do uso de IA pelo aluno já alcança todas as séries numa rede americana",
                  raciocinio: "Frederick County, em Maryland, proibiu o uso de IA pelos alunos do pré ao 12º ano semanas depois de liberar o Gemini para os anos finais e o ensino médio. Entre os motivos relatados está que os professores não conseguiam desligar a ferramenta nos aparelhos dos alunos.",
                  decisao: "Garantir que a escola consiga desligar cada recurso voltado ao aluno, por série e por turma, e que o professor veja o que está ligado."
                },
                {
                  tag: "Tese revista",
                  tagCor: "bg-ambar-100 text-ambar-700",
                  conclusao: "Oferecer um tutor de IA à turma, sem desenho, pode baixar a nota",
                  raciocinio: "Na edição passada, a leitura era de que o ganho com IA é pequeno e depende do desenho. Agora há um ensaio com grupo de comparação em que o simples acesso a um assistente de IA ancorado no material do curso piorou o resultado e reduziu o uso do próprio curso, mais entre alunos de primeira geração.",
                  decisao: "Não ampliar recurso de conversa para o aluno sem trilha, sem medida de uso e sem plano de avaliação."
                },
                {
                  tag: "Contramovimento",
                  tagCor: "bg-gray-200 text-gray-700",
                  conclusao: "Google e OpenAI vão direto ao aluno, e a segurança virou a objeção",
                  raciocinio: "O Google abriu o hub de estudo do Gemini a alunos de todas as idades nas contas escolares, e a OpenAI anunciou planejador de faculdade, flashcards e quizzes no ChatGPT para adolescentes. No mesmo dia do anúncio da OpenAI, a Common Sense Media classificou o ChatGPT for Teens como risco inaceitável para menores de 18 anos.",
                  decisao: "Usar controle da escola, segurança verificável e registro como argumento contra a ferramenta gratuita que o aluno já tem."
                },
                {
                  tag: "Hipótese que caiu",
                  tagCor: "bg-rosa-100 text-rosa-700",
                  conclusao: "Caiu a leitura de que a correção de redação por IA seria proibida",
                  raciocinio: "Nas edições #11 e #12, tratamos a correção de redação por IA como vetada pelo parecer do CNE, à espera só da homologação. Se o MEC homologar com a mudança anunciada, a correção volta a ser permitida como primeiro filtro; o que continua vetado é a máquina dar a nota ou decidir a aprovação.",
                  decisao: "Rever o que foi despriorizado por causa da vedação, mantendo a separação entre devolutiva e nota."
                },
].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-rosa-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${item.tagCor}`}>{item.tag}</span>
                  </div>
                  <p className="font-bold text-gray-900 mb-2 text-base">{item.conclusao}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.raciocinio}</p>
                  <div className="bg-azul-50 rounded-lg px-4 py-2.5">
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                      <span className="font-semibold text-azul-600">Decisão:</span> {item.decisao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* Seções da leitura aprofundada — ocultas na leitura executiva */}
      {!modoExecutivo && (
        <>
      {/* ── SINAIS DA QUINZENA ── */}
      <section id="movimentos" className="py-16 md:py-20 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Zap className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Sinais da quinzena</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Quatro sinais, <span className="text-azul-600">uma direção</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base max-w-3xl text-pretty">
              Regulador brasileiro, rede americana, pesquisa e big techs mostram, por ângulos diferentes, a mesma separação: a IA que trabalha com o professor ganha espaço, e a que fica com o aluno sozinho passa a ser restringida ou cobrada. Os fatos centrais de cada sinal são de 1 a 13 de outubro; o contexto anterior vem datado no cartão.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {[
                {
                  titulo: "O MEC deve homologar a regra de IA liberando a correção de redação, com a nota nas mãos do professor",
                  empresa: "MEC · CNE · redes estaduais",
                  data: "6–13 out/2026",
                  consolida: "Súmula do parecer no Diário Oficial · homologação anunciada com mudanças · correção por IA já em uso no Paraná, em São Paulo e no Espírito Santo",
                  resumo: "Segundo o escritório Mattos Filho, a súmula do Parecer CNE/CP nº 15/2026, aprovado em 1º de setembro, saiu no Diário Oficial em 6 de outubro, e o texto seguiu para homologação. Em 13 de outubro, reportagens disseram que o ministro Leonardo Barchini deve homologá-lo com mudanças. A principal é liberar ferramentas de IA para corrigir redações e questões dissertativas como primeiro filtro, o que a versão de setembro proibia. A nota continua sendo dada só pelo professor, e a IA não pode decidir aprovação ou reprovação. Outra mudança é proibir a IA na educação infantil, mesmo com mediação do professor. As redes terão doze meses para se adaptar a partir da homologação. Até o fechamento, não localizamos a homologação publicada. A mudança aproxima a regra do que redes estaduais já fazem: o Paraná corrige redações com IA desde 2025, São Paulo usa assistentes de correção na Redação Paulista e o Espírito Santo usa a Letrus desde 2019.",
                  impacto: "A regra deixa de separar a ferramenta permitida da proibida e passa a separar quem faz o quê no mesmo fluxo: a IA lê primeiro, e o professor decide. Isso reabre para o mercado a correção automática, que parecia vetada, mas com uma exigência que muda o desenho do produto: a nota precisa passar pelo professor, e a escola vai querer provar isso.",
                  professor: "Ganha um primeiro leitor para as redações e continua responsável pela nota.",
                  aluno: "Pode receber devolutiva mais rápida, mas a nota oficial continua vindo do professor.",
                  gestor: "Precisa saber, em cada contrato, onde a IA corrige e onde o professor assina.",
                  roadmap: "Correção em dois turnos, com a revisão e a assinatura do professor registradas.",
                  fonte: "https://www.apufsc.org.br/2026/10/13/mec-vai-homologar-com-mudancas-parecer-que-cria-regras-para-uso-de-inteligencia-artificial-na-educacao/",
                  color: "from-azul-700 to-azul-800"
                },
                {
                  titulo: "Um distrito de Maryland proibiu a IA para todos os alunos semanas depois de liberar o Gemini",
                  empresa: "Frederick County Public Schools",
                  data: "7 out/2026",
                  consolida: "Votação do conselho escolar por 6 a 1 · piloto do Gemini iniciado em setembro · lei estadual que obriga os distritos a definir política de IA",
                  resumo: "Em 7 de outubro, o conselho de educação de Frederick County votou, por 6 a 1, por restringir o uso de IA pelos alunos do pré-escolar ao 12º ano. Os conselheiros pensaram primeiro em limitar a regra aos mais novos e depois a estenderam ao ensino médio. A política tem exceções para aulas específicas, para o ensino sobre a própria IA e para adaptações a alunos com deficiência. A votação veio semanas depois de o distrito começar, em setembro, um piloto que permitia o Gemini nos anos finais e no ensino médio com permissão do professor. Entre os motivos relatados estão cola, dependência da ferramenta, famílias que não foram avisadas do piloto e professores que não conseguiam desligar o Gemini nos aparelhos dos alunos. Uma lei estadual de 2026 obriga os distritos de Maryland a definir sua política de IA neste outono.",
                  impacto: "É a restrição mais ampla entre as que acompanhamos: Nova York e Los Angeles cortaram por idade ou por aparelho, e Frederick County cortou o uso pelo aluno em todas as séries. O motivo mais útil para produto é o operacional: a escola liberou uma ferramenta que o professor não conseguia controlar, e a saída foi desligar tudo.",
                  professor: "Deixa de contar com a IA nas atividades dos alunos, salvo as exceções, e parte dos professores já voltou ao papel.",
                  aluno: "Perde o acesso na escola, mas continua com as ferramentas gratuitas fora dela.",
                  gestor: "Vai pedir ao fornecedor controle fino antes de liberar qualquer recurso voltado ao aluno.",
                  roadmap: "Controle da escola por série, turma e recurso, com o professor vendo e desligando o que estiver ativo.",
                  fonte: "https://www.fox5dc.com/news/frederick-county-school-board-votes-ban-ai-use-pre-k-through-12th-grade-students",
                  color: "from-rosa-600 to-rosa-700"
                },
                {
                  titulo: "Dar acesso a um tutor de IA baixou a nota dos alunos num ensaio com 2.379 universitários",
                  empresa: "Universidade de Maryland · EdWorkingPapers",
                  data: "Out/2026",
                  consolida: "Ensaio com 30 professores e 2.379 alunos · nota final e uso do material do curso · efeito maior entre alunos de primeira geração",
                  resumo: "Um working paper publicado no EdWorkingPapers em outubro relata um ensaio feito no segundo semestre de 2025 numa grande universidade pública americana. Professores foram sorteados para oferecer ou não às turmas um assistente de estudo baseado no GPT-4o, ancorado no material do curso e integrado à plataforma da universidade. Na comparação entre turmas do mesmo curso, a nota final das turmas com acesso ficou 0,37 desvio-padrão abaixo, cerca de 4 pontos numa escala de 0 a 100, e a participação na plataforma do curso caiu 0,90 desvio-padrão. Só cerca de 15% dos alunos que receberam o assistente o usaram. A perda estimada foi maior entre alunos de primeira geração na universidade.",
                  impacto: "O efeito é de oferecer o assistente, e não de usá-lo: com poucos usando, a nota caiu para a turma inteira. Os autores sugerem que a ferramenta aprovada pela universidade mudou o jeito de estudar, com menos uso do material do curso. O ensaio testou um assistente genérico, e não um tutor desenhado para não dar a resposta, mas mostra que pôr IA ao alcance do aluno não é neutro.",
                  professor: "Ganha um motivo concreto para pedir que o recurso de IA venha com desenho e acompanhamento.",
                  aluno: "Pode estudar menos com o material do curso quando tem um assistente à mão, e quem tem menos apoio em casa perde mais.",
                  gestor: "Passa a ter evidência de que liberar IA sem desenho pode ter custo de aprendizagem.",
                  roadmap: "Lançar recurso para o aluno por turma, com grupo de comparação e medida do uso do material.",
                  fonte: "https://www.edtechinnovationhub.com/news/students-offered-an-ai-tutor-got-lower-grades-and-disengaged-from-course-materials-university-of-maryland-trial-finds",
                  color: "from-azul-600 to-azul-700"
                },
                {
                  titulo: "Google e OpenAI levaram a IA de estudo a alunos mais novos, e a segurança virou a objeção",
                  empresa: "Google · OpenAI · Common Sense Media",
                  data: "1–7 out/2026",
                  consolida: "Hub de estudo do Gemini para todas as idades · planejador de faculdade, flashcards e quizzes no ChatGPT para adolescentes · ChatGPT for Teens classificado como risco inaceitável",
                  resumo: "No começo de outubro, o Google abriu o hub de estudo do Gemini, com cadernos, flashcards e quizzes, a usuários de todas as idades do Google Workspace for Education, sob os controles que o administrador da escola já usa. Em 7 de outubro, a OpenAI anunciou que o ChatGPT for Teens vai ganhar um planejador de candidatura à faculdade, para alunos americanos do 10º ao 12º ano, além de flashcards e quizzes feitos a partir das anotações do aluno. No mesmo dia, a Common Sense Media classificou o ChatGPT for Teens como risco inaceitável para menores de 18 anos, depois de mais de 4 mil testes. Segundo a avaliação, os alertas aos pais não dispararam em contas novas, o modo de estudo podia ser contornado e a estimativa de idade não funcionou. A OpenAI contestou o método e disse que os alertas levam algumas horas para funcionar depois que as contas são ligadas.",
                  impacto: "As big techs seguem o caminho oposto ao das escolas: enquanto redes restringem o uso pelo aluno, elas oferecem ferramentas de estudo direto a ele, de graça. O aluno vai chegar à escola com flashcards, quizzes e planejamento prontos, e a pergunta da família e da rede passa a ser se aquilo é seguro. Avaliação independente de segurança, que até aqui era preocupação de big tech, vira critério de compra para qualquer recurso voltado ao aluno.",
                  professor: "Vai lidar com alunos que já usam ferramentas de estudo fora do controle da escola.",
                  aluno: "Ganha ferramentas gratuitas de revisão; no caso do ChatGPT para adolescentes, com proteções que uma avaliação independente considerou insuficientes.",
                  gestor: "Vai querer, de qualquer fornecedor, prova de que o recurso voltado ao aluno é seguro e controlável.",
                  roadmap: "Testar a segurança dos recursos voltados ao aluno com bateria própria, antes de alguém testar por nós.",
                  fonte: "https://www.cnbc.com/make-it/2026/10/09/chatgpt-for-teens-safety-common-sense-media.html",
                  color: "from-azul-600 to-lilas-600"
                },
].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 text-xs bg-azul-50 text-azul-700 px-2 py-1 rounded-full font-medium">
                          <Users className="w-3 h-3" /> {m.empresa}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                          <Calendar className="w-3 h-3" /> {m.data}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-azul-600 bg-azul-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Sinal {i + 1}</span>
                    </div>
                    <h3 className="font-bold text-navy-900 mb-2 leading-snug">{m.titulo}</h3>
                    <div className="flex items-start gap-1.5 mb-4 border-l-2 border-gray-200 pl-3">
                      <Library className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                      <p className="text-[11px] text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-600">Consolida:</span> {m.consolida}
                      </p>
                    </div>
                    <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">{m.resumo}</p>
                    <div className="border-l-2 border-lilas-500 pl-4 mb-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Leitura estratégica</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{m.impacto}</p>
                    </div>
                    <div className="border-l-2 border-rosa-600 pl-4 space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-rosa-600">Consequência prática</p>
                      {[
                        { label: 'Professor', valor: m.professor },
                        { label: 'Aluno', valor: m.aluno },
                        { label: 'Gestor', valor: m.gestor },
                        { label: 'Roadmap', valor: m.roadmap },
                      ].map(linha => (
                        <p key={linha.label} className="text-sm md:text-xs text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                        </p>
                      ))}
                    </div>
                    <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-5 pt-4 border-t border-gray-100 w-full text-azul-600 hover:text-azul-700 transition-colors font-medium text-sm">
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      Ver fonte<span className="sr-only">: {m.titulo} (abre em nova aba)</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SINAIS DE AUSÊNCIA ── */}
      <section id="ausencias" className="pb-16 md:pb-20 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">Sinais de ausência</span>
            </div>
            <h2 className="text-2xl md:text-3xl text-navy-900 font-bold mb-3 tracking-tight text-balance">
              O espaço que <span className="text-azul-600">ninguém ocupou</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              O que era razoável esperar nesta janela e não aconteceu. Continua disponível para quem chegar primeiro.
            </p>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {[
                {
                  cat: "O texto das mudanças na regra ainda não foi publicado",
                  nota: "As mudanças circulam por reportagens de 13 de outubro. Até o fechamento, não localizamos a homologação no Diário Oficial nem o texto oficial do que foi alterado.",
                  leitura: "O desenho do produto depende de detalhes que a manchete não traz: o que conta como primeiro filtro, que registro a escola precisa guardar e como fica o uso nos anos iniciais. Quem planejar só pela manchete pode ter de refazer.",
                  janela: "Monitorar"
                },
                {
                  cat: "Não localizamos concorrente direto que mostre como a nota de redação fica com o professor",
                  nota: "Entre os concorrentes diretos acompanhados, há correção de redação com IA para o aluno, como o PraticAI do Bernoulli, mas não localizamos descrição pública de como o professor revisa e assina a nota. Fora dessa lista, edtechs como o Super Professor já anunciam um corretor em que, segundo a empresa, a IA faz a primeira análise e o professor ajusta antes de o aluno receber a devolutiva.",
                  leitura: "É o ponto que a regra deve exigir, e as edtechs já estão ocupando. Entre os sistemas de ensino, quem publicar primeiro como a nota passa pelo professor vira a referência que as redes vão usar para comparar.",
                  janela: "Janela curta"
                },
                {
                  cat: "Não localizamos estudo de impacto de sistema de ensino sobre a própria IA",
                  nota: "Quarta edição seguida sem que localizemos estudo com grupo de comparação de sistema de ensino ou grupo editorial. O único ensaio randomizado brasileiro de IA pedagógica que localizamos segue sendo o da Letrus, avaliado pelo J-PAL no Espírito Santo.",
                  leitura: "Com o ensaio de Maryland, a pergunta deixou de ser só se a IA ajuda e passou a incluir se ela atrapalha. Sem número próprio, o setor vai responder com números de terceiros.",
                  janela: "Custo de atraso alto"
                },
                {
                  cat: "O Inep continua sem falar da prova de conceito de correção por IA",
                  nota: "Terceira edição sem posição. A redação do ENEM será em 8 de novembro, com dois corretores humanos, e não localizamos resultado ou posição do Inep sobre o teste com empresas anunciado em junho.",
                  leitura: "Se o MEC liberar a IA como primeiro filtro na escola, a pergunta seguinte é se o exame nacional vai pelo mesmo caminho. Enquanto o Inep não responder, cada fornecedor vai interpretar por conta própria.",
                  janela: "Monitorar"
                },
].map((item, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-5 hover:border-rosa-600 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                      item.janela === 'Janela curta' ? 'bg-red-100 text-red-700'
                      : item.janela === 'Janela aberta' ? 'bg-ambar-100 text-ambar-700'
                      : item.janela === 'Custo de atraso alto' ? 'bg-azul-100 text-azul-700'
                      : 'bg-gray-100 text-gray-600'
                    }`}>{item.janela}</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.cat}</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-3">{item.nota}</p>
                  <div className="bg-ambar-50/60 rounded-lg px-3 py-2">
                    <p className="text-[11px] text-gray-700 leading-relaxed">
                      <span className="font-semibold text-rosa-600">Por que a vaga importa:</span> {item.leitura}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TEMAS RECORRENTES ENTRE EDIÇÕES ── */}
      <section id="recorrentes" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Temas recorrentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Estrutural, emergente ou <span className="text-azul-600">pontual?</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base max-w-3xl text-pretty">
              Tema que volta a cada ciclo entra no roadmap; tema que apareceu uma vez fica em observação. Nesta edição, a restrição ao uso pelo aluno chegou à quarta edição seguida, a regra brasileira mudou de conteúdo, e não só de data, e a linha de interfaces novas saiu do radar depois de três edições sem desdobramento.
            </p>

            <div className="flex items-center gap-5 mb-10 flex-wrap">
              {[
                { t: 'Estrutural', d: 'em 3 ou mais edições: entra no roadmap', c: 'bg-red-100 text-red-700' },
                { t: 'Emergente', d: '2 edições ou aceleração recente: posicionar', c: 'bg-ambar-100 text-ambar-700' },
                { t: 'Pontual', d: 'aparição isolada: monitorar', c: 'bg-gray-200 text-gray-700' },
              ].map(l => (
                <div key={l.t} className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${l.c}`}>{l.t}</span>
                  <span className="text-xs text-gray-600">{l.d}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5 items-start">
              {[
                {
                  tema: "Restrição ao uso de IA pelo aluno",
                  tipo: "Estrutural",
                  trilha: "#10 trava padrão por idade em produto de massa → #11 vedação até o 5º ano no Brasil e moratória até o 8º ano em Nova York → #12 Los Angeles bloqueia a IA generativa para todos os alunos → #13 Frederick County proíbe do pré ao 12º ano, e o MEC deve vetar a IA na educação infantil",
                  leitura: "Quarta edição seguida, e a restrição continua se ampliando: começou pelos anos iniciais e agora alcança todas as séries numa rede americana. O motivo também evoluiu, de proteger crianças pequenas para desconfiar do efeito na aprendizagem e da falta de controle da escola. O professor continua dentro; quem sai é o aluno sozinho.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Quem assina a decisão sobre o aluno",
                  tipo: "Estrutural",
                  trilha: "#09 a interface passa a decidir o que cada perfil vê → #10 a própria plataforma passa a impedir que o aluno pegue a resposta pronta → #11 a norma proíbe a máquina de dar nota e de punir → #12 as big techs formam o professor para decidir → #13 a correção por IA deve ser liberada, com a nota sempre do professor",
                  leitura: "A regra brasileira chegou ao formato mais preciso até aqui: a máquina pode ler e comentar, e a pessoa decide. Isso troca a pergunta de se o produto usa IA para em que ponto do fluxo o professor assina, e o produto que não registrar esse ponto vai ter dificuldade de provar que cumpre a regra.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Evidência de aprendizagem como campo de disputa",
                  tipo: "Estrutural",
                  trilha: "#09 pesquisa longitudinal acoplada a rollout → #10 penalidade medida em coorte de 30 meses → #11 avaliação de impacto exigida por norma → #12 ensaios randomizados de tutor de IA em escala, com ganho modesto → #13 ensaio mede nota menor em turmas que só receberam acesso ao tutor",
                  leitura: "A evidência agora tem os dois lados: ganho pequeno quando o desenho obriga o aluno a trabalhar, e perda quando a IA só é oferecida. Com isso, um número próprio deixou de ser vantagem de marketing e virou defesa: é o que mostra de que lado o produto está.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "A regulação brasileira travada na última milha",
                  tipo: "Emergente",
                  trilha: "#07 CNE aprova e abre consulta → #08 a #10 sem homologação → #11 aprovado em plenário com prazo de doze meses → #12 quatro semanas sem assinatura → #13 súmula no Diário Oficial e homologação anunciada com mudanças",
                  leitura: "Na edição passada, a recomendação era tratar o conteúdo da regra como definido e só a data como incerta. Errou pela metade: o conteúdo também mudou, e justo no ponto mais sensível para produto, a correção. A lição para planejar é esperar o texto homologado antes de travar decisões de produto.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "Big tech direto ao aluno",
                  tipo: "Emergente",
                  trilha: "#07 simulado do ENEM no Gemini → #12 big techs se voltam à formação do professor → #13 Gemini aberto a alunos de todas as idades e ferramentas de estudo no ChatGPT para adolescentes",
                  leitura: "Depois de uma fase concentrada no professor, as big techs voltaram a mirar o aluno, agora com ferramentas de estudo gratuitas e cada vez mais cedo. É o movimento que as redes estão tentando conter, e é por onde a objeção de segurança deve chegar às famílias brasileiras.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "O que vira commodity",
                  tipo: "Emergente",
                  trilha: "#10 mediar o uso vira padrão de plataforma → #12 o modelo em si vira insumo barato → #13 a correção automática de redação vira prática de rede pública e deve ganhar aval da regra",
                  leitura: "A correção de redação por IA já roda em redes estaduais, em plataformas de concorrentes e em ferramentas gratuitas. Com o aval da regra, deixa de ser diferencial. O que fica difícil de copiar é a parte que a regra exige: o professor revisando e assinando, com registro.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-2xl border-2 ${item.cor} p-6`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="font-bold text-navy-900 text-lg leading-snug">{item.tema}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${item.badge}`}>
                      {item.tipo}
                    </span>
                  </div>
                  <LinhaDoTempo trilha={item.trilha} rotulo="Evolução do tema por edição" className="bg-white/80 rounded-xl px-4 py-3.5 mb-4" />
                  <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.leitura}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONCORRÊNCIA ── */}
      <section id="concorrencia" className="py-16 md:py-20 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Concorrência</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Quem está do lado <span className="text-azul-600">certo da evidência</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base max-w-3xl text-pretty">
              Concorrência direta é quem disputa a mesma escola, rede e orçamento. Não localizamos, entre os players acompanhados, lançamento de IA na janela, então a análise parte do que cada um já tem e de como isso fica diante de duas mudanças: a correção liberada com a nota do professor e a restrição ao uso pelo aluno.
            </p>

            <ConcorrenciaDireta
              privado={[
                {
                  player: "Poliedro",
                  grupo: "Cosmos · Polígono · Conviver · Sabiá",
                  movimento: "Sem lançamento na janela. O Cosmos continua restrito ao acervo próprio, para professor e gestor",
                  estrategia: "Com a IA só do lado do professor, já está no desenho que a regra e as redes favorecem. O risco é o inverso: se a correção assistida virar padrão, quem não a tiver fica atrás",
                  exposicao: "Baixa",
                  impacto: "Médio-Alto"
                },
                {
                  player: "Santillana",
                  grupo: "Moderna Core",
                  movimento: "Sem lançamento na janela. IA de acompanhamento de desempenho, sem geração voltada ao aluno",
                  estrategia: "Acompanha o desempenho sem falar com o aluno, o que a deixa fora das restrições. Tem o dado para medir o efeito do próprio produto, se quiser",
                  exposicao: "Baixa",
                  impacto: "Médio-Alto"
                },
                {
                  player: "Bernoulli",
                  grupo: "Co-crIA · TutorIA · PraticAI · Radar Enem",
                  movimento: "Sem lançamento na janela. Co-crIA para o professor, feito com a Teachy, e TutorIA e PraticAI para o aluno, apresentados em agosto",
                  estrategia: "Tem as duas pontas. O corretor de redação para o aluno pode virar o produto mais alinhado à regra, se a nota passar pelo professor, ou o mais exposto, se chegar ao aluno como nota",
                  exposicao: "Média",
                  impacto: "Alto"
                },
                {
                  player: "Arco Educação",
                  grupo: "SAS, SAE Digital, Geekie",
                  movimento: "Sem lançamento na janela. Plataforma adaptativa e literacia em IA no programa de competências",
                  estrategia: "A plataforma adaptativa fala direto com o aluno, o que a põe no centro das duas mudanças: precisa mostrar o controle da escola por série e o professor no fluxo para não ser alvo de restrição",
                  exposicao: "Média",
                  impacto: "Alto"
                },
                {
                  player: "Somos Educação",
                  grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                  movimento: "Sem lançamento na janela. O Plu oferece ao aluno resumo, exercício e tira-dúvidas ancorados ao capítulo",
                  estrategia: "Pelo que já está no produto, segue o mais exposto: conversa com o aluno é o formato que as redes estão restringindo e que o ensaio de Maryland associou a perda. Ancorar ao capítulo não resolve; o ensaio também usou um assistente ancorado no material",
                  exposicao: "Alta",
                  impacto: "Alto"
                },
              ]}
              publico={[
                {
                  player: "Saber",
                  grupo: "eDocente",
                  movimento: "Sem lançamento na janela. Correção de microtestes por câmera no celular do professor",
                  estrategia: "A correção fica com o professor, que é o desenho que a regra deve consagrar. Está do lado certo das duas mudanças da edição",
                  exposicao: "Baixa",
                  impacto: "Alto"
                },
                {
                  player: "Moderna",
                  grupo: "Moderna Amigos",
                  movimento: "Sem lançamento na janela. Presença em redes municipais e estaduais",
                  estrategia: "As redes estaduais já corrigem redação com IA por conta própria, com Google e edtechs. A proximidade com as secretarias só vale se vier com uma proposta de correção que caiba na regra",
                  exposicao: "Baixa",
                  impacto: "Médio-Alto"
                },
              ]}
            />

            {/* Radar de funcionalidades */}
            <RadarFuncionalidades
              itens={[
                {
                  player: "Somos Educação",
                  produto: "Plu, dentro do Plurall",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Aluno"],
                  entregue: "Para o professor: plano de aula, questões, provas e apresentações a partir do capítulo do material. Para o aluno: resumo, glossário, plano de estudo, exercício e tirar dúvida dentro do próprio conteúdo.",
                  leitura: "Para o professor, gera material, e isso ninguém questiona. Para o aluno, resumo e tira-dúvidas são o formato que mais se presta a atalho. O acervo ancorado ao capítulo poderia servir para perguntar ao aluno em vez de responder por ele.",
                  fonte: "https://www.plurall.net/ia.html",
                  fonteLabel: "Plurall IA",
                  historico: "Mai/26 Plurall aposta em dados que viram recomendação para o professor → Jun/26 em três meses, mais de 2 mil escolas criam PEI com o Plurall IA → #11 o Plu leva resumo e tira-dúvidas ao aluno, ancorados ao capítulo → #12 sem lançamento; o formato para o aluno fica exposto à crítica da ilusão de aprendizagem → #13 sem lançamento; conversa com o aluno é o que as redes passam a restringir"
                },
                {
                  player: "Poliedro",
                  produto: "Cosmos, camada de IA do P+",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Interação com IA generativa restrita ao conteúdo proprietário, somada a modelos preditivos: sugestão de estratégia didática, adaptação de conteúdo, criação de avaliação e leitura de desempenho. Disponível na web e no app P+.",
                  leitura: "A IA não fala com o aluno, então quem decide é o professor. É o desenho que a norma e as big techs defendem, e ele depende da formação do professor para virar aprendizagem.",
                  fonte: "https://brasil.bettshow.com/releases-expositores-2026/poliedro-apresenta-cosmos-hub-de-inteligencia-artificial-na-bett-brasil-2026",
                  fonteLabel: "Release Bett Brasil 2026",
                  historico: "#10 Cosmos restrito ao acervo autoral → #11 Cosmos no P+ para professor e gestor; prêmio pela Supernova, com autoria humana no centro → #12 sem lançamento; a IA fica fora do alcance do aluno → #13 sem lançamento; já está no desenho que a regra deve consagrar"
                },
                {
                  player: "Santillana",
                  produto: "Moderna Core",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Ecossistema que junta conteúdo, dados e IA: ampliação de repertório de estratégias para o professor e leitura contínua de desempenho para apoiar decisão do gestor.",
                  leitura: "O recurso acompanha o desempenho do aluno e não responde por ele, então não cria atalho. É o tipo de recurso mais útil para medir o efeito do produto, embora chame menos atenção numa demonstração de venda; com a evidência virando argumento de compra, essa desvantagem diminui.",
                  fonte: "https://revistaeducacao.com.br/2026/05/05/moderna-core-bett/",
                  fonteLabel: "Revista Educação",
                  historico: "Mai/26 Moderna Core junta conteúdo, IA e acompanhamento → #10 IA nos bastidores do Moderna Core → #11 leitura contínua de desempenho, sem geração para o aluno → #12 sem lançamento → #13 sem lançamento; segue fora das restrições ao uso pelo aluno"
                },
                {
                  player: "Bernoulli",
                  produto: "Co-crIA, TutorIA, PraticAI e Radar Enem",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Aluno", "Gestor"],
                  entregue: "Para o professor: o Co-crIA, assistente integrado ao material didático e desenvolvido com a Teachy, que gera planos de aula, listas, avaliações, apresentações e materiais adaptados. Para o aluno: o TutorIA e o PraticAI, apresentados no Bernoulli Reload, em agosto; o PraticAI corrige redação e, segundo a página da empresa, estima a nota por competência. Para o gestor: o Radar Enem, que lê os microdados do exame com um chat de IA. Não houve lançamento entre 1 e 13 de outubro.",
                  leitura: "O corretor de redação é o recurso mais sensível à regra nova: estimar nota para o aluno treinar é devolutiva; virar nota da escola sem o professor, não. A parceria com a Teachy mostra que o entrante já está dentro de um sistema de ensino acompanhado.",
                  fonte: "https://www.bernoulli.com.br/blog/co-cria-como-a-inteligencia-artificial-esta-transformando-o-dia-a-dia-dos-professores/",
                  fonteLabel: "Blog do Bernoulli",
                  historico: "#10 Bernoulli Reload com portfólio segmentado por público → #11 entra no Radar pelo assistente do professor, de planejamento e diagnóstico → #12 sem lançamento → #13 o card passa a incluir o TutorIA e o PraticAI para o aluno e a parceria com a Teachy no Co-crIA"
                },
                {
                  player: "PNLD Digital",
                  produto: "Leitor oficial do MEC/FNDE",
                  mercado: "Plataforma pública",
                  publicos: ["Aluno", "Professor"],
                  entregue: "Leitor interativo das obras do programa, com audiodescrição, narração, mapas e infográficos clicáveis, vídeos legendados e compatibilidade com leitor de tela. Traz agente de IA para esclarecer dúvidas e apoiar o uso do sistema.",
                  leitura: "O agente responde sobre o sistema, e não sobre o conteúdo, por isso não entrega resposta de exercício. Como o leitor oficial já oferece audiodescrição e leitura de tela para todas as obras, esses recursos deixam de diferenciar qualquer fornecedor.",
                  fonte: "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/junho/pnld-digital-amplia-inclusao-aos-livros-da-educacao-basica",
                  fonteLabel: "MEC",
                  historico: "#11 entra no Radar: leitor oficial com acessibilidade e agente de IA que responde sobre o uso do sistema → #12 sem mudança → #13 sem mudança"
                },
                {
                  player: "Teachy",
                  produto: "Assistente do professor e Teachy Studio",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Escola"],
                  entregue: "Para o professor: plano de aula, sequência didática, slides, listas de exercícios, provas e correção de exercícios com IA, alinhados à BNCC. Para a escola: o Teachy Studio, em que a instituição cria livros, apostilas e sequências próprias com IA, impressos e digitais. Desde a Bett Brasil 2026, a escola também pode adotar pelo Studio o material do Descomplica, com as videoaulas, como base curricular. A Teachy também é parceira do Bernoulli no Co-crIA. Não houve lançamento entre 1 e 13 de outubro.",
                  leitura: "Vem de fora dos sistemas de ensino e entra pelo material didático, onde está a receita das editoras: a empresa promete apostila própria por uma fração do custo de produção editorial, e a parceria com o Descomplica entrega uma base curricular pronta. A IA serve sobretudo a quem produz o material. O que ela ainda não mostra é o que qualquer material precisa mostrar agora: que o aluno aprende com ele.",
                  fonte: "https://educador21.com/ia-na-educacao-teachy-descomplica-escolas/",
                  fonteLabel: "Educador21",
                  historico: "#08 compra a Nero.AI, em acquihiring de sete dígitos → #12 entra no Radar com o assistente do professor, o Teachy Studio e o material do Descomplica → #13 aparece como parceira do Bernoulli no Co-crIA"
                },
                {
                  player: "AI4School",
                  produto: "Plataforma de IA da Conexia Educação (Grupo SEB)",
                  mercado: "Plataforma privada",
                  publicos: ["Aluno", "Professor", "Família"],
                  entregue: "Na versão gratuita, o ChatEdu, assistente para tarefas escolares e preparação para o ENEM e vestibulares, e, para o educador, geração de plano de aula e ferramentas adaptadas a perfis de aprendizagem. Na premium, tutores virtuais por disciplina e trilhas de letramento em IA para alunos, professores e famílias, seguindo a BNCC. Tem controle parental, linguagem ajustada à faixa etária e alerta de conteúdo impróprio. A plataforma ganhou um summit próprio na Bett Brasil 2026 e não teve novidade entre 1 e 13 de outubro.",
                  leitura: "Põe a IA para conversar direto com o aluno, com apoio à tarefa e tutor por disciplina, e aposta na segurança para ganhar a confiança da família, justamente a objeção que a avaliação da Common Sense Media levantou contra o ChatGPT para adolescentes. Não localizamos informação pública sobre se o ChatEdu e os tutores evitam entregar a resposta, e é isso que define de que lado da evidência o produto fica. Como a Conexia atende escolas parceiras, está mais perto da concorrência direta do que de uma startup de fora.",
                  fonte: "https://www.uai.com.br/app/noticia/mundo-corporativo/2025/10/06/noticia-mundo-corporativo,370556/ai4school-conexia-apresenta-solucao-de-ia-para-educacao.shtml",
                  fonteLabel: "Portal UAI",
                  historico: "#12 entra no Radar com o ChatEdu, tutores por disciplina e controle parental → #13 sem novidade; a segurança, sua aposta, vira a objeção às ferramentas para o aluno"
                },
              ]}
            />

            <div className="bg-white rounded-2xl border-2 border-ambar-100 p-6 md:p-8 mb-12">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-rosa-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">O espaço que continua vago</h4>
                  <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                    Vários dos recursos acima corrigem texto ou conversam com o aluno, mas não localizamos, entre eles, descrição pública de como o professor revisa e assina a nota, que é o ponto que a regra deve exigir. Também não localizamos controle divulgado para a escola desligar por série ou turma os recursos voltados ao aluno, a falta que levou Frederick County a proibir tudo. As duas coisas cabem no que já existe: é reorganizar a correção em dois turnos e dar à escola o interruptor.
                  </p>
                </div>
              </div>
            </div>

            {/* Força de contexto */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-gray-400 rounded-full" />
              <h3 className="text-xl font-bold text-navy-900">Forças de contexto</h3>
            </div>
            <div className="bg-white rounded-2xl border-2 border-azul-100 p-6 md:p-8">
              <p className="text-sm text-gray-600 mb-6 max-w-3xl">
                Não disputam a venda para a escola, mas mudam o que ela espera receber, quanto aceita pagar e o que considera normal antes de qualquer proposta.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                {
                  nome: "Google e OpenAI",
                  altera: "Expectativa do aluno e da família",
                  nota: "Ferramentas de estudo gratuitas para alunos de todas as idades nas contas escolares do Google e para adolescentes no ChatGPT. O aluno chega à escola com flashcards, quizzes e planejamento prontos, e o que a escola compra passa a ser controle e conexão com o material."
                },
                {
                  nome: "Avaliadores de segurança infantil",
                  altera: "Critério de compra",
                  nota: "A Common Sense Media classificou o ChatGPT for Teens como risco inaceitável. Avaliação independente de segurança vira pergunta de família e de rede para qualquer recurso que fale com o aluno."
                },
                {
                  nome: "Pesquisa independente",
                  altera: "Régua de evidência",
                  nota: "Um ensaio mediu perda de nota quando a IA foi só oferecida às turmas. A régua deixou de ser apenas quanto a IA ajuda e passou a incluir quanto ela pode atrapalhar."
                },
                {
                  nome: "Reguladores e redes",
                  altera: "Regras competitivas",
                  nota: "O MEC deve liberar a correção por IA com a nota do professor e vetar a IA na educação infantil; nos EUA, um distrito proibiu o uso pelo aluno em todas as séries. A regra premia o que trabalha com o professor e cobra controle do que chega ao aluno."
                },
].map((item, i) => (
                  <div key={i} className="border-l-2 border-azul-200 pl-4">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-gray-900 text-sm">{item.nome}</p>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600 uppercase tracking-wide">{item.altera}</span>
                    </div>
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.nota}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENCHMARKS DE INOVAÇÃO ── */}
      <section id="benchmarks" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Globe className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Benchmarks de inovação</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Casos de fora, <span className="text-azul-600">em detalhe</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base max-w-3xl text-pretty">
              Cada caso por problema, implantação, escala e aprendizado, com o que dá e o que não dá para replicar aqui.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 items-start">
              {[
                {
                  empresa: "Redação Paraná: a IA lê primeiro, o professor lê depois",
                  pais: "Brasil · Rede estadual",
                  categoria: "Correção em dois turnos",
                  problema: "Dar devolutiva de redação a todos os alunos de uma rede estadual, em escala, sem tirar do professor a avaliação do texto.",
                  implementacao: "A Secretaria da Educação do Paraná, em parceria com o Google, pôs na plataforma Redação Paraná uma correção automática que o aluno vê enquanto escreve. A IA avalia adequação ao gênero, organização das ideias, desenvolvimento do tema e aspectos linguísticos e gera uma devolutiva para revisão. Depois, o professor analisa o texto. A correção automática de textos dissertativo-argumentativos começou em 2025 e, em março de 2026, foi ampliada para conto, crônica e relato.",
                  escala: "Segundo o governo do Paraná, mais de 4,6 milhões de redações foram concluídas na plataforma em 2025, e cerca de 153 mil foram corrigidas com apoio da IA.",
                  financiamento: "Política da rede estadual, com parceria da Secretaria com o Google.",
                  aprendizado: "É o desenho de dois turnos que a regra brasileira deve adotar: a IA como primeiro leitor e o professor com a última palavra. A rede chegou a ele antes da norma.",
                  limitacoes: "Um estudo de pesquisadoras da UTFPR, publicado na revista Texto Livre em maio de 2026, aponta que a IA faz sobretudo correções classificatórias e indicativas. Não localizamos avaliação externa da precisão da correção nem do efeito na escrita.",
                  replicavel: "A divisão de turnos, a devolutiva durante a escrita e a ampliação gradual por gênero textual.",
                  naoReplicavel: "A escala de uma rede estadual e a parceria direta com uma big tech.",
                  application: "Se uma rede estadual já oferece a correção em dois turnos aos próprios alunos, o produto privado precisa entregar o que ela não entrega: registro da assinatura do professor, ligação com o material adotado e evidência de efeito."
                },
                {
                  empresa: "Universidade de Maryland: sortear quem oferece o tutor, e não quem usa",
                  pais: "Estados Unidos · Ensino superior",
                  categoria: "Método de avaliação",
                  problema: "Medir o efeito de pôr um assistente de IA à disposição de turmas inteiras, do jeito que uma instituição faz quando libera a ferramenta, e não só entre quem escolhe usar.",
                  implementacao: "Os pesquisadores sortearam professores, dentro de blocos de cursos, para oferecer ou não às turmas um assistente de estudo integrado à plataforma da universidade e ancorado no material do curso. Compararam a nota final e o uso da plataforma entre turmas do mesmo curso. Os números estão no Sinal 3.",
                  escala: "30 professores de várias áreas, num semestre letivo.",
                  financiamento: "Pesquisa acadêmica, publicada como working paper no EdWorkingPapers (26-1598).",
                  aprendizado: "Sortear a oferta mostra o efeito de uma decisão de política, que é o que o gestor toma. Comparar só quem usa teria escondido a perda, porque a maioria não usou.",
                  limitacoes: "Universitários, um semestre e um assistente genérico. Não diz nada sobre tutor desenhado para não dar a resposta nem sobre a educação básica.",
                  replicavel: "Sortear por professor ou turma, medir a nota e o uso do material junto e olhar o efeito por perfil de aluno.",
                  naoReplicavel: "A plataforma única da universidade, que registra tudo, e a autonomia para sortear professores. Na educação básica, depende de uma rede parceira.",
                  application: "É o desenho para testar um recurso voltado ao aluno antes de ampliar: liberar para metade das turmas e comparar com a outra metade, inclusive no uso do material."
                },
                {
                  empresa: "Turquia: o mesmo modelo com e sem guarda-corpos",
                  pais: "Turquia · Ensino médio",
                  categoria: "Desenho pedagógico",
                  problema: "Saber se o efeito da IA na aprendizagem depende do modelo ou do que ela é instruída a fazer.",
                  implementacao: "Num experimento divulgado em 2024 por Hamsa Bastani e coautores, turmas de matemática do 9º ao 11º ano foram sorteadas para praticar com uma versão comum do ChatGPT, com uma versão tutora instruída a dar dicas sem revelar a resposta, ou sem IA. Depois, todos fizeram a prova sem ajuda.",
                  escala: "Cerca de mil alunos. Com o ChatGPT comum, os alunos acertaram 48% mais exercícios na prática e tiraram nota 17% menor na prova. Com a versão tutora, acertaram 127% mais na prática e não tiveram ganho na prova.",
                  financiamento: "Pesquisa acadêmica com escolas de ensino médio na Turquia.",
                  aprendizado: "O mesmo modelo deu resultados opostos conforme a instrução. Sem guarda-corpos, a IA melhorou a prática e piorou a prova; com eles, evitou a perda, mas não gerou ganho.",
                  limitacoes: "Um país, uma disciplina e uma intervenção curta. A versão tutora só evitou o prejuízo, sem melhorar a nota.",
                  replicavel: "Testar o recurso para o aluno em duas versões, com e sem as instruções que impedem entregar a resposta, e medir numa prova sem IA.",
                  naoReplicavel: "O controle total sobre a sala que o experimento teve. No produto, o aluno pode sair da ferramenta e usar outra.",
                  application: "Desempenho na prática com IA não é aprendizagem. A medida que importa é a prova sem a ferramenta, e é ela que o produto precisa mostrar."
                },
].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border-2 border-azul-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-5 gap-4 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-azul-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-azul-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg leading-snug">{b.empresa}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{b.pais}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azul-50 text-azul-700 whitespace-nowrap">
                      {b.categoria}
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-5 border-l-4 border-gray-300">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Problema que tentaram resolver</p>
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{b.problema}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5 items-start">
                    {[
                      { label: 'Como foi implantado', valor: b.implementacao, icone: <Zap className="w-3.5 h-3.5" /> },
                      { label: 'Escala e números', valor: b.escala, icone: <BarChart3 className="w-3.5 h-3.5" /> },
                      { label: 'Financiamento e estrutura', valor: b.financiamento, icone: <Users className="w-3.5 h-3.5" /> },
                      { label: 'Aprendizado que ficou', valor: b.aprendizado, icone: <Brain className="w-3.5 h-3.5" /> },
                    ].map(bloco => (
                      <div key={bloco.label} className="bg-gray-50 rounded-xl p-4">
                        <p className="text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                          <span className="text-azul-600">{bloco.icone}</span>
                          {bloco.label}
                        </p>
                        <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{bloco.valor}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-50/60 rounded-xl p-4 mb-4 border border-red-100">
                    <p className="text-xs font-semibold text-red-700 mb-1">Limitações do caso</p>
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{b.limitacoes}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5 items-start">
                    <div className="bg-green-50/60 rounded-xl p-4 border border-green-100">
                      <p className="text-xs font-semibold text-green-700 mb-1">O que é replicável</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{b.replicavel}</p>
                    </div>
                    <div className="bg-gray-100/70 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-1">O que não é replicável</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{b.naoReplicavel}</p>
                    </div>
                  </div>

                  <div className="bg-azul-50 rounded-xl p-4 border-l-4 border-azul-600">
                    <p className="text-xs font-semibold text-azul-700 mb-1">Implicação para o nosso contexto</p>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{b.application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ACELERADORES DE IA ── */}
      <section id="aceleradores" className="py-16 md:py-20 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Zap className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Aceleradores de IA</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Capacidades que <span className="text-azul-600">encurtam o caminho</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base max-w-3xl text-pretty">
              O que já existe, em que estágio está e quanto custa adotar, com limites, dependências e o que muda para Produto e Engenharia. Nesta edição, entram os que respondem à regra nova e à restrição ao uso pelo aluno.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  nome: "Correção em dois turnos com assinatura registrada",
                  tipo: "Padrão de fluxo",
                  oque: "A IA faz a primeira leitura da redação e gera a devolutiva; o professor revisa, ajusta e atribui a nota, e o sistema guarda quem assinou e o que mudou. É o desenho da Redação Paraná e o que a regra brasileira deve exigir.",
                  acelera: "Põe a correção automática dentro da regra e transforma a assinatura do professor em prova de conformidade.",
                  limitacoes: "Se a revisão do professor virar um clique, o registro existe, mas a decisão não. A interface precisa mostrar o que a IA sugeriu e o que o professor mudou.",
                  dependencias: "Modelo de dados que separe devolutiva e nota, trilha de auditoria por redação e critério de correção alinhado à competência avaliada.",
                  cenario: "Redação e questões dissertativas, em escola privada e rede pública.",
                  impactoProduto: "Reabre a correção como recurso vendável, agora com um diferencial que a ferramenta gratuita não tem: a prova de que o professor decidiu.",
                  impactoEngenharia: "Versionar a sugestão da IA e a decisão do professor e guardar as duas. Sem isso, não há como mostrar quem deu a nota.",
                  maturidade: "Disponível",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://www.consed.org.br/noticia/redacao-parana-correcao-por-inteligencia-artificial-e-ampliada-para-novos-generos-textuais",
                  linkLabel: "O caso do Paraná"
                },
                {
                  nome: "Controle da escola por série, turma e recurso",
                  tipo: "Governança",
                  oque: "Painel em que a escola e o professor ligam e desligam cada recurso de IA voltado ao aluno por série, turma e período, com o estado visível para quem está na sala. O Google já oferece esse tipo de controle ao administrador da escola.",
                  acelera: "Permite liberar recurso para o aluno sem o risco de a rede ter de desligar tudo, como aconteceu em Frederick County.",
                  limitacoes: "Controle demais vira trabalho para o professor. O padrão precisa vir pronto por faixa etária, com o professor ajustando só a exceção.",
                  dependencias: "Cadastro confiável de série e turma, permissões hierárquicas (rede, escola, turma) e um catálogo dos recursos que falam com o aluno.",
                  cenario: "Qualquer rede que precise cumprir a regra por etapa, como o veto na educação infantil, ou responder a uma restrição local.",
                  impactoProduto: "Responde à objeção antes que ela vire proibição. É argumento de venda para a rede pública e para a família.",
                  impactoEngenharia: "Flags com escopo hierárquico e teste da matriz de estados: um recurso desligado na série precisa ficar desligado em toda turma dela.",
                  maturidade: "Padrão de mercado",
                  cor: "bg-gray-200 text-gray-700",
                  link: "https://www.fox5dc.com/news/frederick-county-school-board-votes-ban-ai-use-pre-k-through-12th-grade-students",
                  linkLabel: "O caso de Frederick County"
                },
                {
                  nome: "Guarda-corpos de tutor que não entrega a resposta",
                  tipo: "Padrão de interação",
                  oque: "Instruções e checagens que fazem o tutor dar dicas, pedir o raciocínio e devolver a pergunta, sem mostrar a solução, com teste contra o aluno que insiste. No experimento da Turquia, foi o que evitou a perda na prova.",
                  acelera: "Separa o recurso para o aluno da IA genérica que as redes estão restringindo.",
                  limitacoes: "Evitar a perda não é gerar ganho: na Turquia, a versão com guarda-corpos não melhorou a nota. Precisa vir junto de trilha e domínio do conteúdo.",
                  dependencias: "Bateria de testes com tentativas de obter a resposta, revisão periódica e registro das conversas.",
                  cenario: "Exercícios com resposta verificável, onde o atalho é mais fácil.",
                  impactoProduto: "Dá ao recurso para o aluno um argumento contra a objeção: ele foi feito para não fazer a tarefa pelo aluno.",
                  impactoEngenharia: "Tratar a recusa de entregar a resposta como requisito testado a cada versão do modelo, e não como instrução escrita uma vez.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://hechingerreport.org/kids-chatgpt-worse-on-tests/",
                  linkLabel: "O experimento da Turquia"
                },
                {
                  nome: "Bateria de segurança para recursos voltados ao aluno",
                  tipo: "Processo de qualidade",
                  oque: "Conjunto de testes de risco feito antes de cada lançamento: conteúdo impróprio, sinais de crise, contorno do modo de estudo, verificação de idade e alertas ao responsável. Foi com testes desse tipo que a Common Sense Media avaliou o ChatGPT for Teens.",
                  acelera: "Antecipa a avaliação que terceiros vão fazer e transforma segurança em documento que a escola pode mostrar à família.",
                  limitacoes: "Testes próprios convencem menos que avaliação independente. Servem para corrigir antes e para chegar preparado a uma auditoria externa.",
                  dependencias: "Casos de teste em português por faixa etária, critérios de aprovação definidos com a área pedagógica e jurídica e repetição a cada versão do modelo.",
                  cenario: "Todo recurso que converse com o aluno, sobretudo abaixo dos 18 anos.",
                  impactoProduto: "Segurança verificável vira diferencial diante da ferramenta gratuita que uma avaliação independente reprovou.",
                  impactoEngenharia: "Rodar a bateria no pipeline de lançamento, com bloqueio se algum critério crítico falhar.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://www.cnbc.com/make-it/2026/10/09/chatgpt-for-teens-safety-common-sense-media.html",
                  linkLabel: "A avaliação da Common Sense"
                },
                {
                  nome: "Linha de base com sorteio por turma",
                  tipo: "Método de avaliação",
                  oque: "Estudo com uma rede parceira em que turmas são sorteadas para receber ou não o recurso de IA, com comparação de nota, uso do material e efeito por perfil de aluno. É o desenho do ensaio de Maryland aplicado à educação básica.",
                  acelera: "Mostra se o recurso ajuda ou atrapalha antes de ampliar, e dá ao produto um número próprio para a conversa de compra.",
                  limitacoes: "Leva pelo menos um semestre, exige consentimento e pode mostrar efeito nulo ou negativo. Saber disso antes é melhor que descobrir depois.",
                  dependencias: "Rede parceira, ligar e desligar o recurso por turma, registro de exposição por aluno e parceiro acadêmico.",
                  cenario: "O próximo recurso voltado ao aluno, antes de liberar para todas as turmas.",
                  impactoProduto: "Permite responder com dado próprio à pergunta que o ensaio de Maryland pôs na mesa: a IA pode estar atrapalhando?",
                  impactoEngenharia: "O controle por turma do acelerador anterior é pré-requisito: sem ele, não há como sortear.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://www.edtechinnovationhub.com/news/students-offered-an-ai-tutor-got-lower-grades-and-disengaged-from-course-materials-university-of-maryland-trial-finds",
                  linkLabel: "O ensaio de Maryland"
                },
].map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border-2 border-azul-100 p-6 hover:border-azul-600 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div>
                      <h3 className="font-bold text-navy-900 text-lg leading-snug">{a.nome}</h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">{a.tipo}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${a.cor}`}>
                      {a.maturidade}
                    </span>
                  </div>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-4">{a.oque}</p>
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-rosa-600 mb-1">O que acelera</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{a.acelera}</p>
                    </div>
                    <div className="bg-red-50/60 rounded-xl p-3 border border-red-100">
                      <p className="text-xs font-semibold text-red-700 mb-1">Limitações reais</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{a.limitacoes}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Dependências técnicas</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{a.dependencias}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Cenário ideal de uso</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{a.cenario}</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="bg-azul-50 rounded-xl p-3">
                        <p className="text-xs font-semibold text-azul-700 mb-1">Impacto para Produto</p>
                        <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{a.impactoProduto}</p>
                      </div>
                      <div className="bg-azul-50 rounded-xl p-3">
                        <p className="text-xs font-semibold text-azul-700 mb-1">Impacto para Engenharia</p>
                        <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{a.impactoEngenharia}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-azul-50 text-azul-600 rounded-lg hover:bg-azul-600 hover:text-white transition-all font-medium text-sm mt-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {a.linkLabel}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── O QUE OS EXPERTS ESTÃO ESCREVENDO ── */}
      <section id="experts" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">O que os experts estão escrevendo</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Validação e <span className="text-azul-600">contraponto</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base max-w-3xl text-pretty">
              O que pesquisadores e educadores concluíram na quinzena, começando pelo ponto em que concordam.
            </p>

            {/* Consenso dos especialistas */}
            <div className="bg-gradient-to-br from-azul-600 to-navy-900 rounded-3xl p-6 md:p-10 mb-12 text-white">
              <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-6 md:gap-10 mb-8">
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 mb-3">Consenso dos especialistas da quinzena</p>
                  <p className="text-lg md:text-xl font-semibold leading-snug text-pretty">
                    Avaliadores de segurança, pesquisadores e quem estuda a correção na rede pública chegaram ao mesmo ponto por caminhos diferentes: <span className="text-amarelo-400">a IA rende mais, e preocupa menos, quando trabalha com o professor do que quando é entregue ao aluno sozinho</span>.
                  </p>
                </div>
                <img src={liaExperts} alt="" width={394} height={400} className="w-28 sm:w-36 md:w-44 h-auto shrink-0 self-center sm:self-auto sm:-scale-x-100 drop-shadow-[0_12px_24px_rgba(1,34,112,0.45)]" />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    ponto: "Só oferecer a IA ao aluno tem custo",
                    detalhe: "O ensaio de Maryland mediu nota menor nas turmas que receberam o assistente, mesmo com poucos alunos usando. Liberar a ferramenta é uma decisão com efeito, e não um gesto neutro."
                  },
                  {
                    ponto: "A segurança é o ponto fraco do produto para o aluno",
                    detalhe: "A avaliação da Common Sense encontrou alertas que não dispararam e um modo de estudo que podia ser contornado, numa versão feita para adolescentes."
                  },
                  {
                    ponto: "O professor como segundo leitor",
                    detalhe: "Na Redação Paraná, a IA faz a correção que classifica e indica, e o professor analisa o texto. É o arranjo que a regra brasileira deve adotar."
                  },
].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="font-semibold text-white mb-2 text-sm leading-snug">{item.ponto}</p>
                    <p className="text-white/85 text-sm md:text-xs leading-relaxed">{item.detalhe}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  autor: "Common Sense Media",
                  cargo: "Youth AI Safety Institute · avaliação de risco",
                  titulo: "O ChatGPT for Teens é risco inaceitável para menores de 18 anos",
                  data: "7 out/2026",
                  tese: "Depois de mais de 4 mil testes, a organização deu ao ChatGPT for Teens a pior nota da sua escala de risco. Os alertas aos pais não dispararam em contas novas ligadas a responsáveis, mais de um em cada quatro encaminhamentos de crise considerados necessários não aconteceu, o modo de estudo podia ser contornado e a estimativa de idade não reclassificou contas de teste. A organização reconheceu proteções que funcionaram, como a recusa a roleplay sexual explícito, e a OpenAI contestou o método.",
                  importa: "É uma avaliação independente de peso sobre uma versão para adolescentes de um assistente geral, e o critério pode ser aplicado a qualquer recurso que fale com o aluno, inclusive os nossos.",
                  relacao: "Sustenta o Sinal 4 e o acelerador de bateria de segurança.",
                  link: "https://www.cnbc.com/make-it/2026/10/09/chatgpt-for-teens-safety-common-sense-media.html"
                },
                {
                  autor: "Pesquisadores da Universidade de Maryland",
                  cargo: "Working paper no EdWorkingPapers (26-1598)",
                  titulo: "Oferecer o tutor mudou o jeito de a turma estudar",
                  data: "Out/2026",
                  tese: "Como o uso do assistente foi baixo, os autores sugerem que a queda de nota venha de uma mudança no comportamento da turma: com uma ferramenta de IA aprovada pela universidade à mão, os alunos passaram a usar menos o material e a plataforma do curso. A perda foi maior entre alunos de primeira geração.",
                  importa: "Desloca a discussão da qualidade da resposta da IA para o que a presença da ferramenta faz com o resto do estudo. E mostra que o custo recai mais sobre quem tem menos apoio.",
                  relacao: "Sustenta o Sinal 3, a tese revista do resumo e o acelerador de linha de base.",
                  link: "https://www.edtechinnovationhub.com/news/students-offered-an-ai-tutor-got-lower-grades-and-disengaged-from-course-materials-university-of-maryland-trial-finds"
                },
                {
                  autor: "Agatha de Lima, Maisa Morelatto, Vanda Trombetta e Lovania Teixeira",
                  cargo: "Pesquisadoras da UTFPR · revista Texto Livre (UFMG)",
                  titulo: "O turno da IA e o turno do professor na correção",
                  data: "Mai/2026",
                  tese: "O estudo analisa a Redação Paraná e a divisão da correção entre a IA e o professor. A IA faz sobretudo correções classificatórias e indicativas, e a análise da discursividade e da subjetividade do texto fica com o professor.",
                  importa: "É a leitura mais independente do modelo de dois turnos que a regra brasileira deve adotar, e mostra o limite: a parte que a IA faz é a mais mecânica, e o valor do professor está no que ela não alcança.",
                  relacao: "Fundamenta o Sinal 1, o benchmark da Redação Paraná e o acelerador de correção em dois turnos.",
                  link: "https://periodicos.ufmg.br/index.php/textolivre/article/view/62011"
                },
].map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="mb-4">
                    <p className="font-bold text-gray-900">{e.autor}</p>
                    <p className="text-xs text-gray-600">{e.cargo}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3" /> {e.data}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-3 leading-snug">{e.titulo}</h3>
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-azul-700 mb-1">Tese central</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{e.tese}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Por que importa</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{e.importa}</p>
                    </div>
                    <div className="bg-azul-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-ambar-700 mb-1">Relação com os sinais desta edição</p>
                      <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{e.relacao}</p>
                    </div>
                  </div>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-azul-50 text-azul-600 rounded-lg hover:bg-azul-600 hover:text-white transition-all font-medium text-sm mt-4"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Ver fonte<span className="sr-only">: {e.titulo} (abre em nova aba)</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ANÁLISE ESTRATÉGICA ── */}
      <section id="analise" className="py-16 md:py-20 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Target className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Análise estratégica</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Diferenciação ou <span className="text-azul-600">commodity</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base max-w-3xl text-pretty">
              Onde a vantagem acabou e o que ainda é difícil de copiar. Nesta edição, a correção automática de redação passou para o lado da commodity.
            </p>

            <div className="bg-white rounded-2xl border-2 border-rosa-600 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rosa-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">A mudança de lado desta edição</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                    <strong>A correção automática de redação</strong> deixou de diferenciar. Redes estaduais já fazem, algumas com o Google, concorrentes e edtechs oferecem ao aluno, e a regra deve liberá-la como primeiro filtro. O que passa a diferenciar é a parte que a regra exige e que a ferramenta gratuita não entrega: o professor revisando e assinando, com registro.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <p className="font-bold text-red-700 text-sm uppercase tracking-wide">Virou commodity</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "Correção automática de redação", motivo: "Redes estaduais oferecem aos próprios alunos, concorrentes e edtechs já têm, e a regra deve liberá-la como primeiro filtro. Sozinha, não sustenta preço", novo: true },
                    { item: "Ferramentas de estudo para o aluno", motivo: "Flashcards, quizzes e resumos chegaram de graça ao aluno pelo Gemini e pelo ChatGPT. Concorrer com isso por funcionalidade não faz sentido", novo: true },
                    { item: "Tira-dúvidas e resumo para o aluno", motivo: "Além de não diferenciar, é o formato que as redes estão restringindo e que o ensaio de Maryland associou a perda" },
                    { item: "O modelo de IA em si", motivo: "Desde a edição #12, escolher modelo virou decisão de custo" },
                    { item: "Chat ancorado no conteúdo próprio", motivo: "Padrão entre os concorrentes diretos. O ensaio de Maryland usou um assistente ancorado no material e mediu perda, então ancorar não basta" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm flex items-center gap-2 flex-wrap">
                          {c.item}
                          {c.novo && <span className="px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-rosa-600 text-white uppercase tracking-wide">Mudou nesta edição</span>}
                        </p>
                        <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{c.motivo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="font-bold text-green-700 text-sm uppercase tracking-wide">Ainda diferencia</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "Correção em dois turnos com assinatura registrada", motivo: "É o que a regra deve exigir e o que a ferramenta gratuita não entrega. Edtechs já põem o professor para revisar; o que segue raro é o registro de quem deu a nota, e não localizamos concorrente direto que descreva isso publicamente", novo: true },
                    { item: "Controle da escola sobre o que o aluno acessa", motivo: "A falta dele levou um distrito a proibir tudo. Ligar e desligar por série e turma, com o professor vendo o estado, vira condição para liberar recurso ao aluno", novo: true },
                    { item: "Segurança verificável do recurso para o aluno", motivo: "Depois da avaliação da Common Sense, ter testes documentados vira argumento diante da família e da rede", novo: true },
                    { item: "Número próprio de aprendizagem", motivo: "Agora também como defesa: é o que mostra que o recurso não está entre os que atrapalham" },
                    { item: "Domínio obrigatório com explicação do erro", motivo: "Segue sendo o desenho ligado a ganho, e depende de banco de itens calibrado, que não se monta em um ciclo" },
                    { item: "Recursos de estudo ligados ao material e ao professor", motivo: "O flashcard gratuito não sabe o que a turma está estudando nem mostra ao professor o que o aluno errou. O que liga o estudo ao material adotado continua escasso" },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm flex items-center gap-2 flex-wrap">
                          {d.item}
                          {d.novo && <span className="px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-green-700 text-white uppercase tracking-wide">Nova fronteira</span>}
                        </p>
                        <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{d.motivo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HYPE VS TENDÊNCIA REAL ── */}
      <section id="hype" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Hype ou tendência real</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              Força e maturidade <span className="text-azul-600">do movimento</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base max-w-3xl text-pretty">
              Quanto discurso há para a evidência disponível, e se o movimento já justifica mudar o roadmap.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-ambar-50 rounded-2xl p-7 border border-ambar-100">
                <p className="font-bold text-ambar-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Superestimado
                </p>
                <p className="text-[11px] text-ambar-700 mb-5 font-medium">Muito discurso, evidência ausente ou contrária</p>
                <div className="space-y-5">
                  {[
                    { titulo: "Dar IA ao aluno melhora a nota", desc: "O ensaio de Maryland mediu o contrário quando a IA foi só oferecida, e o experimento da Turquia mostrou nota menor com o ChatGPT comum. Melhorar a prática com IA não é aprender." },
                    { titulo: "Versão para adolescentes resolve a segurança", desc: "Uma avaliação independente de peso reprovou a versão para adolescentes de um assistente geral. Um rótulo de idade não substitui teste." },
                    { titulo: "Proibir resolve", desc: "A proibição de Frederick County vale para os aparelhos e o horário da escola; em casa, o aluno segue com as ferramentas gratuitas. Sem controle e desenho, a escola só tira a IA de onde poderia acompanhá-la." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-ambar-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-azul-50 rounded-2xl p-7 border border-azul-200">
                <p className="font-bold text-azul-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Emergente
                </p>
                <p className="text-[11px] text-azul-700 mb-5 font-medium">Sinal real, cedo demais para conclusão firme</p>
                <div className="space-y-5">
                  {[
                    { titulo: "Correção por IA como padrão da rede pública", desc: "Já roda em redes estaduais e deve ganhar aval da regra, mas o texto homologado ainda não saiu, e não localizamos avaliação externa da precisão nem do efeito na escrita." },
                    { titulo: "Proibição total do uso pelo aluno", desc: "Uma rede americana chegou a todas as séries, e os outros distritos de Maryland estão definindo suas regras agora. Pode se espalhar, mas ainda é um caso." },
                    { titulo: "Ferramentas de estudo das big techs para todas as idades", desc: "O acesso depende do que cada escola liberar no painel do Google, e o planejador da OpenAI ainda não foi lançado. A adesão real nas escolas ainda não foi medida." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-azul-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-azul-50 rounded-2xl p-7 border border-azul-100">
                <p className="font-bold text-azul-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Tendência real
                </p>
                <p className="text-[11px] text-azul-700 mb-5 font-medium">Evidência convergente, já move roadmap</p>
                <div className="space-y-5">
                  {[
                    { titulo: "A IA trabalha com o professor", desc: "A regra brasileira, as redes estaduais e o modelo de dois turnos apontam para o mesmo arranjo: a IA lê primeiro, o professor decide. Já justifica mudar o roadmap." },
                    { titulo: "A escola controla o que chega ao aluno", desc: "Quatro edições seguidas de restrição ao uso pelo aluno, agora com a falta de controle como motivo explícito. Controle fino virou requisito." },
                    { titulo: "O ganho vem do desenho", desc: "Reforçado pelo lado negativo: sem desenho, a IA oferecida ao aluno pode tirar nota. Com desenho, o ganho é pequeno e mensurável." },
                    { titulo: "Evidência de aprendizagem como condição de venda", desc: "Seis edições seguidas, e agora a evidência também pode ser usada contra o produto. Ter número próprio virou defesa." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-azul-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-azul-200">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-azul-600" />
                <p className="font-bold text-gray-900">O padrão desta quinzena</p>
              </div>
              <p className="text-gray-700 leading-relaxed md:columns-2 md:gap-10">
                A quinzena separou dois caminhos para a IA na escola. No primeiro, ela trabalha com o professor: corrige como primeiro leitor, sugere e deixa a decisão com quem assina. É o caminho que a regra brasileira deve abrir e que as redes estaduais já seguem. No segundo, ela vai direto ao aluno, de graça e cada vez mais cedo, pelas mãos das big techs, e é esse que as redes estão restringindo, que a pesquisa mostrou poder atrapalhar e que a avaliação de segurança reprovou. Para um sistema de ensino, o primeiro caminho é onde está a vantagem; o segundo só vale com controle da escola, desenho que não entregue a resposta e evidência própria.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
        </>
      )}

      {/* ── OPORTUNIDADES DE PRODUTO ── */}
      <section id="oportunidades" className="py-16 md:py-20 px-6 bg-fundo-azul/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Prioridades estratégicas</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4 tracking-tight text-balance">
              O que isso muda no <span className="text-azul-600">nosso produto</span>
            </h2>
            <p className="text-gray-600 mb-4 text-base max-w-3xl text-pretty">
              O que os sinais desta quinzena mudam, na prática, para o nosso roadmap.
            </p>

            {/* Legenda prioridade */}
            <div className="flex items-center gap-6 mb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-azul-600" />
                <span className="text-sm text-gray-600"><strong>Alta:</strong> janela estreita, agir agora</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rosa-600" />
                <span className="text-sm text-gray-600"><strong>Média:</strong> posicionar nos próximos ciclos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-600"><strong>Baixa:</strong> monitorar</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  rastreio: "Sinal 1 · ausência registrada",
                  sinal: "O MEC deve liberar a IA para corrigir redação como primeiro filtro, com a nota sempre do professor, e não localizamos concorrente direto que mostre publicamente como faz isso",
                  problema: "Se a correção de texto do produto hoje devolve nota ao aluno ou à escola sem passar pelo professor, ela fica do lado errado da regra; se foi despriorizada por causa da vedação de setembro, a regra nova reabre o espaço. Vale mapear com Produto como cada recurso de escrita trata a nota hoje.",
                  oportunidade: "Correção de redação em dois turnos, com assinatura do professor",
                  impacto: "A IA lê primeiro e devolve comentários ao aluno; o professor revisa, ajusta e dá a nota, e o produto guarda a sugestão da IA, a decisão do professor e quem assinou. Na edição passada, a separação entre devolutiva e nota era prioridade Média; subiu porque a regra deve consagrar exatamente esse arranjo e porque a correção sozinha virou commodity.",
                  professor: "Ganha tempo com a primeira leitura e continua dono da nota, com o registro do que decidiu.",
                  aluno: "Recebe devolutiva para reescrever antes da avaliação e uma nota dada por uma pessoa.",
                  gestor: "Consegue provar, redação por redação, que a escola cumpre a regra.",
                  roadmapItem: "Separar no modelo de dados a sugestão da IA e a nota do professor e versionar as duas; esperar o texto homologado para fechar os detalhes do registro.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Avaliação"
                },
                {
                  rastreio: "Sinal 2",
                  sinal: "Frederick County proibiu o uso de IA pelos alunos em todas as séries, e um dos motivos relatados foi que os professores não conseguiam desligar o Gemini nos aparelhos dos alunos",
                  problema: "Se a escola não consegue desligar um recurso de IA por série ou turma, a resposta mais provável a uma objeção é desligar tudo, inclusive o que funciona. Com o veto anunciado para a educação infantil, a regra brasileira também deve exigir controle por etapa. Vale confirmar com Engenharia que controles existem hoje.",
                  oportunidade: "Controle da escola por série, turma e recurso",
                  impacto: "Um painel em que a rede, a escola e o professor ligam e desligam cada recurso voltado ao aluno, com padrão pronto por faixa etária e o estado visível na sala. Transforma a objeção em configuração, em vez de proibição.",
                  professor: "Sabe o que está ligado para a turma e pode desligar na hora.",
                  aluno: "Mantém os recursos que funcionam mesmo quando a rede restringe outros.",
                  gestor: "Cumpre a regra por etapa e responde ao conselho sem cancelar o contrato.",
                  roadmapItem: "Começar pelo catálogo de recursos que falam com o aluno e pelas flags com escopo de rede, escola e turma.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Plataforma"
                },
                {
                  rastreio: "Sinal 3 · ausência recorrente",
                  sinal: "Num ensaio com 2.379 universitários, as turmas que receberam um assistente de IA tiveram nota menor e usaram menos o material do curso, e não localizamos número próprio de sistema de ensino brasileiro",
                  problema: "Se os recursos de IA para o aluno são liberados para todos de uma vez, não há como saber se ajudam ou atrapalham, e o primeiro dado pode vir de fora. Vale verificar se o produto consegue liberar um recurso só para parte das turmas.",
                  oportunidade: "Lançamento por turma, com grupo de comparação",
                  impacto: "Todo recurso novo para o aluno entra primeiro em metade das turmas de uma rede parceira, sorteadas, e é comparado com a outra metade em nota, uso do material e perfil de aluno. Substitui a linha de base da edição passada por um processo de lançamento.",
                  professor: "Participa de uma comparação que protege a turma de um recurso que atrapalhe.",
                  aluno: "Só recebe em escala o que mostrou não piorar o resultado.",
                  gestor: "Tem resultado próprio quando alguém perguntar se a IA está atrapalhando.",
                  roadmapItem: "Depende do controle por turma; desenhar o estudo do próximo recurso voltado ao aluno junto com a rede parceira neste semestre.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Evidência / Produto"
                },
                {
                  rastreio: "Sinal 4",
                  sinal: "A Common Sense Media classificou o ChatGPT for Teens como risco inaceitável, no mesmo dia em que a OpenAI anunciou novas ferramentas de estudo para adolescentes",
                  problema: "Se o produto tem recursos que conversam com o aluno e não há uma bateria de testes de segurança documentada, a primeira avaliação pode vir de fora, como veio para a OpenAI. Vale confirmar com Produto e Jurídico o que já é testado antes de cada versão.",
                  oportunidade: "Bateria de segurança documentada para recursos voltados ao aluno",
                  impacto: "Testes em português por faixa etária, com conteúdo impróprio, sinais de crise, tentativa de contornar o modo de estudo e alertas ao professor ou responsável, rodados a cada versão e resumidos num documento que a escola pode mostrar à família.",
                  professor: "Recebe alerta quando a conversa do aluno exigir atenção.",
                  aluno: "Usa um recurso testado para a sua idade.",
                  gestor: "Tem um documento para apresentar à família e ao conselho.",
                  roadmapItem: "Montar a bateria com a área pedagógica e jurídica e ligá-la ao processo de lançamento.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Produto / Jurídico"
                },
                {
                  rastreio: "Sinal 4",
                  sinal: "O Google abriu o hub de estudo do Gemini, com flashcards e quizzes, a alunos de todas as idades, e a OpenAI anunciou flashcards e quizzes no ChatGPT para adolescentes",
                  problema: "Se os recursos de estudo do produto se limitam a gerar flashcards e quizzes, eles concorrem com ferramentas gratuitas e já disponíveis ao aluno. Vale comparar o que o nosso recurso faz que a ferramenta gratuita não faz.",
                  oportunidade: "Recursos de estudo ligados ao material adotado e ao professor",
                  impacto: "Flashcards e quizzes gerados a partir do capítulo que a turma está estudando, com os erros do aluno chegando ao professor e alimentando a próxima aula. O valor deixa de ser gerar o recurso e passa a ser ligá-lo ao que a escola ensina.",
                  professor: "Vê o que a turma errou na revisão e ajusta a aula.",
                  aluno: "Revisa exatamente o que vai ser cobrado.",
                  gestor: "Justifica pagar por algo que a ferramenta gratuita não entrega.",
                  roadmapItem: "Usar o acervo estruturado como fonte dos recursos de estudo e devolver os erros ao painel do professor.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Produto / Conteúdo"
                },
                {
                  rastreio: "Sinal 3 · edição #12",
                  sinal: "No ensaio de Maryland, só cerca de 15% dos alunos que receberam o assistente o usaram, e mesmo assim a turma usou menos o material do curso",
                  problema: "Se medimos só quantos alunos usam a IA, não vemos o efeito que mais pesou no ensaio: o que acontece com o uso do resto do produto. Vale confirmar com o time de dados o que já é medido.",
                  oportunidade: "Painel de uso que inclua o efeito no resto do estudo",
                  impacto: "Além de classificar o uso da IA, acompanhar se o uso do material, dos exercícios e das videoaulas cai nas turmas com recurso de IA. A oportunidade da edição passada ganha uma métrica nova.",
                  professor: "Percebe se a turma está trocando o material pela IA.",
                  aluno: "Recebe orientação quando deixa de estudar pelo material.",
                  gestor: "Vê o efeito da IA no uso de todo o produto, e não só no recurso novo.",
                  roadmapItem: "Cruzar os eventos de uso da IA com os do material por turma e período.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "Dados"
                },
].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`bg-white rounded-2xl border-2 ${item.cor} p-6 hover:shadow-md transition-all flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-3 gap-2 flex-wrap">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.corBadge}`}>
                      {item.prioridade}
                    </span>
                    <span className="text-xs text-gray-600 font-medium">{item.area}</span>
                  </div>

                  {!modoExecutivo && (
                    <div className="inline-flex items-center gap-1.5 mb-3 self-start bg-gray-100 rounded-full px-2.5 py-1">
                      <Library className="w-3 h-3 text-gray-600" />
                      <span className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Rastreável a: {item.rastreio}</span>
                    </div>
                  )}

                  <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-gray-600">Sinal observado</p>
                  <p className="text-sm md:text-xs text-gray-600 mb-4 italic leading-relaxed">{item.sinal}</p>

                  <div className="border-l-2 border-red-400 pl-4 mb-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-red-700">Problema</p>
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{item.problema}</p>
                  </div>

                  <h3 className="font-bold text-navy-900 mb-2 text-base leading-snug">{item.oportunidade}</h3>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-4">{item.impacto}</p>

                  <div className="border-l-2 border-rosa-600 pl-4 space-y-2 mb-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-rosa-600">Impacto esperado</p>
                    {[
                      { label: 'Professor', valor: item.professor },
                      { label: 'Aluno', valor: item.aluno },
                      { label: 'Gestor', valor: item.gestor },
                    ].map(linha => (
                      <p key={linha.label} className="text-sm md:text-xs text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                      </p>
                    ))}
                  </div>

                  <div className="border-l-2 border-lilas-500 pl-4 mt-auto">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-lilas-600">Implicação para roadmap</p>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.roadmapItem}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
      {/* ── SAÍDA DA LEITURA EXECUTIVA ── */}
      {modoExecutivo && (
        <section className="pb-20 px-6 bg-azul-50/30">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-azul-100 p-7 text-center">
              <p className="font-bold text-gray-900 mb-2">Fim da leitura executiva</p>
              <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-5">
                Nove seções ficaram de fora: as evidências por trás de cada conclusão, a concorrência, o que não aconteceu, os casos de fora e as capacidades que podem entrar no roadmap.
              </p>
              <button
                onClick={() => {
                  setModoLeitura('completa');
                  setTimeout(() => scrollToSection('movimentos'), 80);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
              >
                <LayoutList className="w-4 h-4" />
                Ler a edição completa
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── EDIÇÕES ANTERIORES ── */}
      <section id="edicoes" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Arquivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Edições <span className="text-azul-600">anteriores</span>
            </h2>
            <p className="text-gray-600 mb-12">
              Todas as edições do Radar, da mais recente à mais antiga.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {ARQUIVO.map(ed => (
                <motion.div
                  key={ed.view}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">Edição anterior</p>
                      <p className="text-sm text-gray-700">{ed.rotulo}</p>
                    </div>
                    <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-azul-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-navy-900 mb-3">{ed.titulo}</h3>
                  <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">{ed.resumo}</p>
                  <button
                    onClick={() => goToEdicao(ed.view)}
                    className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                  >
                    Abrir edição<span className="sr-only">: {ed.rotulo}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative overflow-hidden bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src={radarLogoClaro} alt="Radar" className="h-10 md:h-11 w-auto mx-auto mb-5" />
            <p className="text-white/80 text-sm md:text-base font-medium mb-1">
              Inteligência Estratégica de IA na Educação
            </p>
            <p className="text-white/60 text-xs mb-7">
              Sinais · Padrões · Riscos · Oportunidades para produtos educacionais
            </p>

            <p className="text-white/80 text-sm md:text-xs leading-relaxed max-w-[68ch] mx-auto mb-10">
              O Radar acompanha movimentos de mercado, concorrência, pesquisa, tecnologia e regulação e os traduz em sinais, padrões, riscos e oportunidades para produtos educacionais.
            </p>

            <div className="pt-8 border-t border-white/15 flex flex-col items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Uma publicação do</span>
              <img src={hubLogoClaro} alt="Hub de IA, Produto e Experiência" className="h-11 md:h-12 w-auto" />
              <div className="space-y-1 mt-2">
                <p className="text-white/70 text-sm">Curadoria e análise: <span className="text-white font-medium">Silvana Helena</span></p>
                <p className="text-white/60 text-xs tabular-nums">Outubro de 2026 · Edição #13 · 1–13 out</p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-11 h-11 md:w-12 md:h-12 bg-rosa-600 hover:bg-rosa-700 active:scale-[0.96] text-white rounded-full shadow-[0_8px_20px_-6px_rgba(225,29,118,0.55)] transition-[background-color,scale] duration-150 z-40 flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </div>
    </MotionConfig>
  );
}
