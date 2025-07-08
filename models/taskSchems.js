const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
    userid:mongoose.Schema.Types.ObjectId,
    title:String,
    time:Date,
    completed:Boolean,
    Important:Boolean
})

module.exports = mongoose.model("Task",taskSchema);