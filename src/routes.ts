import express from 'express';

const routes = express.Router();




routes.post('/classes', (request, response) => {
    
    const data = request.body;



    return response.json();

});

export default routes;