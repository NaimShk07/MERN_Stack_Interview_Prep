# 🛠️ Production-Ready Node.js + Express Backend (ES Modules)

## 📁 Project Structure

```bash
project-root/
├── src/
│   ├── config/           # Environment config, DB setup, constants
│   ├── controllers/      # Route handler functions
│   ├── middlewares/      # Custom middleware (auth, error handlers)
│   ├── routes/           # Route definitions
│   ├── models/           # DB models (Mongoose/Sequelize etc.)
│   ├── utils/            # Utility functions/helpers
│   ├── index.js          # Entry point
│   └── app.js            # Express app setup
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── README.md
└── notes.md              # This file
```

## Bash Command

```
mkdir -p project_name/src/{config,controllers,middlewares,models,routes,utils} \
&& touch project_name/src/{index.js,app.js} \
&& touch project_name/public \
&& touch project_name/src/config{constant.js,db_connect.js} \
&& touch project_name/{.env,.gitignore,README.md}
```

## npm

- npm init -y
- npm install express dotenv cors helmet morgan mysql2
- npm install --save-dev nodemon prettier

## Script

```
"type": "module"
"scripts": {
 "start": "node src/index.js",
 "dev": "nodemon src/index.js"
}
```

## ENV

```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongo_connection_string
```

```
import dotenv from 'dotenv';
dotenv.config();
```

## Express App Setup (src/app.js)

```
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors()); // allow all origins
app.use(express.json());

app.use('/api', routes);

// Global error handler
app.use(errorHandler);

export default app;
```

## Entry point (src/index.js)

```
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Example Controller (src/controllers/user.controller.js)

```
export const getUsers = (req, res) => {
  res.status(200).json({ users: ['Alice', 'Bob'] });
};

```

## Example Route (src/routes/user.routes.js)

```
import { Router } from 'express';
import { getUsers } from '../controllers/user.controller.js';

const router = Router();

router.get('/', getUsers);

export default router;

```

## Routes (src/routes/index.js)

```
import { Router } from 'express';
import userRoutes from './user.routes.js';

const router = Router();

router.use('/users', userRoutes);

export default router;
```

## Example Middleware (src/middlewares/errorHandler.js)

```
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
}

```

## DB Connect

```
import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,        // Optional: only if needed
      // useFindAndModify: false      // Optional: deprecated in Mongoose 6+
    });

    console.log(`🟢 MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('🔴 MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectMongoDB;

```

```
import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
	host: process.env.SQL_DB_HOST,
	user: process.env.SQL_DB_USER,
	password: process.env.SQL_DB_PASS,
	database: process.env.SQL_DB_NAME,
	waitForConnections: true,
	connectionLimit: 5000,
	queueLimit: 0,
});

export default pool;
```

```
# MongoDB
MONGO_URI=mongodb://localhost:27017/myapp

# SQL DB
SQL_DB_NAME=mydb
SQL_DB_USER=root
SQL_DB_PASS=secret
SQL_DB_HOST=localhost
SQL_DB_DIALECT=mysql
```

```
import connectMongoDB from './config/db.mongo.js';
connectMongoDB();
```

## index.js (changes)

```
import db from "./config/db.sql.js";

const port = process.env.PORT || 3000;

// connectMongoDB();
const startServer = async () => {
	try {
		const [rows] = await db.query("SELECT 1");
		console.log("🟢 Database connected successfully");
		app.listen(port, () => {
			console.log("server is running on port: ", port);
		});

	} catch (err) {
		console.error("🔴 Failed to connect to the database:", err.message);
		process.exit(1);
	}
};

startServer();
```

## Multer Middleware file upload

```
import multer from "multer";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./public/temp");
   },
   filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      // cb(null, file.fieldname + "-" + uniqueSuffix);
      cb(null, file.originalname);
   },
});

export const upload = multer({ storage: storage });
```
