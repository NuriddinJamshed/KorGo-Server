// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const rules = require("./rules.json"); // <= ВАЖНО

app.db = router.db;

app.use(cors());
app.use(middlewares);
app.use(auth.rewriter(rules)); // <= ПРАВИЛЬНО ПОДКЛЮЧЕНО
app.use(auth);
app.use(router);

app.listen(5000, () => {
  console.log("JSON Server is running on http://localhost:5000");
});
