import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-mag.kursksu.ru'
})

export const pageAPI = {
    getData(page) {
        return instance.get('/api/v1/page/?name=' + page)
    }
}

export const magazineAPI = {
    getArchive(page) {
        return instance.get('/api/v1/archive/' + page)
    },
    getNumber(numberId) {
        return instance.get(`/api/v1/number/?id=` + numberId)
    },
    getNewNumber() {
        return instance.get(`/api/v1/number/`)
    }
}

export const generalAPI = {
    getTotalStatistic() {
        return instance.get('/api/v1/total_statistic/')
    },
    getMostViewedArticles() {
        return instance.get('/api/v1/most_viewed_articles/')
    },
}

export const searchAPI = {
    searchAuthor(value) {
        return instance.post('/api/v1/search/', value, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}