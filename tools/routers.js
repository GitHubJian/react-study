const { existsSync, readFileSync } = require('fs');
const { resolve, relative, dirname } = require('path');
const pathConfig = {
    pages: resolve(__dirname, '../src/pages'),
    dist: resolve(__dirname, '../dist')
};

const pages = resolve(__dirname, '../src/pages');
const routers = glob.sync(`${pathConfig.pages}/**/index.jsx`);

const entry = {},
    pagesConfig = [];

routers.forEach(v => {
    const entryKey = dirname(relative(pages, v));
    const entryVal = relative(pathConfig.dist, entryKey, 'index.js');

    entry[entryKey] = entryVal;

    pagesConfig.push({
        jsxPath: v,
        outputPath: entryKey,
        entryPath: entryVal,
        extra: Object.assign(
            {
                title: projectConfig.title,
                layout: '',
                metas: []
            },
            entraData[entryKey]
        )
    });
});

pagesConfig.forEach(v => {
    const { jsxPath } = v;
    const content = readFileSync(jsxPath).toString();
    const templateContent = content.match(/<template>(\n|.)<\/template>/);

    if (!templateContent) {
        return;
    }
});
