const fs = require('fs');
const path = require('path');
function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\{\s*\/\*(?:(?!\*\/)[\s\S])*\*\/\s*\}/g, '');
    content = content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\//g, '');
    content = content.replace(/^[ \t]*\/\/.*$/gm, '');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    fs.writeFileSync(filePath, content);
}
function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}
['src/components', 'src/app', 'src/lib'].forEach(d => walk(path.join(process.cwd(), d)));
console.log('Comments removed robustly.');
