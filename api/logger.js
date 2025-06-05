const fs = require('fs');
const path = require('path');

// Define log file path
const logFile = path.join(__dirname, '../../logs/api.log');

// Ensure logs directory exists
const logDir = path.dirname(logFile);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Logging middleware
function logRequest(req, res, next) {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url} - IP: ${req.ip}\n`;
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
  next();
}

module.exports = {
  logRequest
};