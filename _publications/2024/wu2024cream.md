---
layout: publication
key: cream
type: inproceedings
title: >
    An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding
author: Wu, Tong and Zhao, Yanpeng and Zheng#, Zilong
abbr: NeurIPS'24
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
booktitle: NeurIPS
arxiv: 2406.07138v1
year: 2024
code: https://github.com/bigai-nlco/cream
selected: true
abstract: >
    Recently, many methods have been developed to extend the context length of pre-trained large language models (LLMs), but they often require fine-tuning at the target length (>> 4K) and struggle to effectively utilize information from the middle part of the context. To address these issues, we propose <b>C</b>ontinuity-<b>R</b>elativity ind<b>E</b>xing with g<b>A</b>ussian <b>M</b>iddle (CREAM), which interpolates positional encodings by manipulating position indices. Apart from being simple, CREAM is training-efficient: it only requires fine-tuning at the pre-trained context window (e.g., Llama 2-4K) and can extend LLMs to a much longer target context length (e.g., 256K). To ensure that the model focuses more on the information in the middle, we introduce a truncated Gaussian to encourage sampling from the middle part of the context during fine-tuning, thus alleviating the "Lost-in-the-Middle" problem faced by long-context LLMs. Experimental results show that CREAM successfully extends LLMs to the target length for both Base and Chat versions of Llama2-7B with "Never Miss A Beat".
bibtex: >
    @inproceedings{wu2024cream,
        title={An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding},
        author={Tong Wu, Yanpeng Zhao, Zilong Zheng},
        booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
        volume = {37},
        year={2024}
    }
---
