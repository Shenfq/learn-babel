export default (obj) => {
    return Object.assign(...obj, {
        'job': 'FE'
    });
};