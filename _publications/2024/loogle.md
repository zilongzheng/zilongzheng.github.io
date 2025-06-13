---
layout: publication
type: inproceedings
title: >
    LooGLE: Can Long-Context Language Models Understand Long Contexts?
author: Li, Jiaqi and Wang, Mengmeng and Zheng#, Zilong and Zhang#, Muhan
year: 2024
# booktitle: >
#     Proceedings of the Annual Meeting of the Association for Computational Linguistics: ACL
booktitle: ACL
arxiv: 2311.04939
selected: false
abbr: ACL'24
code: https://github.com/bigai-nlco/LooGLE
abstract: >
    Large language models (LLMs), despite their impressive performance in various language tasks, are typically limited to processing texts within context-window size. This limitation has spurred significant research efforts to enhance LLMs' long-context understanding with high-quality long-sequence benchmarks. However, prior datasets in this regard suffer from shortcomings, such as short context length compared to the context window of modern LLMs; outdated documents that have data leakage problems; and an emphasis on short dependency tasks rather than long dependency tasks. In this paper, we present LooGLE, a Long Context Generic Language Evaluation benchmark for LLMs' long context understanding. LooGLE features relatively new documents post-2022, with over 24,000 tokens per document and 6,000 newly generated questions spanning diverse domains. Human annotators meticulously crafted more than 1,100 high-quality question-answer pairs to meet the long dependency requirements. These pairs underwent thorough cross-validation, yielding the most precise assessment of LLMs' long dependency capabilities. The evaluation of eight state-of-the-art LLMs on LooGLE revealed key findings: (i) commercial models outperformed open-sourced models; (ii) LLMs excelled in short dependency tasks like short question-answering and cloze tasks but struggled with more intricate long dependency tasks; (iii) in-context learning and chaining thoughts offered only marginal improvements; (iv) retrieval-based techniques demonstrated substantial benefits for short question-answering, while strategies for extending context window length had limited impact on long context understanding. As such, LooGLE not only provides a systematic and comprehensive evaluation schema on long-context LLMs, but also sheds light on future development of enhanced models towards "true long-context understanding".
bibtex: >
    @inproceedings{li2024loogle,
        title={LooGLE: Can Long-Context Language Models Understand Long Contexts?},
        author={Li, Jiaqi and Wang, Mengmeng and Zheng, Zilong and Zhang, Muhan},
        booktitle={Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
        year={2024}
    }
---
