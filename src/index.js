const
  
  byId = (id, parent=document) => 
    parent.getElementById(id)
  ,

  byName = (name, parent=document) => 
    parent.getElementsByName(name)
  ,

  byClass = (className, parent=document) => 
    parent.getElementsByClassName(className)
  ,

  byTag = (tag, parent=document) => 
    parent.getElementsByTagName(tag)
  .

  bySelector = (selector, parent=document) =>
    parent.querySelector(selector)
  ,

  byAll = (selector, parent=document) =>
    parent.querySelectorAll(selector)
;
