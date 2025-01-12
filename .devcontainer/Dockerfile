FROM node:14

# Set the working directory
WORKDIR /workspace

# Copy package.json and package-lock.json for both frontend and backend
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

# Install dependencies for frontend and backend
RUN cd frontend && npm install && \
    cd ../backend && npm install

# Expose ports for frontend and backend
EXPOSE 3000 5000

# Command to run when starting the container
CMD ["bash"]