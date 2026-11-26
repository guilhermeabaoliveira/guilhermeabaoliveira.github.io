# Portfólio de Guilherme Alcântara Batista Alencar de Oliveira

Site pessoal bilíngue (português e inglês) com meus projetos, minha trajetória e o que estudo.

**Acesse:** https://guilhermeabaoliveira.github.io/

## Páginas

| Página | Conteúdo |
| --- | --- |
| [`index.html`](index.html) | Início: apresentação, trajetória, o que eu jogo, assisto e escuto, e contato |
| [`projetos.html`](projetos.html) | Todos os projetos, com busca por palavra-chave e filtros |
| [`projeto-1.html`](projeto-1.html) | Artefato de Projetos I: Bússola de Fluxo Urbano, com cena 3D |
| [`sentinelalog.html`](sentinelalog.html) | SentinelaLog |
| [`bug-tracker.html`](bug-tracker.html) | Bug Tracker Pro |
| [`jogos.html`](jogos.html) | Meus jogos: o que cada gênero significou pra mim |
| [`artigos.html`](artigos.html) | Meus artigos |
| [`estudos.html`](estudos.html) | Interesses profissionais e links de estudo |
| [`inspiracao.html`](inspiracao.html) | O que me move |
| [`thaynna.html`](thaynna.html) | Para a Thaynná |

## Tecnologias

- **HTML** semântico (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- **CSS** com Grid e Flexbox, variáveis para os temas escuro e claro
- **JavaScript** puro para:
  - trocar o idioma (PT/EN) e o tema, lembrando a escolha do visitante;
  - buscar e filtrar projetos por palavra-chave;
  - revelar o conteúdo e trocar as telas dos projetos durante a rolagem;
  - desenhar as brasas do fundo num `canvas`;
  - animar a cena 3D da Bússola com [Three.js](https://threejs.org/), controlada pela rolagem.

## Estrutura

```
.
├── index.html, projetos.html, jogos.html, ...   páginas
└── assets/
    ├── site.css      estilos compartilhados
    ├── site.js       idioma, tema, busca, rolagem e brasas
    ├── scene.js      cena 3D (Three.js e modelo da maquete)
    ├── fonts/        Cinzel e EB Garamond (licença OFL)
    └── *.webp        imagens
```

## Como ver localmente

Baixe o repositório e abra um servidor simples na pasta:

```sh
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Acessibilidade

- Respeita a preferência do sistema por menos movimento: a cena 3D vira imagem estática.
- Textos alternativos em português e inglês em todas as imagens.
- Navegação por teclado com foco visível.

## Validação

Cada linguagem foi validada separadamente, na ferramenta própria dela.

### HTML

Todas as páginas passam no [Nu HTML Checker](https://validator.w3.org/nu/) do W3C sem erros nem avisos:

| Página | Conferir |
| --- | --- |
| Início | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2F) |
| Projetos | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fprojetos.html) |
| Bússola de Fluxo Urbano | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fprojeto-1.html) |
| SentinelaLog | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fsentinelalog.html) |
| Bug Tracker Pro | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fbug-tracker.html) |
| Meus jogos | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fjogos.html) |
| Meus artigos | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fartigos.html) |
| Artigo: O mundo virou open source | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fartigo-open-source.html) |
| Estudos | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Festudos.html) |
| O que me move | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Finspiracao.html) |
| Thaynná | [validar](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fthaynna.html) |

### CSS

`assets/site.css` passa no [CSS Validation Service](https://jigsaw.w3.org/css-validator/) do W3C (perfil CSS nível 3 + SVG) **sem erros**: [validar](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fguilhermeabaoliveira.github.io%2Fassets%2Fsite.css&profile=css3svg&warning=1).

Os alertas que aparecem não são erros: o validador não confere variáveis CSS (`var(--...)`) e não reconhece prefixos de navegador como `-webkit-backdrop-filter`, que estão ali de propósito para o Safari.

### JavaScript

O W3C não tem validador de JavaScript, então o código foi conferido com o [ESLint](https://eslint.org/) 9, usando as regras recomendadas (`js.configs.recommended`) e as variáveis de navegador:

```sh
npx eslint assets/site.js
```

Resultado: **0 erros e 0 avisos**. A sintaxe também foi conferida com `node --check assets/site.js`.

`assets/scene.js` não entra nessa checagem porque é um pacote gerado: junta a biblioteca [Three.js](https://threejs.org/) com o código da cena 3D, montado com o esbuild.

### React

Este site não usa React. O React aparece no projeto [Bug Tracker Pro](https://github.com/guilhermeabaoliveira/bug-tracker-pro), que tem repositório próprio.

## Autor

Guilherme Alcântara Batista Alencar de Oliveira, estudante de Ciência da Computação na CESAR School.
[LinkedIn](https://www.linkedin.com/in/guilhermealcantarabatistaalencardeoliveira) · [GitHub](https://github.com/guilhermeabaoliveira)
