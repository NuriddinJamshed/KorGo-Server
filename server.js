const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const rules = auth.rewriter("./rules.json")

app.use(cors());
app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);

app.listen(3000, () => {
  console.log("✅ JSON Server is running on http://localhost:3000");
});
