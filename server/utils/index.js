const qs = require('query-string');

function getParamsFromUrl(url, convert) {
    const query = qs.parseUrl(url).query;
    if (typeof convert === 'function') {
        return Object.entries(query).reduce((prev, [k, v]) => {
            prev[k] = convert(v);
            return prev;
        }, {});
    }
    return query;
}

function getHeaders(originHeaders) {
    const headers = {};

    originHeaders['x-forwarded-for'] &&
        (headers['X-Forwarded-For'] = originHeaders['x-forwarded-for']);
    originHeaders['cookie'] && (headers['Cookie'] = originHeaders['cookie']);
    originHeaders['x-real-ip'] &&
        (headers['X-Real-IP'] = originHeaders['x-real-ip']);
    originHeaders['referer'] && (headers['Referer'] = originHeaders['referer']);
    originHeaders['user-agent'] &&
        (headers['User-Agent'] = originHeaders['user-agent']);
    originHeaders['content-type'] &&
        (headers['content-type'] = originHeaders['content-type']);

    return headers;
}

module.exports = {
    getParamsFromUrl
};
