import express from "express";


const app = express();
const port = 3000;


app.get("/git-info", (req, res) => {
  res.json({
    title: "My Learnings from the Git Workshop",
    overview:
      "The Git workshop helped me understand the fundamentals of version control and collaborative software development using Git and GitHub.",
    concepts_learned: [
      "Version control and its importance in teamwork",
      "Repository creation and initialization",
      "Staging and committing changes",
      "Branching and merging workflow",
      "Handling merge conflicts",
      "Working with remote repositories (clone, push, pull)",
      "Pull requests and collaborative review process"
    ],
    commands_practiced: [
      "git init",
      "git clone",
      "git add",
      "git commit",
      "git push",
      "git pull",
      "git branch",
      "git merge",
      "git status",
      "git log"
    ],
    skills_gained: [
      "Collaborating on shared repositories",
      "Maintaining a clean commit history",
      "Understanding Git workflow in real projects",
      "Using GitHub for open-source contribution",
      "Improving debugging and version management skills"
    ],
    key_takeaway:
      "Git is not just a tool — its a fundamental part of efficient, modern software development. The workshop gave me the confidence to manage code collaboratively and contribute to real-world projects using Git and GitHub."
  });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});