const path = require('path')

module.exports = {
  apps: [
    {
      name: 'passport',
      cwd: path.resolve(__dirname, 'server'),
      script: 'index.js',
      log_file: 'run/logs/all.log',
      out_file: 'run/logs/out.log',
      error_file: 'logs/err.log',
      pid_file: 'run/pm2.pid',
      max_memory_restart: '200M',
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}

