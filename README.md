# Site web de la CC† Metz (communauté chrétienne de CentraleSupélec — campus de Metz)

[![Build Status](https://travis-ci.org/cccroix/cccroix.github.io.svg)](https://travis-ci.org/cccroix/cccroix.github.io)


## Aspect technique

Ce site est hébergé sur **github** en utilisant cf. [Jekyll with GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages/) & [Jekyll](http://jekyllrb.com/docs/home/) (sous licence MIT). Pour la recherche, nous avons utilisé [Tipue-Search
](https://github.com/Tipue/Tipue-Search).

Nous vous invitons fortement à prendre connaissance de la documentation de Jekyll avant de contribuer.

### Serveur de développement

À exécuter dans le dossier contenant ce fichier (`README.md`):
```sh
bundle
bundle exec jekyll serve
```

### Bibliothèques utilisées (*used libraries*)

- Animation CSS : [WOW.js](https://github.com/matthieua/WOW)
- Animation CSS : [animate.css](https://github.com/daneden/animate.css)
- *Responsive layout* : [Pure.css](http://purecss.io/)
- Images en plein écran : [intense-images](https://github.com/tholman/intense-images)
- Icônes : [Font Awesome](http://fontawesome.io/)
- Recherche : [Tipue Search](https://github.com/Tipue/Tipue-Search)

### Crédits

- Les image d'illustration des églises sont issues de WikimediaCommons.

## Conventions

### Images des articles
Les images doivent être dans des dossiers du type 201510 (pour le mois d'octobre2 2015) dans le dossier image. Les images sont nommés avec un nom clair, sans lettres accentuées et en remplacant les espaces par des _.

Pour les utiliser, on utilise ensuite la syntaxe suivante :
````
    ![titre_de_l'image]({{ site.baseurl }}/img/201510/nom_image.jpg)
````
