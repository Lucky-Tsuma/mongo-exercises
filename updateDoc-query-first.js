const mongoose = require('mongoose')

mongoose. connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to database...'))
    .catch(err => console.error('Error connecting to database: ', err))

// Schema: Class template
const coursesSchema = mongoose.Schema({
    _id: String,
    tags: [ String ], 
    date: { type: Date, default: Date.now }, 
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

// model: Class, bundled
const Course = mongoose.model('Course', coursesSchema)  

async function updateCourse(id) {
    try {
        const course = await Course.findById(id)
        if(!course) return

        course.isPublished = true
        course.author = 'Another Author'

        /*
            We could set this way, alternatively: 
            course.set({
                isPublished: true,
                author: 'Another Author'
            })
        */
        const result = await course.save()
        console.log(result)
    } catch (error) {
        console.error('Error updating document: ', error)
    }
}

updateCourse('5a68fdf95db93f6477053ddd')
