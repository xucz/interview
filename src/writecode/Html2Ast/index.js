let source = `
    <div>
        <span class="red">
            hello world
        </span>
    </div>
`;

let startTag = /<(\w+)\s*/;
let endTag = /<\/(\w+)>/
function parse(html) {
    let stack = [];
    while(html) {
        if (html.indexOf('</') === 0) {
            let end = html.match(endTag);
            let top = stack.pop();
            advance(end[0].length);
            if(end[1] !== top.tag) {
                throw new Error('html格式错误')
            }
            let parent = stack[stack.length - 1];
            if (parent) {
                !parent.children && (parent.children = []);
                parent.children.push(top)
            } else {
                return top;
            }
        } else if (html.indexOf('<') === 0) {
            let start = html.match(startTag);
            advance(start[0].length);
            let tag = start[1];
            let ast = {
                tag
            }
            let end = html.indexOf('>');
            let attr = html.slice(0, end);
            advance(end + 1);
            let attrArr = attr.split(/\s+/);
            ast.attr = attrArr;
            stack.push(ast);
        } else {
            let end = html.indexOf('<');
            let text = html.slice(0, end);
            advance(end)
            let ast = {
                tag: 'text',
                text: text.replace(/^\s+|\s+$/g, ' ')
            }
            let parent = stack[stack.length - 1];
            if (parent) {
                !parent.children && (parent.children = []);
                parent.children.push(ast);
            } else {
                return ast;
            }
        }
    }
    function advance(len) {
        html = html.slice(len);
    }
}

let result = parse(source.trim());
console.log('result = ' + JSON.stringify(result))
