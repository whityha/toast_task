export default (toastList) => {
    const sortedPositionOfToasts = toastList.reduce((obj, toast) => {
        obj[toast.position] = obj[toast.position]
            ? [...obj[toast.position], toast]
            : [toast];
        return { ...obj };
    }, {});
    return Object.entries(sortedPositionOfToasts);
};
