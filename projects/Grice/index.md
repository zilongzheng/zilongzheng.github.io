---
layout: project
project: GRICE Dataset
title: >
    G<small>RICE</small>: A <u>G</u>rammar-based Dataset for <u>R</u>ecovering <u>I</u>mplicature and <u>C</u>onversational r<u>E</u>asoning
permalink: /Grice/
bibtex: >
    @article{zheng2021implicature,
        title={GRICE: A Grammar-based Dataset for Recovering Implicature and Conversational r{E}asoning},
        author={Zheng, Zilong and Qiu, Shuwen and Fan, Lifeng and Zhu, Yixin and Zhu, Song-Chun},
        journal={Findings of ACL, ACL-IJCNLP},
        year={2021}
    }
---

<div class="project_info">
<span><a href="https://zilongzheng.github.io" class="active" >Zilong Zheng</a> <sup>1</sup></span>  
<span><a href="https://janetalready.github.io/" >Shuwen Qiu</a> <sup>1</sup></span>  
<span><a href="https://lifengfan.github.io/" >Lifeng Fan</a> <sup>1</sup></span>  
<span><a href="https://yzhu.io/" >Yixin Zhu</a> <sup>1</sup></span>  
<span><a href="http://www.stat.ucla.edu/~sczhu/" >Song-Chun Zhu</a> <sup>2</sup></span>  
</div>

<div class="project_info">
<span><sup>1</sup> Center for Vision, Cognition, Learning, and Autonomy (VCLA)</span> <br>
<span><sup>2</sup> Peking University</span>
</div>
<div class="project_info">
<span>Findings of ACL 2021</span>
</div>

<div class="figure">
<img src="/projects/Grice/images/grice_diagarm.png" alt="grice_diagarm" width="100%">
</div>

<div class="section">
    <h2 class="seciton_title">Abstract</h2>
    <p class="text-justify">
    Understanding what we genuinely <em>mean</em> instead of what we literally <em>say</em> in conversations is challenging for both humans and machines; yet, this direction is mostly left untouched in modern open-ended dialogue systems. To fill in this gap, we present a grammar-based dialogue dataset, G<small>RICE</small>, designed to bring implicature into pragmatic reasoning in the context of conversations. Our design of G<small>RICE</small> also incorporates other essential aspects of modern dialogue modeling (<em>e.g.</em>, coreference). The entire dataset is systematically generated using a hierarchical grammar model, such that each dialogue context has intricate implicatures and is temporally consistent. We further present two tasks, the implicature recovery task followed by the pragmatic reasoning task in conversation, to evaluate the model's reasoning capability. In experiments, we adopt baseline methods that claimed to have pragmatics reasoning capability; the results show a large performance gap between baseline methods and human performance. After integrating a simple module that explicitly reasons about implicature, the model shows an overall performance boost in conversational reasoning. These observations demonstrate the significance of implicature recovery for open-ended dialogue reasoning and call for future research in conversational implicature and conversational reasoning.
    </p>
</div>
<br>

<div class="section container">
    <div class="row">
        <div class="col-lg-3">
        <a href="/projects/Grice/ACL21_GRICE.pdf">
        <img class="paper" alt="paper thumbnail" src="/projects/Grice/images/ACL21_Implicature_thumbnail.jpg" width="170px">
        </a>
        </div>
<div class="col-lg-9">
<h2>Paper</h2>
<a href="/projects/Grice/ACL21_GRICE.pdf">ACL paper</a>. <br>
Code and Dataset will be released soon.
    
<h3>Citation</h3>

<p class="text-justify">Zilong Zheng, Shuwen Qiu, Lifeng Fan, Yixin Zhu, Song-Chun Zhu. "G<small>RICE</small>: A <u>G</u>rammar-based Dataset for <u>R</u>ecovering <u>I</u>mplicature and <u>C</u>onversational r<u>E</u>asoning." Findings of The Joint Conference of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Findings of ACL-IJCNLP 2021).</p>

<a role="button" data-toggle="modal" data-target="#bibtex-modal">BibTex</a>
</div>
</div>
</div>
