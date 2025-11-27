# 🔐 SecureVault

Secure Web3 platform for managing keys, data, and authentication with comprehensive testing.

## 🌟 Features

- ✅ Advanced authentication system (JWT, Passport, OAuth)
- ✅ Secure data encryption and storage
- ✅ Comprehensive testing suite (Jest, Vitest, Playwright)
- ✅ Form validation (Zod, Yup, React Hook Form)
- ✅ Web3 wallet integration
- ✅ Real-time security monitoring
- ✅ Multi-factor authentication

## 📦 Structure

```
securevault/
├── server/           # Node.js backend with auth & testing
│   ├── src/
│   │   ├── auth/     # Authentication modules
│   │   ├── security/ # Security utilities
│   │   ├── storage/  # Data storage
│   │   └── tests/    # Test suites
│   └── package.json
│
└── webapp/           # React app with forms & validation
    ├── src/
    │   ├── screens/  # Screen components
    │   ├── features/ # Feature modules
    │   ├── common/   # Common components
    │   └── tests/    # Test suites
    └── package.json
```

## 🚀 Quick Start

### Server

```bash
cd server
npm install
npm run db:init
npm test              # Run tests
npm run dev           # http://localhost:4000
```

### Webapp

```bash
cd webapp
npm install
npm test              # Run tests
npm run dev           # http://localhost:5173
```

## 🔧 Technologies

### Server
- Hono, Express middleware
- Passport.js, JWT, bcrypt
- Jest, Supertest
- SQLite, Prisma-ready
- Winston logging

### Webapp
- React 19, TypeScript
- Vite 7
- Wagmi 3, WalletConnect
- Zod, Yup, React Hook Form
- Jest, Vitest, Playwright
- Material-UI, Chakra UI
- Redux, Zustand
- Axios, React Query
- Date-fns, Lodash

## 🤖 Dependabot

Daily updates at 7 AM (Warsaw):
- `/webapp` - Up to 15 PRs
- `/server` - Up to 10 PRs

## 📄 License

MIT

