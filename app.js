let express = require('express');

let App = express();

App.get('/', function (req, res) {
    res.send(`
    <form action="/answer" method="POST">
     <h3>¿Que color tiene el cielo en un limpio y soleado dia?</h3>
     <input name="skyColor" autocomplete="off"></input>
     <button>Enviar respuesta</button>
    </form>
    `)
})

App.listen(3000);