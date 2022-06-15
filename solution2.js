const mongoose = require('mongoose')

mongoose. connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to database...'))
    .catch(err => console.error('Error connecting to database: ', err))

// Schema: Class template
const coursesSchema = mongoose.Schema({
    tags: [ String ], 
    date: { type: Date, default: Date.now }, 
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

// model: Class, bundled
const Course = mongoose.model('Course', coursesSchema)  


async function displayCourses() {
    try {
        return await Course
                        .find({ isPublished: true, tags: { $in: [ 'frontend', 'backend' ] } })
                        // .or([ { tags: 'frontend' }, { tags: 'backend' } ])
                        .sort({ price: -1 })
                        .select({ name: 1, author: 1, price: 1 })
    } catch (error) {
        console.error('Error fetching courses: ', error)
    }
}

async function run () {
    const result = await displayCourses()
    console.log(result)
}

run()

