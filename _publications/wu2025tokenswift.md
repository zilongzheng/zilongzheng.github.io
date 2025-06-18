---
layout: publication
type: inproceedings
title: >
    Lossless Acceleration of Ultra Long Sequence Generation
author: Wu, Tong and Shen, Junzhe and Jia, Zixia and Wang, Yuxuan and Zheng#, Zilong
abbr: ICML'25
venue: ICML
arxiv: "2502.18890"
year: 2025
selected: true
github_star: true
show_details: true
code: https://github.com/bigai-nlco/TokenSwift
abstract: >
    Generating ultra-long sequences with large language models (LLMs) has become increasingly crucial but remains a highly time-intensive task, particularly for sequences up to 100K tokens. While traditional speculative decoding methods exist, simply extending their generation limits fails to accelerate the process and can be detrimental. Through an in-depth analysis, we identify three major challenges hindering efficient generation: frequent model reloading, dynamic key-value (KV) management and repetitive generation. To address these issues, we introduce TOKENSWIFT, a novel framework designed to substantially accelerate the generation process of ultra-long sequences while maintaining the target model's inherent quality. Experimental results demonstrate that TOKENSWIFT achieves over 3 times speedup across models of varying scales (1.5B, 7B, 8B, 14B) and architectures (MHA, GQA). This acceleration translates to hours of time savings for ultra-long sequence generation, establishing TOKENSWIFT as a scalable and effective solution at unprecedented lengths. Code can be found at <a href="https://github.com/bigai-nlco/TokenSwift">this URL</a>.
bibtex: >
    @inproceedings{wu2025tokenswift,
        title={Lossless Acceleration of Ultra Long Sequence Generation},
        author={Wu, Tong and Shen, Junzhe and Jia, Zixia and Wang, Yuxuan and Zheng, Zilong},
        booktitle = {Proceedings of the 42nd International Conference on Machine Learning},
        year={2025}
    }
medias:
    - name: X
      url:  https://x.com/ZilongZheng/status/1896843753446609382
related_publications:
    - wu2024cream
---

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025tokenswift/TokenSwift.png" }}" />
<figcaption>Figure 1. <span style="font-weight: 400">An overview of TokenSwift.</span>  First, target model (LLM) with partial KV cache and three linear layers outputs 4 logits in a single forward pass. Tree-based attention is then applied to construct candidate tokens. Secondly, top-
 candidate 4-grams are retrieved accordingly. These candidates compose draft tokens, which are fed into the LLM with full KV cache to generate target tokens. The verification is performed by checking if draft tokens match exactly with target tokens. Finally, we randomly select one of the longest valid draft tokens, and update 4-gram table and KV cache accordingly.
</figcaption>
</div>
