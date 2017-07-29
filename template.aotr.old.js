var TemplateEngine = function(tpl, data) {
	var re = /<%([^%>]+)?%>/g, match;
    
    while(match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], data[match[1]])
    }
	
	return tpl;

}
