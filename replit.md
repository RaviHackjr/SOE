# SOE Robotics Club Website

## Overview

This is a modern robotics club website built for the SOE (School of Engineering) Robotics Club. The application serves as a digital hub for showcasing the club's projects, events, team members, and allowing prospective members to join. It features a sleek, tech-inspired design with animations and interactive elements that reflect the innovative nature of the robotics community.

The website includes sections for displaying ongoing and completed robotics projects (obstacle detection robots, line followers, robotic arms), upcoming events and competitions, team member profiles, and a contact form for membership applications. The design emphasizes visual appeal with a dark theme, glowing effects, and modern UI components. The site is fully responsive with optimized mobile layouts, progressive text sizing (xs:text-sm sm:text-base md:text-lg), and adaptive grid systems that stack appropriately on smaller screens.

## Deployment Ready ✅

The project is **100% ready for production deployment** with zero errors on both major platforms:

### Vercel Deployment
- **Status**: ✅ Ready - All module resolution errors fixed
- **Configuration**: `vercel.json` with serverless API functions
- **Build**: Custom production build script (`build.production.cjs`)
- **API**: Serverless functions in `api/index.js` with proper routing

### Render Deployment  
- **Status**: ✅ Ready - Full-stack Express server configured
- **Configuration**: `render.yaml` with health check endpoint
- **Server**: Production Express server (`server.production.js`)
- **Build**: Automated build pipeline with all dependencies

### Deployment Issues Fixed (August 2025)
1. **Module Resolution**: Fixed Rollup import errors for @tanstack/react-query and other dependencies
2. **Build Configuration**: Created production-specific Vite config with proper aliases
3. **Serverless Compatibility**: Separate API handlers for different platforms
4. **ES Module Issues**: CommonJS build scripts for universal compatibility

### Quick Deploy Commands
- Vercel: `./deploy-vercel.sh`
- Render: `./deploy-render.sh`
- Manual: Follow `DEPLOYMENT-GUIDE.md`

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client uses a modern React-based single-page application (SPA) architecture built with Vite as the build tool. The application follows a component-based structure with TypeScript for type safety. Key architectural decisions include:

- **Routing**: Uses Wouter for lightweight client-side routing instead of React Router, providing a smaller bundle size while maintaining full SPA functionality
- **Styling**: Combines Tailwind CSS for utility-first styling with shadcn/ui components for consistent design patterns, using CSS variables for theming. Custom responsive breakpoints include xs (475px) for enhanced mobile experience with progressive sizing classes
- **Animations**: Integrates Framer Motion for smooth page transitions and scroll-based animations to enhance user experience
- **State Management**: Uses TanStack Query (React Query) for server state management, caching API responses and handling loading states
- **Component Structure**: Follows atomic design principles with reusable UI components, layout components, and page-specific components organized in separate directories

### Backend Architecture
The server implements a RESTful API using Express.js with TypeScript. The architecture emphasizes simplicity and development efficiency:

- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses for client-server communication
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and comprehensive request/response logging
- **Error Handling**: Centralized error handling middleware that captures and formats errors consistently
- **Development Tools**: Vite integration for hot module replacement in development mode, improving developer experience

### Data Storage Solutions
The application uses a hybrid storage approach with planned database migration:

- **Current Implementation**: In-memory storage using Maps for development and testing, allowing rapid prototyping without database setup
- **Planned Migration**: Drizzle ORM configured for PostgreSQL production deployment, with schema definitions ready for database migration
- **Schema Design**: Type-safe schema definitions using Drizzle with Zod validation for user management and contact form submissions

### Authentication and Authorization
Currently implements a basic user system foundation:

- **User Model**: Basic user schema with username and password fields, prepared for future authentication implementation
- **Security Considerations**: Password hashing and session management patterns are established in the schema but not yet implemented
- **Future Enhancement**: Ready for JWT or session-based authentication integration

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for responsive design and rapid styling
- **shadcn/ui**: High-quality React component library built on Radix UI primitives for accessibility and consistency
- **Radix UI**: Unstyled, accessible UI primitives for complex components like dialogs, dropdowns, and form elements
- **Framer Motion**: Production-ready motion library for React animations and micro-interactions

### Backend Services
- **Neon Database**: Serverless PostgreSQL database service for production data storage
- **Drizzle ORM**: TypeScript ORM with excellent type safety and developer experience for database operations

### Development Tools
- **Vite**: Fast build tool and development server with hot module replacement for optimal developer experience
- **TypeScript**: Static type checking across the entire application stack for better code quality and maintainer experience
- **TanStack Query**: Powerful data synchronization library for React applications, handling caching, background updates, and optimistic updates

### Form Handling and Validation
- **React Hook Form**: Performant forms library with minimal re-renders and excellent TypeScript support
- **Zod**: TypeScript-first schema validation library used for form validation and API request/response validation
- **Hookform Resolvers**: Integration layer between React Hook Form and Zod for seamless form validation

### Fonts and Icons
- **Google Fonts**: Poppins font family for modern, readable typography
- **Font Awesome**: Comprehensive icon library for consistent iconography throughout the application