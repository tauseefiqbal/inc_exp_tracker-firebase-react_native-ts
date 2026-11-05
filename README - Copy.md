# Income & Expense Tracker App

A cross-platform mobile (Android & iOS) and web personal finance application built with **React Native**, **TypeScript**, **Expo Router**, **Firebase (Auth & Firestore)**, and **Cloudinary**. Track multiple wallets, log daily income and expenses with receipt images, search transactions in real time, and visualize financial trends across weekly, monthly, and yearly bar charts.

---

## Table of Contents

- [Income \& Expense Tracker App](#income--expense-tracker-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Authentication \& User Management](#authentication--user-management)
    - [Multi-Wallet Management](#multi-wallet-management)
    - [Income \& Expense Tracking](#income--expense-tracking)
    - [Analytics \& Interactive Statistics](#analytics--interactive-statistics)
    - [Real-Time Search \& Filtering](#real-time-search--filtering)
    - [Cloud Media \& Cross-Platform UI](#cloud-media--cross-platform-ui)
  - [Tech Stack](#tech-stack)
    - [Frontend \& Mobile Framework](#frontend--mobile-framework)
    - [Backend \& Cloud Services](#backend--cloud-services)
    - [UI, Charts \& Animation Libraries](#ui-charts--animation-libraries)
    - [Development \& Build Tooling](#development--build-tooling)
  - [Deployment](#deployment)
    - [App Live URL (APP URL)](#app-live-url-app-url)
    - [EAS Mobile Builds (Android \& iOS)](#eas-mobile-builds-android--ios)
    - [Web Static Deployment](#web-static-deployment)
  - [Test and Admin Users Credentials](#test-and-admin-users-credentials)
    - [Regular Test User Credentials](#regular-test-user-credentials)
    - [Admin / Demo Seeded User Credentials](#admin--demo-seeded-user-credentials)
  - [How to Use App for Regular User](#how-to-use-app-for-regular-user)
    - [1. Account Registration \& Sign In](#1-account-registration--sign-in)
    - [2. Creating \& Managing Wallets](#2-creating--managing-wallets)
    - [3. Recording Income \& Expenses](#3-recording-income--expenses)
    - [4. Searching \& Updating Transactions](#4-searching--updating-transactions)
    - [5. Viewing Financial Statistics](#5-viewing-financial-statistics)
    - [6. Managing User Profile](#6-managing-user-profile)
  - [How to Use App for Admin User](#how-to-use-app-for-admin-user)
    - [1. Seeding Initial Database Collections](#1-seeding-initial-database-collections)
    - [2. Managing Firestore Security Rules \& Indexes](#2-managing-firestore-security-rules--indexes)
    - [3. Managing Users \& Data via Firebase Console](#3-managing-users--data-via-firebase-console)
    - [4. Managing Media Assets in Cloudinary](#4-managing-media-assets-in-cloudinary)
  - [Prerequisites \& Local Installation](#prerequisites--local-installation)
    - [System Requirements](#system-requirements)
    - [Step-by-Step Setup](#step-by-step-setup)
  - [Environment Variables \& Configuration](#environment-variables--configuration)
    - [Firebase Configuration](#firebase-configuration)
    - [Cloudinary Configuration](#cloudinary-configuration)
  - [Database Schema \& Security](#database-schema--security)
    - [Firestore Collections](#firestore-collections)
    - [Security Rules Overview](#security-rules-overview)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [License](#license)

---

## Features

### Authentication & User Management
- ✅ **Email & Password Authentication**: Secure user registration and login powered by Firebase Authentication (`signInWithEmailAndPassword` and `createUserWithEmailAndPassword`).
- ✅ **Platform-Specific Auth Persistence**: Seamless session state persistence across native mobile restarts via `@react-native-async-storage/async-storage` (`config/firebase.ts`) and browser storage on web (`config/firebase.web.ts`).
- ✅ **Protected Route Navigation**: Automatic redirection between `(auth)` welcome/login/register screens and `(tabs)` main application screens via Expo Router (`onAuthStateChanged`).
- ✅ **Customizable User Profiles**: Update display name and upload a custom profile avatar from the device gallery or file picker.

### Multi-Wallet Management
- ✅ **Unlimited Custom Wallets**: Create multiple wallets/vaults (e.g., Main Cash, Salary, Freelancing, Savings) with custom icons/images.
- ✅ **Aggregated Total Balance**: Real-time calculation of overall net balance, total income, and total expenses across all user wallets on the Home card and Wallet tab.
- ✅ **Automatic Wallet Balance Synchronization**: Creating, editing, or deleting a transaction automatically recalculates and updates the linked wallet's `amount`, `totalIncome`, and `totalExpenses`.
- ✅ **Cascading Wallet Deletion**: Deleting a wallet automatically batch-deletes all associated transactions in Firestore to maintain data integrity.
- ✅ **Overdraft Protection**: Prevents recording or updating expenses that exceed the selected wallet's available balance.

### Income & Expense Tracking
- ✅ **12 Predefined Expense Categories**: Categorize spending across Groceries, Rent, Utilities, Transportation, Entertainment, Dining, Health, Insurance, Savings, Clothing, Personal, and Others—each with distinct Phosphor icons and color badges.
- ✅ **Dedicated Income Logging**: Log income entries directly into any wallet with automatic balance crediting.
- ✅ **Receipt Image Attachments**: Attach optional receipt or invoice photos to any transaction using the device image picker and Cloudinary upload pipeline.
- ✅ **Cross-Platform Date Picker**: Select transaction dates seamlessly using `@react-native-community/datetimepicker`.
- ✅ **Full Transaction CRUD**: View, edit, or delete existing transactions; changing transaction type, amount, or wallet automatically reverts old wallet balances and applies new ones.

### Analytics & Interactive Statistics
- ✅ **Weekly Financial Analytics**: Grouped bar charts comparing daily income vs. expenses over the last 7 days.
- ✅ **Monthly Financial Analytics**: Grouped bar charts displaying month-by-month income and expense totals over the last 12 months.
- ✅ **Yearly Financial Analytics**: Multi-year bar chart aggregation from the user's earliest recorded transaction year to the current year.
- ✅ **Filtered Period Transaction List**: Displays the corresponding transactions list directly below the active Weekly, Monthly, or Yearly chart.

### Real-Time Search & Filtering
- ✅ **Instant Keyword Search**: Dedicated search modal (`/(modals)/searchModal`) that filters transactions in real time by category, transaction type (`income` / `expense`), or description keywords.
- ✅ **Live Firestore Subscriptions**: Custom `useFetchData` hook built on Firestore `onSnapshot` listeners for instant UI updates without manual refreshing.

### Cloud Media & Cross-Platform UI
- ✅ **Cloudinary Unsigned Image Uploads**: Automatic cloud hosting for user avatars, wallet icons, and transaction receipts organized into dedicated Cloudinary folders (`users`, `wallets`, `transactions`).
- ✅ **Native & Web Compatibility**: Runs natively on Android and iOS via Expo and in modern web browsers via `react-native-web` and Metro static bundling.
- ✅ **Smooth Animations & Transitions**: Fluid screen and list entry animations powered by `react-native-reanimated` (`FadeInDown` spring animations).
- ✅ **Responsive Scaling**: Adaptive layout scaling across phones, tablets, and web viewports using custom `scale` and `verticalScale` utilities.

---

## Tech Stack

### Frontend & Mobile Framework
- **Framework**: [React Native](https://reactnative.dev/) (`0.81.5`), [React](https://react.dev/) (`19.1.0`), & [React Native Web](https://necolas.github.io/react-native-web/) (`^0.21.0`)
- **Platform & Bundler**: [Expo SDK 54](https://expo.dev/) (`^54.0.21`) with Metro Bundler & New Architecture enabled
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (`~6.0.14`) with typed file-based routing (`(auth)`, `(tabs)`, `(modals)`)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (`~5.3.3`)

### Backend & Cloud Services
- **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth) (Email/Password provider with native AsyncStorage & web auth persistence)
- **Database**: [Cloud Firestore](https://firebase.google.com/docs/firestore) (`firebase ^11.0.2`) for real-time NoSQL document storage (`users`, `wallets`, `transactions`)
- **Media Storage**: [Cloudinary REST API](https://cloudinary.com/) via `axios` (`^1.7.8`) for unsigned image uploads
- **Local Storage**: `@react-native-async-storage/async-storage` (`2.2.0`)

### UI, Charts & Animation Libraries
- **Charts**: `react-native-gifted-charts` (`^1.4.47`) & `react-native-svg` (`15.12.1`)
- **Animations**: `react-native-reanimated` (`~4.1.1`), `react-native-gesture-handler` (`~2.28.0`), `react-native-worklets` (`0.5.1`)
- **Icons**: `phosphor-react-native` (`^2.2.1`) & `@expo/vector-icons` (`^15.0.3`)
- **Form Controls**: `react-native-element-dropdown` (`^2.12.2`), `@react-native-community/datetimepicker` (`8.4.4`), `@react-native-segmented-control/segmented-control` (`2.5.7`)
- **Media & Image Handling**: `expo-image` (`~3.0.10`), `expo-image-picker` (`~17.0.8`), `expo-linear-gradient` (`~15.0.7`), `expo-blur` (`~15.0.7`)
- **Lists**: `@shopify/flash-list` (`2.0.2`)

### Development & Build Tooling
- **Testing**: `jest` (`^29.2.1`), `jest-expo` (`~54.0.0`), `react-test-renderer` (`19.1.0`)
- **Linting**: `expo lint`
- **Cloud Builds**: Expo Application Services ([EAS Build](https://docs.expo.dev/build/introduction/)) configured via [`eas.json`](./eas.json)

---

## Deployment

### App Live URL (APP URL)
- **Live Web / App URL (`APP URL`)**: `https://expense-tracker-app.expo.app` *(Replace with your production EAS Hosting / Vercel / Netlify URL once deployed)*
- **Expo Project Slug**: `expense-tracker-app`
- **Android Package ID**: `com.tauseefiqbal.expensetrackerapp`
- **EAS Project ID**: `c0809b04-ee4e-40ee-b5dd-142bb6cb1ddf`

### EAS Mobile Builds (Android & iOS)
The project includes preconfigured profiles in [`eas.json`](./eas.json):

```bash
# Install EAS CLI globally
npm install -g eas-cli

# Log in to your Expo account
eas login

# Build internal Android APK (Preview profile)
eas build -p android --profile preview

# Build production Android App Bundle (AAB) or iOS archive
eas build --platform all --profile production
```

### Web Static Deployment
Because [`app.json`](./app.json) configures `"web": { "bundler": "metro", "output": "static" }` and [`config/firebase.web.ts`](./config/firebase.web.ts) handles web Firebase initialization, you can export and deploy the web bundle to EAS Hosting, Vercel, or Netlify:

```bash
# Export static web build to the dist/ folder
npx expo export --platform web

# Deploy to EAS Hosting
eas deploy
```

---

## Test and Admin Users Credentials

> [!NOTE]
> The app uses Firebase Email/Password Authentication. You can sign in using the pre-configured test credentials below, register a new account directly from the Sign-Up screen, or seed the demo database documents using [`scripts/seedDatabase.js`](./scripts/seedDatabase.js).

### Regular Test User Credentials
| Field | Value |
| :--- | :--- |
| **Role** | Regular User |
| **Name** | Demo User |
| **Email** | `demo@expensetracker.app` |
| **Password** | `Demo@12345` *(or register via the Sign-Up screen if testing on a fresh Firebase project)* |
| **Sample Wallet** | `Main Cash Wallet` (`$1,500.00` balance) |

### Admin / Demo Seeded User Credentials
> [!IMPORTANT]
> Administrative operations (database seeding, security rule deployment, and user management) are performed via the Firebase Console and the Node.js Seed CLI rather than a separate in-app screen, as Firestore rules strictly isolate user data (`request.auth.uid == userId`).

| Field | Value |
| :--- | :--- |
| **Role** | Admin / Project Owner (Firebase & Cloudinary Console + Seed Script) |
| **Admin Test Email** | `admin@expensetracker.app` |
| **Admin Test Password** | `Admin@12345` |
| **Seeded UID** | `sample_user_01` |
| **Seeded Wallet ID** | `sample_wallet_01` (`Main Cash Wallet`) |
| **Seeded Transaction ID** | `sample_transaction_01` (`Groceries - $45.50`) |

---

## How to Use App for Regular User

### 1. Account Registration & Sign In
1. Launch the app to view the **Welcome Screen** (`/(auth)/welcome`).
2. Tap **Get Started** to open the **Sign Up** screen (`/(auth)/register`) and create an account with your **Name**, **Email**, and **Password**, or tap **Login** (`/(auth)/login`) if you already have an account.
3. Upon successful authentication, you are automatically redirected to the **Home Dashboard** (`/(tabs)`).

### 2. Creating & Managing Wallets
1. Navigate to the **Wallet** tab (`/(tabs)/wallet`) from the bottom navigation bar.
2. Tap the green **Plus (`+`)** icon next to **My Wallets** to open the **New Wallet Modal** (`/(modals)/walletModal`).
3. Enter a **Wallet Name** (e.g., *Salary*, *Freelancing*, *Main Cash*, *Savings*) and upload a **Wallet Icon** image from your device (sample images [`salary.jpeg`](./salary.jpeg) and [`Freelancing.jpeg`](./Freelancing.jpeg) are also included in the root folder).
4. Tap **Add Wallet**. Your new wallet appears in the list with an initial balance of `$0.00`.
5. To edit or delete an existing wallet, tap on the wallet item in the list, modify its name/icon, or tap the red **Trash** button (deleting a wallet also removes all transactions linked to it).

### 3. Recording Income & Expenses
1. On the **Home** tab (`/(tabs)/index`), tap the floating green **Plus (`+`)** button in the bottom-right corner to open the **Add Transaction Modal** (`/(modals)/transactionModal`).
2. Select the **Type**:
   - **Income**: Adds funds to the chosen wallet.
   - **Expense**: Deducts funds from the chosen wallet (requires sufficient wallet balance).
3. Select the target **Wallet** from the dropdown (displays current wallet balance next to its name).
4. If recording an **Expense**, choose an **Expense Category** (e.g., *Groceries*, *Rent*, *Dining*, *Utilities*, etc.).
5. Pick the **Date** of the transaction, enter the numeric **Amount**, and optionally provide a **Description** and upload a **Receipt Image**.
6. Tap **Submit**. The Home card and recent transactions list update immediately in real time.

### 4. Searching & Updating Transactions
1. Tap the **Magnifying Glass** icon in the top-right corner of the **Home** screen to open the **Search Modal** (`/(modals)/searchModal`).
2. Type at least 2 characters to filter transactions instantaneously by **category**, **type** (`income`/`expense`), or **description**.
3. Tap any transaction item in the Home, Statistics, or Search list to open it in the **Update Transaction Modal**, where you can modify details or delete the transaction.

### 5. Viewing Financial Statistics
1. Open the **Statistics** tab (`/(tabs)/statistics`) from the bottom navigation bar.
2. Switch between **Weekly**, **Monthly**, and **Yearly** views using the segmented control at the top.
3. Inspect the dual-bar chart (**Green** bars represent Income; **Rose/Red** bars represent Expenses) and scroll down to review all transactions within that timeframe.

### 6. Managing User Profile
1. Open the **Profile** tab (`/(tabs)/profile`).
2. Tap **Edit Profile** to open the **Profile Modal** (`/(modals)/profileModal`).
3. Tap the pencil icon on your avatar to pick a new photo from your gallery, update your **Name**, and tap **Update**.
4. Tap **Logout** and confirm the prompt to sign out of your session safely.

---

## How to Use App for Admin User

### 1. Seeding Initial Database Collections
Admins and developers can initialize or reset sample documents in the Firestore collections (`users`, `wallets`, `transactions`) using the included seed script [`scripts/seedDatabase.js`](./scripts/seedDatabase.js):

```bash
node scripts/seedDatabase.js
```

This creates:
- `users/sample_user_01` (`Demo User`, `demo@expensetracker.app`)
- `wallets/sample_wallet_01` (`Main Cash Wallet` with `amount: 1500`, `totalIncome: 2000`, `totalExpenses: 500`)
- `transactions/sample_transaction_01` (`expense` of `$45.50` in `groceries`)

### 2. Managing Firestore Security Rules & Indexes
Firestore security rules ([`firestore.rules`](./firestore.rules)) and composite indexes ([`firestore.indexes.json`](./firestore.indexes.json)) are maintained at the project root.
- Deploy updated security rules and composite indexes via Firebase CLI:
  ```bash
  firebase deploy --only firestore:rules,firestore:indexes
  ```
- Deploy storage rules ([`storage.rules`](./storage.rules)) if using Firebase Storage alongside Cloudinary:
  ```bash
  firebase deploy --only storage
  ```

### 3. Managing Users & Data via Firebase Console
1. Sign in to the [Firebase Console](https://console.firebase.google.com/).
2. Open **Authentication > Users** to reset user passwords, disable compromised accounts, or manually add test/admin accounts.
3. Open **Firestore Database > Data** to inspect or audit `users`, `wallets`, and `transactions` documents across all UIDs.

### 4. Managing Media Assets in Cloudinary
1. Sign in to the [Cloudinary Console](https://console.cloudinary.com/).
2. Navigate to **Media Library** to review uploaded images organized under the `users/`, `wallets/`, and `transactions/` folders.
3. Navigate to **Settings > Upload > Upload Presets** to manage unsigned upload presets, file size restrictions, or allowed image formats.

---

## Prerequisites & Local Installation

### System Requirements
- **Node.js**: `v18.x` or `v20.x+` (LTS recommended)
- **Package Manager**: `npm` (comes with Node.js) or `yarn`
- **Mobile / Web Runtime**:
  - **Expo Go** app on iOS / Android physical device, **or**
  - **Android Studio** (Android Emulator) / **Xcode** (iOS Simulator on macOS), **or**
  - Any modern web browser (Chrome, Edge, Safari, Firefox)

### Step-by-Step Setup
1. **Clone the repository and navigate to the project root**:
   ```bash
   git clone <repository-url>
   cd react-native-inc_and_exp_tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # Or if peer dependency conflicts arise:
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**:
   Copy [`.env.example`](./.env.example) to `.env` and fill in your Firebase and Cloudinary credentials:
   ```bash
   cp .env.example .env
   ```

4. **Start the Expo development server**:
   ```bash
   npm run start
   ```
   - Press `a` to open on an Android Emulator.
   - Press `i` to open on an iOS Simulator.
   - Press `w` to open in a Web Browser.
   - Scan the QR code with the **Expo Go** app on your physical device.

---

## Environment Variables & Configuration

Create a `.env` file in the root directory based on [`.env.example`](./.env.example):

```env
# Firebase Configuration
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_STORAGE_BUCKET=your_project_id.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Cloudinary Configuration
EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### Firebase Configuration
Firebase is initialized in [`config/firebase.ts`](./config/firebase.ts) (native Android/iOS) and [`config/firebase.web.ts`](./config/firebase.web.ts) (Web). To set up your own Firebase project:
1. Create a project at [console.firebase.google.com](https://console.firebase.google.com/).
2. Register a Web App and copy the configuration keys into your `.env` file.
3. Under **Authentication > Sign-in method**, enable the **Email/Password** provider.
4. Under **Firestore Database**, create a database and deploy [`firestore.rules`](./firestore.rules) and [`firestore.indexes.json`](./firestore.indexes.json).

### Cloudinary Configuration
Cloudinary credentials are read in [`constants/index.ts`](./constants/index.ts) and used by [`services/imageService.ts`](./services/imageService.ts):
1. Create an account at [cloudinary.com](https://cloudinary.com/).
2. Copy your **Cloud Name** into `EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME`.
3. Go to **Settings > Upload > Upload Presets**, create an **Unsigned** upload preset, and set its name in `EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET`.

---

## Database Schema & Security

### Firestore Collections

| Collection | Document Fields | Description |
| :--- | :--- | :--- |
| **`users`** | `uid` (string), `name` (string), `email` (string), `image` (string \| null), `createdAt` (Timestamp) | Stores user profile metadata keyed by Firebase Auth `uid`. |
| **`wallets`** | `id` (string), `name` (string), `amount` (number), `totalIncome` (number), `totalExpenses` (number), `image` (string \| null), `uid` (string), `created` (Timestamp) | Stores user wallets and running income/expense totals. |
| **`transactions`** | `id` (string), `type` (`"income"` \| `"expense"`), `amount` (number), `category` (string), `description` (string), `date` (Timestamp), `image` (string \| null), `uid` (string), `walletId` (string) | Stores individual income and expense transactions linked to a user and wallet. |

### Security Rules Overview
Defined in [`firestore.rules`](./firestore.rules):
- **`/users/{userId}`**: Read and write permitted only when `request.auth != null && request.auth.uid == userId`.
- **`/wallets/{walletId}`**: Read, create, update, and delete permitted only when the authenticated user's `uid` matches the wallet document's `uid`.
- **`/transactions/{transactionId}`**: Read, create, update, and delete permitted only when the authenticated user's `uid` matches the transaction document's `uid`.

---

## Project Structure

```text
react-native-inc_and_exp_tracker/
├── app/                          # Expo Router file-based navigation screens
│   ├── (auth)/                   # Unauthenticated routes (welcome, login, register)
│   ├── (modals)/                 # Modal screens (transaction, wallet, profile, search, category)
│   ├── (tabs)/                   # Main bottom-tab screens (Home, Statistics, Wallet, Profile)
│   ├── _layout.tsx               # Root Stack layout wrapped in AuthProvider
│   └── index.tsx                 # Initial splash / entry redirect screen
├── assets/                       # Fonts and static images/icons
├── components/                   # Reusable UI components (HomeCard, TransactionList, Input, Button, etc.)
├── config/                       # Firebase initialization (firebase.ts for native, firebase.web.ts for web)
├── constants/                    # Theme colors/spacing, expense categories, Cloudinary constants
├── contexts/                     # React Context for authentication (authContext.tsx)
├── hooks/                        # Custom Firestore real-time subscription hook (useFetchData.ts)
├── scripts/                      # Utility scripts (seedDatabase.js, reset-project.js)
├── services/                     # Business logic for transactions, wallets, users, and Cloudinary uploads
├── utils/                        # Responsive scaling (styling.ts) and date range helpers (common.ts)
├── .env.example                  # Template for environment variables
├── app.json                      # Expo configuration
├── eas.json                      # EAS Build configuration
├── firestore.indexes.json        # Firestore composite indexes
├── firestore.rules               # Firestore security rules
├── package.json                  # Project dependencies and scripts
└── types.ts                      # Shared TypeScript interfaces and types
```

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run start` | Starts the Expo Metro development server (`expo start`). |
| `npm run android` | Starts the development server and opens the app on Android (`expo start --android`). |
| `npm run ios` | Starts the development server and opens the app on iOS (`expo start --ios`). |
| `npm run web` | Starts the development server for Web (`expo start --web`). |
| `npm run test` | Runs Jest unit tests in watch mode (`jest --watchAll`). |
| `npm run lint` | Runs Expo ESLint checks (`expo lint`). |
| `node scripts/seedDatabase.js` | Seeds sample user, wallet, and transaction documents into Firestore. |

---

## License

This project is licensed under the terms specified in [`LICENSE.txt`](./LICENSE.txt) (Personal / Non-Commercial Use, Original Author: Code With Nomi).

