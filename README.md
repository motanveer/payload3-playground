# Wizards PayloadCMS Sandbox

A sandbox environment for testing PayloadCMS 3.0 features, built with Next.js 14+ and TypeScript. Uses a Harry Potter theme to demonstrate various PayloadCMS capabilities.

## Features Implemented

- **Collections**
  - Wizards (with relationships to houses and wands)
  - Houses (with member management)
  - Spells (categorized by type and difficulty)
  - Wands (with wood types and cores)
  - Media handling
  - User authentication

- **UI/UX**
  - Custom admin components
  - Live preview for Houses
  - Shadcn/UI components
  - Responsive card layouts
  - Avatar components

- **Technical Features**
  - PostgreSQL integration
  - GraphQL API
  - Custom slug formatting
  - File uploads
  - Relationship fields
  - Join fields for complex data relationships

## Setup

1. Configure environment variables:
```bash
DATABASE_URI=your_postgres_connection_string
PAYLOAD_SECRET=your_secret_key
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Access the site at [http://localhost:3000](http://localhost:3000)  
Admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)