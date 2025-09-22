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
{% if y.items != empty %}
{% assign pubs_with_key = "" | split: "" %}
{% for p in y.items %}
{% assign venue_key = site.data.venues[p.venue].order | default: "00" %}
{% if p.preprint %}
  {% assign preprint_key = 1 %}
{% else %}
  {% assign preprint_key = 0 %}
{% endif %}
{% assign sort_key = preprint_key | append: '-' | append: venue_key | append: '|||' | append: p.slug %}
{%- assign pubs_with_key = pubs_with_key | push: sort_key -%}
{% endfor %}
{% assign sorted_pubs = pubs_with_key | sort | reverse %}
<div class="bibliography">
    <h2 class="bibliography">{{y.name}}</h2>
    <ol class="bibliography">
        {% for item in sorted_pubs %}
        {% assign parts = item | split: '|||' %}
        {% assign p = site.publications | where: 'slug', parts[1] | first %}
        <li>{% include bib.liquid entry=p key=p.slug %}</li>
        {% endfor %}
    </ol>
</div>
{% endif %}
{% endfor %}

</div>
