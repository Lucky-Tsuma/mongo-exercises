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

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id })
    // const course = await Course.findByIdAndRemove(id)
    console.log(result)
}

removeCourse('5a68fdf95db93f6477053ddd')

