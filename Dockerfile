# Step 1: Use Node.js to Build React App
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to Serve the React App
FROM nginx:alpine

# Copy build output from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
