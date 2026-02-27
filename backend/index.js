const express = require('express');
const { exec } = require('child_process');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Load Nexus Config
const configPath = path.join(__dirname, '../nexus.config.yaml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

// Marketplace API: Deploy Docker Compose
app.post('/api/marketplace/install', (req, res) => {
    const { appId } = req.body;
    const composePath = path.join(__dirname, `../os/services/${appId}/docker-compose.yml`);

    if (!fs.existsSync(composePath)) {
        return res.status(404).json({ error: 'App configuration not found' });
    }

    // Execute Docker Compose Up with Resource Limits defined in YAML
    exec(`docker compose -f ${composePath} up -d`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: 'Deployment failed' });
        }
        res.json({ status: 'success', message: `App ${appId} installed successfully` });
    });
});

// Athan Sync / System Pulse
app.get('/api/system/status', (req, res) => {
    res.json({
        name: config.system.name,
        version: config.system.version,
        uptime: process.uptime(),
        docker_limits: config.docker.memory_limit_default
    });
});

const PORT = config.network.api_port || 3000;
app.listen(PORT, () => {
    console.log(`Nexus Backend running on port ${PORT}`);
});
