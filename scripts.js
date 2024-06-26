const showAllButton = document.querySelector('.show-all')
const list = document.querySelector('.list')
const mapButton = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filter = document.querySelector('.filter-vegan')


// format value
function format(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

// showAll items
function showAll(items) {
    console.log(menuOptions)

    let newLi = ''

    items.forEach(item => {
        newLi = newLi + `        
        <li>
        <img src="${item.src}" >
        <p>${item.name}</p>
        <p class="price">${format(item.price)}</p>
        </li>        
        `
    })
    list.innerHTML = newLi
}

// map
function mapAll() {
    const newPrice = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9,

    }))
    showAll(newPrice)
}

// reduce
function sumAllItems() {
    const totalValur = menuOptions.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)

    list.innerHTML = `
        <li>A soma de todos os item do menu:<p class="price">${format(totalValur)}</p></li>
    `
}

// filter
function filterJustVegan() {
    const justVegan = menuOptions.filter(item => item.vegan)

    showAll(justVegan)
}

showAllButton.addEventListener('click', () => showAll(menuOptions))
mapButton.addEventListener('click', mapAll)
sumAll.addEventListener('click', sumAllItems)
filter.addEventListener('click', filterJustVegan)