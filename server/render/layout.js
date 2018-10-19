module.exports = function(content, initState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>React App</title>
            </head>

            <body>
                <div id="root">${content}</div>
                <script>window.__INITIAL_STATE__ =${JSON.stringify(
                    initState
                )}</script>
                <!--script type="text/javascript" src="/static/js/main.js"></script-->
            </body>
        </html>
    `;
};
