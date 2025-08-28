---
layout: publication
type: inproceedings
title: >
    Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs
author: Bai, Jun and Tong, Minghao and Liu, Yang and Jia#, Zixia and Zheng#, Zilong
abbr: EMNLP'25
booktitle: EMNLP
arxiv: "2508.19594"
year: 2025
code: https://github.com/bigai-nlco/RouterLens
selected: true
abstract: >
    Context faithfulness is essential for reliable reasoning in context-dependent scenarios. However, large language models often struggle to ground their outputs in the provided context, resulting in irrelevant responses. Inspired by the emergent expert specialization observed in mixture-of-experts architectures, this work investigates whether certain experts exhibit specialization in context utilization—offering a potential pathway toward targeted optimization for improved context faithfulness. To explore this, we propose Router Lens, a method that accurately identifies context-faithful experts. Our analysis reveals that these experts progressively amplify attention to relevant contextual information, thereby enhancing context grounding. Building on this insight, we introduce Context-faithful Expert Fine-Tuning (CEFT), a lightweight optimization approach that selectively fine-tunes context-faithful experts. Experiments across a wide range of benchmarks and models demonstrate that CEFT matches or surpasses the performance of full fine-tuning while being significantly more efficient1.
bibtex: >
    @inproceedings{bai2025routerlens,
        title={Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs},
        author={Jun Bai and Minghao Tong and Yang Liu and Zixia Jia and Zilong Zheng},
        year={2025},
        booktitle={The 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP)}
    }
---
