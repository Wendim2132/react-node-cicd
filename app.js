const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello this is home page")
})
app.get("/names", (req, res) => {
    res.json({
        name: "Wendim"
    })

})
app.all("*", (req, res) => {
    res.send("The page not found")
})
app.listen(5000, () => console.log("Server is listening on port 5000"))