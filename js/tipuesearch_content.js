---
layout: null
---

var tipuesearch = {"pages": [
{% for page in site.html_pages %}
  {% if page.insearch != false or page.insearch == nil %}
        {% assign text = page.content %}
    {"title": "{{ page.title }}","text": {{ text | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{ tag }}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{ page.url }}"},
  {% endif %}
{% endfor %}
{% for page in site.posts %}
  {% if page.insearch != false or page.insearch == nil %}
        {% assign text = page.content %}
    {"title": "{{ page.title }}","text": {{ text | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{ tag }}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{ page.url }}"},
  {% endif %}
{% endfor %}
{% for eglise in site.eglises %}
    {% assign text = eglise.content %}
    {"title": "{{ eglise.nom }}","text": {{ text | jsonify | strip_html }}, "tags": "{% if eglise.tags %}{% for tag in eglise.tags %}{{ tag }}, { %}{% endfor %}, église{% endif %}","url":"{{ eglise.url }}"},
{% endfor %}
]};
