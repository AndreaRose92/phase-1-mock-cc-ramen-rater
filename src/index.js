const ramenMenu = document.getElementById('ramen-menu')

const ramenName = document.querySelector('.name')
const ramenImage = document.querySelector('.detail-image')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.getElementById('rating-display')
const ramenComment = document.getElementById('comment-display')

const newRamenForm = document.getElementById('new-ramen')

newRamenForm.addEventListener('submit', e => {
    e.preventDefault()

    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }

    renderRamenPic(newRamen)
})

fetch ('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(json => {
        json.forEach( ramen => {
            renderRamenPic(ramen)
        })
    })

function renderRamenPic(ramen) {
    const ramenPic = document.createElement('img')

    ramenPic.src = ramen.image
    ramenMenu.append(ramenPic)

    ramenPic.addEventListener('click', () => displayRamenInfo(ramen))
}

function displayRamenInfo(ramen) {
    ramenImage.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    ramenComment.textContent = ramen.comment
    ramenRating.textContent = ramen.rating
}

