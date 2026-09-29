import { useState, useEffect } from 'react';
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
  LayoutList
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

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b' | 'edicao-julho-2026' | 'edicao-agosto-2026' | 'edicao-agosto-2026-b' | 'edicao-setembro-2026';

// Cartões do arquivo, da edição mais recente para a mais antiga.
const ARQUIVO: { rotulo: string; titulo: string; resumo: string; view: View }[] = [
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
                <span className="block text-[11px] font-bold text-azul-600 uppercase tracking-[0.16em]">Edição #12</span>
                <span className="block text-[11px] text-gray-500 mt-1.5 tabular-nums">11–30 set 2026</span>
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
                A IA só ensina quando <span className="text-amarelo-400">faz o aluno pensar em vez de dar a resposta.</span>
              </motion.h1>

              <motion.p
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-base md:text-[17px] text-white/80 leading-[1.7]"
              >
                É o que mostram os primeiros ensaios controlados com tutores de IA, publicados em agosto e setembro: o ganho foi pequeno e só apareceu quando o tutor guiava o aluno por perguntas e exigia domínio do conteúdo antes de avançar. Enquanto isso, a maioria dos americanos diz que a IA faz mais mal que bem na escola, sem separar um uso do outro. Cabe ao produto <strong className="font-semibold text-white">tornar essa diferença visível</strong>.
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
                      O tutor que faz o aluno trabalhar, com domínio antes de avançar e o professor decidindo, dá ganho pequeno e mensurável. Três estudos de agosto e setembro chegaram a esse resultado, e um deles mostrou que um modelo aberto barato ensina tanto quanto os caros.
                    </p>
                  </div>
                  <div className="border-l-2 border-red-400 pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide">O que ela derruba</p>
                    </div>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                      A promessa de transformar a aprendizagem só com acesso ao modelo. O ganho medido é parecido com o de um bom material sem IA, só aparece quando o aluno usa a ferramenta para pensar e, no estudo de Hamilton County, boa parte dele sumiu em uma semana.
                    </p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-gray-100">
                  <p className="text-sm md:text-xs text-gray-800 leading-relaxed">
                    <span className="font-bold text-azul-600">A conclusão:</span> o modelo de IA ficou barato e deixou de diferenciar os produtos. O que diferencia agora é o <em>desenho pedagógico</em>, que decide se a IA ensina ou só responde. Nas próximas negociações, a pergunta do cliente deve deixar de ser se o produto tem IA e passar a ser se há prova de que o aluno aprende com ela.
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
                  tag: "Tese confirmada",
                  tagCor: "bg-green-100 text-green-700",
                  conclusao: "A IA que faz o aluno trabalhar ensina, mas pouco, e o resultado depende do desenho",
                  raciocinio: "O ensaio de dois anos com o Khanmigo em modo coach, em 18 escolas do Tennessee, mediu cerca de 1,3 ponto percentil por período, perto do que o Khan consegue sem IA. Outro estudo, com quase 7 mil alunos, mediu 3 pontos a mais com IA e domínio obrigatório, e boa parte da vantagem sumiu em uma semana.",
                  decisao: "Trocar a promessa de transformação por uma meta de ganho mensurável e o desenho que a sustenta."
                },
                {
                  tag: "Commodity",
                  tagCor: "bg-gray-200 text-gray-700",
                  conclusao: "O modelo deixou de diferenciar: o aberto mais barato empatou com o tutor humano",
                  raciocinio: "Num estudo com 2.383 participantes, o tutor de IA ensinou tanto quanto a tutoria humana, com custo por ponto aprendido 918 vezes menor. O modelo mais barato do teste foi um aberto de porte médio. Se o modelo barato basta, o que separa os produtos é a sequência de atividades, a exigência de domínio antes de avançar, a forma de retomar o erro e o papel do professor.",
                  decisao: "Posicionar o produto pelo desenho pedagógico, e não pelo modelo."
                },
                {
                  tag: "Vento contra",
                  tagCor: "bg-red-100 text-red-700",
                  conclusao: "O público americano virou contra a IA na escola, e Los Angeles tirou a IA de todos os alunos",
                  raciocinio: "Na pesquisa da NBC publicada em 17 de setembro, 53% dos adultos disseram que a IA faz mais mal que bem na educação básica, contra 27%. Los Angeles, a segunda maior rede dos EUA, bloqueou a IA generativa para todos os alunos nos equipamentos da escola, sem avisar o conselho.",
                  decisao: "Ter evidência de aprendizagem pronta antes que a objeção chegue ao comprador brasileiro."
                },
                {
                  tag: "Padrão da indústria",
                  tagCor: "bg-azul-100 text-azul-700",
                  conclusao: "As big techs passaram a formar o professor para decidir com a IA",
                  raciocinio: "A OpenAI lançou uma trilha para educadores em que a IA compara as respostas dos alunos com os objetivos de aprendizagem e o professor decide o que fazer. A Anthropic abriu o Claude for Teachers para redes e escolas. As duas repetem o que a norma brasileira exige: quem assina é o professor.",
                  decisao: "Incluir a formação do professor no próprio produto, em vez de tratá-la como material de apoio separado."
                },
                {
                  tag: "Lacuna local",
                  tagCor: "bg-ambar-100 text-ambar-700",
                  conclusao: "Ninguém no Brasil publicou evidência de impacto",
                  raciocinio: "Não localizamos estudo com grupo de comparação de nenhuma rede, sistema de ensino ou plataforma brasileira de IA. E a primeira candidata a publicar evidência sobre IA na rede pública é uma aliança de fundações com a Anthropic, e não um sistema de ensino. Quando a objeção chegar aqui, quem tiver um número próprio de aprendizagem terá o argumento que a pesquisa americana não derrubou.",
                  decisao: "Montar agora uma linha de base de aprendizagem com uma rede parceira."
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
              Cinco sinais, <span className="text-azul-600">uma direção</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base max-w-3xl text-pretty">
              Os cinco sinais mostram, por ângulos diferentes, que pesquisadores, público, big techs e reguladores começaram a avaliar separadamente a IA que entrega a resposta pronta e a IA que faz o aluno trabalhar. Alguns fatos são anteriores a 11 de setembro e ficaram fora da edição passada; cada cartão traz a data.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {[
                {
                  titulo: "Os primeiros ensaios rigorosos de tutor de IA saíram, e o ganho é pequeno",
                  empresa: "Khan Academy · NUMI · EdWorkingPapers",
                  data: "Ago/2026",
                  consolida: "Ensaio de dois anos com o Khanmigo · estudo com 6.997 alunos em Hamilton County · registro de uso das conversas",
                  resumo: "Oreopoulos e Low publicaram o primeiro ensaio randomizado de dois anos com o Khanmigo, sorteando 18 escolas de anos finais do Tennessee. O tutor funcionava em modo coach, sem entregar a resposta. O ganho foi de cerca de 1,3 ponto percentil por período letivo (0,06 a 0,08 desvio-padrão por ano), perto do que o Khan consegue sem IA. Quase todos os alunos experimentaram (96%), mas o aluno mediano só mandou mensagem em um terço dos dias, e muitas conversas fugiram do assunto ou pediram a resposta. No mesmo mês, um estudo com 6.997 alunos em Hamilton County mediu cerca de 3 pontos percentuais a mais com IA e domínio obrigatório antes de avançar. O ganho ficou no conteúdo praticado e caiu bastante uma semana depois.",
                  impacto: "Pela primeira vez há números com grupo de comparação para tutor de IA, e eles desmontam tanto a ideia de que a IA não ensina nada quanto a de que ela transforma a aprendizagem: o ganho existe e é pequeno. E ele depende do desenho (modo coach, domínio antes de avançar, retomada do erro), porque onde o aluno pode usar a ferramenta para pular o esforço, ele usa.",
                  professor: "Tem uma expectativa realista: a IA ajuda quem pratica com ela, e quem usa pouco quase não ganha nada.",
                  aluno: "Aprende mais quando o tutor não dá a resposta e exige domínio antes de avançar.",
                  gestor: "Passa a ter números externos para comparar com o que o fornecedor promete: se alguém anunciar um salto de aprendizagem, os ensaios indicam que o esperado é bem menor.",
                  roadmap: "Priorizar domínio, retomada do erro e medição de uso produtivo antes de novos recursos de conversa.",
                  fonte: "https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/",
                  color: "from-azul-700 to-azul-800"
                },
                {
                  titulo: "Um modelo aberto barato empatou com o tutor humano, a um custo 918 vezes menor",
                  empresa: "Handshake AI Research · StudentBench",
                  data: "Set/2026",
                  consolida: "2.383 participantes em preparação para o GRE · IA comparada a tutoria humana · custo por ponto aprendido",
                  resumo: "O StudentBench, pré-print da Handshake AI Research publicado em setembro, comparou tutores de IA e tutoria humana com 2.383 pessoas estudando para o GRE. A IA teve ganho estatisticamente equivalente ao humano (p = 0,044 no teste de equivalência). O custo por ponto percentual aprendido foi de US$ 0,0052, contra US$ 4,81 da tutoria humana a US$ 75 por hora. O modelo mais barato do teste foi o Gemma 4 31B, aberto e de porte médio. Os participantes eram adultos, num exame padronizado, e o estudo ainda não passou por revisão por pares, então o resultado não se transfere direto para a educação básica.",
                  impacto: "O dado mais útil do mês é a métrica: custo por ponto aprendido, em vez de custo por token ou por licença. Se um modelo aberto barato entrega o mesmo que um caro, escolher modelo vira decisão de custo, e a disputa vai para quem desenha a experiência em volta dele.",
                  professor: "Efeito indireto: tutoria individual deixa de ser escassa, e o professor pode se concentrar em quem a IA não alcança.",
                  aluno: "Pode ter tutoria equivalente à humana em prática estruturada, se o produto for desenhado para isso.",
                  gestor: "Pode comparar propostas pelo custo de cada ponto de aprendizagem, e não pelo preço da licença.",
                  roadmap: "Adotar custo por ponto aprendido como métrica e testar um modelo aberto antes de renovar o contrato do modelo fechado.",
                  fonte: "https://arxiv.org/abs/2609.28470",
                  color: "from-azul-600 to-azul-700"
                },
                {
                  titulo: "O público americano virou contra a IA na escola, e Los Angeles tirou a IA de todos os alunos",
                  empresa: "NBC News · Washington Post · LAUSD",
                  data: "2–22 set/2026",
                  consolida: "Pesquisa nacional com 7.105 adultos · reportagem sobre a ilusão de aprendizagem · bloqueio em Los Angeles",
                  resumo: "A pesquisa da NBC News, publicada em 17 de setembro, ouviu 7.105 adultos entre 20 de agosto e 1º de setembro (margem de 3,3 pontos). Para 53%, a IA faz mais mal que bem na educação básica, e 27% acham o contrário. No ensino superior, foram 54% contra 24%. Em 22 de setembro, o Washington Post ouviu educadores que chamam o efeito de ilusão de aprendizagem: o aluno entrega mais, e melhor, e aprende menos. Antes disso, entre 2 e 4 de setembro, Los Angeles bloqueou a IA generativa para todos os alunos nos equipamentos da escola no ano letivo 2026-2027. A rede tinha mais de treze ferramentas aprovadas, e a decisão surpreendeu o conselho e as famílias. O comitê criado para rever a medida só leva recomendações ao conselho no fim do ano letivo, então o bloqueio deve valer o ano inteiro.",
                  impacto: "A objeção à IA na escola virou maioria na opinião pública e já vira política de rede. A pesquisa não separa a IA que responde da IA que faz o aluno trabalhar, mas o produto precisa separar: a ilusão de aprendizagem que os educadores descrevem é o que acontece quando o aluno usa a IA para pular o esforço, o mesmo comportamento que os ensaios registraram.",
                  professor: "Vai encontrar famílias mais desconfiadas e precisa de argumento para defender o uso que funciona.",
                  aluno: "Pode perder até o uso bom, se a rede decidir cortar tudo.",
                  gestor: "Precisa de evidência de aprendizagem, além dos dados de uso, para sustentar a decisão diante do conselho.",
                  roadmap: "Mostrar à família e à rede o que o aluno fez com a IA: se praticou, errou e corrigiu, ou se só copiou.",
                  fonte: "https://www.nbcnews.com/politics/politics-news/poll-americans-think-ai-harm-good-schools-rcna597777",
                  color: "from-rosa-600 to-rosa-700"
                },
                {
                  titulo: "As big techs passaram a formar o professor para decidir com a IA",
                  empresa: "OpenAI Academy · Anthropic",
                  data: "28 ago – 23 set/2026",
                  consolida: "Trilhas AI for Educators e AI for College Students com selos · programa de formadores · Claude for Teachers para redes · ferramentas sobre o currículo nacional em Gana · parceria com fundações brasileiras para a rede pública",
                  resumo: "Em 21 de setembro, a OpenAI ampliou a OpenAI Academy com novas trilhas. Na de educadores, a IA compara as respostas dos alunos com os objetivos de aprendizagem e o professor decide o que fazer. Na de universitários, há selos de conclusão. Em 23 de setembro, a empresa anunciou um programa para formar formadores. Em 28 de agosto, a Anthropic abriu para escolas e redes americanas o Claude for Teachers, até então individual, com as habilidades de preparar aula e verificar a compreensão, desenvolvidas com a Learning Commons. E em 22 de setembro, num evento durante a Assembleia Geral da ONU, a Anthropic relatou que ferramentas de planejamento de aula feitas sobre o currículo nacional de Gana chegam a 68 mil professores, com a Playlab e o Ministério da Educação do país, e que começou a trabalhar com a Aliança de IA para a Educação, que reúne Fundação Lemann, Fundação Telles e VélezReyes+, para desenhar ferramentas de IA para escolas públicas brasileiras e publicar as evidências e os guias do trabalho.",
                  impacto: "A edição #08 registrou que as big techs encontraram no professor um canal para chegar à escola. Agora esse canal tem trilha, certificado e formador, e a ênfase passou a ser como o professor decide usando a IA, a mesma regra aprovada pelo CNE em setembro. A novidade para o Brasil é o caminho de entrada: em Gana e agora aqui, a Anthropic chega por meio de ministério e fundações locais, com ferramentas feitas sobre o currículo nacional e voltadas à rede pública. Conhecer o currículo deixa de ser vantagem exclusiva de quem é do setor; o que continua sendo é o material que cada escola adotou e a relação com cada rede.",
                  professor: "Recebe formação certificada gratuita, que pode não conversar com o material da sala.",
                  aluno: "Efeito indireto: o professor formado tende a usar a IA para entender onde o aluno erra, sem abrir mão de corrigir ele mesmo.",
                  gestor: "Precisa decidir se cumpre a formação obrigatória com o catálogo gratuito, com a ferramenta que fundações e big techs vão oferecer à rede pública ou com algo ligado ao material adotado.",
                  roadmap: "Formar o professor dentro do produto, praticando a decisão no próprio material.",
                  fonte: "https://www.edtechinnovationhub.com/news/anthropic-says-claude-lesson-planning-tools-are-reaching-68000-teachers-in-ghana",
                  color: "from-azul-600 to-lilas-600"
                },
                {
                  titulo: "No Brasil, a correção de redação por IA continua em rede pública enquanto a regra espera assinatura",
                  empresa: "SEDU-ES · Letrus · CNE · Inep",
                  data: "26 ago – 18 set/2026",
                  consolida: "Redação com correção por IA na rede do Espírito Santo · parecer do CNE sem homologação · imprensa dividida · cartilha do ENEM",
                  resumo: "Entre 26 de agosto e 7 de setembro, a rede estadual do Espírito Santo fez a quarta produção de redação do ano na plataforma Letrus, em que a IA corrige o texto e devolve o retorno na hora. A secretaria usa a ferramenta desde 2019. O parecer do CNE de 1º de setembro, que veda IA para corrigir e dar nota a redação, continua sem homologação: não localizamos publicação no Diário Oficial até o fechamento. Parte da imprensa trata a regra como vigente, e parte lembra que parecer só vale depois de homologado. Em 18 de setembro, o Inep publicou a cartilha do ENEM, com prova em 8 de novembro e redação corrigida por dois avaliadores humanos.",
                  impacto: "O caso capixaba mostra onde a linha deve ficar na prática: a devolutiva formativa imediata é permitida, e a nota dada pela máquina, não. Com a norma sem assinatura e a imprensa dividida, redes e fornecedores não sabem de que lado está cada funcionalidade. Quem publicar essa fronteira primeiro, com base no texto aprovado, vai orientar o mercado.",
                  professor: "Continua dono da nota e pode usar a devolutiva automática, desde que ela não vire nota.",
                  aluno: "Recebe retorno imediato sobre o texto, o tipo de ajuda que os ensaios ligam à retomada do erro.",
                  gestor: "Precisa separar, em cada contrato, o que é devolutiva e o que é nota antes da homologação.",
                  roadmap: "Separar devolutiva de nota no produto, com o professor validando a nota e o registro guardado.",
                  fonte: "https://sedu.es.gov.br/escolas-da-rede-desenvolvem-a-4a-producao-de-redacao-do-ano-com-apoio-da-inteligencia-artificial",
                  color: "from-azul-500 to-azul-600"
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
                  cat: "A homologação do parecer do CNE não saiu em quatro semanas",
                  nota: "O parecer foi aprovado em 1º de setembro. Até o fechamento, não localizamos homologação do MEC nem publicação no Diário Oficial, e a imprensa diverge sobre a vigência.",
                  leitura: "Quem publicar uma leitura clara do que muda, e a partir de quando, vira referência para redes que estão lendo manchetes contraditórias.",
                  janela: "Monitorar"
                },
                {
                  cat: "Nenhum estudo brasileiro de IA pedagógica com grupo de comparação",
                  nota: "Terceira edição seguida com essa ausência. Os EUA publicaram dois ensaios com milhares de alunos no período. Aqui, não localizamos nenhum de rede, sistema de ensino ou plataforma.",
                  leitura: "Um estudo leva pelo menos um semestre letivo. A Anthropic e a Aliança de IA para a Educação disseram que vão publicar evidências sobre as ferramentas que estão desenhando para escolas públicas; se saírem primeiro, o primeiro número brasileiro virá de fora do setor.",
                  janela: "Custo de atraso alto"
                },
                {
                  cat: "Nenhum sistema de ensino concorrente publicou evidência de aprendizagem",
                  nota: "Entre os concorrentes acompanhados, não localizamos lançamento de IA na janela nem resultado de aprendizagem das ferramentas que já estão no mercado.",
                  leitura: "Quem publicar primeiro um resultado de aprendizagem, mesmo modesto, passa a ser a referência com que os outros serão comparados. Depois dos ensaios americanos, um ganho pequeno e bem medido convence mais do que uma promessa grande.",
                  janela: "Janela aberta"
                },
                {
                  cat: "Ninguém mede o uso produtivo da IA",
                  nota: "No ensaio do Khanmigo, o aluno mediano usou o tutor em um terço dos dias, e muitas conversas pediram a resposta ou fugiram do assunto. Nenhuma plataforma brasileira divulga métrica que separe uso produtivo de atalho.",
                  leitura: "Um número alto de uso pode esconder alunos que só pedem a resposta pronta. Sem separar os dois, a plataforma não consegue mostrar que não está alimentando a ilusão de aprendizagem.",
                  janela: "Janela aberta"
                },
                {
                  cat: "Ninguém publica custo por ponto de aprendizagem",
                  nota: "O StudentBench mostrou que a métrica é calculável e que a diferença entre alternativas chega a centenas de vezes. Os fornecedores brasileiros cobram por aluno ou por licença.",
                  leitura: "Numa rede pública com orçamento apertado, vender aprendizagem por real gasto muda a conversa de compra.",
                  janela: "Janela aberta"
                },
                {
                  cat: "O Inep continua sem falar da prova de conceito de correção por IA",
                  nota: "Segunda edição sem posição. A cartilha do ENEM de 18 de setembro mantém a correção humana e não menciona o teste com empresas anunciado em junho.",
                  leitura: "O próprio Inep testou IA na correção da redação. Enquanto ele não disser se o teste servia para devolutiva ou para nota, o mercado fica sem referência pública de onde está a fronteira.",
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
              Tema que volta a cada ciclo entra no roadmap; tema que apareceu uma vez fica em observação. Nesta edição, a restrição por idade chegou à terceira edição seguida, e a regulação voltou a travar, agora à espera da homologação do MEC.
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
                  tema: "Evidência de aprendizagem como campo de disputa",
                  tipo: "Estrutural",
                  trilha: "#08 admissão de uso real baixo → #09 pesquisa longitudinal acoplada a rollout → #10 penalidade medida em coorte de 30 meses → #11 avaliação de impacto exigida por norma → #12 primeiros ensaios randomizados de tutor de IA, com ganho modesto",
                  leitura: "Nas edições anteriores, a discussão era se havia ou não evidência sobre IA na aprendizagem. Agora existem os primeiros resultados com grupo de comparação, e a pergunta passou a ser de que tamanho é o efeito e que tipo de desenho o produz. Um ganho pequeno e bem medido virou o mínimo para ser levado a sério, e o fato de nenhum player brasileiro ter número próprio passou a ser o risco mais concreto do setor.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Quem assina a decisão sobre o aluno",
                  tipo: "Estrutural",
                  trilha: "#09 a interface passa a decidir o que cada perfil vê → #10 a própria plataforma passa a impedir que o aluno pegue a resposta pronta → #11 a norma proíbe a máquina de dar nota e de punir → #12 as big techs formam o professor para decidir",
                  leitura: "A ideia de que a decisão sobre o aluno cabe ao professor já estava na norma brasileira e agora também está nos cursos de formação da OpenAI e da Anthropic. Como virou o discurso de todo mundo, afirmar isso já não diferencia nenhum produto; o que ainda diferencia é conseguir mostrar em que momento o professor decidiu.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Formação docente como camada de produto",
                  tipo: "Estrutural",
                  trilha: "#08 a big tech encontra o professor como canal → #09 formação como gargalo → #10 catálogo gratuito consolidado → #11 formação vira obrigação institucional → #12 trilha certificada, programa de formadores e ferramentas sobre currículo nacional",
                  leitura: "A formação genérica em IA já é oferecida de graça, com certificado e formadores, por empresas de alcance global. E a big tech começou a descer para o currículo: em Gana, com ferramentas feitas sobre o currículo nacional, e no Brasil, com fundações, para a rede pública. O que continua aberto é a formação feita no material que cada escola adotou e segundo as regras de uso de cada rede.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Restrição de acesso por faixa etária",
                  tipo: "Estrutural",
                  trilha: "#10 trava padrão por idade em produto de massa → #11 vedação até o 5º ano no Brasil e moratória até o 8º ano em Nova York → #12 Los Angeles bloqueia IA generativa para todos os alunos",
                  leitura: "Terceira edição seguida com o tema, e a restrição ficou mais ampla: começou pelos anos iniciais e agora, em Los Angeles, alcança todos os alunos da rede. O motivo também mudou: antes era proteger crianças pequenas, agora é a desconfiança de que a IA atrapalha a aprendizagem.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "A regulação brasileira travada na última milha",
                  tipo: "Emergente",
                  trilha: "#07 CNE aprova e abre consulta → #08 a #10 sem homologação → #11 aprovado em plenário com prazo de doze meses → #12 quatro semanas sem assinatura e imprensa divergente sobre a vigência",
                  leitura: "Na edição passada tratamos a regulação como resolvida, porque o CNE tinha aprovado o parecer. Ela voltou a travar numa etapa seguinte: falta a homologação do MEC, que dá início ao prazo de doze meses. Para planejar, o mais seguro é tratar o conteúdo da regra como definido e a data de vigência como incerta.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "O que vira commodity",
                  tipo: "Emergente",
                  trilha: "#10 mediar o uso vira padrão de plataforma → #12 o modelo em si vira insumo barato, com o aberto de porte médio empatando com o humano",
                  leitura: "Em três edições, duas coisas que eram vendidas como diferencial passaram a ser oferecidas por todos: mediar o uso do aluno, registrado na edição #10, e agora o próprio modelo de IA. O que continua difícil de copiar é o desenho pedagógico e a capacidade de provar que ele funciona.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "Interfaces novas: voz, agente executor e robótica",
                  tipo: "Pontual",
                  trilha: "#09 voz em tempo real e banca oral → #10 robô humanoide em português → #11 sem desdobramento → #12 sem desdobramento",
                  leitura: "Segunda edição seguida sem novidade. Se nada vier na próxima, a linha sai do radar.",
                  cor: "bg-gray-50 border-gray-200",
                  badge: "bg-gray-200 text-gray-700"
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
                  <ol aria-label="Evolução do tema por edição" className="bg-white/80 rounded-xl px-4 py-3.5 mb-4 space-y-2.5">
                    {item.trilha.split(' → ').map((passo, j, passos) => {
                      const partes = passo.match(/^#(\d+)(?: a #(\d+))?\s+(.*)$/);
                      const edicao = !partes ? '' : partes[2] ? `Edições #${partes[1]}–${partes[2]}` : `Edição #${partes[1]}`;
                      const texto = partes ? partes[3] : passo;
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
              Concorrência direta é quem disputa a mesma escola, rede e orçamento. Nenhum dos players acompanhados lançou IA ou publicou resultado de aprendizagem na janela, então a análise parte do que cada um já tem: quem está do lado da IA que faz o aluno trabalhar e quem fica exposto à objeção.
            </p>

            {/* Mercado privado */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-azul-600 rounded-full" />
              <h3 className="text-xl font-bold text-navy-900">Concorrência direta: mercado privado</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-12 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-azul-50">
                    {["Player", "Grupo / Soluções", "Movimento observado", "Posição diante da evidência", "Exposição", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-azul-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Poliedro",
                      grupo: "Cosmos · Polígono · Conviver · Sabiá",
                      movimento: "Sem lançamento na janela. O Cosmos continua restrito ao acervo próprio, para professor e gestor",
                      estrategia: "A IA não fala com o aluno, então fica fora do alvo da objeção. Em troca, é mais difícil atribuir ganho de aprendizagem à IA, porque o efeito passa pelo professor",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                    {
                      player: "Santillana",
                      grupo: "Moderna Core",
                      movimento: "Sem lançamento na janela. IA de acompanhamento de desempenho, sem geração voltada ao aluno",
                      estrategia: "Já acompanha o desempenho de forma contínua, que é a matéria-prima de uma linha de base. Tem o dado para medir o efeito do próprio produto, se quiser",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                    {
                      player: "Bernoulli",
                      grupo: "Sistema de ensino próprio",
                      movimento: "Sem lançamento na janela. O CoCria Professor continua focado em planejamento e diagnóstico",
                      estrategia: "O diagnóstico sobre a base da rede está a um passo de virar medição de efeito. Hoje mede o aluno, e não a ferramenta",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Arco Educação",
                      grupo: "SAS, SAE Digital, Geekie",
                      movimento: "Sem lançamento na janela. Plataforma adaptativa e literacia em IA no programa de competências",
                      estrategia: "Tem o desenho mais próximo do que os ensaios premiaram, a prática adaptativa com trilha. Como a plataforma fala direto com o aluno, também é quem mais precisa provar que ele não pula etapas",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Somos Educação",
                      grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                      movimento: "Sem lançamento na janela. O Plu oferece ao aluno resumo, exercício e tira-dúvidas ancorados ao capítulo",
                      estrategia: "Pelo que já está no produto, é o mais exposto: resumir e tirar dúvida é o uso que os educadores associam à ilusão de aprendizagem. Ancorar ao capítulo melhora a precisão da resposta, e não o esforço do aluno",
                      exposicao: "Alta", impacto: "Alto"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-azul-50/30 transition-colors' : 'bg-azul-50/20 hover:bg-azul-50/40 transition-colors'}>
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

            {/* Mercado público */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-rosa-600 rounded-full" />
              <h3 className="text-xl font-bold text-navy-900">Concorrência direta: mercado público</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-12 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ambar-50">
                    {["Player", "Grupo / Soluções", "Movimento observado", "Posição diante da evidência", "Exposição", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-ambar-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Saber",
                      grupo: "eDocente",
                      movimento: "Sem lançamento na janela. Correção de microtestes por câmera no celular do professor",
                      estrategia: "Mede e devolve o resultado ao professor, sem conversar com o aluno, o que o deixa do lado certo da objeção. Também gera o dado de acompanhamento que uma avaliação de impacto exige",
                      exposicao: "Baixa", impacto: "Alto"
                    },
                    {
                      player: "Moderna",
                      grupo: "Moderna Amigos",
                      movimento: "Sem lançamento na janela. Presença em redes municipais e estaduais",
                      estrategia: "Quando uma rede precisar justificar a IA para o conselho e as famílias, vai pedir resultado primeiro a quem já está contratado. A proximidade com as secretarias, que sempre foi a força da Moderna, passa a vir acompanhada de cobrança por evidência",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-ambar-50/30 transition-colors' : 'bg-ambar-50/20 hover:bg-ambar-50/40 transition-colors'}>
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

            {/* Radar de funcionalidades */}
            <div className="flex items-center gap-2 mb-4">
              <img src={radarIcone} alt="" width={234} height={229} className="h-6 w-auto" />
              <h3 className="text-xl font-bold text-navy-900">Radar de funcionalidades</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-3xl">
              Nenhuma funcionalidade nova na janela; os recursos são os da edição passada. A pergunta desta vez: cada um faz o aluno trabalhar ou entrega a resposta?
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  player: "Somos Educação",
                  produto: "Plu, dentro do Plurall",
                  mercado: "Privado",
                  corMercado: "bg-azul-100 text-azul-700",
                  publicos: ["Professor", "Aluno"],
                  entregue: "Para o professor: plano de aula, questões, provas e apresentações a partir do capítulo do material. Para o aluno: resumo, glossário, plano de estudo, exercício e tirar dúvida dentro do próprio conteúdo.",
                  leitura: "Para o professor, gera material, e isso ninguém questiona. Para o aluno, resumo e tira-dúvidas são o formato que mais se presta a atalho. O acervo ancorado ao capítulo poderia servir para perguntar ao aluno em vez de responder por ele.",
                  fonte: "https://www.plurall.net/ia.html",
                  fonteLabel: "Plurall IA"
                },
                {
                  player: "Poliedro",
                  produto: "Cosmos, camada de IA do P+",
                  mercado: "Privado",
                  corMercado: "bg-azul-100 text-azul-700",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Interação com IA generativa restrita ao conteúdo proprietário, somada a modelos preditivos: sugestão de estratégia didática, adaptação de conteúdo, criação de avaliação e leitura de desempenho. Disponível na web e no app P+.",
                  leitura: "A IA não fala com o aluno, então quem decide é o professor. É o desenho que a norma e as big techs chancelaram, e ele depende da formação do professor para virar aprendizagem.",
                  fonte: "https://brasil.bettshow.com/releases-expositores-2026/poliedro-apresenta-cosmos-hub-de-inteligencia-artificial-na-bett-brasil-2026",
                  fonteLabel: "Release Bett Brasil 2026"
                },
                {
                  player: "Santillana",
                  produto: "Moderna Core",
                  mercado: "Privado",
                  corMercado: "bg-azul-100 text-azul-700",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Ecossistema que junta conteúdo, dados e IA: ampliação de repertório de estratégias para o professor e leitura contínua de desempenho para apoiar decisão do gestor.",
                  leitura: "O recurso acompanha o desempenho do aluno e não responde por ele, então não cria atalho. É o tipo de recurso mais útil para medir o efeito do produto, embora chame menos atenção numa demonstração de venda; com a evidência virando argumento de compra, essa desvantagem diminui.",
                  fonte: "https://revistaeducacao.com.br/2026/05/05/moderna-core-bett/",
                  fonteLabel: "Revista Educação"
                },
                {
                  player: "Bernoulli",
                  produto: "CoCria Professor",
                  mercado: "Privado",
                  corMercado: "bg-azul-100 text-azul-700",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Apoio ao planejamento docente e à leitura de diagnóstico de aprendizagem, com adaptação de atividades e organização de estratégias sobre a base de dados da rede.",
                  leitura: "Planejamento e diagnóstico ficam com o professor e não criam atalho para o aluno. Também não diferenciam: todo concorrente terá algo parecido.",
                  fonte: "https://educador21.com/ia-desafia-escolas-repensar-gestao-formacao/",
                  fonteLabel: "Educador21"
                },
                {
                  player: "PNLD Digital",
                  produto: "Leitor oficial do MEC/FNDE",
                  mercado: "Plataforma pública",
                  corMercado: "bg-ambar-100 text-ambar-700",
                  publicos: ["Aluno", "Professor"],
                  entregue: "Leitor interativo das obras do programa, com audiodescrição, narração, mapas e infográficos clicáveis, vídeos legendados e compatibilidade com leitor de tela. Traz agente de IA para esclarecer dúvidas e apoiar o uso do sistema.",
                  leitura: "O agente responde sobre o sistema, e não sobre o conteúdo, por isso não entrega resposta de exercício. Como o leitor oficial já oferece audiodescrição e leitura de tela para todas as obras, esses recursos deixam de diferenciar qualquer fornecedor.",
                  fonte: "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/junho/pnld-digital-amplia-inclusao-aos-livros-da-educacao-basica",
                  fonteLabel: "MEC"
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                    <h4 className="font-bold text-gray-900 text-lg leading-snug">{f.player}</h4>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${f.corMercado}`}>
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

            <div className="bg-white rounded-2xl border-2 border-ambar-100 p-6 md:p-8 mb-12">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-rosa-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">O espaço que continua vago</h4>
                  <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                    Nenhum recurso descrito publicamente declara domínio obrigatório antes de avançar, retomada guiada depois do erro ou medida do que o aluno fez com a resposta, os três elementos que os ensaios de agosto e setembro associaram a ganho. A oportunidade não exige inventar uma funcionalidade nova: está em reorganizar o que já existe em torno desses três elementos e medir o resultado.
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
                    nome: "Opinião pública e imprensa",
                    altera: "Comportamento e expectativa",
                    nota: "A maioria nos EUA acha que a IA faz mais mal que bem na escola, e educadores falam em ilusão de aprendizagem. A objeção deve chegar à escola brasileira antes das propostas, pedindo resultado."
                  },
                  {
                    nome: "OpenAI e Anthropic",
                    altera: "Economia da formação",
                    nota: "Trilha para educadores com selo, programa de formadores, assistente docente vendido a redes e, no Brasil, parceria com fundações para desenhar ferramentas para a rede pública. A formação genérica virou oferta gratuita no momento em que a norma a tornou obrigatória, e a entrada na rede pública passa a ser por aliança com quem já tem relação com as secretarias."
                  },
                  {
                    nome: "Pesquisa independente",
                    altera: "Régua de evidência",
                    nota: "Dois ensaios com milhares de alunos e um estudo de custo por ponto definiram o que é um ganho crível e quanto ele pode custar. Toda promessa de fornecedor passa a ser comparada com esses números."
                  },
                  {
                    nome: "Reguladores e redes",
                    altera: "Regras competitivas",
                    nota: "Los Angeles cortou a IA de todos os alunos, e o parecer do CNE continua sem assinatura. O risco de contrato já não se limita à faixa etária: uma rede pode desligar tudo por desconfiança."
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
                  empresa: "Khanmigo: dois anos de ensaio randomizado em modo coach",
                  pais: "Estados Unidos · Anos finais",
                  categoria: "Evidência de efeito",
                  problema: "Saber se um tutor de IA que não entrega a resposta melhora a aprendizagem numa escola real, por tempo suficiente, comparado com a mesma plataforma sem IA.",
                  implementacao: "O ensaio sorteou escolas, e não alunos, para evitar contaminação dentro da turma: 18 escolas de anos finais do Tennessee em dois anos letivos. O Khanmigo funcionava em modo coach, conduzindo o aluno por perguntas. Além das notas, os pesquisadores leram o registro das conversas.",
                  escala: "18 escolas em dois anos. Cerca de 1,3 ponto percentil por período letivo (0,06 a 0,08 desvio-padrão por ano; 0,14 num ano completo de uso ativo). 96% experimentaram; o aluno mediano mandou mensagem em um terço dos dias.",
                  financiamento: "Pesquisa acadêmica independente (EdWorkingPapers e NBER), com acesso aos dados de uso da plataforma.",
                  aprendizado: "O efeito é real e pequeno, parecido com o do Khan sem IA. O limite está no uso: muita conversa fora do assunto e pedido de resposta, mesmo num tutor feito para não responder.",
                  limitacoes: "Uma rede, uma plataforma e uma faixa etária. Ainda sem revisão por pares, e o resultado vale para o modo coach, não para IA conversacional aberta.",
                  replicavel: "Sortear por escola, rodar por pelo menos um ano, comparar com a plataforma sem IA e ler as conversas junto com as notas.",
                  naoReplicavel: "A base de milhões de alunos e o parceiro acadêmico com histórico em ensaios desse porte. Aqui, seria preciso montar o equivalente com uma rede parceira.",
                  application: "É um desenho de estudo que dá para copiar em escala menor: uma rede, duas condições, um ano. O dado mais útil é o registro de uso, que mostra onde o aluno foge da tarefa."
                },
                {
                  empresa: "NUMI em Hamilton County: IA com domínio antes de avançar",
                  pais: "Estados Unidos · Rede pública",
                  categoria: "Desenho pedagógico",
                  problema: "Separar o efeito da IA do efeito do domínio obrigatório: o aluno aprende mais porque a IA ajuda ou porque precisa dominar o conteúdo antes de seguir?",
                  implementacao: "O estudo comparou condições com e sem IA numa plataforma em que o aluno só avança depois de acertar o suficiente. A IA atuava sobretudo depois do erro, ajudando o aluno a entender o que errou antes de tentar de novo.",
                  escala: "6.997 alunos. IA com domínio obrigatório deu cerca de 3 pontos percentuais a mais, concentrados no conteúdo praticado. Boa parte da vantagem tinha sumido uma semana depois.",
                  financiamento: "Working paper acadêmico (EdWorkingPapers 26-1552), em parceria com a rede pública do condado.",
                  aprendizado: "A IA deixou a prática mais lenta e melhorou a recuperação depois do erro. O ganho vem da combinação: o domínio dá a estrutura, e a IA explica no momento do erro.",
                  limitacoes: "Efeito de curto prazo, que em parte não se sustenta, e nada sobre transferência para conteúdo não praticado.",
                  replicavel: "Pôr a IA onde o aluno erra, exigir domínio antes de avançar e medir de novo uma semana depois.",
                  naoReplicavel: "A plataforma de domínio pronta e calibrada por item. Sem banco de itens com dificuldade conhecida, o domínio obrigatório não funciona.",
                  application: "Para produto, o recado é onde pôr a IA no fluxo: como explicadora do erro dentro de uma trilha que não deixa pular etapa, e menos como conversa aberta."
                },
                {
                  empresa: "StudentBench: como medir custo por ponto aprendido",
                  pais: "Estados Unidos · Método de avaliação",
                  categoria: "Método",
                  problema: "Comparar tutores de IA entre si e com tutoria humana por uma métrica que junte efeito e custo, em vez de benchmark técnico de modelo.",
                  implementacao: "Os participantes foram distribuídos entre tutores de IA com modelos diferentes e tutoria humana, estudando para o GRE com pré e pós-teste. O custo foi calculado por ponto percentual de ganho, com o preço real de cada modelo e US$ 75 por hora para o tutor humano.",
                  escala: "2.383 participantes. IA estatisticamente equivalente ao humano (p = 0,044), a US$ 0,0052 por ponto contra US$ 4,81, ou 918 vezes menos. O mais barato foi o Gemma 4 31B, modelo aberto.",
                  financiamento: "Handshake AI Research. Pré-print no arXiv, setembro de 2026.",
                  aprendizado: "Custo por ponto aprendido é calculável e muda a comparação entre fornecedores. Entre os modelos testados, o mais caro não foi o que mais ensinou.",
                  limitacoes: "Adultos, exame padronizado, intervenção curta e sem revisão por pares. Serve como método, e não como estimativa de efeito para a educação básica.",
                  replicavel: "A métrica e o desenho: vários modelos atrás do mesmo desenho pedagógico, pré e pós-teste, custo real por ponto.",
                  naoReplicavel: "O volume de adultos recrutáveis online. Na educação básica, a amostra depende de rede parceira e de consentimento.",
                  application: "Usar o mesmo método para escolher o modelo do próprio produto: trocar o modelo, manter o desenho e medir o custo por ponto antes de renovar contrato."
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
              O que já existe, em que estágio está e quanto custa adotar, com limites, dependências e o que muda para Produto e Engenharia. Nesta edição, entram os que os estudos associaram a ganho de aprendizagem.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  nome: "Modelo aberto de porte médio",
                  tipo: "Modelo base",
                  oque: "Modelo de pesos abertos, na faixa de 30 bilhões de parâmetros, que roda em infraestrutura própria ou em nuvem a um custo por token muito menor que o dos modelos fechados de ponta. No StudentBench, o Gemma 4 31B teve o menor custo por ponto aprendido.",
                  acelera: "Reduz o peso do modelo no custo do produto e dá controle sobre os dados dos alunos, a versão usada e o comportamento do modelo.",
                  limitacoes: "O estudo foi com adultos, em inglês, num exame padronizado. O desempenho em português e com conteúdo da educação básica precisa ser testado antes de qualquer troca.",
                  dependencias: "Infraestrutura de inferência, avaliação em português com o conteúdo adotado e um desenho pedagógico que não dependa de capacidade exclusiva de modelo de ponta.",
                  cenario: "Tutoria em prática estruturada, explicação do erro e variação de exercício, onde o desenho limita o que o modelo precisa fazer.",
                  impactoProduto: "Permite disputar custo por aluno em rede pública sem perder margem, e desloca o argumento de venda do modelo usado para o resultado medido.",
                  impactoEngenharia: "Manter o produto independente de modelo, com uma camada de abstração e uma bateria de avaliação que permita trocar o modelo em dias.",
                  maturidade: "Disponível",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://arxiv.org/abs/2609.28470",
                  linkLabel: "O estudo de custo"
                },
                {
                  nome: "Domínio obrigatório antes de avançar",
                  tipo: "Padrão de fluxo",
                  oque: "O aluno só segue para o conteúdo seguinte depois de demonstrar domínio do atual, com itens de dificuldade conhecida e critério de acerto definido. Foi nessa estrutura que a IA mostrou ganho em Hamilton County.",
                  acelera: "Dá à IA um lugar certo no fluxo, o momento do erro, e impede o atalho: não há como pular a etapa pedindo a resposta.",
                  limitacoes: "Deixa a prática mais lenta, o que pode parecer pior experiência. E o ganho medido foi de curto prazo, no conteúdo praticado.",
                  dependencias: "Banco de itens calibrado e alinhado à habilidade, critério de domínio por habilidade e mapa de pré-requisitos.",
                  cenario: "Matemática e conteúdos com progressão clara de pré-requisitos. Menos útil em produção textual e projetos abertos.",
                  impactoProduto: "É o recurso mais próximo do que a evidência premia, e nenhum concorrente acompanhado o declara publicamente.",
                  impactoEngenharia: "O trabalho está no conteúdo: calibrar itens e mapear pré-requisitos. O motor de regra é simples; o dado que o alimenta, não.",
                  maturidade: "Disponível",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://hechingerreport.org/proof-points-ai-mastery-learning/",
                  linkLabel: "O estudo de domínio"
                },
                {
                  nome: "Explicação guiada depois do erro",
                  tipo: "Padrão de interação",
                  oque: "Quando o aluno erra, a IA pergunta o raciocínio, aponta onde ele se desviou e pede nova tentativa, sem mostrar a resposta certa. Foi nesse ponto do fluxo que o estudo de Hamilton County mediu melhora.",
                  acelera: "Concentra o custo de inferência onde ele gera aprendizagem e evita a conversa aberta, onde o aluno foge do assunto ou pede a resposta.",
                  limitacoes: "O aluno ainda pode desistir ou chutar. Sem limite de tentativas e sem registro, a explicação vira mais um caminho até a resposta.",
                  dependencias: "Classificação do tipo de erro por item, instruções que proíbam entregar a resposta e registro de cada tentativa.",
                  cenario: "Exercícios com resposta verificável e erros típicos conhecidos. Complementa o domínio obrigatório.",
                  impactoProduto: "Transforma o tira-dúvidas, hoje o recurso mais exposto à crítica de que a IA faz o trabalho pelo aluno, no tipo de ajuda que os estudos associam a ganho.",
                  impactoEngenharia: "Testar o modelo com casos de aluno que insiste em pedir a resposta. É o teste que mostra se o desenho se sustenta.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://edworkingpapers.com/sites/default/files/ai26-1552.pdf",
                  linkLabel: "O working paper"
                },
                {
                  nome: "Métrica de uso produtivo",
                  tipo: "Instrumentação",
                  oque: "Classificação automática de cada interação do aluno com a IA: trabalho na tarefa, pedido de resposta pronta ou fuga do assunto. O ensaio do Khanmigo usou esse tipo de leitura para mostrar como o tutor era usado de fato.",
                  acelera: "Mostra ao professor e à rede o que o dado de uso esconde: se o aluno usou a IA para pensar.",
                  limitacoes: "A classificação é probabilística e erra. Serve para ver padrão de turma e de período, nunca para julgar ou punir um aluno.",
                  dependencias: "Registro das conversas com política de retenção, classificador avaliado com amostra rotulada por educadores e painel por turma.",
                  cenario: "Qualquer recurso de conversa com o aluno, e sobretudo onde a rede precisa justificar o uso diante do conselho e das famílias.",
                  impactoProduto: "Responde diretamente à ilusão de aprendizagem com um número que mostra se o uso é produtivo. Nenhum player brasileiro divulga algo assim.",
                  impactoEngenharia: "Tratar o classificador como produto, com conjunto de avaliação próprio e revisão periódica.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/",
                  linkLabel: "O que o ensaio mostrou"
                },
                {
                  nome: "Linha de base de aprendizagem com grupo de comparação",
                  tipo: "Método de avaliação",
                  oque: "Estudo com uma rede parceira: turmas ou escolas com e sem o recurso de IA, mesmo material, pré e pós-teste, por pelo menos um período letivo, com o registro de uso analisado junto.",
                  acelera: "Dá ao produto um resultado próprio para apresentar quando a pergunta sobre eficácia chegar, e antecipa a avaliação de impacto que a norma vai exigir nos usos de alto risco.",
                  limitacoes: "Leva pelo menos um semestre, exige consentimento e pode dar resultado pequeno ou nulo. Um resultado modesto e honesto vale mais que nenhum.",
                  dependencias: "Rede parceira, desenho aprovado antes do início, avaliação alinhada à BNCC e parceiro acadêmico que dê credibilidade.",
                  cenario: "O recurso de IA que a empresa mais quer vender. Melhor começar por um só, bem medido.",
                  impactoProduto: "Permite falar de resultado de aprendizagem, e não só de uso, num mercado em que nenhum concorrente acompanhado tem número publicado.",
                  impactoEngenharia: "Garantir que o produto ligue e desligue o recurso por turma e registre a exposição por aluno. Sem isso, não há comparação.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://edworkingpapers.com/ai26-1551",
                  linkLabel: "Um desenho de referência"
                },
                {
                  nome: "Custo por ponto aprendido",
                  tipo: "Métrica de negócio",
                  oque: "Custo total do recurso (modelo, infraestrutura, suporte) dividido pelo ganho de aprendizagem medido. O StudentBench usou essa métrica para comparar modelos e tutoria humana.",
                  acelera: "Junta numa só conta a decisão técnica (qual modelo, quanto contexto) e a comercial (quanto cobrar, quanto entregar).",
                  limitacoes: "Depende do ganho medido, ou seja, da linha de base. Sem ela, a métrica é só o custo.",
                  dependencias: "Linha de base de aprendizagem, custo de inferência por aluno e por período e um critério comum de ganho.",
                  cenario: "Propostas para rede pública, renovação de contrato de modelo e comparação entre versões do produto.",
                  impactoProduto: "A conversa de compra passa do preço da licença para a aprendizagem por real gasto, onde modelo barato e bom desenho se somam.",
                  impactoEngenharia: "Medir já o custo de inferência por aluno e por recurso, a metade da conta que depende só de nós.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://arxiv.org/abs/2609.28470",
                  linkLabel: "A métrica no estudo"
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
                    Pesquisadores, educadores e big techs chegaram ao mesmo ponto por caminhos diferentes: <span className="text-amarelo-400">a IA ensina quando faz o aluno trabalhar, e o ganho vem do desenho</span>. Nenhum estudo mostrou que o simples acesso à IA melhora a aprendizagem.
                  </p>
                </div>
                <img src={liaExperts} alt="" width={394} height={400} className="w-28 sm:w-36 md:w-44 h-auto shrink-0 self-center sm:self-auto sm:-scale-x-100 drop-shadow-[0_12px_24px_rgba(1,34,112,0.45)]" />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    ponto: "O efeito é pequeno e bem medido",
                    detalhe: "Os ensaios de agosto mediram poucos pontos percentis, perto do que boas intervenções sem IA conseguem. Por serem os primeiros resultados com grupo de comparação, viram a referência para avaliar qualquer promessa de fornecedor."
                  },
                  {
                    ponto: "O atalho é o comportamento padrão",
                    detalhe: "Mesmo num tutor feito para não dar a resposta, muitas conversas pediram a resposta ou fugiram do assunto. O desenho precisa impedir o atalho, e não apenas desencorajá-lo."
                  },
                  {
                    ponto: "Quem decide é o professor",
                    detalhe: "A trilha da OpenAI para educadores e o Claude for Teachers põem a IA para revisar e sugerir e o professor para decidir, a mesma linha da norma do CNE."
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
                  autor: "Philip Oreopoulos",
                  cargo: "Economista · Universidade de Toronto",
                  titulo: "O tutor ajuda quem usa, e a maioria usa pouco",
                  data: "Ago/2026",
                  tese: "No ensaio de dois anos com o Khanmigo, feito com Low, o efeito ficou em torno de 1,3 ponto percentil por período, perto do que a plataforma obtém sem IA. Quase todos os alunos experimentaram, mas o uso foi esparso e muitas conversas saíram do assunto ou pediram a resposta. O limite do tutor está no engajamento, mais do que na qualidade da resposta.",
                  importa: "Tira a discussão da capacidade do modelo e a leva para o comportamento do aluno. Um modelo melhor não resolve um problema de uso.",
                  relacao: "Sustenta o Sinal 1 e a métrica de uso produtivo entre os aceleradores.",
                  link: "https://edworkingpapers.com/ai26-1551"
                },
                {
                  autor: "Educadores ouvidos pelo Washington Post",
                  cargo: "Professores e gestores escolares dos EUA",
                  titulo: "É a ilusão de aprendizagem",
                  data: "22 set/2026",
                  tese: "Na reportagem, educadores descrevem alunos que entregam trabalhos melhores e mais rápidos com a IA e, nas avaliações sem ela, mostram que aprenderam menos. O problema apontado é o aluno acreditar que aprendeu porque a tarefa ficou pronta.",
                  importa: "Dá nome ao que os ensaios mediram, e o nome pega. A expressão deve chegar ao debate brasileiro antes dos dados e ser usada contra qualquer IA na escola, sem distinguir o desenho.",
                  relacao: "Explica o Sinal 3 e é a objeção que a métrica de uso produtivo e a linha de base existem para responder.",
                  link: "https://www.washingtonpost.com/education/2026/09/22/its-illusion-learning-how-some-educators-say-ai-is-hurting-students/"
                },
                {
                  autor: "Proof Points · Hechinger Report",
                  cargo: "Coluna de evidência em educação",
                  titulo: "A vantagem da IA com domínio foi real e curta",
                  data: "Ago/2026",
                  tese: "A coluna apresentou o estudo de Hamilton County, com quase 7 mil alunos: IA com domínio obrigatório rendeu cerca de 3 pontos percentuais a mais, concentrados no conteúdo praticado, e boa parte da vantagem sumiu em uma semana. A IA deixou a prática mais lenta e melhorou a recuperação depois do erro.",
                  importa: "Mostra onde pôr a IA no fluxo, no momento do erro e dentro de uma trilha sem atalho, e mostra o limite: ganho que não é praticado de novo não se mantém.",
                  relacao: "Fundamenta os aceleradores de domínio e de explicação do erro, e a oportunidade do tutor de retomada.",
                  link: "https://hechingerreport.org/proof-points-ai-mastery-learning/"
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
              Onde a vantagem acabou e o que ainda é difícil de copiar. Nesta edição, o próprio modelo de IA virou commodity.
            </p>

            <div className="bg-white rounded-2xl border-2 border-rosa-600 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rosa-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">A mudança de lado desta edição</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                    <strong>O modelo de IA</strong> deixou de diferenciar. Um modelo aberto de porte médio empatou com a tutoria humana a um custo por ponto aprendido centenas de vezes menor, e os ensaios mostraram que o resultado depende do desenho pedagógico em volta do modelo. Por isso, dizer que o produto usa o melhor modelo passou a convencer menos do que mostrar que o aluno aprende com ele.
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
                    { item: "O modelo de IA em si", motivo: "O aberto de porte médio empatou com a tutoria humana no StudentBench, a custo muito menor. Escolher modelo virou decisão de custo", novo: true },
                    { item: "Tira-dúvidas e resumo para o aluno", motivo: "Todos oferecem, e é o formato que a objeção associa à ilusão de aprendizagem. Além de não diferenciar, deixa o produto exposto à crítica", novo: true },
                    { item: "Formação docente genérica em IA", motivo: "Trilha certificada e programa de formadores gratuitos de quem tem distribuição global. Não faz sentido concorrer por preço", novo: true },
                    { item: "Métrica de uso da IA", motivo: "Contar alunos e acessos deixou de convencer depois que o ensaio mostrou uso esparso e muita fuga da tarefa" },
                    { item: "Humano no laço como discurso", motivo: "A norma e as big techs já dizem que quem decide é o professor, então repetir isso não diferencia. O que ainda diferencia é o produto registrar em que momento o professor decidiu" },
                    { item: "Chat ancorado no conteúdo próprio", motivo: "Padrão entre os concorrentes diretos. Melhora a precisão da resposta, não o esforço do aluno" },
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
                    { item: "Domínio obrigatório com explicação do erro", motivo: "É o desenho ligado a ganho em Hamilton County, e nenhum concorrente acompanhado o declara. Depende de banco de itens calibrado, que não se monta em um ciclo", novo: true },
                    { item: "Número próprio de aprendizagem", motivo: "Nenhum player brasileiro tem estudo com grupo de comparação publicado. O primeiro a publicar, mesmo com efeito modesto, vira a referência com que os outros serão comparados", novo: true },
                    { item: "Medida de uso produtivo", motivo: "Separar uso para pensar de uso como atalho é o que permite defender o produto diante do conselho e da família", novo: true },
                    { item: "Custo por ponto aprendido", motivo: "Numa rede pública, vender aprendizagem por real gasto muda a comparação de propostas. Quase ninguém tem hoje os dois dados necessários: o custo por aluno e o ganho medido" },
                    { item: "Formação docente no material adotado", motivo: "É a parte da formação que o catálogo global não cobre: o professor praticando a decisão no material que usa e dentro da política da rede" },
                    { item: "Acervo com itens calibrados", motivo: "O modelo virou insumo, e o conteúdo estruturado para domínio continua escasso. É um ativo que o grupo editorial tem e a big tech não" },
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
                    { titulo: "A IA vai transformar a aprendizagem", desc: "Os primeiros ensaios rigorosos mediram poucos pontos percentis, perto do que boas intervenções sem IA conseguem, e parte do ganho some em uma semana. Os dados mostram uma melhora modesta que depende do desenho." },
                    { titulo: "O público rejeita a IA na escola", desc: "A pesquisa mede uma impressão geral, sem separar a IA que responde da que faz trabalhar. Ler o resultado como rejeição a qualquer uso leva a cortar também o que funciona, como fez Los Angeles." },
                    { titulo: "Tutor de IA substitui o professor", desc: "O StudentBench comparou IA e tutoria individual com adultos numa preparação para exame, e não IA e professor em sala. Os outros estudos da quinzena põem o professor ou a estrutura pedagógica como condição do ganho." },
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
                    { titulo: "Modelo aberto barato como padrão do setor", desc: "Estudo sólido, mas com adultos, em inglês e sem revisão por pares. Dá para testar agora; migrar o produto inteiro sem avaliação própria em português é cedo." },
                    { titulo: "A objeção pública chegando ao Brasil", desc: "Os dados são americanos, e a opinião brasileira sobre o tema não foi medida na janela. A discussão deve chegar, sem saber com que força nem quando." },
                    { titulo: "Big tech como formadora oficial do professor", desc: "Trilha com selo e programa de formadores são um passo claro, ainda sem adesão medida no Brasil nem reconhecimento como formação válida pelas redes." },
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
                    { titulo: "O ganho vem do desenho", desc: "Três estudos independentes chegaram ao mesmo ponto: onde o aluno pode pegar o atalho, pega, e o ganho aparece quando a estrutura obriga a trabalhar. Já justifica mudar o roadmap." },
                    { titulo: "Evidência de aprendizagem como condição de venda", desc: "O tema aparece há cinco edições, cada vez mais forte, e agora há números de referência publicados e uma objeção pública que vai pedir resultado." },
                    { titulo: "O professor decide", desc: "Norma brasileira, big techs e estudos apontam na mesma direção. Virou a arquitetura esperada de qualquer produto." },
                    { titulo: "O modelo como insumo", desc: "O modelo aberto teve custo por ponto aprendido centenas de vezes menor que a tutoria humana, e a mediação do uso já era oferecida por todos desde a edição #10. Nenhuma das duas sustenta mais um preço acima do mercado." },
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
                A quinzena juntou duas notícias que parecem opostas. O público americano virou contra a IA na escola, e os primeiros estudos rigorosos mostraram que ela ensina. As duas valem para IAs diferentes: a que entrega a resposta produz a ilusão de aprendizagem, e a que obriga o aluno a trabalhar produz um ganho pequeno e mensurável. Ao mesmo tempo, o modelo ficou barato demais para diferenciar. Sobram para competir o desenho pedagógico, a prova de que ele funciona e o professor no lugar de quem decide. O mercado brasileiro ainda não tem nenhum número próprio, e quando a objeção chegar aqui, quem tiver um estará em vantagem.
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
                  rastreio: "Sinais 1 e 3 · ausência registrada",
                  sinal: "No ensaio do Khanmigo, o uso foi esparso e muitas conversas fugiram da tarefa; nos EUA, educadores passaram a falar em ilusão de aprendizagem",
                  problema: "Hoje medimos quantos alunos usam a IA e quantas vezes, mas não sabemos se usam para pensar ou para pegar a resposta pronta. É a pergunta que conselhos e famílias vão fazer quando a objeção chegar aqui, e o dado de uso não responde a ela.",
                  oportunidade: "Painel de uso produtivo para o professor",
                  impacto: "Classificar cada interação do aluno com a IA (trabalho na tarefa, pedido de resposta, fuga do assunto) e mostrar o resultado por turma e por período. O dado de uso vira um dado sobre a qualidade do uso, que é o que conselho, família e comprador vão pedir. Nenhum player brasileiro divulga algo assim.",
                  professor: "Vê quem está usando a IA para pensar e quem está só pedindo a resposta, e pode intervir a tempo.",
                  aluno: "Recebe acompanhamento sobre como usa a ferramenta, e não só sobre o que acerta.",
                  gestor: "Tem um número para defender o uso da IA diante do conselho e das famílias.",
                  roadmapItem: "Registrar as conversas com política de retenção desde já e montar um conjunto de exemplos rotulado por educadores antes de treinar o classificador.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Dados"
                },
                {
                  rastreio: "Sinais 1 e 2",
                  sinal: "A IA combinada com domínio obrigatório deu cerca de 3 pontos a mais, sobretudo na recuperação depois do erro, e um modelo aberto barato ensinou tanto quanto o tutor humano",
                  problema: "Nosso apoio ao aluno funciona como conversa aberta: ele pode pedir a resposta e seguir adiante. É o formato que os estudos associam ao atalho e que mais se expõe à objeção pública.",
                  oportunidade: "Tutor que entra no erro, dentro de uma trilha com domínio obrigatório",
                  impacto: "A IA aparece quando o aluno erra, pergunta como ele pensou e pede uma nova tentativa, dentro de uma trilha em que só se avança depois de dominar a habilidade. Foi nesse ponto do fluxo que o estudo de Hamilton County mostrou ganho, e com um modelo aberto o custo por aluno cabe no orçamento de uma rede pública.",
                  professor: "Recebe um relatório dos erros que cada aluno cometeu e corrigiu, e não só a nota final.",
                  aluno: "Não consegue pular a etapa pedindo a resposta e recebe explicação no momento em que mais precisa dela.",
                  gestor: "Compra um desenho com evidência externa por trás, em vez de uma promessa genérica de personalização.",
                  roadmapItem: "Começar pelo banco de itens: calibrar a dificuldade e mapear os pré-requisitos por habilidade da BNCC em uma disciplina e uma série.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Conteúdo"
                },
                {
                  rastreio: "Sinal 3 · ausência recorrente",
                  sinal: "Nenhuma rede, sistema de ensino ou plataforma brasileira publicou estudo com grupo de comparação, enquanto os EUA publicaram dois ensaios com milhares de alunos em um mês",
                  problema: "É a terceira edição seguida com essa ausência. Na edição passada, esta prioridade era Baixa; subiu porque a objeção pública virou maioria nos EUA e agora existem números de referência com os quais qualquer resultado nosso será comparado.",
                  oportunidade: "Linha de base de aprendizagem com uma rede parceira",
                  impacto: "Um recurso de IA, uma rede, duas condições (com e sem o recurso) e pelo menos um período letivo, com o registro de uso analisado junto das notas e um parceiro acadêmico para dar credibilidade. Mesmo um resultado modesto seria o primeiro número de aprendizagem publicado no mercado brasileiro.",
                  professor: "Participa de uma pesquisa que dá legitimidade à própria prática, em vez de ser alvo de medição externa.",
                  aluno: "Passa a usar recursos ajustados com dados da própria rede.",
                  gestor: "Tem resultado para apresentar quando alguém perguntar se funciona, e o relatório de impacto que a norma vai exigir nos usos de alto risco.",
                  roadmapItem: "Fechar a rede parceira e o desenho do estudo neste semestre, e garantir que o produto consiga ligar e desligar o recurso por turma e registrar a exposição de cada aluno.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Evidência / Pesquisa"
                },
                {
                  rastreio: "Sinal 5",
                  sinal: "Uma rede estadual usa IA para corrigir redação com retorno imediato ao aluno, enquanto o parecer que proíbe IA de dar nota a redação espera homologação",
                  problema: "Nossos recursos de apoio à escrita não separam com clareza o que é devolutiva para o aluno melhorar o texto e o que é nota. Quando a norma entrar em vigor, essa fronteira vai ser cobrada funcionalidade por funcionalidade.",
                  oportunidade: "Devolutiva formativa separada da atribuição de nota",
                  impacto: "A IA devolve comentários sobre o texto na hora, o tipo de ajuda que a evidência associa à retomada do erro, e a nota fica sempre com o professor, com registro de quem validou. Isso mantém o valor da correção dentro da regra e dá ao produto uma posição clara enquanto a imprensa ainda diverge sobre o que vale.",
                  professor: "Continua responsável pela nota e ganha tempo com uma devolutiva preliminar.",
                  aluno: "Recebe retorno imediato para reescrever antes de ser avaliado.",
                  gestor: "Sabe exatamente de que lado da norma está cada funcionalidade que contrata.",
                  roadmapItem: "Separar devolutiva e nota no modelo de dados e exigir validação humana registrada para qualquer nota em texto autoral.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Produto / Avaliação"
                },
                {
                  rastreio: "Sinal 2",
                  sinal: "Um modelo aberto de porte médio teve o menor custo por ponto aprendido, 918 vezes abaixo da tutoria humana, num estudo com 2.383 participantes",
                  problema: "O produto depende de um único fornecedor de modelo, e trocar exigiria reescrever instruções e fluxos. Também não temos uma avaliação própria que diga se um modelo mais barato entregaria o mesmo resultado em português.",
                  oportunidade: "Produto independente de modelo, com teste de um modelo aberto",
                  impacto: "Uma camada que isole o produto do modelo e uma bateria de avaliação em português, com o nosso conteúdo, para trocar de modelo em dias. Reduz custo, dá controle sobre os dados dos alunos e tira o produto da dependência da política de preço de um fornecedor.",
                  professor: "Efeito indireto: nenhuma mudança visível, se a troca for bem avaliada.",
                  aluno: "Efeito indireto: os dados pessoais podem ficar numa infraestrutura sob controle da empresa.",
                  gestor: "Pode receber uma proposta com custo por aluno menor, sem perda de qualidade medida.",
                  roadmapItem: "Montar a bateria de avaliação em português antes de qualquer migração; sem ela, a troca é uma aposta.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Engenharia"
                },
                {
                  rastreio: "Sinal 2 · ausência registrada",
                  sinal: "O StudentBench mostrou que o custo por ponto aprendido pode ser calculado e varia centenas de vezes entre alternativas, e nenhum fornecedor brasileiro vende por resultado",
                  problema: "Nossas propostas comparam preço de licença por aluno. Não temos nenhuma das duas partes da conta: quanto custa a IA por aluno e quanto ele aprende a mais com ela.",
                  oportunidade: "Custo por ponto aprendido como métrica de produto e de venda",
                  impacto: "Começar pela parte que depende só de nós, o custo por aluno e por recurso, e juntar o ganho de aprendizagem quando a linha de base existir. A conversa com a rede pública passa do preço da licença para quanto se aprende por real gasto.",
                  professor: "Efeito indireto: os recursos que mais ensinam por real gasto passam a ter prioridade.",
                  aluno: "Efeito indireto: o investimento vai para o que funciona.",
                  gestor: "Compara propostas pelo que importa, com um número que consegue defender no orçamento.",
                  roadmapItem: "Instrumentar desde já o custo de inferência por aluno e por recurso; a métrica completa depende da linha de base.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "Negócio / Dados"
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
                <p className="text-white/60 text-xs tabular-nums">Setembro de 2026 · Edição #12 · 11–30 set</p>
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
