---
layout: page
title: Horaires des offices
permalink: /offices/
date: 2015-10-26 11:00:00 CET
author: luc
published: true
---

## Messes du dimanche

{% assign messes = site.data.messes_dimanche %}
{% assign eglises = site.data.eglises %}

### À proximité de Supélec

{% for messe in messes %}
{% assign eglise = eglises[messe.eglise] %}
{% if eglise.lieu == "Borny" or eglise.lieu == "Queuleu" %}
- **{{ messe.horaire }}** – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ messe.eglise }}.html) {% if messe.remarque  %}(<em>{{ messe.remarque }}</em>) {% endif %}{% if messe.site  %} – <a href="{{ messe.site }}"><i class="fa fa-link"></i> lien</a>{% endif %}
{% endif %}
{% endfor %}

### Dans Metz

{% for messe in messes %}
{% assign eglise = eglises[messe.eglise] %}
{% if eglise.lieu != "Borny" and eglise.lieu != "Queuleu" %}
- **{{ messe.horaire }}** – [<i class="fa fa-map-marker"></i> {{ eglise.nom }} ({{ eglise.lieu }})](/eglises/{{ messe.eglise }}.html) {% if messe.remarque  %}(<em>{{ messe.remarque }}</em>) {% endif %}{% if messe.site  %} – <a href="{{ messe.site }}"><i class="fa fa-link"></i> lien</a>{% endif %}
{% endif %}
{% endfor %}
