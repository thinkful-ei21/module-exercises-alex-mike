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

  const findAndToggleChecked = function (id) {
    this.findById(id).checked = !this.findById(id).checked;
  }

  const findAndUpdateName = function (id, newName){
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    }
    catch (error) {
      console.log('Cannot update name: ' + err.message);
    }
  }

  const findAndDelete = function (id) {
    this.items = this.items.filter((itm => itm.id !== id));
  }

  return    {
    items, hideCheckedItems, searchTerm, addItem, 
    findById, findAndToggleChecked, findAndUpdateName,
    findAndDelete
  };

}() );



