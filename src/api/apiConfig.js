const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f2c92427dca640d8fdc2462459640b83',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;