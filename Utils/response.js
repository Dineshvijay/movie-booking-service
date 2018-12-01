const successJSON = (result, code) => {
    return {
        code: code,
        status: "success",
        response: result,
        error: null  
    }
}

const errorJSON = (result, code) => {
    return {
        code: code,
        status: "fail",
        response: null,
        error: result
    }
}

module.exports = {
    successJSON,
    errorJSON
}