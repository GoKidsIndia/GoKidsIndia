# Go Kids — Developer README

**India's Future Readiness Platform for Kids**
Built with Next.js 14 · Tailwind CSS · MongoDB Atlas · NextAuth.js v5

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Seeding Dummy Data](#seeding-dummy-data)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Branch & Deployment Guide](#branch--deployment-guide)

---

## Prerequisites

Make sure you have the following installed before you begin:

| Tool | Version | Download |
|---|---|---|
| Node.js | 18.17 or higher | [nodejs.org](https://nodejs.org) |
| npm | 9+ (comes with Node) | — |
| Git | any recent version | [git-scm.com](https://git-scm.com) |

You will also need accounts on:
- **MongoDB Atlas** — [cloud.mongodb.com](https://cloud.mongodb.com) (free M0 cluster works)
- **Cloudinary** — [cloudinary.com](https://cloudinary.com) (free tier works)
- **Razorpay** — [razorpay.com](https://razorpay.com) (use Test Mode keys locally)
- **Google** — for OAuth (optional, only if using Google sign-in)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/go-kids.git
cd go-kids
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in every value. See the [Environment Variables](#environment-variables) section below for what each one means.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root of the project with the following variables.

> ⚠️ Never commit `.env.local` to Git. It is already in `.gitignore`.

```env
# ─── MongoDB ──────────────────────────────────────────────────────────────────
# Get from MongoDB Atlas → your cluster → Connect → Drivers
# Replace <username>, <password>, and <dbname> with your values
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority

# ─── NextAuth ─────────────────────────────────────────────────────────────────
# NEXTAUTH_SECRET: any long random string — run: openssl rand -base64 32
# NEXTAUTH_URL: your local dev URL (change to production URL on Vercel)
NEXTAUTH_SECRET="your_random_secret_here"
NEXTAUTH_URL=http://localhost:3000

# ─── Google OAuth ─────────────────────────────────────────────────────────────
# Get from console.cloud.google.com → APIs & Services → Credentials
# Only needed if using "Continue with Google" sign-in
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# ─── Email (Nodemailer) ───────────────────────────────────────────────────────
# For Gmail: enable 2FA, then generate an App Password
# Google Account → Security → 2-Step Verification → App Passwords
EMAIL_FROM=Go Kids <noreply@gokids.co.in>
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_16_character_app_password

# ─── Anthropic — Chat Widget ──────────────────────────────────────────────────
# Get from console.anthropic.com → API Keys
CLAUDE_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxx

# ─── WhatsApp Bot (index.js — not used by the website directly) ───────────────
# Only needed if running the WhatsApp chatbot server alongside the website
# WA_TOKEN: Meta Business → WhatsApp → API Setup → Bearer token
# WA_PHONE_ID: Meta Business → WhatsApp → Phone Numbers → the numeric ID
# WA_VERIFY_TOKEN: any string you invent — used for Meta webhook handshake
# GOOGLE_CREDS: entire Google Service Account JSON stringified as one line
GOOGLE_CREDS=""
WA_PHONE_ID=your_whatsapp_phone_number_id
WA_TOKEN=your_meta_whatsapp_bearer_token
WA_VERIFY_TOKEN=any_secret_string_you_choose

# ─── Cloudinary ───────────────────────────────────────────────────────────────
# Get from Cloudinary Dashboard → Settings → Upload → Upload Presets
# Upload Preset must be set to Unsigned mode
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your_upload_preset_name"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# ─── Razorpay (Payments) ──────────────────────────────────────────────────────
# Get from Razorpay Dashboard → Settings → API Keys
# Use Test Mode keys for local development, Live keys for production
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Getting your MongoDB URI

1. Log in to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Click your cluster → **Connect** → **Drivers**
3. Select **Node.js** and copy the connection string
4. Replace `<password>` with your database user's password
5. Replace `<dbname>` with `gokids` (or whatever you want the database called)
6. Paste the full string as the value of `MONGODB_URI` in `.env.local`

### Getting your Razorpay keys

1. Log in to [razorpay.com](https://razorpay.com) → Dashboard
2. Go to **Settings** → **API Keys**
3. Click **Generate Test Key** (use Test Mode keys for local development)
4. Copy **Key ID** → paste as `RAZORPAY_KEY_ID`
5. Copy **Key Secret** → paste as `RAZORPAY_KEY_SECRET`

> ⚠️ Test Mode keys start with `rzp_test_`. Switch to Live keys (`rzp_live_`) only on the production deployment. Never commit live keys to Git.

### Getting your Cloudinary credentials

1. Log in to [cloudinary.com](https://cloudinary.com)
2. Your **Cloud Name** is shown on the dashboard homepage — paste as `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
3. For the upload preset: **Settings** → **Upload** → scroll to **Upload Presets** → **Add Upload Preset**
   - Set Signing Mode to **Unsigned**
   - Set Folder to `gokids`
   - Save and copy the preset name → paste as `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

### Generating NEXTAUTH_SECRET

Run this in your terminal and paste the output as `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

---

## Running Locally

```bash
# Start the development server (with hot reload)
npm run dev
```

The app will be available at **http://localhost:3000**

```bash
# Build for production (to test the production build locally)
npm run build
npm run start
```

```bash
# Run the linter
npm run lint
```

---

## Seeding Dummy Data

The project includes seed scripts that populate your local MongoDB database with realistic dummy data so you can test the app without manually creating content.

> ⚠️ Make sure your `.env.local` is set up with a valid `MONGODB_URI` before running any seed script.

---

### Seed Workshops

Populates the `workshops` collection with 3 sample workshops:
- Rapid Recall: Speed Writing Bootcamp (free, 24 sessions)
- 45-Day AI Explorers Program for Students (free, 45 sessions)
- Confident Kids, Calmer Parents (paid, ₹1,499)

```bash
npm run seed:workshops
```

Expected output:
```
🔗 Connecting to MongoDB...
✅ Connected.

  ✨ Created: "Rapid Recall: Speed Writing Bootcamp"
  ✨ Created: "45-Day AI Explorers Program for Students"
  ✨ Created: "Confident Kids, Calmer Parents"

🌱 Done! Created: 3 | Updated: 0
```

> The seed script uses **upsert** (insert or update by slug). Running it again will update existing records instead of creating duplicates. Safe to run multiple times.

---

### Seed Mentors

Populates the `mentors` collection with 3 sample mentor profiles:
- Dr. Reena Anand (Child Psychologist)
- Sneha Mehta (Career Coach)
- Amit Khurana (Academic Coach)

```bash
npm run seed:mentors
```

Expected output:
```
🔗 Connecting to MongoDB...
✅ Connected.

  ✨ Created: "Dr. Reena Anand"
  ✨ Created: "Sneha Mehta"
  ✨ Created: "Amit Khurana"

🌱 Done! Created: 3 | Updated: 0
```

---

### Seed Everything at Once

To seed all collections in one go:

```bash
npm run seed:workshops && npm run seed:mentors
```

---

### Verifying Seeded Data

After seeding, you can verify the data was inserted correctly by:

**Option A — MongoDB Atlas UI:**
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Click your cluster → **Browse Collections**
3. Check the `workshops` and `mentors` collections

**Option B — MongoDB Compass (desktop app):**
1. Download [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Paste your `MONGODB_URI` to connect
3. Browse the `gokids` database

---

### Creating a Test User

The seed scripts don't create user accounts. To test the full flow:

1. Open [http://localhost:3000/register](http://localhost:3000/register)
2. Register with any email + password
3. Check your email for the OTP (make sure SMTP is configured)
4. Verify your account and log in

To create an **admin account**, after registering a normal account:
1. Open MongoDB Atlas → Browse Collections → `users`
2. Find your user document
3. Change the `role` field from `"parent"` to `"admin"`
4. Save — you can now access `/admin`

---

## Project Structure

```
go-kids/
├── app/
│   ├── (auth)/              # Login, register, OTP, forgot password
│   ├── (public)/            # Homepage, workshops, mentors, assessments, talk
│   ├── (parent)/            # Parent dashboard, children, bookings
│   ├── (mentor)/            # Mentor dashboard
│   ├── (admin)/             # Admin panel
│   └── api/                 # All API routes
│       ├── auth/            # NextAuth + register + OTP
│       ├── children/        # Child profile CRUD
│       ├── workshops/       # Workshop listing + detail
│       ├── enrollments/     # Enrollment management
│       ├── payments/        # Paytm initiate + callback
│       ├── mentors/         # Mentor listing + availability
│       ├── bookings/        # Booking creation + management
│       ├── assessments/     # Assessment save + results
│       └── chat/            # Chat widget Claude proxy
│
├── components/
│   ├── ui/                  # ShadCN auto-generated components
│   ├── shared/              # Navbar, Footer, BrandLogo, etc.
│   ├── animations/          # MotionWrapper, FloatingShapes
│   ├── assessments/         # Assessment flow screens + utils
│   ├── chatbot/             # Chat widget components
│   └── dashboard/           # Parent dashboard components
│
├── lib/
│   ├── auth/                # NextAuth config + helpers
│   ├── db/
│   │   ├── connect.ts       # MongoDB connection
│   │   └── models/          # All Mongoose models
│   ├── email/               # Email sending utilities
│   └── utils/               # Formatting, validation helpers
│
├── scripts/
│   ├── seed-workshops.ts    # Workshop seed script
│   └── seed-mentors.ts      # Mentor seed script
│
├── public/
│   └── images/              # Logo, hero, program images
│
├── .env.example             # Template for environment variables
├── .env.local               # Your local secrets (never commit this)
├── tailwind.config.ts       # Tailwind + brand colour tokens
└── next.config.ts           # Next.js configuration
```

---

## Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run seed:workshops` | Seed workshop data into MongoDB |
| `npm run seed:mentors` | Seed mentor data into MongoDB |

---

## Branch & Deployment Guide

### Branch Strategy

| Branch | Purpose | Deploys to |
|---|---|---|
| `main` | Production-ready code only | Production Vercel project (`app.gokids.co.in` — to be configured) |
| `dev` | Active development and testing | Dev Vercel project (`dev.gokids.co.in` — to be configured) |
| `feature/your-feature-name` | Individual features or fixes | No auto-deploy — merge into `dev` when ready |

### Day-to-day workflow

```bash
# 1. Always start from the latest dev
git checkout dev
git pull origin dev

# 2. Create a new branch for your feature or fix
git checkout -b feature/your-feature-name

# 3. Make your changes, commit regularly
git add .
git commit -m "feat: describe what you did"

# 4. Push your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request on GitHub: feature/your-feature-name → dev
# Get it reviewed, then merge

# 6. When dev is stable and tested, open a PR: dev → main
# After review and approval, merge to trigger production deploy
```

### Rules

- **Never push directly to `main`** — all changes go through a Pull Request
- **Never push directly to `dev`** — always work on a feature branch and PR into dev
- Feature branches should be named descriptively: `feature/mentor-booking`, `fix/otp-timer`, `chore/update-readme`
- Delete your feature branch after merging

### Environment variables per environment

| Variable | Local (`.env.local`) | Dev Vercel | Production Vercel |
|---|---|---|---|
| `MONGODB_URI` | Your personal Atlas cluster | Shared dev Atlas cluster | Production Atlas cluster |
| `NEXTAUTH_URL` | `http://localhost:3000` | `https://dev.gokids.co.in` | `https://app.gokids.co.in` |
| `RAZORPAY_KEY_ID` | `rzp_test_...` (Test Mode) | `rzp_test_...` (Test Mode) | `rzp_live_...` (Live Mode) |
| `RAZORPAY_KEY_SECRET` | Test secret | Test secret | Live secret |

> All other variables (Cloudinary, SMTP, Claude, NextAuth Secret) are the same across local and dev. Production may use dedicated accounts.

---

## Common Issues

**OTP email not arriving:**
- Check your SMTP credentials in `.env.local`
- For Gmail, you need an **App Password**, not your regular Gmail password
- Check your spam folder

**MongoDB connection error:**
- Make sure your IP is whitelisted in MongoDB Atlas → Network Access → Add `0.0.0.0/0`
- Double-check the connection string in `.env.local` — no angle brackets should remain

**Seed script fails:**
- Make sure `MONGODB_URI` is set in `.env.local`
- Make sure you're running from the root of the project
- Try: `npx tsx scripts/seed-workshops.ts` directly if the npm script doesn't work

**Cloudinary upload not working:**
- Make sure your upload preset is set to **Unsigned**
- Check `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` are both set
- `NEXT_PUBLIC_` prefix is required — these variables are used on the client side

**Razorpay payment not working locally:**
- Make sure you are using **Test Mode** keys (`rzp_test_...`) — Live keys will not work in development
- `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` must both be set in `.env.local`
- For local webhook testing, use [Razorpay's test card numbers](https://razorpay.com/docs/payments/payments/test-card-details/) — card `4111 1111 1111 1111`, any future expiry, any CVV

---

*Go Kids · gokids.co.in · Made with ❤️ in India 🇮🇳*
