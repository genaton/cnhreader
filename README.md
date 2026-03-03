# CNHReader

O projeto **CNHReader** é uma aplicação desenvolvida com **React** e **Vite** que permite a leitura de dados da Carteira Nacional de Habilitação (CNH) do Brasil.

## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/genaton/cnhreader.git
   cd cnhreader
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie a aplicação**:
   ```bash
   npm run dev
   ```

## Scripts disponíveis

Este projeto fornece os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada para produção.
- `npm run serve`: Serve a build otimizada localmente.

## Estrutura do projeto

A estrutura do projeto é organizada da seguinte forma:

```
├── public/        # Arquivos públicos
├── src/           # Código fonte da aplicação
│   ├── components/ # Componentes React
│   ├── styles/     # Estilos CSS
│   ├── utils/      # Utilitários e funções auxiliares
│   └── App.jsx     # Componente principal da aplicação
├── index.html      # HTML de entrada
├── package.json     # Dependências e scripts do projeto
└── vite.config.js   # Configurações do Vite
```

## Funcionalidades

- Leitura de dados da CNH através da câmera.
- Interface de usuário amigável e responsiva.
- Suporte a múltiplas resoluções de tela.

## Detalhes de configuração

Para personalizar a configuração do Vite, edite o arquivo `vite.config.js`. É possível adicionar plugins, definir portas, e mais. Para mais informações, consulte a [documentação do Vite](https://vitejs.dev/config/).

---

Sinta-se à vontade para contribuir com o projeto!