import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    year: String,
    ig: String
})

const student = mongoose.model('student', studentSchema)

export default student