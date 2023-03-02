export default (toastList) => {
    const a = toastList.reduce((obj, toast) => {
        if (!toast) return { ...obj };
        obj[toast.position] = obj[toast.position]
            ? [...obj[toast.position], toast]
            : [toast];
        return { ...obj };
    }, {});
    return Object.entries(a);
};
