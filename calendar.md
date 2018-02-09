---
layout: page
title: Activités de la CC†
permalink: /agenda/
date: 2018-02-09 08:00:00 CET
author: lgd
nav: Agenda
blocnote: true
position: 1
published: true
---

<script src='{{ site.baseurl }}/js/moment.min.js'></script>
<script src='{{ site.baseurl }}/js/fullcalendar.min.js'></script>
<script src='{{ site.baseurl }}/js/fullcalendar-locale-fr.js'></script>
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
    events: [
    /* exemples ci-dessous
      {
        title: 'All Day Event',
        start: '2018-02-01'
      },
      {
        title: 'Long Event',
        start: '2018-02-07',
        end: '2018-02-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-02-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-02-11',
        end: '2018-02-13'
      },
      {
        title: 'Meeting',
        start: '2018-02-12T10:30:00',
        end: '2018-02-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2018-02-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-02-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-02-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-02-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-02-28'
      }
    fin des exemples */
      {
        title: 'Création de l’agenda',
        date: '2018-02-09'
      }
    ]
  });
});
</script>

<div id='calendar'></div>

