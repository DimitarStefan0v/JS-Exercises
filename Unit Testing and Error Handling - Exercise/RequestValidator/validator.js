function validate(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^([\w.]+)$/;
    const messagePattern = /([<>\\&'"])/;

    if (!obj.method || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.version || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!obj.uri || !uriPattern.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (obj.message == undefined || messagePattern.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

const objInput = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

const validator = validate(objInput);
console.log(validator);