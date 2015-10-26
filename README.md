# Site web de la CC† Metz (communauté chrétienne de CentraleSupélec — campus de Metz)

[![Build Status](https://travis-ci.org/cccroix/cccroix.github.io.svg)](https://travis-ci.org/cccroix/cccroix.github.io)


## Aspect technique

Ce site est hébergé sur **github** en utilisant cf. [Jekyll with GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages/) & [Jekyll](http://jekyllrb.com/docs/home/) (sous licence MIT).

Nous vous invitons fortement à prendre connaissance de la documentation de Jekyll avant de contribuer.

## Conventions

### Images des articles
Les images doivent être dans des dossiers du type 201510 (pour le mois d'octobre2 2015) dans le dossier image. Les images sont nommés avec un nom clair, sans lettres accentuées et en remplacant les espaces par des _.

Pour les utiliser, on utilise ensuite la syntaxe suivante :
    ![titre_de_l'image]({{ basesite.url }}/img/201510/nom_image.jpg)
