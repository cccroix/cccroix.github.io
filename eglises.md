---
layout: page
title: Églises
permalink: '/eglises/'
---

{% assign eglises = site.data.eglises %}

{% for e in site.eglises %}
{% assign eglise = eglises[e.eglise] %}
- [{{ eglise.nom }} ({{ eglise.lieu }})]({{ e.url }})
{% endfor %}
