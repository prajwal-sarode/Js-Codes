var name = input("enter a name");

var name0 = name.slice(0,1);
var name0 = name0.toUpperCase();
//  or we can do this (var name1 = name.slice(1);)
var name1 = name.slice(1,name.length);

var addedName = name0+name1
alert(addedName);
