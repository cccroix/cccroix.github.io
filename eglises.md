---
layout: page
title: Églises
permalink: '/eglises/'
---

{% for eglise in site.eglises %}
- [{{ eglise.nom }} ({{ eglise.lieu }})]({{ eglise.url }})
{% endfor %}
