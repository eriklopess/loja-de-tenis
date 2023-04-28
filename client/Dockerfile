# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Set the environment variable for running the app
ENV NODE_ENV production
ENV NEXT_PUBLIC_STRAPI_API_TOKEN=538ef91dcfab88a9a822eb66e6ece24784b24448f55905c456290b94d36b4a193c51dc92a83bf2365069aeae39312e40062adac82a9e884a57efe4d601c6cd089b6674f3a450505925f8150caebc22d79d5bfb6b89778778f3621a614e503e919429fc9a0d998e32e75e54b720030938a4882b50436280c7628c336c1e5e66ed

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
