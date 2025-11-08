fetch("ads")
    .then(response => response.url)
    .then(data => {
        const array = []

        data.forEach(element => {
            array.push(element)
        });
    })