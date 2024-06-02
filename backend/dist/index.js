import express from "express";
const app = express();
app.get("/", (req, res, next) => {
    res.render("Hello");
});
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map