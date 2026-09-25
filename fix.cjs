const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');

    // Fix <label for="..."> to <label htmlFor="...">
    content = content.replace(/for=/g, 'htmlFor=');

    // Remove empty Link to=""
    // The previous script turned <a href="#" class="nav-link active"> into <Link to="/">
    // Wait, the review said clicking active tab navigates to Home. Let's fix it by routing back to the correct path.
    const pageNameMap = {
        'Home.jsx': '/',
        'Moi.jsx': '/moi',
        'Etudes.jsx': '/etudes',
        'Competences.jsx': '/competences',
        'Experience.jsx': '/experience',
        'Projets.jsx': '/projets',
        'Contact.jsx': '/contact'
    };

    // We can use the active class to determine if it should be the current page
    // Actually, maybe we can just change <Link to="/" className="nav-link active"> to the specific page's path
    content = content.replace(/<Link([^>]*)to="\/([^"]*)"([^>]*)className="nav-link active"([^>]*)>/g, `<Link$1to="${pageNameMap[file]}"$3className="nav-link active"$4>`);

    // Ensure we don't break other <Link to="/"> which are meant to go to home (e.g. logo)
    // The logo uses class="logo", not nav-link active.

    // Also change <Link to="/" className="nav-link active"> to correct href. Wait, the previous regex might match too broadly.
    // Let's specifically target the active link issue.
    // The issue: the active tab link has `<Link href="#"...` in HTML which was converted to `<Link to="/">` with class="nav-link active".
    // We can find `<Link to="/" className="nav-link active">` and replace to="/" with to="CURRENT_PAGE_PATH"

    content = content.replace(/<Link([^>]*)to="\/([^"]*)"([^>]*)className="nav-link active"([^>]*)>/g, (match, before, toVal, middle, after) => {
        // If it's nav-link active, it should point to the current page
        return `<Link${before}to="${pageNameMap[file]}"${middle}className="nav-link active"${after}>`;
    });

    fs.writeFileSync(path.join(pagesDir, file), content);
});

// Fix FontAwesome missing by adding it to index.html
const indexHtmlPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
if (!indexHtml.includes('font-awesome')) {
    indexHtml = indexHtml.replace('</title>', '</title>\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />');
    fs.writeFileSync(indexHtmlPath, indexHtml);
}
