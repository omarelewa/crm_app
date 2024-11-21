// index.js
const express = require('express');
const accountRoutes = require('./routers/accounts');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/accounts', accountRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
