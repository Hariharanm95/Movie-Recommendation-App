const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c168b2644ba1efe5909b2f5a8353d171',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;