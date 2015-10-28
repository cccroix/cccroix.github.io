---
layout: page
title: Églises
nav: true
permalink: '/eglises/'
---

{% for eglise in site.eglises %}
- [{{ eglise.nom }} ({{ eglise.lieu }})]({{ eglise.url }})
{% endfor %}
