---
layout: publication
type: article
title: >
    Credit-Assigned Gradient Flow Enables Robust and Interpretable Test-Time Latent Reasoning
author: Zhaoxin Yu* and Qi Shen* and Hengli Li* and Zhaowei Zhang and Song-Chun Zhu and Chi Zhang# and Zilong Zheng#
arxiv: "2608.02585"
year: 2026
preprint: true 
selected: true
code: https://github.com/Yuzhaoxin946/GradCuit
website: https://yuzhaoxin946.github.io/GradCuit/
abstract: >
    Optimization-based latent reasoning improves large language model outputs by optimizing instance-specific continuous states at test time while keeping model parameters frozen. Existing methods, however, typically connect these states to the reasoning trajectory through decoded tokens, making sequence-level credit assignment indirect and obscuring how latent updates shape subsequent reasoning. We introduce GradCuit (gradient through circuit), which inserts optimizable latent states at a selected Transformer layer between the hidden representations of the prompt and the generated continuation. Causal self-attention provides every continuation-token log-probability with a differentiable path to every preceding latent state through the remaining Transformer blocks, enabling reward-weighted gradients from the entire continuation to be assigned directly to the latents. Across five instruction-tuned backbones, three reasoning benchmarks, and two answer formats, GradCuit achieves an average accuracy of 64.5%, outperforming chain-of-thought prompting by 6.6 percentage points and the strongest competing method by 2.4 points. GradCuit also demonstrates greater robustness: across seven learning-rate settings, it consistently outperforms LatentSeek while reducing the standard deviation of accuracy from 1.53 to 0.82, and even its random-walk variant remains competitive with LatentSeek. For interpretability, token-level gradient attribution reveals that latent influence concentrates on reasoning-connector tokens, while layer analysis identifies early-to-middle Transformer layers as the most effective optimization space. By directly optimizing internal reasoning from outcome feedback, GradCuit opens a new axis of robust and interpretable test-time scaling, where LLMs adapt how they reason rather than merely regenerate, sample, or rerank outputs.
bibtex: >
    @misc{yu2026gradcuitcreditassignedgradientflow,
      title={GradCuit: Credit-Assigned Gradient Flow Enables Robust and Interpretable Test-Time Latent Reasoning}, 
      author={Zhaoxin Yu and Qi Shen and Hengli Li and Zhaowei Zhang and Song-Chun Zhu and Chi Zhang and Zilong Zheng},
      year={2026},
      eprint={2608.02585},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2608.02585}, 
    }
related_publications:
    - li2025latentseek
---
