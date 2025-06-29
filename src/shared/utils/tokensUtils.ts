interface ITokens {
    accessToken: string;
    refreshToken: string;
}

export function setTokens(tokens: ITokens) {
    if (tokens && tokens.accessToken) {
        localStorage.setItem('accessToken', JSON.stringify(tokens.accessToken))
    }
    if (tokens && tokens.refreshToken) {
        localStorage.setItem('refreshToken', JSON.stringify(tokens.refreshToken))
    }
}

export function getTokens() {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return {
        accessToken: accessToken?.replace(/^"|"$/g, ''),
        refreshToken: refreshToken?.replace(/^"|"$/g, ''),
    }
}

export function clearTokens() {
    localStorage.clear()
}