---
layout: page
title: Se confesser à Metz
permalink: /confessions/
date: 2015-10-26 22:54:00 CET
author: luc
published: true
---

{% assign confessions = site.data.confessions %}
{% assign eglises = site.data.eglises %}

## Avertissements
Ces horaires sont soumis aux aléas du temps. Il est donc conseillé de vérifier préalablement si l'on ne souhaite pas se casser le nez. Pour être sûr de trouver un prêtre, la meilleure solution reste de viser les messes.

Les confessions sont en revanche toujours assurées à la cathédrale Saint Étienne aux horaires indiqués (soit : après la messe capitulaire).

{% assign semaine = "lundi mardi mercredi jeudi vendredi samedi dimanche" | split: ' ' %}

{% for jour in semaine %}
### {{ jour | capitalize }}
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for j in confession.jour %}
{% if j == jour %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html){% if confession.remarque %}<em> – {{ confession.remarque }}</em>{% endif %}
{% endif %}
{% endfor %}{% comment %} confessions in confessions {% endcomment %}
{% endfor %}{% comment %} j in confession.jour {% endcomment %}
{% endfor %}{% comment %} jour in semaine {% endcomment %}


## Sources

- [cette photo prise à la cathédrale le 25 oct. 2015]({{ '/img/201510/confessions_metz.jpg' | prepend: site.baseurl }})
- [cette autre photo prise à la cathédrale le 25 oct. 2015]({{ '/img/201510/messes_cathedrale.jpg' | prepend: site.baseurl }})
