//$(document).foundation() DO NOT NEED THIS BECAUSE YOU ARE NOT USEING FOUNDATION.HTML

var GLObject = { //GLObject = Grocery List Object
  //no need for var _ = function() because everything is in the object now

  init: function() {
    document.getElementById('Groceries').onsubmit = this.addValuesToInputs; //this takes the input from index.html
     //this also calls addValuesToDetails so start on that function first
     console.log("hello");
  }, //add commas in an object

  buildListItem: function(formValues) {
    var li = document.createElement('li'); //creates the list
    //var dt = document.createElement('dt'); //object goes here
    //var dd = document.createElement('dd'); //values goes here
    //dt.innerHTML = term; //creates html object (sticks in the word age)
    //dd.innerHTML  = definition; //actually puts something inside it (sticks in the number 36)
    var promoteLink = this.buildLink({
      text: 'promote',
      handler: function() {
        listItem.style.border = '2px CornflowerBlue dashed';
      }
    });
    li.innerHTML = formValues.itemName; //
    //appendChild assumes you want to put in an item
    return li;
    listItem.appendChild(promoteLink);
  },

  buildLink: function(options) {
    var link = document.createElement('a');
    link.href = "#";
    link.innerText = options.text;
    link.onclick = options.handler;
    return link;
  },

  addValuesToInputs:function(eh) { //eh = event handler
    eh.preventDefault(); //preventDefault does something...
    var groceryList = document.querySelector('#groceryList');
    var formValues = {
      itemName: this.itemName.value
    };
    groceryList.appendChild(GLObject.buildListItem(formValues)); //gotta tell it the values so it knows what the list items are
    //can't use this.buildListItem because this refers to the form and bLI is in an object
  },
  // appendChild(GlObject.buildList(formValues));
};
GLObject.init();
