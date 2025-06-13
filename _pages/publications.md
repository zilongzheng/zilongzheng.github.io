---
layout: page
permalink: /publications/
title: publication
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

<div class="notes"> <code style="font-size: 16px;">*</code><code>: Equal contribution</code>, <code style="font-size: 16px;">#</code><code>: Corresponding author</code></div>

{% assign years = site.publications | group_by: "year" %}
{% assign yearsSorted = years | sort: "name" %}
{% for y in yearsSorted reversed %}
{% assign yearConfSorted = y.items | sort: "abbr" | reverse %}
{% if yearConfSorted != empty %}
<div class="bibliography">
    <h2 class="bibliography">{{y.name}}</h2>
    <ol class="bibliography">
        {% for item in yearConfSorted %}
        <li>{% include bib.liquid entry=item %}</li>
        {% endfor %}
    </ol>
</div>
{% endif %}
{% endfor %}

</div>
