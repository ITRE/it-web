# ITRE Documentation

The Institute for Transportation Research and Education (ITRE) is an institutional center located at NC State University.

This site is a living repository for ITRE IT & Web related documentation. Best efforts have been made to give a comprehensive overview to the necessary information and workflows of the department. Editing and modification of this information over time is both expected and encouraged.

This site is built using VuePress. General documentation can be found [on their website.](https://vuepress.vuejs.org/guide/)

## Docs
The main documentation for the site. README.md in each subdirectory of this folder becomes an index.html page for that portion of the site.

### .vuepress
The VuePress configurations for the site.

### Images
Folder for image assets. Linked using `@images` to reference the webpack alias defined in `.vuepress/config.js` to allow for future structure changes. If moving or renaming this folder, simply change the webpack alias to fix any linked images.

### .vuepress/public
Static assets not directly referenced or included in the document files. This folder is directly copied into the root of the generated site, allowing for things such as favicons.
