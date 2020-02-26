const server = require('./app');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log(`server is listening on http://localhost:${PORT}`)
});