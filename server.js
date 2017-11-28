const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.get('/api/v1/projects', (request, response) => {
  response.status(200).json(app.locals.messages);
});

app.get('/api/v1/projects/:id', (request, response) => {
  const {
    id
  } = request.params;
  const message = app.locals.projects.find(project => project.id === id);

  if (project) {
    return response.status(200).json(project);
  } else {
    return response.sendStatus(404);
  }
});

app.post('/api/v1/projects', (request, response) => {
  const { project } = request.body;
  const id = Date.now();

  if (!project) {
    return response.status(422).send({
      error: 'sorry that project doesn't exist
    });
  } else {
    app.locals.projects.push({
      id,
      //prject name and empty object
    });
    return response.status(201).json({
      id,
      //prject name and empty object      
    });
  }
});