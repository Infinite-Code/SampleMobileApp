export const updateUserName = (userName) => {
    return {
        type: 'TEST_UPDATE_USERNAME',
        data: userName,
    }
}

export const updateTimestamp = () => {
    return {
        type: 'TEST_UPDATE_TIMESTAMP',
    }
}
