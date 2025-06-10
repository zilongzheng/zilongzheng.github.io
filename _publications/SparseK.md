---
layout: pub
type: journal
title: >
    Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers
author: Lou, Chao and Jia, Zixia and Zheng, Zilong and Tu, Kewei
# abbr: EMNLP'24
correspondence: Zheng, Zilong and Tu, Kewei
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
journal: arXiv
arxiv: 2406.16747
year: 2024
preprint: true
abstract: >
    Accommodating long sequences efficiently in autoregressive Transformers, especially within an extended context window, poses significant challenges due to the quadratic computational complexity and substantial KV memory requirements inherent in self-attention mechanisms. In this work, we introduce SPARSEK Attention, a novel sparse attention mechanism designed to overcome these computational and memory obstacles while maintaining performance. Our approach integrates a scoring network and a differentiable top-k mask operator, SPARSEK, to select a constant number of KV pairs for each query, thereby enabling gradient-based optimization. As a result, SPARSEK Attention offers linear time complexity and constant memory footprint during generation. Experimental results reveal that SPARSEK Attention outperforms previous sparse attention methods and provides significant speed improvements during both training and inference, particularly in language modeling and downstream tasks. Furthermore, our method can be seamlessly integrated into pre-trained Large Language Models (LLMs) with minimal fine-tuning, offering a practical solution for effectively managing long-range dependencies in diverse applications.
bibtex: >
    @article{lou2024sparsek,
        title={Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers},
        author={Lou, Chao and Jia, Zixia and Zheng, Zilong and Tu, Kewei},
        journal = {arXiv preprint arXiv: 2406.16747},
        year={2024}
    }
---