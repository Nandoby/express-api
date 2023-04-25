class errorResponse {
    constructor(message, code = 400) {
        this.message = message 
        this.code = code 
    }
}

module.exports = errorResponse 