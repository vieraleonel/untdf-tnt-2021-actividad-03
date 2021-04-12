import express from 'express';

// Constants
console.log(process.env.PORT);
const PORT = process.env.PORT;

// App
const app = express();
app.get('/', function (req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test 1</title>
        </head>
        <body>
            <div style="display: flex; width: 95vw; height: 95vh; justify-content: center; align-items: center;">
                <h1>Deploy on Heroku</h1>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);