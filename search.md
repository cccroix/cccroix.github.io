---
layout: default
title: Résultats de la recherche
permalink: /search.html
author: luc
published: true
---
  <script src="js/tipuesearch_content.js"></script>
  <script src="js/tipuesearch_set.js"></script>
  <script src="js/tipuesearch.min.js"></script>
  
<form action="{{ site.baseurl}}/search.html">
<input type="text" name="q" id="tipue_search_input" autocomplete="off" required>
</form>
<div id="tipue_search_content"></div>

<script>
$(document).ready(function() {
     $('#tipue_search_input').tipuesearch();
});
</script>
