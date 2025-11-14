🎥 MovieDB
Sistema de catálogo de filmes com gerenciamento de favoritos e visualização de detalhes.

📘 Visão Geral do Projeto
A aplicação permite:

Listagem de filmes populares por meio da API do TMDB

Visualização dos detalhes de cada filme: título, nota, sinopse, data de lançamento e gênero

Adição e remoção de filmes na página de favoritos

Página exclusiva para exibição dos filmes favoritados

Pesquisa livre de filmes através da barra de busca, permitindo verificar se seu filme preferido está disponível no catálogo

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

📂 Arquitetura e Documentação
A estrutura do projeto está organizada da seguinte forma:

Código
src/
├── app/                # Configuração principal da aplicação (providers, rotas globais, inicialização)
├── components/         # Componentes reutilizáveis (MovieCard, Header, etc)
├── context/            # Contexto de favoritos
├── hooks/              # Hooks personalizados (ex.: useFavorites, useFetchMovies)
├── pages/              # Páginas principais (Home, MovieDetails, Favorites)
├── services/           # Integração com TMDB API
├── styles/             # Tema e estilos globais
├── tests/              # Testes unitários e de integração
└── App.tsx             # Roteamento principal da aplicação

O projeto inclui:

✅ Listagem paginada de filmes populares ⭐ Gerenciamento de favoritos com contexto e localStorage 🎬 Visualização detalhada de cada filme 🔁 Navegação fluida entre páginas 🧪 Testes cobrindo renderização, interação e estados

🔐 Integração com TMDB
Para acessar os dados dos filmes, é necessário configurar a chave da API do TMDB:

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_IMG_BASE=https://image.tmdb.org/t/p/w500
A chave pode ser obtida gratuitamente em: TMDB API

📡 Endpoints Utilizados
Método	Rota	Descrição
GET	/movie/popular	Lista filmes populares
GET	/movie/:id	Detalhes de um filme específico

🧑‍💻 Como executar o projeto

📦 Instalação
bash
# Clone o repositório
git clone https://github.com/seu-usuario/moviedb.git

# Entre na pasta do projeto
cd moviedb

# Instale as dependências
npm install

▶️ Execução em Desenvolvimento
bash
# Inicie o servidor de desenvolvimento
npm run dev
A aplicação ficará disponível em: 👉 http://localhost:5173

🏗️ Build de Produção
bash
# Gera os arquivos otimizados para produção
npm run build

# Visualiza o build localmente
npm run preview

🧪 Testes
bash
# Executa os testes unitários e de integração
npm test

Os testes cobrem:

Renderização de páginas e componentes

Interações com favoritos

Estados de loading e erro

Mock de serviços e componentes

🤝 Como Contribuir
Se você deseja sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, siga os passos abaixo:

Faça um fork do repositório: https://github.com/seu-usuario/moviedb

Clone o repositório forkado:

bash
git clone https://github.com/seu-usuario/moviedb.git
Crie uma branch para sua contribuição:

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
Este projeto foi deployado e está hospedado utilizando o GitHub Pages. 👉 Acesse em: https://Nelson-Lucas.github.io/moviedb

📄 Licença
Este projeto está licenciado sob a MIT License.

Você pode:

Usar livremente o código

Modificar e adaptar conforme suas necessidades

Compartilhar com outras pessoas

Utilizar comercialmente

Aviso: É necessário manter o aviso de copyright original ao redistribuir.

📌 Observações
O Projeto foi construído durante uma semana(07/11 ao dia 13/11) por Nelson Lucas.
Foi feito o uso de IA para fazer o README, porém não foi feito o uso para o código do projeto, apenas para dúvidas.
É necessário configurar corretamente o arquivo .env com sua chave da API do TMDB para que a aplicação funcione.
Os favoritos são armazenados localmente no navegador (localStorage), portanto não há persistência em servidor.
A aplicação utiliza dados públicos da TMDB API, que podem variar conforme atualizações da plataforma.
Os testes cobrem cenários principais de renderização, interação e estados de erro/carregamento, mas não substituem testes de integração completos com a API real.
