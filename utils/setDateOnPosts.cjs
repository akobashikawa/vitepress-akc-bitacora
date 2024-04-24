const fs = require('fs');
const path = require('path');

const postsFolder = './docs/posts';

function getDateFromFilename(filename) {
    const match = filename.match(/^(\d{8})-/);
    if (match) {
        const dateString = match[1];
        return `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6)}`;
    }
    return null;
}

function updateFrontmatter(filePath, date) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error al leer el archivo ${filePath}: ${err}`);
            return;
        }

        const re_hasDate = /(date:\s*)(.*)/;

        let newContent;

        if (re_hasDate.test(data)) {
            newContent = data.replace(re_hasDate, `$1${date}`);
        } else {
            const re_inFrontmatter = /(---\n.*?\n)(---)/s;
            newContent = data.replace(re_inFrontmatter, `$1date: ${date}\n$2`);

        }

        fs.writeFile(filePath, newContent, 'utf8', (err) => {
            if (err) {
                console.error(`Error al escribir en el archivo ${filePath}: ${err}`);
            } else {
                console.log(`Frontmatter actualizado en ${filePath}`);
            }
        });
    });
}

fs.readdir(postsFolder, (err, files) => {
    if (err) {
        console.error(`Error al leer la carpeta de posts: ${err}`);
        return;
    }

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(postsFolder, file);
            const date = getDateFromFilename(file);
            if (date) {
                // console.log(`updateFrontmatter(${filePath}, ${date})`);
                updateFrontmatter(filePath, date)
            } else {
                console.warn(`No se pudo obtener la fecha del nombre del archivo ${file}`);
            }
        }
    });
});