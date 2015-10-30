---
layout: page
title: Églises
nav: Églises
position: 4
permalink: '/eglises/'
---

{% for eglise in site.eglises %}
- [{{ eglise.nom }} ({{ eglise.lieu }})]({{ eglise.url }})
{% endfor %}
