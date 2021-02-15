module.exports = rows =>{
    return new Promise((resolve, reject) => {
        try{
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''));

            resolve(words);
        }catch(e){
            reject(e);
        }
    });
}

function filterValidRow(row){
    //It will verify if what was parsed was not a number
    const notNumber = !parseInt(row.trim());
    //Removes blank spaces from lines and set those empty lines as false, or true if they are not empty
    const notEmpty = !!row.trim();
    //Not time stamps of the subtitles;
    const notInterval = !row.includes('-->');
    return  notNumber && notEmpty && notInterval;
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '');
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;