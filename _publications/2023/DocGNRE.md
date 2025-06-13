---
layout: publication
type: inproceedings
title: >
    Semi-automatic Data Enhancement for Document-Level Relation Extraction with Distant Supervision from Large Language Models
author: Li*, Junpeng and Jia*, Zixia and Zheng#, Zilong
abbr: EMNLP'23
pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
# booktitle: The Conference on Empirical Methods in Natural Language Processing (EMNLP)
booktitle: EMNLP
arxiv: 2311.07314
code: https://github.com/bigai-nlco/DocGNRE
year: 2023
selected: false
abstract: >
    Document-level Relation Extraction (DocRE), which aims to extract relations from a long context, is a critical challenge in achieving fine-grained structural comprehension and generating interpretable document representations. Inspired by recent advances in in-context learning capabilities emergent from large language models (LLMs), such as ChatGPT, we aim to design an automated annotation method with minimum human effort. Unfortunately, vanilla in-context learning is infeasible for document-level Relation Extraction ( RE) due to the plenty of predefined fine-grained relation types and the uncontrolled generations of LLMs. To tackle this issue, we propose a method integrating a large language model (LLM) and a natural language inference (NLI) module to generate external relation triples, thereby augmenting document-level relation datasets. We demonstrate the effectiveness of our approach by introducing an enhanced dataset known as DocGNRE, which excels in re-annotating numerous long-tail relation types. We are confident that our method holds the potential for broader applications in domain-specific relation type definitions and offers tangible benefits in advancing generalized language semantic comprehension.
bibtex: >
    @inproceedings{li2023docngre,
        title={Semi-automatic Data Enhancement for Document-Level Relation Extraction with Distant Supervision from Large Language Models},
        author={Li, Junpeng and Jia, Zixia and Zheng, Zilong},
        booktitle={The 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP)},
        year={2023}
    }
---
