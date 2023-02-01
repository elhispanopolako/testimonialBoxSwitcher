
const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
const userImage = document.querySelector('.user-image')
const testimonials = [
    {
        name: 'Monica Marek',
        position: 'Data Science',
        photo: 'https://randomuser.me/api/portraits/women/47.jpg',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident consequuntur praesentium harum
        repellendus delectus totam nulla, quod ducimus omnis inventore, sapiente id modi fugiat ut similique.
        Distinctio numquam commodi cum impedit assumenda, optio deserunt voluptate earum, dolor harum tenetur
        laudantium explicabo corporis temporibus aperiam ducimus. Tempora fuga sequi suscipit illo'`
    },
    {
        name: 'Anton Lizzo',
        position: 'Singer',
        photo: 'https://randomuser.me/api/portraits/men/47.jpg',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident consequuntur praesentium harum
        repellendus delectus totam nulla, quod ducimus omnis inventore, sapiente id modi fugiat ut similique.
        Distinctio numquam commodi cum impedit assumenda, optio deserunt voluptate earum, dolor harum tenetur
        laudantium explicabo corporis temporibus aperiam ducimus. Tempora fuga sequi suscipit illo'`
    },
    {
        name: 'Bad Bunny',
        position: 'Doctor',
        photo: 'https://randomuser.me/api/portraits/men/48.jpg',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident consequuntur praesentium harum
        repellendus delectus totam nulla, quod ducimus omnis inventore, sapiente id modi fugiat ut similique.
        Distinctio numquam commodi cum impedit assumenda, optio deserunt voluptate earum, dolor harum tenetur
        laudantium explicabo corporis temporibus aperiam ducimus. Tempora fuga sequi suscipit illo'`
    }
]
let idx = 1
function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]
    console.log(testimonials[idx])
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}
updateTestimonial()
setInterval(updateTestimonial, 10000)
