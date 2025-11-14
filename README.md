🎥 MovieDB
Sistema de catálogo de filmes com gerenciamento de favoritos e visualização de detalhes.

📘 Visão Geral
A aplicação permite:

✅ Listagem de filmes populares por meio da API do TMDB

🎬 Visualização dos detalhes de cada filme: título, nota, sinopse, data de lançamento e gênero

⭐ Adição e remoção de filmes na página de favoritos

📂 Página exclusiva para exibição dos filmes favoritados

🔎 Pesquisa livre de filmes através da barra de busca

🛠️ Tecnologias Utilizadas
Frontend

React

TypeScript

Vite

Styled Components

Axios

React Router

Jest

React Testing Library

API

TMDB (The Movie Database)

📂 Arquitetura do Projeto
Código
src/
├── app/          # Configuração principal da aplicação (providers, rotas globais, inicialização)
├── components/   # Componentes reutilizáveis (MovieCard, Header, etc)
├── context/      # Contexto de favoritos
├── hooks/        # Hooks personalizados (useFavorites, useFetchMovies)
├── pages/        # Páginas principais (Home, MovieDetails, Favorites, Search)
├── services/     # Integração com TMDB API
├── styles/       # Tema e estilos globais
├── tests/        # Testes unitários e de integração
└── App.tsx       # Roteamento principal da aplicação
🔐 Integração com TMDB
Para acessar os dados dos filmes, configure a chave da API:

Crie um arquivo .env na raiz do projeto:

env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_IMG_BASE=https://image.tmdb.org/t/p/w500
A chave pode ser obtida gratuitamente em TMDB API.

📡 Endpoints Utilizados
Método	Rota	Descrição
GET	/movie/popular	Lista filmes populares
GET	/movie/:id	Detalhes de um filme específico
🧑‍💻 Como Executar
📦 Instalação
bash
git clone https://github.com/seu-usuario/moviedb.git
cd moviedb
npm install
▶️ Desenvolvimento
bash
npm run dev
Acesse em: http://localhost:5173

🏗️ Build de Produção
bash
npm run build
npm run preview
🧪 Testes
bash
npm test
Os testes cobrem:

Renderização de páginas e componentes

Interações com favoritos

Estados de loading e erro

Mock de serviços e componentes

🤝 Como Contribuir
Faça um fork do repositório: moviedb

Clone o repositório forkado:

bash
git clone https://github.com/seu-usuario/moviedb.git
Crie uma branch:

bash
git checkout -b minha-contribuicao
Realize os ajustes e commits:

bash
git commit -m "Descrição clara da melhoria"
Envie para seu repositório remoto:

bash
git push origin minha-contribuicao
Abra um Pull Request explicando as mudanças propostas.

🌐 Hospedagem
Este projeto foi deployado e está hospedado utilizando GitHub Pages. 👉 Acesse em: https://Nelson-Lucas.github.io/moviedb

📄 Licença
Este projeto está licenciado sob a MIT License. Você pode:

Usar livremente o código

Modificar e adaptar conforme suas necessidades

Compartilhar com outras pessoas

Utilizar comercialmente

⚠️ É necessário manter o aviso de copyright original.

📌 Observações
Projeto construído entre 07/11 e 13/11 por Nelson Lucas

O README foi feito com auxílio de IA, mas o código é autoral

É necessário configurar corretamente o arquivo .env com sua chave da API do TMDB

Os favoritos são armazenados localmente no navegador (localStorage)

A aplicação utiliza dados públicos da TMDB API, que podem variar conforme atualizações

Os testes cobrem cenários principais de renderização, interação e estados de erro/carregamento
