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
        const result = await Course.updateOne({ _id: id }, { $set: { author: 'Tsuma Mumba', isPublished: false } })
        console.log(result)
    } catch (error) {
        console.error('Error updating document: ', error)
    }
}

updateCourse('5a68fdf95db93f6477053ddd')

// Check and read on findByIdAndUpdate
