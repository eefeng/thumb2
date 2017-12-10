import Koa from 'koa';
import router from 'koa-simple-router';
import serve from 'koa-static';
import render from 'koa-swig';
import co from 'co';
import babel_co from 'babel-register';
import babel_po from 'babel-polyfill'
import initController from './controller/initController.js'

import CONFIG from './config/config.js'

const app = new Koa();

initController.init(app, router);

app.context.render = co.wrap(render({
    root: CONFIG.get('viewsDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

app.use(serve(CONFIG.get('staticDir')));
app.listen(CONFIG.get('port'));

export default app;