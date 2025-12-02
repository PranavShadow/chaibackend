require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7000

const githubData = {
    
  "login": "PranavShadow",
  "id": 86196427,
  "node_id": "MDQ6VXNlcjg2MTk2NDI3",
  "avatar_url": "https://avatars.githubusercontent.com/u/86196427?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PranavShadow",
  "html_url": "https://github.com/PranavShadow",
  "followers_url": "https://api.github.com/users/PranavShadow/followers",
  "following_url": "https://api.github.com/users/PranavShadow/following{/other_user}",
  "gists_url": "https://api.github.com/users/PranavShadow/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PranavShadow/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PranavShadow/subscriptions",
  "organizations_url": "https://api.github.com/users/PranavShadow/orgs",
  "repos_url": "https://api.github.com/users/PranavShadow/repos",
  "events_url": "https://api.github.com/users/PranavShadow/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PranavShadow/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pranav Gupta",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Engineering Student",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 13,
  "following": 13,
  "created_at": "2021-06-20T14:44:48Z",
  "updated_at": "2025-12-02T09:32:09Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('Hi Twitter')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Hi Please Login</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>CNC</h2>')
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
