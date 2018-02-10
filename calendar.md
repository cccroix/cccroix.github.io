---
layout: one_col
title: Activités de la CC†
permalink: /agenda/
date: 2018-02-09 08:00:00 CET
author: LGD
nav: Agenda
blocnote: true
position: 1
published: true
---

{% comment %}
Les données du calendriers sont dans le fichier `calendar-events.json`.
Format : <https://fullcalendar.io/docs/event_data/Event_Object/>
{% endcomment %}
<script>
// Doc : https://fullcalendar.io/
$(document).ready(function() {
  $('#calendar').fullCalendar({
    locale: 'fr',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,listMonth'
    },
    defaultView: 'month',
    navLinks: true,
    eventLimit: true,
    events: {
      url: '{{ site.baseurl }}/calendar-events.json',
      cache: true
    }
  });
});
</script>

<div id='calendar'></div>
