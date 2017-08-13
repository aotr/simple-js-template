# simple-js-template


Javascript based template. No new language, no new syntax. Write everything in plain JavaScript.
Make only HTML page with {%variable_name%} is replace by value (template.aotr.old.js or template.aotr.js) .
 template.aotr.old.js is base uses .

template.aotr.js is advanced use working with the object with loop and if else other functionality.
//Some uses of template.aotr.js

var templateUse = 
'have to learn this Year :' + 
'<%if(this.showLearn) {%>' +
    '<%for(var index in this.learn) {%>' + 
    '<a href="#"><%this.learn[index]%></a>' +
    '<%}%>' +
'<%} else {%>' +
    '<p>none</p>' +
'<%}%>';
console.log(TemplateEngine(template, {
    learn: ["js", "html", "css"],
    showLearn: true
}));
