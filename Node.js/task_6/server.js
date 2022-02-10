const Koa = require('koa');
const router = require('koa-router');

const app = new Koa();
const rota = new router();

rota.get("/", (greet) => {
    greet.body = "<h1>Welcome to the index page </h1>";
});

rota.get("/hakkimda", (greet) => {
    greet.body = "<h1>Welcome to the hakkimda page </h1>";
});

rota.get("/iletisim", (greet) => {
    greet.body = "<h1>Welcome to the iletisim page </h1>";
});

app.use(rota.routes());
app.listen(3000);

