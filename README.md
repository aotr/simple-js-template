# Simple-js-Template

Simple-js-Template contains markup with binding expressions ('Template tags'). Templates are applied to data objects or arrays and rendered into the HTML DOM
A JavaScript based template.

Simple-js-Template contains markup with binding expressions. Templates are implemented to data objects or arrays and render into the HTML DOM or in another term A JavaScript based template engine.

Nothing new,write everything in plain JavaScript.
Just make a HTML page with {%variable_name%}, which is replacable by the value (template.aotr.old.js or template.aotr.js).

The template.aotr.old.js is for amatuer users while the template.aotr.js is for advanced users working with object,loop, if else and other functionality.

### Sample code snippets to know how template.aotr.js works
```
var templateUse = 
'have to learn this Year :' +

'<%if(this.showLearn) {%>' +
'<%for(var index in this.learn) {%>' + 
'<a href="#"><%this.learn[index]%></a>' +
'<%}%>' +
'<%} else {%>' +
'<p>none</p>' +
'<%}%>';

console.log(TemplateEngine(templateUse, {
learn: ["go", "html", "css","python","jQuery","c++"],
showLearn: true
}));
```
