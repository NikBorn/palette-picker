const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Palette Picker';

app.get('/', (request, response) => {
});

app.get('/projects', (request, response) => {
  response.send('projects placeholder!');
});

app.get('/projects/:id', (request, response) => {
  response.send('projects ID placeholder!');
});

// app.get('/projects/:id/palettes' (request, response) => {
//   response.send('project palettes placeholder');
// });

// app.get('/projects/:id/palettes/:id', (request, response) => {
//   response.send('project palettes ID placeholder');
// });

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});