# [GULP](https://gulpjs.com/)
## Exemple de configuration Gulp
### Pré-requis de Gulp
* [node.js](https://nodejs.org/en/)
### Installer Gulp
* npm install gulp -g
* Mac OS ou Linux : sudo npm install gulp -g
### Initialisation avec package.json
* npm init
* npm install gulp --save-dev
* npm install gulp-*nom-du-plugin* --save-dev <i>(A répéter pour chaque plugin souhaité)</i>
* npm install *(installer tous les plugins listés dans le fichier package.json)*
#### Exemple de configuration
1. Concaténation et minification des fichiers CSS (SCSS)
2. Concaténation et minification des fichiers JavaScript
3. Optimisation et compression d'images
4. Notification de fin de tâche

package.json plugins

* gulp-autoprefixer
* gulp-cssbeautify
* gulp-csscomb
* gulp-cssimport
* gulp-csso
* gulp-imagemin
* gulp-load-plugins
* gulp-minify
* gulp-notify
* gulp-rename
* gulp-sass

gulpfile.js tasks

* scss
* JavaScript
* Images
