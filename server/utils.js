const moment = require('moment');

const isValidUnix = (str) => {
    const numberTimestamp = Number(str);
    if (str != numberTimestamp) {
        return false;
    }
    const strMoment = moment(numberTimestamp);
    if (strMoment.isValid()) {
        return {
            validation: true,
            naturalVal: strMoment.format('MMMM D, YYYY')
        }
    } else {
        return {
            validation: false,
            naturalVal: null
        }
    }
}

const isValidNatural = (str) => {
    const strMoment = moment(decodeURIComponent(str), 'MMMM D, YYYY', true);
    console.log(strMoment);
    if (strMoment.isValid()) {
        return {
            validation: true,
            unixVal: Number(strMoment.format('x'))
        }
    } else {
        return {
            validation: false,
            unixVal: null
        }
    }
}

module.exports = {
    isValidUnix,
    isValidNatural
}

