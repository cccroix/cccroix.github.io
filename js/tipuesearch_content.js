---
insearch: false        
---

var tipuesearch = {"pages": [
{% for page in site.pages %}
  {% if page.insearch != false or page.insearch == nil %}
        {% assign text = page.content %}
    {"title": "{{ page.title }}","text": {{ text | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{ tag }}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{ page.url }}"},
  {% endif %}
{% endfor %}
]};



