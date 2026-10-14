import { useState, type ReactNode } from 'react';
import {
  createStandardPublicClientApplication,
  InteractionStatus,
  type IPublicClientApplication,
} from '@azure/msal-browser';
import { MsalProvider, useMsal } from '@azure/msal-react';
import radarLogoClaro from './imports/radar-logo-claro.png';
import hubLogoClaro from './imports/hub-logo-claro.png';

// Login com Entra ID como paliativo: o site continua estático e público por
// URL direta (o conteúdo vai no JavaScript). Serve para tirar o acesso casual.
// Client ID e tenant ID não são segredos; nenhum segredo de cliente entra aqui.
const CLIENT_ID = 'cfdae966-39e2-4e45-8c56-34300c4f59c6';
const TENANT_ID = 'f79b45bf-444f-4075-8bfa-542448657ca4';

// Liga só no build de produção. `VITE_SEM_LOGIN=1` desliga para testes locais.
export const loginAtivo = import.meta.env.PROD && import.meta.env.VITE_SEM_LOGIN !== '1';

// O redirect precisa bater exatamente com o cadastrado no Entra (SPA):
// https://genai-ftd.github.io/radar-ia/
const enderecoDoSite = () => window.location.origin + window.location.pathname.replace(/[^/]*$/, '');

export async function criarClienteMsal(): Promise<IPublicClientApplication> {
  const msal = await createStandardPublicClientApplication({
    auth: {
      clientId: CLIENT_ID,
      authority: `https://login.microsoftonline.com/${TENANT_ID}`,
      redirectUri: enderecoDoSite(),
      postLogoutRedirectUri: enderecoDoSite(),
    },
    cache: { cacheLocation: 'localStorage' },
  });
  const retorno = await msal.handleRedirectPromise().catch(() => null);
  const conta = retorno?.account ?? msal.getActiveAccount() ?? msal.getAllAccounts()[0] ?? null;
  if (conta) msal.setActiveAccount(conta);
  return msal;
}

function LogoMicrosoft() {
  return (
    <svg aria-hidden="true" viewBox="0 0 21 21" className="size-[18px] shrink-0">
      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
      <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

function TelaDeEntrada() {
  const { instance, inProgress } = useMsal();
  const [erro, setErro] = useState(false);
  const ocupado = inProgress !== InteractionStatus.None;

  const entrar = () => {
    setErro(false);
    instance.loginRedirect({ scopes: ['openid', 'profile'], prompt: 'select_account' }).catch(() => setErro(true));
  };

  return (
    <main className="min-h-screen bg-navy-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm text-center">
        <img src={radarLogoClaro} alt="Radar" className="h-10 w-auto mx-auto mb-8" />
        <h1 className="text-2xl font-bold tracking-tight mb-3">Inteligência Estratégica de IA na Educação</h1>
        <p className="text-sm text-white/75 leading-relaxed mb-8">
          O Radar é de uso interno. Entre com a sua conta corporativa Microsoft para continuar.
        </p>
        <button
          type="button"
          onClick={entrar}
          disabled={ocupado}
          className="w-full inline-flex items-center justify-center gap-3 h-12 px-5 rounded-xl bg-white text-navy-900 font-semibold text-sm transition-[background-color,scale] duration-150 hover:bg-azul-50 active:scale-96 disabled:opacity-70 disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <LogoMicrosoft />
          {ocupado ? 'Abrindo o login…' : 'Entrar com a conta Microsoft'}
        </button>
        {erro && (
          <p role="alert" className="mt-4 text-sm text-amarelo-400">
            Não foi possível abrir o login. Tente de novo ou fale com o Hub de IA, Produto e Experiência.
          </p>
        )}
      </div>
      <img src={hubLogoClaro} alt="Hub de IA, Produto e Experiência" className="h-9 w-auto mt-16 opacity-80" />
    </main>
  );
}

function Portao({ children }: { children: ReactNode }) {
  const { instance, inProgress } = useMsal();
  const conta = instance.getActiveAccount() ?? instance.getAllAccounts()[0];
  if (conta && conta.tenantId === TENANT_ID) return <>{children}</>;
  if (inProgress === InteractionStatus.Startup || inProgress === InteractionStatus.HandleRedirect) {
    return <div className="min-h-screen bg-navy-900" aria-busy="true" />;
  }
  return <TelaDeEntrada />;
}

export function ComLogin({ msal, children }: { msal: IPublicClientApplication; children: ReactNode }) {
  return (
    <MsalProvider instance={msal}>
      <Portao>{children}</Portao>
    </MsalProvider>
  );
}
