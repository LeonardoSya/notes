async () => {
    try {
        // return await fn()
        const res = await fn()
        return res
    } catch (error) {

    }
}

function fn() { }