# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código fonte
COPY . .

# Exponha a porta em que o aplicativo será executado (opcional)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]
