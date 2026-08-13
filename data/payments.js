/**
 * Konda Tech Financial Support & IBAN Channels Data
 */

export const paymentsData = [
  {
    id: "multicaixa-express",
    category: "express",
    title: "Multicaixa Express & Directo",
    type: "Express / Angola",
    logo: "../images/payments/multicaixa-express.svg",
    badge: "Mais Rápido em Angola",
    badgeType: "ready",
    accountName: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA",
    instructions: "Pague ou transfira via aplicativo Multicaixa Express usando o número de telefone ou IBAN associado abaixo.",
    details: [
      { label: "Número Express / Telefone", value: "+244 923 456 789", copyValue: "923456789" },
      { label: "IBAN Directo Express", value: "AO06 0040 0000 1234 5678 1014 3", copyValue: "AO06004000001234567810143" },
      { label: "Entidade (Se Pagamento por Referência)", value: "00142", copyValue: "00142" },
      { label: "Titular", value: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA", copyValue: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA" }
    ],
    qrPlaceholder: "QR Code Multicaixa Express disponível ao clicar"
  },
  {
    id: "bai-empresa",
    category: "bancos",
    title: "BAI (Banco Angolano de Investimentos)",
    type: "IBAN Bancário Empresa",
    logo: "../images/payments/bai.svg",
    badge: "Conta Empresa Oficial",
    badgeType: "ready",
    accountName: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA",
    instructions: "Transferências bancárias diretas via BAI Directo, ATM ou balcão.",
    details: [
      { label: "IBAN BAI", value: "AO06 0040 0000 9876 5432 1018 7", copyValue: "AO06004000009876543210187" },
      { label: "Número de Conta", value: "987654321 10 001", copyValue: "98765432110001" },
      { label: "NIF Empresa", value: "5001234567", copyValue: "5001234567" },
      { label: "Titular", value: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA", copyValue: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA" }
    ]
  },
  {
    id: "bfa-empresa",
    category: "bancos",
    title: "BFA (Banco de Fomento Angola)",
    type: "IBAN Bancário Empresa",
    logo: "../images/payments/bfa.svg",
    badge: "Conta Empresa Oficial",
    badgeType: "ready",
    accountName: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA",
    instructions: "Transferências interbancárias e intrabancárias BFA Net.",
    details: [
      { label: "IBAN BFA", value: "AO06 0006 0000 8765 4321 1012 4", copyValue: "AO06000600008765432110124" },
      { label: "Número de Conta", value: "876543210 30 001", copyValue: "87654321030001" },
      { label: "Titular", value: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA", copyValue: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA" }
    ]
  },
  {
    id: "bic-empresa",
    category: "bancos",
    title: "Banco BIC",
    type: "IBAN Bancário Empresa",
    logo: "../images/payments/bic.svg",
    badge: "Conta Empresa Oficial",
    badgeType: "ready",
    accountName: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA",
    instructions: "Transferência via BIC Net ou depósitos em agência.",
    details: [
      { label: "IBAN BIC", value: "AO06 0055 0000 7654 3210 1015 9", copyValue: "AO06005500007654321010159" },
      { label: "Número de Conta", value: "765432109 10 001", copyValue: "76543210910001" },
      { label: "Titular", value: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA", copyValue: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA" }
    ]
  },
  {
    id: "atlantico-empresa",
    category: "bancos",
    title: "Banco Millennium Atlântico",
    type: "IBAN Bancário Empresa",
    logo: "../images/payments/atlantico.svg",
    badge: "Conta Empresa Oficial",
    badgeType: "ready",
    accountName: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA",
    instructions: "Transferências diretas via aplicativo Atlântico ou IBAN.",
    details: [
      { label: "IBAN Atlântico", value: "AO06 0060 0000 6543 2109 1013 1", copyValue: "AO06006000006543210910131" },
      { label: "Número de Conta", value: "654321098 10 001", copyValue: "65432109810001" },
      { label: "Titular", value: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA", copyValue: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA" }
    ]
  },
  {
    id: "sol-empresa",
    category: "bancos",
    title: "Banco SOL",
    type: "IBAN Bancário Empresa",
    logo: "../images/payments/sol.svg",
    badge: "Conta Empresa Oficial",
    badgeType: "ready",
    accountName: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA",
    instructions: "Transferência institucional via Banco SOL.",
    details: [
      { label: "IBAN Banco SOL", value: "AO06 0044 0000 5432 1098 1011 6", copyValue: "AO06004400005432109810116" },
      { label: "Número de Conta", value: "543210987 10 001", copyValue: "54321098710001" },
      { label: "Titular", value: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA", copyValue: "KONDA TECH - SOLUÇÕES TECNOLÓGICAS, LDA" }
    ]
  },
  {
    id: "unitel-money",
    category: "express",
    title: "Unitel Money",
    type: "Carteira Móvel Angola",
    logo: "../images/payments/unitel-money.svg",
    badge: "Carteira Móvel Instantânea",
    badgeType: "ready",
    accountName: "KONDA TECH",
    instructions: "Envie fundos diretamente via código USSD ou App Unitel Money para o nosso número de atendimento.",
    details: [
      { label: "Número Unitel Money", value: "+244 923 456 789", copyValue: "923456789" },
      { label: "Nome da Conta", value: "KONDA TECH", copyValue: "KONDA TECH" }
    ]
  },
  {
    id: "afrimoney",
    category: "express",
    title: "Afrimoney",
    type: "Carteira Móvel Angola",
    logo: "../images/payments/afrimoney.svg",
    badge: "Carteira Móvel Africell",
    badgeType: "ready",
    accountName: "KONDA TECH",
    instructions: "Transferência instantânea via menu Afrimoney ou aplicação móvel.",
    details: [
      { label: "Número Afrimoney", value: "+244 977 123 456", copyValue: "977123456" },
      { label: "Nome da Conta", value: "KONDA TECH", copyValue: "KONDA TECH" }
    ]
  },
  {
    id: "aki-pagamentos",
    category: "express",
    title: "AKI Pagamentos",
    type: "Rede Agente AKI",
    logo: "../images/payments/aki.svg",
    badge: "Postos & Agentes AKI",
    badgeType: "ready",
    accountName: "KONDA TECH",
    instructions: "Depósitos e pagamentos em qualquer quiosque ou agente AKI usando o ID ou Telefone.",
    details: [
      { label: "ID AKI Konda", value: "AKI-KONDA-2026", copyValue: "AKI-KONDA-2026" },
      { label: "Telefone do Agente", value: "+244 923 456 789", copyValue: "923456789" }
    ]
  },
  {
    id: "paypal",
    category: "digital",
    title: "PayPal (Global)",
    type: "Carteira Digital Internacional",
    logo: "../images/payments/paypal.svg",
    badge: "Internacional (USD/EUR)",
    badgeType: "ready",
    accountName: "Konda Tech Studio",
    instructions: "Apoie os nossos projetos com cartão de crédito internacional ou saldo PayPal.",
    details: [
      { label: "E-mail PayPal", value: "pagamentos@kondatech.dev", copyValue: "pagamentos@kondatech.dev" },
      { label: "Link Directo PayPal.me", value: "paypal.me/kondatech", copyValue: "https://paypal.me/kondatech" }
    ]
  },
  {
    id: "binance-crypto",
    category: "digital",
    title: "Binance & Criptomoedas",
    type: "Binance Pay / Crypto",
    logo: "../images/payments/binance.svg",
    badge: "USDT / BTC / Binance Pay",
    badgeType: "ready",
    accountName: "KondaTechOfficial",
    instructions: "Transfira sem taxas via Binance Pay ID ou envie diretamente para as nossas carteiras cripto.",
    details: [
      { label: "Binance Pay ID", value: "284719302", copyValue: "284719302" },
      { label: "USDT Address (TRC20)", value: "TX8kL9z2YwP1mQ7rE5nU3vX4bB8nJ0kL2", copyValue: "TX8kL9z2YwP1mQ7rE5nU3vX4bB8nJ0kL2" },
      { label: "Bitcoin (BTC Address)", value: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", copyValue: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" }
    ]
  },
  {
    id: "airtm",
    category: "digital",
    title: "Airtm",
    type: "Dólar Digital AirUSD",
    logo: "../images/payments/airtm.svg",
    badge: "Dólares Digitais",
    badgeType: "ready",
    accountName: "Konda Tech",
    instructions: "Envio rápido de dólares AirUSD diretamente na plataforma Airtm.",
    details: [
      { label: "E-mail Airtm", value: "financeiro@kondatech.dev", copyValue: "financeiro@kondatech.dev" },
      { label: "Username Airtm", value: "@kondatech", copyValue: "@kondatech" }
    ]
  }
];
