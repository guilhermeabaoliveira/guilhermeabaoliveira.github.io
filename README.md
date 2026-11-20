# Portfólio de Guilherme Alcântara

Site pessoal bilíngue (português e inglês) com meus projetos, minha trajetória e o que estudo.

**Acesse:** https://guilhermeabaoliveira.github.io/

## Páginas

| Página | Conteúdo |
| --- | --- |
| [`index.html`](index.html) | Apresentação, cena 3D da Bússola, projetos, trajetória e contato |
| [`projeto-1.html`](projeto-1.html) | Artefato de Projetos I: Bússola de Fluxo Urbano |
| [`estudos.html`](estudos.html) | Interesses profissionais, links de estudo e o que me inspira |

## Tecnologias

- **HTML** semântico (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- **CSS** com Grid e Flexbox, variáveis para os temas escuro e claro
- **JavaScript** puro para:
  - trocar o idioma (PT/EN) e o tema, lembrando a escolha do visitante;
  - revelar o conteúdo durante a rolagem;
  - animar a cena 3D da Bússola com [Three.js](https://threejs.org/), controlada pela rolagem.

## Estrutura

```
.
├── index.html
├── projeto-1.html
├── estudos.html
└── assets/
    ├── site.css      estilos compartilhados
    ├── site.js       idioma, tema e animações de entrada
    ├── scene.js      cena 3D (Three.js e modelo da maquete)
    └── *.webp        imagens dos projetos
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
