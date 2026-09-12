import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionConfig } from 'motion/react';
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
import logoIonica from '../imports/Logo-ionica_(1).png';
import logoIonicaSmall from '../imports/Logo-ionica_(1)-1.png';
import logoFTD from '../imports/ftd_com_voce_logo.png';
import liaHeader from '../imports/lia-header.png';
import liaFooter from '../imports/lia_footer.png';

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

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b' | 'edicao-julho-2026' | 'edicao-agosto-2026' | 'edicao-agosto-2026-b';

// ─── Edição Abril 2026 (arquivo) ────────────────────────────────────────────
function EdicaoAbril2026({
  onBack,
  onBackToEdicoes,
  mascote,
  mascoteInverso,
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
  logoSmall: string;
  logoFtd: string;
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Abril de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Abril de 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              O MEC abre sandbox de IA para educação básica:<br />
              <span className="text-[#6B46C1]">quem molda os critérios, molda o próximo PNLD</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "MEC abre sandbox regulatório para IA na educação básica", desc: "Players que participam ganham vantagem direta no PNLD futuro e contratos públicos. Critérios: inovação + escalabilidade + governança ética — requisitos de entrada, não diferenciais.", cor: "border-[#6B46C1]" },
                { titulo: "CNE forma comissão especial para diretrizes de IA (básica e superior)", desc: "Regulação virá no 2º semestre de 2026 — janela de 6 meses para adequação. Empresas sem governança auditável terão barreira de entrada no mercado público.", cor: "border-[#FF6B35]" },
                { titulo: "BNCC Computação torna IA curricular em todas as escolas em 2026", desc: "Demanda estrutural criada por lei — não depende de adoção voluntária. Janela de 12–18 meses antes de commodity. Diferencial: formação docente integrada.", cor: "border-[#FF6B35]" },
                { titulo: "Arco/Geekie consolida Teacher Assistant com OpenAI", desc: "Primeiro player BR com IA generativa integrada ao fluxo pedagógico. Cria pressão sobre concorrentes — Plurall/SOMOS precisam acelerar integração.", cor: "border-[#6B46C1]" },
                { titulo: "MEC lança curso 'IA na prática docente' e plataforma MEC Idiomas com tutor IA", desc: "Estado forma professores para IA antes que o mercado o faça. Cria expectativa docente que plataformas privadas precisam igualar ou superar.", cor: "border-[#6B46C1]" },
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos <span className="text-[#6B46C1]">de Abril</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "MEC Sandbox de IA: ambiente regulatório aberto", desc: "O Ministério da Educação abriu inscrições para sandbox regulatório avaliando soluções de IA por inovação, escalabilidade e governança ética. Publicação do documento orientador 'IA na Educação Básica'.", impacto: "Empresas que participarem moldam os critérios que valerão nos próximos ciclos do PNLD. É uma janela que se fecha em 12–18 meses.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "BNCC Computação: IA obrigatória em todas as escolas em 2026", desc: "A partir de 2026, a BNCC Computação passa a ser obrigatória em todas as escolas brasileiras, tornando o trabalho com IA parte estruturada do currículo.", impacto: "Janela de 12–18 meses para sistemas de ensino sem solução de IA curricular. Quem chegar primeiro com formação + ferramenta integradas captura o mercado.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "Arco/Geekie + OpenAI: Teacher Assistant em expansão", desc: "A Arco Educação reporta avanços na parceria com OpenAI anunciada em 2024. O Teacher Assistant, que gera planos pedagógicos personalizados para alunos com deficiência, está em expansão.", impacto: "Primeiro grande player BR com IA generativa no fluxo pedagógico. Cria pressão sobre Plurall/SOMOS para acelerarem suas próprias integrações.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "MEC lança curso de IA para docentes e plataforma de idiomas com IA", desc: "Curso 'IA na prática docente' disponível na Plataforma Mais Professores. Lançamento da MEC Idiomas com tutor de IA que corrige pronúncia e permite prática de conversação.", impacto: "Estado formando professores para IA cria expectativa docente que plataformas privadas precisarão igualar ou superar.", cor: "from-purple-600 to-violet-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-[#6B46C1] pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.impacto}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Abril de 2026</p>
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
  logoSmall: string;
  logoFtd: string;
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Maio de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Maio de 2026
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              A próxima disputa da IA na educação não será pela melhor{" "}
              <span className="text-[#6B46C1]">funcionalidade</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  titulo: "CNE regulamenta uso de IA na educação",
                  desc: "Nova regulamentação institucionaliza a IA como parte da operação escolar — governança, rastreabilidade e transparência tornam-se diferenciais competitivos.",
                  cor: "border-[#FF6B35]"
                },
                {
                  titulo: "Ecossistemas integrados definem o novo benchmark",
                  desc: "Moderna Core e Positivo+AWS sinalizam: a competição migrou de features isoladas para jornadas completas — conteúdo + analytics + IA + acompanhamento.",
                  cor: "border-[#6B46C1]"
                },
                {
                  titulo: "Analytics operacional ganha força",
                  desc: "Plurall 2026 e outros players apostam em dados que viram ação pedagógica — IA prescritiva supera IA descritiva.",
                  cor: "border-[#FF6B35]"
                },
                {
                  titulo: "Consolidação via M&A acelera",
                  desc: "Árvore adquire Typper — mercado entra em fase de concentração e fortalecimento de ecossistemas. Integração e interoperabilidade tornam-se críticas.",
                  cor: "border-[#6B46C1]"
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos <span className="text-[#6B46C1]">de Maio</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  num: "01",
                  titulo: "Moderna Core: ecossistema integrado",
                  desc: "Plataforma completa combinando conteúdo, IA, analytics e acompanhamento — novo benchmark do setor educacional.",
                  cor: "from-purple-600 to-purple-700"
                },
                {
                  num: "02",
                  titulo: "Positivo + AWS: IA generativa em escala",
                  desc: "Parceria traz infraestrutura enterprise e capacidade técnica robusta para IA generativa no ambiente educacional.",
                  cor: "from-orange-500 to-orange-600"
                },
                {
                  num: "03",
                  titulo: "Plurall 2026: analytics operacional",
                  desc: "SOMOS Educação aposta em inteligência pedagógica acionável — dados virando recomendações práticas para professores.",
                  cor: "from-violet-500 to-violet-600"
                },
                {
                  num: "04",
                  titulo: "Árvore adquire Typper",
                  desc: "Primeira grande aquisição EdTech do ciclo — mercado entra em fase de consolidação e fortalecimento de plataformas proprietárias.",
                  cor: "from-purple-700 to-purple-800"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Maio de 2026</p>
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
  logoSmall: string;
  logoFtd: string;
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Junho de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Junho de 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              O Brasil chegou ao ponto de inflexão:<br />
              <span className="text-[#6B46C1]">IA na educação virou objeto de regulação, capital e escala</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "CNE aprova semáforo de riscos para IA (mai/2026)", desc: "Compliance vira requisito de entrada — não diferencial opcional. Produtos sem governança auditável perdem acesso ao mercado público regulado.", cor: "border-[#6B46C1]" },
                { titulo: "BNDES injeta R$ 300M na Positivo para IA + plataforma MARIA com GPT", desc: "Capital institucional valida o setor — modelo replicável por outros grupos. Vertical integrada (hardware + software + IA própria) cria vantagem estrutural.", cor: "border-[#FF6B35]" },
                { titulo: "Moderna relança Aprova Brasil com IA para 800k alunos e SAEB (mai/2026)", desc: "Defesa de base instalada com upgrade tecnológico — produto com 15 anos ganha nova vida. Integrar conteúdo + avaliação SAEB + IA + analytics num único produto é o novo benchmark público.", cor: "border-[#FF6B35]" },
                { titulo: "Google + UNICEF entram no mercado público BR com Gemini e NotebookLM (mai/2026)", desc: "Big tech contorna ausência de conteúdo BR via parceria institucional multilateral. Resposta não é produto melhor — é relacionamento mais profundo com redes e secretarias.", cor: "border-[#6B46C1]" },
                { titulo: "Plurall IA: 26 mil PEIs gerados, 2 mil escolas ativas em 3 meses", desc: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado deixou de ser hipótese — é demanda comprovada e mercado aberto.", cor: "border-[#6B46C1]" },
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos <span className="text-[#6B46C1]">de Junho</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "CNE aprova diretrizes com semáforo de riscos para IA", desc: "CNE aprovou parecer que classifica tecnologias por risco: proibiu vigilância emocional e perfilização psicológica; exige supervisão humana em correção automatizada.", impacto: "Compliance vira requisito de entrada no mercado público. Produto sem governança auditável perde acesso a contratos regulados.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "BNDES injeta R$ 300M na Positivo — plataforma MARIA integra GPT", desc: "Positivo fechou financiamento de até R$ 300M com BNDES para Plano de Inovação 2026–2028, incluindo MARIA, assistente de IA que monta planos de estudo personalizados.", impacto: "Vertical integrada (hardware + software + IA própria) cria vantagem estrutural difícil de replicar por players apenas de software.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "Moderna relança Aprova Brasil com IA para 800k alunos", desc: "Soluções Moderna lançou nova versão do Aprova Brasil com monitoramento em tempo real, análise de performance no SAEB e intervenção pedagógica baseada em IA.", impacto: "Produto de 15 anos ganhou nova vida com IA integrada. Benchmark: conteúdo + SAEB + analytics em plataforma única.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "Google + UNICEF parceria 3 anos no Brasil", desc: "Parceria trienal anuncia uso de Gemini e NotebookLM em escolas públicas brasileiras. Google.org destina R$ 5M para expandir programa Experience AI no Brasil.", impacto: "Big tech contorna ausência de conteúdo brasileiro via parceria institucional multilateral — canal de distribuição diferente dos players privados.", cor: "from-purple-600 to-violet-600" },
                { num: "05", titulo: "Plurall IA: 26 mil PEIs gerados em 3 meses", desc: "Em 3 meses de uso, mais de 2 mil escolas criaram pelo menos um PEI na plataforma Plurall IA, com 26 mil conteúdos adaptados gerados. Predição por IA prevista para 2026.", impacto: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado saiu de hipótese para demanda comprovada.", cor: "from-purple-600 to-purple-700" },
                { num: "06", titulo: "Bett Brasil 2026: 65 mil visitantes, +40% vs 2025", desc: "Maior edição da história do evento com lançamentos de Somos, Moderna, Super Professor, SoftBank Robotics (Léia) e relatório OCDE em português.", impacto: "Mercado saiu do discurso para o produto. Volume de lançamentos indica corrida por posicionamento antes da regulação final do CNE.", cor: "from-purple-700 to-purple-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-[#6B46C1] pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.impacto}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Junho de 2026</p>
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
  logoSmall: string;
  logoFtd: string;
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Junho de 2026 · Ed. #07</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #07 · 08 – 19 Jun 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              O Gemini entrou direto no ENEM:<br />
              <span className="text-[#6B46C1]">a batalha agora é pelo estudante brasileiro dentro do exame mais disputado do país</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "Big techs passaram a competir diretamente pela distribuição educacional", desc: "Simulado ENEM gratuito no Gemini (parceria com Akira Enem) é o primeiro produto de IA do Google desenhado para o contexto brasileiro — canal direto a 10M+ de vestibulandos, sem passar pela escola.", cor: "border-[#6B46C1]" },
                { titulo: "Regulação de IA entrou em fase prática", desc: "CNE encerrou consulta pública sobre as diretrizes: proibição de vigilância emocional e supervisão humana obrigatória em correção automatizada. Compliance virou requisito de entrada.", cor: "border-[#FF6B35]" },
                { titulo: "Gratuidade virou estratégia de aquisição em escala", desc: "Google Summit gratuito para professores, MEC Idiomas gratuito (212k usuários em dias), Khan Academy gratuito até 2027 — zero cost como canal de adoção antes de monetizar.", cor: "border-[#FF6B35]" },
                { titulo: "O diferencial migrou do conteúdo para o dado de aprendizagem", desc: "Gemini tem alcance, mas não tem histórico do aluno. Quem tem o dado longitudinal tem o ativo que a big tech não copia.", cor: "border-[#6B46C1]" },
                { titulo: "Coordenador pedagógico emergiu como buyer estratégico", desc: "Geekie lançou a Ultravisão da Coordenação — dado consolidado de turma em tempo real. Coordenador renova contrato e influencia a compra do próximo ciclo.", cor: "border-[#6B46C1]" },
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos da <span className="text-[#6B46C1]">Quinzena</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Gemini lança simulados gratuitos do ENEM com a Akira Enem", desc: "Anunciado no Google for Brasil (10/jun): testes completos ou por área, diagnóstico detalhado e plano de estudos personalizado, gratuitos no app Gemini.", impacto: "Canal direto a 10M+ vestibulandos sem passar por escola ou sistema de ensino. Ameaça específica a preparatórios.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "CNE encerra consulta pública sobre IA na Educação", desc: "Consulta via Brasil Participativo (18/mai–14/jun) colheu contribuições sobre as diretrizes de IA na educação básica e superior antes da fase final.", impacto: "Quem participou tem argumento técnico de alinhamento regulatório. Compliance virou moat, não custo.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "MEC Idiomas: 212 mil usuários em dias com tutor de IA gratuito", desc: "Plataforma pública de inglês e espanhol (A1–C2) com agente de IA para dúvidas e conversação, em app e web.", impacto: "Estado entregando IA de qualidade gratuita cria benchmark público difícil de bater por preço. Diferencial privado: personalização e dado longitudinal.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "Geekie One lança Ultravisão da Coordenação", desc: "Tela de gestão com dados consolidados de alunos, turmas e professores em tempo real, específica para coordenadores pedagógicos.", impacto: "Coordenador como buyer estratégico: produto que o serve cria retenção que ferramenta de aluno não cria.", cor: "from-purple-600 to-violet-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-[#6B46C1] pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.impacto}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Junho de 2026 · Edição #07</p>
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
  logoSmall: string;
  logoFtd: string;
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Julho de 2026 · Ed. #08</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #08 · 20 Jun – 17 Jul 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              A era dos anúncios acabou:<br />
              <span className="text-[#6B46C1]">a IA na educação entrou na fase de consolidação — quem não constrói capacidade, compra</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "O M&A virou o atalho para capacidade de IA", desc: "Teachy comprou a Nero.AI (acquihiring de sete dígitos). Construir capacidade interna ficou mais lento que a janela competitiva — comprar talento pronto virou estratégia.", cor: "border-[#6B46C1]" },
                { titulo: "O ecossistema se expandiu para além do pedagógico", desc: "Cogna elevou a Somos a 90% do Educbank (R$ 46,3M): dado financeiro + dado pedagógico no mesmo grupo cria retenção que feature não cria.", cor: "border-[#FF6B35]" },
                { titulo: "Uso real virou a métrica que define produto", desc: "Khan Academy admitiu 15% de engajamento no Khanmigo e refez o produto embutido na prática, medindo 'acerto no item seguinte'. IA como app separado falhou no maior case do mundo.", cor: "border-[#FF6B35]" },
                { titulo: "A big tech encontrou seu novo canal: o professor", desc: "Claude for Teachers (14/jul): premium gratuito para docentes K-12 dos EUA, padrões dos 50 estados e privacidade validada pelo sindicato AFT. Compliance virou arma de aquisição de mercado.", cor: "border-[#6B46C1]" },
                { titulo: "Compliance ganhou data no Brasil", desc: "Consulta encerrada, seminário nacional e homologação do MEC no horizonte — adequação às diretrizes do CNE virou cronograma do 2º semestre de 2026.", cor: "border-[#6B46C1]" },
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos da <span className="text-[#6B46C1]">Edição</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Cogna eleva participação no Educbank para 90%", desc: "Compra de mais 47% por R$ 46,3 milhões (26/jun). O Educbank é a camada financeira da escola privada: cobrança, mensalidades e crédito.", impacto: "O grupo dono do Plurall passa a controlar dado financeiro + pedagógico no mesmo ecossistema — retenção estrutural.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "Teachy compra Nero.AI — 1º M&A de IA em educação da AL", desc: "Acquihiring de sete dígitos (2/jul): time de desenvolvimento e propriedade intelectual incorporados.", impacto: "Talento de IA virou ativo comprável. Abre o ciclo de consolidação — edtechs com capacidade técnica viram alvo.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "Khan Academy admite 15% de uso e relança o Khanmigo", desc: "108 milhões de interações, mas só 15% dos alunos usam. Versão reconstruída: IA embutida na prática e métrica de 'acerto no item seguinte'.", impacto: "O tutor como app separado morreu. IA embutida no fluxo, medida por aprendizagem transferida, é o novo benchmark.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "Anthropic lança Claude for Teachers (14/jul)", desc: "Premium gratuito para professores K-12 verificados dos EUA, padrões dos 50 estados, piloto em Detroit e privacidade em parceria com o sindicato AFT.", impacto: "A disputa chegou ao professor como canal. Confiança institucional e compliance viraram arma competitiva.", cor: "from-purple-600 to-violet-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-[#6B46C1] pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.impacto}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Julho de 2026 · Edição #08</p>
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  mascoteInverso: string;
  logoSmall: string;
  logoFtd: string;
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Agosto de 2026 · Ed. #09</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #09 · 08 Jul – 03 Ago 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              A home virou o produto:<br />
              <span className="text-[#6B46C1]">a disputa saiu do conteúdo e foi para a camada que decide o que cada pessoa vê</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "A home por papel virou padrão — e o piso subiu para 150 milhões de usuários", desc: "O Classroom trocou a lista de turmas por painéis distintos para professor, aluno e gestor. Entregar a mesma tela para todos os perfis virou atraso competitivo visível.", cor: "border-[#6B46C1]" },
                { titulo: "A economia de modelos pequenos mudou a conta do custo por aluno", desc: "Gemini Flash e Flash-Lite a 350 tokens/s e 17% menos tokens, com o topo de linha atrasado. Roteamento entre modelos especializados virou decisão de arquitetura que define margem.", cor: "border-[#FF6B35]" },
                { titulo: "Segurança de agentes virou infraestrutura aberta de indústria", desc: "Mais de 70 empresas — NVIDIA, Microsoft, IBM, Red Hat, Hugging Face, Linux Foundation — criaram aliança para padronizar identidade, permissão, log e auditoria. Sem OpenAI, Google e Anthropic.", cor: "border-[#6B46C1]" },
                { titulo: "O MEC ganhou estrutura permanente de IA com o EducaLab", desc: "Laboratório de dados, serviços digitais e IA instituído por portaria, com ambiente controlado e previsão de parcerias. Estruturas assim precedem diretrizes, chamadas e financiamento.", cor: "border-[#6B46C1]" },
                { titulo: "O capital apostou em jornada adaptativa, não em catálogo", desc: "Coursera investiu US$ 100 milhões na LearnVector, de Andrew Ng, por um terço da empresa — um voto de quem tem o maior catálogo do mundo contra o próprio modelo de prateleira.", cor: "border-[#FF6B35]" },
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos da <span className="text-[#6B46C1]">Edição</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Classroom troca a lista de turmas por home que muda conforme o papel", desc: "Rollout mundial para mais de 150 milhões de usuários: professor vê fila de correção e insights; aluno vê entregas dos próximos 7 dias; gestor vê analytics da rede.", impacto: "A tela inicial deixou de ser índice e virou camada de decisão. O espaço aberto é personalizar além do cargo.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "Google lança três modelos pequenos e adia o topo de linha", desc: "Gemini 3.6 Flash, 3.5 Flash-Lite (350 tokens/s) e Flash Cyber, todos com janela de 1 milhão de tokens. O Pro segue atrasado.", impacto: "Confirma a economia de modelos pequenos: roteamento entre modelos especializados define o custo por aluno.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "MEC institui o EducaLab, laboratório permanente de dados e IA", desc: "Portaria nº 526 cria o laboratório com quatro eixos, ambiente digital controlado sob a LGPD e parcerias com universidades e empresas.", impacto: "Pela primeira vez o MEC tem estrutura fixa olhando IA — e uma porta de entrada para quem chegar com governança madura.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "Coursera investe US$ 100 milhões na LearnVector, de Andrew Ng", desc: "IA agêntica que planeja a trilha individual, adapta ao modo de aprender e acompanha até o domínio. Coursera fica com um terço do negócio.", impacto: "A próxima geração de plataformas organiza a experiência por lacuna e objetivo — não por grade de cursos.", cor: "from-purple-600 to-violet-600" },
                { num: "05", titulo: "Mais de 70 empresas criam aliança aberta para segurança de agentes", desc: "NVIDIA, Microsoft, IBM, Red Hat, Hugging Face, Mozilla e Linux Foundation vão construir em código aberto identidade, permissões, guardrails e auditoria.", impacto: "Governança de agentes virou padrão técnico aberto — vocabulário que rede e mantenedor podem exigir em contrato.", cor: "from-purple-700 to-purple-800" },
                { num: "06", titulo: "Brasil entra como fundador do bloco de governança de IA da China", desc: "A WAICO foi formalizada em Xangai com 29 países fundadores do Sul Global, sem G7 ou União Europeia.", impacto: "Soberania de dados e capacitação tendem a ganhar peso nos critérios de compra pública brasileira.", cor: "from-purple-600 to-purple-700" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-[#6B46C1] pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.impacto}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica &amp; FTD Com Você · Agosto de 2026 · Edição #09</p>
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
            <img src={mascote} alt="Lia — mascote do RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Agosto de 2026 · Ed. #10</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Edição #10 · 04 – 24 Ago 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              A mediação pedagógica deixou de ser a nossa reserva de valor<br />
              <span className="text-[#6B46C1]">e virou default da plataforma</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que mudou de <span className="text-[#6B46C1]">direção</span>
            </h2>
            <div className="space-y-4">
              {[
                { titulo: "A tese da edição anterior caiu em três semanas", desc: "Mediar o uso era a resposta que sobrava para quem está dentro da escola quando o acesso virou grátis. O ChatGPT for Teens tornou a trava de atalho nativa, gratuita e ligada por padrão.", cor: "border-[#6B46C1]" },
                { titulo: "Duas linhas de receita viraram produto gratuito de terceiro", desc: "Acesso a IA de ponta e formação docente genérica em IA passaram a existir de graça e com qualidade na mesma quinzena, vindos de fora do setor educacional.", cor: "border-[#FF6B35]" },
                { titulo: "A conversa saiu de quantos usam para que efeito produz", desc: "Estudo longitudinal com 26.811 alunos por 30 meses: a IA subiu a nota da tarefa em 18% e derrubou a da prova em cerca de 20% em seis meses. Cerca de 80% da perda se concentra em quem terceiriza a tarefa.", cor: "border-[#6B46C1]" },
                { titulo: "O vácuo de governança ganhou tamanho comparável entre países", desc: "Maior base já reunida sobre IA no ensino superior: 88% dos estudantes e 77% dos docentes usando, com a América Latina em 92% e 79%. Só 31% dos docentes participam da política de IA da própria instituição.", cor: "border-[#FF6B35]" },
                { titulo: "Esperar a norma brasileira deixou de ser estratégia viável", desc: "Terceira edição consecutiva sem homologação do parecer de IA, agora com as câmaras do CNE em recomposição. A indefinição virou variável de planejamento.", cor: "border-[#6B46C1]" },
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinais */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Sinais da Edição</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Cinco <span className="text-[#6B46C1]">sinais</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "A plataforma passou a mediar o uso sozinha e por padrão", desc: "ChatGPT for Teens aplicado automaticamente de 13 a 17 anos, com Study Mode padrão, detecção de atalho na tarefa e Study Hours definidas por pais. Junto vieram os plugins educacionais da OpenAI e o hub de estudo do Gemini.", impacto: "As três maiores empresas de IA chegaram ao mesmo desenho: chat aberto não é formato de estudo. Mediar genericamente deixou de diferenciar.", cor: "from-purple-700 to-purple-800" },
                { num: "02", titulo: "A evidência nomeou qual comportamento prejudica", desc: "Working paper do CEPR com 26.811 estudantes por 30 meses. Cerca de 80% da perda se concentra em quem entrega rápido demais com nota alta — marcador observável de terceirização.", impacto: "Não existe efeito da IA em geral: existe efeito de um padrão específico, que pode ser detectado e interrompido.", cor: "from-purple-600 to-purple-700" },
                { num: "03", titulo: "O vácuo de governança ganhou recorte latino-americano", desc: "45.398 respostas em 35 países. Adoção quase universal convivendo com avaliação sem orientação adequada e docentes fora da construção da política institucional.", impacto: "Política escrita sem o professor não muda prática de sala. O problema é de processo, não de texto.", cor: "from-purple-600 to-violet-600" },
                { num: "04", titulo: "Os sistemas de ensino brasileiros convergiram no mesmo desenho", desc: "Bernoulli Reload com portfólio segmentado por público, Cosmos do Poliedro restrito ao acervo autoral, Meu Arco integrando camadas e Moderna Core com IA nos bastidores.", impacto: "Convergência dessa ordem não é tendência, é padrão consolidado — e portanto custo de entrada.", cor: "from-purple-500 to-purple-600" },
                { num: "05", titulo: "A regulação travou de novo, com o colegiado se reorganizando", desc: "Portaria MEC nº 664 abriu a recomposição das câmaras do CNE enquanto o parecer de IA seguia aguardando homologação.", impacto: "Deixou de ser lentidão de trâmite e passou a ser instabilidade institucional. Produto precisa de governança configurável.", cor: "from-purple-700 to-purple-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="border-l-2 border-[#6B46C1] pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Leitura estratégica</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.impacto}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span className="text-sm text-[#C2410C] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
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
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
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
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
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
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascoteInverso} alt="Lia — mascote do RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">RADAR — Inteligência Estratégica de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica &amp; FTD Com Você · Agosto de 2026 · Edição #10</p>
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
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
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
        mascote={liaHeader}
        mascoteInverso={liaFooter}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
      />
    );
  }

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-white">
      <a
        href="#insight"
        onClick={e => { e.preventDefault(); scrollToSection('insight'); }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#6B46C1] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Pular para o conteúdo
      </a>
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white/96 backdrop-blur-md z-50 border-b border-gray-100/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Linha 1 — identidade + direita */}
          <div className="flex items-center justify-between h-12 md:h-14">

            {/* Identidade — mascote + nome */}
            <div className="flex items-center gap-3">
              <img src={liaHeader} alt="" className="h-10 md:h-11 w-auto flex-shrink-0" />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-sm md:text-base font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>RADAR</span>
                <span className="hidden md:inline text-[11px] text-gray-600 font-normal mt-0.5">Inteligência Estratégica de IA na Educação</span>
              </div>
            </div>

            {/* Direita — edição + logos parceiros */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex flex-col items-end leading-none">
                <span className="text-[11px] font-bold text-[#6B46C1] uppercase tracking-widest">Edição #11</span>
                <span className="text-[11px] text-gray-600 font-medium mt-0.5">25 Ago – 10 Set 2026</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <img src={logoIonica} alt="Iônica" className="h-5 w-auto" style={{ filter: 'grayscale(100%) opacity(0.45)' }} />
              <div className="w-px h-4 bg-gray-200" />
              <img src={logoFTD} alt="FTD Com Você" className="h-4 w-auto" style={{ filter: 'grayscale(100%) opacity(0.40)' }} />
            </div>
          </div>

          {/* Linha 2 — nav centralizada com respiro */}
          <nav aria-label="Seções desta edição" className="flex items-center justify-start md:justify-center gap-1 pb-2 overflow-x-auto flex-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {secoesVisiveis.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`px-3 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? 'bg-[#6B46C1] text-white'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-[#6B46C1]'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* ── INSIGHT DA QUINZENA ── */}
      <section id="insight" className="min-h-screen flex items-center justify-center pt-44 md:pt-48 px-6 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C2410C] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA QUINZENA</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl text-gray-900 font-bold mb-8 leading-tight">
              A regra saiu — e ela não proíbe a IA.<br />
              <span className="text-[#6B46C1]">Proíbe delegar a decisão</span><br />
              <span className="text-[#C2410C]">sobre a vida escolar do aluno</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-left max-w-[68ch] mx-auto">
                Depois de quatro edições travado na última milha, o parecer do CNE foi aprovado em <strong className="text-[#6B46C1]">1º de setembro</strong>. E o objeto da vedação não é a ferramenta: é quem assina o resultado. IA não pode corrigir redação nem prova dissertativa, detector de texto não pode fundamentar punição sozinho e criança até o 5º ano não usa IA generativa sem o professor. Nas palavras do relator, <strong className="text-[#6B46C1]">a palavra final sobre o desempenho do aluno cabe ao professor, não à máquina</strong>. No dia seguinte, a maior rede escolar dos Estados Unidos suspendeu IA generativa até o 8º ano. Dois sistemas, duas jurisdições, a mesma conclusão.
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm text-left">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">A tensão que organiza esta edição</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50/60 rounded-xl p-5 border border-green-100">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wide">O que a norma confirma</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Quem já operava com humano no laço e trilha auditável está conforme por desenho. A exigência que virou lei é exatamente a arquitetura que os melhores produtos do setor já tinham escolhido — e que agora deixa de ser diferencial e passa a ser piso.
                    </p>
                  </div>
                  <div className="bg-red-50/60 rounded-xl p-5 border border-red-100">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide">O que ela invalida</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Quem vendia correção automática de redação, detecção de plágio por IA como prova ou tutor autônomo para os anos iniciais tem um prazo para refazer o produto. Não é ajuste de comunicação: é troca da peça que decide.
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-purple-50 rounded-xl p-5 border-l-4 border-[#6B46C1]">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-bold text-[#6B46C1]">A conclusão:</span> a régua deixou de ser <em>usa ou não usa IA</em> e passou a ser <em>quem assina a decisão</em>. Assinatura humana com rastro deixou de ser boa prática e virou requisito de conformidade — com relógio rodando a partir da homologação.
                  </p>
                </div>
              </div>
            </div>

            <motion.div style={{ opacity }} className="mt-12">
              <ChevronDown className="w-8 h-8 text-[#6B46C1] mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SELETOR DE MODO DE LEITURA ── */}
      <section className="py-10 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-sm font-bold text-gray-900 mb-1">Como você quer ler esta edição?</h2>
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
                      ? 'border-[#6B46C1] bg-purple-50/50 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={selecionado ? 'text-[#6B46C1]' : 'text-gray-600'}>{opcao.icone}</span>
                      <span className={`font-bold text-sm ${selecionado ? 'text-[#6B46C1]' : 'text-gray-900'}`}>
                        {opcao.titulo}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
                        selecionado ? 'bg-[#6B46C1] border-[#6B46C1]' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {selecionado && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </span>
                  </div>
                  <p className={`text-xs font-semibold mb-2 ${selecionado ? 'text-[#C2410C]' : 'text-gray-600'}`}>
                    {opcao.tempo}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{opcao.desc}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              O que mudou de direção e <span className="text-[#6B46C1]">o que isso obriga a decidir</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-3xl">
              O que a liderança precisa entender em dois minutos, com a decisão que cada ponto força.
            </p>

            <div className="space-y-4">
              {[
                {
                  tag: "Hipótese endurecida",
                  tagCor: "bg-purple-100 text-purple-700",
                  conclusao: "A mediação saiu do campo competitivo e entrou no campo legal — com o eixo deslocado",
                  raciocinio: "A edição passada registrou que mediar o uso tinha virado default de plataforma, e portanto commodity. A norma vai além e muda o eixo: o que ela regula não é mediar o estudo, é impedir que a máquina assine a decisão avaliativa. Deixou de ser disputa de produto e virou requisito de conformidade.",
                  decisao: "Reclassificar o roadmap por quem assina cada decisão que o produto toma sobre o aluno — não por funcionalidade."
                },
                {
                  tag: "Relógio no calendário",
                  tagCor: "bg-orange-100 text-orange-700",
                  conclusao: "O setor ganhou o primeiro prazo regulatório concreto: doze meses após a homologação",
                  raciocinio: "Por três edições o parecer foi tratado como indefinição de horizonte aberto, e planejar contando com ele era aposta. Aprovado, ele passa a ter contagem: assim que o ministro assinar, escolas, universidades e redes têm um ano para adequar procedimento. O risco inverteu de lado — agora o custo está em não ter começado.",
                  decisao: "Definir agora o que precisa mudar no produto e no contrato, para não descobrir isso no mês onze."
                },
                {
                  tag: "Categoria vedada",
                  tagCor: "bg-red-100 text-red-700",
                  conclusao: "Correção automática de texto autoral virou produto proibido, e detector de IA perdeu força probatória",
                  raciocinio: "Não é restrição de uso: é vedação de finalidade. IA não pode corrigir nem atribuir nota a redação e prova dissertativa em nenhuma etapa, e nenhum detector pode sustentar punição por si só. Em prova objetiva o apoio segue permitido, desde que a validação humana seja documentada — o que transforma registro em obrigação, não em recurso.",
                  decisao: "Auditar onde o produto decide sozinho e inserir validação humana registrável antes de a norma entrar em vigor."
                },
                {
                  tag: "Mercado fechado",
                  tagCor: "bg-gray-200 text-gray-700",
                  conclusao: "A faixa dos anos iniciais deixou de ser mercado endereçável para IA autônoma",
                  raciocinio: "Aqui e fora do país a decisão foi a mesma na mesma semana, por caminhos independentes: no Brasil, uso de IA generativa até o 5º ano só mediado pelo professor; em Nova York, moratória de um ano até o 8º ano, com desligamento das funções de IA de mais de trinta programas já autorizados. Tutor autônomo para criança pequena encolheu por decisão administrativa, não por falta de demanda.",
                  decisao: "Reposicionar produto infantil de autônomo para instrumento do professor, e tratar desligamento remoto de função como requisito técnico."
                },
                {
                  tag: "Novo argumento",
                  tagCor: "bg-green-100 text-green-700",
                  conclusao: "Conformidade documentada virou argumento comercial antes de virar exigência de contrato",
                  raciocinio: "Quem já mantinha autoria humana no centro com rastreabilidade da operação chega conforme por desenho e pode provar. Como a norma pede supervisão humana contínua e relatório nos usos de alto risco, a capacidade de demonstrar o rastro passa a valer na mesa de compra — e não é algo que se constrói em semanas.",
                  decisao: "Transformar o rastro que já existe em peça de proposta comercial, e onde não existe, priorizá-lo acima de nova funcionalidade."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${item.tagCor}`}>{item.tag}</span>
                  </div>
                  <p className="font-bold text-gray-900 mb-2 text-base">{item.conclusao}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.raciocinio}</p>
                  <div className="bg-purple-50 rounded-lg px-4 py-2.5">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#6B46C1]">Decisão que isso força:</span> {item.decisao}
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
      <section id="movimentos" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Sinais da Quinzena</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Cinco sinais, <span className="text-[#6B46C1]">uma direção</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-3xl">
              Cinco movimentos que mudaram de direção — cada um reunindo os acontecimentos relacionados, com o que sustenta a leitura e o que decorre dela.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "O CNE aprovou as diretrizes e definiu o que a máquina não pode decidir",
                  empresa: "CNE / MEC",
                  data: "1 set/2026",
                  consolida: "Aprovação do parecer em plenário · quatro níveis de risco · vedações de correção e de detector · restrição de uso autônomo até o 5º ano",
                  resumo: "O Conselho Nacional de Educação aprovou em 1º de setembro as diretrizes nacionais para uso de IA em todos os níveis, etapas e modalidades. A norma classifica as aplicações em quatro faixas: baixo risco (organização de material, acessibilidade, tradução, planejamento de aula), risco moderado (interação direta com o estudante e recomendação, como tutor virtual e assistente de escrita), alto risco (interferência ativa na vida acadêmica, como correção de prova objetiva e monitoramento biométrico, exigindo avaliação de impacto, relatório de dados e supervisão humana contínua) e risco excessivo (pontuação social, vigilância emocional, perfilização psicológica ou biométrica com fim classificatório ou disciplinar). Fica vedado usar IA para corrigir e atribuir nota a redações e provas dissertativas em qualquer etapa; em prova objetiva o apoio é permitido, mas o resultado precisa de validação humana documentada. Nenhuma punição acadêmica ou disciplinar pode se fundamentar apenas em detector de texto gerado por IA. Até o 5º ano, o uso de IA generativa só é admitido em atividade conduzida pelo professor. O relator, Celso Niskier, sustentou que a palavra final sobre o desempenho discente cabe ao professor e não à máquina. O texto ainda depende de homologação do MEC; a partir dela, as instituições têm doze meses para se adaptar.",
                  impacto: "O objeto da regulação não é a ferramenta, é a delegação. A norma não pergunta se a escola usa IA — pergunta quem assina o que a IA produz sobre a trajetória do aluno. Isso reorganiza a categoria: produtos que decidem viram alto risco com obrigação de rastro, e produtos que decidem sobre texto autoral simplesmente saem do mercado. Vale registrar a tensão dentro do próprio Estado: em junho o Inep havia anunciado prova de conceito com empresas para usar IA na correção da redação do ENEM, justamente a finalidade que agora fica vedada no ensino.",
                  professor: "Ganha respaldo normativo para recusar nota atribuída por máquina e para exigir o registro de quem validou o quê.",
                  aluno: "Passa a ter proteção explícita contra punição baseada só em detector — e perde o acesso autônomo à IA generativa até o 5º ano.",
                  gestor: "Tem doze meses após a homologação para adequar procedimento, contrato e política, com relatório exigível nos usos de alto risco.",
                  roadmap: "Mapear cada decisão automatizada do produto por faixa de risco; inserir validação humana registrável onde hoje a máquina decide sozinha.",
                  fonte: "https://g1.globo.com/educacao/noticia/2026/09/01/cne-para-uso-de-ia-em-escolas-e-universidades.ghtml",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "A maior rede escolar dos Estados Unidos suspendeu IA generativa até o 8º ano",
                  empresa: "Nova York · Chancellor Samuels",
                  data: "2 set/2026",
                  consolida: "Moratória de um ano na maior rede pública do país · cerca de 600 mil alunos · desligamento das funções de IA de mais de 38 programas autorizados · módulos de pensamento crítico no ensino médio",
                  resumo: "Um dia depois da decisão brasileira, o prefeito Zohran Mamdani e o chanceler de educação Kamar Samuels anunciaram a moratória mais ampla dos Estados Unidos para IA generativa voltada ao estudante: um ano de suspensão, válido no ano letivo 2026-2027, para alunos do 2-K ao 8º ano. A medida alcança cerca de 600 mil estudantes, quase dois terços da matrícula da rede. Como parte da implementação, a prefeitura informou que vai descontinuar ou desativar os componentes de IA de mais de 38 programas já autorizados que não atendam aos novos padrões de segurança e supervisão. No ensino médio, entram módulos semestrais de pensamento crítico sobre IA, pilotos limitados em um número pequeno de turmas e restrições de tempo de tela por faixa de idade.",
                  impacto: "Duas das maiores jurisdições educacionais das Américas chegaram à mesma restrição por faixa etária em 48 horas, por caminhos independentes — e isso transforma o que parecia posição pedagógica em consenso regulatório emergente. O detalhe mais duro para fornecedor não é a moratória, é o desligamento de função em programas já contratados: a conformidade passou a ser condição de permanência, não só de venda.",
                  professor: "Volta a ser o único canal de uso de IA para as séries iniciais, com material de pensamento crítico entrando no ensino médio.",
                  aluno: "Perde o acesso direto por um ano letivo inteiro na faixa até o 8º ano, com uso remanescente apenas mediado.",
                  gestor: "Precisa saber quais funções de IA dos seus contratos podem ser desligadas remotamente — e se o fornecedor consegue fazer isso por faixa etária.",
                  roadmap: "Desligamento granular de função por série e por rede como requisito de arquitetura, não como configuração manual de suporte.",
                  fonte: "https://www.cnn.com/2026/09/02/tech/new-york-city-classroom-ai-ban",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "A FTD assumiu o controle da Estuda.com e comprou capacidade de avaliação por IA",
                  empresa: "FTD Educação · Estuda.com",
                  data: "Fim de ago/2026",
                  consolida: "Aquisição do controle acionário total · consolidação de parceria de 2020 · plataforma de criação, correção e análise de avaliações · meta de dobrar de tamanho até 2030",
                  resumo: "A FTD Educação anunciou a aquisição do controle acionário total da Estuda.com, consolidando uma parceria firmada em 2020; o valor não foi divulgado. A plataforma permite criar, corrigir e analisar avaliações escolares e simulados, e reúne mais de 1.300 escolas parceiras, mais de 14 milhões de estudantes alcançados e mais de 700 milhões de questões respondidas. Entre os diferenciais está a criação de provas inclusivas com apoio de IA, com adaptações para dislexia, TDAH e autismo, além do uso de IA para identificar necessidades acadêmicas e apoiar planos de estudo personalizados. A Estuda.com segue operando de forma independente, com marca, equipe e liderança próprias, e o fundador Carlos Pirovani permanece como CEO. A operação integra a estratégia de investimento da FTD em IA aplicada à educação e a meta de dobrar seu tamanho e seu impacto até 2030.",
                  impacto: "Um grupo editorial comprou capacidade de avaliação por IA no mesmo mês em que avaliação por IA passou a ser regulada — e é aí que a leitura fica interessante. A norma não fecha esse mercado: fecha a correção automática de texto autoral e mantém a prova objetiva com validação humana documentada. Ou seja, o ativo continua utilizável, mas o valor migra de corrigir para instrumentar: quem tiver registro de validação, adaptação por necessidade e análise de item chega conforme; quem só automatiza a nota, não.",
                  professor: "Tende a receber banco de itens e adaptação por necessidade específica — o tipo de apoio que a norma classifica como baixo risco.",
                  aluno: "Prova adaptada à sua condição deixa de depender de trabalho manual do professor, o que amplia acesso real à avaliação.",
                  gestor: "Consolidação editorial em avaliação significa menos fornecedores e mais dependência: vale checar cláusula de conformidade com a nova norma.",
                  roadmap: "Tratar avaliação como camada instrumentada e auditável, não como motor de nota automática — é o que sobrevive à regra.",
                  fonte: "https://www.meioemensagem.com.br/marketing/ftd-educacao-e-a-nova-controladora-da-estuda-com",
                  color: "from-purple-600 to-violet-600",
                  disclosure: "A FTD Com Você coedita este radar. O movimento entra por relevância de mercado e é analisado pelo mesmo critério aplicado aos demais players."
                },
                {
                  titulo: "O Poliedro foi premiado por um projeto de IA que mantém a autoria humana no centro",
                  empresa: "Poliedro · Premiação Impacto Brasil",
                  data: "Ago–set/2026",
                  consolida: "Terceiro lugar na categoria Escala da Premiação Impacto Brasil 2026 · projeto Supernova · 93% de assertividade em validação · rastreabilidade da operação editorial",
                  resumo: "O Poliedro conquistou o terceiro lugar na categoria Escala da Premiação Impacto Brasil 2026, realizada pelo Agile Trends, com a Supernova — iniciativa que combina práticas ágeis, inteligência artificial e curadoria especializada na produção de conteúdo didático. Desenvolvida pelas áreas de Inovação & Aprendizagem e Produto Editorial, que reúnem quase 300 profissionais, a Supernova habilita novas experiências de gestão de conteúdo e amplia a rastreabilidade na operação de produtos digitais e editoriais. O eixo declarado do projeto é a centralidade da autoria humana ampliada por IA: a tecnologia aumenta o refinamento do material, enquanto curadoria e definições editoriais permanecem sob responsabilidade humana. Nas fases de prova de conceito, testes e validação humana, o projeto registrou 93% de assertividade em tarefas como classificação de conteúdo e verificação de precisão factual.",
                  impacto: "É o caso brasileiro que já operava a arquitetura que a norma acabou de exigir, e com número para mostrar. Vale notar o que foi premiado: não o volume produzido, mas o desenho em que a máquina refina e o humano decide, com rastro. Enquanto o setor discute como se adequar, existe um par direto que pode dizer que se adequou antes de haver regra — e conformidade demonstrável com histórico é a única que não se improvisa em doze meses.",
                  professor: "O material que chega à sala mantém decisão editorial humana, o que sustenta a confiança pedagógica que a norma quer preservar.",
                  aluno: "Efeito indireto: conteúdo com verificação factual registrada reduz o risco de aprender com erro gerado por máquina.",
                  gestor: "Passa a ter um critério concreto para cobrar do fornecedor — não se ele usa IA, mas se consegue mostrar onde o humano decidiu.",
                  roadmap: "Instrumentar rastreabilidade na produção de conteúdo agora: é o ativo que a norma vai pedir e que não se constrói retroativamente.",
                  fonte: "https://www.jornalrmc.com.br/poliedro-e-premiado-por-projeto-de-ia-que-potencializa-a-producao-de-conteudo-editorial-com-foco-na-autoria-humana/",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  titulo: "A formação docente virou obrigação curricular — e a oferta já tem dono",
                  empresa: "CNE · Google for Education · imprensa setorial",
                  data: "24 ago – set/2026",
                  consolida: "Exigência da norma nas licenciaturas e na formação continuada · reportagem setorial sobre quem forma o professor · nova série de formação e certificação do Google anunciada para setembro",
                  resumo: "Além das vedações, a norma do CNE cria dever de formação: os cursos de licenciatura passam a incluir uso pedagógico das novas tecnologias, análise de dados escolares e avaliação ética de ferramentas, e as instituições ficam obrigadas a promover formação continuada dos profissionais de educação. O problema é quem está ocupando essa oferta. Em 24 de agosto, a Revista Educação publicou reportagem perguntando exatamente isso — quem está formando o professor em IA no Brasil. E em setembro o Google anunciou nova rodada da sua série de formação para educadores, com trilhas e certificação gratuitas, incluindo um dia intensivo de badges em 19 de setembro.",
                  impacto: "A norma criou uma demanda obrigatória de formação sem criar a oferta correspondente, e o vácuo já está sendo preenchido por quem tem escala e distribuição gratuita. Isso repete, agora com força de lei, o movimento que o radar registrou na edição anterior: formação genérica virou produto subsidiado de fora do setor. A diferença é que agora a escola não pode mais escolher não formar — e vai formar com quem estiver disponível.",
                  professor: "Passa a ter direito a formação continuada institucional, com risco de recebê-la desconectada do material e da política da própria escola.",
                  aluno: "Depende de professor formado para ter qualquer acesso mediado à IA nos anos iniciais — a formação virou pré-requisito do acesso dele.",
                  gestor: "A obrigação de formar é dele. Terceirizar para catálogo gratuito resolve o custo e não resolve a aderência ao currículo adotado.",
                  roadmap: "Formação certificada ancorada no material adotado e na política configurada da rede: é a lacuna que o catálogo gratuito estruturalmente não cobre.",
                  fonte: "https://revistaeducacao.com.br/2026/08/24/inteligencia-artificial-na-escola/",
                  color: "from-purple-700 to-purple-800"
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
                        <span className="inline-flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">
                          <Users className="w-3 h-3" /> {m.empresa}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                          <Calendar className="w-3 h-3" /> {m.data}
                        </span>
                      </div>
                      <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#6B46C1] transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#6B46C1] bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Sinal {i + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 leading-snug">{m.titulo}</h3>
                    <div className="flex items-start gap-1.5 mb-4 border-l-2 border-gray-200 pl-3">
                      <Library className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                      <p className="text-[11px] text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-600">Consolida:</span> {m.consolida}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{m.resumo}</p>
                    {m.disclosure && (
                      <div className="flex items-start gap-1.5 mb-4 border-l-2 border-amber-300 pl-3">
                        <AlertCircle className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                        <p className="text-[11px] text-gray-600 leading-relaxed">
                          <span className="font-semibold text-gray-600">Declaração de interesse:</span> {m.disclosure}
                        </p>
                      </div>
                    )}
                    <div className="border-l-2 border-[#6B46C1] pl-4 mb-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Leitura estratégica</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{m.impacto}</p>
                    </div>
                    <div className="border-l-2 border-[#C2410C] pl-4 space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#C2410C]">Consequência prática</p>
                      {[
                        { label: 'Professor', valor: m.professor },
                        { label: 'Aluno', valor: m.aluno },
                        { label: 'Gestor', valor: m.gestor },
                        { label: 'Roadmap', valor: m.roadmap },
                      ].map(linha => (
                        <p key={linha.label} className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                        </p>
                      ))}
                    </div>
                    <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-5 pt-4 border-t border-gray-100 w-full text-[#6B46C1] hover:text-[#4C3290] transition-colors font-medium text-sm">
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
      <section id="ausencias" className="pb-24 px-6 bg-purple-50/30">
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
            <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-3">
              O espaço que <span className="text-[#6B46C1]">ninguém ocupou</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Cada item abaixo era razoável esperar nesta janela, não veio, e por isso segue disponível para quem chegar primeiro.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  cat: "A homologação não saiu na mesma semana da aprovação",
                  nota: "O parecer foi aprovado em plenário em 1º de setembro e segue dependendo da assinatura do ministro para entrar em vigor. Até o fechamento desta edição não houve publicação da homologação nem sinalização de data.",
                  leitura: "O relógio de doze meses só começa a correr depois da assinatura. Quem se mover antes dela compra tempo de graça; quem esperar perde a diferença.",
                  janela: "Janela curta"
                },
                {
                  cat: "Nenhum fornecedor publicou mapa de conformidade por faixa de risco",
                  nota: "A norma classifica aplicações em quatro níveis e exige avaliação de impacto, relatório e supervisão contínua no alto risco. Nenhum player brasileiro publicou onde seus próprios produtos se encaixam nessa classificação.",
                  leitura: "É a lacuna mais barata de ocupar e a de maior efeito comercial: quem publicar primeiro define o formato que os concorrentes terão de responder.",
                  janela: "Janela curta"
                },
                {
                  cat: "Ninguém anunciou reposicionamento do produto de correção automática",
                  nota: "Correção e atribuição de nota por IA em redação e prova dissertativa passou a ser vedada em todas as etapas, e nenhuma empresa que oferece isso comunicou mudança de escopo, migração de função ou prazo próprio de adequação.",
                  leitura: "Silêncio de quem foi diretamente afetado. Cria espaço para quem chegar dizendo o que passou a fazer em vez do que deixou de fazer.",
                  janela: "Janela aberta"
                },
                {
                  cat: "O Inep não se manifestou sobre a prova de conceito da redação do ENEM",
                  nota: "Em junho o instituto anunciou teste com empresas para usar IA no processo de correção da redação, com foco em acelerar o espelho e a devolutiva pedagógica. Após a decisão do CNE, não houve pronunciamento sobre continuidade, escopo ou compatibilidade.",
                  leitura: "Tensão não resolvida dentro do próprio Estado. Como a devolutiva pedagógica não é atribuição de nota, há um caminho técnico — mas ele precisa ser dito, e ainda não foi.",
                  janela: "Monitorar"
                },
                {
                  cat: "Nenhuma rede brasileira anunciou desligamento de função de IA por faixa etária",
                  nota: "Nova York especificou o desligamento de componentes de IA em mais de trinta programas já autorizados. Aqui, com a vedação até o 5º ano aprovada, nenhuma secretaria ou grupo informou como vai operacionalizar isso nos contratos vigentes.",
                  leitura: "A vedação é conhecida e o mecanismo de cumprimento não existe. Quem entregar o desligamento granular pronto resolve um problema que a rede ainda não sabe que terá.",
                  janela: "Janela aberta"
                },
                {
                  cat: "Nenhuma evidência longitudinal brasileira entrou em campo",
                  nota: "Segunda edição consecutiva registrando a mesma ausência. Com norma aprovada e prazo definido, nenhuma rede, grupo ou universidade anunciou estudo de efeito sobre a própria base instalada.",
                  leitura: "A norma vai exigir avaliação de impacto no alto risco. Quem já tiver linha de base terá o que declarar; quem não tiver vai declarar intenção.",
                  janela: "Custo de atraso alto"
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-5 hover:border-[#FF6B35] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                      item.janela === 'Janela curta' ? 'bg-red-100 text-red-700'
                      : item.janela === 'Janela aberta' ? 'bg-orange-100 text-orange-700'
                      : item.janela === 'Custo de atraso alto' ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600'
                    }`}>{item.janela}</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.cat}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.nota}</p>
                  <div className="bg-orange-50/60 rounded-lg px-3 py-2">
                    <p className="text-[11px] text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#C2410C]">Por que a vaga importa:</span> {item.leitura}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Temas Recorrentes</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Estrutural, emergente ou <span className="text-[#6B46C1]">encerrado?</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              O que reaparece ciclo após ciclo merece roadmap; o que apareceu uma vez merece monitoramento. Nesta edição, uma linha que atravessou cinco edições finalmente se resolveu.
            </p>

            <div className="flex items-center gap-5 mb-10 flex-wrap">
              {[
                { t: 'Resolvido', d: 'a linha chegou ao seu desfecho', c: 'bg-green-100 text-green-700' },
                { t: 'Estrutural', d: 'atravessa 3+ edições — entra no roadmap', c: 'bg-red-100 text-red-700' },
                { t: 'Emergente', d: '2 edições ou aceleração recente — posicionar', c: 'bg-orange-100 text-orange-700' },
                { t: 'Pontual', d: 'aparição isolada — monitorar', c: 'bg-gray-200 text-gray-700' },
              ].map(l => (
                <div key={l.t} className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${l.c}`}>{l.t}</span>
                  <span className="text-xs text-gray-600">{l.d}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {[
                {
                  tema: "A regulação brasileira travada na última milha",
                  tipo: "Resolvido",
                  trilha: "#07 CNE aprova e abre consulta → #08 consulta encerrada → #09 sem homologação → #10 sem homologação e câmaras em recomposição → #11 aprovado em plenário com prazo de doze meses",
                  leitura: "Cinco edições acompanhando a mesma pendência, e o desfecho contrariou a leitura mais comum: não veio uma regra permissiva de compromisso, veio uma regra com vedações específicas e prazo. A recomposição das câmaras, que na edição passada parecia sinal de mais atraso, antecedeu a aprovação em três semanas. Fica um aprendizado de método: instabilidade institucional não é sinônimo de paralisia.",
                  cor: "bg-green-50 border-green-200",
                  badge: "bg-green-100 text-green-700"
                },
                {
                  tema: "Quem assina a decisão sobre o aluno",
                  tipo: "Estrutural",
                  trilha: "#09 a interface passa a decidir o que cada papel vê → #10 a plataforma passa a conter o atalho por conta própria → #11 a norma proíbe a máquina de assinar avaliação e punição",
                  leitura: "Três edições seguidas em que o objeto de disputa foi o mesmo, subindo de camada: primeiro quem decide o que aparece, depois quem decide o que é permitido, agora quem responde pelo resultado. É a linha mais consistente do radar e a que passou a ter consequência jurídica.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Restrição de acesso por faixa etária",
                  tipo: "Emergente",
                  trilha: "#10 experiência dedicada por idade com trava padrão em produto de massa → #11 vedação normativa até o 5º ano no Brasil e moratória até o 8º ano em Nova York",
                  leitura: "Passou de decisão de produto de uma empresa a decisão de política pública em duas jurisdições, em uma única edição. Ainda são dois ciclos, mas a aceleração e a convergência entre jurisdições independentes tiram isso do campo do acontecimento isolado.",
                  cor: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-100 text-orange-700"
                },
                {
                  tema: "Evidência de aprendizagem como campo de disputa",
                  tipo: "Estrutural",
                  trilha: "#08 admissão de uso real baixo → #09 pesquisa longitudinal acoplada a rollout nacional → #10 penalidade medida em coorte de 30 meses → #11 avaliação de impacto exigida por norma no alto risco",
                  leitura: "Quatro edições subindo a régua, e agora a exigência sai do campo reputacional e entra no campo do dever legal. A ausência registrada nesta edição fica mais custosa: quem não tiver linha de base quando a norma vigorar não tem como produzir a avaliação retroativamente.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Formação docente como camada de produto",
                  tipo: "Estrutural",
                  trilha: "#08 ferramenta gratuita para professor → #09 formação como gargalo em benchmark internacional → #10 catálogo gratuito consolidado por concorrente indireto → #11 formação continuada vira obrigação institucional",
                  leitura: "Quatro edições e uma inversão completa de natureza: era receita potencial, virou custo subsidiado por quem vem de fora do setor e agora é dever da instituição. O tema deixou de ser oportunidade e passou a ser obrigação com oferta capturada.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Consolidação editorial por compra de capacidade técnica",
                  tipo: "Emergente",
                  trilha: "#08 primeiro M&A de IA em educação da América Latina → #09 e #10 sem novas transações → #11 grupo editorial assume controle de plataforma de avaliação com IA",
                  leitura: "A tese sumiu por duas edições e voltou com uma diferença relevante: não é aquisição de time, é aquisição de base instalada e de função regulada. Sai do registro de escassez de talento e entra no de posicionamento diante da norma.",
                  cor: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-100 text-orange-700"
                },
                {
                  tema: "Interfaces novas: voz, agente executor e robótica",
                  tipo: "Pontual",
                  trilha: "#09 voz em tempo real e banca oral por IA → #10 robô humanoide com conversação em português → #11 sem desdobramento na janela",
                  leitura: "Terceira edição em que a categoria aparece com roupagem diferente e nenhuma evidência de aprendizagem associada, agora seguida de silêncio. Segue como termômetro de orçamento de inovação, não como decisão de roadmap.",
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
                    <h3 className="font-bold text-gray-900 text-lg leading-snug">{item.tema}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${item.badge}`}>
                      {item.tipo}
                    </span>
                  </div>
                  <div className="bg-white/70 rounded-lg px-4 py-2.5 mb-3">
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.trilha}</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.leitura}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONCORRÊNCIA ── */}
      <section id="concorrencia" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Concorrência</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Quem chega <span className="text-[#6B46C1]">conforme</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Concorrência direta é quem disputa a mesma escola, rede e orçamento. Nesta edição interessa quem já opera com decisão humana registrável, quem tem produto para refazer dentro do prazo e o que cada um já colocou dentro do produto.
            </p>

            {/* Mercado privado */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-[#6B46C1] rounded-full" />
              <h3 className="text-xl font-bold text-gray-900">Concorrência direta — mercado privado</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-12 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50">
                    {["Player", "Grupo / Soluções", "Movimento observado", "Posição diante da norma", "Exposição", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Poliedro",
                      grupo: "Cosmos · Polígono · Conviver · Sabiá",
                      movimento: "Premiado por projeto que mantém curadoria e definição editorial humanas, com rastreabilidade da operação e 93% de assertividade em validação",
                      estrategia: "O melhor posicionado da janela: já operava a arquitetura que a norma passou a exigir e tem histórico documentado para provar. Conformidade com rastro é o único tipo que não se improvisa em doze meses",
                      exposicao: "Baixa", impacto: "Alto"
                    },
                    {
                      player: "Santillana",
                      grupo: "Moderna Core",
                      movimento: "Ecossistema com IA operando nos bastidores, sem protagonismo de interface e sem se oferecer como atalho ao aluno",
                      estrategia: "Posicionamento de IA invisível envelhece bem: não decide sobre o aluno na superfície e por isso tende a cair em faixas de risco mais baixas. A fragilidade é ter menos superfície própria para registrar validação humana",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                    {
                      player: "Bernoulli",
                      grupo: "Sistema de ensino próprio",
                      movimento: "Portfólio segmentado por público cobrindo professor, aluno e mantenedor, com camada de inteligência sobre microdados públicos",
                      estrategia: "Cobertura de públicos é vantagem, mas amplia a superfície a auditar: tutoria e prática para aluno caem em risco moderado e diagnóstico que orienta decisão pedagógica tende ao alto. Precisa mapear faixa por produto",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Arco Educação",
                      grupo: "SAS, SAE Digital, Geekie",
                      movimento: "Camada única de gestão, ensino, comunicação e financeiro; literacia em IA incorporada ao programa de competências",
                      estrategia: "O único que já tratava IA como competência a ser ensinada e avaliada — exatamente o que a norma agora exige na formação. Em contrapartida, plataforma adaptativa que recomenda trilha entra em risco moderado com dever de supervisão",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Somos Educação",
                      grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                      movimento: "Plurall IA com foco em produtividade docente, geração de questões e apoio ao planejamento",
                      estrategia: "Geração de material para o professor é justamente o que a norma classifica como baixo risco, o que protege o núcleo do portfólio. O risco está no que não apareceu: nada indica instrumentação de validação nem registro de decisão",
                      exposicao: "Média", impacto: "Alto"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-purple-50/30 transition-colors' : 'bg-purple-50/20 hover:bg-purple-50/40 transition-colors'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{row.grupo}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.exposicao === 'Baixa' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {row.exposicao}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.impacto === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
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
              <div className="w-1.5 h-6 bg-[#FF6B35] rounded-full" />
              <h3 className="text-xl font-bold text-gray-900">Concorrência direta — mercado público</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-12 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-orange-50">
                    {["Player", "Grupo / Soluções", "Movimento observado", "Posição diante da norma", "Exposição", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-orange-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Saber",
                      grupo: "eDocente",
                      movimento: "Correção automática de microtestes por câmera e gestão a partir do celular do professor, com baixa fricção de adoção na rede pública",
                      estrategia: "Opera exatamente na fronteira que a norma detalhou: correção de prova objetiva segue permitida como apoio, desde que a validação humana seja documentada. Quem já registra quem conferiu ganha; quem só devolve a nota precisa acrescentar o registro",
                      exposicao: "Média", impacto: "Alto"
                    },
                    {
                      player: "Moderna",
                      grupo: "Moderna Amigos",
                      movimento: "Braço público do grupo Santillana, com capilaridade em redes municipais e estaduais e histórico em processos de adoção pública",
                      estrategia: "A força é relacionamento institucional, e ela cresce de valor: com prazo de doze meses correndo, a rede vai procurar quem já está dentro para resolver adequação de procedimento, não um fornecedor novo",
                      exposicao: "Baixa", impacto: "Médio-Alto"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-orange-50/30 transition-colors' : 'bg-orange-50/20 hover:bg-orange-50/40 transition-colors'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{row.grupo}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.exposicao === 'Baixa' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {row.exposicao}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.impacto === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
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
              <div className="w-1.5 h-6 bg-gradient-to-b from-[#6B46C1] to-[#FF6B35] rounded-full" />
              <h3 className="text-xl font-bold text-gray-900">Radar de funcionalidades</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-3xl">
              Posição de mercado se anuncia; funcionalidade se usa. O recurso que cada player já embarcou, a quem ele serve e o que ocupa — ou deixa vago — no tabuleiro.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  player: "Somos Educação",
                  produto: "Plu, dentro do Plurall",
                  mercado: "Privado",
                  corMercado: "bg-purple-100 text-purple-700",
                  publicos: ["Professor", "Aluno"],
                  entregue: "Para o professor: plano de aula, questões, provas e apresentações a partir do capítulo do material. Para o aluno: resumo, glossário, plano de estudo, exercício e tirar dúvida dentro do próprio conteúdo.",
                  leitura: "É quem foi mais longe na conversa com o conteúdo do livro. Ancorar a resposta ao capítulo é o que separa assistente genérico de assistente proprietário — e é a parte difícil de copiar, porque depende do acervo, não do modelo. Volume declarado pela empresa nos três primeiros meses de 2025: mais de 168 mil planos de aula gerados, com 86% de satisfação.",
                  fonte: "https://www.plurall.net/ia.html",
                  fonteLabel: "Plurall IA"
                },
                {
                  player: "Poliedro",
                  produto: "Cosmos, camada de IA do P+",
                  mercado: "Privado",
                  corMercado: "bg-purple-100 text-purple-700",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Interação com IA generativa restrita ao conteúdo proprietário, somada a modelos preditivos: sugestão de estratégia didática, adaptação de conteúdo, criação de avaliação e leitura de desempenho. Disponível na web e no app P+.",
                  leitura: "Restringir a geração ao acervo próprio é decisão de arquitetura, não de marketing: reduz alucinação e encurta a conversa de conformidade. A aposta é no professor e no gestor; o aluno não aparece como usuário direto da camada generativa.",
                  fonte: "https://brasil.bettshow.com/releases-expositores-2026/poliedro-apresenta-cosmos-hub-de-inteligencia-artificial-na-bett-brasil-2026",
                  fonteLabel: "Release Bett Brasil 2026"
                },
                {
                  player: "Santillana",
                  produto: "Moderna Core",
                  mercado: "Privado",
                  corMercado: "bg-purple-100 text-purple-700",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Ecossistema que junta conteúdo, dados e IA: ampliação de repertório de estratégias para o professor e leitura contínua de desempenho para apoiar decisão do gestor.",
                  leitura: "A funcionalidade anunciada é acompanhamento, não geração. Isso mantém a IA longe da superfície do aluno e explica a exposição mais baixa — ao custo de ter menos produto visível para disputar a comparação de recursos numa mesa de venda.",
                  fonte: "https://revistaeducacao.com.br/2026/05/05/moderna-core-bett/",
                  fonteLabel: "Revista Educação"
                },
                {
                  player: "Bernoulli",
                  produto: "CoCria Professor",
                  mercado: "Privado",
                  corMercado: "bg-purple-100 text-purple-700",
                  publicos: ["Professor", "Gestor"],
                  entregue: "Apoio ao planejamento docente e à leitura de diagnóstico de aprendizagem, com adaptação de atividades e organização de estratégias sobre a base de dados da rede.",
                  leitura: "Entra pela dor operacional — devolver tempo a quem planeja — e não pela promessa de personalização. É o caminho de menor atrito para adoção, e também o de menor diferenciação: é o recurso que todo mundo terá.",
                  fonte: "https://educador21.com/ia-desafia-escolas-repensar-gestao-formacao/",
                  fonteLabel: "Educador21"
                },
                {
                  player: "PNLD Digital",
                  produto: "Leitor oficial do MEC/FNDE",
                  mercado: "Plataforma pública",
                  corMercado: "bg-orange-100 text-orange-700",
                  publicos: ["Aluno", "Professor"],
                  entregue: "Leitor interativo das obras do programa, com audiodescrição, narração, mapas e infográficos clicáveis, vídeos legendados e compatibilidade com leitor de tela. Traz agente de IA para esclarecer dúvidas e apoiar o uso do sistema.",
                  leitura: "Não é concorrente: é o trilho por onde o livro de todo mundo passa a circular. E o detalhe importa — o agente responde sobre o sistema, não sobre o conteúdo do livro. Quem entregar acessibilidade acima do padrão do leitor oficial deixa de ter diferencial; quem entregar conversa com o conteúdo ainda tem.",
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
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{f.entregue}</p>

                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">O que isso significa</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">{f.leitura}</p>

                  <a
                    href={f.fonte}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-[#6B46C1] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {f.fonteLabel}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 md:p-8 mb-12">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">O espaço que continua vago</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Entre todos esses produtos, um recurso aparece uma vez só: conversar com o conteúdo do livro. O Plu faz isso no privado, ancorado ao capítulo. No público, o agente do leitor oficial responde sobre o sistema — como navegar, como baixar, como ativar acessibilidade — e não sobre o que está escrito na página. É a diferença entre um suporte e um professor auxiliar, e ela ainda não foi ocupada na rede pública.
                  </p>
                </div>
              </div>
            </div>

            {/* Força de contexto */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-gray-400 rounded-full" />
              <h3 className="text-xl font-bold text-gray-900">Forças de contexto</h3>
            </div>
            <div className="bg-white rounded-2xl border-2 border-purple-100 p-6 md:p-8">
              <p className="text-sm text-gray-600 mb-6 max-w-3xl">
                Não disputam a venda para a escola e por isso ficam fora do mapa competitivo. Mudam outra coisa: o que a escola espera receber, quanto aceita pagar e o que passa a ser considerado normal antes de qualquer proposta chegar.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    nome: "Reguladores brasileiros e estrangeiros",
                    altera: "Regras competitivas",
                    nota: "Duas jurisdições restringiram acesso por faixa etária na mesma semana. Deixou de ser risco distante e passou a ser variável de contrato, com desligamento de função entrando como requisito técnico."
                  },
                  {
                    nome: "Google for Education",
                    altera: "Economia da formação",
                    nota: "Nova rodada de trilhas e certificação gratuitas para educadores em setembro. Ocupa a oferta no exato momento em que a formação continuada passou a ser obrigação da instituição."
                  },
                  {
                    nome: "OpenAI e Anthropic",
                    altera: "Comportamento e expectativa",
                    nota: "A trava de atalho e o modo de estudo ligados por padrão já definiram o que pais e escolas consideram uso responsável. A norma agora chancela esse piso — e ele foi definido fora do setor educacional."
                  },
                  {
                    nome: "Inep",
                    altera: "Precedente de avaliação em escala",
                    nota: "Testava IA na correção da redação do ENEM antes da decisão do CNE. O que o instituto fizer a seguir vira referência prática de onde está a fronteira entre apoio e atribuição de nota."
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-purple-200 pl-4">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-gray-900 text-sm">{item.nome}</p>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600 uppercase tracking-wide">{item.altera}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.nota}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Globe className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Benchmarks de Inovação</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Não o que fizeram — <span className="text-[#6B46C1]">como fizeram</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-3xl">
              Cada caso destrinchado por problema, implantação, escala e aprendizado, separando o que dá para replicar aqui do que não dá.
            </p>

            <div className="space-y-8">
              {[
                {
                  empresa: "Poliedro — IA com autoria humana no centro e rastro auditável",
                  pais: "Brasil · Operação editorial",
                  categoria: "Conformidade por desenho",
                  problema: "Ampliar a produção de conteúdo didático com IA sem perder o controle editorial nem a confiabilidade factual — e sem transferir a decisão pedagógica para a máquina.",
                  implementacao: "O projeto foi construído por duas áreas em conjunto, Inovação & Aprendizagem e Produto Editorial, em vez de nascer como iniciativa isolada de tecnologia. A sequência foi prova de conceito, testes e validação humana antes de escalar, com a IA atuando no refinamento e a curadoria e as definições editoriais permanecendo sob responsabilidade de pessoas. A rastreabilidade da operação foi tratada como entregável do projeto, não como subproduto.",
                  escala: "Áreas envolvidas somam quase 300 profissionais; 93% de assertividade registrada em tarefas como classificação de conteúdo e verificação de precisão factual.",
                  financiamento: "Investimento interno, sem aporte externo declarado. O reconhecimento externo veio pela Premiação Impacto Brasil 2026, do Agile Trends, com terceiro lugar na categoria Escala.",
                  aprendizado: "Medir assertividade antes de escalar é o que permitiu declarar um número. A decisão de manter o humano decidindo não foi tomada por causa da norma — foi tomada antes dela, e é isso que hoje se converte em vantagem: conformidade com histórico não se constrói depois.",
                  limitacoes: "O indicador é de fase de validação, não de operação contínua em produção, e cobre tarefas específicas — classificação e checagem factual —, não a qualidade pedagógica do material final. Também não há dado público sobre efeito na aprendizagem do aluno.",
                  replicavel: "A sequência prova de conceito, teste, validação humana e só então escala; e tratar rastreabilidade como entregável desde o início, o que torna a conformidade demonstrável.",
                  naoReplicavel: "A escala de equipe editorial própria que sustenta curadoria humana em volume — é estrutura de grupo consolidado, não de time enxuto.",
                  application: "É o modelo de referência para a adequação que a norma vai exigir, e está a um telefonema de distância. Para quem não tem 300 profissionais, o caminho é o mesmo em menor escala: definir o ponto de decisão humana, registrá-lo e medir assertividade antes de ampliar o uso."
                },
                {
                  empresa: "Nova York — como se operacionaliza uma moratória de IA",
                  pais: "Estados Unidos · Rede pública",
                  categoria: "Execução de restrição",
                  problema: "Conter o uso de IA generativa por crianças e pré-adolescentes numa rede gigante onde dezenas de programas já autorizados traziam IA embutida — sem paralisar a operação escolar.",
                  implementacao: "A medida não foi anunciada como proibição genérica. Veio com três mecanismos simultâneos: moratória por faixa (2-K ao 8º ano) com prazo definido de um ano letivo, desligamento ou descontinuidade dos componentes de IA de mais de 38 programas já autorizados que não atendessem aos novos padrões de segurança e supervisão, e substituição por formação — módulos semestrais de pensamento crítico sobre IA no ensino médio, mais pilotos limitados em poucas turmas para seguir aprendendo.",
                  escala: "Cerca de 600 mil estudantes do 2-K ao 8º ano, quase dois terços da matrícula da maior rede pública dos Estados Unidos.",
                  financiamento: "Recursos da própria rede, com a maior parte do custo recaindo sobre renegociação e reconfiguração de contratos existentes em vez de nova aquisição.",
                  aprendizado: "O que faz a moratória funcionar não é o anúncio, é a capacidade de desligar função em contrato vigente. A rede tratou o inventário de programas autorizados como pré-condição — sem saber onde a IA estava embutida, a proibição seria apenas declaratória.",
                  limitacoes: "É medida temporária de um ano sem substituto pedagógico definido para a faixa restringida, e concentra em pilotos pequenos o aprendizado que deveria orientar a decisão seguinte. Também não resolve o uso fora da escola, que segue livre.",
                  replicavel: "O inventário de onde a IA está embutida nos contratos vigentes, e a exigência contratual de desligamento granular por faixa etária — aplicável a qualquer rede ou grupo brasileiro agora.",
                  naoReplicavel: "O poder de compra concentrado que permite renegociar dezenas de contratos simultaneamente por decisão administrativa única.",
                  application: "Com a vedação até o 5º ano aprovada aqui, toda rede brasileira vai precisar responder à mesma pergunta operacional: onde a IA está embutida e quem consegue desligá-la por série. Quem chegar com esse inventário e esse controle pronto resolve um problema que o cliente ainda não formulou."
                },
                {
                  empresa: "CNE — como a norma foi construída em cinco meses de tramitação",
                  pais: "Brasil · Desenho regulatório",
                  categoria: "Processo normativo",
                  problema: "Regular IA em todos os níveis e modalidades de ensino sem congelar a tecnologia numa definição que envelheceria em meses, e sem deixar a escola sem critério prático.",
                  implementacao: "A construção partiu de um referencial técnico publicado pelo MEC em abril, seguido de aprovação inicial no CNE em maio, consulta pública encerrada em 14 de junho, seminário em julho e votação final em plenário em 1º de setembro. A escolha de desenho foi regular por faixa de risco e por finalidade, não por tecnologia: em vez de listar ferramentas permitidas, o texto define o que uma aplicação pode ou não decidir sobre a trajetória do aluno. Como parâmetro internacional, adotou a recomendação da UNESCO que indica uso autônomo de IA apenas a partir dos 13 anos.",
                  escala: "Alcança todos os níveis, etapas e modalidades da educação brasileira, pública e privada, com prazo de doze meses de adaptação a partir da homologação.",
                  financiamento: "Processo institucional, sem custo direto ao setor privado — o custo aparece na adequação, que recai sobre instituições e fornecedores.",
                  aprendizado: "Regular finalidade em vez de tecnologia é o que dá sobrevida à norma: modelo novo não a torna obsoleta, porque o que está vedado é a delegação da decisão, não o uso de uma ferramenta específica. A ancoragem em parâmetro internacional deu ao texto uma defesa pronta contra a acusação de excesso.",
                  limitacoes: "A classificação por faixa de risco depende de interpretação caso a caso, e o texto não traz lista fechada de aplicações por nível — o que gera zona cinzenta justamente no risco moderado, onde está a maior parte dos produtos educacionais. A eficácia também segue condicionada à homologação, que ainda não veio.",
                  replicavel: "A lógica de classificar o próprio portfólio por finalidade e por quem assina a decisão, em vez de por tecnologia empregada — é a forma mais rápida de descobrir a própria exposição.",
                  naoReplicavel: "O tempo de tramitação: o setor privado não tem cinco meses de consulta antes de decidir o que fazer com o produto.",
                  application: "A leitura mais útil aqui é de método, não de conteúdo: aplicar a mesma matriz internamente. Listar cada decisão que o produto toma sobre o aluno, classificar por faixa e identificar quem assina — esse exercício produz o mapa de conformidade que ainda ninguém publicou no país."
                },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border-2 border-purple-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-5 gap-4 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-[#6B46C1]" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg leading-snug">{b.empresa}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{b.pais}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 whitespace-nowrap">
                      {b.categoria}
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-5 border-l-4 border-gray-300">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Problema que tentaram resolver</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.problema}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    {[
                      { label: 'Como foi implantado', valor: b.implementacao, icone: <Zap className="w-3.5 h-3.5" /> },
                      { label: 'Escala e números', valor: b.escala, icone: <BarChart3 className="w-3.5 h-3.5" /> },
                      { label: 'Financiamento e estrutura', valor: b.financiamento, icone: <Users className="w-3.5 h-3.5" /> },
                      { label: 'Aprendizado que ficou', valor: b.aprendizado, icone: <Brain className="w-3.5 h-3.5" /> },
                    ].map(bloco => (
                      <div key={bloco.label} className="bg-gray-50 rounded-xl p-4">
                        <p className="text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                          <span className="text-[#6B46C1]">{bloco.icone}</span>
                          {bloco.label}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">{bloco.valor}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-50/60 rounded-xl p-4 mb-4 border border-red-100">
                    <p className="text-xs font-semibold text-red-700 mb-1">Limitações do caso</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.limitacoes}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50/60 rounded-xl p-4 border border-green-100">
                      <p className="text-xs font-semibold text-green-700 mb-1">O que é replicável</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{b.replicavel}</p>
                    </div>
                    <div className="bg-gray-100/70 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-1">O que não é replicável</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{b.naoReplicavel}</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-[#6B46C1]">
                    <p className="text-xs font-semibold text-purple-700 mb-1">Implicação para o nosso contexto</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{b.application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ACELERADORES DE IA ── */}
      <section id="aceleradores" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Aceleradores de IA</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Capacidades que <span className="text-[#6B46C1]">encurtam o caminho</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              O que já existe, em que estágio está e o que custa plugar — com limitações reais, dependências técnicas, cenário ideal de uso e o que muda para Produto e Engenharia. Nesta edição, o critério de seleção é o prazo de adequação.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  nome: "Registro de decisão pedagógica",
                  tipo: "Trilha de auditoria",
                  oque: "Log imutável de cada decisão que o produto toma ou sugere sobre um aluno, com quem validou, quando, com base em qual saída do modelo e qual foi a intervenção humana. É a peça que responde à exigência de supervisão humana contínua e de relatório nos usos classificados como alto risco.",
                  acelera: "Converte conformidade de promessa em evidência exibível, e transforma o que hoje é risco jurídico em anexo de proposta comercial.",
                  limitacoes: "Registrar não é supervisionar: se o professor apenas clica em confirmar, o log documenta uma validação que não aconteceu de fato. Também cria exposição — o rastro que prova conformidade prova descumprimento com a mesma clareza. E aumenta o atrito do fluxo justamente no momento em que o professor tem menos tempo.",
                  dependencias: "Modelo de identidade por usuário, armazenamento append-only com retenção definida, versionamento do modelo e do prompt usados em cada decisão, e base legal sob a LGPD por envolver dado de menor associado a decisão automatizada.",
                  cenario: "Qualquer fluxo em que a IA proponha nota, classificação, encaminhamento ou alerta sobre o aluno. Desnecessário em uso de baixo risco como organização de material e acessibilidade.",
                  impactoProduto: "É o item que separa quem vai poder vender para rede pública e mantenedor daqui a doze meses de quem vai renegociar contrato. Não é diferencial: é licença para operar.",
                  impactoEngenharia: "Decidir o esquema de evento antes de escrever a primeira feature nova — retrofit de trilha de auditoria exige reprocessar histórico que não foi gravado, ou seja, não exige, impossibilita.",
                  maturidade: "A construir",
                  cor: "bg-purple-100 text-purple-700",
                  link: "https://g1.globo.com/educacao/noticia/2026/09/01/cne-para-uso-de-ia-em-escolas-e-universidades.ghtml",
                  linkLabel: "A norma que exige"
                },
                {
                  nome: "Matriz de classificação por faixa de risco",
                  tipo: "Método de conformidade",
                  oque: "Inventário de cada decisão automatizada do produto mapeada nas quatro faixas da norma — baixo, moderado, alto e excessivo —, com a finalidade declarada e o responsável pela validação em cada uma. Não é documento jurídico: é artefato de produto que orienta priorização.",
                  acelera: "Substitui adequação por intuição por adequação por evidência, e revela em dias onde está a exposição real do portfólio — normalmente em lugares que ninguém suspeitava.",
                  limitacoes: "A norma não traz lista fechada por nível, então a classificação depende de interpretação e pode ser contestada. A zona cinzenta se concentra no risco moderado, onde está a maior parte dos produtos educacionais. Classificar sem parecer jurídico dá direção, não segurança.",
                  dependencias: "Levantamento completo das decisões automatizadas existentes, o que quase nunca está documentado; leitura conjunta de produto, pedagógico e jurídico; e revisão a cada novo recurso.",
                  cenario: "Primeira ação de qualquer time antes de mexer em código. Aplicável integralmente hoje, sem depender da homologação.",
                  impactoProduto: "É a lacuna mais barata de ocupar desta edição: nenhum player brasileiro publicou o próprio mapa, e quem publicar primeiro define o formato que os concorrentes terão de responder.",
                  impactoEngenharia: "Custo próximo de zero em desenvolvimento e alto em tempo de gente sênior. O entregável é uma planilha viva, não um sistema.",
                  maturidade: "Disponível",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://www.spacemoney.com.br/economia/legislacao/cne-aprova-faixas-de-risco-para-ia-na-educacao",
                  linkLabel: "As quatro faixas em detalhe"
                },
                {
                  nome: "Desligamento granular de função por série e rede",
                  tipo: "Controle operacional",
                  oque: "Capacidade de desativar recursos específicos de IA por faixa etária, série, turma ou rede inteira, remotamente e sem nova versão do produto. Foi o mecanismo que viabilizou a moratória em Nova York, onde mais de trinta programas já autorizados tiveram componentes de IA descontinuados ou desativados.",
                  acelera: "Permite atender à vedação até o 5º ano sem retirar o produto do ar nem manter versões paralelas, e responde em horas a uma decisão de rede que hoje levaria um ciclo de release.",
                  limitacoes: "Feature flag por si só não resolve: sem mapeamento de qual aluno está em qual série, o desligamento é grosseiro e derruba função de quem poderia usá-la. Depende de dado cadastral que muitas redes mantêm desatualizado, e cria matriz de estados difícil de testar.",
                  dependencias: "Sistema de flags com escopo hierárquico por rede, escola, série e turma; integração confiável com o cadastro do aluno; e suíte de teste que cubra as combinações, sob pena de desligar o que não devia.",
                  cenario: "Produtos com uso direto pelo estudante em faixas que atravessam o corte do 5º ano. Irrelevante em produto exclusivo de professor ou gestor.",
                  impactoProduto: "Vira cláusula de contrato antes de virar requisito técnico: a rede vai perguntar se você consegue desligar por série, e a resposta define se o contrato é renovado.",
                  impactoEngenharia: "O risco não está em criar a flag, está na explosão combinatória de estados. Modelar o escopo hierárquico desde o início evita reescrever o controle de acesso depois.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://www.chalkbeat.org/newyork/2026/09/02/nyc-schools-to-set-ai-policy-ban-screen-time-limits/",
                  linkLabel: "Como Nova York executou"
                },
                {
                  nome: "Validação humana documentada em correção objetiva",
                  tipo: "Padrão de fluxo",
                  oque: "Fluxo em que a IA propõe a correção de item objetivo, o professor confirma ou ajusta e o sistema registra a conferência com autoria e horário. É exatamente a fronteira que a norma preservou: apoio permitido, resultado validado e documentado por pessoa.",
                  acelera: "Mantém o ganho de tempo da correção automática — que é real e é a dor mais concreta do professor — sem cair na vedação de atribuição de nota por máquina.",
                  limitacoes: "Se a confirmação for um botão único para a turma toda, o registro é formalmente válido e pedagogicamente vazio. Desenhar atrito suficiente para a conferência ser real, sem devolver ao professor o trabalho que a IA deveria poupar, é o problema difícil aqui — e não tem solução pronta.",
                  dependencias: "Interface de revisão em lote com amostragem inteligente, destaque dos itens de baixa confiança do modelo, e registro por item e não por prova inteira.",
                  cenario: "Simulados, avaliações objetivas e microtestes em escala. Não se aplica a texto autoral, onde a correção por IA está vedada em qualquer configuração.",
                  impactoProduto: "É a única forma de manter a proposta de valor de correção automática dentro da regra — e quem oferecer isso pronto atende a um mercado que acabou de ficar sem alternativa conforme.",
                  impactoEngenharia: "Exige calibração de confiança do modelo por item para a amostragem funcionar. Sem isso, a revisão vira aleatória e o professor perde a confiança no fluxo.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://olhardigital.com.br/2026/09/01/inteligencia-artificial/ia-nao-podera-mais-corrigir-provas-e-redacoes-nas-escolas-veja-o-que-muda",
                  linkLabel: "O que segue permitido"
                },
                {
                  nome: "Telemetria de percurso de aprendizagem",
                  tipo: "Instrumentação",
                  oque: "Captura do processo e não só do resultado — versões, tentativas, tempo entre ações, revisões. Registrado na edição anterior como resposta ao comportamento de terceirização, ganha nesta um segundo uso: é o insumo natural da avaliação de impacto que a norma passa a exigir nos usos de alto risco.",
                  acelera: "Uma única instrumentação atende a dois propósitos que antes pareciam separados: evidência pedagógica de esforço e evidência regulatória de efeito.",
                  limitacoes: "As mesmas da edição passada seguem valendo — indica padrão e não intenção, e só captura o que acontece dentro do seu editor. A novidade é uma tensão nova: dado de percurso é dado comportamental de menor, e a norma que pede avaliação de impacto também endurece a proteção de dados do estudante.",
                  dependencias: "Editor próprio instrumentado, pipeline de eventos, série temporal por aluno e — agora com peso maior — base legal, minimização e política de retenção definidas antes da primeira coleta.",
                  cenario: "Produção textual, resolução em etapas e projetos longos. Ideal onde já houver necessidade de demonstrar efeito para mantenedor ou rede.",
                  impactoProduto: "Deixou de ser aposta de diferenciação e passou a ter comprador definido: quem precisar declarar avaliação de impacto vai precisar de linha de base, e ela não se constrói retroativamente.",
                  impactoEngenharia: "Coletar menos e melhor: com dado de menor sob escrutínio maior, esquema enxuto e retenção curta valem mais que captura ampla que depois precisa ser expurgada.",
                  maturidade: "A construir",
                  cor: "bg-purple-100 text-purple-700",
                  link: "https://cepr.org/publications/dp21577",
                  linkLabel: "A evidência que originou"
                },
                {
                  nome: "RAG sobre acervo autoral",
                  tipo: "Arquitetura de contexto",
                  oque: "A IA responde apenas a partir do conteúdo proprietário indexado. Padrão já consolidado entre os concorrentes diretos e que, com a norma, ganha um atributo novo: por não interferir em decisão acadêmica, tende a se enquadrar nas faixas de risco mais baixas.",
                  acelera: "Resolve alinhamento curricular e confiabilidade de fonte sem treinar modelo próprio — e agora também simplifica a conversa de conformidade, porque apoio à organização de material é o exemplo típico de baixo risco.",
                  limitacoes: "Resolve a procedência, não o uso: continua entregando resposta pronta a quem quer atalho. A classificação de risco também não é automática — o mesmo RAG vira risco moderado no instante em que passa a recomendar trilha ao aluno, e isso muda por configuração, não por código.",
                  dependencias: "Pipeline de ingestão e fatiamento, banco vetorial, reindexação a cada atualização editorial e avaliação contínua de fidelidade à fonte.",
                  cenario: "Tira-dúvidas ancorado no material adotado e apoio ao planejamento docente. Onde a resposta certa já existe no acervo.",
                  impactoProduto: "Segue sendo custo de entrada e não diferencial. O que mudou é que agora é também a parte do portfólio que dá menos trabalho de adequar — vale saber disso ao priorizar.",
                  impactoEngenharia: "O trabalho continua na curadoria e na avaliação, não no modelo. Acrescente ao pipeline o registro de qual versão do acervo respondeu o quê: é o que liga o RAG à trilha de auditoria.",
                  maturidade: "Padrão de mercado",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://www.santillanaeducacao.com.br/solucoes-educacionais/solucoes-pedagogicas/moderna-core/",
                  linkLabel: "Referência: Moderna Core"
                },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border-2 border-purple-100 p-6 hover:border-[#6B46C1] hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-snug">{a.nome}</h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">{a.tipo}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${a.cor}`}>
                      {a.maturidade}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{a.oque}</p>
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-[#C2410C] mb-1">O que acelera</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{a.acelera}</p>
                    </div>
                    <div className="bg-red-50/60 rounded-xl p-3 border border-red-100">
                      <p className="text-xs font-semibold text-red-700 mb-1">Limitações reais</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{a.limitacoes}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Dependências técnicas</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{a.dependencias}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Cenário ideal de uso</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{a.cenario}</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="bg-purple-50 rounded-xl p-3">
                        <p className="text-xs font-semibold text-purple-700 mb-1">Impacto para Produto</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{a.impactoProduto}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3">
                        <p className="text-xs font-semibold text-blue-700 mb-1">Impacto para Engenharia</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{a.impactoEngenharia}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg hover:bg-[#6B46C1] hover:text-white transition-all font-medium text-sm mt-4"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">O que os experts estão escrevendo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Validação e <span className="text-[#6B46C1]">contraponto</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              O que quem decide e quem estuda o tema concluiu sobre os movimentos desta edição — começando pelo que dizem em coro.
            </p>

            {/* Consenso dos especialistas */}
            <div className="bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] rounded-2xl p-8 md:p-10 mb-12 text-white">
              <div className="flex items-start gap-4 mb-6">
                <img src={liaFooter} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full mb-3">
                    <Brain className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Consenso dos especialistas da quinzena</span>
                  </div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed">
                    Reguladores brasileiros, gestores públicos estrangeiros e organismos multilaterais convergiram, sem coordenação entre si, na mesma fronteira: <span className="text-[#FFB89A]">a IA pode participar do processo, mas não pode assinar o resultado</span> — e quanto menor a idade, menor a autonomia admitida.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    ponto: "A decisão avaliativa é indelegável",
                    detalhe: "A formulação do relator do CNE — a palavra final sobre o desempenho cabe ao professor, não à máquina — é a mesma linha que separa risco moderado de alto risco no texto aprovado. Não é retórica de abertura: é o critério operacional da norma."
                  },
                  {
                    ponto: "Idade define autonomia, e o corte ficou alto",
                    detalhe: "O CNE veda uso autônomo até o 5º ano ancorado no parâmetro da UNESCO, que indica uso independente a partir dos 13 anos. Nova York foi além e suspendeu até o 8º. Três referências independentes apontando para a mesma faixa."
                  },
                  {
                    ponto: "Conformidade se prova com rastro, não com política",
                    detalhe: "Onde há alto risco, exige-se avaliação de impacto, relatório de dados e supervisão humana contínua. O que separa quem cumpre de quem declara cumprir é a existência de registro — e registro não é retroativo."
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="font-semibold text-white mb-2 text-sm leading-snug">{item.ponto}</p>
                    <p className="text-white/75 text-sm leading-relaxed">{item.detalhe}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  autor: "Celso Niskier",
                  cargo: "Relator do parecer · CNE",
                  titulo: "A palavra final sobre o desempenho cabe ao professor, não à máquina",
                  data: "1 set/2026",
                  tese: "Ao sustentar o parecer em plenário, o relator firmou o princípio que organiza toda a norma: a IA pode apoiar o trabalho pedagógico em qualquer etapa, mas a responsabilidade pelo juízo sobre a trajetória do aluno permanece humana e não é transferível. É desse princípio que derivam as vedações concretas — correção de texto autoral, punição por detector e uso autônomo na infância.",
                  importa: "Dá ao setor um critério único para interpretar casos que a norma não lista explicitamente. Diante de qualquer recurso novo, a pergunta deixa de ser se a lei permite e passa a ser quem assina o resultado.",
                  relacao: "É a chave de leitura do Sinal 1 e o que explica por que a matriz de classificação por faixa de risco funciona como método: ela é a operacionalização desse princípio.",
                  link: "https://www.spacemoney.com.br/economia/legislacao/cne-aprova-faixas-de-risco-para-ia-na-educacao"
                },
                {
                  autor: "UNESCO",
                  cargo: "Parâmetro internacional adotado pelo CNE",
                  titulo: "Uso autônomo de ferramentas de IA apenas a partir dos 13 anos",
                  data: "Referência do parecer",
                  tese: "A recomendação da organização, usada como referência internacional na construção do parecer brasileiro, estabelece um limiar de idade para uso independente de IA. O parecer do CNE a adota como âncora ao vedar o uso autônomo até o 5º ano, admitindo a tecnologia nessa faixa apenas em atividade conduzida e mediada pelo professor.",
                  importa: "Blinda a norma brasileira contra a acusação de excesso regulatório: a restrição por idade não é invenção local, é aplicação de parâmetro multilateral já existente. Isso reduz a chance de reversão na homologação.",
                  relacao: "Sustenta a leitura do Sinal 2 sobre convergência entre jurisdições e é o argumento que torna a restrição por faixa etária um tema estrutural, e não um acontecimento isolado.",
                  link: "https://blog.emy.education/cne-2026-inteligencia-artificial-ies/"
                },
                {
                  autor: "Zohran Mamdani",
                  cargo: "Prefeito de Nova York",
                  titulo: "Desligar os componentes de IA de mais de 38 programas já autorizados",
                  data: "2 set/2026",
                  tese: "Ao anunciar a moratória, o prefeito não a apresentou como proibição de uso, e sim como revisão de padrões: os programas já contratados que não atenderem aos novos critérios de segurança e supervisão terão seus componentes de IA descontinuados ou desativados. A restrição foi formulada como consequência de um padrão, não como veto a uma tecnologia.",
                  importa: "Mostra o mecanismo real de aplicação de uma restrição em escala — e ele é contratual, não pedagógico. Quem fornece precisa responder tecnicamente por algo que antes era pergunta de compliance.",
                  relacao: "É o que transforma o acelerador de desligamento granular em requisito concreto e não em hipótese: existe precedente de uma rede exigindo isso de dezenas de fornecedores ao mesmo tempo.",
                  link: "https://www.k12dive.com/news/new-york-city-pauses-ai-use-for-elementary-middle-school-students/829496/"
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
                  <h3 className="font-semibold text-gray-900 mb-3 leading-snug">{e.titulo}</h3>
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-purple-700 mb-1">Tese central</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{e.tese}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Por que importa</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{e.importa}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-orange-700 mb-1">Relação com os sinais desta edição</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{e.relacao}</p>
                    </div>
                  </div>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg hover:bg-[#6B46C1] hover:text-white transition-all font-medium text-sm mt-4"
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
      <section id="analise" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Target className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Análise Estratégica</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Diferenciação vs <span className="text-[#6B46C1]">Commodity</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Onde parou de haver vantagem e onde ainda existe algo difícil de copiar. Nesta edição, uma linha saiu do tabuleiro inteiro — deixou de ser commodity para virar proibição.
            </p>

            <div className="bg-white rounded-2xl border-2 border-[#FF6B35] p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C2410C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">A mudança de lado desta edição</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Correção automática de texto autoral</strong> não migrou de diferencial para commodity: saiu da tabela. Deixou de ser uma capacidade com valor decrescente e passou a ser finalidade vedada em todas as etapas do ensino. É a primeira vez que este radar registra uma categoria de produto encerrada por norma, e não por concorrência.
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
                    { item: "Correção automática de redação e prova dissertativa", motivo: "Não é mais commodity: é finalidade vedada em qualquer etapa. Quem vendia isso tem prazo para trocar a peça que decide", novo: true },
                    { item: "Detector de IA como prova de autoria", motivo: "Perdeu força probatória por norma: nenhuma punição pode se fundamentar apenas nele. Vira sinal para conversa, não evidência para sanção", novo: true },
                    { item: "Tutor autônomo para os anos iniciais", motivo: "Mercado fechado por decisão administrativa em duas jurisdições na mesma semana. Só sobrevive como instrumento do professor", novo: true },
                    { item: "Mediação genérica do uso", motivo: "Já era default de plataforma na edição passada; agora é também piso normativo. Duplamente commodity" },
                    { item: "Chat ancorado no conteúdo próprio", motivo: "Padrão consolidado entre todos os concorrentes diretos. Paridade aqui continua não gerando vantagem" },
                    { item: "Política de uso como documento", motivo: "Vira obrigação com prazo. Ter o PDF deixa de diferenciar no instante em que todos precisam ter o seu" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm flex items-center gap-2 flex-wrap">
                          {c.item}
                          {c.novo && <span className="px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C2410C] text-white uppercase tracking-wide">Mudou nesta edição</span>}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">{c.motivo}</p>
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
                    { item: "Rastro de decisão com histórico", motivo: "A norma pede supervisão contínua e relatório no alto risco. Quem já registra pode provar; quem começar agora prova daqui a um ano — e isso não se compra", novo: true },
                    { item: "Conformidade demonstrável como peça comercial", motivo: "Mapa próprio de classificação por faixa de risco publicado antes dos concorrentes define o formato que eles terão de responder", novo: true },
                    { item: "Desligamento granular por série e rede", motivo: "Vira condição de permanência em contrato, não só de venda. Precedente já existe em rede com centenas de milhares de alunos", novo: true },
                    { item: "Curadoria humana em escala", motivo: "Manter decisão editorial humana em volume exige estrutura de gente que não se contrata em um ciclo — é a barreira mais difícil de vencer desta lista" },
                    { item: "Evidência de efeito na própria base", motivo: "Avaliação de impacto passa a ser exigível. Linha de base não é construída retroativamente, então quem não começou já está atrasado" },
                    { item: "Relação institucional com rede e mantenedor", motivo: "Com prazo correndo, a rede procura quem já está dentro para resolver adequação — a confiança acumulada rende mais agora do que rendia antes" },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm flex items-center gap-2 flex-wrap">
                          {d.item}
                          {d.novo && <span className="px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-green-700 text-white uppercase tracking-wide">Nova fronteira</span>}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.motivo}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Hype vs Tendência Real</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Força e maturidade <span className="text-[#6B46C1]">do movimento</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Quanto discurso existe em relação à evidência disponível — e se o movimento já é forte o bastante para mover roadmap.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
                <p className="font-bold text-orange-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Superestimado
                </p>
                <p className="text-[11px] text-orange-700 mb-5 font-medium">Muito discurso, evidência ausente ou contrária</p>
                <div className="space-y-5">
                  {[
                    { titulo: "A norma proíbe IA na escola", desc: "É a leitura que circulou mais e a mais errada. O texto mantém permitido o apoio à organização de material, acessibilidade, tradução, planejamento de aula e até correção de prova objetiva com validação humana. O que se veda é a delegação da decisão, não o uso." },
                    { titulo: "Doze meses é prazo confortável", desc: "O relógio só começa na homologação, mas o que precisa ser feito não é ajuste de interface: é instrumentar registro de decisão, o que exige definir esquema de evento antes de escrever a próxima feature. Quem tratar como projeto do mês dez descobre que trilha de auditoria não é retroativa." },
                    { titulo: "Detector de IA resolvido é problema resolvido", desc: "A norma retirou o poder punitivo do detector, e isso foi lido como fim da questão da autoria. Não é: o problema de saber quem escreveu continua inteiro, apenas ficou sem o atalho técnico que nunca funcionou bem." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-7 border border-purple-200">
                <p className="font-bold text-purple-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Emergente
                </p>
                <p className="text-[11px] text-purple-700 mb-5 font-medium">Sinal real, cedo demais para conclusão firme</p>
                <div className="space-y-5">
                  {[
                    { titulo: "Conformidade como argumento de venda", desc: "A lógica é sólida e o precedente de desligamento contratual existe, mas nenhum player brasileiro testou isso numa mesa de compra ainda — e sem homologação, o comprador pode legitimamente esperar. Forte para começar a construir, cedo para prometer retorno." },
                    { titulo: "Restrição de acesso por faixa etária como padrão global", desc: "Duas jurisdições grandes na mesma semana, ancoradas no mesmo parâmetro multilateral. É convergência real, mas ainda são dois casos: falta ver se outras redes seguem ou se o corte por idade recua na prática." },
                    { titulo: "Consolidação editorial por função regulada", desc: "Comprar plataforma de avaliação no mês em que avaliação virou regulada pode ser leitura estratégica precisa ou coincidência de calendário. Uma transação não estabelece padrão — vale acompanhar se outros grupos se movem na mesma direção." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-7 border border-blue-100">
                <p className="font-bold text-blue-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Tendência real
                </p>
                <p className="text-[11px] text-blue-700 mb-5 font-medium">Evidência convergente, já move roadmap</p>
                <div className="space-y-5">
                  {[
                    { titulo: "A decisão sobre o aluno é indelegável", desc: "Três edições subindo de camada e agora com força normativa, princípio declarado pelo relator e convergência com parâmetro internacional. Deixou de ser posição pedagógica e virou critério de arquitetura com consequência jurídica." },
                    { titulo: "Rastro de decisão como infraestrutura", desc: "A norma pede supervisão contínua e relatório no alto risco, e a única forma de atender é registrar. Não é tendência de mercado: é requisito com prazo, e o custo de começar tarde é estrutural." },
                    { titulo: "Formação docente como obrigação institucional", desc: "Quatro edições de escalada e agora dever legal nas licenciaturas e na formação continuada, com a oferta gratuita já capturada por quem vem de fora do setor. A escola perdeu a opção de não formar." },
                    { titulo: "Regulação por finalidade, não por tecnologia", desc: "A escolha de desenho do CNE — regular o que a aplicação pode decidir, e não qual ferramenta usar — dá sobrevida à norma diante de modelo novo. É o método que outras jurisdições tendem a copiar." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-[#6B46C1]" />
                <p className="font-bold text-gray-900">O padrão desta quinzena</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                O setor passou cinco edições esperando uma regra que parecia não chegar, e quando chegou não fez o que se temia. Não proibiu a tecnologia nem a liberou com ressalvas vagas: recortou por finalidade e devolveu ao professor a assinatura da decisão sobre o aluno. Quem lia a regulação como risco de restrição errou o alvo — o risco real era o oposto, é de ter construído produto que decide sozinho. E há uma ironia útil aqui: a arquitetura que a norma acabou de exigir é a mesma que um par direto brasileiro escolheu por conta própria antes de existir regra, e foi premiado por isso. A conformidade que vai valer na mesa de compra não é a que se declara em doze meses; é a que já tem histórico. O relógio começa na homologação, mas a vantagem começou a ser construída antes dela.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
        </>
      )}

      {/* ── OPORTUNIDADES DE PRODUTO ── */}
      <section id="oportunidades" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Prioridades Estratégicas</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              O que isso muda no <span className="text-[#6B46C1]">nosso produto</span>
            </h2>
            <p className="text-gray-600 mb-4 text-lg max-w-3xl">
              O que os sinais desta quinzena mudam, na prática, para o nosso roadmap.
            </p>

            {/* Legenda prioridade */}
            <div className="flex items-center gap-6 mb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#6B46C1]" />
                <span className="text-sm text-gray-600"><strong>Alta</strong> — janela estreita, agir agora</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
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
                  rastreio: "Sinal 1",
                  sinal: "A norma exige supervisão humana contínua e relatório nos usos de alto risco, e proíbe a máquina de assinar avaliação e punição",
                  problema: "Nossos fluxos em que a IA propõe nota, classificação ou alerta não registram quem validou, com base em quê e quando. Sem esse registro, não há como demonstrar conformidade — e o rastro não é reconstituível depois.",
                  oportunidade: "Registro de decisão pedagógica como infraestrutura",
                  impacto: "Log imutável de cada decisão sobre o aluno, com autoria da validação, versão do modelo e intervenção humana. Deixa de ser diferencial e passa a ser licença para operar em rede pública e mantenedor — mas quem tiver primeiro tem histórico, e histórico é a única conformidade que não se improvisa.",
                  professor: "Ganha respaldo documentado quando sua decisão divergir da sugestão da máquina.",
                  aluno: "Passa a ter direito verificável a uma decisão humana sobre sua trajetória, não apenas prometida.",
                  gestor: "Tem o que apresentar em auditoria e em processo de compra, no lugar de declaração de intenção.",
                  roadmapItem: "Definir esquema de evento antes da próxima feature; retrofit é impossível, não apenas caro.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Produto / Engenharia"
                },
                {
                  rastreio: "Sinal 1 e ausência registrada",
                  sinal: "A norma classifica aplicações em quatro faixas de risco e nenhum player brasileiro publicou onde seus próprios produtos se encaixam",
                  problema: "Não sabemos qual é a nossa exposição real. Sem o inventário das decisões automatizadas por faixa, a adequação vira reação a interpretação de terceiro.",
                  oportunidade: "Mapa próprio de conformidade, publicado antes dos pares",
                  impacto: "Inventário de cada decisão automatizada, classificada por finalidade e por quem assina. Custo próximo de zero em desenvolvimento e alto em tempo sênior — e quem publica primeiro define o formato de resposta que os concorrentes terão de adotar. É a lacuna mais barata desta edição.",
                  professor: "Passa a saber, por recurso, o que o sistema decide e o que depende dele.",
                  aluno: "Efeito indireto: transparência sobre onde há decisão automatizada na sua trajetória.",
                  gestor: "Recebe do fornecedor o documento que ele mesmo teria de produzir para a rede.",
                  roadmapItem: "Exercício conjunto de produto, pedagógico e jurídico nesta janela; independe da homologação.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Produto / Compliance"
                },
                {
                  rastreio: "Sinais 1 e 2",
                  sinal: "Uso autônomo vedado até o 5º ano aqui, moratória até o 8º em Nova York com desligamento de função em mais de 38 programas já autorizados",
                  problema: "Se uma rede nos pedir amanhã para desativar IA apenas nos anos iniciais, não temos controle granular para fazer isso sem tirar função de quem pode usá-la.",
                  oportunidade: "Desligamento de função por série, turma e rede",
                  impacto: "Controle hierárquico remoto, sem nova versão. Vira condição de permanência em contrato, não só de venda — o precedente de uma rede exigindo isso de dezenas de fornecedores simultaneamente já existe. Resolve um problema que o cliente brasileiro ainda não formulou, mas vai formular.",
                  professor: "Mantém acesso às funções da sua etapa sem ser afetado por restrição de outra faixa.",
                  aluno: "Tem a proteção da norma aplicada de fato, e não por retirada geral do recurso.",
                  gestor: "Cumpre a vedação sem suspender o contrato inteiro nem gerenciar exceções manualmente.",
                  roadmapItem: "Flags com escopo hierárquico e integração confiável ao cadastro do aluno; testar a matriz de estados.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Engenharia / Contratos"
                },
                {
                  rastreio: "Sinais 1 e 3",
                  sinal: "Correção de prova objetiva segue permitida como apoio, desde que a validação humana seja documentada — e um grupo editorial acabou de comprar capacidade de avaliação por IA",
                  problema: "Correção automática resolve a dor mais concreta do professor e é justamente onde a norma traçou a linha. Sem fluxo de conferência registrável, o ganho de tempo vira risco de conformidade.",
                  oportunidade: "Fluxo de validação humana que não devolve o trabalho ao professor",
                  impacto: "Revisão em lote com amostragem guiada pela confiança do modelo, destaque dos itens duvidosos e registro por item. Preserva a proposta de valor da correção automática dentro da regra — e atende a um mercado que acabou de ficar sem alternativa conforme.",
                  professor: "Confere o que importa em vez de tudo, e o sistema registra que ele conferiu.",
                  aluno: "Nota objetiva revisada por pessoa, com rastro de quem revisou.",
                  gestor: "Mantém o ganho operacional da correção em escala sem expor a instituição.",
                  roadmapItem: "Calibrar confiança por item antes de desenhar a amostragem; sem isso a revisão vira aleatória.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#C2410C] text-white",
                  area: "Produto / Avaliação"
                },
                {
                  rastreio: "Sinal 5",
                  sinal: "A norma cria dever de formação continuada e de conteúdo de IA nas licenciaturas, enquanto a oferta gratuita já está capturada por quem vem de fora do setor",
                  problema: "A escola passou a ser obrigada a formar e vai formar com quem estiver disponível. Catálogo gratuito e genérico resolve o custo dela e não cria nenhum vínculo com o nosso material.",
                  oportunidade: "Formação certificada ancorada no material adotado e na política da rede",
                  impacto: "Trilha gerada a partir do livro e da política que a escola configurou, com certificação que o mantenedor reconhece para cumprir a obrigação. É a lacuna que o catálogo gratuito estruturalmente não cobre, porque ele não conhece o currículo adotado.",
                  professor: "Aprende a usar IA no material que ele efetivamente adota, não em exemplo genérico.",
                  aluno: "Depende de professor formado para ter qualquer acesso mediado nos anos iniciais.",
                  gestor: "Cumpre o dever de formação com evidência aceitável e sem montar programa próprio.",
                  roadmapItem: "Vincular certificação à política configurada da rede — é o que transforma formação em retenção.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#C2410C] text-white",
                  area: "Formação / Comercial"
                },
                {
                  rastreio: "Sinal 1 e ausência recorrente",
                  sinal: "Avaliação de impacto passa a ser exigível no alto risco, e nenhuma instituição brasileira anunciou estudo de efeito sobre a própria base — segunda edição com a mesma ausência",
                  problema: "Quando a norma vigorar, quem não tiver linha de base não terá o que declarar. Coorte não se constrói retroativamente, e o prazo de doze meses não é suficiente para gerar série histórica.",
                  oportunidade: "Linha de base própria para avaliação de impacto",
                  impacto: "Definir coorte, consentimento e medição inicial agora, com parceria acadêmica independente. Cumpre a exigência futura e produz o ativo que nenhuma big tech consegue gerar sobre o contexto da escola brasileira. O custo de atraso aqui não é financeiro, é de impossibilidade.",
                  professor: "Participa de pesquisa que legitima a prática, em vez de ser objeto de medição externa.",
                  aluno: "Intervenções passam a ser calibradas por dado da própria rede.",
                  gestor: "Tem o que apresentar quando o relatório de impacto for cobrado.",
                  roadmapItem: "Fechar desenho metodológico e consentimento neste semestre; cada mês sem coleta é histórico perdido.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "Evidência / Pesquisa"
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
                  <p className="text-sm text-gray-600 mb-4 italic leading-relaxed">{item.sinal}</p>

                  <div className="border-l-2 border-red-400 pl-4 mb-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-red-700">Problema</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.problema}</p>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{item.oportunidade}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.impacto}</p>

                  <div className="border-l-2 border-[#C2410C] pl-4 space-y-2 mb-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#C2410C]">Impacto esperado</p>
                    {[
                      { label: 'Professor', valor: item.professor },
                      { label: 'Aluno', valor: item.aluno },
                      { label: 'Gestor', valor: item.gestor },
                    ].map(linha => (
                      <p key={linha.label} className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                      </p>
                    ))}
                  </div>

                  <div className="border-l-2 border-[#6B46C1] pl-4 mt-auto">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-[#6B46C1]">Implicação para roadmap</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.roadmapItem}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
      {/* ── SAÍDA DA LEITURA EXECUTIVA ── */}
      {modoExecutivo && (
        <section className="pb-20 px-6 bg-purple-50/30">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-purple-100 p-7 text-center">
              <p className="font-bold text-gray-900 mb-2">Fim da leitura executiva</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Nove seções ficaram de fora: as evidências por trás de cada conclusão, o mapa competitivo, o que não aconteceu, os casos de fora e o que já dá para plugar no roadmap.
              </p>
              <button
                onClick={() => {
                  setModoLeitura('completa');
                  setTimeout(() => scrollToSection('movimentos'), 80);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Arquivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Edições <span className="text-[#6B46C1]">Anteriores</span>
            </h2>
            <p className="text-gray-600 mb-12">
              Biblioteca viva do RADAR — histórico contínuo de inteligência estratégica
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Agosto 2026 · Ed. #10 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Agosto de 2026 · Ed. #10</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  A mediação pedagógica deixou de ser reserva de valor e virou default da plataforma
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  A evidência nomeou o comportamento que prejudica e a OpenAI embutiu o antídoto no produto. Mediar genericamente virou commodity em três semanas.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-agosto-2026-b')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Agosto 2026 · Ed. #09 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Agosto de 2026 · Ed. #09</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  A home virou o produto: a disputa saiu do conteúdo e foi para a camada que decide
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Classroom reconstrói a home por papel para 150M de usuários, Coursera aposta US$ 100 mi contra o próprio catálogo e o MEC institui o EducaLab.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-agosto-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Julho 2026 · Ed. #08 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Julho de 2026 · Ed. #08</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  A era dos anúncios acabou: consolidação — quem não constrói capacidade, compra
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Cogna vai a 90% do Educbank, Teachy faz o 1º M&A de IA em educação da AL, Khan admite 15% de uso e Anthropic lança o Claude for Teachers.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-julho-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Junho 2026 · Ed. #07 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Junho de 2026 · Ed. #07</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  O Gemini entrou direto no ENEM: a batalha é pelo estudante dentro do exame
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Google anuncia simulados gratuitos do ENEM com a Akira Enem, CNE encerra consulta pública e a disputa migra do produto para o canal de distribuição.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-junho-2026-b')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Junho 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Junho de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  O Brasil no ponto de inflexão: IA virou objeto de regulação, capital e escala
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  CNE aprova semáforo de riscos, BNDES injeta R$ 300M na Positivo e Plurall IA gera 26 mil PEIs em 3 meses.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-junho-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
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
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Maio de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  A próxima disputa não será pela melhor funcionalidade
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Mercado migra de features isoladas para ecossistemas integrados. CNE regulamenta, Moderna Core e Positivo+AWS definem novo benchmark.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-maio-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
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
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Abril de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  MEC abre sandbox para testar IA na educação
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Análise sobre ambiente de experimentação para avaliar soluções educacionais com IA e antecipação de critérios de validação no setor.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-abril-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-5">
              <img
                src={liaFooter}
                alt="Lia — mascote do RADAR"
                className="h-20 md:h-24 w-auto drop-shadow-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-wide">
              RADAR
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-1 font-medium">
              Inteligência Estratégica de IA na Educação
            </p>
            <p className="text-white/50 text-xs mb-6">
              Sinais · Padrões · Riscos · Oportunidades para produtos educacionais
            </p>

            <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
              O RADAR é um sistema contínuo de inteligência estratégica que transforma movimentos de mercado, concorrência, pesquisa, tecnologia e regulação em sinais, padrões, riscos e oportunidades para produtos educacionais.
            </p>

            <div className="pt-6 border-t border-white/15 space-y-1.5">
              <p className="text-white/60 text-sm">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
              <p className="text-white/50 text-sm">Hub de IA — Iônica &amp; FTD Com Você</p>
              <p className="text-white/30 text-xs mt-2">Setembro de 2026 · Edição #11 · 25 ago – 10 set</p>
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
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-[#C2410C] hover:bg-[#9A3412] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </div>
    </MotionConfig>
  );
}
