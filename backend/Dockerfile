# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte para o contêiner
COPY . .

# Exponha a porta 3001 para o servidor Express
EXPOSE 3001

# Comando para iniciar o servidor Express
CMD ["node", "server.js"]
