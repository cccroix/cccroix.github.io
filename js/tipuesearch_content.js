---
layout: null
---

var tipuesearch = {"pages": [
{% for page in site.html_pages %}
  {% if page.insearch != false or page.insearch == nil %}
        {% assign text = page.content %}
    {"title": "{{ page.title }}","text": {{ text | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{ tag }}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{ page.url | replace: 'index.html', '' | prepend: site.baseurl }}"},
  {% endif %}
{% endfor %}
{% for page in site.posts %}
  {% if page.insearch != false or page.insearch == nil %}
        {% assign text = page.content %}
    {"title": "{{ page.title }}","text": {{ text | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{ tag }}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{ page.url | replace: 'index.html', '' | prepend: site.baseurl }}"},
  {% endif %}
{% endfor %}
{% for eglise in site.eglises %}
    {% assign text = eglise.content %}
    {"title": "Église {{ eglise.nom }} ({{ eglise.lieu }})","text": {{ text | jsonify | strip_html }}, "tags": "{{ eglise.key }}, {% if eglise.tags %}{% for tag in eglise.tags %}{{ tag }}, {% endfor %}, église{% endif %}","url":"{{ eglise.url | replace: 'index.html', '' | prepend: site.baseurl }}"},
{% endfor %}
]};
