import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createServer } from 'node:http';

const PORT = process.env.PORT || 4000;
const app = new Hono();

app.use('*', cors({ origin: '*' }));

app.get('/health', c => c.json({ 
  status: 'ok', 
  service: 'securevault',
  timestamp: Date.now() 
}));

app.get('/api/auth/status', c => c.json({ authenticated: false }));

const server = createServer(app.fetch);
server.listen(PORT, () => {
  console.log(`🔐 SecureVault Server on http://localhost:${PORT}`);
});

