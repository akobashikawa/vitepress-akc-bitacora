import fs from "fs";
import path from "path";

function getSideBar(folder, title, desc, collapsed) {
    const extension = [".md"];

    let files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
            (item) =>
                item.toLowerCase() != "index.md" &&
                fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
                extension.includes(path.extname(item))
        );

    if (desc) {
        files = files.reverse();
    }

    const items = files.map(item => {
        const text = item.slice(0, -3);
        const link = `/${folder}/${text}`;
        return { text, link };
    });

    const link = `/${folder}/`;

    return { text: title, link, collapsed, items };
}

export {
    getSideBar
}