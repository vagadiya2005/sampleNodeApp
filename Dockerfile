# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory inside the container
WORKDIR /nodeapp

# Copy package.json and package-lock.json files to the working directory
COPY . /nodeapp

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 5600

# Define the command to run the app
CMD ["node", "app.js"]
