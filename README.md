<h1>Gulp</h1>

<h2>Exemple de configuration Gulp</h2>
<h3><a href="https://gulpjs.com/" target="_blank">https://gulpjs.com/</a></h3>

<h3>Pré-requis de Gulp</h3>
<ul>
<li>node.js : <a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a></li>
</ul>
<h3>Installer Gulp</h3>
<ul>
<li>npm install gulp -g</li>
<li>Mac OS ou Linux : sudo npm install gulp -g</li>
</ul>
<h3>Initialisation avec package.json</h3>
<ul>
<li>npm init</li>
<li>npm install gulp --save-dev</li>
<li>npm install gulp-<i>*nom-du-plugin*</i> --save-dev <i>(A répéter pour chaque plugin souhaité)</i></li>
<li>npm install <i>(installer tous les plugins listés dans le fichier package.json)</i></li>
</ul>
<h4>Exemple de configuration</h4>
<ol>
<li>Concaténation et minification des fichiers CSS (SCSS)</li>
<li>Concaténation et minification des fichiers JavaScript</li>
<li>Optimisation et compression d'images</li>
<li>Notification de fin de tâche</li>
</ol>
<p>package.json plugins</p>
<ul>
<li>gulp-autoprefixer</li>
<li>gulp-cssbeautify</li>
<li>gulp-csscomb</li>
<li>gulp-cssimport</li>
<li>gulp-csso</li>
<li>gulp-imagemin</li>
<li>gulp-load-plugins</li>
<li>gulp-minify</li>
<li>gulp-notify</li>
<li>gulp-rename</li>
<li>gulp-sass</li>
</ul>
<p>gulpfile.js tasks</p>
<ul>
<li>scss</li>
<li>JavaScript</li>
<li>Images</li>
</ul>
