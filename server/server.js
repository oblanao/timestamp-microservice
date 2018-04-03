const express = require('express');
const path = require('path');

const {isValidUnix, isValidNatural} = require('./utils');

const app = express();
const publicPath = path.join(__dirname+'/../public');

const port = process.env.PORT || 3000;

app.get('/:str', (req, res) => {
    let unixVal = null;
    let naturalVal = null;
    if (isValidUnix(req.params.str).validation) {
        unixVal = Number(req.params.str);
        naturalVal = isValidUnix(req.params.str).naturalVal;
    } else if (isValidNatural(req.params.str).validation) {
        unixVal = isValidNatural(req.params.str).unixVal,
        naturalVal = decodeURIComponent(req.params.str)
    }
    res.send({
        unix: unixVal,
        natural: naturalVal
    }).end();
});

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})