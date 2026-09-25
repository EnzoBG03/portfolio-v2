const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html') && f !== 'index.html');
files.push('index.html'); // Ensure index.html is processed

files.forEach(file => {
    const htmlPath = path.join(srcDir, file);
    let content = fs.readFileSync(htmlPath, 'utf8');

    // Extract body content
    let match = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = match ? match[1] : content;

    // Remove script tags at the bottom
    bodyContent = bodyContent.replace(/<script[^>]*>.*?<\/script>/is, '');

    // Replace class= with className=
    bodyContent = bodyContent.replace(/class=/g, 'className=');

    // Replace <a href="internal.html"> with <Link to="/internal">
    // Specifically handle the mapping
    const pageNameMap = {
        'index.html': '/',
        'moi.html': '/moi',
        'etudes.html': '/etudes',
        'competences.html': '/competences',
        'experience.html': '/experience',
        'projets.html': '/projets',
        'contact.html': '/contact'
    };

    bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, before, href, after, innerText) => {
        if (href === '#') href = '/';

        let newHref = href;
        if (pageNameMap[href]) {
            newHref = pageNameMap[href];
        }

        if (newHref.startsWith('http') || newHref.startsWith('./Fichiers') || href.startsWith('mailto:')) {
            return `<a${before}href="${href}"${after}>${innerText}</a>`;
        }

        return `<Link${before}to="${newHref}"${after}>${innerText}</Link>`;
    });

    // Close open tags (img, input, hr, br, meta, link) for JSX
    bodyContent = bodyContent.replace(/<(img|input|hr|br|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2 />');

    // Convert style attributes to JSX style objects (rudimentary)
    bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styles) => {
        let styleObj = {};
        styles.split(';').forEach(s => {
            if (!s.trim()) return;
            let [key, value] = s.split(':');
            if(key && value) {
              key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              styleObj[key] = value.trim();
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Replace HTML comments
    bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');


    let componentName = file === 'index.html' ? 'Home' : file.charAt(0).toUpperCase() + file.slice(1).replace('.html', '');

    // Specific fix for "moi.html"
    if (componentName === 'Moi') componentName = 'Moi'; // Capitalize first letter

    let cssFile = file === 'index.html' ? 'style.css' : file.replace('.html', '.css');

    const jsx = `import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/${cssFile}';

function ${componentName}() {
  return (
    <>
      ${bodyContent}
    </>
  );
}

export default ${componentName};
`;

    fs.writeFileSync(path.join(pagesDir, `${componentName}.jsx`), jsx);
});
