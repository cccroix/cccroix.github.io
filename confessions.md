---
layout: page
title: Se confesser à Metz
permalink: /confessions/
date: 2015-10-26 22:54:00 CET
author: luc
nav: Confessions
blocnote: true
position: 3
published: false
---

{% assign confessions = site.data.confessions %}
{% assign eglises = site.eglises %}

## Liens utiles

- Il y a une feuille paroissiale à jour pour les églises du Centre-Ville [à cette adresse](http://cathometz.fr/), dans la barre latérale droite (« Annonces »).


<h2>Horaires de confessions <span class="source">{% include edit.html path='_data/confessions.yaml' %}</span></h2>

### Avertissements

Les horaires ci-dessous sont soumis aux aléas du temps. Il est donc conseillé de vérifier préalablement si l'on ne souhaite pas se casser le nez. Pour être sûr de trouver un prêtre, la meilleure solution reste de viser les messes.

Les confessions sont en revanche toujours assurées à la cathédrale Saint Étienne aux horaires indiqués (soit : après la messe capitulaire, ou entre 16h et 17h), ainsi qu’à la chapelle de la Nativité de la Très-Sainte-Vierge Marie aux horaires indiqués ci-dessous (le samedi et le dimanche).

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
