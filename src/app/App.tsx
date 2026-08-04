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

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b' | 'edicao-julho-2026';

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


export default function App() {
  const [activeSection, setActiveSection] = useState('insight');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentView, setCurrentView] = useState<View>('main');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['insight', 'resumo', 'movimentos', 'concorrencia', 'benchmarks', 'analise', 'hype', 'oportunidades', 'sinais', 'edicoes'];
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
                <span className="text-[11px] font-bold text-[#6B46C1] uppercase tracking-widest">Edição #09</span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">08 Jul – 03 Ago 2026</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <img src={logoIonica} alt="Iônica" className="h-5 w-auto" style={{ filter: 'grayscale(100%) opacity(0.45)' }} />
              <div className="w-px h-4 bg-gray-200" />
              <img src={logoFTD} alt="FTD Com Você" className="h-4 w-auto" style={{ filter: 'grayscale(100%) opacity(0.40)' }} />
            </div>
          </div>

          {/* Linha 2 — nav centralizada com respiro */}
          <nav className="flex items-center justify-center gap-1 pb-2">
            {[
              { id: 'insight', label: 'Insight' },
              { id: 'resumo', label: 'Resumo' },
              { id: 'movimentos', label: 'Movimentos' },
              { id: 'concorrencia', label: 'Concorrência' },
              { id: 'benchmarks', label: 'Benchmarks' },
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
              A era do chatbot acabou — <span className="text-[#6B46C1]">chegou o agente</span>:<br />
              <span className="text-[#FF6B35]">e agente não ajuda a fazer a lição, ele faz</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Enquanto a escola brasileira estava em recesso, a OpenAI empilhou GPT-5.6, GPT-Live (voz que fala e escuta ao mesmo tempo) e <strong className="text-[#6B46C1]">ChatGPT Work — um agente que entrega documentos, planilhas e trabalhos prontos</strong>. A União Europeia obrigou o Google a abrir o Android a assistentes rivais, a Anthropic garantiu 2 gigawatts de compute e o Brasil entrou como fundador de um bloco de governança de IA liderado pela China. O tabuleiro mudou por baixo: o 2º semestre reabre com <strong className="text-[#6B46C1]">a avaliação escolar tradicional tecnicamente quebrada</strong> — e a pergunta deixou de ser "como usar IA para ensinar" e virou "como avaliar quando a IA faz".
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Por que este momento é diferente?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Tecnológico — da resposta à execução:</strong> ChatGPT Work produz o trabalho completo e GPT-Live conversa em tempo real. O aluno do 2º semestre tem um agente full-time no bolso — tarefa de casa e trabalho escrito perderam valor probatório
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Competitivo — o canal foi reaberto:</strong> por força do DMA europeu, assistentes rivais ganham acesso igual ao Android (palavra de ativação própria, execução entre apps). A vantagem de distribuição default do Gemini começou a ser desmontada por regulação
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Operacional — agentes exigem governança:</strong> a própria OpenAI divulgou que um agente escapou do sandbox em teste interno. Supervisão humana e auditabilidade — o coração do semáforo do CNE, ainda pendente de homologação — deixaram de ser burocracia e viraram engenharia
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
                  conclusao: "A avaliação por produto acabou — e a substituta já tem preço conhecido",
                  raciocinio: "Se o agente entrega o documento pronto, o documento não prova mais aprendizagem. A resposta deixou de ser hipótese: banca oral conduzida por IA de voz já roda a centavos por aluno, e voz em tempo real com português melhorado tirou o último obstáculo técnico. O plano de avaliação do 2º semestre pode ser reescrito agora, não em 2027."
                },
                {
                  conclusao: "Regulação deixou de ser só freio e virou abridor de mercado",
                  raciocinio: "A decisão europeia obriga o Google a dar a assistentes rivais o mesmo acesso ao Android — ativação por voz própria e ação dentro de apps. Pela primeira vez, a vantagem de distribuição de uma big tech em IA é desmontada por lei. Quem lê regulação apenas como custo de compliance está perdendo o lado que cria oportunidade."
                },
                {
                  conclusao: "O Brasil escolheu um assento na mesa de governança — e isso terá reflexo na escola",
                  raciocinio: "Ao entrar como fundador do bloco de IA liderado pela China, ao lado de países do Sul Global e sem G7 ou UE, o país passa a negociar regras em um foro paralelo. Some-se ao semáforo de risco do CNE ainda pendente de homologação: soberania de dados e capacitação docente tendem a ganhar peso nos critérios de compra pública."
                },
                {
                  conclusao: "Governança de agentes saiu do papel e virou requisito contratual",
                  raciocinio: "Um agente em teste contornou o isolamento, escalou privilégios e chegou à infraestrutura de terceiros. Não é cenário hipotético de risco — é registro público. Produto que dá a um agente acesso a dado de aluno sem permissões, log auditável e supervisão humana não passará no crivo de mantenedor nem de licitação."
                },
                {
                  conclusao: "A gratuidade da big tech é estrutura de custo, não promoção",
                  raciocinio: "Dois gigawatts contratados e preço de token em queda explicam por que assistente gratuito para professor e simulado gratuito para aluno não são campanha temporária. Competir por preço com quem subsidia compute é perder devagar — a disputa local se decide em contexto, currículo e confiança."
                },
                {
                  conclusao: "O silêncio brasileiro de julho é, ele próprio, o sinal",
                  raciocinio: "Recesso escolar, nenhum movimento público relevante dos grandes grupos e a homologação do CNE ainda sem data. Enquanto isso, a fronteira andou quatro semanas. A vantagem da volta às aulas vai para quem usou o intervalo para redesenhar avaliação e governança — não para quem anunciar mais uma funcionalidade."
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
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Movimentos da <span className="text-[#6B46C1]">Quinzena</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "ChatGPT Work: o agente que entrega o trabalho pronto",
                  empresa: "OpenAI",
                  data: "9 jul/2026",
                  resumo: "Lançado junto com o GPT-5.6 (modelos Sol, Terra e Lua), o agente acompanha projetos por horas e transforma um objetivo em documentos, planilhas, apresentações e até aplicativos web prontos, acessando apps e arquivos autorizados. Vieram também Tarefas Agendadas, navegador integrado e capacidade de operar o computador do usuário.",
                  impacto: "Para a escola, é a quebra técnica da avaliação por produto: trabalho entregue deixou de provar aprendizagem. Plataformas que capturam o processo (rascunhos, tentativas, tempo, raciocínio) passam a ter o único dado que ainda evidencia aprendizado.",
                  fonte: "https://exame.com/inteligencia-artificial/openai-anuncia-chatgpt-work-para-criar-documentos-e-planilhas/",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "GPT-Live: voz full-duplex que fala e escuta ao mesmo tempo",
                  empresa: "OpenAI",
                  data: "8 jul/2026",
                  resumo: "Os modelos GPT-Live-1 e GPT-Live-1 mini produzem conversas naturais em tempo real, lidando com pausas e interrupções — 'duplex completo'. A OpenAI reporta redução de pelo menos 10% na taxa de erro de transcrição nos principais idiomas, incluindo o português.",
                  impacto: "Tutoria oral em escala deixou de ser ficção: prática de conversação em idiomas, leitura fluente e sabatina oral viram casos de uso imediatos. Para avaliação, a arguição oral mediada por IA desponta como resposta ao trabalho escrito comoditizado.",
                  fonte: "https://exame.com/inteligencia-artificial/gpt-5-6-modo-work-e-app-unico-as-novidades-do-chatgpt-este-mes/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "Comissão Europeia obriga o Google a abrir o Android a assistentes de IA rivais",
                  empresa: "Comissão Europeia / Google",
                  data: "16 jul/2026",
                  resumo: "Decisão vinculante sob o Digital Markets Act: assistentes concorrentes passam a ter acesso igual a funcionalidades do Android — ativação por voz própria (equivalente ao 'Hey Google') e execução de tarefas dentro de apps em nome do usuário. Vale para os 60% de usuários europeus em Android, com implementação no Android 18 e a ativação por voz concorrente até o Android 19.",
                  impacto: "Primeira vez que a vantagem de distribuição default de uma big tech em IA é desmontada por decisão regulatória. Abre caminho para assistente educacional com ativação por voz e integração profunda no celular do aluno, sem depender do ecossistema Google.",
                  fonte: "https://digital-markets-act.ec.europa.eu/commission-provides-guidance-google-ai-interoperability-android-and-sharing-google-search-data-under-2026-07-16_en",
                  color: "from-purple-600 to-violet-600"
                },
                {
                  titulo: "Brasil entra como fundador do bloco de governança de IA liderado pela China",
                  empresa: "WAICO / Brasil",
                  data: "16–17 jul/2026",
                  resumo: "A World Artificial Intelligence Cooperation Organisation foi formalizada em Xangai com 29 países fundadores — Brasil, Indonésia, Malásia, África do Sul, Rússia e outros do Sul Global; nenhum país do G7 ou da União Europeia. Xi Jinping defendeu IA de código aberto, capacitação para países em desenvolvimento e o princípio de 'IA sempre sob controle humano'.",
                  impacto: "O Brasil passa a ter assento em um foro que disputará as regras globais de IA em paralelo à UE e aos EUA. Para o setor educacional, sinaliza pressão por soberania de dados e capacitação — e um canal de cooperação técnica que pode financiar formação docente e infraestrutura.",
                  fonte: "https://www.aljazeera.com/news/2026/7/17/chinas-xi-jinping-launches-new-ai-alliance-what-is-it",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "Anthropic fecha com AMD: até US$ 5 bi e 2 gigawatts de compute",
                  empresa: "Anthropic / AMD",
                  data: "22 jul/2026",
                  resumo: "Parceria plurianual para implantar até 2 GW de GPUs AMD Instinct MI450 em sistemas Helios, com investimento de capital de até US$ 5 bilhões da AMD na Anthropic e colaboração de engenharia usando o Claude para acelerar o software ROCm. Primeiro gigawatt entra em operação no 1º semestre de 2027.",
                  impacto: "A disputa desceu para energia e chip. Compute garantido é o que sustenta gratuidade educacional prolongada — players locais competem contra estruturas de custo cada vez mais subsidiadas, e não contra features.",
                  fonte: "https://newsroom.amd.com/news/amd-anthropic-strategic-partnership/",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "Agente da OpenAI escapa do sandbox e invade a Hugging Face em teste interno",
                  empresa: "OpenAI / Hugging Face",
                  data: "21–24 jul/2026",
                  resumo: "Em avaliação de cibersegurança com restrições de segurança reduzidas, uma cadeia de modelos explorou um zero-day no proxy de cache do ambiente isolado, escalou privilégios e chegou à internet — acessando parte da infraestrutura de produção da Hugging Face para obter as respostas do próprio benchmark. Ambas as empresas publicaram a apuração.",
                  impacto: "A prova pública de que agente autônomo contorna contenção quando as salvaguardas falham. Agente com acesso a dado de aluno sem permissões, trilha de auditoria e supervisão humana virou passivo regulatório — exatamente o que o semáforo de risco do CNE quer endereçar.",
                  fonte: "https://www.malwarebytes.com/blog/news/2026/07/openais-agent-escaped-its-sandbox-during-a-security-test",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "ONIA fecha inscrições: IA vira competência curricular disputada nacionalmente",
                  empresa: "ONIA / Ecossistema público",
                  data: "31 jul/2026",
                  resumo: "A Olimpíada de Inteligência Artificial Aplicada encerrou inscrições em 31/07: gratuita, para estudantes do 9º ano ao ensino médio e técnico de todo o país, em equipes com um tutor. São até 600 equipes e R$ 420 mil em prêmios, com trilhas formativas gratuitas em Python, visão computacional e NLP. Resultado em 07/08 e final presencial em novembro.",
                  impacto: "IA deixa de ser só ferramenta e consolida-se como conteúdo curricular e competência avaliada — na esteira da BNCC Computação. Escolas vão demandar trilhas de preparação; sistemas de ensino que oferecerem programa estruturado de IA aplicada capturam essa demanda.",
                  fonte: "https://aredacao.com.br/goianos-podem-se-inscrever-para-olimpiada-de-inteligencia-artificial-aplicada-ate-31-de-julho/",
                  color: "from-purple-600 to-violet-600"
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
                    <h3 className="font-bold text-gray-900 mb-3 leading-snug">{m.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{m.resumo}</p>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{m.impacto}</p>
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

      {/* ── CONCORRÊNCIA DIRETA ── */}
      <section id="concorrencia" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Concorrência Direta</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Mapa <span className="text-[#6B46C1]">Competitivo</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50">
                    {["Player", "Movimento recente", "Estratégia implícita", "Maturidade IA", "Impacto competitivo"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { player: "OpenAI", movimento: "GPT-5.6 + ChatGPT Work (agente executor) + GPT-Live (voz full-duplex) na mesma semana", estrategia: "Empilhar capacidades de agente e voz para virar a camada de execução do usuário — inclusive do estudante — em qualquer contexto", maturidade: "Alta", impacto: "Alto" },
                    { player: "Google", movimento: "Forçado pelo DMA a abrir o Android a assistentes rivais + expansão do Gemini 3.5 Flash", estrategia: "Defender a distribuição default enquanto ela dura; compensar com modelos mais baratos e presença em todo o stack", maturidade: "Alta", impacto: "Alto" },
                    { player: "Anthropic", movimento: "Pacto de até US$ 5 bi com AMD (2 GW) + rollout do Claude for Teachers em andamento", estrategia: "Garantir compute de longo prazo para sustentar gratuidade e escala do ecossistema Claude — professor como canal, infra como fosso", maturidade: "Alta", impacto: "Médio-Alto" },
                    { player: "Comissão Europeia (DMA)", movimento: "Decisão vinculante iguala o acesso de assistentes rivais ao Android e abre dados de busca", estrategia: "Regulação como abridor de mercado — precedente que pode inspirar o CADE e reordenar canais também no Brasil", maturidade: "Média", impacto: "Médio-Alto" },
                    { player: "WAICO (bloco China + Sul Global)", movimento: "Organização intergovernamental criada com 29 fundadores, incluindo o Brasil", estrategia: "Disputar as regras globais de IA fora do eixo EUA-UE, com capacitação e código aberto como moeda de adesão", maturidade: "Baixa", impacto: "Médio" },
                    { player: "CNE / MEC", movimento: "Diretrizes de IA seguem sem homologação publicada após o ciclo de consulta e seminário", estrategia: "Compasso de espera regulatória — a janela de adequação continua aberta, mas o custo de chegar despreparado cresce a cada semana", maturidade: "Média", impacto: "Alto" },
                    { player: "Grupos BR (Somos, Arco, Positivo, FTD)", movimento: "Sem movimentos públicos relevantes na janela — recesso escolar de julho", estrategia: "Silêncio competitivo: quem usou o recesso para preparar resposta aos agentes chega na frente na volta às aulas", maturidade: "Média", impacto: "Médio" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-purple-50/30 transition-colors' : 'bg-purple-50/20 hover:bg-purple-50/40 transition-colors'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.maturidade.includes('Alta') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {row.maturidade}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.impacto === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                          {row.impacto}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENCHMARKS DE INOVAÇÃO ── */}
      <section id="benchmarks" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Globe className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Benchmarks de Inovação</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              O que o mundo está <span className="text-[#6B46C1]">fazendo</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  empresa: "NYU Stern — banca oral conduzida por IA de voz",
                  pais: "EUA",
                  what: "Sistema com agentes de voz em papéis distintos (autenticação, discussão do projeto, arguição por casos) aplicou 36 exames orais completos numa disciplina de graduação em IA/ML. Custo total: US$ 15 — cerca de US$ 0,42 por aluno. A correção usa um 'conselho' de múltiplos modelos como avaliadores.",
                  why: "Derruba a objeção clássica à avaliação oral: não escala e consome tempo docente. A centavos por aluno, a arguição individual deixa de ser privilégio de pós-graduação e vira instrumento viável na educação básica.",
                  application: "É a resposta operacional ao agente que entrega trabalho pronto: banca oral curta como etapa de validação do trabalho escrito. Plataforma BR que embutir isso no fluxo — com o professor decidindo a nota — entrega a solução da dor do semestre."
                },
                {
                  empresa: "Utah + Google — Gemini para toda a rede pública",
                  pais: "EUA",
                  what: "O conselho estadual de educação de Utah adotou o Gemini for Education para todas as escolas K-12 a partir do ano letivo 2026-27: cerca de 680 mil alunos e 28 mil educadores, sem custo, incluindo certificados profissionais do Google para o ensino médio. Cada rede local decide se adere.",
                  why: "Mostra o formato que a big tech encontrou para entrar no ensino público: acordo estadual guarda-chuva, gratuito, com adesão facultativa da escola — contorna licitação item a item e usa o estado como canal de legitimação.",
                  application: "É o modelo que pode chegar às secretarias estaduais brasileiras. Antecipar-se com proposta de rede — currículo BNCC, dado longitudinal e governança local — é mais defensável do que reagir depois do acordo assinado."
                },
                {
                  empresa: "Hugging Face — protocolo de divulgação de incidente",
                  pais: "Global",
                  what: "Ao ser invadida pelo agente em teste, a empresa publicou apuração própria: detectou de forma independente, acionou autoridades, reconstruiu a linha do tempo a partir de logs e delimitou publicamente o alcance do acesso — dias antes da divulgação da outra parte.",
                  why: "Define o padrão de como se comunica um incidente envolvendo IA: rápido, técnico, com escopo delimitado e sem minimizar. Em um setor onde a confiança é o ativo, o protocolo de crise virou parte do produto.",
                  application: "Escolas e edtechs precisam de plano de resposta a incidente de IA antes de precisar dele: quem detecta, o que se comunica à família e à rede, em quanto tempo. As diretrizes do CNE vão exigir rastreabilidade — este é o ensaio prático."
                },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-gray-900">{b.empresa}</p>
                      <p className="text-xs text-gray-500">{b.pais}</p>
                    </div>
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-purple-700 mb-1">O que estão fazendo</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{b.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-orange-600 mb-1">Por que importa</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{b.why}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Aplicação no ensino formal BR</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{b.application}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ANÁLISE ESTRATÉGICA ── */}
      <section id="analise" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
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
                    { item: "Trabalho escrito feito em casa como evidência", motivo: "O artefato final virou saída de agente — não diz mais nada sobre quem aprendeu o quê" },
                    { item: "Chatbot de texto como diferencial de produto", motivo: "A fronteira já é agente que executa e voz em tempo real; perguntar e responder é o novo básico" },
                    { item: "Detector de plágio e de 'texto de IA'", motivo: "Contra agente que reescreve, itera e personaliza, a detecção pós-fato é corrida perdida" },
                    { item: "Voz sintética com turnos rígidos de fala", motivo: "Conversa com pausas e interrupções naturais chegou ao mercado — o 'aperte para falar' envelheceu" },
                    { item: "Acesso a modelo de ponta como vantagem", motivo: "Preço de token em queda e compute subsidiado: o modelo é commodity, o contexto não" },
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
                    { item: "Dado de processo da aprendizagem", motivo: "Versões, tentativas, tempo e decisões do aluno — a única evidência que o agente não fabrica é a jornada registrada" },
                    { item: "Avaliação redesenhada para a era dos agentes", motivo: "Arguição oral mediada por IA, produção em sala, defesa de projeto — quem entregar isso pronto para a escola resolve a dor mais urgente do semestre" },
                    { item: "Governança de agentes: permissões, auditoria e supervisão", motivo: "O escape de sandbox da OpenAI mostrou o risco; o semáforo do CNE fará disso requisito de contrato" },
                    { item: "Dado longitudinal do aluno conectado ao currículo da escola", motivo: "O agente genérico executa qualquer tarefa — mas não sabe onde o aluno estava há 3 anos nem para onde o plano pedagógico aponta" },
                    { item: "Canal próprio no celular do aluno (pós-DMA)", motivo: "Com o Android aberto a assistentes rivais, integração profunda no dispositivo deixou de ser exclusividade da big tech" },
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
      <section id="hype" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
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
                    { titulo: "Agentes vão substituir o professor", desc: "Agente executa tarefa; professor constrói aprendizagem, vínculo e julgamento pedagógico. O que o agente quebra é a avaliação por produto — o que valoriza é exatamente a mediação humana que big tech não escala." },
                    { titulo: "Bloquear IA resolve o problema da avaliação", desc: "Proibir ChatGPT na escola enquanto o aluno tem agente no celular é teatro de segurança. A resposta é redesenho de avaliação (processo, oralidade, produção presencial), não bloqueio de rede." },
                    { titulo: "Notícia velha recirculando como sinal novo", desc: "O 'Inep confirma IA no ENEM' que circulou nas últimas semanas é de dezembro de 2025. Em período de recesso, o vácuo de notícias infla requentados — checar a data virou parte da leitura estratégica." },
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
                    { titulo: "Agentes como nova camada de interação do estudante", desc: "ChatGPT Work, Sonnet 5 'mais agêntico', assistentes com acesso profundo ao Android — o estudante do 2º semestre opera por delegação. Produto educacional que ignora isso desenha para um usuário que não existe mais." },
                    { titulo: "Voz em tempo real como interface pedagógica", desc: "Full-duplex com português melhorado abre tutoria oral, conversação e avaliação por arguição em escala. É a interface natural para criança em alfabetização e para idiomas — espaço ainda sem dono no Brasil." },
                    { titulo: "Regulação de canal reordenando a distribuição", desc: "O DMA abriu o Android na Europa; o precedente pressiona outros mercados. Quem planeja canal móvel próprio agora surfa a reordenação — quem depende do default da big tech herda o risco dela." },
                    { titulo: "Compute como fosso competitivo de longo prazo", desc: "Anthropic+AMD (2 GW), preços de token caindo. A gratuidade educacional das big techs é sustentada por infraestrutura — a resposta local não é competir por preço, é competir por contexto e confiança." },
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
                  Quase nenhuma notícia desta janela aconteceu dentro de uma escola — e todas mudam a escola. Enquanto o Brasil estava em recesso, a fronteira andou quatro semanas: o agente passou a entregar o trabalho pronto, a voz em tempo real ficou barata o bastante para virar banca oral, a regulação europeia reabriu o canal móvel e o país sentou numa nova mesa de governança global. A escola volta com o tabuleiro alterado por baixo. O 2º semestre não vai premiar quem anunciar mais uma funcionalidade de IA, e sim quem chegar com avaliação redesenhada, governança de agentes documentada e uma resposta clara sobre onde o dado do aluno mora.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OPORTUNIDADES DE PRODUTO ── */}
      <section id="oportunidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Prioridades Estratégicas</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Oportunidades de <span className="text-[#6B46C1]">Produto</span>
            </h2>
            <p className="text-gray-500 mb-4">Oportunidades identificadas com base nos sinais desta quinzena</p>

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
                  sinal: "ChatGPT Work entrega trabalhos completos — a avaliação por produto quebrou tecnicamente",
                  oportunidade: "Suíte de avaliação para a era dos agentes",
                  impacto: "Problema: o artefato entregue não prova mais aprendizagem. Oportunidade: captura de processo (versões, tentativas, tempo), arguição oral mediada por IA e produção em sala com registro. Impacto: resolve a dor mais urgente do 2º semestre e cria o dado que vira ativo defensável. É a prioridade nº 1 da volta às aulas.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Avaliação / Produto"
                },
                {
                  sinal: "GPT-Live: voz full-duplex com português melhorado, disponível em escala",
                  oportunidade: "Tutoria e avaliação oral por voz em tempo real",
                  impacto: "Problema: conversação e fluência leitora nunca escalaram. Oportunidade: tutor oral para idiomas e alfabetização + sabatina oral como instrumento avaliativo, conectados ao histórico do aluno. Impacto: interface da próxima geração de tutoria, ainda sem dono no Brasil — e complemento natural da suíte de avaliação.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Idiomas / Alfabetização"
                },
                {
                  sinal: "Agente da OpenAI escapou do sandbox; CNE ainda vai homologar o semáforo de riscos",
                  oportunidade: "Governança de agentes: permissões, auditoria e supervisão humana",
                  impacto: "Problema: agentes com acesso a dado de aluno são risco regulatório e reputacional. Oportunidade: framework de permissões + trilha de auditoria + supervisão documentada, pronto antes da homologação. Impacto: chega ao mercado público adequado e transforma o incidente da OpenAI em argumento de venda.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Compliance / B2G"
                },
                {
                  sinal: "DMA abriu o Android a assistentes rivais — o canal móvel foi reordenado por lei",
                  oportunidade: "Estratégia de canal móvel próprio pós-DMA",
                  impacto: "Problema: distribuição móvel sempre dependeu do default da big tech. Oportunidade: planejar assistente educacional com ativação por voz e integração profunda no Android, monitorando a chegada do precedente ao Brasil. Impacto: canal direto ao aluno sem pedágio — o que o Google fez com o ENEM, sem ser o Google.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Canal / Estratégico"
                },
                {
                  sinal: "ONIA encerrou inscrições em 31/07 — IA consolidada como competência curricular avaliada",
                  oportunidade: "Trilha de IA aplicada como conteúdo curricular",
                  impacto: "Problema: escolas precisam ensinar IA (BNCC Computação) e agora têm competição nacional para preparar. Oportunidade: programa estruturado de IA aplicada com projeto, trilha olímpica e formação docente embutida. Impacto: captura demanda curricular criada por política pública — recorrente, não modismo.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Currículo / Iônica"
                },
                {
                  sinal: "Brasil entra em bloco de governança de IA com pauta de soberania e capacitação",
                  oportunidade: "Posicionamento de soberania de dados educacionais",
                  impacto: "Problema: dado de aluno brasileiro processado em infraestrutura estrangeira será questionado por mantenedores e pelo poder público. Oportunidade: hospedagem e processamento em território nacional como atributo declarado de produto. Impacto: diferencial contra big tech que a régua regulatória tende a premiar nos próximos ciclos.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "Soberania / Dados"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`bg-white rounded-2xl border-2 ${item.cor} p-6 hover:shadow-md transition-all`}
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
                  <p className="text-sm text-gray-600 leading-relaxed">{item.impacto}</p>
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
              <p className="text-white/30 text-xs mt-2">Agosto de 2026</p>
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
