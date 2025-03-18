const fs = require("fs");
const path = require("path");

const projectStructure = {
  "SpendWise": {
    "backend": {
      "config": { "db.js": "" },
      "controllers": {
        "authController.js": "",
        "expenseController.js": "",
        "budgetController.js": ""
      },
      "middleware": { "authMiddleware.js": "" },
      "models": {
        "userModel.js": "",
        "expenseModel.js": "",
        "budgetModel.js": ""
      },
      "routes": {
        "authRoutes.js": "",
        "expenseRoutes.js": "",
        "budgetRoutes.js": ""
      },
      "services": {
        "authService.js": "",
        "expenseService.js": ""
      },
      "utils": { "validators.js": "" },
      "server.js": "",
      ".env": "",
      ".gitignore": "node_modules/\n.env\n",
      "package.json": `{
  "name": "spendwise-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.2.0",
    "dotenv": "^16.0.3",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`
    },
    "frontend": {
      "assets": {
        "img": {},
        "fonts": {},
        "icons": {}
      },
      "css": { "style.css": "" },
      "js": {
        "main.js": "",
        "auth.js": "",
        "expenses.js": "",
        "budget.js": ""
      },
      "pages": {
        "index.html": "",
        "dashboard.html": "",
        "login.html": "",
        "register.html": ""
      },
      ".gitignore": "node_modules/\n",
      "package.json": `{
  "name": "spendwise-frontend",
  "version": "1.0.0",
  "dependencies": {
    "bootstrap": "^5.3.0"
  }
}`
    },
    "database": {
      "schema.sql": "",
      "seed.sql": ""
    },
    "README.md": "# SpendWise\nPersonal Finance Tracker using Node.js, Express, MySQL, HTML, CSS, and JavaScript."
  }
};

// Function to create the project structure
const createStructure = (basePath, structure) => {
  for (const name in structure) {
    const targetPath = path.join(basePath, name);
    if (typeof structure[name] === "object") {
      fs.mkdirSync(targetPath, { recursive: true }); // Create directories
      createStructure(targetPath, structure[name]); // Recursively process subdirectories
    } else {
      fs.writeFileSync(targetPath, structure[name], "utf8"); // Create files
    }
  }
};

// Execute the function to create the project
const rootDir = path.join(__dirname);
createStructure(rootDir, projectStructure);

console.log("✅ SpendWise project structure created successfully!");
