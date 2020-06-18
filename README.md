# By

Welcome to super simpliest wrapper library to type less code!

## Install

```node
npm install byjs
```

## Use it

Import wrapper functions:

```
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

```
bySelector("#element-id");
bySelector(".class");
bySelector("tag");

//specific parent
bySelector(".class", byId("element-id"));

```

to select elements by className:

```
byClass("class");

//specific parent
byClass("class", bySelector("tag"));
```

to select elements by Name:

```
byName("name");

//specific parent
byName("name", bySelector("tag"));
```

to select elements by TagName:

```
byTag("tag");

//specific parent
byTag("class", bySelector("#element-id"));
```

to select elements by all:

```
byAll(".class");

//specific parent
byAll("class", byId("element-id"));
```
