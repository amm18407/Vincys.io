# Setup Guide for Vincys Landing Page

## Prerequisites

Before running this project, you need to install Node.js and npm.

### Installing Node.js

#### Option 1: Using Homebrew (Recommended for macOS)
```bash
# Install Homebrew first (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

#### Option 2: Direct Download
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer

#### Option 3: Using Node Version Manager (nvm)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal, then install Node.js
nvm install --lts
nvm use --lts
```

### Verify Installation
```bash
node --version
npm --version
```

## Project Setup

Once Node.js is installed, follow these steps:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

The landing page includes:
- **Header**: Navigation with logo and theme toggle
- **Hero**: Main headline with CTA buttons
- **Features**: 6 feature cards with icons
- **Social Proof**: Testimonials and metrics
- **CTA Section**: Final call-to-action
- **Footer**: Links, newsletter signup, and social media

## Customization

### Colors
The color scheme uses:
- **Primary**: #448B72 (brand green)
- **Background Light**: #FFEEDD (warm cream)
- **Background Dark**: #111514 (deep charcoal)
- **Text Light**: #111514 (dark text on light background)
- **Text Dark**: #FFEEDD (light text on dark background)

### Components
All components are modular and can be customized in the `components/` directory.

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node modules not found**
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

## Support

If you encounter any issues, please check:
1. Node.js version (should be 18+)
2. All dependencies are installed
3. No syntax errors in component files

For additional help, refer to the main README.md file.

