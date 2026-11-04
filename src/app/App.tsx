import { useState, useEffect, useRef, useLayoutEffect, Children, isValidElement, type ReactNode } from 'react';
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
  ChevronLeft,
  ChevronRight,
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
import castitoExperts from '../imports/castito-experts.webp';

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

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b' | 'edicao-julho-2026' | 'edicao-agosto-2026' | 'edicao-agosto-2026-b' | 'edicao-setembro-2026' | 'edicao-setembro-2026-b' | 'edicao-outubro-2026';

// Cartões do arquivo, da edição mais recente para a mais antiga.
// Paginação do arquivo: seis edições por página, da mais recente à mais antiga.
const POR_PAGINA_ARQUIVO = 6;

// Números a mostrar na paginação. Com até 7 páginas, todos; acima disso, a
// primeira, a última e as vizinhas da atual, com reticências nos saltos.
function paginasVisiveis(atual: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const meio = [atual - 1, atual, atual + 1].filter(p => p > 1 && p < total);
  const lista: (number | '…')[] = [1];
  if (meio[0] > 2) lista.push('…');
  lista.push(...meio);
  if (meio[meio.length - 1] < total - 1) lista.push('…');
  lista.push(total);
  return lista;
}

const ARQUIVO: { rotulo: string; titulo: string; resumo: string; view: View }[] = [
  {
    rotulo: "Outubro de 2026 · Edição #13",
    titulo: "A IA na escola está saindo da mão do aluno e indo para a mão do professor",
    resumo: "O MEC deve liberar a correção por IA com a nota do professor, redes e governos restringiram o uso pelo aluno, e um ensaio mediu nota menor quando o tutor foi só oferecido.",
    view: "edicao-outubro-2026",
  },
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


function EdicaoOutubro2026({
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
              <p className="text-sm font-bold text-azul-600 leading-tight">Outubro de 2026 · Ed. #13</p>
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
              Edição #13 · 1 – 15 Out 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rosa-600 to-rosa-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-navy-900 font-bold mb-6 leading-tight">
              A IA na escola está saindo da mão do aluno<br />
              <span className="text-azul-600">e indo para a mão do professor</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O MEC sinalizou que vai liberar a IA para corrigir redação desde que a nota fique com o professor, um distrito americano proibiu a IA para todos os alunos, Austrália e Portugal propuseram afastá-la das crianças pequenas, e um ensaio universitário mediu notas mais baixas nas turmas que ganharam um tutor de IA. O recurso que trabalha com o professor ganhou espaço; o que depende do aluno sozinho ficou exposto.
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
                { titulo: "A regra brasileira deve liberar a IA na correção, com a nota sempre do professor", desc: "Decisão: desenhar a correção assistida para o professor revisar e assinar a nota, com registro.", cor: "border-azul-600" },
                { titulo: "A restrição ao uso de IA pelo aluno chegou a todas as séries numa rede americana e às crianças pequenas em dois países", desc: "Decisão: garantir que a escola consiga desligar cada recurso voltado ao aluno, por série e por turma.", cor: "border-rosa-600" },
                { titulo: "Oferecer um tutor de IA à turma, sem desenho, pode baixar a nota", desc: "Decisão: não ampliar recurso de conversa para o aluno sem trilha, medida de uso e plano de avaliação.", cor: "border-azul-600" },
                { titulo: "Google e OpenAI vão direto ao aluno, e a segurança virou a objeção", desc: "Decisão: usar controle da escola, segurança verificável e registro como argumento contra a ferramenta gratuita.", cor: "border-rosa-600" },
                { titulo: "Caiu a leitura de que a correção de redação por IA seria proibida", desc: "Decisão: rever o que foi despriorizado pela vedação, mantendo a separação entre devolutiva e nota.", cor: "border-azul-600" },
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
              Quatro <span className="text-azul-600">sinais</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "O MEC deve homologar a regra de IA liberando a correção de redação, com a nota nas mãos do professor", desc: "Reportagens de 13 de outubro disseram que o MEC vai homologar o parecer do CNE com mudanças: a IA pode corrigir redação como primeiro filtro, a nota fica com o professor e a IA fica proibida na educação infantil. Paraná, São Paulo e Espírito Santo já usam IA na correção de redação.", impacto: "A regra passa a separar quem faz o quê no mesmo fluxo: a IA lê primeiro, e o professor decide.", cor: "from-azul-700 to-azul-800" },
                { num: "02", titulo: "Um distrito americano proibiu a IA para todos os alunos, e Austrália e Portugal querem afastá-la das crianças pequenas", desc: "Frederick County, em Maryland, restringiu o uso de IA pelos alunos do pré ao 12º ano semanas depois de liberar o Gemini. A AERO, na Austrália, recomendou evitar a IA nos três primeiros anos do fundamental, e Portugal pôs em consulta orientações que deixam a IA do pré-escolar só com o educador.", impacto: "O professor continua com a ferramenta; quem perde o acesso direto é o aluno, sobretudo o mais novo.", cor: "from-rosa-600 to-rosa-700" },
                { num: "03", titulo: "Dar acesso a um tutor de IA baixou a nota dos alunos num ensaio com 2.379 universitários", desc: "Num ensaio na Universidade de Maryland, as turmas que receberam um assistente de estudo com GPT-4o tiveram nota final 0,37 desvio-padrão menor e usaram menos o material do curso, mesmo com só cerca de 15% dos alunos usando o assistente.", impacto: "Pôr a IA ao alcance do aluno não é neutro: sem desenho, pode atrapalhar.", cor: "from-azul-600 to-azul-700" },
                { num: "04", titulo: "Google e OpenAI levaram a IA de estudo a alunos mais novos, e a segurança virou a objeção", desc: "O Google abriu o hub de estudo do Gemini a alunos de todas as idades nas contas escolares, e a OpenAI anunciou ferramentas de estudo no ChatGPT para adolescentes. No mesmo dia, a Common Sense Media classificou o ChatGPT for Teens como risco inaceitável.", impacto: "Avaliação independente de segurança vira critério de compra para qualquer recurso voltado ao aluno.", cor: "from-azul-600 to-lilas-600" },
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
                    O comprador vai separar o que a IA faz com o professor do que ela faz com o aluno sozinho. A correção com a nota assinada pelo professor ficou do lado da regra; o recurso voltado ao aluno vai precisar mostrar desenho, controle da escola e evidência.
                  </p>
                  <p className="text-white/70 text-sm">
                    Quem não der à escola o interruptor de cada recurso vai ver a rede desligar tudo.
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
                { titulo: "Correção de redação em dois turnos, com assinatura do professor", desc: "Separar no modelo de dados a sugestão da IA e a nota do professor e versionar as duas.", destaque: true },
                { titulo: "Controle da escola por série, turma e recurso", desc: "Começar pelo catálogo de recursos que falam com o aluno e pelas flags com escopo de rede, escola e turma.", destaque: true },
                { titulo: "Lançamento por turma, com grupo de comparação", desc: "Liberar o próximo recurso para o aluno em metade das turmas de uma rede parceira e comparar.", destaque: true },
                { titulo: "Bateria de segurança documentada para recursos voltados ao aluno", desc: "Montar a bateria com a área pedagógica e jurídica e ligá-la ao processo de lançamento.", destaque: false },
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
            <p className="text-white/40 text-xs">Hub de IA, Produto e Experiência · Outubro de 2026 · Edição #13</p>
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

// ── Grade bento ──
// Para seções de vários cards cujo conteúdo varia muito de um para outro.
// 'denso' (cards longos): duas colunas; o card que sobra sozinho na última
//   linha ocupa a linha inteira e, por container query (@container), reorganiza
//   o próprio conteúdo na horizontal.
// 'leve' (cards curtos): linhas de até três no desktop, distribuídas por igual
//   (5 = 3 + 2, 4 = 2 + 2, 7 = 3 + 2 + 2); numa linha de dois, o card com
//   bem mais texto fica mais largo (4/6 contra 2/6).
// A ordem editorial dos cards nunca muda.
const SPAN_LG_BENTO: Record<number, string> = { 2: 'lg:col-span-2', 3: 'lg:col-span-3', 4: 'lg:col-span-4', 6: 'lg:col-span-6' };

function linhasBento(n: number) {
  const linhas = Math.ceil(n / 3);
  const base = Math.floor(n / linhas);
  const extra = n % linhas;
  return Array.from({ length: linhas }, (_, i) => base + (i < extra ? 1 : 0));
}

function spansBento(tipo: 'denso' | 'leve', n: number, pesos: number[], desde: 'md' | 'lg') {
  const sozinho = n % 2 === 1;
  const larguraTotal = desde === 'md' ? 'md:col-span-2' : 'lg:col-span-2';
  if (tipo === 'denso') return Array.from({ length: n }, (_, i) => (sozinho && i === n - 1 ? larguraTotal : ''));
  const spans: string[] = [];
  let k = 0;
  for (const tamanho of linhasBento(n)) {
    if (tamanho === 2) {
      const a = pesos[k] || 1, b = pesos[k + 1] || 1;
      const [sa, sb] = a / b >= 1.4 ? [4, 2] : b / a >= 1.4 ? [2, 4] : [3, 3];
      spans.push(SPAN_LG_BENTO[sa], SPAN_LG_BENTO[sb]);
    } else {
      for (let j = 0; j < tamanho; j++) spans.push(SPAN_LG_BENTO[6 / tamanho]);
    }
    k += tamanho;
  }
  // No tablet (duas colunas), o card que sobra ocupa a linha inteira.
  return spans.map((s, i) => (sozinho && i === n - 1 ? `md:col-span-2 ${s}` : s));
}

function BentoGrid({ tipo, desde = 'md', className = '', children }: { tipo: 'denso' | 'leve'; desde?: 'md' | 'lg'; className?: string; children: ReactNode }) {
  const itens = Children.toArray(children);
  const ref = useRef<HTMLDivElement>(null);
  const [pesos, setPesos] = useState<number[]>([]);

  // O peso de cada card é o tamanho do texto dele, medido antes da pintura.
  useLayoutEffect(() => {
    if (tipo !== 'leve' || !ref.current) return;
    const filhos = ref.current.children;
    const novos: number[] = [];
    for (let i = 0; i < filhos.length; i++) novos.push((filhos[i].textContent ?? '').length);
    setPesos(p => (p.length === novos.length && p.every((v, i) => v === novos[i]) ? p : novos));
  });

  const spans = spansBento(tipo, itens.length, pesos, desde);
  const colunas = tipo === 'leve' ? 'md:grid-cols-2 lg:grid-cols-6' : desde === 'md' ? 'md:grid-cols-2' : 'lg:grid-cols-2';
  return (
    <div ref={ref} className={`grid ${colunas} ${className}`}>
      {itens.map((item, i) => (
        <div key={isValidElement(item) && item.key != null ? item.key : i} className={`@container flex flex-col *:flex-1 ${spans[i]}`}>
          {item}
        </div>
      ))}
    </div>
  );
}

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

      <BentoGrid tipo="denso" className="gap-5 mb-8">
        {filtro.visiveis.map((f, i) => (
          <motion.div
            key={f.player}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col @3xl:grid @3xl:grid-cols-2 @3xl:gap-x-10 @3xl:content-start"
          >
            <div>
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
            </div>
            <div className="flex flex-col">

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
            </div>
          </motion.div>
        ))}
      </BentoGrid>
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
  const [paginaArquivo, setPaginaArquivo] = useState(1);
  const gradeArquivoRef = useRef<HTMLDivElement>(null);
  const totalPaginasArquivo = Math.ceil(ARQUIVO.length / POR_PAGINA_ARQUIVO);
  const inicioArquivo = (paginaArquivo - 1) * POR_PAGINA_ARQUIVO;
  const edicoesDaPagina = ARQUIVO.slice(inicioArquivo, inicioArquivo + POR_PAGINA_ARQUIVO);

  // Troca a página do arquivo e leva o leitor ao início da grade: rola só se
  // o topo da grade estiver fora da tela e move o foco para ela, para quem
  // navega por teclado ou leitor de tela continuar da primeira edição.
  const irParaPaginaArquivo = (pagina: number) => {
    setPaginaArquivo(pagina);
    const grade = gradeArquivoRef.current;
    if (!grade) return;
    if (grade.getBoundingClientRect().top < 96) {
      const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      grade.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'start' });
    }
    grade.focus({ preventScroll: true });
  };
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

  if (currentView === 'edicao-outubro-2026') {
    return (
      <EdicaoOutubro2026
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
                <span className="block text-[11px] font-bold text-azul-600 uppercase tracking-[0.16em]">Edição #14</span>
                <span className="block text-[11px] text-gray-500 mt-1.5 tabular-nums">16 out – 4 nov 2026</span>
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
                A IA não vai mais chegar ligada à escola. <span className="text-amarelo-400">Agora é a escola que decide ligar, e ela vai pedir prova.</span>
              </motion.h1>

              <motion.p
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-base md:text-[17px] text-white/80 leading-[1.7]"
              >
                Em 3 de novembro, o Google anunciou que o Gemini e a Busca vão ficar desligados para alunos até a escola ligar, depois de uma investigação do Wall Street Journal e de um inquérito no Senado americano. Em Maryland, uma lei obrigou cada rede a ter política de IA, e parte delas perdeu o prazo. E um ensaio com tutor de IA revisado por professores empatou com tutores humanos na aula, mas não mudou a nota numa prova padronizada. <strong className="font-semibold text-white">Ligar a IA vai ser decisão da escola, e a escola vai pedir controle e resultado antes de ligar</strong>.
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
                      A IA com um professor por perto ajuda no momento da aula: no ensaio da Eedi com o Google DeepMind, o tutor de IA revisado por professores ajudou tanto quanto tutores humanos a lidar com o erro. E a escola com o interruptor na mão pode liberar o recurso que quer sem liberar o resto.
                    </p>
                  </div>
                  <div className="border-l-2 border-red-400 pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide">O que ela derruba</p>
                    </div>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                      A ideia de que a IA entra na escola pela atualização do fornecedor, ligada por padrão: o próprio Google voltou atrás sob pressão. E a ideia de que ganho na aula é ganho na prova: no mesmo ensaio, nem o tutor de IA nem o humano superaram o conteúdo padrão na prova padronizada.
                    </p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-gray-100">
                  <p className="text-sm md:text-xs text-gray-800 leading-relaxed">
                    <span className="font-bold text-azul-600">A conclusão:</span> quem liga a IA vai ser a escola. O fornecedor que entregar <em>recursos separados, o interruptor por série e turma e uma medida honesta de resultado</em> vai ser ligado primeiro quando a IA passar a vir desligada.
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

            <BentoGrid tipo="leve" className="gap-5">
              {[
                {
                  tag: "Mudança de padrão",
                  tagCor: "bg-azul-100 text-azul-700",
                  conclusao: "O Google vai entregar a IA desligada para alunos nas escolas",
                  raciocinio: "Em 3 de novembro, o Google anunciou que o Gemini, o Gemini Notebook, o Gemini no Classroom e a Busca vão ficar desligados nas contas de alunos da educação básica até o administrador da escola ligar. A mudança veio depois de uma investigação do Wall Street Journal e de um inquérito no Senado americano. Segundo reportagens, o novo padrão começa no início de 2027.",
                  decisao: "Tratar a ativação pela escola como o caminho normal: o recurso voltado ao aluno chega desligado, e a rede liga o que quiser."
                },
                {
                  tag: "Tese revista",
                  tagCor: "bg-ambar-100 text-ambar-700",
                  conclusao: "O tutor de IA revisado por professores empatou com o humano na aula, mas não mudou a prova",
                  raciocinio: "Num ensaio com 1.179 alunos em 10 escolas públicas do Reino Unido, o tutor de IA da Eedi, com um professor revisando cada mensagem, ajudou tanto quanto tutores humanos nas medidas da plataforma. Na prova padronizada aplicada por terceiros, nenhum dos dois teve vantagem clara sobre o conteúdo padrão.",
                  decisao: "Prometer ajuda no momento do erro, e não salto de nota, até ter medida própria em avaliação externa."
                },
                {
                  tag: "Vento contra",
                  tagCor: "bg-red-100 text-red-700",
                  conclusao: "Política de IA virou obrigação das redes, e as redes não estão dando conta do prazo",
                  raciocinio: "Uma lei de Maryland deu às redes até 22 de outubro para aprovar uma política de IA, e ao menos uma delas, Anne Arundel, perdeu o prazo. O rascunho dessa rede exige avaliar o valor educacional de cada ferramenta antes de adotá-la.",
                  decisao: "Levar à rede a documentação que a política dela vai pedir: o que cada recurso faz, para que idade, com que controle e com que evidência."
                },
                {
                  tag: "Lacuna local",
                  tagCor: "bg-gray-200 text-gray-700",
                  conclusao: "A regra brasileira anunciada para outubro não saiu",
                  raciocinio: "Em 13 de outubro, reportagens disseram que o MEC homologaria naquela semana o parecer do CNE com mudanças, liberando a IA como primeiro filtro na correção de redação. Até 4 de novembro, não localizamos a homologação no Diário Oficial.",
                  decisao: "Não travar o roadmap esperando o texto: desenhar para o caso mais exigente, com a nota do professor e o registro, e ajustar quando a regra sair."
                },
                {
                  tag: "Hipótese confirmada",
                  tagCor: "bg-green-100 text-green-700",
                  conclusao: "A edição passada previu que a escola pediria controle antes de liberar a IA, e o Google confirmou",
                  raciocinio: "Na #13, a falta de controle da escola foi um dos motivos relatados para Frederick County proibir a IA para todos os alunos, e a recomendação foi dar à escola o interruptor de cada recurso. Três semanas depois, o Google anunciou que vai entregar a IA desligada para alunos, com a ativação nas mãos da escola.",
                  decisao: "Subir o controle da escola de requisito técnico para argumento de venda."
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
            </BentoGrid>

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
              Três sinais, <span className="text-azul-600">uma direção</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base max-w-3xl text-pretty">
              Big tech, pesquisa e redes públicas mostram a mesma virada: a IA vai deixar de entrar na escola por padrão e passar a depender da decisão da rede, que vai pedir controle e prova antes de ligar. Os fatos centrais são de 16 de outubro a 4 de novembro; o contexto anterior vem datado no cartão.
            </p>

            <BentoGrid tipo="denso" className="gap-6">
              {[
                {
                  titulo: "O Google vai entregar a IA desligada para alunos, e a OpenAI apertou as travas para adolescentes",
                  empresa: "Google · OpenAI",
                  data: "30 out – 3 nov/2026",
                  consolida: "Gemini, Gemini Notebook e Busca desligados por padrão para alunos · Guided Learning no Classroom e piloto na Busca · travas novas no ChatGPT para adolescentes",
                  resumo: "Em 3 de novembro, o Google anunciou que o Gemini, o Gemini Notebook, o Gemini no Classroom e a Busca vão ficar desligados nas contas de alunos da educação básica até o administrador da escola ligar. Segundo a imprensa, é o inverso do padrão que a empresa adotou em agosto para o Gemini no Classroom, e a mudança veio depois de uma investigação do Wall Street Journal e de um inquérito bipartidário no Senado americano. A Busca não se separa das respostas de IA: a escola que recusar toda a IA também tira a Busca dos alunos, o que gerou críticas de políticos como o senador Bernie Sanders e o prefeito de Nova York, Zohran Mamdani. Depois disso, o Google esclareceu que a escola pode ligar cada serviço separadamente, inclusive a Busca sem o Gemini. O Google também levou ao Classroom o Guided Learning, modo que conduz o aluno por etapas em vez de dar a resposta, e anunciou um piloto dele na Busca em escolas americanas. Segundo reportagens, o novo padrão começa no início de 2027; não localizamos informação sobre outros países. Em 30 de outubro, a OpenAI anunciou travas novas no ChatGPT para adolescentes, a chegar nas semanas seguintes: limite a informações sobre armas, estimativa de idade reforçada e aviso aos pais quando a conta de um adolescente for pausada por conversas repetidas sobre violência.",
                  impacto: "Na edição #13, a falta de controle da escola foi um dos motivos relatados para Frederick County desligar tudo. Três semanas depois, o Google, presente em boa parte das escolas americanas, anunciou a mudança do padrão para o lado da escola. A IA vai deixar de entrar pela atualização do fornecedor e passar a entrar pela decisão da rede, que só liga o que consegue justificar. O caso da Busca mostra o risco do outro lado: o recurso que não se separa da IA obriga a escola a escolher entre tudo e nada.",
                  professor: "Passa a depender de a escola ligar a IA e, quando ela ligar, ganha um modo guiado para atribuir à turma.",
                  aluno: "Pode ficar sem o Gemini, e até sem a Busca, na conta da escola, se a rede recusar toda a IA.",
                  gestor: "Vira o responsável explícito por ligar cada recurso de IA e vai precisar de critério para isso.",
                  roadmap: "Separar os recursos de IA para que a escola ligue um sem ser obrigada a ligar os outros.",
                  fonte: "https://www.washingtonpost.com/education/2026/11/03/google-turn-off-search-schools-that-dont-want-students-using-ai/",
                  color: "from-azul-700 to-azul-800"
                },
                {
                  titulo: "Um tutor de IA revisado por professores empatou com o humano na aula, mas não mudou a prova",
                  empresa: "Eedi · Google DeepMind",
                  data: "29 out/2026",
                  consolida: "Ensaio com 1.179 alunos em 10 escolas públicas do Reino Unido · tutor de IA, tutor humano e conteúdo padrão · prova padronizada Star Maths",
                  resumo: "Em 29 de outubro, a Eedi, plataforma britânica de matemática, publicou os resultados do segundo ensaio randomizado do seu tutor de IA, feito com o Google DeepMind em 10 escolas públicas do Reino Unido, com 1.179 alunos, ao longo de um período letivo. Quando o aluno errava uma questão, recebia o conteúdo padrão da plataforma, um tutor humano ou uma de duas versões do tutor de IA, com um professor experiente revisando cada mensagem antes de ela chegar ao aluno. Nas medidas da própria plataforma, o tutor de IA ajudou tanto quanto o humano, e os dois superaram o conteúdo padrão. Na prova padronizada Star Maths, aplicada por terceiros, nenhum dos dois teve vantagem clara sobre o conteúdo padrão. Com o tutor de IA, os alunos resolveram cerca de 14 problemas por sessão, contra cerca de 19 com o conteúdo padrão. Os autores tratam os resultados como provisórios.",
                  impacto: "É um ensaio próximo do desenho que as edições anteriores recomendaram, com a IA no momento do erro e um professor no fluxo, e ainda assim a vantagem não apareceu na prova externa. Somado ao ensaio de Maryland da edição #13, o quadro fica assim: bem desenhada, a IA ajuda no momento da aula; só oferecida, pode atrapalhar; e ainda não mostrou ganho em prova externa ao produto.",
                  professor: "Pode contar com a IA para responder ao erro na hora, sem esperar salto na avaliação externa.",
                  aluno: "Recebe ajuda no momento do erro, mas pode resolver menos exercícios no mesmo tempo.",
                  gestor: "Pode pedir ao fornecedor resultado em prova externa, além das métricas da plataforma.",
                  roadmap: "Medir o efeito de cada recurso numa avaliação externa ao produto, além das métricas internas.",
                  fonte: "https://www.the74million.org/article/five-things-you-should-know-about-new-ai-tutor-study/",
                  color: "from-azul-600 to-azul-700"
                },
                {
                  titulo: "Política de IA virou obrigação das redes de Maryland, e parte delas perdeu o prazo",
                  empresa: "Maryland · redes públicas",
                  data: "19–22 out/2026",
                  consolida: "Lei estadual com prazo de 22 de outubro · redes atrasadas · exigência de avaliar o valor educacional das ferramentas",
                  resumo: "Uma lei de Maryland aprovada em 2026 obriga cada rede a adotar uma política de IA alinhada à orientação do departamento estadual de educação, que fixou o prazo em 22 de outubro. Em 19 de outubro, o Baltimore Sun informou que quatro redes aprovariam a política com atraso: Anne Arundel, Howard, Baltimore County e Baltimore City. O rascunho de Anne Arundel exige que cada ferramenta de IA tenha o valor educacional avaliado antes de ser adotada, e a rede prevê aprovar a política até meados de dezembro. Frederick County, que proibiu o uso de IA pelos alunos em outubro, é do mesmo estado.",
                  impacto: "Ter política de IA virou obrigação das redes, e elas estão escrevendo as regras agora, com pressa. O que essas políticas vão pedir já aparece: a orientação do estado trata privacidade, segurança de dados e supervisão humana como inegociáveis, e o rascunho de Anne Arundel exige avaliar o valor educacional de cada ferramenta. O fornecedor que chegar com essa documentação pronta encurta a decisão; o que não chegar entra na fila.",
                  professor: "Vai trabalhar com uma lista de ferramentas aprovadas pela rede, e não com o que encontrar por conta própria.",
                  aluno: "Passa a usar só o que a rede aprovou.",
                  gestor: "Precisa de critério para aprovar ferramentas e de documentação dos fornecedores para aplicá-lo.",
                  roadmap: "Uma ficha por recurso de IA: o que faz, para que idade, que dados usa, que controle a escola tem e que evidência existe.",
                  fonte: "https://www.baltimoresun.com/2026/10/19/ai-policy-maryland-school-districts-deadline/",
                  color: "from-rosa-600 to-rosa-700"
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
                  <div className="p-6 @3xl:grid @3xl:grid-cols-2 @3xl:gap-x-10">
                    <div>
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
                    </div>
                    <div>
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
                  </div>
                </motion.div>
              ))}
            </BentoGrid>
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
                  cat: "A homologação anunciada para outubro não saiu",
                  nota: "Em 13 de outubro, reportagens disseram que o ministro Leonardo Barchini homologaria o parecer do CNE naquela semana, com mudanças. Até 4 de novembro, não localizamos a homologação no Diário Oficial nem o texto das mudanças.",
                  leitura: "Três semanas depois do anúncio, redes e fornecedores seguem sem saber o que conta como primeiro filtro na correção e que registro guardar. Quem tiver uma leitura clara do texto quando ele sair vai orientar o mercado.",
                  janela: "Monitorar"
                },
                {
                  cat: "Não localizamos posição do Google sobre o novo padrão fora dos EUA",
                  nota: "A cobertura do anúncio de 3 de novembro trata das escolas americanas e cita início em 2027; não localizamos informação sobre escolas de outros países.",
                  leitura: "Redes públicas brasileiras usam o Google for Education. Se o padrão chegar aqui, cada secretaria vai ter de decidir o que ligar e vai pedir critério a todos os fornecedores, não só ao Google.",
                  janela: "Monitorar"
                },
                {
                  cat: "Não localizamos estudo de impacto de sistema de ensino sobre a própria IA",
                  nota: "Quinta edição seguida sem que localizemos estudo com grupo de comparação de sistema de ensino ou grupo editorial. O único ensaio randomizado brasileiro de IA pedagógica que localizamos segue sendo o da Letrus, avaliado pelo J-PAL no Espírito Santo.",
                  leitura: "Depois do ensaio da Eedi, não basta mostrar que a IA não atrapalha: vai ser preciso mostrar ganho fora das métricas do próprio produto.",
                  janela: "Custo de atraso alto"
                },
                {
                  cat: "O Inep continua sem falar da prova de conceito de correção por IA",
                  nota: "Quarta edição sem posição. A redação do ENEM será em 8 de novembro, com dois corretores humanos, e não localizamos resultado ou posição do Inep sobre o teste com empresas anunciado em junho.",
                  leitura: "Se a regra liberar a IA como primeiro filtro na escola, a pergunta seguinte é se o exame nacional vai pelo mesmo caminho. Enquanto o Inep não responder, cada fornecedor interpreta por conta própria.",
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
              Tema que volta a cada ciclo entra no roadmap; tema que apareceu uma vez fica em observação. Nesta edição, a restrição ao uso pelo aluno chegou à quinta edição seguida e passou a vir do próprio fornecedor, e a regulação brasileira, em pauta desde a edição #07, passa a estrutural.
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

            <BentoGrid tipo="denso" className="gap-5">
              {[
                {
                  tema: "Restrição ao uso de IA pelo aluno",
                  tipo: "Estrutural",
                  trilha: "#11 vedação até o 5º ano no Brasil e moratória até o 8º ano em Nova York → #12 Los Angeles bloqueia a IA generativa para todos os alunos → #13 Frederick County proíbe do pré ao 12º ano; Austrália e Portugal propõem afastar a IA das crianças pequenas → #14 o Google anuncia a IA desligada para alunos até a escola ligar",
                  leitura: "Quinta edição seguida, e o tema mudou de natureza: depois das redes e dos governos, o próprio fornecedor anunciou que vai entregar a IA desligada para o aluno. A restrição deixou de ser exceção imposta pela rede e virou padrão do produto, com a escola decidindo o que ligar.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Evidência de aprendizagem como campo de disputa",
                  tipo: "Estrutural",
                  trilha: "#11 avaliação de impacto exigida por norma → #12 ensaios randomizados de tutor de IA em escala, com ganho modesto → #13 ensaio mede nota menor em turmas que só receberam acesso ao tutor → #14 tutor de IA revisado por professores empata com o humano na aula, sem vantagem clara na prova externa",
                  leitura: "Em três edições, a evidência mostrou ganho pequeno com bom desenho, perda quando a IA é só oferecida e, agora, nenhuma vantagem clara em prova externa mesmo com professor no fluxo. O que falta saber é onde o ganho aparece e como medi-lo fora do produto.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "A regulação brasileira travada na última milha",
                  tipo: "Estrutural",
                  trilha: "#11 aprovado em plenário com prazo de doze meses → #12 sem assinatura → #13 súmula no Diário Oficial e homologação anunciada com mudanças → #14 três semanas depois do anúncio, ainda sem homologação",
                  leitura: "Em pauta desde a edição #07, o tema passa a estrutural. O padrão é o mesmo a cada etapa: anúncio, expectativa e atraso. Para planejar, o mais seguro é desenhar para a versão mais exigente da regra e não contar com data.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Big tech direto ao aluno",
                  tipo: "Emergente",
                  trilha: "#07 simulado do ENEM no Gemini → #12 big techs se voltam à formação do professor → #13 Gemini aberto a alunos de todas as idades e ferramentas de estudo no ChatGPT para adolescentes → #14 o Google recua e anuncia a IA desligada para alunos",
                  leitura: "A ida direta ao aluno encontrou o limite em três semanas: a pressão pública e política fez o Google anunciar a mudança do padrão. A big tech continua oferecendo de graça, mas a decisão de ligar passou para a escola.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "O que vira commodity",
                  tipo: "Emergente",
                  trilha: "#12 o modelo em si vira insumo barato → #13 a correção automática de redação vira prática de rede pública → #14 o Google leva ao Classroom um modo guiado que conduz o aluno em vez de dar a resposta",
                  leitura: "O tutor que não entrega a resposta, que nas edições #12 e #13 aparecia como diferencial de desenho, chegou de graça ao Classroom. O que fica difícil de copiar é ligá-lo ao material que a escola adotou e medir o efeito fora do produto.",
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
                  className={`rounded-2xl border-2 ${item.cor} p-6 @3xl:grid @3xl:grid-cols-2 @3xl:gap-x-8 @3xl:content-start`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap @3xl:col-span-2">
                    <h3 className="font-bold text-navy-900 text-lg leading-snug">{item.tema}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${item.badge}`}>
                      {item.tipo}
                    </span>
                  </div>
                  <LinhaDoTempo trilha={item.trilha} rotulo="Evolução do tema por edição" className="bg-white/80 rounded-xl px-4 py-3.5 mb-4" />
                  <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.leitura}</p>
                </motion.div>
              ))}
            </BentoGrid>
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
              Concorrência direta é quem disputa a mesma escola, rede e orçamento. Não localizamos, entre os players acompanhados, lançamento de IA na janela. A análise parte do que cada um já tem diante da virada da edição: a IA vai entrar na escola quando a rede ligar, e a rede vai pedir controle e prova.
            </p>

            <ConcorrenciaDireta
              privado={[
                {
                  player: "Poliedro",
                  grupo: "Cosmos · Polígono · Conviver · Sabiá",
                  movimento: "Sem lançamento na janela. O Cosmos continua restrito ao acervo próprio, para professor e gestor",
                  estrategia: "Com a IA só do lado do professor, não depende de a escola liberar recurso para o aluno. Fica fora da decisão mais difícil que as redes passaram a tomar",
                  exposicao: "Baixa",
                  impacto: "Médio-Alto"
                },
                {
                  player: "Santillana",
                  grupo: "Moderna Core",
                  movimento: "Sem lançamento na janela. IA de acompanhamento de desempenho, sem geração voltada ao aluno",
                  estrategia: "Acompanha o desempenho sem falar com o aluno e tem o dado para medir o efeito do produto, que é o que as redes vão pedir",
                  exposicao: "Baixa",
                  impacto: "Médio-Alto"
                },
                {
                  player: "Bernoulli",
                  grupo: "Co-crIA · TutorIA · PraticAI · Radar Enem",
                  movimento: "Sem lançamento na janela. Co-crIA para o professor e TutorIA e PraticAI para o aluno",
                  estrategia: "Os recursos para o aluno são separados dos do professor, o que facilita a escola ligar um sem o outro. Vai precisar mostrar resultado fora das métricas do próprio produto",
                  exposicao: "Média",
                  impacto: "Alto"
                },
                {
                  player: "Arco Educação",
                  grupo: "SAS, SAE Digital, Geekie",
                  movimento: "Sem lançamento na janela. Plataforma adaptativa e literacia em IA no programa de competências",
                  estrategia: "A plataforma adaptativa fala direto com o aluno, então depende de a rede ligar. Quanto mais fácil for desligar recurso por série, menor o risco de a rede desligar tudo",
                  exposicao: "Média",
                  impacto: "Alto"
                },
                {
                  player: "Somos Educação",
                  grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                  movimento: "Sem lançamento na janela. O Plu oferece ao aluno resumo, exercício e tira-dúvidas ancorados ao capítulo",
                  estrategia: "Segue o mais exposto: a conversa com o aluno é o recurso que a escola agora decide se liga, e é o que as redes estão restringindo",
                  exposicao: "Alta",
                  impacto: "Alto"
                },
              ]}
              publico={[
                {
                  player: "Saber",
                  grupo: "eDocente",
                  movimento: "Sem lançamento na janela. Correção de microtestes por câmera no celular do professor",
                  estrategia: "Trabalha com o professor e não depende de a rede liberar IA para o aluno, por isso não é afetado pelo novo padrão",
                  exposicao: "Baixa",
                  impacto: "Alto"
                },
                {
                  player: "Moderna",
                  grupo: "Moderna Amigos",
                  movimento: "Sem lançamento na janela. Presença em redes municipais e estaduais",
                  estrategia: "Quando as redes tiverem política de IA, a proximidade com as secretarias ajuda a chegar primeiro com a documentação que elas vão pedir",
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
                  historico: "Mai/26 Plurall aposta em dados que viram recomendação para o professor → Jun/26 em três meses, mais de 2 mil escolas criam PEI com o Plurall IA → #11 o Plu leva resumo e tira-dúvidas ao aluno, ancorados ao capítulo → #12 sem lançamento; o formato para o aluno fica exposto à crítica da ilusão de aprendizagem → #13 sem lançamento; conversa com o aluno é o que as redes passam a restringir → #14 sem lançamento; a conversa com o aluno é o recurso que a escola agora decide se liga"
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
                  historico: "#10 Cosmos restrito ao acervo autoral → #11 Cosmos no P+ para professor e gestor; prêmio pela Supernova, com autoria humana no centro → #12 sem lançamento; a IA fica fora do alcance do aluno → #13 sem lançamento; já está no desenho que a regra deve consagrar → #14 sem lançamento"
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
                  historico: "Mai/26 Moderna Core junta conteúdo, IA e acompanhamento → #10 IA nos bastidores do Moderna Core → #11 leitura contínua de desempenho, sem geração para o aluno → #12 sem lançamento → #13 sem lançamento; segue fora das restrições ao uso pelo aluno → #14 sem lançamento"
                },
                {
                  player: "Bernoulli",
                  produto: "Co-crIA, TutorIA, PraticAI e Radar Enem",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Aluno", "Gestor"],
                  entregue: "Para o professor: o Co-crIA, assistente integrado ao material didático e desenvolvido com a Teachy, que gera planos de aula, listas, avaliações, apresentações e materiais adaptados. Para o aluno: o TutorIA e o PraticAI, apresentados no Bernoulli Reload, em agosto; o PraticAI corrige redação e, segundo a página da empresa, estima a nota por competência. Para o gestor: o Radar Enem, que lê os microdados do exame com um chat de IA. Não houve lançamento entre 16 de outubro e 4 de novembro.",
                  leitura: "O corretor de redação é o recurso mais sensível à regra nova: estimar nota para o aluno treinar é devolutiva; virar nota da escola sem o professor, não. A parceria com a Teachy mostra que o entrante já está dentro de um sistema de ensino acompanhado.",
                  fonte: "https://www.bernoulli.com.br/blog/co-cria-como-a-inteligencia-artificial-esta-transformando-o-dia-a-dia-dos-professores/",
                  fonteLabel: "Blog do Bernoulli",
                  historico: "#10 Bernoulli Reload com portfólio segmentado por público → #11 entra no Radar pelo assistente do professor, de planejamento e diagnóstico → #12 sem lançamento → #13 o card passa a incluir o TutorIA e o PraticAI para o aluno e a parceria com a Teachy no Co-crIA → #14 sem lançamento"
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
                  historico: "#11 entra no Radar: leitor oficial com acessibilidade e agente de IA que responde sobre o uso do sistema → #12 sem mudança → #13 sem mudança → #14 sem mudança"
                },
                {
                  player: "Teachy",
                  produto: "Assistente do professor e Teachy Studio",
                  mercado: "Plataforma privada",
                  publicos: ["Professor", "Escola"],
                  entregue: "Para o professor: plano de aula, sequência didática, slides, listas de exercícios, provas e correção de exercícios com IA, alinhados à BNCC. Para a escola: o Teachy Studio, em que a instituição cria livros, apostilas e sequências próprias com IA, impressos e digitais. Desde a Bett Brasil 2026, a escola também pode adotar pelo Studio o material do Descomplica, com as videoaulas, como base curricular. A Teachy também é parceira do Bernoulli no Co-crIA. Não houve lançamento entre 16 de outubro e 4 de novembro.",
                  leitura: "Vem de fora dos sistemas de ensino e entra pelo material didático, onde está a receita das editoras: a empresa promete apostila própria por uma fração do custo de produção editorial, e a parceria com o Descomplica entrega uma base curricular pronta. A IA serve sobretudo a quem produz o material. O que ela ainda não mostra é o que qualquer material precisa mostrar agora: que o aluno aprende com ele.",
                  fonte: "https://educador21.com/ia-na-educacao-teachy-descomplica-escolas/",
                  fonteLabel: "Educador21",
                  historico: "#08 compra a Nero.AI, em acquihiring de sete dígitos → #12 entra no Radar com o assistente do professor, o Teachy Studio e o material do Descomplica → #13 aparece como parceira do Bernoulli no Co-crIA → #14 sem novidade"
                },
                {
                  player: "AI4School",
                  produto: "Plataforma de IA da Conexia Educação (Grupo SEB)",
                  mercado: "Plataforma privada",
                  publicos: ["Aluno", "Professor", "Família"],
                  entregue: "Na versão gratuita, o ChatEdu, assistente para tarefas escolares e preparação para o ENEM e vestibulares, e, para o educador, geração de plano de aula e ferramentas adaptadas a perfis de aprendizagem. Na premium, tutores virtuais por disciplina e trilhas de letramento em IA para alunos, professores e famílias, seguindo a BNCC. Tem controle parental, linguagem ajustada à faixa etária e alerta de conteúdo impróprio. A plataforma ganhou um summit próprio na Bett Brasil 2026 e não teve novidade entre 16 de outubro e 4 de novembro.",
                  leitura: "Põe a IA para conversar direto com o aluno, com apoio à tarefa e tutor por disciplina, e aposta na segurança para ganhar a confiança da família, a mesma objeção que a avaliação da Common Sense Media levantou contra o ChatGPT para adolescentes. Não localizamos informação pública sobre se o ChatEdu e os tutores evitam entregar a resposta, e é isso que define de que lado da evidência o produto fica. Como a Conexia atende escolas parceiras, está mais perto da concorrência direta do que de uma startup de fora.",
                  fonte: "https://www.uai.com.br/app/noticia/mundo-corporativo/2025/10/06/noticia-mundo-corporativo,370556/ai4school-conexia-apresenta-solucao-de-ia-para-educacao.shtml",
                  fonteLabel: "Portal UAI",
                  historico: "#12 entra no Radar com o ChatEdu, tutores por disciplina e controle parental → #13 sem novidade; a segurança, sua aposta, vira a objeção às ferramentas para o aluno → #14 sem novidade"
                },
              ]}
            />

            <div className="bg-white rounded-2xl border-2 border-ambar-100 p-6 md:p-8 mb-12">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-rosa-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">O espaço que continua vago</h4>
                  <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                    Não localizamos, entre os recursos acima, controle divulgado para a escola ligar e desligar cada recurso voltado ao aluno por série e turma, nem uma ficha pública com o que cada recurso faz, para que idade e com que evidência, que é o que as políticas de rede, como as de Maryland, passaram a pedir. Também não localizamos descrição pública de como o professor revisa e assina a nota na correção por IA. As três coisas cabem no que já existe.
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
                  nome: "Google",
                  altera: "Padrão de ativação",
                  nota: "Gemini e Busca desligados por padrão para alunos até a escola ligar. A escola passa a esperar, de qualquer fornecedor, o mesmo: recurso separado, ativação por ela e controle por turma."
                },
                {
                  nome: "OpenAI e avaliadores de segurança",
                  altera: "Critério de compra",
                  nota: "Semanas depois de a Common Sense Media classificar o ChatGPT for Teens como risco inaceitável, a OpenAI anunciou travas novas. Segurança verificável segue como pergunta de família e de rede para todo recurso que fala com o aluno."
                },
                {
                  nome: "Pesquisa independente",
                  altera: "Régua de evidência",
                  nota: "O ensaio da Eedi mostrou ganho nas métricas da plataforma e nenhuma vantagem clara na prova externa. O que conta passa a ser o resultado fora do produto."
                },
                {
                  nome: "Reguladores e redes",
                  altera: "Regras competitivas",
                  nota: "Redes americanas são obrigadas a ter política de IA e estão atrasadas; no Brasil, a regra anunciada para outubro não saiu. Quem chegar com documentação pronta encurta a decisão da rede."
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

            <BentoGrid tipo="denso" desde="lg" className="gap-6">
              {[
                {
                  empresa: "Eedi: o professor revisa cada mensagem da IA antes do aluno ver",
                  pais: "Reino Unido · Rede pública",
                  categoria: "Desenho com humano no fluxo",
                  problema: "Dar a cada aluno ajuda individual no momento do erro, com a segurança de um professor, sem precisar de um professor por aluno.",
                  implementacao: "Na plataforma de matemática da Eedi, quando o aluno erra, o tutor de IA, feito com o Google DeepMind, redige a resposta, e um professor experiente a aprova, edita ou reescreve antes de ela chegar ao aluno. O ensaio comparou essa versão com tutores humanos e com o conteúdo padrão da plataforma. Os números estão no Sinal 2.",
                  escala: "Segundo a cobertura do The 74, os professores aprovaram sem mudança a maior parte das mensagens redigidas pela IA, mais do que no estudo de 2025. As fontes divergem sobre a taxa exata.",
                  financiamento: "Empresa privada em parceria com o Google DeepMind; ensaio pré-registrado.",
                  aprendizado: "Com o professor revisando, a IA chegou ao nível do tutor humano na aula, e a maior parte das mensagens passou sem edição.",
                  limitacoes: "Resultados provisórios, segundo os próprios autores, e sem vantagem clara na prova padronizada. A revisão de cada mensagem custa tempo de professor.",
                  replicavel: "A IA redigindo e o professor aprovando, com a taxa de aprovação medida para saber quando a revisão pode ficar por amostragem.",
                  naoReplicavel: "O time de professores revisores dedicados durante o ensaio. Na escola, o revisor é o próprio professor da turma.",
                  application: "É um desenho para redes que ainda não querem a IA falando sozinha com o aluno: o professor aprova a resposta, e o produto mede quanto ele precisa intervir."
                },
                {
                  empresa: "Serra Leoa: modo guiado do Gemini nas aulas de matemática",
                  pais: "Serra Leoa · Anos finais",
                  categoria: "Evidência de efeito",
                  problema: "Saber se um modo de IA que conduz o aluno por perguntas, em vez de dar a resposta, melhora a matemática numa rede com poucos recursos.",
                  implementacao: "O Google e a Fab AI sortearam 48 turmas de matemática para usar o Guided Learning do Gemini em metade das aulas, por oito semanas, num ensaio pré-registrado. A intervenção incluiu também formação dos professores, trabalho em dupla e aulas estruturadas. Resultados divulgados em 2026.",
                  escala: "Cerca de 1.760 alunos. Ganho de 0,26 desvio-padrão em matemática sobre o grupo de comparação. Segundo os autores, o Gemini fez perguntas de apoio em 76% das mensagens e deu a solução direta em 2%.",
                  financiamento: "Google, com a Fab AI.",
                  aprendizado: "O mesmo modo guiado que o Google acaba de levar ao Classroom teve efeito medido em sala de aula, junto com professor formado e aula estruturada, e com a IA quase nunca entregando a resposta.",
                  limitacoes: "Pesquisa da própria empresa, oito semanas e um contexto de poucos recursos. O desenho não separa o efeito do Gemini do da formação e das aulas estruturadas, e os alunos com mais domínio de matemática ganharam mais.",
                  replicavel: "Sortear turmas, fixar uma meta de uso e medir quanto a IA pergunta e quanto responde.",
                  naoReplicavel: "A comparação com uma rede de poucos recursos, onde quase qualquer apoio adicional pesa mais.",
                  application: "Mostra o que o tutor gratuito das big techs pode entregar. Para competir, o produto próprio precisa somar o que ele não tem: o material adotado e o professor da turma."
                },
                {
                  empresa: "Google: o interruptor da escola, recurso por recurso",
                  pais: "Estados Unidos · Plataforma",
                  categoria: "Governança de produto",
                  problema: "Responder à pressão pública e política sem tirar a IA do produto: deixar que a escola decida o que o aluno acessa.",
                  implementacao: "O Gemini, o Gemini Notebook, o Gemini no Classroom e a Busca vão vir desligados para alunos, e o administrador liga cada um. O Guided Learning entra no Classroom para o professor atribuir. Os detalhes estão no Sinal 1.",
                  escala: "Contas de alunos da educação básica do Google for Education, a partir do início de 2027, segundo reportagens. A escola pode ligar cada serviço separadamente.",
                  financiamento: "Decisão de produto da empresa.",
                  aprendizado: "O padrão desligado responde à crítica de levar a IA ao aluno sem a escola decidir, mas a crítica se concentrou na Busca, que não se separa das respostas de IA.",
                  limitacoes: "Sem informação para outros países. A Busca não se separa das respostas de IA: a escola que recusar toda a IA perde a Busca.",
                  replicavel: "Recurso de IA separado por padrão e ativado pela escola, com o professor atribuindo o modo guiado.",
                  naoReplicavel: "A escala do Google, que permite mudar o padrão de milhões de contas de uma vez.",
                  application: "Cada recurso de IA do produto precisa poder ser ligado sozinho. Recurso que só vem em pacote vira o próximo caso de tudo ou nada."
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

                  <div className="grid md:grid-cols-2 @4xl:grid-cols-4 gap-4 mb-5 items-start">
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

                  <div className="grid md:grid-cols-2 @4xl:grid-cols-3 gap-4 mb-5 items-start">
                    <div className="bg-red-50/60 rounded-xl p-4 border border-red-100 md:col-span-2 @4xl:col-span-1">
                      <p className="text-xs font-semibold text-red-700 mb-1">Limitações do caso</p>
                      <p className="text-sm md:text-xs text-gray-600 leading-relaxed">{b.limitacoes}</p>
                    </div>
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
            </BentoGrid>
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
              O que já existe, em que estágio está e quanto custa adotar, com limites, dependências e o que muda para Produto e Engenharia. Nesta edição, entram os que ajudam a escola a decidir o que ligar.
            </p>

            <BentoGrid tipo="denso" className="gap-6">
              {[
                {
                  nome: "Ativação pela escola, recurso por recurso",
                  tipo: "Governança",
                  oque: "Cada recurso de IA voltado ao aluno vem desligado ou no modo mais restrito, e a escola liga o que quiser, por série e turma, com o estado visível para o professor. É o padrão que o Google acaba de anunciar.",
                  acelera: "Tira da rede o risco de liberar um pacote inteiro e permite começar pelo recurso mais seguro.",
                  limitacoes: "Desligado por padrão reduz o uso no começo. O produto precisa mostrar à escola, na ativação, o que cada recurso faz.",
                  dependencias: "Recursos separados no código, cadastro confiável de série e turma e permissões por rede, escola e turma.",
                  cenario: "Toda rede que estiver escrevendo política de IA, e toda escola com aluno abaixo de 18 anos.",
                  impactoProduto: "Transforma a objeção à IA em configuração. É o requisito técnico da edição #13 virando argumento de venda.",
                  impactoEngenharia: "Flags por recurso com escopo hierárquico; nenhum recurso pode depender de outro estar ligado.",
                  maturidade: "Padrão de mercado",
                  cor: "bg-gray-200 text-gray-700",
                  link: "https://www.washingtonpost.com/education/2026/11/03/google-turn-off-search-schools-that-dont-want-students-using-ai/",
                  linkLabel: "A mudança do Google"
                },
                {
                  nome: "Professor aprovando a resposta da IA",
                  tipo: "Padrão de fluxo",
                  oque: "A IA redige a resposta ao aluno e o professor aprova, edita ou descarta antes do envio. No ensaio da Eedi, a maior parte das mensagens passou sem edição.",
                  acelera: "Permite levar a IA ao aluno em redes que ainda não aceitam a IA falando sozinha.",
                  limitacoes: "Custa tempo do professor e atrasa a resposta. Só se sustenta se a taxa de aprovação sem edição for alta.",
                  dependencias: "Fila de revisão por turma, registro de cada edição e métrica de aprovação por tipo de pergunta.",
                  cenario: "Primeiros meses de um recurso novo para o aluno, e redes mais restritivas.",
                  impactoProduto: "Oferece à rede um degrau entre desligado e ligado: a IA com o professor no meio.",
                  impactoEngenharia: "Guardar a versão da IA e a do professor para medir quando a revisão pode virar amostragem.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://www.the74million.org/article/five-things-you-should-know-about-new-ai-tutor-study/",
                  linkLabel: "O ensaio da Eedi"
                },
                {
                  nome: "Modo guiado atribuído pelo professor",
                  tipo: "Padrão de interação",
                  oque: "Um modo de IA que conduz o aluno por perguntas em vez de dar a resposta, que o professor atribui como atividade e acompanha. O Google levou o Guided Learning ao Classroom com esse desenho.",
                  acelera: "Junta o tutor que não entrega a resposta com o controle do professor sobre quando ele entra.",
                  limitacoes: "Virou oferta gratuita das big techs. Sem ligação com o material adotado, não diferencia.",
                  dependencias: "Instruções que impeçam entregar a resposta, testadas a cada versão do modelo, e integração com as atividades da turma.",
                  cenario: "Exercícios e revisão em que o aluno costuma pedir a resposta pronta.",
                  impactoProduto: "A diferença passa a ser o modo guiado sobre o capítulo que a turma está estudando, com o erro voltando ao professor.",
                  impactoEngenharia: "Medir quanto o modo pergunta e quanto responde, como fez o estudo de Serra Leoa.",
                  maturidade: "Disponível",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://edtechinnovationhub.com/news/google-gemini-guided-learning-raises-math-scores-in-sierra-leone-classroom-trial",
                  linkLabel: "O estudo de Serra Leoa"
                },
                {
                  nome: "Ficha de cada recurso de IA para a política da rede",
                  tipo: "Documentação",
                  oque: "Uma ficha pública por recurso: o que faz, para que idade, que dados usa, que controle a escola tem, que testes de segurança passou e que evidência de efeito existe.",
                  acelera: "Encaixa o produto direto no que as políticas de rede pedem, como a de Anne Arundel, que exige avaliar o valor educacional antes de adotar.",
                  limitacoes: "Ficha sem evidência real vira peça de marketing. Precisa ser revista a cada versão.",
                  dependencias: "Catálogo de recursos, bateria de segurança e resultados de avaliação por recurso.",
                  cenario: "Toda proposta para rede pública e toda renovação com escola privada.",
                  impactoProduto: "Encurta a decisão de compra numa rede que está escrevendo as regras agora.",
                  impactoEngenharia: "Gerar a ficha a partir do catálogo de recursos e das flags, para não ficar desatualizada.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://www.baltimoresun.com/2026/10/19/ai-policy-maryland-school-districts-deadline/",
                  linkLabel: "As redes de Maryland"
                },
                {
                  nome: "Medida em avaliação externa ao produto",
                  tipo: "Método de avaliação",
                  oque: "Comparar turmas com e sem o recurso numa avaliação que o produto não controla, como uma prova da rede ou padronizada, além das métricas da plataforma.",
                  acelera: "Mostra se o ganho medido dentro do produto sai dele, a pergunta que o ensaio da Eedi deixou aberta.",
                  limitacoes: "Leva pelo menos um período letivo e pode não mostrar efeito, como no próprio ensaio da Eedi.",
                  dependencias: "Rede parceira, sorteio por turma, acesso à avaliação externa e parceiro acadêmico.",
                  cenario: "O recurso de IA que a empresa mais quer vender.",
                  impactoProduto: "Separa o produto de quem só mostra métricas internas.",
                  impactoEngenharia: "Ligar e desligar o recurso por turma e registrar a exposição por aluno são pré-requisito.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://www.the74million.org/article/five-things-you-should-know-about-new-ai-tutor-study/",
                  linkLabel: "O que o ensaio mediu"
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
                  <div className="space-y-3 flex-1 @3xl:space-y-0 @3xl:grid @3xl:grid-cols-2 @3xl:gap-3 @3xl:content-start">
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
                    <div className="grid gap-2 @3xl:col-span-2 @3xl:grid-cols-2 @3xl:gap-3">
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
                    className="w-full @3xl:w-auto @3xl:self-start flex items-center justify-center gap-2 px-4 py-2 bg-azul-50 text-azul-600 rounded-lg hover:bg-azul-600 hover:text-white transition-all font-medium text-sm mt-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {a.linkLabel}
                  </a>
                </motion.div>
              ))}
            </BentoGrid>
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
                    Fornecedor, pesquisadores e críticos concordam num ponto: <span className="text-amarelo-400">quem decide se a IA entra é a escola, e ela precisa de recursos separados e de resultado medido fora do produto para decidir</span>.
                  </p>
                </div>
                <img src={castitoExperts} alt="" width={440} height={414} className="w-32 sm:w-40 md:w-52 h-auto shrink-0 self-center sm:self-auto drop-shadow-[0_12px_24px_rgba(1,34,112,0.45)]" />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    ponto: "A escola liga, o fornecedor oferece",
                    detalhe: "O Google vai deixar cada serviço para a escola ligar, um a um, e os críticos atacaram o caso em que a escola não consegue escolher: a Busca sem IA."
                  },
                  {
                    ponto: "Ganho na aula não é ganho na prova",
                    detalhe: "No ensaio da Eedi, o tutor de IA igualou o humano nas medidas da plataforma e nenhum dos dois superou o conteúdo padrão na prova padronizada."
                  },
                  {
                    ponto: "Tudo ou nada não serve",
                    detalhe: "A crítica ao Google se concentrou na Busca, que não se separa das respostas de IA. A escola quer ligar um recurso sem ligar os outros."
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
                  autor: "Pesquisadores da Eedi e do Google DeepMind",
                  cargo: "Ensaio randomizado em escolas públicas do Reino Unido",
                  titulo: "O tutor de IA iguala o humano no momento do erro, e o resto ainda é pergunta",
                  data: "29 out/2026",
                  tese: "Os autores relatam que o tutor de IA, revisado por professores, ajudou tanto quanto tutores humanos nas medidas da plataforma, sem vantagem clara na prova padronizada, e tratam os resultados como provisórios. Também apontam a troca: com o tutor, os alunos resolveram menos problemas por sessão.",
                  importa: "É a leitura mais cuidadosa da quinzena sobre o que um tutor bem desenhado consegue: ajuda na hora do erro, sem prova de ganho fora do produto.",
                  relacao: "Sustenta o Sinal 2, a tese revista do resumo e o acelerador de medida externa.",
                  link: "https://www.the74million.org/article/five-things-you-should-know-about-new-ai-tutor-study/"
                },
                {
                  autor: "Google for Education",
                  cargo: "Anúncio de produto",
                  titulo: "A escola decide o que liga",
                  data: "3 nov/2026",
                  tese: "Em post de Chris Phillips, vice-presidente de Educação, o Google anunciou que os serviços de IA e a Busca vão ficar desligados para alunos até a escola ligar e, depois das críticas, esclareceu que cada serviço pode ser ligado separadamente. Phillips explicou que a Busca não se separa das respostas de IA porque as duas estão profundamente integradas.",
                  importa: "É um dos fornecedores mais presentes nas escolas americanas assumindo que a decisão de ligar a IA é da escola. Isso tende a virar expectativa para os demais fornecedores.",
                  relacao: "Sustenta o Sinal 1 e o acelerador de ativação pela escola.",
                  link: "https://www.cnbc.com/2026/11/03/google-responds-to-outrage-over-removing-search-in-schools-that-ban-ai.html"
                },
                {
                  autor: "Críticos da medida do Google",
                  cargo: "Políticos e educadores americanos",
                  titulo: "Tirar a Busca de quem recusa a IA é forçar a IA",
                  data: "3 nov/2026",
                  tese: "O prefeito de Nova York, Zohran Mamdani, o senador Bernie Sanders e outros críticos acusaram o Google de usar o peso que tem nas escolas para forçar a IA, porque a escola que recusar toda a IA perde também a Busca.",
                  importa: "Mostra que o controle só convence quando é real: a escola precisa poder recusar um recurso sem perder os outros.",
                  relacao: "Explica a parte do Sinal 1 sobre a Busca e o item \"Tudo ou nada\" do consenso.",
                  link: "https://www.forbes.com/sites/maryroeloffs/2026/11/03/google-will-cut-off-search-engine-access-to-schools-banning-generative-ai/"
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
              Onde a vantagem acabou e o que ainda é difícil de copiar. Nesta edição, chegar à escola com a IA ligada deixou de ser vantagem.
            </p>

            <div className="bg-white rounded-2xl border-2 border-rosa-600 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rosa-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">A mudança de lado desta edição</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                    <strong>Chegar à escola com a IA ligada</strong> deixou de ser vantagem de distribuição. O Google, presente em boa parte das escolas americanas, anunciou que vai entregar a IA desligada para alunos. O que diferencia agora é facilitar a decisão da escola: recursos separados, controle por série e turma e documentação para a política da rede.
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
                    { item: "Tutor que não entrega a resposta", motivo: "O Google levou o modo guiado ao Classroom, de graça. Sozinho, deixou de ser diferencial de desenho", novo: true },
                    { item: "IA ligada por padrão para o aluno", motivo: "Deixou de ser atalho de distribuição: as redes passaram a restringir, e o próprio Google anunciou a ativação pela escola", novo: true },
                    { item: "Ferramentas de estudo para o aluno", motivo: "Flashcards, quizzes e resumos chegam de graça pelas big techs desde a edição #13" },
                    { item: "Correção automática de redação", motivo: "Já roda em redes estaduais e em concorrentes desde a edição #13" },
                    { item: "O modelo de IA em si", motivo: "Desde a edição #12, escolher modelo virou decisão de custo" },
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
                    { item: "Recursos separados, ligados pela escola", motivo: "É o que o Google anunciou e o que as redes tendem a esperar dos demais. Recurso que só vem em pacote vira caso de tudo ou nada", novo: true },
                    { item: "Ficha de cada recurso para a política da rede", motivo: "As redes estão escrevendo as políticas agora e pedem prova de valor educacional antes de adotar. Não localizamos concorrente direto com ficha pública", novo: true },
                    { item: "Resultado em prova externa ao produto", motivo: "O ensaio da Eedi mostrou ganho dentro da plataforma e nenhuma vantagem clara fora. Quem medir fora do produto sai da comparação por métricas internas", novo: true },
                    { item: "Correção em dois turnos com assinatura registrada", motivo: "Segue sendo o que a regra brasileira deve exigir, quando sair" },
                    { item: "Modo guiado ligado ao material adotado", motivo: "O tutor gratuito não sabe o que a turma está estudando nem devolve o erro ao professor" },
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
                    { titulo: "Tutor de IA melhora a nota", desc: "No ensaio da Eedi, nem com professor revisando o tutor superou o conteúdo padrão na prova padronizada, e na edição #13 o tutor só oferecido baixou a nota. O ganho medido fica dentro do produto." },
                    { titulo: "A IA vai entrar na escola de qualquer jeito", desc: "O Google voltou atrás no padrão de agosto e vai depender da decisão da escola. A entrada não é automática." },
                    { titulo: "Versão para adolescentes resolve a segurança", desc: "Semanas depois de a Common Sense Media classificar o ChatGPT for Teens como risco inaceitável, a OpenAI anunciou travas novas, ainda por chegar. Rótulo de idade não substitui teste." },
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
                    { titulo: "Padrão desligado fora dos EUA", desc: "O Google não disse se vale para outros países. Se chegar às redes brasileiras, muda a negociação dos demais fornecedores." },
                    { titulo: "Modo guiado como padrão de tutor", desc: "Teve efeito medido em Serra Leoa, em pesquisa da própria empresa e junto com formação de professores, e sem vantagem clara em prova externa no ensaio da Eedi. Cedo para tomar como certo." },
                    { titulo: "Política de IA obrigatória nas redes", desc: "Já é lei em Maryland, e as redes estão atrasadas. Pode se espalhar, mas o conteúdo das políticas ainda está sendo escrito." },
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
                    { titulo: "A escola decide o que ligar", desc: "Redes, governos e agora o próprio Google apontam para o mesmo arranjo: a IA voltada ao aluno entra quando a escola liga. Já justifica mudar o roadmap." },
                    { titulo: "A IA trabalha com o professor", desc: "A regra brasileira em espera, a correção em dois turnos e o professor revisando o tutor da Eedi apontam na mesma direção." },
                    { titulo: "O ganho vem do desenho", desc: "Com desenho, a IA ajuda na aula; sem ele, pode atrapalhar. O ensaio da Eedi reforça o lado positivo, por ora só dentro da plataforma." },
                    { titulo: "Evidência como condição de venda", desc: "Agora a exigência é resultado medido fora do produto, e não só nas métricas da plataforma." },
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
                A IA não vai mais chegar ligada à escola. Redes e governos já vinham restringindo o uso pelo aluno, e nesta quinzena o próprio fornecedor anunciou a mudança do padrão: a IA vai vir desligada e a escola liga o que quiser. Ao mesmo tempo, a pesquisa ficou mais exigente: um tutor bem desenhado, com professor revisando, iguala o humano na aula, mas ainda não mostrou ganho em prova externa. Para um sistema de ensino, a vantagem está em facilitar a decisão da escola: recursos separados, controle por série e turma, documentação para a política da rede e resultado medido fora do produto.
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
                  rastreio: "Sinal 1 · edição #13",
                  sinal: "O Google anunciou que o Gemini e a Busca vão ficar desligados para alunos até a escola ligar, e foi criticado porque a escola que recusar toda a IA perde também a Busca",
                  problema: "Se os recursos de IA do produto só podem ser ligados em conjunto, a escola que quiser um vai ter de aceitar todos, ou recusar todos. Vale confirmar com Engenharia quais recursos voltados ao aluno já podem ser ligados sozinhos.",
                  oportunidade: "Recursos de IA separados, com ativação pela escola",
                  impacto: "Cada recurso voltado ao aluno vem desligado ou no modo mais restrito, e a escola liga o que quiser por série e turma. Amplia a oportunidade de controle da edição #13: além de desligar, a escola passa a escolher o que ligar.",
                  professor: "Sabe exatamente o que está ligado para a turma.",
                  aluno: "Usa só o que a escola decidiu liberar para a idade dele.",
                  gestor: "Liga o recurso mais seguro primeiro, sem precisar aceitar o pacote inteiro.",
                  roadmapItem: "Separar no código cada recurso que fala com o aluno e garantir que nenhum dependa de outro estar ligado.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Plataforma"
                },
                {
                  rastreio: "Sinal 3",
                  sinal: "Uma lei de Maryland obrigou cada rede a ter política de IA, as redes perderam o prazo, e a política de Anne Arundel exige avaliar o valor educacional de cada ferramenta antes de adotá-la",
                  problema: "Se a rede pedir, para cada recurso, o que ele faz, para que idade, que dados usa e que evidência tem, a resposta hoje precisa ser montada caso a caso. Vale verificar o que já existe documentado.",
                  oportunidade: "Ficha de cada recurso de IA para a política da rede",
                  impacto: "Uma ficha pública por recurso, gerada a partir do catálogo e das configurações do produto, com o que ele faz, para que idade, que controle a escola tem, que testes de segurança passou e que evidência existe.",
                  professor: "Sabe o que cada recurso faz antes de usá-lo com a turma.",
                  aluno: "Efeito indireto: usa recursos que a rede avaliou.",
                  gestor: "Aprova a ferramenta com base num documento, e não numa demonstração.",
                  roadmapItem: "Começar pelo catálogo de recursos voltados ao aluno, que também serve à oportunidade anterior.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Jurídico"
                },
                {
                  rastreio: "Sinal 2 · ausência recorrente",
                  sinal: "No ensaio da Eedi, o tutor de IA igualou o humano nas medidas da plataforma e não superou o conteúdo padrão na prova padronizada, e não localizamos estudo de impacto de sistema de ensino brasileiro",
                  problema: "Se o produto mede o efeito da IA só com dados dele mesmo, o número que apresenta pode não aparecer em nenhuma avaliação da rede. Vale confirmar com o time de dados o que já é medido fora da plataforma.",
                  oportunidade: "Medida de efeito em avaliação externa ao produto",
                  impacto: "Comparar turmas com e sem o recurso numa avaliação que o produto não controla, como a prova da rede, junto com uma rede parceira. Amplia a linha de base das edições anteriores com a medida que a pesquisa passou a usar.",
                  professor: "Vê se o recurso muda o resultado na avaliação que importa para a turma.",
                  aluno: "Só recebe em escala o que mostrou efeito fora do produto.",
                  gestor: "Tem um número que não depende da palavra do fornecedor.",
                  roadmapItem: "Fechar com a rede parceira o acesso à avaliação externa e o sorteio por turma do próximo recurso para o aluno.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Evidência / Dados"
                },
                {
                  rastreio: "Sinal 2",
                  sinal: "No ensaio da Eedi, um professor revisou cada mensagem do tutor de IA, e a maior parte passou sem edição",
                  problema: "Se o produto só oferece a IA falando sozinha com o aluno, a rede mais restritiva não tem por onde começar. Vale avaliar onde um degrau intermediário caberia.",
                  oportunidade: "Resposta da IA aprovada pelo professor, como degrau de entrada",
                  impacto: "A IA redige a resposta ao aluno e o professor aprova antes do envio, com a taxa de aprovação medida para decidir quando a revisão pode ser por amostragem.",
                  professor: "Fica no meio da conversa, sem precisar escrever cada resposta.",
                  aluno: "Recebe ajuda individual com um professor por trás.",
                  gestor: "Tem uma opção entre desligado e ligado para a rede mais cautelosa.",
                  roadmapItem: "Prototipar a fila de revisão numa turma e medir quanto tempo do professor ela consome.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Produto / Pedagógico"
                },
                {
                  rastreio: "Edição #13 · ausência",
                  sinal: "Até 4 de novembro, não localizamos a homologação anunciada para outubro, e o texto que deve liberar a IA como primeiro filtro na correção segue sem publicação",
                  problema: "A correção em dois turnos segue sendo o desenho que a regra deve exigir, mas os detalhes de registro dependem do texto. Na edição passada, esta oportunidade era Alta; desceu porque a data ficou incerta, e não porque a direção mudou.",
                  oportunidade: "Correção de redação em dois turnos, com assinatura do professor",
                  impacto: "Manter o desenho da edição #13, com a sugestão da IA e a nota do professor separadas e registradas, pronto para ajustar quando o texto sair.",
                  professor: "Continua dono da nota, com uma primeira leitura feita pela IA.",
                  aluno: "Recebe devolutiva antes da avaliação.",
                  gestor: "Sabe que o produto já atende a versão mais exigente da regra.",
                  roadmapItem: "Separar sugestão e nota no modelo de dados agora; deixar o formato do registro para depois da homologação.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Produto / Avaliação"
                },
                {
                  rastreio: "Sinal 1 · benchmark",
                  sinal: "O Google levou ao Classroom, de graça, o modo guiado que conduz o aluno por perguntas, com efeito medido em Serra Leoa",
                  problema: "Se o recurso de tutoria do produto é um modo guiado genérico, ele concorre com uma oferta gratuita. Vale comparar o que o nosso faz que o gratuito não faz.",
                  oportunidade: "Modo guiado ligado ao material adotado e ao professor",
                  impacto: "O modo guiado parte do capítulo que a turma está estudando e devolve ao professor os erros do aluno. O valor deixa de ser o modo em si e passa a ser a ligação com o que a escola ensina.",
                  professor: "Vê os erros da turma no conteúdo que está dando.",
                  aluno: "Treina exatamente o que vai ser cobrado.",
                  gestor: "Justifica pagar por algo que a ferramenta gratuita não entrega.",
                  roadmapItem: "Usar o acervo estruturado como fonte do modo guiado e medir quanto ele pergunta e quanto responde.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "Produto / Conteúdo"
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

            <div
              ref={gradeArquivoRef}
              tabIndex={-1}
              aria-label={`Edições ${inicioArquivo + 1} a ${inicioArquivo + edicoesDaPagina.length} de ${ARQUIVO.length}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-6 scroll-mt-28 outline-none"
            >
              {edicoesDaPagina.map(ed => (
                <motion.div
                  key={ed.view}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all flex flex-col"
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
                    className="w-full mt-auto px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                  >
                    Abrir edição<span className="sr-only">: {ed.rotulo}</span>
                  </button>
                </motion.div>
              ))}
            </div>

            {totalPaginasArquivo > 1 && (
              <nav aria-label="Páginas do arquivo" className="mt-10 pt-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <p aria-live="polite" className="text-sm md:text-xs text-gray-600 tabular-nums">
                  Edições {inicioArquivo + 1}–{inicioArquivo + edicoesDaPagina.length} de {ARQUIVO.length}
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => irParaPaginaArquivo(paginaArquivo - 1)}
                    disabled={paginaArquivo === 1}
                    className="inline-flex items-center gap-1 h-11 pl-2.5 pr-3.5 rounded-lg text-sm font-medium text-navy-900 border border-gray-200 bg-white transition-[border-color,color] duration-150 hover:border-azul-600 hover:text-azul-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-600"
                  >
                    <ChevronLeft aria-hidden="true" className="w-4 h-4" />
                    Anterior
                  </button>
                  {paginasVisiveis(paginaArquivo, totalPaginasArquivo).map((p, i) =>
                    p === '…' ? (
                      <span key={`salto-${i}`} aria-hidden="true" className="w-6 text-center text-sm text-gray-500">…</span>
                    ) : (
                      <button
                        key={p}
                        type="button"
                        onClick={() => irParaPaginaArquivo(p)}
                        aria-current={p === paginaArquivo ? 'page' : undefined}
                        aria-label={`Página ${p}`}
                        className={`min-w-11 h-11 px-2 rounded-lg text-sm font-semibold tabular-nums transition-[background-color,border-color,color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-600 ${
                          p === paginaArquivo
                            ? 'bg-azul-600 text-white border border-azul-600'
                            : 'bg-white text-navy-900 border border-gray-200 hover:border-azul-600 hover:text-azul-600'
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    onClick={() => irParaPaginaArquivo(paginaArquivo + 1)}
                    disabled={paginaArquivo === totalPaginasArquivo}
                    className="inline-flex items-center gap-1 h-11 pl-3.5 pr-2.5 rounded-lg text-sm font-medium text-navy-900 border border-gray-200 bg-white transition-[border-color,color] duration-150 hover:border-azul-600 hover:text-azul-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-600"
                  >
                    Próxima
                    <ChevronRight aria-hidden="true" className="w-4 h-4" />
                  </button>
                </div>
              </nav>
            )}
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
                <p className="text-white/60 text-xs tabular-nums">Novembro de 2026 · Edição #14 · 16 out – 4 nov</p>
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
