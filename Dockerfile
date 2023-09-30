# Use the official Node.js runtime as a base image
FROM node:16 AS builder

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN yarn install

# Build the Nest.js application
RUN yarn build

# -----

# Use a smaller base image for the application runtime
FROM node:16-slim

WORKDIR /app

# Copy the build artifacts from the previous stage
COPY --from=builder /app .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD ["node", "dist/main"]
