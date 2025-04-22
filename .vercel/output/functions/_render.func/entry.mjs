import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_h3fV65MD.mjs';
import { manifest } from './manifest_WVqREm0N.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BNhsYktn.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_D4ncKV7s.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.4_jiti@2.4.2_ligh_4aae6b917e741978c247bd4ec3e71c8e/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aef58d5d-bba1-45f7-b9bf-50e97d2be2e2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
