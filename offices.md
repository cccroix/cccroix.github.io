---
layout: page
title: Horaires des offices
permalink: /offices/
published: true
---

## Messes du dimanche

### À proximité de Supélec
<ul>
{% for messe in site.data.messes_dimanche %}
{% if messe.lieu == "Queuleu" or messe.lieu == "Borny" %}
  <li><strong>{{messe.horaire}}
      –</strong>  {{ messe.eglise }} (<a href="{{messe.lien_lieu}}">
      {{messe.lieu}}</a> )
      {% if messe.remarque  %}
      (<em>{{ messe.remarque }}</em>)
      {% endif %}
      {% if messe.site  %}
      – <a href="{{ messe.site }}">Site</a>
      {% endif %}   
  </li>
{% endif %}
{% endfor %}
</ul>

### Dans Metz
<ul>
{% for messe in site.data.messes_dimanche %}
{% if messe.lieu == "Metz" %}
  <li><strong>{{messe.horaire}}
      –</strong>  {{ messe.eglise }} (<a href="{{messe.lien_lieu}}">
      {{messe.lieu}}</a> )
      {% if messe.remarque  %}
      (<em>{{ messe.remarque }}</em>)
      {% endif %}
      {% if messe.site  %}
      – <a href="{{ messe.site }}">Site</a>
      {% endif %}   
  </li>
{% endif %}
{% endfor %}
</ul>
