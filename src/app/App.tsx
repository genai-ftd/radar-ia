import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  Library
} from 'lucide-react';
import logoIonica from '../imports/Logo-ionica_(1).png';
import logoIonicaSmall from '../imports/Logo-ionica_(1)-1.png';
import logoFTD from '../imports/ftd_com_voce_logo.png';
import mascoteIA from '../imports/ionia-1.png';

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b' | 'edicao-julho-2026' | 'edicao-agosto-2026';

// ─── Edição Abril 2026 (arquivo) ────────────────────────────────────────────
function EdicaoAbril2026({
  onBack,
  onBackToEdicoes,
  mascote,
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
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
            <img src={mascote} alt="RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
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
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
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
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
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
          <img src={mascote} alt="RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
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
            <img src={mascote} alt="RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
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
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
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
          <img src={mascote} alt="RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
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
            <img src={mascote} alt="RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
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
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
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
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
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
          <img src={mascote} alt="RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
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
            <img src={mascote} alt="RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
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
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
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
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
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
          <img src={mascote} alt="RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
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
            <img src={mascote} alt="RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
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
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
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
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
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
          <img src={mascote} alt="RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
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
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
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
            <img src={mascote} alt="RADAR" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
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
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
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
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
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
          <img src={mascote} alt="RADAR" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
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


export default function App() {
  const [activeSection, setActiveSection] = useState('insight');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentView, setCurrentView] = useState<View>('main');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['insight', 'resumo', 'movimentos', 'ausencias', 'recorrentes', 'concorrencia', 'benchmarks', 'aceleradores', 'experts', 'analise', 'hype', 'oportunidades', 'edicoes'];
      const current = sections.find(section => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        mascote={mascoteIA}
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
        mascote={mascoteIA}
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
        mascote={mascoteIA}
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
        mascote={mascoteIA}
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
        mascote={mascoteIA}
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
        mascote={mascoteIA}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white/96 backdrop-blur-md z-50 border-b border-gray-100/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Linha 1 — identidade + direita */}
          <div className="flex items-center justify-between h-12 md:h-14">

            {/* Identidade — mascote + nome */}
            <div className="flex items-center gap-3">
              <img src={mascoteIA} alt="RADAR" className="h-10 md:h-11 w-auto flex-shrink-0" />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-sm md:text-base font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>RADAR</span>
                <span className="hidden md:inline text-[11px] text-gray-400 font-normal mt-0.5">Inteligência Estratégica de IA na Educação</span>
              </div>
            </div>

            {/* Direita — edição + logos parceiros */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex flex-col items-end leading-none">
                <span className="text-[11px] font-bold text-[#6B46C1] uppercase tracking-widest">Edição #10</span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">04 – 24 Ago 2026</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <img src={logoIonica} alt="Iônica" className="h-5 w-auto" style={{ filter: 'grayscale(100%) opacity(0.45)' }} />
              <div className="w-px h-4 bg-gray-200" />
              <img src={logoFTD} alt="FTD Com Você" className="h-4 w-auto" style={{ filter: 'grayscale(100%) opacity(0.40)' }} />
            </div>
          </div>

          {/* Linha 2 — nav centralizada com respiro */}
          <nav className="flex items-center justify-start md:justify-center gap-1 pb-2 overflow-x-auto flex-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: 'insight', label: 'Insight' },
              { id: 'resumo', label: 'Resumo' },
              { id: 'movimentos', label: 'Sinais' },
              { id: 'ausencias', label: 'Ausências' },
              { id: 'recorrentes', label: 'Recorrentes' },
              { id: 'concorrencia', label: 'Concorrência' },
              { id: 'benchmarks', label: 'Benchmarks' },
              { id: 'aceleradores', label: 'Aceleradores' },
              { id: 'experts', label: 'Experts' },
              { id: 'analise', label: 'Análise' },
              { id: 'hype', label: 'Hype' },
              { id: 'oportunidades', label: 'Oportunidades' },
              { id: 'edicoes', label: 'Arquivo' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? 'bg-[#6B46C1] text-white'
                    : 'text-gray-500 hover:bg-purple-50 hover:text-[#6B46C1]'
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA QUINZENA</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl text-gray-900 font-bold mb-8 leading-tight">
              A mediação pedagógica<br />
              deixou de ser <span className="text-[#6B46C1]">a nossa reserva de valor</span><br />
              <span className="text-[#FF6B35]">e virou default da plataforma</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                A evidência desta janela não disse que IA faz mal — disse exatamente <strong className="text-[#6B46C1]">qual comportamento faz mal</strong>: terceirizar a tarefa, entregar rápido demais com nota alta. Semanas depois, em 18 de agosto, a OpenAI embutiu no ChatGPT for Teens o antídoto correspondente: o sistema detecta quando o adolescente está tentando pular a tarefa e o empurra de volta para o modo de estudo, com passo a passo em vez de resposta. <strong className="text-[#6B46C1]">O remédio que a escola deveria aplicar passou a vir de fábrica</strong> — de graça, ligado por padrão, direto no aparelho de quem tem 13 a 17 anos.
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">A tensão que organiza esta edição</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50/60 rounded-xl p-5 border border-red-100">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide">O que perdemos</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Mediar o uso era a resposta que sobrava para quem está dentro da escola quando o acesso virou grátis. Deixou de ser: a plataforma agora media sozinha, em escala global, sem pedir licença para a rede e sem cobrar por isso.
                    </p>
                  </div>
                  <div className="bg-green-50/60 rounded-xl p-5 border border-green-100">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wide">O que ela não consegue ver</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A trava da plataforma é genérica: não sabe qual capítulo a turma viu, o que o professor pediu, onde aquele aluno errou no bimestre passado nem o que a escola decidiu permitir. Ela media a tarefa; não media o currículo.
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-purple-50 rounded-xl p-5 border-l-4 border-[#6B46C1]">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-bold text-[#6B46C1]">A conclusão:</span> a disputa não é mais sobre <em>se</em> o produto media — isso a big tech já entrega. É sobre mediar com o contexto que ela não tem. Mediação genérica virou commodity no dia 18; mediação curricular ainda não tem dono no Brasil.
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

      {/* ── DUAS VELOCIDADES DE LEITURA ── */}
      <section className="py-12 px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">Duas velocidades de leitura</p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-[#6B46C1] p-6 bg-purple-50/40">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-[#6B46C1]" />
                  <p className="font-bold text-gray-900 text-sm">Leitura executiva — 3 minutos</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Com pouco tempo? Estes três blocos contam a edição inteira: a mudança da quinzena, o que ela obriga a revisar e o que fazer com isso.
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {['insight', 'resumo', 'oportunidades'].map((id, idx, arr) => (
                    <span key={id} className="flex items-center gap-2">
                      <button
                        onClick={() => scrollToSection(id)}
                        className="px-3 py-1.5 rounded-lg bg-[#6B46C1] text-white text-xs font-semibold hover:bg-[#5B3A9E] transition-colors capitalize"
                      >
                        {id === 'resumo' ? 'Resumo' : id === 'insight' ? 'Insight' : 'Oportunidades'}
                      </button>
                      {idx < arr.length - 1 && <span className="text-gray-300 text-xs">→</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border-2 border-gray-200 p-6 bg-gray-50/60">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-4 h-4 text-gray-500" />
                  <p className="font-bold text-gray-900 text-sm">Leitura aprofundada — Produto, Dados e Engenharia</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  As evidências por trás de cada conclusão, o mapa competitivo, os casos de fora e o que já dá para plugar no roadmap.
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'movimentos', label: 'Sinais' },
                    { id: 'ausencias', label: 'Ausências' },
                    { id: 'recorrentes', label: 'Recorrentes' },
                    { id: 'concorrencia', label: 'Concorrência' },
                    { id: 'benchmarks', label: 'Benchmarks' },
                    { id: 'aceleradores', label: 'Aceleradores' },
                    { id: 'experts', label: 'Experts' },
                    { id: 'analise', label: 'Análise' },
                    { id: 'hype', label: 'Hype' },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-600 text-[11px] font-medium hover:border-[#6B46C1] hover:text-[#6B46C1] transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
            <p className="text-gray-500 mb-12 text-lg max-w-3xl">
              O que a liderança precisa entender em dois minutos, com a decisão que cada ponto força.
            </p>

            <div className="space-y-4">
              {[
                {
                  tag: "Hipótese revista",
                  tagCor: "bg-red-100 text-red-700",
                  conclusao: "A tese que sustentava a edição passada caiu em três semanas",
                  raciocinio: "A #09 e o começo desta janela trabalhavam com a ideia de que a distribuição gratuita entregava acesso, mas não mediação — e que mediar seria a reserva de valor de quem está na escola. O lançamento do ChatGPT for Teens invalidou isso: a trava de atalho agora é nativa, gratuita e ligada por padrão. Quem tiver 'uso responsável' no roadmap como diferencial precisa reescrever a justificativa antes do próximo comitê.",
                  decisao: "Reposicionar a narrativa de mediação de diferencial para pré-requisito, e mover o diferencial para a camada curricular."
                },
                {
                  tag: "Reprecificação",
                  tagCor: "bg-orange-100 text-orange-700",
                  conclusao: "Duas linhas de receita planejadas viraram produto gratuito de concorrente indireto",
                  raciocinio: "Acesso a IA de ponta e formação docente em IA estavam em planos de monetização de vários sistemas de ensino. Ambos passaram a existir de graça e com boa qualidade na mesma quinzena, vindos de fora do setor educacional. Não é perda de participação — é desaparecimento da linha.",
                  decisao: "Tirar acesso e formação genérica da projeção de receita; manter apenas formação ancorada na BNCC, no material adotado e com certificação que o mantenedor reconhece."
                },
                {
                  tag: "Régua nova",
                  tagCor: "bg-purple-100 text-purple-700",
                  conclusao: "A conversa saiu de quantos usam para que efeito produz",
                  raciocinio: "Existe agora um número citável de perda de aprendizagem associada a um padrão de uso específico, com metodologia longitudinal e chancela de organismo multilateral apontando na mesma direção. A partir daqui, afirmar que o produto melhora a aprendizagem sem medir passa a ser risco reputacional — inclusive na conversa com pais e mantenedores.",
                  decisao: "Definir nesta janela qual métrica de efeito o produto vai sustentar publicamente em 12 meses, e quem produz o dado."
                },
                {
                  tag: "Lacuna medida",
                  tagCor: "bg-blue-100 text-blue-700",
                  conclusao: "O vácuo de governança deixou de ser percepção e virou número comparável entre países",
                  raciocinio: "A maior base já reunida sobre IA no ensino superior mostra adoção quase universal convivendo com orientação institucional escassa — e a América Latina aparece acima da média global em uso e abaixo do necessário em preparo. É a primeira vez que dá para dimensionar o buraco em vez de descrevê-lo.",
                  decisao: "Tratar política de uso como entregável de produto com dono e prazo, não como documento jurídico de apoio."
                },
                {
                  tag: "Risco de planejamento",
                  tagCor: "bg-gray-200 text-gray-700",
                  conclusao: "Esperar a norma brasileira deixou de ser estratégia viável",
                  raciocinio: "É a terceira edição consecutiva sem homologação do parecer de IA, e agora o colegiado que o sustenta está em recomposição — ou seja, quem relata e defende o texto pode mudar. A indefinição saiu do campo do 'vai sair a qualquer momento' e virou variável de planejamento com horizonte aberto.",
                  decisao: "Assumir governança configurável por nível de risco no roadmap, dimensionada para absorver o texto final sem retrabalho."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${item.tagCor}`}>{item.tag}</span>
                  </div>
                  <p className="font-bold text-gray-900 mb-2 text-base">{item.conclusao}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.raciocinio}</p>
                  <div className="bg-purple-50 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#6B46C1]">Decisão que isso força:</span> {item.decisao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

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
              Os cinco sinais da <span className="text-[#6B46C1]">quinzena</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg max-w-3xl">
              Cinco movimentos que mudaram de direção — cada um reunindo os acontecimentos relacionados, com o que sustenta a leitura e o que decorre dela.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "A plataforma passou a mediar o uso sozinha — e por padrão",
                  empresa: "OpenAI · Google · Anthropic",
                  data: "04–20 ago/2026",
                  consolida: "ChatGPT for Teens (18/ago) · plugins educacionais da OpenAI (4/ago) · ano gratuito e hub de estudo do Gemini (20/ago) · Claude Academy (20/ago)",
                  resumo: "Em 18 de agosto a OpenAI lançou o ChatGPT for Teens, aplicado automaticamente a usuários de 13 a 17 anos e a quem o sistema de estimativa de idade considerar menor de 18. O centro da experiência é o Study Mode, que responde com perguntas-guia e passo a passo em vez de entregar a solução; junto vieram os responsible homework reminders, que identificam quando o adolescente parece estar tentando atalhar uma tarefa e o redirecionam para o modo de estudo, além de Study Hours — janelas em que o modo fica ligado por padrão, definidas pelo próprio aluno ou pelos pais — quizzes e visualizações interativas. Duas semanas antes, em 4 de agosto, a empresa havia publicado três plugins educacionais (K-12 Educator, College Educator e College Student) em workspaces institucionais, que usam o material do próprio curso para executar tarefas de várias etapas. Na mesma janela, o Google abriu um ano gratuito de plano pago do Gemini a universitários em mais de 140 países, com um hub de estudo que substitui o chat aberto por quiz diagnóstico, lições curtas sobre o material que o aluno sobe e progresso que persiste entre sessões; e a Anthropic lançou a Claude Academy, com 26 cursos gratuitos organizados por problema de trabalho.",
                  impacto: "As três maiores empresas de IA do mundo chegaram, por caminhos independentes, ao mesmo desenho: chat aberto não é formato de estudo, e o uso precisa ser contido por design. Isso encerra a discussão sobre se mediação é necessária — ela virou padrão de indústria em três semanas. E move a fronteira competitiva: mediar genericamente deixou de diferenciar qualquer produto educacional no dia em que passou a vir de fábrica no aparelho do aluno.",
                  professor: "A trava que ele pedia agora existe fora da escola, sem ele configurar. Ganha aliado inesperado e perde a exclusividade do argumento pedagógico.",
                  aluno: "O atalho ficou mais difícil no ChatGPT — e continua trivial em qualquer outra ferramenta sem trava. A proteção é por plataforma, não por aluno.",
                  gestor: "Não pode mais vender IA responsável como diferencial contratado: precisa mostrar o que sua mediação faz que a do ChatGPT não faz.",
                  roadmap: "Trava de atalho ancorada no que a turma está estudando; modo de estudo sobre o capítulo em uso, não sobre arquivo avulso que o aluno subiu.",
                  fonte: "https://openai.com/index/chatgpt-for-teens/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "A evidência parou de discutir se IA prejudica e nomeou qual comportamento prejudica",
                  empresa: "CEPR · OCDE",
                  data: "Paper jun/2026 · repercussão no Brasil em ago",
                  consolida: "CEPR Discussion Paper 21577 · OECD Digital Education Outlook 2026 · onda de cobertura na imprensa brasileira em agosto",
                  resumo: "O working paper The Generative AI Learning Penalty, de David Strömberg, Victor Lei e Yanhui Wu, acompanhou 26.811 estudantes chineses do 7º ao 12º ano por 30 meses, cruzando provas mensais de livro fechado, exames de admissão, notas e tempo de conclusão de tarefa em nove disciplinas. A adoção de IA elevou a nota do dever de casa em 18% e cortou 30% do tempo de execução — e derrubou a nota das provas mensais em cerca de 20% em seis meses, com penalidade de 18% a 24% nos exames de admissão ao longo de dois anos. O achado decisivo é o mecanismo: cerca de 80% da perda se concentra no grupo cujo comportamento indica terceirização da tarefa, identificado por tempo de execução anormalmente curto combinado com nota alta. As perdas foram maiores em humanidades, entre alunos mais novos e entre os de melhor desempenho. O paper é de junho, mas só ganhou circulação ampla na imprensa brasileira em agosto. Na mesma direção, o Digital Education Outlook 2026 da OCDE concluiu que IA generativa apoia a aprendizagem quando é desenhada para fim educativo ou usada sob orientação pedagógica clara.",
                  impacto: "O setor ganhou um número que pode ser usado contra ele — e, no mesmo pacote, a especificação do antídoto. A variável causal não é a ferramenta: é o padrão de uso. Isso converte desenho de uso de tese pedagógica em requisito mensurável, e explica por que as plataformas correram para embutir trava por conta própria.",
                  professor: "Ganha respaldo externo para exigir percurso em vez de entrega — e um critério objetivo de suspeita: rápido demais com nota alta.",
                  aluno: "O ganho aparece na tarefa e a conta chega na prova, seis meses depois. É um efeito que ele não consegue perceber sozinho.",
                  gestor: "Passa a ter dado independente para justificar política de uso e investimento em formação diante de mantenedor e famílias.",
                  roadmap: "Instrumentar o par tempo-de-execução × acerto como sinal de risco; desenhar o percurso para que o esforço seja o caminho mais curto.",
                  fonte: "https://cepr.org/publications/dp21577",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "O vácuo de governança ganhou tamanho, comparação internacional e recorte latino-americano",
                  empresa: "Digital Education Council · Opera",
                  data: "Ago/2026",
                  consolida: "AI in Higher Education Global Survey 2026 · recorte LATAM da mesma pesquisa · levantamento Opera com estudantes brasileiros",
                  resumo: "O Digital Education Council publicou a maior base já reunida sobre IA no ensino superior: 45.398 respostas — 27.284 estudantes e 18.114 docentes — em 35 países. O uso chegou a 88% entre estudantes e 77% entre docentes, alta de 16 pontos percentuais sobre 2025. O recorte latino-americano é ainda mais alto: 92% dos estudantes e 79% dos docentes. O contraste está no preparo institucional: 57% dos estudantes dizem que as avaliações vêm com orientação inadequada sobre IA, apenas 29% acreditam que seus professores estão preparados para orientá-los e somente 31% dos docentes concordam que a instituição os envolve de forma significativa na construção da política de IA. No Brasil, levantamento da Opera com 2.400 estudantes apontou 78% usando IA em tarefas e 5% com orientação formal.",
                  impacto: "Pela primeira vez o buraco de governança tem tamanho e permite comparação entre regiões — e a América Latina aparece com adoção acima da média global e preparo abaixo do necessário. O dado mais acionável não é o de adoção: é o de que menos de um terço dos docentes participa da política de IA da própria instituição. Política escrita sem o professor não muda prática de sala; é aí que o produto entra.",
                  professor: "É maioria absoluta usando IA e minoria sendo ouvida sobre as regras. A política chega como imposição, não como instrumento de trabalho.",
                  aluno: "Usa mais do que a média mundial e recebe menos orientação do que precisa — combinação que a evidência do Sinal 2 mostra ser a mais custosa.",
                  gestor: "Tem agora referência externa para dimensionar o próprio atraso e defender orçamento de formação e governança.",
                  roadmap: "Política de uso como artefato configurável e versionável no produto, com fluxo de construção que inclui o professor — não PDF anexo.",
                  fonte: "https://www.digitaleducationcouncil.com/resource-library-items/ai-in-higher-education-global-survey-2026",
                  color: "from-purple-600 to-violet-600"
                },
                {
                  titulo: "Os sistemas de ensino brasileiros convergiram para o mesmo desenho de produto",
                  empresa: "Bernoulli · Poliedro · Arco · Santillana",
                  data: "11–20 ago/2026",
                  consolida: "Bernoulli Reload · hub Cosmos do Poliedro · Meu Arco · Moderna Core",
                  resumo: "O Bernoulli Reload reuniu mais de 800 gestores e mantenedores em São Paulo em 11 de agosto, apresentando portfólio já em operação e segmentado por público: CoCria para o professor, TutorIA e PraticAI para o aluno, Radar ENEM e MatriculAI para o mantenedor — o Radar converte microdados públicos do ENEM em diagnóstico pedagógico. O mesmo desenho aparece nos pares: o Cosmos, do Poliedro, roda IA generativa com respostas restritas ao conteúdo autoral; o Meu Arco integra gestão, ensino, comunicação (ClassApp) e financeiro (isaac) numa camada só; e o Moderna Core combina inteligência curricular, microtestes e IA operando nos bastidores.",
                  impacto: "Quatro grupos que competem entre si chegaram à mesma arquitetura: IA restrita ao acervo proprietário, segmentada por papel e alimentada por dado da própria rede. Convergência dessa ordem não é tendência — é padrão consolidado, e portanto custo de entrada. O diferencial de quem opera no Brasil deixou de estar no desenho e passou a estar na única camada em que ainda há dispersão: o que se faz com o dado de percurso do aluno.",
                  professor: "Assistente ancorado no material que ele adota virou expectativa mínima do mercado, não novidade de catálogo.",
                  aluno: "Tutoria dentro do sistema de ensino, com o conteúdo da escola — desde que ele prefira isso à ferramenta gratuita que já tem no celular.",
                  gestor: "A conversa comercial já é sobre diagnóstico, matrícula e evidência. Quem chegar falando de acesso a IA está um ciclo atrás.",
                  roadmap: "Parar de investir em paridade de funcionalidade com os pares e mover esforço para evidência de percurso, onde ninguém chegou.",
                  fonte: "https://educador21.com/ia-desafia-escolas-repensar-gestao-formacao/",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  titulo: "A regulação brasileira travou de novo — agora com o colegiado se reorganizando",
                  empresa: "MEC / CNE",
                  data: "12 ago/2026",
                  consolida: "Portaria MEC nº 664 · parecer de IA aprovado em maio e sem homologação desde então",
                  resumo: "A Portaria MEC nº 664, de 12 de agosto, divulgou a relação de entidades civis habilitadas a indicar nomes para a recomposição da Câmara de Educação Básica e da Câmara de Educação Superior do CNE, com lista tríplice a ser protocolada até 28 de agosto. Em paralelo, o parecer que estabelece as diretrizes de IA na educação básica e superior — aprovado em 11 de maio, com classificação por níveis de risco e passagem por consulta pública em junho — segue aguardando homologação do ministro para entrar em vigor.",
                  impacto: "A janela de adequação continua aberta pela terceira edição consecutiva, mas por um motivo qualitativamente diferente: não é lentidão de trâmite, é troca de composição do colegiado que sustenta o texto. Isso amplia o horizonte de indefinição e, ao mesmo tempo, abre uma janela rara de interlocução técnica enquanto as câmaras se reorganizam.",
                  professor: "Segue sem norma nacional que defina o que pode e o que não pode em sala; a decisão continua recaindo sobre a escola.",
                  aluno: "Continua sem direito assegurado a orientação formal — exatamente a lacuna que o Sinal 3 dimensiona.",
                  gestor: "Precisa de política própria agora, desenhada para convergir com os níveis de risco do parecer quando ele for homologado.",
                  roadmap: "Governança parametrizável por nível de risco, para absorver o texto final por configuração e não por reescrita.",
                  fonte: "https://www.poder360.com.br/poder-educacao/cne-aprova-diretrizes-sobre-uso-de-ia-na-educacao/",
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
                        <span className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">
                          <Calendar className="w-3 h-3" /> {m.data}
                        </span>
                      </div>
                      <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#6B46C1] transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#6B46C1] bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Sinal {i + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 leading-snug">{m.titulo}</h3>
                    <div className="flex items-start gap-1.5 mb-3 bg-gray-50 rounded-lg px-3 py-2">
                      <Library className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        <span className="font-semibold text-gray-600">Consolida:</span> {m.consolida}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{m.resumo}</p>
                    <div className="bg-purple-50 rounded-xl p-4 mb-4">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Leitura estratégica</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{m.impacto}</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-50/50 rounded-xl p-4 space-y-2">
                      <p className="text-xs font-semibold text-[#FF6B35] mb-1">Consequência prática</p>
                      {[
                        { label: 'Professor', valor: m.professor },
                        { label: 'Aluno', valor: m.aluno },
                        { label: 'Gestor', valor: m.gestor },
                        { label: 'Roadmap', valor: m.roadmap },
                      ].map(linha => (
                        <p key={linha.label} className="text-xs text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                        </p>
                      ))}
                    </div>
                    <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg group-hover:bg-[#6B46C1] group-hover:text-white transition-all font-medium text-sm mt-4">
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
              <AlertCircle className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">Sinais de Ausência</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-3">
              O espaço que <span className="text-[#6B46C1]">ninguém ocupou</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-3xl">
              Cada item abaixo era razoável esperar nesta janela, não veio, e por isso segue disponível para quem chegar primeiro.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  cat: "Ninguém respondeu à trava de atalho com uma versão curricular",
                  nota: "A OpenAI embutiu detecção de terceirização de tarefa em produto de massa. Nenhum sistema de ensino brasileiro — que tem o que a OpenAI não tem: o capítulo, a turma, o gabarito e o histórico — anunciou equivalente ancorado no currículo.",
                  leitura: "A vaga mais valiosa da edição. O padrão foi validado por quem inventou a categoria, e a versão contextualizada continua sem dono.",
                  janela: "Janela curta"
                },
                {
                  cat: "Nenhuma big tech devolveu dado de uso para a escola",
                  nota: "Google, OpenAI e Anthropic distribuíram ferramenta direto ao aluno e ao professor sem abrir para a instituição o que esse uso produz. A escola vê o resultado da prova; não vê o que aconteceu antes dela.",
                  leitura: "A assimetria não é acidental — é o modelo de negócio. Quem estiver dentro da escola é o único capaz de fechar o ciclo entre uso e resultado, e isso não é replicável de fora.",
                  janela: "Vantagem estrutural"
                },
                {
                  cat: "Nenhum player transformou política de uso em produto",
                  nota: "Com governança institucional escassa e a norma nacional parada, a política de uso segue tratada como documento jurídico avulso. Ninguém a empacotou como artefato configurável, versionável e auditável dentro da plataforma.",
                  leitura: "É a lacuna com maior descasamento entre urgência e esforço: o problema está medido, a norma não chega e nenhum concorrente construiu a resposta.",
                  janela: "Janela aberta"
                },
                {
                  cat: "Nenhuma evidência longitudinal brasileira entrou em campo",
                  nota: "A penalidade de aprendizagem foi medida em coorte chinesa. Nenhuma rede, grupo ou universidade brasileira anunciou estudo de efeito com desenho comparável sobre a própria base instalada.",
                  leitura: "Quem começar a medir agora terá dado próprio quando o debate exigir prova local — e uma coorte não se constrói retroativamente.",
                  janela: "Custo de atraso alto"
                },
                {
                  cat: "O EducaLab completou a janela sem chamada pública",
                  nota: "O laboratório de dados e IA do MEC foi instituído prevendo parceria com universidades, centros de pesquisa e empresas, e não publicou edital até o fechamento desta edição.",
                  leitura: "A porta formal segue fechada, o que mantém a aproximação técnica informal como via mais barata de influenciar critério antes de ele virar exigência.",
                  janela: "Monitorar"
                },
                {
                  cat: "Nenhum grupo brasileiro se posicionou publicamente sobre a evidência",
                  nota: "O achado de perda de aprendizagem circulou amplamente na imprensa nacional em agosto. Nenhum dos grandes sistemas de ensino publicou leitura própria explicando como seus produtos evitam o efeito descrito.",
                  leitura: "Silêncio coletivo cria assimetria de autoridade: quem falar primeiro com dado próprio define o enquadramento; quem falar depois responde ao enquadramento alheio.",
                  janela: "Janela curta"
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-5 hover:border-[#FF6B35] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      item.janela === 'Janela curta' ? 'bg-red-100 text-red-700'
                      : item.janela === 'Janela aberta' ? 'bg-orange-100 text-orange-700'
                      : item.janela === 'Custo de atraso alto' ? 'bg-purple-100 text-purple-700'
                      : item.janela === 'Vantagem estrutural' ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                    }`}>{item.janela}</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.cat}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.nota}</p>
                  <div className="bg-orange-50/60 rounded-lg px-3 py-2">
                    <p className="text-[11px] text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#FF6B35]">Por que a vaga importa:</span> {item.leitura}
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
              Estrutural, emergente ou <span className="text-[#6B46C1]">pontual?</span>
            </h2>
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              O que reaparece ciclo após ciclo merece roadmap; o que apareceu uma vez merece monitoramento.
            </p>

            <div className="flex items-center gap-5 mb-10 flex-wrap">
              {[
                { t: 'Estrutural', d: 'atravessa 3+ edições — entra no roadmap', c: 'bg-red-100 text-red-700' },
                { t: 'Emergente', d: '2 edições ou aceleração recente — posicionar', c: 'bg-orange-100 text-orange-700' },
                { t: 'Pontual', d: 'aparição isolada — monitorar', c: 'bg-gray-200 text-gray-700' },
              ].map(l => (
                <div key={l.t} className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${l.c}`}>{l.t}</span>
                  <span className="text-xs text-gray-500">{l.d}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {[
                {
                  tema: "Distribuição direto ao aluno, contornando a escola",
                  tipo: "Estrutural",
                  trilha: "#07 Gemini no ENEM → #08 Claude for Teachers → #09 home do Classroom por papel → #10 ano gratuito do Gemini e ChatGPT for Teens",
                  leitura: "Quatro edições seguidas escalando de produto para canal, de canal para subsídio e agora para experiência dedicada por faixa etária. É a tendência mais consistente das últimas quatro edições — e a #10 mostra que ela não parou no acesso: avançou para dentro da pedagogia.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Evidência de aprendizagem como campo de disputa",
                  tipo: "Estrutural",
                  trilha: "#08 Khan admite 15% de uso real → #09 Estônia acopla pesquisa longitudinal ao rollout → #10 penalidade medida em coorte de 30 meses",
                  leitura: "Saiu de métrica de vaidade para evidência científica e agora para evidência contrária, com mecanismo causal identificado. A régua subiu em três edições consecutivas e não deu sinal de estabilizar.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Regulação brasileira travada na última milha",
                  tipo: "Estrutural",
                  trilha: "#07 CNE aprova e abre consulta → #08 consulta encerrada → #09 sem homologação → #10 sem homologação e câmaras em recomposição",
                  leitura: "O padrão deixou de ser demora e virou instabilidade institucional. A leitura prática muda de esperar para blindar: produto com governança configurável em vez de produto que assume um texto que não chega.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Ecossistema integrado sobre conteúdo autoral",
                  tipo: "Estrutural",
                  trilha: "#05 Moderna Core → Bett 2026 com Meu Arco, Cosmos e Estação → #10 portfólio Bernoulli segmentado por papel, já em operação",
                  leitura: "O tema mais antigo em acompanhamento e o que mais amadureceu: saiu do palco de feira e entrou na rotina. Concluiu a trajetória de diferencial competitivo a custo de entrada — e é isso que libera a próxima fronteira.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Contenção do uso embutida no próprio produto",
                  tipo: "Emergente",
                  trilha: "#09 home que decide o que cada papel vê → #10 modo de estudo padrão, trava de atalho e janelas de estudo definidas por pais",
                  leitura: "Segunda edição consecutiva em que a interface deixa de ser neutra e passa a induzir comportamento. Na #09 era sobre o que mostrar; na #10 é sobre o que impedir. Ainda não tem três ciclos, mas acelerou rápido demais para tratar como pontual.",
                  cor: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-100 text-orange-700"
                },
                {
                  tema: "Formação docente como camada de produto",
                  tipo: "Emergente",
                  trilha: "#08 Claude for Teachers → #09 formação citada como gargalo em benchmark internacional → #10 catálogo gratuito consolidado e caso do Piauí evidenciando pré-condição",
                  leitura: "Passou de brinde comercial a pré-condição de adoção em três ciclos, mas mudou de natureza no meio do caminho: era receita potencial e virou custo subsidiado por concorrente indireto. Exige reposicionamento, não só priorização.",
                  cor: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-100 text-orange-700"
                },
                {
                  tema: "Consolidação por captura de time técnico",
                  tipo: "Pontual",
                  trilha: "#08 Cogna/Educbank e o primeiro M&A de IA em educação da AL → #09 e #10 sem novas transações na janela",
                  leitura: "Tese registrada na #08 e sem desdobramento em duas edições seguidas. Segue plausível como movimento de mercado, mas não se confirmou como padrão — e não sustenta decisão de build vs buy com a urgência que parecia ter.",
                  cor: "bg-gray-50 border-gray-200",
                  badge: "bg-gray-200 text-gray-700"
                },
                {
                  tema: "Interfaces novas: voz, agente executor e robótica",
                  tipo: "Pontual",
                  trilha: "#09 voz em tempo real e banca oral por IA → #10 robô humanoide com conversação em português na Bett Nordeste",
                  leitura: "Reaparece com roupagem diferente a cada ciclo e sem evidência de aprendizagem associada. A voz tem caso de uso defensável em avaliação e fluência; o hardware segue vitrine. Observar sem alocar roadmap.",
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
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">{item.trilha}</p>
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
              Quem está melhor <span className="text-[#6B46C1]">posicionado</span>
            </h2>
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              Concorrência direta é quem disputa a mesma escola, rede e orçamento. Não é quem tem mais funcionalidade, e sim quem chega melhor colocado para a disputa desta edição: mediar com contexto curricular.
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
                    {["Player", "Grupo / Soluções", "Movimento observado", "Posição diante da disputa desta edição", "Maturidade IA", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Bernoulli",
                      grupo: "Sistema de ensino próprio",
                      movimento: "Portfólio em operação fechando o ciclo professor–aluno–mantenedor, apresentado a 800 gestores em agosto",
                      estrategia: "Melhor colocado em cobertura de públicos e o único com camada de inteligência sobre microdados públicos. Falta o passo seguinte: nada no portfólio atua sobre como o aluno usa IA — a cobertura é de papéis, não de comportamento",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Poliedro",
                      grupo: "Cosmos · Polígono · Conviver · Sabiá",
                      movimento: "Hub de IA generativa com resposta restrita ao conteúdo autoral",
                      estrategia: "O desenho que melhor sobrevive à discussão de confiabilidade e o mais próximo de virar mediação curricular — já tem a âncora no acervo. O que falta é a trava: restringir a fonte não impede a entrega da resposta pronta a quem quer atalhar",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Somos Educação",
                      grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                      movimento: "Plurall IA integrado aos sistemas, com foco em produtividade docente e geração de conteúdo",
                      estrategia: "Maior parque digital instalado do país e vantagem estrutural de dado no mesmo grupo. É também o mais exposto à mudança desta edição: o portfólio observado se concentra em produzir material, e não em desenhar ou medir o uso do aluno",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Arco Educação",
                      grupo: "SAS, SAE Digital, Geekie",
                      movimento: "Camada única de gestão, ensino, comunicação e financeiro; literacia em IA incorporada ao programa de competências",
                      estrategia: "O único que trata IA como competência a ser ensinada e avaliada, não só como ferramenta — posição que envelhece bem quando a discussão vira uso responsável. Define pauta por escala e antecipa o que a norma deve exigir",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Santillana",
                      grupo: "Moderna Core",
                      movimento: "Inteligência curricular, microtestes e IA operando nos bastidores, sem protagonismo de interface",
                      estrategia: "Posicionamento de IA invisível é o mais coerente com a evidência desta edição — não incentiva terceirização porque não se oferece como atalho. A fragilidade é simétrica: sem interface própria de estudo, tem menos superfície para instrumentar percurso",
                      maturidade: "Média-Alta", impacto: "Médio-Alto"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-purple-50/30 transition-colors' : 'bg-purple-50/20 hover:bg-purple-50/40 transition-colors'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-500 text-xs leading-relaxed">{row.grupo}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${row.maturidade.startsWith('Alta') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {row.maturidade}
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
                    {["Player", "Grupo / Soluções", "Movimento observado", "Posição diante da disputa desta edição", "Maturidade IA", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-orange-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Saber",
                      grupo: "eDocente",
                      movimento: "Correção automática de microtestes por câmera, notas de voz com IA e gestão de alunos a partir do celular do professor",
                      estrategia: "Melhor colocado em fricção de adoção na rede pública, que é a variável que decide o segmento. Como opera na correção e não no estudo do aluno, é o menos exposto ao deslocamento desta edição — e também o menos posicionado para capturá-lo",
                      maturidade: "Média-Alta", impacto: "Alto"
                    },
                    {
                      player: "Moderna",
                      grupo: "Moderna Amigos",
                      movimento: "Braço público do grupo Santillana, com capilaridade em redes municipais e estaduais",
                      estrategia: "A força é relacionamento institucional e presença em compra pública, não velocidade de IA. Com a norma parada e o laboratório do MEC sem edital, quem já está dentro da rede converte tempo de indefinição em vantagem",
                      maturidade: "Média", impacto: "Médio-Alto"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-orange-50/30 transition-colors' : 'bg-orange-50/20 hover:bg-orange-50/40 transition-colors'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-500 text-xs leading-relaxed">{row.grupo}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-yellow-100 text-yellow-700">
                          {row.maturidade}
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

            {/* Força de contexto */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-gray-400 rounded-full" />
              <h3 className="text-xl font-bold text-gray-900">Forças de contexto</h3>
            </div>
            <div className="bg-white rounded-2xl border-2 border-purple-100 p-6 md:p-8">
              <p className="text-sm text-gray-500 mb-6 max-w-3xl">
                Não disputam a venda para a escola e por isso ficam fora do mapa competitivo. Mudam outra coisa: o que a escola espera receber, quanto aceita pagar e o que professores e alunos já consideram normal antes de qualquer proposta comercial chegar.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    nome: "OpenAI",
                    altera: "Comportamento e expectativa pedagógica",
                    nota: "Ao ligar modo de estudo por padrão para adolescentes e detectar tentativa de atalho, definiu sozinha o que passa a ser considerado uso responsável. Qualquer produto educacional agora é comparado a esse piso — inclusive por pais."
                  },
                  {
                    nome: "Google for Education",
                    altera: "Preço percebido e padrão de interface",
                    nota: "Ano gratuito de plano pago em escala global e abandono do chat aberto em favor de fluxo estruturado. Derruba o valor de IA inclusa em proposta comercial e define o formato que o aluno passa a esperar de uma ferramenta de estudo."
                  },
                  {
                    nome: "Anthropic",
                    altera: "Economia da formação docente",
                    nota: "Catálogo gratuito de formação em IA organizado por problema de trabalho. Ocupa, sem cobrar, um espaço que sistemas de ensino planejavam monetizar — e eleva a régua de qualidade esperada da capacitação."
                  },
                  {
                    nome: "Organismos multilaterais e pesquisa acadêmica",
                    altera: "Regras do argumento comercial",
                    nota: "Evidência longitudinal e relatório de política pública passaram a fornecer números citáveis por qualquer lado da mesa. A conversa de compra deixou de aceitar promessa de aprendizagem sem medição."
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-purple-200 pl-4">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-gray-900 text-sm">{item.nome}</p>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500 uppercase tracking-wide">{item.altera}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.nota}</p>
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
            <p className="text-gray-500 mb-12 text-lg max-w-3xl">
              Cada caso destrinchado por problema, implantação, escala, financiamento e aprendizado, separando o que dá para replicar aqui do que não dá.
            </p>

            <div className="space-y-8">
              {[
                {
                  empresa: "OpenAI — trava de atalho embutida no produto de massa",
                  pais: "Global · Produto e mediação",
                  categoria: "Mediação",
                  problema: "A empresa que mais se beneficia do uso de IA por adolescentes passou a ser responsabilizada pelo efeito desse uso — em aprendizagem e em segurança. Precisava de uma resposta que não dependesse de a escola configurar nada.",
                  implementacao: "Em vez de criar um app separado, aplicou a experiência automaticamente por faixa etária, usando estimativa de idade quando a informação não é declarada. O modo de estudo virou comportamento padrão e não opção de menu; a detecção de atalho é acionada pelo padrão da pergunta, não por regra da escola; e o controle de horário é delegado à família, não à instituição. Duas semanas antes, a mesma empresa havia empacotado fluxos por papel — professor de educação básica, docente de ensino superior e estudante — em workspaces institucionais, usando o material do próprio curso como contexto.",
                  escala: "Aplicação automática a toda a base de 13 a 17 anos, sem adesão da escola, da rede ou do país.",
                  financiamento: "Custo integralmente absorvido pela empresa e tratado como resposta regulatória e reputacional antecipada, não como linha de receita.",
                  aprendizado: "Mediação escala quando é default e independe de configuração institucional. A escolha de acionar por idade em vez de por contrato com a escola é a decisão de arquitetura que torna o alcance imediato — e que nenhum fornecedor educacional consegue reproduzir, porque depende de estar no aparelho antes da instituição.",
                  limitacoes: "A trava não sabe o que foi pedido: reage ao formato da pergunta, não ao enunciado do professor. Não distingue tarefa avaliativa de estudo livre, não conhece o gabarito nem o histórico do aluno, e vale só dentro do ChatGPT — o atalho segue disponível em qualquer outra ferramenta. Também não devolve à escola nenhum registro do que aconteceu.",
                  replicavel: "O par detecção de atalho + redirecionamento para percurso guiado, e a decisão de tratar mediação como padrão em vez de configuração opcional.",
                  naoReplicavel: "O alcance por estimativa de idade sem intermediação institucional, e o custo de operar isso gratuitamente em escala global.",
                  application: "A versão defensável aqui é a que a OpenAI não pode fazer: trava que sabe qual capítulo a turma está estudando, se aquilo vale nota, o que o aluno errou no bimestre e o que a escola definiu como permitido. Mesmo mecanismo, contexto que a plataforma não tem — e com o registro voltando para o professor."
                },
                {
                  empresa: "Piauí — IA como disciplina obrigatória na rede estadual",
                  pais: "Brasil · Política pública curricular",
                  categoria: "Currículo",
                  problema: "Preparar estudantes de rede pública para um mercado e uma sociedade mediados por IA, sem depender de iniciativa isolada de escola ou de professor voluntário.",
                  implementacao: "Programa Piauí Inteligência Artificial, iniciado em 2024, com uma sequência deliberada: formação docente primeiro, mudança curricular depois. A capacitação foi conduzida em conjunto pela Seduc e por uma secretaria estadual dedicada exclusivamente a IA, com ampliação contínua da formação ao longo de 2026. O conteúdo combina fundamentos técnicos e reflexão ética sobre uso.",
                  escala: "Mais de 120 mil estudantes da rede pública, cerca de 800 professores formados em 540 unidades escolares, no 9º ano do fundamental e no ensino médio.",
                  financiamento: "Recursos estaduais, com governança própria — o estado criou uma secretaria de IA em vez de alocar o programa dentro da pasta de educação.",
                  aprendizado: "O gargalo não foi tecnologia nem material didático: foi professor formado. O programa só escalou porque tratou capacitação como pré-condição, e não como trilha paralela ao currículo. Reconhecido pela UNESCO com o Prêmio King Hamad Bin Isa Al-Khalifa de uso de TICs na Educação.",
                  limitacoes: "Depende de vontade política sustentada por mais de um ciclo e de estrutura administrativa dedicada, o que poucos estados têm. Não há, até aqui, medição pública de efeito na aprendizagem — o reconhecimento é de política, não de resultado mensurado.",
                  replicavel: "A sequência formar-antes-de-implantar e o empacotamento de trilha de IA aplicada com formação docente inclusa, que é vendável a rede e a sistema de ensino.",
                  naoReplicavel: "A criação de uma secretaria estadual dedicada — a condição institucional que destravou orçamento e prioridade.",
                  application: "É o benchmark nacional mais maduro e segue sem réplica em outros estados. Além do valor comercial, resolve uma objeção recorrente na conversa com o setor público: é caso brasileiro, em rede pública, com escala verificável — não realidade de país rico."
                },
                {
                  empresa: "Google — hub de estudo do Gemini",
                  pais: "EUA + 140 países · Produto e distribuição",
                  categoria: "Distribuição",
                  problema: "Converter uso genérico de chatbot em hábito de estudo ancorado, capturando o estudante universitário no início do semestre antes que ele escolha outra ferramenta.",
                  implementacao: "Oferta de um ano de plano pago combinada a um hub que substitui a conversa aberta por ciclo fechado: quiz diagnóstico localiza a lacuna, lições curtas são geradas sobre o material que o próprio aluno sobe — slides, PDFs, listas —, flashcards consolidam e o progresso persiste entre sessões em vez de reiniciar a cada conversa.",
                  escala: "Google AI Pro (US$ 19,99/mês) para estudantes nos EUA e AI Plus (US$ 4,99/mês) em mais de 140 países, com resgate até 31/12/2026.",
                  financiamento: "Subsídio integral da própria empresa, com o custo tratado como investimento em canal e aquisição de hábito, não como operação educacional.",
                  aprendizado: "A big tech concluiu, por conta própria, que chat aberto não é formato de estudo. Migrar para diagnóstico, lição curta, prática e progresso persistente é admissão pública de que conversa livre não produz aprendizagem estruturada — e valida o desenho para todo o setor.",
                  limitacoes: "O material de referência depende do aluno subir arquivo, o que exclui quem não organiza os próprios materiais; não há alinhamento a currículo, série ou habilidade; e o progresso fica na conta do estudante, invisível para professor e escola.",
                  replicavel: "O ciclo diagnóstico → lição curta → prática → progresso persistente, que é padrão de experiência e não tecnologia proprietária.",
                  naoReplicavel: "O subsídio de um ano de plano pago em escala global como instrumento de aquisição.",
                  application: "O mesmo fluxo sobre acervo autoral parte de uma vantagem que o Gemini não tem: o material já está estruturado por série, capítulo e habilidade da BNCC, sem depender de upload. O que a big tech entrega genérico e invisível para a escola, o sistema de ensino entrega curricular e devolvendo dado ao professor."
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
                        <p className="text-xs text-gray-500 mt-0.5">{b.pais}</p>
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
                        <p className="text-xs text-gray-600 leading-relaxed">{bloco.valor}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-50/60 rounded-xl p-4 mb-4 border border-red-100">
                    <p className="text-xs font-semibold text-red-700 mb-1">Limitações do caso</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{b.limitacoes}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50/60 rounded-xl p-4 border border-green-100">
                      <p className="text-xs font-semibold text-green-700 mb-1">O que é replicável</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{b.replicavel}</p>
                    </div>
                    <div className="bg-gray-100/70 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-1">O que não é replicável</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{b.naoReplicavel}</p>
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
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              O que já existe, em que estágio está e o que custa plugar — com limitações reais, dependências técnicas, cenário ideal de uso e o que muda para Produto e para Engenharia.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  nome: "Detecção de terceirização de tarefa",
                  tipo: "Padrão de mediação",
                  oque: "Classificação em tempo real do padrão de interação para identificar quando o aluno está buscando resposta pronta em vez de apoio, com redirecionamento para percurso guiado. O mecanismo foi validado em produto de massa nesta janela e ataca diretamente o comportamento que concentra a maior parte da perda de aprendizagem medida no Sinal 2.",
                  acelera: "Transfere para o produto a contenção que hoje depende de vigilância do professor — e faz isso no momento da interação, não na correção.",
                  limitacoes: "Classifica intenção a partir de proxy e erra nas duas direções: bloqueia aluno legítimo com pressa e libera quem sabe reformular a pergunta. Vale só dentro do seu ambiente. Se a trava for percebida como obstáculo, o aluno migra para a ferramenta sem trava — e a versão sem trava é gratuita.",
                  dependencias: "Interface de estudo própria, classificador de intenção com avaliação contínua, vínculo com a atividade em curso para saber se vale nota, e limiar calibrável por série e disciplina.",
                  cenario: "Tarefa avaliativa e estudo dirigido em que existe enunciado conhecido. Contraindicado em pesquisa exploratória e produção autoral livre, onde a trava vira atrito sem ganho.",
                  impactoProduto: "É a única versão defensável da mediação depois desta edição: a que conhece o enunciado, o gabarito e o histórico. Sem esse contexto, o produto compete de igual para igual com uma feature gratuita — e perde.",
                  impactoEngenharia: "Exige latência baixa no caminho crítico da resposta, política de fallback quando o classificador não decide, e telemetria de falso positivo desde o primeiro dia, senão não há como calibrar.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://openai.com/index/chatgpt-for-teens/",
                  linkLabel: "Referência: implementação da OpenAI"
                },
                {
                  nome: "Telemetria de percurso de aprendizagem",
                  tipo: "Padrão de instrumentação",
                  oque: "Captura estruturada do processo e não só do resultado: versões do texto, tentativas por item, tempo entre ações, revisões, origem do conteúdo colado e sequência de consultas. É o registro que permite distinguir esforço de entrega — a distinção que a evidência desta edição tornou decisiva.",
                  acelera: "Transforma uso responsável de discurso em métrica auditável, e cria o único artefato de avaliação que o agente não consegue fabricar pelo aluno.",
                  limitacoes: "Indica padrão, não intenção: não prova autoria sozinha e gera falso positivo com aluno naturalmente rápido. Exige o professor no laço para interpretar. Só captura o que acontece dentro do seu editor — texto escrito fora e colado aparece como colagem, não como percurso.",
                  dependencias: "Editor próprio instrumentado (não funciona sobre PDF ou documento de terceiro), pipeline de eventos, armazenamento de série temporal por aluno, base legal e consentimento sob a LGPD por envolver dado comportamental de menor.",
                  cenario: "Produção textual, redação, resolução em etapas e projetos longos, onde o percurso importa mais que a resposta final. Pouco útil em exercício objetivo de resposta curta.",
                  impactoProduto: "Cria a métrica de evidência que nenhum concorrente direto oferece hoje no Brasil e sustenta a conversa com o mantenedor sobre efeito, não sobre funcionalidade.",
                  impactoEngenharia: "Obriga a decidir esquema de eventos cedo — mudar depois invalida a série histórica —, e traz custo de armazenamento crescente por aluno-ano com política de retenção definida antes do primeiro registro.",
                  maturidade: "A construir",
                  cor: "bg-purple-100 text-purple-700",
                  link: "https://cepr.org/publications/dp21577",
                  linkLabel: "A evidência que justifica"
                },
                {
                  nome: "Política de uso como artefato de produto",
                  tipo: "Governança",
                  oque: "Transformar a regra de uso de IA em objeto configurável dentro da plataforma — o que é permitido por atividade, série e disciplina, com registro de quem definiu, quando mudou e como foi aplicado — em vez de documento estático anexo ao contrato.",
                  acelera: "Resolve com produto uma dor que a norma nacional não resolveu e que nenhum concorrente empacotou, e prepara o terreno para absorver o texto do parecer por configuração quando ele for homologado.",
                  limitacoes: "Política escrita não muda prática sozinha: sem participação do professor na construção, vira regra ignorada — e o dado do Sinal 3 mostra que envolvê-lo é justamente o que hoje não acontece. Também cria exposição: registrar a regra torna auditável o descumprimento dela.",
                  dependencias: "Modelo de permissões por atividade, versionamento com trilha de auditoria, integração com o fluxo de criação de tarefa do professor e mapeamento para níveis de risco parametrizáveis.",
                  cenario: "Redes e mantenedores com várias escolas e necessidade de padronizar sem engessar a escola individual. Menos relevante para escola única com decisão centralizada.",
                  impactoProduto: "Vira anexo técnico de proposta comercial e diferencial em conversa com mantenedor — hoje a política é a lacuna mais explícita entre urgência medida e produto existente.",
                  impactoEngenharia: "Exige separar regra de código desde o início: política como dado, não como condicional espalhada. Retrofit desse desenho depois é caro.",
                  maturidade: "A construir",
                  cor: "bg-purple-100 text-purple-700",
                  link: "https://www.digitaleducationcouncil.com/resource-library-items/ai-in-higher-education-global-survey-2026",
                  linkLabel: "O dado que dimensiona a lacuna"
                },
                {
                  nome: "Fluxo de estudo estruturado",
                  tipo: "Padrão de experiência",
                  oque: "Substituição do chat aberto por ciclo fechado — diagnóstico localiza a lacuna, lição curta é gerada sobre o material de referência, prática consolida e o progresso persiste entre sessões. Padrão adotado simultaneamente por Google e OpenAI nesta janela.",
                  acelera: "Copia um desenho já validado por quem inventou a interface conversacional, evitando o custo de descobrir por tentativa que conversa livre não organiza estudo.",
                  limitacoes: "Fluxo estruturado sem trava continua entregando resposta a quem quer atalhar — resolve organização, não terceirização. E exige acervo bem fatiado por objetivo de aprendizagem: sobre conteúdo mal estruturado, o diagnóstico aponta lacuna errada.",
                  dependencias: "Acervo mapeado por habilidade e pré-requisito, banco de itens com calibração de dificuldade, motor de sequenciamento e persistência de estado por aluno entre sessões.",
                  cenario: "Revisão, recuperação e preparação para avaliação, onde existe objetivo definido e lacuna mensurável. Menos adequado a conteúdo novo sem base diagnóstica.",
                  impactoProduto: "A vantagem sobre a big tech não está no fluxo — está na âncora: currículo estruturado por série, capítulo e habilidade, sem depender de o aluno subir arquivo.",
                  impactoEngenharia: "O trabalho pesado é modelagem de pré-requisitos e calibração de itens, não geração. Orçar equipe pedagógica junto com a de dados.",
                  maturidade: "Padrão de mercado",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/",
                  linkLabel: "Referência: hub de estudo do Gemini"
                },
                {
                  nome: "RAG sobre acervo autoral",
                  tipo: "Arquitetura de contexto",
                  oque: "A IA generativa responde apenas a partir do conteúdo proprietário indexado, em vez de recorrer ao conhecimento genérico do modelo. Padrão já adotado por todos os concorrentes diretos mapeados nesta edição.",
                  acelera: "Resolve confiabilidade e alinhamento curricular sem treinar modelo próprio, e converte o acervo editorial — commodity como conteúdo — em vantagem defensável como contexto.",
                  limitacoes: "Resolve a fonte, não o uso: continua entregando resposta pronta a quem quer atalho. A qualidade depende inteiramente da curadoria do índice — acervo mal fatiado gera resposta pior que o modelo puro, e conteúdo desatualizado vira erro com aparência de autoridade.",
                  dependencias: "Pipeline de ingestão e fatiamento, banco vetorial, reindexação a cada atualização editorial, avaliação contínua de fidelidade à fonte e custo recorrente de embeddings proporcional ao catálogo.",
                  cenario: "Tira-dúvidas ancorado no material adotado, geração de atividade alinhada ao capítulo e apoio ao planejamento docente. Ideal onde a resposta certa já existe no acervo.",
                  impactoProduto: "É custo de entrada no mercado brasileiro, não diferencial: todos os concorrentes diretos já têm. Investir aqui para alcançar paridade não gera vantagem.",
                  impactoEngenharia: "O esforço está na curadoria e na avaliação, não no modelo. A dívida técnica típica é o índice que envelhece silenciosamente após atualização editorial.",
                  maturidade: "Padrão de mercado",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://www.santillanaeducacao.com.br/solucoes-educacionais/solucoes-pedagogicas/moderna-core/",
                  linkLabel: "Referência: Moderna Core"
                },
                {
                  nome: "Roteamento entre modelos por tipo de tarefa",
                  tipo: "Arquitetura de custo",
                  oque: "Distribuir a carga entre modelos de portes diferentes conforme a exigência da tarefa, reservando o modelo caro para o que precisa de raciocínio e usando modelos econômicos de alta vazão para classificação, correção objetiva e sugestão.",
                  acelera: "Derruba o custo por aluno ativo e é o que torna financeiramente viável rodar mediação e telemetria em tempo real sobre toda a base, em vez de em piloto.",
                  limitacoes: "Cada modelo tem comportamento e formato de saída próprios: trocar de rota sem avaliação por tarefa degrada qualidade de forma difícil de perceber. Adiciona ponto de falha e exige camada de observabilidade que muitos times subestimam.",
                  dependencias: "Camada de abstração sobre provedores, suíte de avaliação por tipo de tarefa, monitoramento de qualidade por rota e política de fallback quando um provedor degrada.",
                  cenario: "Operação com volume alto e tarefas heterogêneas. Em produto de baixo volume, a complexidade não se paga.",
                  impactoProduto: "É o que define margem quando personalização passa a rodar por aluno e não por turma — decisão de arquitetura com efeito direto no preço final.",
                  impactoEngenharia: "Sem avaliação automatizada por rota, a economia de custo é paga em regressão silenciosa de qualidade. Construir a suíte antes de rotear.",
                  maturidade: "Disponível",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://ai.google.dev/gemini-api/docs/models",
                  linkLabel: "Documentação de modelos"
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
                      <p className="text-xs text-gray-400 font-medium mt-0.5">{a.tipo}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${a.cor}`}>
                      {a.maturidade}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{a.oque}</p>
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-[#FF6B35] mb-1">O que acelera</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{a.acelera}</p>
                    </div>
                    <div className="bg-red-50/60 rounded-xl p-3 border border-red-100">
                      <p className="text-xs font-semibold text-red-700 mb-1">Limitações reais</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{a.limitacoes}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Dependências técnicas</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{a.dependencias}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Cenário ideal de uso</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{a.cenario}</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="bg-purple-50 rounded-xl p-3">
                        <p className="text-xs font-semibold text-purple-700 mb-1">Impacto para Produto</p>
                        <p className="text-xs text-gray-700 leading-relaxed">{a.impactoProduto}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3">
                        <p className="text-xs font-semibold text-blue-700 mb-1">Impacto para Engenharia</p>
                        <p className="text-xs text-gray-700 leading-relaxed">{a.impactoEngenharia}</p>
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
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              O que pesquisadores e instituições de referência estão concluindo sobre os movimentos desta edição — começando pelo que dizem em coro.
            </p>

            {/* Consenso dos especialistas */}
            <div className="bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] rounded-2xl p-8 md:p-10 mb-12 text-white">
              <div className="flex items-start gap-4 mb-6">
                <img src={mascoteIA} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full mb-3">
                    <Brain className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Consenso dos especialistas da quinzena</span>
                  </div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed">
                    Três fontes independentes, com métodos incompatíveis entre si — econometria longitudinal, análise de política pública e survey global — chegaram à mesma conclusão nesta janela: <span className="text-[#FFB89A]">o que determina o resultado não é a adoção, é o desenho do uso</span>. É a convergência mais forte já registrada em uma única janela.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    ponto: "Ganho de desempenho sem ganho de aprendizagem tem assinatura própria",
                    detalhe: "Econometria e análise de política descreveram o mesmo fenômeno por caminhos opostos: quando a tarefa é terceirizada sem orientação, o indicador sobe e o aprendizado não acontece. Convergência rara entre medição quantitativa e revisão de evidência internacional."
                  },
                  {
                    ponto: "Existe um terceiro caminho entre substituir e apenas complementar",
                    detalhe: "A OCDE separa três modos de colaboração humano-IA — substituição, complementaridade e aumento — e argumenta que só o terceiro preserva a expertise docente, porque exige que o professor examine criticamente e recontextualize a saída da IA dentro do próprio objetivo de ensino."
                  },
                  {
                    ponto: "A política de IA está sendo escrita sem quem vai aplicá-la",
                    detalhe: "O dado de survey mostra que menos de um terço dos docentes considera participar de forma significativa da política de IA da própria instituição. É a explicação estrutural para regra que não muda prática — e um problema de processo, não de texto."
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="font-semibold text-white mb-2 text-sm leading-snug">{item.ponto}</p>
                    <p className="text-white/75 text-xs leading-relaxed">{item.detalhe}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  autor: "OCDE",
                  cargo: "Digital Education Outlook 2026",
                  titulo: "Exploring Effective Uses of Generative AI in Education",
                  data: "2026",
                  tese: "Distingue três modos de colaboração humano-IA — substituição, complementaridade e aumento — e sustenta que apenas o aumento preserva e amplia a expertise docente, porque obriga o professor a examinar e recontextualizar criticamente a saída da IA dentro do próprio objetivo instrucional. Sem intenção pedagógica explícita, terceirizar tarefa para IA generativa eleva o desempenho aparente sem produzir aprendizado real.",
                  importa: "É a formulação de política pública que dá nome ao mecanismo que a econometria mediu. Fornece vocabulário aceito internacionalmente para desenhar produto e defender escolha de arquitetura diante de mantenedor e de regulador.",
                  relacao: "Explica por que a trava embutida do Sinal 1 funciona e por que ela é insuficiente sozinha: contenção é complementaridade; recontextualizar no objetivo da aula é aumento — e isso exige contexto curricular.",
                  link: "https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html"
                },
                {
                  autor: "Strömberg, Lei e Wu",
                  cargo: "CEPR Discussion Paper 21577",
                  titulo: "The Generative AI Learning Penalty: Evidence from Chinese Secondary Education",
                  data: "Jun/2026 · repercussão em ago",
                  tese: "A perda de aprendizagem não é uniforme entre usuários de IA: concentra-se de forma acentuada no subgrupo cujo comportamento indica terceirização da tarefa. O par tempo de execução anormalmente curto com nota alta é o marcador observável desse padrão, e as perdas são maiores justamente entre alunos mais novos e de melhor desempenho.",
                  importa: "É a primeira medição longitudinal em larga escala que separa uso de comportamento de uso. Muda o objeto da discussão: não existe efeito da IA em geral, existe efeito de um padrão específico que pode ser detectado e interrompido.",
                  relacao: "É a evidência que sustenta o Sinal 2 e justifica os dois aceleradores classificados como a construir. O achado de que os melhores alunos são os mais afetados desmonta a hipótese de que o risco se limita a quem já ia mal.",
                  link: "https://cepr.org/publications/dp21577"
                },
                {
                  autor: "Digital Education Council",
                  cargo: "AI in Higher Education Global Survey 2026",
                  titulo: "Adoção quase universal, preparo institucional escasso",
                  data: "Ago/2026",
                  tese: "Com a maior base já reunida sobre o tema, mostra que o uso de IA se tornou majoritário entre estudantes e docentes em 35 países, enquanto a estrutura institucional não acompanhou: avaliação sem orientação adequada, professores percebidos como despreparados para orientar e docentes fora da construção da política de IA das próprias instituições.",
                  importa: "Transforma percepção difusa em número comparável entre regiões e permite dimensionar o atraso institucional em vez de descrevê-lo. O recorte latino-americano mostra adoção acima da média global.",
                  relacao: "Sustenta o Sinal 3 e o acelerador de política de uso. O dado de participação docente é o que explica por que política escrita não vira prática — e desloca o problema de redação para processo.",
                  link: "https://www.digitaleducationcouncil.com/resource-library-items/ai-in-higher-education-global-survey-2026"
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
                    <p className="text-xs text-gray-500">{e.cargo}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">
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
                      <p className="text-xs font-semibold text-gray-500 mb-1">Por que importa</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{e.importa}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Relação com os sinais desta edição</p>
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
                    Acessar fonte completa
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
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              Onde parou de haver vantagem e onde ainda existe algo difícil de copiar. Uma linha mudou de lado nesta edição — e é a que sustentava boa parte do discurso do setor.
            </p>

            <div className="bg-white rounded-2xl border-2 border-[#FF6B35] p-6 mb-8">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">A mudança de lado desta edição</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Mediação genérica</strong> saiu da coluna de diferenciação e entrou na de commodity. Até esta janela, prometer uso responsável e contenção de atalho era argumento comercial defensável. Passou a ser o comportamento padrão de um produto gratuito instalado no celular do aluno — e o que era promessa de fornecedor virou expectativa mínima de qualquer pai.
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
                    { item: "Mediação genérica do uso", motivo: "Detecção de atalho e modo de estudo ligados por padrão, de graça, sem passar pela escola. Deixou de valer como diferencial no dia em que virou default de plataforma", novo: true },
                    { item: "Acesso a IA de ponta como parte da oferta", motivo: "Distribuição subsidiada em escala global tirou a linha da planilha. IA inclusa não sustenta preço" },
                    { item: "Gerador de plano de aula e de questões", motivo: "Todos os concorrentes diretos entregam. É custo de entrada, não argumento de venda" },
                    { item: "Chat ancorado no conteúdo próprio", motivo: "RAG sobre acervo autoral é padrão consolidado entre os cinco grupos mapeados. Paridade aqui não gera vantagem" },
                    { item: "Formação genérica em IA como receita", motivo: "Catálogo gratuito e bem estruturado ocupou o espaço. Resta o que exige currículo e certificação reconhecida pelo mantenedor" },
                    { item: "Discurso de intencionalidade pedagógica", motivo: "Repetido em todos os palcos do setor nesta janela. Sem métrica de percurso por trás, virou consenso vazio que não separa ninguém" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm flex items-center gap-2 flex-wrap">
                          {c.item}
                          {c.novo && <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#FF6B35] text-white uppercase tracking-wide">Mudou nesta edição</span>}
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed">{c.motivo}</p>
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
                    { item: "Mediação com contexto curricular", motivo: "Saber o capítulo, o enunciado, se vale nota e o que o aluno errou antes. Mesmo mecanismo da trava genérica, com a informação que a plataforma não tem acesso para obter", novo: true },
                    { item: "Evidência de percurso, não de entrega", motivo: "Versões, tentativas, tempo e revisões — a única prova de aprendizagem que o agente não fabrica pelo aluno, e que exige estar dentro do editor" },
                    { item: "Devolução do dado de uso ao professor", motivo: "As plataformas gratuitas não devolvem nada à instituição. Fechar o ciclo entre uso e resultado só é possível para quem opera a jornada inteira" },
                    { item: "Política de uso pronta e configurável", motivo: "Dor medida, norma parada e nenhum concorrente com produto. É a lacuna com maior descasamento entre urgência e oferta" },
                    { item: "Dado longitudinal da própria rede", motivo: "Histórico do aluno cruzado com microdados públicos. A big tech entrega estudo genérico e não sabe o que a turma viu no capítulo passado" },
                    { item: "Relação institucional com rede e mantenedor", motivo: "Compra pública e adoção de rede dependem de confiança construída ao longo de ciclos, não de superioridade técnica pontual" },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm flex items-center gap-2 flex-wrap">
                          {d.item}
                          {d.novo && <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-green-600 text-white uppercase tracking-wide">Nova fronteira</span>}
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed">{d.motivo}</p>
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
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              Quanto discurso existe em relação à evidência disponível — e se o movimento já é forte o bastante para mover roadmap.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
                <p className="font-bold text-orange-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Superestimado
                </p>
                <p className="text-[11px] text-orange-600/80 mb-5 font-medium">Muito discurso, evidência ausente ou contrária</p>
                <div className="space-y-5">
                  {[
                    { titulo: "IA grátis democratiza a aprendizagem", desc: "A evidência da própria janela aponta na direção oposta: distribuir ferramenta poderosa a quem não recebeu orientação amplia a diferença de resultado entre quem sabe usar e quem não sabe. Acesso sem desenho não é inclusão." },
                    { titulo: "Robô humanoide na sala de aula", desc: "Alto poder de encantamento em feira, custo elevado por unidade e nenhuma evidência de efeito. O que sustenta a experiência é a camada de recuperação sobre acervo próprio — replicável sem hardware nenhum." },
                    { titulo: "Adoção alta como sinal de maturidade", desc: "Uso quase universal convivendo com orientação escassa não é maturidade, é exposição. O indicador que importa deixou de ser quantos usam e passou a ser quantos usam sob desenho pedagógico." },
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
                <p className="text-[11px] text-purple-600/80 mb-5 font-medium">Sinal real, cedo demais para conclusão firme</p>
                <div className="space-y-5">
                  {[
                    { titulo: "Trava de atalho como padrão de indústria", desc: "Implementada por um player dominante e coerente com a evidência, mas com um único ciclo de existência e nenhum dado público sobre eficácia real. Forte o suficiente para exigir resposta de produto, cedo demais para tratar como padrão consolidado." },
                    { titulo: "Controle parental como camada pedagógica", desc: "Delegar à família a janela em que o modo de estudo fica ligado desloca a autoridade sobre o uso da escola para a casa. Mexe na cadeia de decisão do setor, mas ainda não há sinal de como escolas e redes vão reagir." },
                    { titulo: "Literacia em IA como competência avaliada", desc: "Aparece em currículo estadual, em programa de grupo educacional e na pauta de organismos internacionais. Convergência real, sem instrumento de avaliação padronizado que permita comparar resultado entre redes." },
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
                <p className="text-[11px] text-blue-600/80 mb-5 font-medium">Evidência convergente, já move roadmap</p>
                <div className="space-y-5">
                  {[
                    { titulo: "Desenho de uso como requisito de produto", desc: "Medição longitudinal, análise de política pública e decisão de produto das três maiores empresas de IA apontam para o mesmo lugar, por caminhos independentes. Deixou de ser posição pedagógica e virou especificação técnica." },
                    { titulo: "Evidência de percurso como artefato de avaliação", desc: "Se a entrega deixou de provar aprendizagem, a prova migra para o processo. É a resposta técnica ao problema que a própria IA criou, e segue sem produto no mercado brasileiro." },
                    { titulo: "O fim do chat aberto como formato de estudo", desc: "Dois dos maiores laboratórios de IA do mundo abandonaram a conversa livre em favor de fluxo estruturado na mesma janela. Quando quem inventou a interface troca de formato, o padrão do setor muda junto." },
                    { titulo: "Formação docente como pré-condição de adoção", desc: "O caso público mais maduro do país escalou porque formou professor antes de mudar currículo, e o mercado tornou a capacitação gratuita. Deixou de ser brinde comercial e virou etapa obrigatória — agora com concorrente subsidiado." },
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
                O setor passou anos discutindo se deveria mediar o uso de IA pelo aluno. Enquanto essa discussão acontecia, quem opera a ferramenta decidiu sozinho — e implementou. A consequência é que o debate pedagógico brasileiro perdeu o objeto: não adianta defender mediação como diferencial quando ela chega de fábrica e de graça. O que sobra é mais estreito e mais difícil: mediar sabendo o que foi pedido, por quem, para quando e com que histórico. Nenhum dos cinco grupos mapeados nesta edição ocupou esse espaço, nenhum se posicionou publicamente sobre a evidência que o justifica, e a norma que poderia forçar o movimento segue sem homologação. O problema tem dado, tem urgência, tem tecnologia disponível — e continua sem dono.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
            <p className="text-gray-500 mb-4 text-lg max-w-3xl">
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
                  rastreio: "Sinais 1 e 2",
                  sinal: "A trava de atalho virou default de plataforma, e a evidência mostra que é exatamente o comportamento que ela contém que concentra a perda de aprendizagem",
                  problema: "A mediação que sustentava nosso discurso passou a existir de graça no celular do aluno — sem currículo, sem enunciado e sem histórico, mas de graça e ligada por padrão.",
                  oportunidade: "Mediação curricular: a trava que sabe o que foi pedido",
                  impacto: "Mesmo mecanismo de contenção, com o que a plataforma não tem: qual capítulo a turma está estudando, se a atividade vale nota, o que o aluno errou no bimestre e o que a escola definiu como permitido. É a única versão da mediação que não compete com um produto gratuito — porque não pode ser construída de fora da escola.",
                  professor: "Recebe a trava alinhada ao que ele pediu, e não a uma regra genérica que ignora o enunciado.",
                  aluno: "Encontra o caminho guiado dentro do material da própria escola, em vez de ser empurrado para fora dela.",
                  gestor: "Ganha o argumento que substitui o que a gratuidade destruiu: mediação que a big tech não consegue oferecer.",
                  roadmapItem: "Classificador de intenção acoplado ao contexto da atividade; limiar por série e disciplina; registro de acionamento devolvido ao professor.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Produto / Iônica"
                },
                {
                  rastreio: "Sinal 2",
                  sinal: "O marcador observável do dano é o par tempo de execução curto com nota alta — um dado que só existe para quem instrumenta o percurso",
                  problema: "Se a entrega deixou de provar aprendizagem, a avaliação perdeu seu artefato principal — e nenhum player brasileiro lançou substituto.",
                  oportunidade: "Evidência de percurso como novo artefato de avaliação",
                  impacto: "Captura de versões, tentativas, tempo e revisões dentro do editor, transformando processo em prova. Cria métrica de efeito que hoje nenhum concorrente direto oferece e muda a conversa comercial de funcionalidade para resultado.",
                  professor: "Passa a ver como o aluno chegou lá, e não só onde chegou — com critério objetivo de suspeita em vez de intuição.",
                  aluno: "O esforço fica visível e reconhecido, o que muda o incentivo: percurso registrado vale mais que entrega impecável.",
                  gestor: "Leva ao mantenedor evidência de aprendizagem produzida na própria rede, não promessa de fornecedor.",
                  roadmapItem: "Esquema de eventos definido antes do primeiro registro; política de retenção sob LGPD; painel de percurso para o professor.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Produto / Dados"
                },
                {
                  rastreio: "Sinais 3 e 5",
                  sinal: "Adoção quase universal com participação docente minoritária na construção da política, e norma nacional sem homologação pela terceira edição",
                  problema: "A escola precisa decidir sozinha o que permitir, sem norma para se apoiar e sem instrumento para aplicar o que decidir.",
                  oportunidade: "Política de uso como artefato configurável no produto",
                  impacto: "Regra por atividade, série e disciplina, versionada e auditável, construída com o professor dentro do fluxo de criação de tarefa. Resolve uma dor medida que nem a regulação nem o concorrente resolveram, e absorve o parecer por configuração quando ele for homologado.",
                  professor: "Sai de destinatário da regra para autor dela, no mesmo lugar onde cria a atividade.",
                  aluno: "Passa a saber o que é permitido em cada tarefa, em vez de inferir a partir do silêncio institucional.",
                  gestor: "Ganha governança demonstrável para mantenedor, família e futura fiscalização — sem esperar a norma.",
                  roadmapItem: "Política como dado e não como condicional em código; trilha de auditoria; mapeamento para níveis de risco parametrizáveis.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Compliance / Produto"
                },
                {
                  rastreio: "Sinais 1 e 4",
                  sinal: "As plataformas gratuitas não devolvem à escola nenhum registro do que o aluno fez, e os concorrentes diretos convergiram para o mesmo desenho sem cobrir essa camada",
                  problema: "O uso de IA pelo aluno acontece fora do campo de visão da escola, e o professor só encontra o resultado quando a avaliação já passou.",
                  oportunidade: "Fechar o ciclo entre uso de IA e resultado de aprendizagem",
                  impacto: "Devolver ao professor o que aconteceu antes da entrega, cruzado com desempenho posterior. É a única camada estruturalmente indisponível para quem opera de fora da instituição — e a que transforma dado de uso em decisão pedagógica.",
                  professor: "Enxerga o antes da prova, não só o depois, e pode intervir enquanto ainda dá tempo.",
                  aluno: "Recebe intervenção baseada no que realmente fez, e não em suposição sobre por que foi mal.",
                  gestor: "Passa a ter leitura de rede sobre padrão de uso, insumo que hoje nenhuma plataforma fornece.",
                  roadmapItem: "Integração entre telemetria de percurso e resultado de avaliação; visão de turma antes da visão de aluno.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Dados / Produto"
                },
                {
                  rastreio: "Sinal 3 e benchmark Piauí",
                  sinal: "Formação docente aparece como gargalo real no caso público mais maduro do país e como lacuna medida no survey global — enquanto o catálogo genérico virou gratuito",
                  problema: "A linha de receita de formação em IA foi ocupada por concorrente indireto que não cobra, e a capacitação segue sendo pré-condição de qualquer adoção.",
                  oportunidade: "Formação ancorada no material adotado e na política da rede",
                  impacto: "O que o catálogo gratuito não faz: formar sobre a BNCC, sobre o livro em uso e sobre a política que a escola acabou de configurar, com certificação que o mantenedor reconhece. Deixa de competir em conteúdo genérico e passa a competir em contexto.",
                  professor: "Aprende a usar IA no material que ele efetivamente adota, não em exemplo genérico de catálogo.",
                  aluno: "Efeito indireto e direto: professor formado é a variável que o caso do Piauí mostra ser decisiva para o programa escalar.",
                  gestor: "Converte formação de custo em ativo de retenção, com trilha vinculada ao sistema de ensino contratado.",
                  roadmapItem: "Trilha gerada a partir do material adotado pela escola; certificação vinculada à política configurada.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Formação / Comercial"
                },
                {
                  rastreio: "Sinal 2 e ausência registrada",
                  sinal: "A penalidade de aprendizagem foi medida em coorte estrangeira, e nenhuma instituição brasileira anunciou estudo de efeito comparável sobre base própria",
                  problema: "Quando o debate exigir prova local — e ele vai exigir —, ninguém no Brasil terá dado próprio, porque coorte não se constrói retroativamente.",
                  oportunidade: "Coorte longitudinal própria com parceria acadêmica independente",
                  impacto: "Evidência de efeito produzida na base instalada, com desenho metodológico defensável. É o ativo que nenhuma big tech consegue produzir sobre o contexto da escola brasileira — e o único que sustenta afirmação pública de aprendizagem sem risco reputacional.",
                  professor: "Participa de pesquisa que legitima a própria prática, em vez de ser objeto de medição externa.",
                  aluno: "Efeito de médio prazo: intervenções passam a ser calibradas por dado da própria rede.",
                  gestor: "Ganha diferencial institucional durável e insumo direto para a conversa com o poder público.",
                  roadmapItem: "Definir coorte, consentimento e linha de base neste semestre; o custo de atraso é a impossibilidade de recuperar o histórico.",
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
                    <span className="text-xs text-gray-400 font-medium">{item.area}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 mb-3 self-start bg-gray-100 rounded-full px-2.5 py-1">
                    <Library className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Rastreável a: {item.rastreio}</span>
                  </div>

                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">Sinal observado</p>
                  <p className="text-sm text-gray-500 mb-4 italic leading-relaxed">{item.sinal}</p>

                  <div className="bg-red-50/50 rounded-xl p-3 mb-3 border border-red-100">
                    <p className="text-xs font-semibold text-red-700 mb-1">Problema</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.problema}</p>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{item.oportunidade}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.impacto}</p>

                  <div className="border border-orange-100 bg-orange-50/50 rounded-xl p-4 space-y-2 mb-3">
                    <p className="text-xs font-semibold text-[#FF6B35]">Impacto esperado</p>
                    {[
                      { label: 'Professor', valor: item.professor },
                      { label: 'Aluno', valor: item.aluno },
                      { label: 'Gestor', valor: item.gestor },
                    ].map(linha => (
                      <p key={linha.label} className="text-xs text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                      </p>
                    ))}
                  </div>

                  <div className="bg-purple-50 rounded-xl p-3 mt-auto">
                    <p className="text-xs font-semibold text-purple-700 mb-1">Implicação para roadmap</p>
                    <p className="text-xs text-gray-700 leading-relaxed">{item.roadmapItem}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
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
              {/* Card Agosto 2026 · Ed. #09 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
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
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
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
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
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
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
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
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
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
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
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
                src={mascoteIA}
                alt="RADAR — Inteligência Estratégica de IA na Educação"
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
              <p className="text-white/30 text-xs mt-2">Agosto de 2026 · Edição #10 · 04 – 24 ago</p>
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
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </div>
  );
}
