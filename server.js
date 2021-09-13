const express = require('express');
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/masai-students-api", {
        useCreateIndex: true,
        useFindAndModify:false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

//age
//course
//gender
//batch
//instructor
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: false },
    course: { type: String, required: true },
    batch: { type: String, required: true },
    instructor: { type: String, required: true },

});

const student = mongoose.model("student", userSchema);
app.use(express.json);
app.post("/student", async(req, res)=>{
    const student = await Student.create(req.body);
    return res.status(201).json({student});
})

app.get("/student", async(req, res) => {
    const student = await Student.find().lean().exec();
    return res.status(200).json({ students });
});

app.get("/student/:id", async(req, res) => {
    const student = await Student.findById(req.params.id).lean().exec();
    return res.status(200).json({ students });
});
app.patch("/student/:id", async(req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new:true })
    return res.status(201).json({ students });
});
app.delete("/student/:id", async(req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    return res.status(200).json({ students });
})

const app = express();

app.listen(2348, async function(){

await connect();
console.log("server running on port no 2348");
});