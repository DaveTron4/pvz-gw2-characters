# WEB103 Project 2 - *The Almanac*

Submitted by: **David Salas C.**

About this web app: **The Almanac is a Plants vs. Zombies: Garden Warfare 2 character encyclopedia and API. It lets you browse every character and their variants, view detailed descriptions and images, and explore the relationships between base classes and their variants.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**


The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/YSm90Qo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

While building this project, I faced several challenges. I had to restructure my database and update all the routing names, which initially broke the app and left me stuck for a while. The issue turned out to be that I needed to update the proxy settings in vite.config.js to match the new routes. I also struggled with setting up PostgreSQL on my machine, eventually realizing I had to add the bin folder to my environment variables under PATH to get psql working properly.

## License

Copyright 2025 David Salas C.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.