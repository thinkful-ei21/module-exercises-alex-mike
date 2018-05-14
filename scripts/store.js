/* global shoppingList, Item cuid */
'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars

const store = (function () {
  

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
     
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = function(id) {
    return store.items.find(itm => itm.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(err) {
      console.log('Cannot add item: ' + err.message);
    }
  };

  return    {
    items, hideCheckedItems, searchTerm, addItem, findById
  };

}() );



