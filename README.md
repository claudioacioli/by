# by-el

Welcome to super simpliest wrapper library to type less code!

## Install

```bash
npm install by-el
```

## A React sample

```react

import React from 'react';
import ReactDOM from 'react-dom';
import { byId } from 'by-el';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  byId('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

## Some docs

Import wrapper functions:

```node
import {
  byId,
  byClass,
  bySelector,
  byTag,
  byName,
  byAll
} from 'by-el`;
```

to select element by id:

```node
byId("element-id");

// specific parent
byId("element-id", parentElement);
```

to select element by selector:

```node
bySelector("#element-id");
bySelector(".class");
bySelector("tag");

//specific parent
bySelector(".class", byId("element-id"));

```

to select elements by className:

```node
byClass("class");

//specific parent
byClass("class", bySelector("tag"));
```

to select elements by Name:

```node
byName("name");

//specific parent
byName("name", bySelector("tag"));
```

to select elements by TagName:

```node
byTag("tag");

//specific parent
byTag("tag", bySelector("#element-id"));
```

to select elements by all:

```node
byAll(".class");

//specific parent
byAll(".class", byId("element-id"));
```
