
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { ComLogin, criarClienteMsal, loginAtivo } from "./auth.tsx";
  import "@fontsource-variable/plus-jakarta-sans";
  import "./styles/index.css";

  const root = createRoot(document.getElementById("root")!);

  if (loginAtivo) {
    criarClienteMsal().then(msal => root.render(<ComLogin msal={msal}><App /></ComLogin>));
  } else {
    root.render(<App />);
  }
