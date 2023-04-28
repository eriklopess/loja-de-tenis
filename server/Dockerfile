# Usa a imagem do node como base
FROM node:14-alpine

# Define o diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copia os arquivos do projeto para a imagem
COPY package*.json ./
COPY ./public ./

# Instala as dependências
RUN npm install

# Copia os arquivos da aplicação para a imagem
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta 1337 para acesso externo
EXPOSE 1337

# Define o comando de execução
CMD ["npm", "run", "start"]
