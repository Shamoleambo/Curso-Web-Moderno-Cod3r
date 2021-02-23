//The app below represents the instance of the express in the first line of the index.js file
module.exports = app =>{
    const save = (req, res)=>{
        res.send('user save');
    }

    return {save}
}