import index from './indexController.js';

const controllerInit = {
    init(app, router) {
        app.use(
            router( _ => {
                _.get('/index/index', index.index())
            })
        );
    }
};

export default controllerInit;