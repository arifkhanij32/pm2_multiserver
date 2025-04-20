module.exports = {
  apps: [
    {
      name: "node-backend",
      script: "./node_backend/server.js"
    },
    {
      name: "flask-backend",
      script: "./flask_backend/app.py",
      interpreter: "python"
    }
  ]
}
