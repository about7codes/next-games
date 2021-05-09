exports.handler = async () => {
    console.log('testFunc ran');

    const data = { name: 'Mark', age: 55, job: 'singer' }

    // return response to browser 
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}