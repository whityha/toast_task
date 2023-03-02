export default (object) => {
    const newObject = {};
    Object.entries(object)
        .filter((array) => array[1])
        .forEach((array) => {
            const [key, value] = array;
            newObject[key] = value;
        });
    return newObject;
};
