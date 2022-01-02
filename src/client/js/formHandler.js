const postData = async(url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const fetchedData = await response.json();
        return fetchedData;
    } catch (error) {
        console.log(error)
    }
}

export const handleSubmit = (e) => {
    e.preventDefault();
    let articleUrl = document.getElementById('article-url').value
    if (Client.urlChecker(articleUrl)) {
        postData('http://localhost:8081/api', { url: articleUrl }).then(res => {
            document.getElementById('agreement').innerHTML = "agreement: " + res.agreement;
            document.getElementById('subjectivity').innerHTML = "subjectivity: " + res.subjectivity;
            document.getElementById('confidence').innerHTML = "confidence: " + res.confidence;
            document.getElementById('irony').innerHTML = "irony: " + res.irony;
            document.getElementById('score_tag').innerHTML = "score_tag: " + res.score_tag;
        })
    } else {
        alert("Please enter a valid url")
    }
}