const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
        .then((response) => response.json())
        .then((data) => setStorageData(data))
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

    const setStorageData = (data) => {
        localStorage.setItem('data', JSON.stringify(data))
        const goods = JSON.parse(localStorage.getItem('data'))
        console.log(goods);
    }
}
getGoods();