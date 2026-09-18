# JAPA TECH

Fundação do site institucional da JAPA TECH — Assistência Técnica e Eletrônicos. Esta etapa entrega a infraestrutura de React, roteamento, SSR/prerender, SEO e qualidade; a interface comercial será construída posteriormente.

## Stack

React, TypeScript, Vite, React Router, Vitest, ESLint e Vercel.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Copie `.env.example` para `.env.local` quando precisar configurar valores locais. `VITE_PUBLIC_SITE_URL` é opcional em desenvolvimento; quando ausente, canonical e sitemap ficam sem URLs publicáveis. `VITE_WHATSAPP_NUMBER`, `VITE_GA4_ID` e `VITE_CLARITY_ID` são opcionais e permanecem desativados sem valor.

## Qualidade e deploy

```bash
npm run lint
npm run test:run
npm run build
```

`build` executa typecheck, build cliente/SSR, geração de sitemap/robots, prerender, validação SEO e limpeza do bundle SSR. `vercel.json` oferece fallback de rotas para deploy na Vercel; configure `VITE_PUBLIC_SITE_URL` no ambiente de produção.
