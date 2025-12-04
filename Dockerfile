# Use the official Playwright image with browsers pre-installed
FROM mcr.microsoft.com/playwright:v1.57.0-noble

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json  and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project into the container
COPY . .

# Default command to run Playwright tests
CMD ["sh", "-c", "npx playwright test --reporter=line && npm run allure:generate"]

