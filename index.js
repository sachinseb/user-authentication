const app = require("./app");
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
