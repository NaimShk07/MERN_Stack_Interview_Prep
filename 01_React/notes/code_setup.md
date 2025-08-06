# 📘 Production Grade React Folder Structure & Setup Notes

This document outlines the steps and bash commands to set up a production-ready React application structure.

---

## 🧱 Folder Structure Overview

```bash
my-app/
│
├── public/ │
├── src/
│   ├── app/
│   │   └── store.js           # Redux store setup│   │
│   ├── features/              # Redux slices (grouped by feature)
│   │   └── counter/
│   │       ├── counterSlice.js
│   │       └── Counter.jsx│   │
│   ├── components/            # Reusable UI components
│   │   └── Button.jsx│   │
│   ├── hooks/                 # Custom hooks
│   │   └── useToggle.js│   │
│   ├── layouts/               # Layout components (e.g., dashboard layout)
│   │   └── MainLayout.jsx│   │
│   ├── pages/                 # Page-level components
│   │   └── Home.jsx│   │
│   ├── services/              # API service handlers (e.g., axios configs)
│   │   └── api.js│   │
│   ├── utils/                 # Utility functions/helpers
│   │   └── formatDate.js│   │
│   ├── App.jsx                # Root component
│   ├── main.jsx               # ReactDOM rendering
│   ├── index.css              # Global styles│
├── .gitignore
├── package.json
├── tailwind.config.js        # Tailwind config
├── vite.config.js            # Vite config
└── README.md
```

---

## 🛠️ Setup Steps with Bash Commands

```
mkdir -p src/{app,features/counter,components,hooks,layouts,pages,services,utils} && \
touch \
src/app/store.js \
src/features/counter/{counterSlice.js,Counter.jsx} \
src/components/Button.jsx \
src/hooks/useToggle.js \
src/layouts/MainLayout.jsx \
src/pages/Home.jsx \
src/services/api.js \
src/utils/formatDate.js \
src/App.jsx \
src/main.jsx \
src/index.css
```

### 1. Initialize Project

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
```

```
npm install react-router-dom axios
npm install -D eslint prettier eslint-config-prettier eslint-plugin-react
npm install @reduxjs/toolkit react-redux
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
mkdir -p src/{assets,components,features,hooks,layouts,pages,services,store,utils}

```

## ESLint and Prettier Configuration

```
{
  "extends": ["react-app", "plugin:react/recommended", "prettier"],
  "plugins": ["react"],
  "rules": {
    "react/prop-types": "off"
  }
}
```

## .prettierrc (example)

```
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

```
git init
echo "node_modules/" >> .gitignore
```

## Redux store setup (src/app/store.js)

```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

## Sample Slice (src/features/counter/counterSlice.js)

```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

## Connecting Redux to App (src/main.jsx)

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## Routing

```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
```

## (src/layouts/MainLayout.jsx)

```
import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

```

```
function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // form data is in React state
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
```
