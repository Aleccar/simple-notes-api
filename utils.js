// A file to make utility functions.

const getIndexById = (id, elementList) => {
    return elementList.findIndex((element) => {
        return element.id === id
    });
};




module.exports = { getIndexById }