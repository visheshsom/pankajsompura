# Step 1: Build React App with Vite
FROM node:18-alpine AS build
WORKDIR /usr/src/app

# Copy dependencies first
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the React app (Vite outputs to "dist/")
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Ensure Nginx serves the React app correctly
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
