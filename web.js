const express = require('express');
const avatarsMiddleware = require('adorable-avatars');

const app = express();
app.use('/', avatarsMiddleware);

app.listen(process.env.PORT || 3000);
