---
layout: page
title: Se confesser à Metz
permalink: /confessions/
date: 2015-10-26 22:54:00 CET
author: luc
nav: true
published: true
---

{% assign confessions = site.data.confessions %}
{% assign eglises = site.eglises %}

## Avertissements
Ces horaires sont soumis aux aléas du temps. Il est donc conseillé de vérifier préalablement si l'on ne souhaite pas se casser le nez. Pour être sûr de trouver un prêtre, la meilleure solution reste de viser les messes.

Les confessions sont en revanche toujours assurées à la cathédrale Saint Étienne aux horaires indiqués (soit : après la messe capitulaire).

<h2>Horaires de confessions <span class="source">{% include edit.html path='_data/confessions.yaml' %}</span></h2>

{% assign semaine = "lundi mardi mercredi jeudi vendredi samedi dimanche" | split: ' ' %}

{% for jour in semaine %}
### {{ jour | capitalize }}
{% for confession in confessions %}{% if confession.jour contains jour %}
{% assign eglise = eglises | where: "key", confession.eglise | first %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html){% if confession.remarque %}<em> – {{ confession.remarque }}</em>{% endif %}
{% endif %}{% endfor %}
{% endfor %}


## Sources

- [cette photo prise à la cathédrale le 25 oct. 2015]({{ '/img/201510/confessions_metz.jpg' | prepend: site.baseurl }})
- [cette autre photo prise à la cathédrale le 25 oct. 2015]({{ '/img/201510/messes_cathedrale.jpg' | prepend: site.baseurl }})
