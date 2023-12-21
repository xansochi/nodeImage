const {resolve} = require('path');

function imageController (req, res) {
    const testFolder = './images/';
    const fs = require('fs');
    const randomimagenum = Math.floor(Math.random() * 500);
    const files = fs.readdirSync(testFolder);
    const filepath = './images/' + files[0];
    const absolutePath = resolve('./images/' + files[randomimagenum]);
    res.sendFile(absolutePath);
}

module.exports = imageController