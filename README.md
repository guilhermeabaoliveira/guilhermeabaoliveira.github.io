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

As páginas passam no [Markup Validation Service](https://validator.w3.org/nu/) do W3C sem erros. Para conferir, cole o endereço de cada página no validador:

- https://guilhermeabaoliveira.github.io/
- https://guilhermeabaoliveira.github.io/projeto-1.html
- https://guilhermeabaoliveira.github.io/estudos.html
- e as demais páginas listadas acima

## Autor

Guilherme Alcântara Batista Alencar de Oliveira, estudante de Ciência da Computação na CESAR School.
[LinkedIn](https://www.linkedin.com/in/guilhermealcantarabatistaalencardeoliveira) · [GitHub](https://github.com/guilhermeabaoliveira)
