---
layout: page
title: Horaires des offices
permalink: /offices/
date: 2015-10-26 11:00:00 CET
author: luc
nav: true
published: true
---

<h2>Messes du dimanche <span class="source">{% include edit.html path='_data/messes_dimanche.yaml' %}</span></h2>


{% assign messes = site.data.messes_dimanche %}
{% assign eglises = site.eglises %}

### À proximité de Supélec

{% for messe in messes %}
{% assign eglise = eglises | where: "key", messe.eglise | first %}
{% if eglise.lieu == "Borny" or eglise.lieu == "Queuleu" %}
- **{{ messe.horaire }}** – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ messe.eglise }}.html) {% if messe.remarque  %} – <em>{{ messe.remarque }}</em>{% endif %}{% if messe.site  %} – <a href="{{ messe.site }}"><i class="fa fa-link"></i> lien</a>{% endif %}
{% endif %}
{% endfor %}

### Dans Metz

{% for messe in messes %}
{% assign eglise = eglises | where: "key", messe.eglise | first %}
{% if eglise.lieu != "Borny" and eglise.lieu != "Queuleu" %}
- **{{ messe.horaire }}** – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ messe.eglise }}.html) {% if messe.remarque  %} – <em>{{ messe.remarque }}</em>{% endif %}{% if messe.site  %} – <a href="{{ messe.site }}"><i class="fa fa-link"></i> lien</a>{% endif %}
{% endif %}
{% endfor %}

## Sources

- [cette photo prise à la cathédrale le 25 oct. 2015]({{ '/img/201510/messes_metz.jpg' | prepend: site.baseurl }})
- [cette autre photo prise à la cathédrale le 25 oct. 2015]({{ '/img/201510/messes_cathedrale.jpg' | prepend: site.baseurl }})
