/* global shoppingList, cuid */
'use strict';
/* eslint-env jquery */
// eslint-disable-next-line no-unused-vars
/*const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ],
  hideCheckedItems: false,
  searchTerm: ''
};*/

$(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});