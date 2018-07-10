import index from "./js/index";

store.subscribe(() => console.log('Look ma, Redux!!'));

store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) );

console.log(store.getState());
