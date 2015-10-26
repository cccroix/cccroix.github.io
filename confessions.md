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

## Dimanche
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "dimanche" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}

## Lundi
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "lundi" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}

## Mardi
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "mardi" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}

## Mercredi
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "mercredi" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}

## Jeudi
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "jeudi" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}

## Vendredi
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "vendredi" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}

## Samedi
{% for confession in confessions %}
{% assign eglise = eglises[confession.eglise] %}
{% for jour in confession.jour %}
{% if jour == "samedi" %}
- <strong>{{ confession.horaire }}{% if confession.horairefin  %} – {{ confession.horairefin }} {% endif %}</strong> – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ confession.eglise }}.html)
{% endif %}
{% endfor%}
{% endfor%}
