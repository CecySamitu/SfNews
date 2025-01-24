document.addEventListener('DOMContentLoaded', () => {
    const url = "https://api.spaceflightnewsapi.net/v4/articles/";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articlesDiv = document.getElementById('articles');
            data.results.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');

                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <img src="${article.image_url}" alt="Image of new" class="news-image" />
                    <p>${article.summary}</p>
                    <p><strong>Updated date:</strong> ${new Date(article.updated_at).toLocaleDateString()}</p>
                    <a href="${article.url}" target="_blank">Read more > </a>
                `;
                articlesDiv.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error:', error));
});
