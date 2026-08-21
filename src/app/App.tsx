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
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
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
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
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
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
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
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
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
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
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
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
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
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
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
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
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
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
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
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
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
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
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
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
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
              <img src={mascoteIA} alt="PULSO" className="h-10 md:h-11 w-auto flex-shrink-0" />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-sm md:text-base font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>PULSO</span>
                <span className="hidden md:inline text-[11px] text-gray-400 font-normal mt-0.5">Radar de IA na Educação</span>
              </div>
            </div>

            {/* Direita — edição + logos parceiros */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex flex-col items-end leading-none">
                <span className="text-[11px] font-bold text-[#6B46C1] uppercase tracking-widest">Edição #10</span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">04 – 21 Ago 2026</span>
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
              Chegou a conta da IA sem mediação:<br />
              a evidência virou contra o uso livre <span className="text-[#6B46C1]">no mesmo mês</span><br />
              <span className="text-[#FF6B35]">em que a big tech deu IA de graça ao aluno</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                O primeiro estudo longitudinal em larga escala saiu e é duro: <strong className="text-[#6B46C1]">26.811 alunos acompanhados por 30 meses</strong> — a IA melhorou a tarefa de casa em 18% e derrubou a nota da prova em 20% seis meses depois, com penalidade de 18 a 24% nos exames decisivos em dois anos. Em 20 de agosto, o Google passou a dar um ano de plano pago do Gemini a universitários de <strong className="text-[#6B46C1]">mais de 140 países</strong>, e a Anthropic abriu a Claude Academy. No Brasil, 78% dos estudantes já usam IA e apenas 5% receberam orientação formal. A conclusão que organiza a quinzena: <strong className="text-[#6B46C1]">o problema deixou de ser acesso e virou mediação</strong> — e a mediação é a única coisa que a distribuição gratuita não entrega junto.
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Por que este momento é diferente?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <BarChart3 className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Evidência — o setor ganhou um número contra si:</strong> até agora o debate era de opinião. Agora existe um dado citável de perda de aprendizagem, e 80% dela concentrada em quem entrega tarefa rápida demais com nota alta. Isso muda a conversa com pais, escolas e reguladores
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Distribuição — o acesso virou commodity subsidiada:</strong> um ano de Gemini pago de graça em 140+ países e 26 cursos gratuitos da Claude Academy. Vender acesso a IA de ponta deixou de ser proposta de valor — o aluno já tem, sem passar pela escola
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Institucional — o vácuo de regra ficou explícito:</strong> só 20% das instituições brasileiras têm política de uso, o parecer do CNE segue sem homologação há três edições e o conselho entrou em recomposição. A escola está sozinha para decidir
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div style={{ opacity }} className="mt-12">
              <ChevronDown className="w-8 h-8 text-[#6B46C1] mx-auto animate-bounce" />
            </motion.div>
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
              O que mudou desde a <span className="text-[#6B46C1]">última edição</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg">O que a liderança precisa entender em 2 minutos — conclusões, não notícias.</p>

            <div className="space-y-4">
              {[
                {
                  conclusao: "A pergunta do setor mudou de 'como adotar IA' para 'como impedir que ela substitua o esforço'",
                  raciocinio: "O estudo do CEPR com 26.811 alunos mostrou o mecanismo do dano com precisão: 80% da perda de aprendizagem vem de quem termina a tarefa rápido demais e com nota alta. Não é a ferramenta, é o papel dado a ela. Isso transforma 'desenho de uso' — antes discurso pedagógico — em requisito de produto mensurável."
                },
                {
                  conclusao: "Vender acesso a IA acabou como proposta de valor: o Google entrega de graça em 140+ países",
                  raciocinio: "Um ano de plano pago do Gemini para universitários, resgatável até 31/12, mais a Claude Academy com 26 cursos gratuitos. Quem tinha 'IA de ponta inclusa' como argumento comercial perdeu o argumento em 20 de agosto. Sobra o que a big tech não tem: currículo, vínculo com a escola e dado longitudinal do aluno."
                },
                {
                  conclusao: "O Google mudou o formato do produto de estudo — e o novo padrão não é chat",
                  raciocinio: "O hub estudantil do Gemini abandonou a conversa aberta e virou fluxo estruturado: quiz diagnóstico para achar a lacuna, lições curtas ancoradas no material que o próprio aluno sobe, e progresso que persiste entre sessões. É exatamente a arquitetura que sistemas de ensino brasileiros já poderiam montar sobre acervo proprietário — e a maioria ainda não montou."
                },
                {
                  conclusao: "Os sistemas de ensino brasileiros saíram do anúncio e entraram na operação",
                  raciocinio: "O Bernoulli Reload reuniu 800 gestores em torno de um portfólio já em uso — CoCria, TutorIA, PraticAI, Radar ENEM e MatriculAI — cobrindo professor, aluno e mantenedor. Somado a Cosmos (Poliedro), Meu Arco e Moderna Core, o padrão é o mesmo: IA ancorada em conteúdo autoral e dado da própria rede. A diferenciação migrou para dentro da operação."
                },
                {
                  conclusao: "O vácuo regulatório virou oportunidade de produto, não só risco",
                  raciocinio: "Só 20% das instituições têm política de uso de IA e apenas 5% dos alunos receberam orientação formal. O parecer do CNE segue sem homologação pela terceira edição consecutiva — e agora o conselho está em recomposição. Quem entregar política de uso pronta, defensável e adaptável ocupa um espaço que nem a regra nem o concorrente ocuparam."
                },
                {
                  conclusao: "O capital em IA educacional brasileira parou de comprar receita e passou a comprar time",
                  raciocinio: "A Teachy incorporou a Nero.AI em acquihire de sete dígitos e a Premia captou R$ 5 milhões já anunciando M&A — com modelo próprio de IA para educação básica e superior. A tese mudou: capacidade técnica interna virou o ativo escasso, e a janela para construir do zero ficou menor que a janela competitiva."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-gray-900 mb-2 text-base">{item.conclusao}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.raciocinio}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPAIS MOVIMENTOS ── */}
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
              Seis sinais, não <span className="text-[#6B46C1]">trinta notícias</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg max-w-3xl">
              Cada card consolida vários acontecimentos relacionados numa única leitura estratégica. O critério não é o que foi anunciado — é o que muda de direção.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "A evidência virou contra o uso não mediado — e o mecanismo do dano ficou identificado",
                  empresa: "CEPR · Opera · OCDE",
                  data: "10–19 ago/2026",
                  consolida: "Estudo do CEPR com 26.811 alunos · pesquisa Opera com 2.400 estudantes BR · OCDE Digital Education Outlook 2026",
                  resumo: "O working paper 'The Generative AI Learning Penalty' acompanhou 26.811 estudantes secundaristas por 30 meses: a IA cortou 30% do tempo de tarefa e subiu 18% a nota do dever — e seis meses depois a nota das provas mensais caiu cerca de 20%, com penalidade de 18 a 24% nos exames de admissão em dois anos. Cerca de 80% da perda se concentra em quem entrega rápido demais com nota alta. Na mesma janela, pesquisa da Opera com 2.400 estudantes brasileiros mostrou 78% usando IA em tarefas e só 5% com orientação formal; e a OCDE concluiu que GenAI ajuda quando é desenhada para fim educativo ou usada com orientação pedagógica clara.",
                  impacto: "O setor ganhou um número citável contra si — e, junto, o antídoto. A variável não é usar ou não usar: é se o uso foi desenhado. Isso converte 'mediação pedagógica' de discurso em requisito de produto, e dá à escola um argumento de compra que nenhuma ferramenta genérica atende.",
                  professor: "Ganha respaldo para exigir percurso, não só entrega — e precisa de instrumento que mostre como o aluno chegou lá.",
                  aluno: "O atalho cobra em 6 meses. O produto tem que tornar o esforço mais fácil que o desvio, não o contrário.",
                  gestor: "Passa a ter dado externo para justificar política de uso e investimento em formação, não só intuição.",
                  roadmap: "Modo de estudo que retém a resposta e devolve pistas; telemetria de percurso; alerta de padrão de terceirização.",
                  fonte: "https://pt.dataconomy.com/2026/06/22/estudo-vincula-licao-de-casa-assistida-por-ia-a-pontuacoes-mais-baixas-em-exames/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "A big tech passou a distribuir IA de graça direto ao aluno e ao professor",
                  empresa: "Google · Anthropic",
                  data: "20 ago/2026",
                  consolida: "Gemini grátis para universitários em 140+ países · Claude Academy com 26 cursos · Claude for Teachers",
                  resumo: "Em 20 de agosto o Google abriu um ano gratuito de plano pago do Gemini para universitários: AI Pro (US$ 19,99/mês) nos EUA e AI Plus (US$ 4,99/mês) em mais de 140 países, resgatável até 31/12/2026. Junto veio um hub estudantil que abandona o chat aberto — quiz diagnóstico, lições curtas ancoradas no material que o aluno sobe, flashcards e progresso persistente entre sessões. No mesmo dia a Anthropic lançou a Claude Academy: 26 cursos gratuitos em quatro trilhas, organizados por problema real de trabalho e não por funcionalidade, com o framework 4D de fluência em IA — evolução da Anthropic Academy de março, que tinha 13 cursos.",
                  impacto: "Acesso a IA de ponta virou commodity subsidiada e saiu da lista de diferenciais em um único dia. O que a distribuição gratuita não entrega é currículo, vínculo institucional e histórico do aluno — e é exatamente aí que sobra valor para quem está dentro da escola.",
                  professor: "Vai encontrar a turma inteira com ferramenta paga de ponta. A formação docente precisa correr na frente do aluno, não atrás.",
                  aluno: "Recebe uma estrutura de estudo boa e gratuita — mas fora do currículo da escola e sem devolver nenhum dado a ela.",
                  gestor: "Perde o argumento de 'IA inclusa' e precisa de outro: integração ao material, ao professor e ao histórico da rede.",
                  roadmap: "Copiar o padrão diagnóstico→lição→prática→progresso sobre acervo autoral; formação docente certificada como camada de produto.",
                  fonte: "https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "Os sistemas de ensino brasileiros trocaram anúncio por operação",
                  empresa: "Bernoulli · Poliedro · Arco · Santillana",
                  data: "11–20 ago/2026",
                  consolida: "Bernoulli Reload com 800 gestores · hub Cosmos do Poliedro · Meu Arco · Moderna Core",
                  resumo: "O Bernoulli Reload reuniu mais de 800 gestores e mantenedores em São Paulo em 11 de agosto, com o portfólio já em uso e segmentado por público: CoCria para o professor, TutorIA e PraticAI para o aluno, Radar ENEM e MatriculAI para o mantenedor — o Radar transforma microdados públicos do ENEM em diagnóstico pedagógico. A tese repetida no palco foi que a fase de discutir 'se usa IA' acabou; o que está em jogo é uso responsável com intencionalidade, com a IA como infraestrutura do trabalho educativo. O padrão se repete nos pares: Cosmos (Poliedro) roda IA generativa restrita ao conteúdo autoral, Meu Arco integra ClassApp e isaac numa camada só, e o Moderna Core combina microtestes, dado e IA por trás da cena.",
                  impacto: "A diferenciação brasileira migrou do anúncio para a operação — e convergiu num mesmo desenho: IA ancorada em conteúdo proprietário, segmentada por papel e alimentada por dado da própria rede. Quem ainda apresenta IA como funcionalidade avulsa está um ciclo atrás dos concorrentes diretos, não das big techs.",
                  professor: "O padrão de mercado já é assistente de planejamento ancorado no material que ele adota — deixou de ser diferencial e virou expectativa.",
                  aluno: "Tutoria e prática dentro do próprio sistema de ensino, com o conteúdo da escola, e não em ferramenta genérica de fora.",
                  gestor: "A conversa comercial já é sobre diagnóstico, matrícula e evidência — não sobre acesso a IA.",
                  roadmap: "Cobrir os três públicos com o mesmo motor e acervo; usar microdados públicos como camada de inteligência de rede.",
                  fonte: "https://educador21.com/ia-desafia-escolas-repensar-gestao-formacao/",
                  color: "from-purple-600 to-violet-600"
                },
                {
                  titulo: "O CNE entrou em recomposição com o parecer de IA ainda sem homologação",
                  empresa: "MEC / CNE",
                  data: "12 ago/2026",
                  consolida: "Portaria MEC nº 664 · parecer de IA aprovado em maio, sem homologação desde então",
                  resumo: "A Portaria MEC nº 664, de 12 de agosto, divulgou a relação de entidades civis habilitadas a indicar nomes para a recomposição da Câmara de Educação Básica e da Câmara de Educação Superior do CNE, com lista tríplice a ser protocolada até 28 de agosto. Em paralelo, o parecer que estabelece as diretrizes de IA na educação básica e superior — aprovado em 11 de maio, com quatro níveis de risco e passagem por consulta pública em junho — segue aguardando homologação do ministro para virar norma em vigor.",
                  impacto: "A janela de adequação continua aberta pela terceira edição seguida, mas agora por um motivo diferente: quem vai relatar e sustentar o texto pode mudar de cadeira. Para o setor, isso significa mais tempo de indefinição e uma oportunidade rara de interlocução técnica enquanto o colegiado se reorganiza.",
                  professor: "Continua sem norma nacional que diga o que pode e o que não pode em sala — decisão fica com a escola.",
                  aluno: "Segue sem direito assegurado a orientação formal sobre uso de IA nos estudos.",
                  gestor: "Não pode esperar a norma para agir: precisa de política interna própria que já converse com os quatro níveis de risco do parecer.",
                  roadmap: "Governança configurável por nível de risco, pronta para se ajustar ao texto final sem retrabalho de produto.",
                  fonte: "https://www.poder360.com.br/poder-educacao/cne-aprova-diretrizes-sobre-uso-de-ia-na-educacao/",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  titulo: "O capital em IA educacional brasileira passou a comprar time, não receita",
                  empresa: "Teachy · Premia",
                  data: "Ago/2026",
                  consolida: "Acquihire da Nero.AI pela Teachy · Premia capta R$ 5 mi e anuncia M&A",
                  resumo: "A Teachy incorporou a software house Nero.AI em operação de sete dígitos estruturada como acquihire — time técnico e propriedade intelectual absorvidos para acelerar produtos de IA para escolas, com negociação iniciada em abril. A Premia, que desenvolve modelos próprios de IA para educação básica e superior, captou R$ 5 milhões em primeira rodada com um family office e já sinalizou busca por empresas e tecnologias para incorporar via M&A. O pano de fundo é o Distrito EdTech Report, que coloca o Brasil como segundo maior polo global de edtechs.",
                  impacto: "O ativo escasso deixou de ser base instalada e virou capacidade técnica de IA. Quando a janela competitiva fica menor que o tempo de construir um time, comprar equipe pronta passa a ser decisão de roadmap — e todo squad de IA com tração no país vira alvo potencial.",
                  professor: "Efeito indireto: velocidade maior de entrega das ferramentas que ele já usa.",
                  aluno: "Tende a ver ciclos de melhoria mais curtos nos produtos das edtechs consolidadoras.",
                  gestor: "Precisa avaliar risco de descontinuidade ao contratar edtech pequena em setor consolidando.",
                  roadmap: "Decisão explícita de build vs buy para capacidade de IA, com mapeamento de alvos antes da inflação de preço.",
                  fonte: "https://startups.com.br/negocios/ma/teachy-compra-nero-ai-e-amplia-aposta-em-ia-educacional/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "A robótica humanoide chegou à escola brasileira pela porta da conversação em português",
                  empresa: "DUX4Education · Booster Robotics",
                  data: "19–20 ago/2026",
                  consolida: "Jornada Bett Nordeste com 70+ palestrantes e 50 marcas · estreia do robô K1 com a persona BIA",
                  resumo: "A Jornada Bett Nordeste, nos dias 19 e 20 de agosto no Recife Expo Center, teve como destaque o K1, apresentado como o primeiro robô humanoide com conversação em português e representação oficial no país, trazido pela DUX4Education como representante da Booster Robotics no segmento educacional. O robô roda a BIA, persona de IA construída sobre uma estrutura de conhecimento em RAG, e interage com professores, gestores e estudantes. O evento reuniu mais de 70 palestrantes e 50 marcas expositoras, com público de redes públicas e privadas sob o tema 'Inteligências em Ação'.",
                  impacto: "Interface física com IA entra no repertório de compra da escola brasileira — com alto poder de encantamento e nenhuma evidência de aprendizagem associada. É a categoria mais exposta ao risco de virar vitrine cara, e vale monitorar como termômetro de para onde o orçamento de inovação das redes está sendo puxado.",
                  professor: "Chega como atração, não como apoio ao trabalho — sem desenho pedagógico, compete por tempo de aula.",
                  aluno: "Engajamento imediato alto; efeito de aprendizagem ainda não demonstrado.",
                  gestor: "Decisão de orçamento de inovação com retorno pedagógico não comprovado — pede critério de avaliação antes da compra.",
                  roadmap: "Não perseguir hardware. Observar o padrão RAG sobre acervo próprio, que é o que de fato sustenta a experiência.",
                  fonte: "https://revistaeducacao.com.br/2026/08/19/jornada-bett-nordeste-discute-tecnologia-ia-e-formacao/",
                  color: "from-purple-600 to-purple-700"
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
                      <p className="text-xs font-semibold text-[#FF6B35] mb-1">O que muda na prática</p>
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
              O que <span className="text-[#6B46C1]">não</span> aconteceu
            </h2>
            <p className="text-gray-500 mb-8 max-w-3xl">
              Movimentos esperados que não vieram na janela. A ausência é informação estratégica: indica espaço não ocupado, decisão adiada ou risco que o mercado ainda não precificou.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  cat: "Nenhuma resposta pública à evidência de perda de aprendizagem",
                  nota: "O estudo com 26.811 alunos circulou amplamente e nenhum grande grupo brasileiro — Somos, Arco, Santillana, Bernoulli, Poliedro — se posicionou publicamente sobre como seus produtos evitam o efeito descrito.",
                  leitura: "Espaço aberto para quem falar primeiro com dado próprio. Posicionar-se antes vira autoridade; depois, vira defesa."
                },
                {
                  cat: "Homologação do parecer do CNE — terceira edição sem sair",
                  nota: "Aprovado em 11 de maio, passou por consulta pública em junho e segue sem assinatura do ministro. A Portaria 664 ainda recompõe as duas câmaras do conselho.",
                  leitura: "A indefinição já dura um semestre. Planejar produto contando com a norma para 2026 virou aposta arriscada."
                },
                {
                  cat: "Nenhum edital ou chamada pública do EducaLab",
                  nota: "O laboratório de dados e IA do MEC foi instituído em junho prevendo parcerias com universidades, centros de pesquisa e empresas — e não publicou nenhuma chamada até o fechamento desta edição.",
                  leitura: "A porta segue fechada por ora, mas a aproximação técnica informal continua sendo a via mais barata de influenciar critérios."
                },
                {
                  cat: "Nenhum produto brasileiro de evidência de processo",
                  nota: "Com a penalidade de aprendizagem documentada e a avaliação tradicional comprometida, não houve lançamento nacional de captura de percurso, prova de autoria ou arguição estruturada.",
                  leitura: "O problema tem dado, tem urgência e não tem produto. É a lacuna mais explícita desta edição."
                },
                {
                  cat: "Nenhuma política pública sobre orientação de uso ao estudante",
                  nota: "Com 78% de adoção e 5% de orientação formal, nenhuma rede estadual ou federal anunciou programa de letramento em uso de IA para alunos na janela.",
                  leitura: "O Piauí segue sendo exceção isolada, e não modelo replicado. Há espaço para pauta de rede antes de virar exigência."
                },
                {
                  cat: "Silêncio das big techs sobre o efeito de longo prazo",
                  nota: "Google e Anthropic lançaram distribuição gratuita em massa no mesmo mês do estudo, sem endereçar o achado de perda de aprendizagem em suas comunicações.",
                  leitura: "Assimetria de discurso explorável: quem oferece mediação desenhada tem argumento que a gratuidade não neutraliza."
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-5 hover:border-[#FF6B35] transition-colors">
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.cat}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.nota}</p>
                  <div className="bg-orange-50/60 rounded-lg px-3 py-2">
                    <p className="text-[11px] text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#FF6B35]">Leitura:</span> {item.leitura}
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
              Estrutural ou <span className="text-[#6B46C1]">pontual?</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg max-w-3xl">
              Leitura transversal das edições #07 a #10. O que reaparece ciclo após ciclo é tendência estrutural e merece roadmap; o que apareceu uma vez é acontecimento e merece monitoramento.
            </p>

            <div className="space-y-5">
              {[
                {
                  tema: "Distribuição direto ao aluno e ao professor",
                  tipo: "Estrutural",
                  trilha: "#07 Gemini no ENEM → #08 Claude for Teachers → #09 home do Classroom por papel → #10 Gemini grátis em 140+ países e Claude Academy",
                  leitura: "Quatro edições seguidas, escalando de produto para canal e agora para subsídio total. A big tech não está tentando vender para a escola — está contornando a escola. É a tendência mais consistente do radar e a que mais pressiona o modelo de negócio dos sistemas de ensino.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Evidência de aprendizagem como campo de disputa",
                  tipo: "Estrutural",
                  trilha: "#08 Khan admite 15% de uso real → #09 Estônia acopla pesquisa longitudinal ao rollout → #10 CEPR mede penalidade de 20% na prova",
                  leitura: "Saiu de métrica de vaidade para evidência científica e agora para evidência contrária. A cada edição a régua sobe. Quem não tiver dado próprio de resultado até o fim do ano vai argumentar contra números, sem números.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Regulação brasileira travada na última milha",
                  tipo: "Estrutural",
                  trilha: "#07 CNE aprova e abre consulta → #08 consulta encerrada, homologação no horizonte → #09 sem homologação → #10 sem homologação e conselho em recomposição",
                  leitura: "O padrão já não é 'vai sair a qualquer momento' — é indefinição prolongada com o colegiado se reorganizando. A leitura muda: em vez de esperar a norma, o produto precisa de governança configurável que absorva o texto quando vier.",
                  cor: "bg-red-50 border-red-200",
                  badge: "bg-red-100 text-red-700"
                },
                {
                  tema: "Consolidação por capacidade técnica",
                  tipo: "Estrutural",
                  trilha: "#08 Cogna/Educbank e Teachy/Nero.AI → #09 silêncio de recesso → #10 Teachy conclui acquihire e Premia capta com M&A anunciado",
                  leitura: "Com uma pausa no meio, mas a tese se manteve e ficou mais nítida: compra-se time de IA, não receita. Sinaliza que o preço de squads de IA no Brasil deve subir nos próximos ciclos — decisão de build vs buy tem prazo.",
                  cor: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-100 text-orange-700"
                },
                {
                  tema: "Ecossistema integrado sobre conteúdo autoral",
                  tipo: "Estrutural",
                  trilha: "#05 Moderna Core → Bett 2026 com Meu Arco, Cosmos e Estação → #10 portfólio Bernoulli segmentado por papel em operação",
                  leitura: "O tema mais antigo do radar e o que mais amadureceu: saiu do palco de feira e entrou na rotina das escolas. Deixou de ser diferencial competitivo e virou custo de entrada no mercado brasileiro.",
                  cor: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-100 text-orange-700"
                },
                {
                  tema: "Geopolítica de IA, compute e segurança de agentes",
                  tipo: "Pontual",
                  trilha: "#09 WAICO, aliança de segurança de agentes, Anthropic/AMD e decisão do DMA → #10 sem desdobramento na janela",
                  leitura: "Concentração atípica numa única edição e silêncio na seguinte. Segue relevante como pano de fundo de soberania e custo, mas não sustenta decisão de roadmap educacional sozinho. Monitorar, não priorizar.",
                  cor: "bg-gray-50 border-gray-200",
                  badge: "bg-gray-200 text-gray-700"
                },
                {
                  tema: "Interfaces novas: voz, agente executor e robótica",
                  tipo: "Pontual",
                  trilha: "#09 GPT-Live e banca oral por IA na NYU → #10 robô humanoide K1 na Bett Nordeste",
                  leitura: "Reaparece com roupagem diferente a cada edição e nenhuma evidência de aprendizagem associada até agora. A voz tem caso de uso claro em avaliação e fluência; a robótica ainda é vitrine. Categoria a observar sem alocar roadmap.",
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

      {/* ── CONCORRÊNCIA DIRETA ── */}
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
              <span className="text-sm text-[#6B46C1] font-medium">Concorrência Direta</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Quem disputa <span className="text-[#6B46C1]">a mesma escola</span>
            </h2>
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              Escopo recalibrado: soluções educacionais e editoras que disputam o mesmo cliente que nós — não o mapa geral de tecnologia com foco em educação. As big techs aparecem depois, como força de contexto, porque mudam as regras sem disputar a mesma venda.
            </p>

            {/* Mercado privado */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-[#6B46C1] rounded-full" />
              <h3 className="text-xl font-bold text-gray-900">Mercado privado</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-12 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50">
                    {["Player", "Grupo / Soluções", "Movimento observado", "Leitura estratégica", "Maturidade IA", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Bernoulli",
                      grupo: "Sistema de ensino próprio",
                      movimento: "Reload com 800 gestores (11/ago): CoCria (professor), TutorIA e PraticAI (aluno), Radar ENEM e MatriculAI (mantenedor)",
                      estrategia: "O portfólio mais completo por público desta janela e o único que fechou o ciclo professor–aluno–mantenedor num evento só. O Radar ENEM sobre microdados públicos é o movimento mais copiável e o menos copiado do mercado",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Poliedro",
                      grupo: "Cosmos · Polígono · Conviver · Sabiá",
                      movimento: "Cosmos como hub de IA generativa com respostas restritas ao conteúdo autoral, transformando dado de aprendizagem em inteligência pedagógica",
                      estrategia: "Aposta na confiabilidade como diferencial: IA que só responde do acervo próprio. É a resposta mais direta ao risco de alucinação — e o desenho que melhor sobrevive à discussão de evidência que abriu esta edição",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Somos Educação",
                      grupo: "Anglo, pH, Amplia, Fibonati · Plurall",
                      movimento: "Plurall IA integrado aos sistemas: plano de aula por capítulo e duração, geração de questões inéditas por tema, com escala do maior parque digital do país",
                      estrategia: "Vantagem estrutural de base instalada e dado financeiro no mesmo grupo. O foco segue em produtividade docente — não apareceu movimento na direção de evidência de percurso, que é onde a pauta se deslocou",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Arco Educação",
                      grupo: "SAS, SAE Digital, Geekie",
                      movimento: "Meu Arco unifica gestão, ensino, comunicação (ClassApp) e financeiro (isaac); Competências Globais inspirado no PISA 2029 inclui literacia em IA. Geekie One adaptativo e Geekie Teste alinhado ao Saeb",
                      estrategia: "Único a tratar IA como competência a ser ensinada e avaliada, não só como ferramenta. Com ~12 mil escolas e 4 milhões de alunos, define pauta por escala. Literacia em IA no currículo antecipa o que o CNE deve exigir",
                      maturidade: "Alta", impacto: "Alto"
                    },
                    {
                      player: "Santillana",
                      grupo: "Moderna Core",
                      movimento: "Ecossistema que une inteligência curricular, microtestes e IA operando nos bastidores, com acompanhamento contínuo da evolução do aluno",
                      estrategia: "Posicionamento deliberado de IA invisível, ampliando a visão pedagógica sem substituir o educador. Discurso que envelhece bem diante da evidência de perda de aprendizagem — mas exige provar o efeito com dado próprio",
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
              <h3 className="text-xl font-bold text-gray-900">Mercado público</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-orange-50">
                    {["Player", "Grupo / Soluções", "Movimento observado", "Leitura estratégica", "Maturidade IA", "Impacto"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-orange-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      player: "Saber",
                      grupo: "eDocente",
                      movimento: "App com correção automática de microtestes por câmera, adaptável a diferentes anos e formatos, notas de voz com IA e gestão de alunos; publicação de tendências da educação pública para 2026",
                      estrategia: "Resolve a dor operacional real da rede pública — correção em massa sem infraestrutura — com o celular que o professor já tem. Baixa fricção de adoção é vantagem competitiva maior que sofisticação de modelo neste segmento",
                      maturidade: "Média-Alta", impacto: "Alto"
                    },
                    {
                      player: "Moderna",
                      grupo: "Moderna Amigos",
                      movimento: "Braço público do grupo Santillana, capilaridade em redes municipais e estaduais e histórico consolidado em processos de adoção pública",
                      estrategia: "A força é relacionamento institucional e presença em compra pública, não velocidade de IA. Com o EducaLab sem edital e o CNE em recomposição, quem já está dentro da rede tem vantagem de tempo quando a regra sair",
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
            <div className="bg-white rounded-2xl border-2 border-purple-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-[#6B46C1]" />
                <p className="font-bold text-gray-900">Força de contexto — não são concorrentes diretos, mas mudam as regras do jogo</p>
              </div>
              <p className="text-sm text-gray-500 mb-5">
                Não disputam a venda para a escola, e por isso não entram no mapa competitivo. Alteram o que a escola espera receber e quanto está disposta a pagar por acesso.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { nome: "Google for Education", nota: "Um ano de Gemini pago grátis em 140+ países e hub estudantil estruturado. Derruba o valor percebido de 'IA inclusa' em qualquer proposta comercial." },
                  { nome: "Anthropic", nota: "Claude for Teachers gratuito e Claude Academy com 26 cursos. Ocupa o espaço de formação docente em IA — que era uma receita potencial dos sistemas de ensino." },
                  { nome: "Teachy e edtechs de IA", nota: "Consolidação por acquihire e captação com M&A anunciado. Disputam o mesmo talento técnico e aceleram o ciclo de lançamento do mercado inteiro." },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-purple-200 pl-4">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.nome}</p>
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
              Cada caso destrinchado por implantação, escala, financiamento, parceiros e aprendizado, para que dê para julgar o que é replicável e a que custo.
            </p>

            <div className="space-y-8">
              {[
                {
                  empresa: "Piauí — IA como disciplina obrigatória na rede estadual",
                  pais: "Brasil · Política pública curricular",
                  categoria: "Currículo",
                  what: "Primeiro território das Américas a tornar Inteligência Artificial disciplina obrigatória, no 9º ano do fundamental e no ensino médio, combinando fundamentos técnicos e reflexão ética sobre o uso.",
                  implementacao: "Implantado no início de 2024 pelo programa 'Piauí Inteligência Artificial'. A sequência foi formação docente primeiro, currículo depois: capacitação de professores conduzida em conjunto pela Seduc e pela Secretaria de Inteligência Artificial (SIA) do estado, com ampliação contínua da formação já em 2026.",
                  escala: "Mais de 120 mil estudantes da rede pública, cerca de 800 professores formados em 540 unidades escolares.",
                  financiamento: "Recursos estaduais, com estrutura de governança própria — o estado criou uma secretaria dedicada a IA, e não apenas um programa dentro da educação.",
                  aprendizado: "O gargalo real não foi tecnologia nem material: foi professor formado. O programa só escalou porque tratou capacitação docente como pré-condição, não como etapa paralela. Reconhecido pela UNESCO com o Prêmio King Hamad Bin Isa Al-Khalifa de uso de TICs na Educação.",
                  application: "É o benchmark nacional mais maduro e segue sem ser replicado por outros estados. Sistema de ensino que empacotar trilha de IA aplicada com formação docente inclusa encontra demanda pronta — e um caso brasileiro citável, o que evita a objeção de 'isso é realidade de país rico'."
                },
                {
                  empresa: "Google — hub estudantil do Gemini",
                  pais: "EUA + 140 países · Produto e distribuição",
                  categoria: "Produto",
                  what: "Um ano gratuito de plano pago do Gemini para universitários, acompanhado de um hub de estudo que substitui o chat aberto por fluxo estruturado: notebooks de estudo, flashcards e quizzes de prática.",
                  implementacao: "O modo de estudo adaptativo roda um quiz diagnóstico para localizar onde a compreensão está fraca, monta lições curtas ancoradas no material que o próprio aluno sobe — slides de aula, PDFs do livro, listas de exercícios — e mantém o progresso entre sessões, em vez de recomeçar a cada conversa.",
                  escala: "Google AI Pro (US$ 19,99/mês) para estudantes dos EUA e AI Plus (US$ 4,99/mês) em mais de 140 países, com resgate até 31/12/2026.",
                  financiamento: "Subsídio integral da própria Google — aquisição de hábito na largada do semestre, com o custo tratado como investimento em canal.",
                  aprendizado: "A própria big tech concluiu que chat aberto não é formato de estudo. Migrar para diagnóstico → lição curta → prática → progresso persistente é admissão pública de que conversa livre não produz aprendizagem estruturada.",
                  application: "O padrão de fluxo é diretamente replicável sobre acervo autoral — e com uma vantagem que o Gemini não tem: o material já está estruturado por série, capítulo e habilidade da BNCC, sem depender do aluno subir arquivo. O que o Google entrega genérico, o sistema de ensino entrega curricular."
                },
                {
                  empresa: "Anthropic — Claude Academy",
                  pais: "Global · Formação e fluência",
                  categoria: "Formação",
                  what: "Plataforma gratuita de formação em IA lançada em 20 de agosto, construída a partir do método com que a própria empresa treina seus funcionários.",
                  implementacao: "26 cursos divididos em quatro trilhas, do primeiro contato com um chatbot até escrever aplicações na API, organizados pelo framework 4D de fluência em IA. O currículo é montado por problema real de trabalho, não por passeio de funcionalidades, e há uma Skill própria que personaliza a trilha de cada pessoa. Entrada só com e-mail, sem exigir assinatura.",
                  escala: "Evolução da Anthropic Academy, lançada em março de 2026 com 13 cursos hospedados em Skilljar — dobrou o catálogo e ganhou plataforma dedicada em cinco meses.",
                  financiamento: "Gratuito e subsidiado pela empresa, como as ofertas educacionais concorrentes: o produto é a fluência que cria dependência de ferramenta.",
                  aprendizado: "Ensinar fluência rende mais adoção do que ensinar a ferramenta. Organizar por problema em vez de por feature é o que separa formação que muda prática de treinamento que vira certificado esquecido.",
                  application: "Formação docente em IA estava no roadmap de monetização de vários sistemas de ensino — e acabou de ficar gratuita e boa. Resta o que a Claude Academy não faz: formação ancorada na BNCC, no material adotado e na política de uso da escola, com certificação que o mantenedor reconhece."
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

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{b.what}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    {[
                      { label: 'Como foi implantado', valor: b.implementacao, icone: <Zap className="w-3.5 h-3.5" /> },
                      { label: 'Escala e números', valor: b.escala, icone: <BarChart3 className="w-3.5 h-3.5" /> },
                      { label: 'Financiamento e parceiros', valor: b.financiamento, icone: <Users className="w-3.5 h-3.5" /> },
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

                  <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-[#6B46C1]">
                    <p className="text-xs font-semibold text-purple-700 mb-1">O que dá para replicar aqui</p>
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
              O que dá para <span className="text-[#6B46C1]">plugar agora</span>
            </h2>
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              Ferramentas, padrões e protocolos disponíveis que encurtam caminho no roadmap — agora com o que costuma faltar na avaliação: limitações reais, dependências técnicas, cenário ideal de uso e o que muda para Produto e Engenharia.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  nome: "Telemetria de percurso de aprendizagem",
                  tipo: "Padrão de instrumentação",
                  oque: "Captura estruturada do processo, e não só do resultado: versões do texto, tentativas por item, tempo entre ações, revisões, origem do conteúdo colado e sequência de consultas. É o antídoto técnico direto ao efeito medido pelo estudo do CEPR, em que 80% da perda vem de quem entrega rápido demais com nota alta.",
                  acelera: "Transforma 'uso responsável de IA' de discurso em métrica auditável — e cria o único artefato de avaliação que o agente não consegue fabricar.",
                  limitacoes: "Não prova autoria sozinha: indica padrão, não intenção. Gera falso positivo com aluno rápido de verdade, e exige o professor no laço para interpretar. Só funciona dentro do seu editor — se o aluno escreve fora e cola, você captura a colagem, não o percurso.",
                  dependencias: "Editor próprio instrumentado (não dá para fazer sobre PDF ou Google Docs de terceiro), pipeline de eventos, armazenamento de séries temporais por aluno, base legal e consentimento sob a LGPD por se tratar de dado comportamental de menor.",
                  cenario: "Produção textual, redação, resolução de problemas em etapas e projetos longos — onde o percurso importa mais que a resposta final. Pouco útil em exercício objetivo de resposta curta.",
                  impacto: "Produto: cria a métrica de evidência que hoje ninguém oferece no Brasil e vira argumento comercial com o mantenedor. Engenharia: exige decisão de esquema de eventos cedo, custo de storage crescente por aluno/ano e política de retenção definida antes do primeiro registro.",
                  maturidade: "A construir",
                  cor: "bg-purple-100 text-purple-700",
                  link: "https://pt.dataconomy.com/2026/06/22/estudo-vincula-licao-de-casa-assistida-por-ia-a-pontuacoes-mais-baixas-em-exames/",
                  linkLabel: "O estudo que justifica"
                },
                {
                  nome: "RAG sobre acervo autoral",
                  tipo: "Arquitetura de contexto",
                  oque: "Padrão já adotado por Cosmos (Poliedro), Moderna Core e pela persona BIA do robô K1: a IA generativa só responde a partir do conteúdo proprietário indexado, em vez de recorrer ao conhecimento genérico do modelo.",
                  acelera: "Resolve confiabilidade e alinhamento curricular sem treinar modelo próprio, e transforma o acervo editorial — que virou commodity como conteúdo — em vantagem defensável como contexto.",
                  limitacoes: "Resolve a fonte, não o uso: continua entregando resposta pronta ao aluno que quer atalho. Qualidade depende inteiramente da curadoria do índice — acervo mal fatiado gera resposta pior que o modelo puro. Conteúdo desatualizado no índice vira erro com aparência de autoridade.",
                  dependencias: "Pipeline de ingestão e fatiamento do acervo, banco vetorial, reindexação a cada atualização editorial, avaliação contínua de fidelidade à fonte e custo recorrente de embeddings proporcional ao tamanho do catálogo.",
                  cenario: "Tira-dúvidas ancorado no material adotado, geração de atividades alinhadas ao capítulo e apoio ao planejamento docente. Ideal onde a resposta certa já existe no acervo.",
                  impacto: "Produto: é hoje custo de entrada no mercado brasileiro, não diferencial — todos os concorrentes diretos já têm. Engenharia: o trabalho pesado está na curadoria e na avaliação, não no modelo; orçar equipe de conteúdo junto com a de dados.",
                  maturidade: "Padrão de mercado",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://www.santillanaeducacao.com.br/solucoes-educacionais/solucoes-pedagogicas/moderna-core/",
                  linkLabel: "Referência: Moderna Core"
                },
                {
                  nome: "Fluxo de estudo estruturado (padrão Gemini Study)",
                  tipo: "Padrão de experiência",
                  oque: "Substituição do chat aberto por um ciclo fechado: quiz diagnóstico localiza a lacuna, lições curtas são geradas sobre o material de referência, prática consolida e o progresso persiste entre sessões num painel.",
                  acelera: "Copia um desenho já validado pela própria big tech — que abandonou a conversa livre — e o aplica sobre currículo estruturado por série, capítulo e habilidade, algo que o Gemini não tem.",
                  limitacoes: "Diagnóstico curto erra em conteúdo de baixa densidade de itens; gerar lição sob demanda sem revisão humana reproduz erro conceitual em escala; e o formato pode virar mais uma trilha abandonada se não estiver ligado ao que o professor está dando em aula naquela semana.",
                  dependencias: "Banco de itens calibrado por habilidade, mapeamento do acervo para a BNCC, motor de sequenciamento adaptativo, persistência de estado por aluno e integração com o planejamento da turma.",
                  cenario: "Estudo autônomo, recuperação de defasagem e preparação para avaliações. Rende mais em disciplinas com progressão bem definida — matemática, gramática, ciências.",
                  impacto: "Produto: é a resposta mais direta à distribuição gratuita do Gemini, porque compete no que ele não faz — vínculo com o currículo e com o professor. Engenharia: o item calibrado é o gargalo real, não o modelo; a calibração precisa começar antes do desenvolvimento.",
                  maturidade: "Disponível",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/",
                  linkLabel: "Como o Google montou"
                },
                {
                  nome: "Microdados públicos como camada de inteligência",
                  tipo: "Dado aberto",
                  oque: "Uso de bases públicas — microdados do ENEM, Saeb, Censo Escolar e Indicadores do INEP — para gerar diagnóstico comparativo de rede, benchmark regional e priorização pedagógica. É o padrão que o Radar ENEM da Bernoulli tornou visível no mercado.",
                  acelera: "Entrega inteligência de rede sem depender de coletar dado novo: a base já existe, é pública e ninguém precisa autorizar. Valor imediato para gestor e mantenedor, que é onde a decisão de compra acontece.",
                  limitacoes: "Dado defasado por natureza — o ciclo de publicação é anual e olha para trás. Não diz nada sobre o aluno individual da sua base, só sobre agregados. Comparação entre escolas exige controle de perfil socioeconômico, sob risco de produzir ranking injusto e comercialmente perigoso.",
                  dependencias: "Pipeline de ingestão e normalização por ano (o layout muda entre edições), infraestrutura analítica, cuidado estatístico na comparação e camada de visualização para não técnico.",
                  cenario: "Conversa com mantenedor e secretaria, diagnóstico de posicionamento da escola na região e priorização de habilidades a reforçar no plano anual.",
                  impacto: "Produto: diferencial de venda para o decisor econômico, com custo de dado próximo de zero. Engenharia: esforço concentrado em ETL e modelagem estatística, não em IA — pode ser entregue por time de dados sem depender do roadmap de modelos.",
                  maturidade: "Disponível",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://www.bernoulli.com.br/blog/microdados-do-enem-como-transformar-dados-em-decisoes-estrategicas-com-o-radar-enem-bernoulli/",
                  linkLabel: "Referência: Radar ENEM"
                },
                {
                  nome: "Correção por câmera com visão computacional",
                  tipo: "Componente operacional",
                  oque: "Leitura automática de gabaritos e microtestes pela câmera do celular, adaptando-se a diferentes anos e formatos de folha, com devolutiva imediata — padrão que o eDocente levou à rede pública.",
                  acelera: "Devolve horas de trabalho manual ao professor usando o aparelho que ele já tem, sem exigir infraestrutura, licença por aluno ou conectividade estável.",
                  limitacoes: "Sensível a iluminação, dobra e qualidade de impressão; exige folha padronizada, o que engessa o formato da avaliação; e cobre bem questão objetiva, mal questão aberta — justamente o tipo que a evidência desta edição sugere valorizar.",
                  dependencias: "Modelo de visão embarcado ou API, funcionamento offline com sincronização posterior para escola sem conectividade, template de folha versionado e tratamento de dado de menor sob a LGPD.",
                  cenario: "Redes públicas e escolas com grande volume de turmas e pouca infraestrutura, em avaliações diagnósticas frequentes de baixa complexidade.",
                  impacto: "Produto: menor fricção de adoção do portfólio — resolve dor imediata e cria hábito diário. Engenharia: priorizar robustez em condição ruim de captura e modo offline; é um problema de engenharia de campo, não de modelo.",
                  maturidade: "Disponível",
                  cor: "bg-blue-100 text-blue-700",
                  link: "https://www.edocente.com.br/",
                  linkLabel: "Referência: eDocente"
                },
                {
                  nome: "MCP-Brasil",
                  tipo: "Protocolo / Integração",
                  oque: "Servidor MCP aberto que conecta modelos a dezenas de APIs públicas brasileiras — economia, legislação, transparência, judiciário, eleições, meio ambiente, saúde, educação e segurança — num único ponto de integração, com a maioria das fontes dispensando chave de acesso.",
                  acelera: "Tira o agente do campo da resposta plausível e o coloca para consultar dado oficial brasileiro verificável, sem trocar de modelo.",
                  limitacoes: "Disponibilidade herdada das APIs de origem, que caem e mudam sem aviso; latência somada a cada consulta encadeada; cobertura irregular entre domínios; e projeto comunitário, sem garantia de continuidade ou suporte.",
                  dependencias: "Cliente MCP no stack, cache local para não depender do uptime das fontes, tratamento de erro por indisponibilidade e curadoria de quais domínios expor ao aluno.",
                  cenario: "Projetos de pesquisa e atualidades, educação financeira, cidadania e produção de conteúdo com dado público verificável — onde citar a fonte oficial é parte do objetivo pedagógico.",
                  impacto: "Produto: sustenta o discurso de soberania de dados na venda pública com implementação concreta por trás. Engenharia: integração barata e de baixo risco, desde que tratada como fonte instável — cache e degradação graciosa não são opcionais.",
                  maturidade: "Emergente",
                  cor: "bg-green-100 text-green-700",
                  link: "https://github.com/Mcp-Brasil/mcp-brasil",
                  linkLabel: "Repositório no GitHub"
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
                      <p className="text-xs font-semibold text-red-700 mb-1 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" /> Limitações
                      </p>
                      <p className="text-xs text-gray-700 leading-relaxed">{a.limitacoes}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Dependências técnicas</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{a.dependencias}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Cenário ideal de uso</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{a.cenario}</p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-3 border-l-4 border-[#6B46C1]">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto para Produto e Engenharia</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{a.impacto}</p>
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
              Leituras que <span className="text-[#6B46C1]">mudam a conversa</span>
            </h2>
            <p className="text-gray-500 mb-10 text-lg max-w-3xl">
              Publicações da janela por quem forma opinião no setor — começando pelo que eles estão dizendo em coro.
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
                    A discussão do setor virou de chave: ninguém relevante ainda argumenta sobre adotar ou não adotar IA. O debate inteiro migrou para <span className="text-[#FFB89A]">quem desenha o uso</span> — e todos concluíram, por caminhos diferentes, que a ferramenta sozinha não resolve e que a variável decisiva é o papel que se dá a ela.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    ponto: "O dano não está na ferramenta, está no papel atribuído a ela",
                    detalhe: "O estudo do CEPR e o relatório da OCDE chegam ao mesmo lugar por métodos opostos: GenAI ajuda quando é desenhada para fim educativo ou usada com orientação pedagógica clara, e prejudica quando substitui o esforço. Convergência rara entre evidência quantitativa e análise de política pública."
                  },
                  {
                    ponto: "IA é infraestrutura do trabalho educativo, não substituto da decisão humana",
                    detalhe: "Formulação que se repetiu no palco do Bernoulli Reload e atravessa a cobertura do Educador21: a tecnologia amplia capacidade, mas não substitui intencionalidade pedagógica. Deixou de ser ressalva retórica e virou critério de arquitetura de produto."
                  },
                  {
                    ponto: "Sem política institucional explícita, o default do aluno é terceirizar",
                    detalhe: "Com 78% de adoção, 5% de orientação formal e 20% das instituições com regra, o vácuo não produz uso neutro — produz o uso que a evidência mostrou ser o mais danoso. A ausência de política é, na prática, uma decisão."
                  },
                  {
                    ponto: "A formação docente virou o gargalo real, não o orçamento de tecnologia",
                    detalhe: "É o que o caso do Piauí demonstra na prática — escalou porque formou professor antes de mudar currículo — e o que o mercado sinaliza ao tornar formação em IA gratuita. Quem trata capacitação como etapa paralela não escala."
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
                  autor: "Educador21",
                  cargo: "Portal de análise educacional · Brasil",
                  titulo: "IA desafia escolas a repensar gestão e formação",
                  data: "Ago/2026",
                  tese: "Cobertura do Bernoulli Reload 2026, com mais de 800 gestores e mantenedores, sustentando que a IA muda não só as ferramentas e práticas, mas as próprias perguntas que orientam o trabalho escolar. Com a máquina assumindo tarefas cognitivas, o gestor precisa decidir o que automatizar, o que transformar e sobretudo o que não pode ser delegado à tecnologia.",
                  aplicacao: "A melhor síntese da janela sobre a agenda do gestor brasileiro — o decisor de compra. Define o vocabulário com que a liderança escolar está formulando o problema, e é nesse vocabulário que a proposta comercial precisa ser escrita.",
                  link: "https://educador21.com/ia-desafia-escolas-repensar-gestao-formacao/"
                },
                {
                  autor: "Educador21",
                  cargo: "Portal de análise educacional · Brasil",
                  titulo: "IA pedagógica inaugura nova fase da inovação escolar",
                  data: "Ago/2026",
                  tese: "Argumenta que o setor está migrando de ferramentas generativas de uso geral para soluções desenvolvidas especificamente para apoiar a aprendizagem, fortalecer a prática docente e responder a necessidades pedagógicas — uma separação entre IA genérica e IA pedagógica que começa a se firmar como categoria.",
                  aplicacao: "Nomeia exatamente a fronteira competitiva desta edição: com a big tech distribuindo IA genérica de graça, 'IA pedagógica' é a categoria que sobra para quem está dentro da escola. Vale adotar o termo no posicionamento.",
                  link: "https://educador21.com/ia-pedagogica-nova-fase-inovacao-escolar/"
                },
                {
                  autor: "OCDE",
                  cargo: "Digital Education Outlook 2026",
                  titulo: "O impacto da IA generativa na educação",
                  data: "2026",
                  tese: "Sistematiza a evidência disponível sobre GenAI nas escolas, seus benefícios e os riscos para a aprendizagem autônoma. A conclusão central é condicional: as ferramentas apoiam a aprendizagem de forma eficaz quando são concebidas para fins educativos ou utilizadas sob orientação pedagógica clara — e não quando substituem o esforço.",
                  aplicacao: "Fonte institucional que sustenta, com peso de organismo multilateral, o mesmo achado do estudo do CEPR. É a citação que abre conversa com secretaria de educação e mantenedor sem parecer discurso de fornecedor.",
                  link: "https://www.dge.mec.pt/noticias/ocde-digital-education-outlook-2026-o-impacto-da-inteligencia-artificial-generativa-na"
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
                    <div className="bg-purple-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">O que fazer com isso</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{e.aplicacao}</p>
                    </div>
                  </div>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg hover:bg-[#6B46C1] hover:text-white transition-all font-medium text-sm mt-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ler o artigo
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FONTES MONITORADAS ── */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <Library className="w-5 h-5 text-[#6B46C1]" />
              <p className="font-bold text-gray-900">Fontes monitoradas pelo Radar</p>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-3xl">
              Base fixa de curadoria consultada a cada edição, além da varredura aberta da janela. Novas fontes entram nesta lista e passam a ser monitoradas nas edições seguintes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  grupo: "Setor educacional brasileiro",
                  itens: [
                    { nome: "Educador21", url: "https://educador21.com/", novo: true },
                    { nome: "Revista Educação", url: "https://revistaeducacao.com.br/" },
                    { nome: "Bett Brasil / Bett Nordeste", url: "https://brasil.bettshow.com/" },
                    { nome: "Jeduca", url: "https://jeduca.org.br/" },
                  ]
                },
                {
                  grupo: "Institucional e regulatório",
                  itens: [
                    { nome: "MEC", url: "https://www.gov.br/mec/pt-br" },
                    { nome: "CNE — pareceres e diretrizes", url: "https://www.gov.br/mec/pt-br/cne" },
                    { nome: "INEP — microdados", url: "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados" },
                    { nome: "OCDE — Digital Education Outlook", url: "https://www.oecd.org/education/" },
                  ]
                },
                {
                  grupo: "Tecnologia, capital e pesquisa",
                  itens: [
                    { nome: "Blogs oficiais Google, OpenAI e Anthropic", url: "https://blog.google/technology/ai/" },
                    { nome: "Startups.com.br — M&A em edtech", url: "https://startups.com.br/" },
                    { nome: "CEPR — working papers", url: "https://cepr.org/" },
                    { nome: "One Useful Thing / The Batch", url: "https://www.oneusefulthing.org/" },
                  ]
                },
              ].map((bloco, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-3">{bloco.grupo}</p>
                  <ul className="space-y-2">
                    {bloco.itens.map(item => (
                      <li key={item.nome}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-[#6B46C1] transition-colors inline-flex items-center gap-1.5 group"
                        >
                          <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-[#6B46C1] transition-colors flex-shrink-0" />
                          <span>{item.nome}</span>
                          {item.novo && (
                            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#FF6B35] text-white uppercase tracking-wide">
                              Novo
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Diferenciação vs <span className="text-[#6B46C1]">Commodity</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <p className="font-bold text-red-700 text-sm uppercase tracking-wide">Virou commodity</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "Acesso a IA de ponta como parte da oferta", motivo: "O Google dá um ano de plano pago em 140+ países e a Anthropic abriu 26 cursos gratuitos. 'IA inclusa' deixou de valer dinheiro em 20 de agosto" },
                    { item: "Gerador de plano de aula e de questões", motivo: "Plurall IA, CoCria, Cosmos e Moderna Core entregam o mesmo. Virou custo de entrada, não argumento de venda" },
                    { item: "Chat ancorado no conteúdo próprio", motivo: "RAG sobre acervo autoral já é padrão entre todos os concorrentes diretos — e até o robô da Bett Nordeste roda nisso" },
                    { item: "Formação em IA como receita adicional", motivo: "A Claude Academy tornou gratuito e bom o que vários sistemas planejavam monetizar. Sobra a formação ancorada na BNCC e no material adotado" },
                    { item: "Discurso de 'IA com intencionalidade pedagógica'", motivo: "Todo palco do setor repetiu a frase nesta janela. Sem métrica de percurso por trás, virou consenso vazio que não diferencia ninguém" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{c.item}</p>
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
                    { item: "Mediação desenhada dentro do produto", motivo: "Fazer o caminho certo ser mais fácil que o atalho — o único antídoto à penalidade de 20% medida com 26.811 alunos, e ninguém no Brasil oferece ainda" },
                    { item: "Evidência de percurso, não de entrega", motivo: "Versões, tentativas, tempo e revisões: a única prova de aprendizagem que o agente não consegue fabricar pelo aluno" },
                    { item: "Política de uso pronta para a escola adotar", motivo: "Com 20% das instituições tendo regra e o CNE sem homologar, entregar governança defensável resolve uma dor que nem a norma nem o concorrente resolveram" },
                    { item: "Dado longitudinal da própria rede", motivo: "Histórico do aluno cruzado com microdados públicos — o Google entrega estudo genérico, mas não sabe o que a turma viu no capítulo passado" },
                    { item: "Formação docente ancorada no material adotado", motivo: "A big tech ensina a ferramenta; quem está na escola ensina a usá-la sobre a BNCC, o livro em uso e a política da rede — com certificação que o mantenedor reconhece" },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{d.item}</p>
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
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              O que é ruído, o que é <span className="text-[#6B46C1]">sinal</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <p className="font-bold text-orange-700 mb-6 text-sm uppercase tracking-wide flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Superestimado
                </p>
                <div className="space-y-5">
                  {[
                    { titulo: "IA grátis para o aluno democratiza a aprendizagem", desc: "A evidência da própria janela diz o contrário: acesso sem mediação produziu queda de 20% na prova em seis meses. Distribuir ferramenta poderosa a quem não recebeu orientação — 95% dos estudantes brasileiros — amplia a desigualdade de resultado em vez de reduzi-la." },
                    { titulo: "RAG sobre conteúdo próprio resolve o problema de confiabilidade", desc: "Resolve a procedência da resposta, não o uso que se faz dela. Um tira-dúvidas impecavelmente ancorado no livro didático continua entregando a resposta pronta para quem quer pular o esforço. Confiança na fonte não é o mesmo que aprendizagem." },
                    { titulo: "Robô humanoide na sala de aula", desc: "Alto poder de encantamento em feira, nenhuma evidência de efeito na aprendizagem e custo elevado por unidade. O que sustenta a experiência é a camada de RAG por trás — replicável sem hardware. Categoria com risco alto de virar vitrine cara para a rede." },
                    { titulo: "Adoção alta é sinal de maturidade do setor", desc: "78% dos estudantes usando IA com 5% orientados não é maturidade — é exposição. O número que importa não é quantos usam, e sim quantos usam sob desenho pedagógico. Comemorar penetração sem medir efeito é ler o indicador errado." },
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

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <p className="font-bold text-blue-700 mb-6 text-sm uppercase tracking-wide flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Tendência Real
                </p>
                <div className="space-y-5">
                  {[
                    { titulo: "Mediação como requisito de produto, não como discurso", desc: "Com evidência quantitativa do CEPR e chancela da OCDE apontando para o mesmo lugar, 'desenho de uso' saiu do campo pedagógico e virou especificação técnica: retenção de resposta, pistas graduadas, esforço registrado. É a tendência que reorganiza roadmap." },
                    { titulo: "Evidência de percurso como novo artefato de avaliação", desc: "Se a entrega deixou de provar aprendizagem, a prova migra para o processo. Telemetria de percurso é a resposta técnica ao problema que a própria IA criou — e a lacuna mais explícita do mercado brasileiro nesta janela." },
                    { titulo: "O fim do chat aberto como formato de estudo", desc: "O Google abandonou a conversa livre e migrou para diagnóstico, lição curta, prática e progresso persistente. Quando quem inventou a interface troca de formato, o padrão do setor muda junto." },
                    { titulo: "Formação docente como camada de produto", desc: "Piauí escalou porque formou 800 professores antes de mudar currículo; a Anthropic tornou a formação gratuita. Capacitação deixou de ser brinde comercial e virou pré-condição de adoção — e agora com concorrente subsidiado." },
                    { titulo: "Consolidação por captura de time técnico", desc: "Acquihire da Nero.AI e captação da Premia com M&A anunciado. Quando a janela competitiva fica menor que o tempo de formar equipe, comprar capacidade vira decisão de roadmap — e os alvos ficam mais caros a cada ciclo." },
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

              <div className="md:col-span-2 bg-white rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-5 h-5 text-[#6B46C1]" />
                  <p className="font-bold text-gray-900">O padrão desta quinzena</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Duas coisas aconteceram no mesmo mês e vale ler juntas: a primeira evidência longitudinal em larga escala mostrou que IA sem mediação custa 20% da nota da prova, e as duas maiores empresas de IA do mundo passaram a distribuir suas ferramentas de graça direto ao aluno e ao professor. O acesso, que era o argumento comercial, virou commodity subsidiada em 20 de agosto. O que sobrou de escasso é exatamente o que a gratuidade não entrega: uso desenhado, evidência de percurso, política de governança e vínculo com o currículo. No Brasil, os concorrentes diretos já operam IA ancorada em acervo próprio — Bernoulli com portfólio segmentado por público, Poliedro com o Cosmos, Arco com literacia em IA no currículo — mas nenhum se posicionou sobre a evidência de perda de aprendizagem, e nenhum lançou produto de evidência de processo. É a lacuna mais explícita desta edição: o problema tem dado, tem urgência e não tem dono.
                </p>
              </div>
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
              Oportunidades de <span className="text-[#6B46C1]">Produto</span>
            </h2>
            <p className="text-gray-500 mb-4 max-w-3xl">Cada oportunidade traduzida em o que muda para professor, aluno e gestor — e o que entra no roadmap.</p>

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
                  sinal: "Estudo com 26.811 alunos mede queda de 20% na prova após seis meses de IA sem mediação",
                  oportunidade: "Modo de estudo que retém a resposta e devolve o caminho",
                  impacto: "Problema: a ferramenta que resolve a tarefa em segundos é a mesma que derruba a nota em seis meses — e o aluno não percebe o custo enquanto acontece. Oportunidade: modo de estudo que se recusa a entregar a resposta final, devolve pista graduada, exige tentativa antes de avançar e mostra o esforço acumulado. Impacto: transforma o achado mais citado do semestre em razão de compra — e é a única resposta que a distribuição gratuita da big tech não tem.",
                  professor: "Recupera o controle sobre como a IA entra na tarefa, sem ter que proibir o que não consegue fiscalizar.",
                  aluno: "Continua ganhando tempo, mas no ponto certo: menos esforço mecânico, mais esforço de raciocínio.",
                  gestor: "Ganha resposta pronta para a pergunta que os pais vão fazer sobre IA e queda de desempenho.",
                  roadmap: "Camada de política sobre o motor de IA já existente — não exige modelo novo, exige regra de interação e design de fricção.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Produto / Pedagógico"
                },
                {
                  sinal: "A entrega deixou de provar aprendizagem e nenhum player brasileiro lançou alternativa",
                  oportunidade: "Evidência de percurso como novo artefato de avaliação",
                  impacto: "Problema: trabalho escrito, relatório e lista de exercícios viraram saída de agente, e a escola avalia um artefato que não diz mais quem aprendeu. Oportunidade: capturar versões, tentativas, tempo e revisões dentro do editor próprio, entregando ao professor um retrato do percurso — não um veredito de plágio. Impacto: cria a métrica que o mercado inteiro vai precisar e que ninguém oferece; é a lacuna mais explícita desta edição.",
                  professor: "Passa a ver como o aluno chegou ao resultado e pode intervir antes da prova, não depois.",
                  aluno: "É avaliado pelo processo, o que protege quem se esforça de ser confundido com quem terceirizou.",
                  gestor: "Tem indicador defensável de uso responsável de IA para apresentar a família e mantenedor.",
                  roadmap: "Exige editor próprio instrumentado, esquema de eventos definido cedo e base legal LGPD para dado comportamental de menor.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Avaliação / Engenharia"
                },
                {
                  sinal: "Só 20% das instituições têm política de uso e o CNE segue sem homologar",
                  oportunidade: "Política de uso de IA pronta, defensável e configurável",
                  impacto: "Problema: a escola precisa decidir sozinha o que pode e o que não pode, sem norma nacional e sem equipe jurídica para redigir. Oportunidade: entregar política modelo alinhada aos quatro níveis de risco do parecer do CNE, com termos para família, orientação ao aluno e configuração correspondente no produto. Impacto: resolve dor imediata com custo de desenvolvimento baixo e cria dependência do fornecedor que a atualiza quando a norma sair.",
                  professor: "Recebe regra clara para aplicar em sala em vez de improvisar critério por turma.",
                  aluno: "Passa a ter orientação formal — hoje ausente para 95% dos estudantes brasileiros.",
                  gestor: "Sai do limbo regulatório com documento defensável perante família, mantenedor e futura fiscalização.",
                  roadmap: "Governança parametrizável por nível de risco, para absorver o texto final do CNE sem retrabalho de produto.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Compliance / Institucional"
                },
                {
                  sinal: "Google e Anthropic tornaram gratuitas a IA de ponta e a formação em IA",
                  oportunidade: "Formação docente certificada e ancorada no material adotado",
                  impacto: "Problema: formação em IA como linha de receita foi neutralizada por concorrente gratuito e de boa qualidade. Oportunidade: fazer o que a Claude Academy não faz — formar sobre a BNCC, o livro em uso, a política da rede e casos reais da própria escola, com certificação reconhecida pelo mantenedor. Impacto: preserva a formação como camada de valor e ainda funciona como canal de adoção do restante do portfólio.",
                  professor: "Formação aplicável ao que ele ensina amanhã, não a uma ferramenta genérica.",
                  aluno: "Efeito indireto e o mais relevante: o caso do Piauí mostra que professor formado é a variável que faz o programa escalar.",
                  gestor: "Certificação e trilha de progresso da equipe como indicador de maturidade da rede.",
                  roadmap: "Reaproveita acervo e trilha existentes; o investimento novo é curricular e de certificação, não tecnológico.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Formação / Receita"
                },
                {
                  sinal: "Radar ENEM mostra microdados públicos virando inteligência de rede",
                  oportunidade: "Camada de diagnóstico sobre microdados públicos",
                  impacto: "Problema: a conversa com mantenedor e secretaria é sobre posicionamento e resultado, e a maioria dos fornecedores só leva dado de uso da própria plataforma. Oportunidade: cruzar microdados de ENEM, Saeb e Censo Escolar com o histórico da rede para gerar benchmark regional e priorização de habilidades. Impacto: argumento de venda para o decisor econômico com custo de dado próximo de zero.",
                  professor: "Recebe prioridade pedagógica fundamentada em dado externo, não em percepção.",
                  aluno: "Plano de reforço direcionado às habilidades em que a rede de fato tem defasagem.",
                  gestor: "Vê onde a escola está frente à região e ao país — a informação que ele mais pede e menos recebe.",
                  roadmap: "Trabalho de ETL e modelagem estatística, entregável por time de dados sem depender do roadmap de modelos.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Dados / Comercial"
                },
                {
                  sinal: "CNE em recomposição e EducaLab sem edital publicado",
                  oportunidade: "Interlocução técnica na janela de indefinição institucional",
                  impacto: "Problema: quando a norma sair e as chamadas forem publicadas, quem não estiver na conversa reage tarde e sob regra escrita por outros. Oportunidade: aproximação técnica com o EducaLab e com as entidades que indicam conselheiros até 28/08, levando caso de uso com governança documentada. Impacto: influenciar critério enquanto está sendo redigido continua sendo a forma mais barata de competir.",
                  professor: "Efeito de médio prazo: norma redigida com quem conhece a sala de aula tende a ser aplicável.",
                  aluno: "Diretriz nacional de uso de IA finalmente saindo do limbo.",
                  gestor: "Previsibilidade regulatória para planejar investimento de 2027.",
                  roadmap: "Não consome roadmap de engenharia — consome tempo de liderança e material de governança já produzido.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "B2G / Institucional"
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
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.corBadge}`}>
                      {item.prioridade}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{item.area}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">Sinal observado</p>
                  <p className="text-sm text-gray-500 mb-3 italic leading-relaxed">{item.sinal}</p>
                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{item.oportunidade}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.impacto}</p>
                  <div className="mt-auto border-t border-gray-100 pt-4 space-y-1.5">
                    {[
                      { label: 'Professor', valor: item.professor },
                      { label: 'Aluno', valor: item.aluno },
                      { label: 'Gestor', valor: item.gestor },
                      { label: 'Roadmap', valor: item.roadmap },
                    ].map(linha => (
                      <p key={linha.label} className="text-xs text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-900">{linha.label}:</span> {linha.valor}
                      </p>
                    ))}
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
              Biblioteca viva do Radar de IA na Educação — histórico contínuo de inteligência estratégica
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
                alt="PULSO — Curador de IA na Educação"
                className="h-20 md:h-24 w-auto drop-shadow-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-wide">
              PULSO
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-1 font-medium">
              Radar de IA na Educação
            </p>
            <p className="text-white/50 text-xs mb-8">
              Movimentos de mercado · Implicações estratégicas · Oportunidades de produto
            </p>

            <div className="pt-6 border-t border-white/15 space-y-1.5">
              <p className="text-white/60 text-sm">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
              <p className="text-white/50 text-sm">Hub de IA — Iônica &amp; FTD Com Você</p>
              <p className="text-white/30 text-xs mt-2">Agosto de 2026 · Edição #10 · 04 – 21 ago</p>
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
