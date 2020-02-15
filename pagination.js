module.exports = (url, req, array) => {
    const getNextPageUrl = (current_page, total_pages, url_prefix) => {
        return current_page < total_pages ? `${url_prefix}${current_page + 1}` : null
    }
    const getPrevPageUrl = (current_page, url_prefix) => current_page > 1 ? `${url_prefix}${current_page - 1}` : null
    const perPage = 'perPage' in req.query && Number(req.query.perPage) ? Number(req.query.perPage) : 4;
    const currentPage = 'page' in req.query && Number(req.query.page) ? Number(req.query.page) : 1;
    const urlPrefix = url;
    const pages = Math.ceil(array.length / perPage);
    return {
        info: {
            count: array.length,
            pages,
            next: getNextPageUrl(currentPage, pages, urlPrefix),
            prev: getPrevPageUrl(currentPage, urlPrefix),
            currentPage,
            perPage,
        },
        results: array.slice((currentPage - 1) * perPage, currentPage * perPage)
    }
}