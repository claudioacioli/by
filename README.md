# by-el

Welcome to super simpliest wrapper library to type less code!

## Install

```bash
npm install by-el
```

## Use it

Import wrapper functions:

```node
import {
  byId,
  byClass,
  bySelector,
  byTag,
  byName,
  byAll
} from "byjs";
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
byTag("class", bySelector("#element-id"));
```

to select elements by all:

```node
byAll(".class");

//specific parent
byAll("class", byId("element-id"));
```
