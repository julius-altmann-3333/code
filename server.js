const axios = require("axios");

app.post("/submit", async (req, res) => {
    const { name } = req.body;
    const content = `<p>${name}</p>\n`;
    const filePath = "public/submissions.html";

    try {
        const response = await axios.put(
            `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/${filePath}`,
            {
                message: "New submission",
                content: Buffer.from(content).toString("base64"),
                sha: "", // Fetch latest SHA if updating
            },
            { headers: { Authorization: `token YOUR_GITHUB_TOKEN` } }
        );
        res.send("Data stored in GitHub!");
    } catch (error) {
        res.status(500).send("Error storing data.");
    }
});
