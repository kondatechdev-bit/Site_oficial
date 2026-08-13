# Konda Tech Ecosystem

Site oficial da **Konda Tech** — startup tecnológica inovadora em Inteligência Artificial (SILVIA), desenvolvimento de jogos (Aetheria Craft), SaaS (Konda Manager) e ecossistema digital.

## Estrutura do Projeto

```
konda-tech-ecosystem/
├── index.html              # Página inicial
├── pages/                  # Páginas internas
│   ├── sobre.html
│   ├── servicos.html
│   ├── projetos.html
│   ├── produtos.html
│   ├── equipe.html
│   ├── blog.html
│   ├── roadmap.html
│   ├── suporte.html
│   ├── contato.html
│   └── apoiar.html         # Apoio / IBANs / Pagamentos
├── css/                    # Estilos (arquitetura modular)
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/                     # Scripts ES modules
├── data/                   # Dados estáticos (projetos, produtos, etc.)
├── images/                 # Logos, previews e ícones de pagamento
├── sitemap.xml
├── robots.txt
├── package.json
└── vite.config.js
```

## Como rodar

**Pré-requisito:** Node.js 18+

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Build para produção

```bash
npm run build
```

Os arquivos otimizados ficam em `dist/`.

## Tecnologias

- HTML5 semântico multi-página
- CSS moderno (variáveis, clamp, grid/flex, dark/light theme)
- JavaScript ES Modules
- Vite (dev server + build multi-page)

## Responsividade

O site é totalmente responsivo com breakpoints em:

- **≤ 1200px** — grids ajustados
- **≤ 1100px** — nav desktop mais compacta
- **≤ 992px** — menu hamburger + drawer mobile
- **≤ 768px** — layouts em coluna única
- **≤ 480px** — ajustes finos de tipografia e espaçamento
- **≤ 360px** — telas muito pequenas
