import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, d as addAttribute, r as renderComponent } from './astro/server_Cs53zicI.mjs';

const $$AmazonLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 -1 20 20"><path d="M17.251 13.716c.393-.102 1.304-.265 1.691-.18.545.049.873.139.982.27.231.343-.115 1.544-.273 1.935-.139.344-.79 1.45-1.127 1.45-.103 0-.18-.076-.128-.217 1.237-2.88.684-2.803-1.145-2.646-.236.029-1.102.202-1 0 0-.238.761-.55 1-.612M8.633 8.478c0 .469.118.844.354 1.125.676.806 1.91.374 2.428-.584.285-.49.581-1.445.581-2.683-1 0-1.318.048-1.68.144-1.068.3-1.683.967-1.683 1.998m-3.127.36c0-1.686.908-2.868 2.31-3.455 1.236-.522 2.943-.665 4.18-.739 0-1.483-.203-2.664-1.763-2.664-.5 0-1.396.555-1.6 1.481-.049.24-.17.412-.364.447l-2.09-.234c-.254-.06-.352-.198-.292-.438C6.31 1.05 8.145.116 10.233 0c1 0 2.512-.013 3.691 1.062 1.274 1.262 1.072 2.852 1.072 6.967 0 .988.015 1.083.691 1.961.136.202.148.394-.05.54A627.784 627.784 0 0 1 14 11.935c-.146.108-.323.12-.529.036-.895-.76-.68-.714-1.237-1.404-1.129 1.218-2.016 1.549-3.527 1.549-1.796 0-3.2-1.11-3.2-3.276M.324 13.95c3.03 1.74 6.327 2.61 9.891 2.61 2.375 0 4.721-.438 7.036-1.314.351-.139.721-.409.936-.108.103.144.07.276-.1.396C15.844 17.138 12.718 18 9.997 18c-3.852 0-7.278-1.415-9.89-3.744-.234-.191-.048-.472.217-.306" fill="#000" fill-rule="evenodd"></path></svg>`;
}, "D:/Home/MyApps/Astro_Apps/App_books_astro/src/components/AmazonLogo.astro", void 0);

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? "ES";
  const storeCountry = country === SPAIN ? "spain" : "usa";
  const countryName = country === SPAIN ? "Espa\xF1a" : "Estados Unidos";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Comprar libro" target="_blank" rel="noopener noreferrer" class="text-balance inline-flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg border border-yellow-500 transition duration-200 ease-in-out hover:scale-105 justify-center text-center">
Comprar en Amazon ${countryName} ${renderComponent($$result, "AmazonLogo", $$AmazonLogo, {})} </a>`;
}, "D:/Home/MyApps/Astro_Apps/App_books_astro/src/components/BuyButton.astro", void 0);

const $$file = "D:/Home/MyApps/Astro_Apps/App_books_astro/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
