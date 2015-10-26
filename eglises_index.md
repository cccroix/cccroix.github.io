---
layout: default
permalink: '/eglises/'
---

# Églises référencées

{% assign eglises = site.data.eglises %}

{% for e in site.eglises %}
{% assign eglise = eglises[e.eglise] %}
- [{{ eglise.nom }} ({{ eglise.lieu }})]({{ e.url }})
{% endfor %}
