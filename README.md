# SOE Robotics Club Website

A modern, interactive robotics club website showcasing advanced web technologies and engaging user experiences. Built with React, TypeScript, and Express.js.

![Robotics Club Website](./preview.png)

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Express.js, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Animations**: Smooth page transitions with Framer Motion
- **Custom Components**: Built with shadcn/ui and Radix UI primitives
- **Dark Theme**: Sleek cyber-inspired design with glowing effects
- **Performance Optimized**: Fast loading with code splitting and caching
- **Type Safe**: Full TypeScript coverage across frontend and backend

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Production-ready motion library
- **Wouter** - Lightweight routing solution
- **TanStack Query** - Data fetching and caching

### Backend
- **Express.js** - Fast, minimal web framework
- **TypeScript** - Type-safe server-side development
- **Drizzle ORM** - TypeScript ORM with excellent type safety
- **Zod** - Runtime type validation

### Deployment
- **Vercel** - Serverless deployment platform
- **Render** - Full-stack cloud platform
- **Docker** - Containerization support

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd robotics-club-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to Render

1. **Connect your repository** to Render dashboard
2. **Configure build settings**:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Node.js

### Deploy with Docker

1. **Build the image**
   ```bash
   docker build -t robotics-club-website .
   ```

2. **Run the container**
   ```bash
   docker run -p 5000:5000 robotics-club-website
   ```

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── main.tsx       # Application entry point
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite development integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database and validation schemas
├── vercel.json          # Vercel deployment configuration
├── render.yaml          # Render deployment configuration
├── Dockerfile           # Docker containerization
└── package.json         # Project dependencies and scripts
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema

## 🎨 Features Overview

### Homepage
- Hero section with animated elements
- Project showcase with modern cards
- Interactive buttons and hover effects
- Responsive design for all devices

### Projects Section
- Display of ongoing and completed robotics projects
- Detailed project cards with descriptions
- Categorized project types (obstacle detection, line followers, robotic arms)

### Events Section
- Upcoming robotics competitions and workshops
- Event calendar integration
- Registration and participation details

### Team Section
- Team member profiles with roles
- Social media links and contact information
- Leadership hierarchy display

### Contact Section
- Membership application form
- Contact information and location
- Form validation with real-time feedback

## 🔧 Configuration

### Environment Variables

```env
NODE_ENV=production          # Application environment
PORT=5000                   # Server port
DATABASE_URL=...            # PostgreSQL connection string (optional)
SESSION_SECRET=...          # Session encryption key
```

### Database Setup (Optional)

The application uses in-memory storage by default. To use PostgreSQL:

1. Set up a PostgreSQL database
2. Add `DATABASE_URL` to your environment variables
3. Run migrations: `npm run db:push`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Radix UI** for accessible UI primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vite** for the fast build tool

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for the SOE Robotics Club community**