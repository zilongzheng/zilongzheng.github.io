---
layout: publication
type: article
title: >
    LIFT: A Novel Framework for Enhancing Long-Context Understanding of LLMs via Long Input Fine-Tuning
author: Yansheng Mao* and Yufei Xu* and Jiaqi Li* and Fanxu Meng and Haotong Yang and Zilong Zheng and Xiyuan Wang# and Muhan Zhang#
year: 2026
arxiv: "2502.14644"
code: https://github.com/MuLabPKU/LIFT
venue: ICML
abbr: ICML'26
abstract: >
  Long-context understanding remains challenging for LLMs due to limited context windows. This paper introduces Long Input Fine-Tuning (LIFT), a framework that improves the long-context performance of arbitrary short-context LLMs by dynamically adapting their parameters to each long input. Instead of endlessly extending context windows to fit longer inputs in context, LIFT stores and absorbs the input in parameters. By fine-tuning long inputs into parameters, LIFT enables short-context LLMs to answer questions even when required information is absent from the inference context, avoiding the quadratic input-length complexity of standard long-context models. Rather than simple continued pretraining on new long contexts, LIFT uses carefully designed LLM-generated synthetic tasks to enhance comprehension beyond memorization. To offset fine-tuning overhead, we design a highly optimized pipeline that reduces Time to First Token (TTFT) to under 10 seconds for 8k context. We further analyze LIFT's strengths and limitations, discuss large-scale deployment feasibility, and highlight future research directions. 
bibtex: >
    @inproceedings{mao2026lift,
        title={LIFT: A Novel Framework for Enhancing Long-Context Understanding of LLMs via Long Input Fine-Tuning},
        author={Yansheng Mao and Yufei Xu and Jiaqi Li and Fanxu Meng and Haotong Yang and Zilong Zheng and Xiyuan Wang and Muhan Zhang},
        booktitle={Proceedings of the 43rd International Conference on Machine Learning},
        year={2026}
    }
related_publications:
  - li2025latentseek
  - liu2025rulereasoner
  - qin2025rqr
  - zhao2025absolute
---