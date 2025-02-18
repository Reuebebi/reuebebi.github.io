const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;

    // Simple chatbot logic (Replace with your AI chatbot logic)
    let botMessage;
    if (userMessage.toLowerCase().includes('hello')) {
        botMessage = 'Hello! How can I assist you today?';
    } else {
        botMessage = 'Sorry, I did not understand that.';
    }

    res.json({ message: botMessage });
});

app.listen(port, () => {
    console.log(`Chatbot server is running at http://localhost:${port}`);
});
