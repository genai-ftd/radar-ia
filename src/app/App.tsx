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
                <span className="block text-[11px] text-gray-500 mt-1.5 tabular-nums">11 – 28 Set 2026</span>
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
                <span className="text-[11px] font-bold tracking-[0.22em] text-white/75">INSIGHT DA QUINZENA</span>
              </motion.div>

              <motion.h1
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-[clamp(2rem,4.2vw,3.5rem)] text-white font-extrabold mb-7 leading-[1.06] tracking-[-0.03em]"
              >
                O público virou contra a IA na escola.<br />
                <span className="text-amarelo-400">A evidência virou só contra o atalho.</span>
              </motion.h1>

              <motion.p
                variants={{ oculto: { opacity: 0, y: 16 }, visivel: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-base md:text-[17px] text-white/80 leading-[1.7]"
              >
                Em 17 de setembro, a maioria dos adultos americanos disse a uma pesquisa nacional que a IA faz mais mal que bem na escola, e educadores passaram a falar em <strong className="font-semibold text-white">ilusão de aprendizagem</strong>. Os estudos rigorosos das mesmas semanas contam outra coisa: a IA que entrega a resposta não ensina, e a que obriga o aluno a trabalhar <strong className="font-semibold text-white">ensina pouco, mas de forma mensurável</strong>. O debate público ainda não separou as duas. O produto precisa separar.
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
                      Tutor que faz o aluno trabalhar, com domínio antes de avançar e professor decidindo, produz ganho pequeno e mensurável. Três estudos grandes de agosto e setembro chegaram lá por caminhos independentes, e um deles mostrou que o modelo aberto mais barato entrega o mesmo resultado que os caros.
                    </p>
                  </div>
                  <div className="border-l-2 border-red-400 pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide">O que ela derruba</p>
                    </div>
                    <p className="text-sm md:text-xs text-gray-700 leading-relaxed">
                      A promessa de transformação pelo acesso ao modelo. O ganho medido é do tamanho de um bom material sem IA, some em parte uma semana depois, e aparece só quando o aluno usa a ferramenta para pensar. Quem vende "IA na escola" sem dizer qual desenho está vendendo o que o público acabou de rejeitar.
                    </p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-gray-100">
                  <p className="text-sm md:text-xs text-gray-800 leading-relaxed">
                    <span className="font-bold text-azul-600">A conclusão:</span> o modelo virou insumo barato e o diferencial foi para o <em>desenho pedagógico</em>, que decide se a IA ensina ou só responde. Na próxima conversa de compra, a pergunta não vai ser <em>tem IA?</em>, vai ser <em>prova que não é atalho</em>.
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
                desc: 'A mudança da quinzena, o que ela obriga a revisar e o que fazer com isso.',
              },
              {
                valor: 'completa' as ModoLeitura,
                icone: <LayoutList className="w-4 h-4" />,
                titulo: 'Leitura aprofundada',
                tempo: '15 min · edição completa',
                desc: 'Acrescenta as evidências, o mapa competitivo, os casos de fora e o que dá para plugar no roadmap.',
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
      <section id="resumo" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Resumo Executivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              O que mudou de direção e <span className="text-azul-600">o que isso obriga a decidir</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-3xl">
              O que a liderança precisa entender em dois minutos, com a decisão que cada ponto força.
            </p>

            <div className="grid md:grid-cols-2 gap-5 items-start">
              {[
                {
                  tag: "Tese confirmada",
                  tagCor: "bg-green-100 text-green-700",
                  conclusao: "A IA que faz o aluno trabalhar ensina, mas o ganho medido é modesto e depende do desenho",
                  raciocinio: "Dois anos de ensaio randomizado com o Khanmigo em modo coach, em 18 escolas do Tennessee, deram cerca de 1,3 ponto percentil por período, parecido com o do Khan sem IA. Outro estudo, com quase 7 mil alunos, mediu 3 pontos percentuais com IA combinada a domínio antes de avançar, e boa parte da vantagem sumiu uma semana depois. O efeito existe e é pequeno. Promessa de salto não tem sustentação.",
                  decisao: "Trocar a promessa de transformação por uma meta de ganho mensurável e o desenho que a sustenta."
                },
                {
                  tag: "Commodity",
                  tagCor: "bg-gray-200 text-gray-700",
                  conclusao: "O modelo deixou de ser diferencial: o aberto mais barato empatou com o tutor humano no estudo",
                  raciocinio: "Um estudo com 2.383 participantes mediu tutor de IA equivalente a tutoria humana a um custo por ponto aprendido 918 vezes menor, e o modelo mais barato testado foi um modelo aberto de porte médio. Se o modelo barato basta, o que separa um produto do outro é o que se constrói em volta dele: sequência, domínio, retomada do erro, papel do professor.",
                  decisao: "Parar de posicionar o produto pelo modelo que usa e passar a posicioná-lo pelo desenho pedagógico."
                },
                {
                  tag: "Vento contra",
                  tagCor: "bg-red-100 text-red-700",
                  conclusao: "A opinião pública americana virou contra a IA na escola, e uma grande rede tirou a IA de todos os alunos",
                  raciocinio: "Pesquisa nacional publicada em 17 de setembro: 53% dos adultos acham que a IA faz mais mal que bem na educação básica, contra 27%. Em Los Angeles, a segunda maior rede dos EUA bloqueou IA generativa para todos os alunos nos equipamentos da escola, sem aviso ao conselho. A objeção deixou de ser de nicho e virou maioria.",
                  decisao: "Preparar a resposta à objeção antes de ela chegar ao comprador brasileiro: evidência de aprendizagem, não de uso."
                },
                {
                  tag: "Padrão da indústria",
                  tagCor: "bg-azul-100 text-azul-700",
                  conclusao: "As big techs passaram a treinar o professor a decidir, não a delegar",
                  raciocinio: "A OpenAI abriu uma trilha para educadores em que a IA revisa respostas contra objetivos e o professor decide o que fazer, com selo de conclusão e programa de formadores. A Anthropic levou o Claude for Teachers para redes e escolas, com habilidades de preparar aula e verificar compreensão. O discurso das duas convergiu para o que a norma brasileira exige: o humano assina.",
                  decisao: "Tratar formação docente dentro do produto como parte do produto, não como material de apoio."
                },
                {
                  tag: "Lacuna local",
                  tagCor: "bg-ambar-100 text-ambar-700",
                  conclusao: "Ninguém no Brasil tem evidência de impacto publicada, e é aí que está a vantagem",
                  raciocinio: "Não localizamos estudo com grupo de comparação de nenhum sistema de ensino ou plataforma brasileira de IA pedagógica, enquanto o parecer do CNE segue sem homologação. Quando a objeção pública chegar aqui, quem tiver um número próprio de aprendizagem vai ter o único argumento que a pesquisa americana não derrubou.",
                  decisao: "Montar agora uma linha de base de aprendizagem em uma rede parceira, antes do próximo ciclo de vendas."
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
                      <span className="font-semibold text-azul-600">Decisão que isso força:</span> {item.decisao}
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
      <section id="movimentos" className="py-24 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Zap className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Sinais da Quinzena</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Cinco sinais, <span className="text-azul-600">uma direção</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-3xl">
              Cinco movimentos que apontam para o mesmo lugar: a IA que ensina e a IA que só responde passaram a ser julgadas separadamente. Parte dos fatos é anterior a 11 de setembro e não tinha entrado na edição passada; a data de cada um está no cartão.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {[
                {
                  titulo: "Os primeiros ensaios rigorosos de tutor de IA saíram: o ganho existe, é pequeno e depende do desenho",
                  empresa: "Khan Academy · NUMI · EdWorkingPapers",
                  data: "Ago/2026",
                  consolida: "Ensaio randomizado por escola de dois anos com o Khanmigo · estudo com 6.997 alunos em Hamilton County · dados de uso e de desvio da tarefa",
                  resumo: "Philip Oreopoulos e Low publicaram o primeiro ensaio randomizado de dois anos com o Khanmigo, em 18 escolas de anos finais do Tennessee, com o tutor configurado em modo coach, que não entrega a resposta. O ganho foi de cerca de 1,3 ponto percentil por período letivo, algo como 0,06 a 0,08 desvio-padrão por ano e 0,14 num ano completo de uso ativo, parecido com o que o próprio Khan obtém sem IA. Quase todos os alunos (96%) experimentaram, mas o aluno mediano mandou mensagem em só um terço dos dias, e boa parte das conversas fugiu do assunto ou pediu a resposta pronta. No mesmo mês, um estudo com 6.997 alunos em Hamilton County mediu cerca de 3 pontos percentuais a mais quando a IA vinha combinada com domínio obrigatório antes de avançar. A vantagem ficou no conteúdo praticado e tinha sumido em boa parte uma semana depois; a IA deixou a prática mais lenta e melhorou a retomada depois do erro.",
                  impacto: "É a primeira vez que o setor tem números de aprendizagem com grupo de comparação para tutor de IA, e eles desmontam as duas narrativas extremas. O ganho não é zero, nem transformador. E ele vem do desenho: modo coach, domínio antes de avançar, retomada do erro. Onde o aluno consegue usar a ferramenta como atalho, ele usa. O que se compra, portanto, não é o modelo: é a estrutura que impede o atalho e mantém o aluno trabalhando.",
                  professor: "Ganha uma expectativa realista para calibrar com a turma: a IA ajuda quem pratica e mal chega a quem não usa.",
                  aluno: "Aprende mais quando o tutor não entrega a resposta e o obriga a dominar antes de avançar, e esquece parte do ganho se não retomar.",
                  gestor: "Passa a ter uma régua externa para desconfiar de promessa de salto e para exigir do fornecedor o desenho, não o logotipo do modelo.",
                  roadmap: "Priorizar domínio antes de avançar, retomada do erro e medição de engajamento produtivo acima de funcionalidade conversacional nova.",
                  fonte: "https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/",
                  color: "from-azul-700 to-azul-800"
                },
                {
                  titulo: "Um modelo aberto barato empatou com o tutor humano a um custo 918 vezes menor",
                  empresa: "Handshake AI Research · StudentBench",
                  data: "Set/2026",
                  consolida: "2.383 participantes em preparação para o GRE · tutor de IA comparado a tutoria humana · custo por ponto aprendido · modelo mais barato de porte médio e aberto",
                  resumo: "O StudentBench, pré-print publicado em setembro pela Handshake AI Research, comparou tutores de IA a tutoria humana com 2.383 participantes estudando para o GRE. O tutor de IA produziu ganho estatisticamente equivalente ao humano (p = 0,044 no teste de equivalência), a um custo por ponto percentual aprendido de US$ 0,0052, contra US$ 4,81 da tutoria humana calculada a US$ 75 por hora: 918 vezes menos. O modelo mais barato entre os testados foi o Gemma 4 31B, um modelo aberto de porte médio. O estudo é de adultos, num exame padronizado e ainda sem revisão por pares, o que limita a transposição direta para a educação básica.",
                  impacto: "A métrica é o dado mais útil do mês: custo por ponto aprendido, não custo por token nem por licença. Se um modelo aberto que roda barato entrega o mesmo que o caro, a escolha do modelo deixa de ser vantagem competitiva e vira decisão de custo. A disputa sai do fornecedor de modelo e vai para quem desenha a experiência em volta dele, que é justamente o que os ensaios de agosto mostraram fazer a diferença.",
                  professor: "Efeito indireto: tutoria individual deixa de ser recurso escasso, e o tempo do professor pode ir para quem a IA não alcança.",
                  aluno: "Pode ter acesso a tutoria equivalente à humana em prática estruturada, desde que o produto seja desenhado para isso.",
                  gestor: "Ganha um jeito de comparar propostas: quanto custa cada ponto de aprendizagem, e não quanto custa a licença por aluno.",
                  roadmap: "Adotar custo por ponto aprendido como métrica de produto e testar modelo aberto de porte médio antes de renovar contrato de modelo fechado.",
                  fonte: "https://arxiv.org/abs/2609.28470",
                  color: "from-azul-600 to-azul-700"
                },
                {
                  titulo: "O público americano virou contra a IA na escola, e Los Angeles tirou a IA de todos os alunos",
                  empresa: "NBC News · Washington Post · LAUSD",
                  data: "2 – 22 set/2026",
                  consolida: "Pesquisa nacional com 7.105 adultos · reportagem sobre ilusão de aprendizagem · bloqueio de IA generativa para todos os alunos da segunda maior rede dos EUA",
                  resumo: "A pesquisa nacional da NBC News, publicada em 17 de setembro com 7.105 adultos ouvidos entre 20 de agosto e 1º de setembro (margem de 3,3 pontos), encontrou 53% dizendo que a IA faz mais mal que bem na educação básica, contra 27%, e 54% contra 24% no ensino superior. Em 22 de setembro, o Washington Post publicou reportagem com educadores que descrevem o efeito como uma ilusão de aprendizagem: o aluno entrega mais, e melhor, e sabe menos. Antes disso, entre 2 e 4 de setembro, o distrito de Los Angeles bloqueou o uso de IA generativa para todos os alunos nos equipamentos da escola no ano letivo 2026-2027. Até então, a rede tinha mais de treze ferramentas aprovadas. A decisão pegou de surpresa o conselho e as famílias e levou à criação de um comitê específico.",
                  impacto: "A objeção à IA na escola deixou de ser de nicho: virou maioria na opinião pública e política de rede. O que a pesquisa não separa, e o produto precisa separar, é a IA que responde da IA que faz trabalhar. A ilusão de aprendizagem que os educadores descrevem é exatamente o efeito do atalho que os ensaios mediram. Quem não conseguir mostrar a diferença vai ser julgado junto.",
                  professor: "Tende a encontrar famílias mais desconfiadas e precisa de argumento para defender o uso que funciona.",
                  aluno: "Corre o risco de perder até o uso bom, quando a rede decide cortar tudo de uma vez.",
                  gestor: "Precisa de evidência de aprendizagem para sustentar a decisão diante de conselho e famílias, e não só de dados de uso.",
                  roadmap: "Tornar visível, para a família e para a rede, o que o aluno fez com a IA: pensou, praticou, errou e corrigiu, ou só copiou.",
                  fonte: "https://www.nbcnews.com/politics/politics-news/poll-americans-think-ai-harm-good-schools-rcna597777",
                  color: "from-rosa-600 to-rosa-700"
                },
                {
                  titulo: "As big techs passaram a formar o professor para decidir, não para delegar",
                  empresa: "OpenAI Academy · Anthropic",
                  data: "28 ago – 23 set/2026",
                  consolida: "Trilha AI for Educators e AI for College Students com selos · programa de formadores · Claude for Teachers aberto a escolas e redes com habilidades pedagógicas",
                  resumo: "Em 21 de setembro, a OpenAI ampliou a OpenAI Academy com novas trilhas, entre elas uma para educadores, em que a IA revisa as respostas dos alunos contra os objetivos de aprendizagem e o professor decide o que fazer com isso, e outra para universitários, com selos de conclusão. Em 23 de setembro, anunciou um programa para formar formadores. Um pouco antes, em 28 de agosto, a Anthropic abriu o Claude for Teachers para escolas e redes americanas (até então era individual, para docentes verificados), com as habilidades de preparação de aula e de verificação de compreensão, desenvolvidas com a Learning Commons.",
                  impacto: "A edição #08 registrou que a big tech encontrou no professor o seu canal. Agora ela formaliza o canal com trilha, certificado e formador, e o conteúdo mudou de ênfase: não é mais o que a IA faz pelo professor, é como o professor decide com a IA. É a mesma regra que o CNE aprovou em setembro, dita por quem tem distribuição global e oferta gratuita. A formação genérica e subsidiada está ocupada; o que sobra é a formação ancorada no material e na política de cada rede.",
                  professor: "Recebe formação certificada gratuita, com o risco de ela não conversar com o material que usa em sala.",
                  aluno: "Efeito indireto: professor treinado para decidir tende a usar a IA para diagnosticar, não para substituir a própria correção.",
                  gestor: "Precisa decidir se a formação obrigatória pela norma vai ser o catálogo gratuito ou algo ligado ao currículo adotado.",
                  roadmap: "Formação docente embutida no fluxo do produto, com o professor praticando a decisão no próprio material, e não num curso à parte.",
                  fonte: "https://openai.com/index/expanding-openai-academy-with-new-learning-paths/",
                  color: "from-azul-600 to-lilas-600"
                },
                {
                  titulo: "No Brasil, a correção de redação por IA segue em rede pública enquanto a regra espera assinatura",
                  empresa: "SEDU-ES · Letrus · CNE · Inep",
                  data: "26 ago – 18 set/2026",
                  consolida: "4ª produção de redação da rede estadual do Espírito Santo com correção por IA · parecer do CNE ainda sem homologação · imprensa divergente sobre a vigência · cartilha do ENEM",
                  resumo: "Entre 26 de agosto e 7 de setembro, a rede estadual do Espírito Santo fez a quarta produção de redação do ano na plataforma Letrus, em que a IA corrige o texto e devolve o retorno ao aluno na hora; a secretaria usa a ferramenta desde 2019. O parecer do CNE aprovado em 1º de setembro, que veda IA para corrigir e dar nota a redação, segue sem homologação do MEC: não localizamos publicação no Diário Oficial até o fechamento. A cobertura não se entende sobre isso: parte da imprensa trata a regra como já em vigor, parte lembra que parecer só vira norma depois de homologado. Em 18 de setembro, o Inep publicou a cartilha do participante do ENEM, cuja prova é em 8 de novembro, com a redação corrigida por dois avaliadores humanos e terceira correção em caso de discrepância.",
                  impacto: "O caso capixaba mostra onde vai estar a linha na prática: devolutiva formativa imediata é uma coisa, nota é outra. A norma veda a segunda. Como ela ainda não foi assinada e a imprensa diverge, redes e fornecedores estão operando sem saber de que lado da linha está cada funcionalidade. Quem definir e publicar essa fronteira primeiro, com base no texto aprovado, vai orientar o mercado.",
                  professor: "Continua dono da nota e ganha, na devolutiva automática, um apoio que a norma não proíbe, desde que não vire nota.",
                  aluno: "Recebe retorno imediato sobre o texto, que é justamente o tipo de ajuda que os ensaios associam à retomada do erro.",
                  gestor: "Precisa separar, em cada contrato de correção, o que é devolutiva formativa e o que é nota, antes que a homologação o obrigue.",
                  roadmap: "Separar no produto devolutiva formativa de atribuição de nota, com o professor validando a nota e o registro disso guardado.",
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
                      <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-azul-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
                      <ExternalLink className="w-4 h-4" />
                      Ver fonte
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SINAIS DE AUSÊNCIA ── */}
      <section id="ausencias" className="pb-24 px-6 bg-fundo-azul/70">
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
              <span className="text-sm text-gray-600 font-medium">Sinais de Ausência</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-3">
              O espaço que <span className="text-azul-600">ninguém ocupou</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Cada item abaixo era razoável esperar nesta janela, não veio, e por isso segue disponível para quem chegar primeiro.
            </p>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {[
                {
                  cat: "A homologação do parecer do CNE não saiu em quatro semanas",
                  nota: "O parecer foi aprovado em 1º de setembro e, até o fechamento desta edição, não localizamos homologação do MEC nem publicação no Diário Oficial. Enquanto isso, a imprensa diverge: parte trata as vedações como já vigentes, parte lembra que o prazo de doze meses só começa com a assinatura.",
                  leitura: "Quem publicar uma leitura clara do que muda, e a partir de quando, vira referência para as redes que estão lendo manchetes contraditórias.",
                  janela: "Monitorar"
                },
                {
                  cat: "Nenhum estudo brasileiro de IA pedagógica com grupo de comparação",
                  nota: "Terceira edição seguida registrando a mesma ausência. No mesmo período em que os EUA publicaram dois ensaios com milhares de alunos, não localizamos estudo de efeito com grupo de comparação de nenhuma rede, sistema de ensino ou plataforma brasileira.",
                  leitura: "Quando a objeção pública chegar aqui, a primeira pergunta vai ser se funciona. Um estudo leva pelo menos um semestre letivo: quem não começar agora não vai ter resposta em 2027.",
                  janela: "Custo de atraso alto"
                },
                {
                  cat: "Nenhum sistema de ensino concorrente publicou evidência de aprendizagem",
                  nota: "Entre os concorrentes que o radar acompanha, não localizamos lançamento de funcionalidade de IA na janela nem publicação de resultado de aprendizagem associado às ferramentas que já estão no mercado.",
                  leitura: "O concorrente que publicar o primeiro número, mesmo modesto, define a régua que os outros vão ter de alcançar. Com os ensaios americanos, número modesto passou a ser número crível.",
                  janela: "Janela aberta"
                },
                {
                  cat: "Ninguém mede engajamento produtivo com a IA",
                  nota: "O ensaio do Khanmigo mostrou que o aluno mediano usou o tutor em um terço dos dias e que boa parte das conversas fugiu do assunto ou pediu a resposta. Nenhuma plataforma brasileira divulga métrica que separe uso produtivo de atalho.",
                  leitura: "Métrica de uso sem qualidade de uso é o número que a ilusão de aprendizagem produz. Separar os dois é o que permite defender o produto diante do conselho e da família.",
                  janela: "Janela aberta"
                },
                {
                  cat: "Ninguém publica custo por ponto de aprendizagem",
                  nota: "O StudentBench mostrou que a métrica é calculável e que a diferença entre fornecedores pode ser de centenas de vezes. Nenhum fornecedor brasileiro apresenta preço em função do resultado, só por aluno ou por licença.",
                  leitura: "Numa rede pública com orçamento apertado, quem vender aprendizagem por real gasto muda a conversa de compra, e sai da comparação de preço de licença.",
                  janela: "Janela aberta"
                },
                {
                  cat: "O Inep segue em silêncio sobre a prova de conceito de correção por IA",
                  nota: "Segunda edição seguida sem posição. A cartilha do ENEM de 18 de setembro repete a correção por dois avaliadores humanos e não menciona o teste com empresas anunciado em junho para apoiar a correção da redação.",
                  leitura: "A diferença entre devolutiva e nota, que a norma vai exigir das redes, também vale para o próprio Estado. Enquanto o Inep não diz onde fica a linha, o mercado não tem referência pública.",
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
      <section id="recorrentes" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Temas Recorrentes</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Estrutural, emergente ou <span className="text-azul-600">encerrado?</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              O que reaparece ciclo após ciclo merece roadmap; o que apareceu uma vez merece monitoramento. Nesta edição, a restrição por idade e a big tech no canal do professor ganharam o terceiro ciclo, e a regulação que parecia resolvida travou de novo na assinatura.
            </p>

            <div className="flex items-center gap-5 mb-10 flex-wrap">
              {[
                { t: 'Estrutural', d: 'atravessa 3+ edições — entra no roadmap', c: 'bg-red-100 text-red-700' },
                { t: 'Emergente', d: '2 edições ou aceleração recente — posicionar', c: 'bg-ambar-100 text-ambar-700' },
                { t: 'Pontual', d: 'aparição isolada — monitorar', c: 'bg-gray-200 text-gray-700' },
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
                  leitura: "Cinco edições e a linha chegou ao dado. A disputa deixa de ser se existe evidência e passa a ser o tamanho do efeito e o desenho que o produz. O número modesto virou o novo piso de credibilidade, e a ausência de número brasileiro virou o risco mais concreto do setor.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Quem assina a decisão sobre o aluno",
                  tipo: "Estrutural",
                  trilha: "#09 a interface decide o que cada papel vê → #10 a plataforma contém o atalho → #11 a norma proíbe a máquina de assinar avaliação → #12 as big techs formam o professor para decidir",
                  leitura: "A mesma ideia agora aparece na regra brasileira e no currículo de formação de quem tem distribuição global. Deixou de ser posição de nicho pedagógico e passou a ser o discurso padrão da indústria, o que a torna piso, e não diferencial.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Formação docente como camada de produto",
                  tipo: "Estrutural",
                  trilha: "#08 a big tech encontra o professor como canal → #09 formação como gargalo → #10 catálogo gratuito consolidado → #11 formação vira obrigação institucional → #12 trilha certificada, selo e programa de formadores",
                  leitura: "A oferta genérica está ocupada e se profissionalizou com certificado e formador. A única faixa que continua aberta é a que o catálogo global não alcança: formar o professor no próprio material e na política da própria rede.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Restrição de acesso por faixa etária",
                  tipo: "Estrutural",
                  trilha: "#10 trava padrão por idade em produto de massa → #11 vedação até o 5º ano no Brasil e moratória até o 8º ano em Nova York → #12 Los Angeles bloqueia IA generativa para todos os alunos",
                  leitura: "Terceiro ciclo, e o corte subiu de faixa: começou nos pequenos e chegou a uma rede inteira. Passa a ser estrutural. O que mudou de natureza é o motivo: não é mais só proteção da criança, é desconfiança sobre o efeito na aprendizagem.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "A regulação brasileira travada na última milha",
                  tipo: "Emergente",
                  trilha: "#07 CNE aprova e abre consulta → #08 a #10 sem homologação → #11 aprovado em plenário com prazo de doze meses → #12 quatro semanas sem assinatura e imprensa divergente sobre a vigência",
                  leitura: "A edição passada tratou a linha como resolvida, e ela reabriu num degrau acima. O conteúdo da regra está definido; o que falta é o início da contagem. Para planejamento, vale tratar o texto aprovado como certo e a data como incerta.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "O que vira commodity",
                  tipo: "Emergente",
                  trilha: "#10 mediar o uso vira padrão de plataforma → #12 o modelo em si vira insumo barato, com o aberto de porte médio empatando com o humano",
                  leitura: "Duas camadas que eram vendidas como diferencial caíram para o piso em três edições. O valor subiu para o desenho pedagógico e para a prova de resultado, que são justamente as duas coisas mais difíceis de copiar.",
                  cor: "bg-ambar-50 border-ambar-200",
                  badge: "bg-ambar-100 text-ambar-700"
                },
                {
                  tema: "Interfaces novas: voz, agente executor e robótica",
                  tipo: "Pontual",
                  trilha: "#09 voz em tempo real e banca oral → #10 robô humanoide em português → #11 sem desdobramento → #12 sem desdobramento",
                  leitura: "Segunda edição seguida de silêncio, numa quinzena em que toda a atenção foi para o efeito na aprendizagem. Se nada vier na próxima, a linha sai do radar.",
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
                  <div className="bg-white/70 rounded-lg px-4 py-2.5 mb-3">
                    <p className="text-sm md:text-xs text-gray-600 leading-relaxed font-medium">{item.trilha}</p>
                  </div>
                  <p className="text-sm md:text-xs text-gray-700 leading-relaxed">{item.leitura}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONCORRÊNCIA ── */}
      <section id="concorrencia" className="py-24 px-6 bg-fundo-azul/70">
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
            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Quem está do lado <span className="text-azul-600">certo da evidência</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Concorrência direta é quem disputa a mesma escola, rede e orçamento. Não localizamos, entre os players acompanhados, lançamento de funcionalidade de IA nem resultado de aprendizagem publicado na janela. Por isso a leitura é feita com o que cada um já tem: quem está do lado da IA que faz o aluno trabalhar e quem fica exposto à objeção contra a IA que responde.
            </p>

            {/* Mercado privado */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-azul-600 rounded-full" />
              <h3 className="text-xl font-bold text-navy-900">Concorrência direta — mercado privado</h3>
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
                      movimento: "Nenhum lançamento na janela. O Cosmos segue restrito ao acervo próprio e voltado a professor e gestor",
                      estrategia: "Como a IA não fala direto com o aluno, fica fora do alvo da objeção pública. Em compensação, tem mais dificuldade para mostrar ganho de aprendizagem atribuível à IA, porque o efeito passa pelo professor",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                    {
                      player: "Santillana",
                      grupo: "Moderna Core",
                      movimento: "Nenhum lançamento na janela. IA de acompanhamento de desempenho, sem geração voltada ao aluno",
                      estrategia: "Leitura contínua de desempenho é a matéria-prima de uma linha de base de aprendizagem. Já tem o dado para medir o efeito do próprio produto, se decidir medir",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                    {
                      player: "Bernoulli",
                      grupo: "Sistema de ensino próprio",
                      movimento: "Nenhum lançamento na janela. CoCria Professor segue focado em planejamento e diagnóstico",
                      estrategia: "O diagnóstico sobre a base da rede o aproxima de uma medição de efeito, mas hoje o produto mede o aluno, não a própria ferramenta. Falta um passo para virar evidência",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Arco Educação",
                      grupo: "SAS, SAE Digital, Geekie",
                      movimento: "Nenhum lançamento na janela. Plataforma adaptativa e literacia em IA no programa de competências",
                      estrategia: "Tem o desenho mais próximo do que os ensaios premiaram: prática adaptativa com trilha. Também é quem mais depende de provar que o aluno pratica, e não pula etapas, porque a plataforma fala direto com ele",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Somos Educação",
                      grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                      movimento: "Nenhum lançamento na janela. O Plu oferece ao aluno resumo, exercício e tirar dúvida ancorados ao capítulo",
                      estrategia: "Pelo desenho do que já está no produto, é o mais exposto à objeção: resumir e responder dúvida é o uso que os educadores associam à ilusão de aprendizagem. Ancorar ao capítulo melhora a precisão, não o esforço do aluno",
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
              <h3 className="text-xl font-bold text-navy-900">Concorrência direta — mercado público</h3>
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
                      movimento: "Nenhum lançamento na janela. Correção de microtestes por câmera no celular do professor",
                      estrategia: "IA que mede e devolve o resultado ao professor fica do lado certo da objeção, porque não conversa com o aluno. E produz, de quebra, o dado de acompanhamento de que uma rede precisa para avaliar impacto",
                      exposicao: "Baixa", impacto: "Alto"
                    },
                    {
                      player: "Moderna",
                      grupo: "Moderna Amigos",
                      movimento: "Nenhum lançamento na janela. Capilaridade em redes municipais e estaduais",
                      estrategia: "Numa rede que precisa justificar a IA diante do conselho e das famílias, o fornecedor já contratado é o primeiro chamado a mostrar resultado. O relacionamento vira cobrança de evidência",
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
              <div className="w-1.5 h-6 bg-gradient-to-b from-azul-600 to-rosa-600 rounded-full" />
              <h3 className="text-xl font-bold text-navy-900">Radar de funcionalidades</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-3xl">
              Nenhuma funcionalidade nova na janela: os recursos abaixo são os mesmos da edição passada. O que muda é a pergunta feita a cada um: ele faz o aluno trabalhar, ou entrega a resposta?
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
                  leitura: "Do lado do professor, é geração de material, que ninguém questiona. Do lado do aluno, resumo e tirar dúvida são o formato que mais se presta a atalho. O ativo que protege é o acervo: o mesmo ancoramento ao capítulo serviria para perguntar ao aluno em vez de responder por ele.",
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
                  leitura: "A IA não fala com o aluno, então a pergunta não se aplica diretamente: quem decide é o professor. É o desenho que a regra e as big techs acabaram de chancelar, com o custo de depender da formação do professor para virar aprendizagem.",
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
                  leitura: "Acompanhamento não entrega resposta a ninguém: mostra onde o aluno está. É o recurso mais útil para medir efeito e o menos visível na mesa de venda, e com a evidência virando argumento, essa troca começa a pender a favor.",
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
                  leitura: "Planejamento e diagnóstico ficam do lado do professor e não criam atalho para o aluno. O limite é o mesmo de antes: é o recurso que todo mundo terá, e não se diferencia pelo resultado de aprendizagem.",
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
                  leitura: "O agente responde sobre o sistema, não sobre o conteúdo, e por isso não entrega resposta de exercício. É o trilho por onde o livro de todo mundo circula, e a acessibilidade que ele padroniza deixa de ser diferencial de qualquer fornecedor.",
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
                    Nenhum dos recursos descritos publicamente declara domínio obrigatório antes de avançar, retomada guiada depois do erro ou medida do que o aluno fez com a resposta. São justamente os três elementos de desenho associados a ganho nos ensaios de agosto e setembro. A vaga não é de funcionalidade nova: é de desenho em volta do que já existe, com número para mostrar.
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
                Não disputam a venda para a escola e por isso ficam fora do mapa competitivo. Mudam outra coisa: o que a escola espera receber, quanto aceita pagar e o que passa a ser considerado normal antes de qualquer proposta chegar.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    nome: "Opinião pública e imprensa",
                    altera: "Comportamento e expectativa",
                    nota: "Maioria nos EUA acha que a IA faz mais mal que bem na escola, e a expressão ilusão de aprendizagem entrou no vocabulário dos educadores. A objeção chega à escola brasileira antes de qualquer proposta, e vai pedir resultado, não funcionalidade."
                  },
                  {
                    nome: "OpenAI e Anthropic",
                    altera: "Economia da formação",
                    nota: "Trilha para educadores com selo, programa de formadores e assistente docente vendido a redes. Formação genérica e certificada virou oferta gratuita de quem tem distribuição global, no momento em que a norma a tornou obrigatória."
                  },
                  {
                    nome: "Pesquisa independente",
                    altera: "Régua de evidência",
                    nota: "Dois ensaios com milhares de alunos e um estudo de custo por ponto aprendido fixaram o que é um ganho crível e quanto ele pode custar. Qualquer promessa de fornecedor passa a ser comparada com esses números."
                  },
                  {
                    nome: "Reguladores e redes",
                    altera: "Regras competitivas",
                    nota: "Los Angeles cortou a IA de todos os alunos e o parecer do CNE segue sem assinatura. O risco de contrato deixou de ser só a faixa etária: uma rede pode desligar tudo por desconfiança sobre a aprendizagem."
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
      <section id="benchmarks" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <Globe className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Benchmarks de Inovação</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Não o que fizeram — <span className="text-azul-600">como fizeram</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-3xl">
              Cada caso destrinchado por problema, implantação, escala e aprendizado, separando o que dá para replicar aqui do que não dá.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 items-start">
              {[
                {
                  empresa: "Khanmigo — dois anos de ensaio randomizado em modo coach",
                  pais: "Estados Unidos · Anos finais",
                  categoria: "Evidência de efeito",
                  problema: "Saber se um tutor de IA que não entrega a resposta melhora a aprendizagem em condição real de escola, por tempo suficiente para o efeito aparecer, e comparado com o que a mesma plataforma já fazia sem IA.",
                  implementacao: "O ensaio sorteou escolas, e não alunos, para evitar contaminação dentro da mesma turma: 18 escolas de anos finais do Tennessee ao longo de dois anos letivos. O Khanmigo foi usado em modo coach, que conduz o aluno por perguntas em vez de responder. Além das notas, os pesquisadores analisaram o registro das conversas para ver como o tutor foi de fato usado.",
                  escala: "18 escolas em dois anos. Ganho de cerca de 1,3 ponto percentil por período letivo (0,06 a 0,08 desvio-padrão por ano; 0,14 num ano completo de uso ativo). 96% dos alunos experimentaram; o aluno mediano mandou mensagem em um terço dos dias.",
                  financiamento: "Pesquisa acadêmica independente publicada como working paper (EdWorkingPapers e NBER), com acesso aos dados de uso da plataforma.",
                  aprendizado: "O efeito é real e pequeno, parecido com o do próprio Khan sem IA. O que o limita não é a qualidade da resposta, é o uso: muita conversa fora do assunto e pedido de resposta pronta, mesmo num tutor desenhado para não dar a resposta.",
                  limitacoes: "É uma rede, uma plataforma e uma faixa etária. O working paper ainda não passou por revisão por pares, e o resultado vale para o modo coach, não para IA conversacional aberta.",
                  replicavel: "Sortear por escola, rodar por pelo menos um ano, medir contra a mesma plataforma sem IA e ler o registro das conversas junto com as notas.",
                  naoReplicavel: "O acesso a uma base de milhões de alunos e a um parceiro acadêmico com histórico em ensaios desse porte. Aqui, o equivalente teria de ser montado com uma rede parceira.",
                  application: "É o desenho de estudo que dá para copiar em escala menor: uma rede, duas condições, um ano. E o dado mais útil não é a nota, é o registro de uso, que mostra onde o aluno foge da tarefa."
                },
                {
                  empresa: "NUMI em Hamilton County — IA combinada com domínio antes de avançar",
                  pais: "Estados Unidos · Rede pública",
                  categoria: "Desenho pedagógico",
                  problema: "Separar o efeito da IA do efeito do domínio obrigatório: o aluno aprende mais porque a IA ajuda, ou porque é obrigado a dominar o conteúdo antes de seguir?",
                  implementacao: "O estudo comparou condições com e sem IA dentro de uma plataforma de prática com domínio obrigatório, em que o aluno só avança depois de acertar o suficiente. A IA atuava principalmente depois do erro, ajudando o aluno a entender o que errou antes de tentar de novo.",
                  escala: "6.997 alunos. IA combinada a domínio obrigatório deu cerca de 3 pontos percentuais a mais. O ganho ficou concentrado no conteúdo praticado, e boa parte da vantagem tinha sumido uma semana depois.",
                  financiamento: "Working paper acadêmico (EdWorkingPapers 26-1552) em parceria com a rede pública do condado.",
                  aprendizado: "A IA deixou a prática mais lenta e melhorou a retomada depois do erro. O ganho vem da combinação: domínio obrigatório dá a estrutura, a IA dá a explicação no momento do erro.",
                  limitacoes: "O efeito medido é de curto prazo e em parte não se sustenta. Não diz nada sobre transferência para conteúdo não praticado.",
                  replicavel: "Pôr a IA onde o aluno erra, não onde ele começa, e exigir domínio antes de avançar. Medir de novo uma semana depois.",
                  naoReplicavel: "A plataforma de domínio já pronta e calibrada por item. Sem banco de itens com dificuldade conhecida, o domínio obrigatório não funciona.",
                  application: "O recado para produto é de posicionamento da IA dentro do fluxo: menos assistente de conversa aberta, mais explicador do erro dentro de uma trilha que não deixa o aluno pular etapa."
                },
                {
                  empresa: "StudentBench — como medir custo por ponto aprendido",
                  pais: "Estados Unidos · Método de avaliação",
                  categoria: "Método",
                  problema: "Comparar tutores de IA entre si e com tutoria humana por uma métrica que junte efeito e custo, em vez de comparar modelos por benchmark técnico.",
                  implementacao: "Os participantes foram distribuídos entre tutores de IA com modelos diferentes e tutoria humana, estudando para o GRE com pré e pós-teste. O custo foi calculado por ponto percentual de ganho, usando o preço real de cada modelo e US$ 75 por hora para a tutoria humana.",
                  escala: "2.383 participantes. Tutor de IA estatisticamente equivalente ao humano (p = 0,044 no teste de equivalência), a US$ 0,0052 por ponto contra US$ 4,81: 918 vezes menos. O mais barato foi o Gemma 4 31B, modelo aberto.",
                  financiamento: "Handshake AI Research. Pré-print publicado no arXiv em setembro de 2026.",
                  aprendizado: "Custo por ponto aprendido é calculável e muda a comparação de fornecedores. Entre os modelos testados, o mais caro não foi o que ensinou mais.",
                  limitacoes: "Adultos, exame padronizado, intervenção curta, sem revisão por pares. Não vale como estimativa de efeito para a educação básica, e sim como método.",
                  replicavel: "A métrica e o desenho: vários modelos atrás do mesmo desenho pedagógico, pré e pós-teste, custo real por ponto.",
                  naoReplicavel: "O volume de participantes adultos recrutáveis online. Na educação básica, a amostra depende de rede parceira e consentimento.",
                  application: "Usar o mesmo método para decidir o modelo do próprio produto: trocar o modelo mantendo o desenho e medir custo por ponto antes de renovar contrato."
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
      <section id="aceleradores" className="py-24 px-6 bg-fundo-azul/70">
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

            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Capacidades que <span className="text-azul-600">encurtam o caminho</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              O que já existe, em que estágio está e o que custa plugar — com limitações reais, dependências técnicas, cenário ideal de uso e o que muda para Produto e Engenharia. Nesta edição, o critério de seleção é o que os estudos associaram a ganho de aprendizagem.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  nome: "Modelo aberto de porte médio",
                  tipo: "Modelo base",
                  oque: "Modelo de pesos abertos na faixa de 30 bilhões de parâmetros, que roda em infraestrutura própria ou em provedor de nuvem a custo por token muito menor que os modelos fechados de ponta. O StudentBench testou o Gemma 4 31B e ele foi o de menor custo por ponto aprendido.",
                  acelera: "Tira o custo do modelo da conta do produto e dá controle sobre dado de aluno, versão e comportamento, sem depender da política de preço de um fornecedor.",
                  limitacoes: "O resultado vem de um estudo com adultos, em inglês e num exame padronizado. O desempenho em português e com conteúdo da educação básica precisa ser testado antes de qualquer troca.",
                  dependencias: "Infraestrutura de inferência (própria ou gerenciada), avaliação em português com o conteúdo adotado, e um desenho pedagógico que não dependa de capacidade exclusiva de modelo de ponta.",
                  cenario: "Tutoria em prática estruturada, explicação do erro e geração de variação de exercício, onde o desenho restringe o que o modelo precisa fazer.",
                  impactoProduto: "Permite competir por custo por aluno numa rede pública sem abrir mão de margem, e muda o argumento de venda do modelo que usamos para o resultado que entregamos.",
                  impactoEngenharia: "Manter o produto independente de modelo: uma camada de abstração e uma bateria de avaliação que permita trocar o modelo em dias, não em meses.",
                  maturidade: "Disponível",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://arxiv.org/abs/2609.28470",
                  linkLabel: "O estudo de custo"
                },
                {
                  nome: "Domínio obrigatório antes de avançar",
                  tipo: "Padrão de fluxo",
                  oque: "O aluno só segue para o próximo conteúdo depois de demonstrar domínio do atual, com itens de dificuldade conhecida e critério de acerto definido. É a estrutura em que a IA mostrou ganho no estudo de Hamilton County.",
                  acelera: "Dá à IA um lugar certo no fluxo, o momento do erro, e impede o atalho por construção: não há como pular a etapa pedindo a resposta.",
                  limitacoes: "Deixa a prática mais lenta, o que pode ser lido como pior experiência. E o ganho medido foi de curto prazo, concentrado no conteúdo praticado.",
                  dependencias: "Banco de itens calibrado por dificuldade e alinhado à habilidade, critério de domínio por habilidade e mapa de pré-requisitos entre conteúdos.",
                  cenario: "Matemática e conteúdos com progressão clara de pré-requisitos. Menos útil em produção textual e projetos abertos.",
                  impactoProduto: "É o recurso que mais aproxima o produto do que a evidência premia, e o que menos aparece nos concorrentes: nenhum deles declara domínio obrigatório publicamente.",
                  impactoEngenharia: "O trabalho está no conteúdo, não no código: calibrar itens e mapear pré-requisitos. O motor de regra é simples; o dado que o alimenta, não.",
                  maturidade: "Disponível",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://hechingerreport.org/proof-points-ai-mastery-learning/",
                  linkLabel: "O estudo de domínio"
                },
                {
                  nome: "Explicação guiada depois do erro",
                  tipo: "Padrão de interação",
                  oque: "Quando o aluno erra, a IA não mostra a resposta certa: pergunta o raciocínio, aponta onde ele se desviou e pede uma nova tentativa. É o ponto do fluxo em que o estudo de Hamilton County mediu melhora.",
                  acelera: "Concentra o custo de inferência onde ele gera aprendizagem e evita a conversa aberta, que é onde o aluno foge do assunto ou pede a resposta.",
                  limitacoes: "O aluno ainda pode desistir ou chutar. Sem limite de tentativas e sem registro, a explicação vira mais um caminho para chegar à resposta.",
                  dependencias: "Classificação do tipo de erro por item, instruções de sistema que proíbam a entrega da resposta e registro de cada tentativa.",
                  cenario: "Exercícios com resposta verificável e erros típicos conhecidos. Complementa o domínio obrigatório.",
                  impactoProduto: "Transforma o tira-dúvidas, hoje o recurso mais exposto à objeção de atalho, em explicação de erro, que é o uso que os estudos defendem.",
                  impactoEngenharia: "Avaliar o comportamento do modelo com casos de aluno que insiste em pedir a resposta: é o teste que separa o desenho que se sustenta do que cede.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://edworkingpapers.com/sites/default/files/ai26-1552.pdf",
                  linkLabel: "O working paper"
                },
                {
                  nome: "Métrica de engajamento produtivo",
                  tipo: "Instrumentação",
                  oque: "Classificação automática de cada interação do aluno com a IA: trabalho na tarefa, pedido de resposta pronta, fuga do assunto. O ensaio do Khanmigo usou esse tipo de leitura para mostrar como o tutor era de fato usado.",
                  acelera: "Dá ao professor e à rede a informação que o dado de uso esconde: não quantas vezes o aluno usou, mas se usou para pensar.",
                  limitacoes: "A classificação é probabilística e erra. Serve para padrão de turma e de período, não para julgar um aluno individualmente, e nunca como base de punição.",
                  dependencias: "Registro das conversas com política de retenção, classificador avaliado com amostra rotulada por educadores e painel por turma.",
                  cenario: "Qualquer recurso de conversa com o aluno. Indispensável onde a rede precisa justificar o uso diante de conselho e famílias.",
                  impactoProduto: "É a resposta direta à ilusão de aprendizagem: um número que mostra se o uso é produtivo. Nenhum player brasileiro divulga algo assim.",
                  impactoEngenharia: "Tratar o classificador como produto, com conjunto de avaliação próprio e revisão periódica, e não como relatório gerado uma vez.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/",
                  linkLabel: "O que o ensaio mostrou"
                },
                {
                  nome: "Linha de base de aprendizagem com grupo de comparação",
                  tipo: "Método de avaliação",
                  oque: "Estudo com uma rede parceira: turmas ou escolas com e sem o recurso de IA, mesmo material, pré e pós-teste, por pelo menos um período letivo, com o registro de uso analisado junto.",
                  acelera: "Produz o único argumento que a objeção pública não derruba, e antecipa a avaliação de impacto que a norma vai exigir nos usos de alto risco.",
                  limitacoes: "Leva pelo menos um semestre, exige consentimento e pode dar resultado pequeno ou nulo. Um resultado modesto e honesto vale mais que nenhum.",
                  dependencias: "Rede parceira, desenho aprovado com antecedência, avaliação externa ou alinhada à BNCC e parceiro acadêmico para dar credibilidade.",
                  cenario: "O recurso de IA que a empresa mais quer vender. Começar por um só, bem medido.",
                  impactoProduto: "Sai do discurso de uso e entra no de resultado, num mercado em que nenhum concorrente acompanhado tem número publicado.",
                  impactoEngenharia: "Garantir que o produto consiga ligar e desligar o recurso por turma e registrar exposição por aluno: sem isso, não há como comparar.",
                  maturidade: "A construir",
                  cor: "bg-azul-100 text-azul-700",
                  link: "https://edworkingpapers.com/ai26-1551",
                  linkLabel: "Um desenho de referência"
                },
                {
                  nome: "Custo por ponto aprendido",
                  tipo: "Métrica de negócio",
                  oque: "Custo total do recurso (modelo, infraestrutura, suporte) dividido pelo ganho de aprendizagem medido. O StudentBench usou essa métrica para comparar modelos e tutoria humana.",
                  acelera: "Liga a decisão técnica (qual modelo, quanto contexto) à decisão comercial (quanto cobrar, quanto entregar) numa só conta.",
                  limitacoes: "Depende de ter o ganho medido, ou seja, da linha de base. Sem ela, a métrica é só o custo com outro nome.",
                  dependencias: "Linha de base de aprendizagem, custo de inferência por aluno e por período, e um critério comum de ganho.",
                  cenario: "Propostas para rede pública e renovações de contrato de modelo. Comparação interna entre versões do produto.",
                  impactoProduto: "Muda a conversa de compra de preço por licença para aprendizagem por real gasto, onde o modelo barato e o desenho bom se somam.",
                  impactoEngenharia: "Medir custo de inferência por aluno e por recurso desde já, mesmo antes de ter o ganho: é a metade da conta que depende só de nós.",
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
      <section id="experts" className="py-24 px-6 bg-white">
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

            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Validação e <span className="text-azul-600">contraponto</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              O que quem decide e quem estuda o tema concluiu sobre os movimentos desta edição — começando pelo que dizem em coro.
            </p>

            {/* Consenso dos especialistas */}
            <div className="bg-gradient-to-br from-azul-600 to-navy-900 rounded-2xl p-8 md:p-10 mb-12 text-white">
              <div className="flex items-start gap-4 mb-6">
                <img src={radarIconeClaro} alt="" className="h-12 w-auto flex-shrink-0" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full mb-3">
                    <Brain className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Consenso dos especialistas da quinzena</span>
                  </div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed">
                    Pesquisadores, educadores e as próprias big techs chegaram, cada um pelo seu caminho, ao mesmo ponto: <span className="text-amarelo-400">a IA ensina quando faz o aluno trabalhar, e o ganho vem do desenho, não do modelo</span>. O que ninguém disse, e nenhum estudo mostrou, é que o acesso à IA por si só melhora a aprendizagem.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    ponto: "O efeito é pequeno, e isso o torna crível",
                    detalhe: "Os dois ensaios de agosto mediram ganhos de poucos pontos percentis, parecidos com os de boas intervenções sem IA. É o primeiro número com grupo de comparação, e ele passa a ser a régua para qualquer promessa de fornecedor."
                  },
                  {
                    ponto: "O atalho é o comportamento padrão",
                    detalhe: "Mesmo num tutor desenhado para não dar a resposta, boa parte das conversas pediu a resposta ou fugiu do assunto. Os educadores chamam o resultado de ilusão de aprendizagem. O desenho precisa impedir o atalho, não só desencorajá-lo."
                  },
                  {
                    ponto: "O professor decide, e isso virou padrão",
                    detalhe: "A trilha da OpenAI para educadores e as habilidades do Claude for Teachers põem a IA para revisar e sugerir e o professor para decidir. É a mesma linha da norma do CNE, agora dita por quem tem distribuição global."
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
                  tese: "No ensaio de dois anos com o Khanmigo, feito com Low, o efeito sobre a aprendizagem ficou em torno de 1,3 ponto percentil por período letivo, próximo do que a plataforma obtém sem IA. A leitura dos autores vai além da nota: quase todos os alunos experimentaram, mas o uso foi esparso, e muitas conversas saíram do assunto ou pediram a resposta. O limite do tutor está no engajamento, não na qualidade da resposta.",
                  importa: "Tira a discussão do campo da capacidade do modelo e a põe no do comportamento do aluno. Melhorar o modelo não resolve um problema que é de uso.",
                  relacao: "Sustenta o Sinal 1 e é a base da métrica de engajamento produtivo entre os aceleradores: sem medir o uso, não dá para saber por que o efeito é pequeno.",
                  link: "https://edworkingpapers.com/ai26-1551"
                },
                {
                  autor: "Educadores ouvidos pelo Washington Post",
                  cargo: "Professores e gestores escolares dos EUA",
                  titulo: "É a ilusão de aprendizagem",
                  data: "22 set/2026",
                  tese: "Na reportagem, educadores descrevem alunos que entregam trabalhos melhores e mais rápidos com a IA e, nas avaliações sem ela, mostram que aprenderam menos. O problema apontado não é a cola no sentido tradicional: é o aluno acreditar que aprendeu porque a tarefa ficou pronta.",
                  importa: "Dá nome ao que os ensaios mediram de outro ângulo, e o nome pega. A expressão tende a chegar ao debate brasileiro antes dos dados, e vai ser usada contra qualquer IA na escola, sem distinção de desenho.",
                  relacao: "Explica o Sinal 3, a virada da opinião pública, e é a objeção que a métrica de engajamento produtivo e a linha de base de aprendizagem existem para responder.",
                  link: "https://www.washingtonpost.com/education/2026/09/22/its-illusion-learning-how-some-educators-say-ai-is-hurting-students/"
                },
                {
                  autor: "Proof Points · Hechinger Report",
                  cargo: "Coluna de evidência em educação",
                  titulo: "A vantagem da IA com domínio foi real, e curta",
                  data: "Ago/2026",
                  tese: "A coluna apresentou o estudo de Hamilton County, com quase 7 mil alunos: a IA combinada a domínio obrigatório antes de avançar rendeu cerca de 3 pontos percentuais a mais, concentrados no conteúdo praticado, e boa parte da vantagem tinha sumido uma semana depois. A IA deixou a prática mais lenta e melhorou a recuperação depois do erro.",
                  importa: "Mostra onde pôr a IA no fluxo, no momento do erro e dentro de uma trilha que não deixa pular etapa, e também o limite: ganho que não é retomado não se sustenta.",
                  relacao: "Fundamenta os aceleradores de domínio obrigatório e de explicação guiada depois do erro, e a oportunidade de tutor com retomada.",
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
                    <ExternalLink className="w-4 h-4" />
                    Ver fonte
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ANÁLISE ESTRATÉGICA ── */}
      <section id="analise" className="py-24 px-6 bg-fundo-azul/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Target className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Análise Estratégica</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Diferenciação vs <span className="text-azul-600">Commodity</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Onde parou de haver vantagem e onde ainda existe algo difícil de copiar. Nesta edição, o próprio modelo de IA desceu para o lado da commodity.
            </p>

            <div className="bg-white rounded-2xl border-2 border-rosa-600 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rosa-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">A mudança de lado desta edição</p>
                  <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                    <strong>O modelo de IA</strong> deixou de ser diferencial. Um modelo aberto de porte médio empatou com a tutoria humana a um custo por ponto aprendido centenas de vezes menor, e os ensaios mostraram que o que muda o resultado é o desenho em volta dele. A vantagem que era vendida como "usamos o melhor modelo" passou para "provamos que o aluno aprende".
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <p className="font-bold text-red-700 text-sm uppercase tracking-wide">Virou commodity — ou saiu do jogo</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "O modelo de IA em si", motivo: "O aberto de porte médio empatou com a tutoria humana no StudentBench, a custo muito menor. Escolher o modelo virou decisão de custo, não de posicionamento", novo: true },
                    { item: "Tira-dúvidas e resumo para o aluno", motivo: "Todos oferecem, e é o formato que a objeção pública associa à ilusão de aprendizagem. Além de não diferenciar, passou a expor", novo: true },
                    { item: "Formação docente genérica em IA", motivo: "Trilha certificada e programa de formadores gratuitos de quem tem distribuição global. Concorrer com isso por preço não faz sentido", novo: true },
                    { item: "Métrica de uso da IA", motivo: "Quantos alunos usaram e quantas vezes deixou de convencer depois que o ensaio mostrou uso esparso e muita fuga da tarefa. Número de uso sem qualidade de uso não sustenta mais nada" },
                    { item: "Humano no laço como discurso", motivo: "Virou a linha oficial das big techs e da norma. Dizer que o professor decide é o piso; mostrar onde ele decidiu é que ainda separa" },
                    { item: "Chat ancorado no conteúdo próprio", motivo: "Padrão entre todos os concorrentes diretos, como já registrado. Melhora a precisão da resposta, não o esforço do aluno" },
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
                    { item: "Domínio obrigatório com explicação do erro", motivo: "É o desenho associado a ganho no estudo de Hamilton County, e nenhum concorrente acompanhado o declara publicamente. Depende de banco de itens calibrado, que não se monta em um ciclo", novo: true },
                    { item: "Número próprio de aprendizagem", motivo: "Nenhum player brasileiro tem estudo com grupo de comparação publicado. O primeiro a ter, mesmo com efeito modesto, define a régua e responde à objeção pública", novo: true },
                    { item: "Medida de engajamento produtivo", motivo: "Separar uso para pensar de uso como atalho é o que permite defender o produto diante do conselho e da família. Ninguém divulga isso ainda", novo: true },
                    { item: "Custo por ponto aprendido", motivo: "Numa rede pública, vender aprendizagem por real gasto muda a comparação de propostas. Exige ter as duas metades da conta, e quase ninguém tem nenhuma" },
                    { item: "Formação docente ancorada no material adotado", motivo: "A única faixa de formação que o catálogo global não cobre: o professor praticando a decisão no próprio material e na política da própria rede" },
                    { item: "Acervo próprio com itens calibrados", motivo: "O modelo virou insumo; o conteúdo estruturado para domínio, não. É o ativo que um grupo editorial tem e uma big tech não" },
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
      <section id="hype" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-azul-50 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Hype vs Tendência Real</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              Força e maturidade <span className="text-azul-600">do movimento</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Quanto discurso existe em relação à evidência disponível — e se o movimento já é forte o bastante para mover roadmap.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-ambar-50 rounded-2xl p-7 border border-ambar-100">
                <p className="font-bold text-ambar-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Superestimado
                </p>
                <p className="text-[11px] text-ambar-700 mb-5 font-medium">Muito discurso, evidência ausente ou contrária</p>
                <div className="space-y-5">
                  {[
                    { titulo: "A IA vai transformar a aprendizagem", desc: "Os primeiros ensaios rigorosos mediram ganhos de poucos pontos percentis, parecidos com os de boas intervenções sem IA, e parte do ganho some em uma semana. A transformação prometida não aparece nos dados; o que aparece é uma melhora modesta que depende do desenho." },
                    { titulo: "O público rejeita a IA na escola", desc: "A pesquisa mede uma impressão geral, sem separar a IA que responde da IA que faz trabalhar. Ler o resultado como rejeição a qualquer uso leva a cortar também o que funciona, que foi o que Los Angeles fez." },
                    { titulo: "Tutor de IA substitui o professor", desc: "O StudentBench comparou IA e tutoria individual com adultos numa preparação para exame, não IA e professor em sala. E todos os estudos da quinzena põem o professor ou a estrutura pedagógica como condição do ganho." },
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
                    { titulo: "Modelo aberto barato como padrão do setor", desc: "Um estudo sólido, mas com adultos, em inglês e sem revisão por pares. É forte o suficiente para testar agora e cedo para migrar o produto inteiro sem avaliação própria em português." },
                    { titulo: "A objeção pública chegando ao Brasil", desc: "Os dados são americanos e a opinião brasileira sobre o tema não foi medida na janela. A tendência é de a discussão chegar, mas não se sabe com que força nem em que prazo." },
                    { titulo: "Big tech como formadora oficial do professor", desc: "Trilha com selo e programa de formadores são um passo claro, mas ainda sem adesão medida no Brasil nem reconhecimento por redes ou pela norma como formação válida." },
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
                    { titulo: "O ganho vem do desenho, não do acesso", desc: "Três estudos independentes, com desenhos diferentes, chegaram ao mesmo ponto: onde o aluno pode pegar o atalho, pega, e o ganho aparece quando a estrutura obriga a trabalhar. Já move roadmap." },
                    { titulo: "Evidência de aprendizagem como condição de venda", desc: "Cinco edições de escalada, agora com números de referência publicados e uma objeção pública que vai pedir resultado. Quem não tiver linha de base vai responder com intenção." },
                    { titulo: "O professor decide", desc: "Norma brasileira, big techs e estudos apontam para o mesmo lugar. Deixou de ser posição pedagógica e virou a arquitetura esperada de qualquer produto." },
                    { titulo: "O modelo como insumo", desc: "Custo por ponto aprendido centenas de vezes menor com modelo aberto, e mediação de uso já no piso desde a edição #10. A camada do modelo não sustenta mais diferença de preço." },
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
                A quinzena juntou duas notícias que parecem opostas e não são. O público americano virou contra a IA na escola, e os primeiros estudos rigorosos mostraram que ela ensina. As duas coisas são verdade para IAs diferentes: a que entrega a resposta produz a ilusão de aprendizagem que os educadores descrevem, e a que obriga o aluno a trabalhar produz um ganho pequeno e mensurável. Ao mesmo tempo, o modelo que faz isso ficou barato o bastante para deixar de ser vantagem. O que sobra para competir é o desenho pedagógico, a prova de que ele funciona e o professor no lugar de quem decide. O mercado brasileiro ainda não tem nenhum número próprio. Quando a objeção chegar aqui, quem tiver um vai ser o único com resposta.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
        </>
      )}

      {/* ── OPORTUNIDADES DE PRODUTO ── */}
      <section id="oportunidades" className="py-24 px-6 bg-fundo-azul/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-azul-600" />
              <span className="text-sm text-azul-600 font-medium">Prioridades Estratégicas</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-navy-900 font-bold mb-4">
              O que isso muda no <span className="text-azul-600">nosso produto</span>
            </h2>
            <p className="text-gray-600 mb-4 text-lg max-w-3xl">
              O que os sinais desta quinzena mudam, na prática, para o nosso roadmap.
            </p>

            {/* Legenda prioridade */}
            <div className="flex items-center gap-6 mb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-azul-600" />
                <span className="text-sm text-gray-600"><strong>Alta</strong> — janela estreita, agir agora</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rosa-600" />
                <span className="text-sm text-gray-600"><strong>Média</strong> — posicionar nos próximos ciclos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-600"><strong>Baixa</strong> — monitorar</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  rastreio: "Sinais 1 e 3 · ausência registrada",
                  sinal: "O ensaio do Khanmigo mostrou uso esparso e muita conversa fora da tarefa, e os educadores americanos passaram a falar em ilusão de aprendizagem",
                  problema: "Medimos quantos alunos usam a IA e quantas vezes, mas não se usam para pensar ou para pegar atalho. É exatamente o número que não responde à objeção que está chegando.",
                  oportunidade: "Engajamento produtivo no painel do professor",
                  impacto: "Classificação de cada interação do aluno com a IA (trabalho na tarefa, pedido de resposta, fuga do assunto), mostrada por turma e por período. Transforma o dado de uso em dado de qualidade de uso, que é o que conselho, família e comprador vão pedir. Nenhum player brasileiro divulga isso.",
                  professor: "Vê quem está usando a IA para pensar e quem está só pedindo a resposta, e intervém a tempo.",
                  aluno: "Recebe acompanhamento sobre como usa a ferramenta, não só sobre o que acerta.",
                  gestor: "Tem um número para defender o uso da IA diante do conselho e das famílias.",
                  roadmapItem: "Registrar as conversas com política de retenção desde já e montar um conjunto de avaliação rotulado por educadores antes de treinar o classificador.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Dados"
                },
                {
                  rastreio: "Sinais 1 e 2",
                  sinal: "A IA com domínio obrigatório antes de avançar deu cerca de 3 pontos a mais, principalmente na recuperação depois do erro, e o modelo aberto barato empatou com o tutor humano",
                  problema: "Nosso recurso de apoio ao aluno funciona como conversa aberta. O aluno pode pedir a resposta e seguir adiante, que é o formato que os estudos associam a atalho.",
                  oportunidade: "Tutor de retomada do erro dentro de trilha com domínio",
                  impacto: "A IA entra no momento do erro, pergunta o raciocínio e pede nova tentativa, dentro de uma trilha em que o aluno só avança depois de dominar a habilidade. Põe a IA no único ponto do fluxo em que a evidência mostrou ganho, e com modelo aberto o custo por aluno cabe no orçamento público.",
                  professor: "Recebe relatório de quais erros cada aluno cometeu e retomou, em vez de só a nota final.",
                  aluno: "Não consegue pular etapa pedindo a resposta, e recebe explicação quando mais precisa dela.",
                  gestor: "Compra um desenho que tem evidência externa por trás, e não uma promessa de personalização.",
                  roadmapItem: "Começar pelo banco de itens: calibrar dificuldade e mapear pré-requisitos por habilidade da BNCC em uma disciplina e uma série.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Produto / Conteúdo"
                },
                {
                  rastreio: "Sinal 3 · ausência recorrente",
                  sinal: "Nenhuma rede, sistema de ensino ou plataforma brasileira tem estudo com grupo de comparação publicado, enquanto os EUA publicaram dois ensaios com milhares de alunos em um mês",
                  problema: "Terceira edição com a mesma ausência. Na edição passada esta prioridade era Baixa; com a objeção pública virando maioria nos EUA e números de referência publicados, o custo de não ter dado próprio subiu.",
                  oportunidade: "Linha de base de aprendizagem com uma rede parceira",
                  impacto: "Um recurso de IA, uma rede, duas condições, pelo menos um período letivo, com o registro de uso analisado junto das notas e um parceiro acadêmico. Um resultado modesto e honesto já seria o primeiro número do mercado brasileiro, e o único argumento que a objeção pública não derruba.",
                  professor: "Participa de uma pesquisa que legitima a prática, em vez de ser alvo de medição externa.",
                  aluno: "Usa recursos que passam a ser ajustados com dado da própria rede.",
                  gestor: "Tem resultado para apresentar quando a pergunta \"funciona?\" chegar, e o relatório de impacto que a norma vai exigir.",
                  roadmapItem: "Fechar rede parceira e desenho neste semestre, e garantir no produto o ligar e desligar por turma e o registro de exposição por aluno.",
                  prioridade: "Alta",
                  cor: "border-azul-600",
                  corBadge: "bg-azul-600 text-white",
                  area: "Evidência / Pesquisa"
                },
                {
                  rastreio: "Sinal 5",
                  sinal: "Rede estadual usa IA para corrigir redação com retorno imediato ao aluno, enquanto o parecer que veda IA para dar nota a redação espera homologação",
                  problema: "Nossos recursos de apoio à escrita não separam com clareza o que é devolutiva formativa e o que é nota. Quando a norma entrar em vigor, a fronteira vai ser cobrada funcionalidade por funcionalidade.",
                  oportunidade: "Devolutiva formativa separada de atribuição de nota",
                  impacto: "A IA devolve o retorno sobre o texto na hora, o que a evidência associa à retomada do erro, e a nota fica sempre com o professor, com o registro de quem validou. Mantém o valor da correção dentro da regra e dá ao produto uma posição clara enquanto a imprensa ainda diverge.",
                  professor: "Continua dono da nota e ganha tempo com a devolutiva preliminar.",
                  aluno: "Recebe retorno imediato para reescrever antes da avaliação.",
                  gestor: "Sabe exatamente de que lado da norma está cada funcionalidade que contrata.",
                  roadmapItem: "Separar no modelo de dados devolutiva de nota e exigir validação humana registrada para qualquer nota em texto autoral.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Produto / Avaliação"
                },
                {
                  rastreio: "Sinal 2",
                  sinal: "Um modelo aberto de porte médio teve o menor custo por ponto aprendido, 918 vezes abaixo da tutoria humana, num estudo com 2.383 participantes",
                  problema: "O produto está preso a um fornecedor de modelo, e trocar exigiria reescrever instruções e fluxos. Não temos avaliação própria que diga se um modelo mais barato entregaria o mesmo em português.",
                  oportunidade: "Produto independente de modelo, com teste de modelo aberto",
                  impacto: "Uma camada de abstração de modelo e uma bateria de avaliação em português, com o nosso conteúdo, que permita trocar de modelo em dias. Reduz custo, dá controle sobre dado de aluno e tira o produto da política de preço de um só fornecedor.",
                  professor: "Efeito indireto: nenhuma mudança visível, se a troca for bem avaliada.",
                  aluno: "Efeito indireto: dado pessoal que pode ficar em infraestrutura sob controle da empresa.",
                  gestor: "Pode receber proposta com custo por aluno menor, sem perda de qualidade medida.",
                  roadmapItem: "Montar a bateria de avaliação em português antes de qualquer migração; sem ela, a troca é aposta.",
                  prioridade: "Média",
                  cor: "border-rosa-600",
                  corBadge: "bg-rosa-600 text-white",
                  area: "Engenharia"
                },
                {
                  rastreio: "Sinal 2 · ausência registrada",
                  sinal: "O StudentBench mostrou que custo por ponto aprendido é calculável e varia centenas de vezes entre alternativas, e nenhum fornecedor brasileiro vende por resultado",
                  problema: "Nossas propostas comparam preço de licença por aluno. Não temos nenhuma das duas metades da conta: custo de inferência por aluno e ganho medido.",
                  oportunidade: "Custo por ponto aprendido como métrica de produto e de venda",
                  impacto: "Começar pela metade que depende só de nós, o custo por aluno e por recurso, e juntar o ganho quando a linha de base existir. Muda a conversa com a rede pública de preço para aprendizagem por real gasto.",
                  professor: "Efeito indireto: os recursos que mais ensinam por real gasto passam a ser priorizados.",
                  aluno: "Efeito indireto: o investimento vai para o que funciona.",
                  gestor: "Compara propostas pelo que importa, com um número que ele consegue defender no orçamento.",
                  roadmapItem: "Instrumentar custo de inferência por aluno e por recurso já; depende da linha de base para virar métrica completa.",
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
                Nove seções ficaram de fora: as evidências por trás de cada conclusão, o mapa competitivo, o que não aconteceu, os casos de fora e o que já dá para plugar no roadmap.
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
              Edições <span className="text-azul-600">Anteriores</span>
            </h2>
            <p className="text-gray-600 mb-12">
              Biblioteca viva do RADAR — histórico contínuo de inteligência estratégica
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {/* Card Setembro 2026 · Ed. #11 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Setembro de 2026 · Ed. #11</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  A regra saiu, e ela não proíbe a IA: proíbe delegar a decisão sobre o aluno
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  O CNE aprovou as diretrizes em 1º de setembro e Nova York suspendeu IA generativa até o 8º ano no dia seguinte. A régua passou a ser quem assina a decisão.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-setembro-2026')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Agosto 2026 · Ed. #10 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Agosto de 2026 · Ed. #10</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  A mediação pedagógica deixou de ser reserva de valor e virou default da plataforma
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  A evidência nomeou o comportamento que prejudica e a OpenAI embutiu o antídoto no produto. Mediar genericamente virou commodity em três semanas.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-agosto-2026-b')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Agosto 2026 · Ed. #09 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Agosto de 2026 · Ed. #09</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  A home virou o produto: a disputa saiu do conteúdo e foi para a camada que decide
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  Classroom reconstrói a home por papel para 150M de usuários, Coursera aposta US$ 100 mi contra o próprio catálogo e o MEC institui o EducaLab.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-agosto-2026')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Julho 2026 · Ed. #08 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Julho de 2026 · Ed. #08</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  A era dos anúncios acabou: consolidação — quem não constrói capacidade, compra
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  Cogna vai a 90% do Educbank, Teachy faz o 1º M&A de IA em educação da AL, Khan admite 15% de uso e Anthropic lança o Claude for Teachers.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-julho-2026')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Junho 2026 · Ed. #07 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Junho de 2026 · Ed. #07</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  O Gemini entrou direto no ENEM: a batalha é pelo estudante dentro do exame
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  Google anuncia simulados gratuitos do ENEM com a Akira Enem, CNE encerra consulta pública e a disputa migra do produto para o canal de distribuição.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-junho-2026-b')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Junho 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Junho de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  O Brasil no ponto de inflexão: IA virou objeto de regulação, capital e escala
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  CNE aprova semáforo de riscos, BNDES injeta R$ 300M na Positivo e Plurall IA gera 26 mil PEIs em 3 meses.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-junho-2026')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Maio 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Maio de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  A próxima disputa não será pela melhor funcionalidade
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  Mercado migra de features isoladas para ecossistemas integrados. CNE regulamenta, Moderna Core e Positivo+AWS definem novo benchmark.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-maio-2026')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Abril 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-azul-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Abril de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-azul-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-azul-600" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 mb-3">
                  MEC abre sandbox para testar IA na educação
                </h3>
                <p className="text-sm md:text-xs text-gray-600 mb-4 leading-relaxed">
                  Análise sobre ambiente de experimentação para avaliar soluções educacionais com IA e antecipação de critérios de validação no setor.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-abril-2026')}
                  className="w-full px-4 py-2 bg-azul-600 text-white rounded-lg font-medium hover:bg-azul-700 transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>
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
              O RADAR é um sistema contínuo de inteligência estratégica que transforma movimentos de mercado, concorrência, pesquisa, tecnologia e regulação em sinais, padrões, riscos e oportunidades para produtos educacionais.
            </p>

            <div className="pt-8 border-t border-white/15 flex flex-col items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Uma publicação do</span>
              <img src={hubLogoClaro} alt="Hub de IA, Produto e Experiência" className="h-11 md:h-12 w-auto" />
              <div className="space-y-1 mt-2">
                <p className="text-white/70 text-sm">Curadoria e análise: <span className="text-white font-medium">Silvana Helena</span></p>
                <p className="text-white/60 text-xs tabular-nums">Setembro de 2026 · Edição #12 · 11 – 28 set</p>
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
