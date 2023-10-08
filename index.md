---
layout: about
title: about
permalink: /
description: Research Scientist at BIGAI

profile:
  align: right
  image: zilong.JPG
  email: >
    <p>Email: z.zheng<code>[at]</code>ucla<code>[dot]</code>edu</p>

news: true  # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page

---
I am a research scientist at [Beijing Institute for General Artificical Intelligence (BIGAI)](https://bigai.ai/).
I received my Ph.D. degree from the Department of Computer Science at [University of California, Los Angeles (UCLA)](https://www.cs.ucla.edu/), under the supervision of [Prof. Song-chun Zhu](http://www.stat.ucla.edu/~sczhu/). 
Before that, I obtained dual bachelor degree of Computer Science at [University of Minnesota](https://twin-cities.umn.edu/) and at University of Electronic Science and Technology of China (UESTC). 

My research interests lie in the intersection of statistical machine learning, natural language processing and cognition. Current research themes include:
- **General Multimodal Perception:** General multimodal understanding, parsing and explainable modeling.
- **Natural Language Reasoning:** Neural-symbolic reasoning and planning with language models.
- **Generative Modeling:** Statistical generative modeling (e.g. EBMs, diffusions) on high-dimensional data.
- **Human Robot Cooperation**: Building dialogue and planning models that are capable of interating with humans in realisitc environments.

I am always looking for self-motivated **interns** and long-term **collaborators**. Please contact me if you have excellent background or share similar research interests with me.


<div id="news" class="section_break"></div>

## News

{% if page.news %}
<!-- <div id="news" class="post"> -->
  {% include news.html %}
<!-- </div> -->
{% endif %}

<div id="publications" class="section_break"></div>

## Selected Publications

{% if page.selected_papers %}
<!-- <div id="publications" class="post"> -->
  {% include selected_papers.html %}
<!-- </div> -->
{% endif %}


<div id="services" class="section_break"></div>

## Professional Services

- <b>Conference reviewer</b> for ICML 2022-2023; ICLR 2022-2023; CVPR 2019-2022; NeurIPS 2020-2022; AAAI 2020-2022; ICCV 2019-2023; ECCV 2020-2022; BMVC 2020; WACV 2021
- <b>Journal reviewer</b> for International Journal of Computer Vision (IJCV), Pattern Recognition (PR), Neurocomputing

<div class="modal fade" id="bibtex-modal" tabindex="-1" role="dialog" aria-labelledby="bibtex-modal" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="bibtex-modal-title">BibTeX</h5>
        <button id="copy-btn" class="btn copy-btn btn-outline-secondary btn-sm" data-clipboard-target="#bibtex-content"  type="button">Copy</button>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <pre id='bibtex-content'></pre>
      </div>
    </div>
  </div>
</div>