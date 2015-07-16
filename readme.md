### Boot

```
npm install

# start up the asset server
npm run dev-watch

# in another terminal window
npm run dev-server
```

Go to http://localhost:8080

### Includes

* react
* react-router
* webpack (webpack-dev-server w/ live reload)
* ES6 support (babel)
* HistoryLocation instead of HashLocation on router
* fluxxor

### Todo

* CRUD on event types
* AJAX fetching/updating
* Styleguide decisions (JS specifically, maybe css?)
* Javascript testing framework (unit testing, ui testing too?)

## Questions

* Login / Auth? JWT maybe? how do other people do it?
* How does expand/collapse work? e.g. interactions, sidebar hover
* What existing react components are out there? d3? tooltips?
* What does a production deploy look like? assets? css files? optimizations?
* How can we make the requires simpler considering project structure? (e.g. import ListRow from '../../components/ListRow';)
* Our component styleguide - how can we make components self-documention
* How should we be doing testing? unit tests? ui tests? how do other people do it with react?