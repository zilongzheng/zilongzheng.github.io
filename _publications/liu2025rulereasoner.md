---
layout: publication
type: article
title: >
    RuleReasoner: Reinforced Rule-based Reasoning via Domain-aware Dynamic Sampling
author: Yang Liu and Jiaqi Li and Zilong Zheng#
arxiv: "2506.08672"
year: 2025
preprint: true
selected: true
show_details: true
code: https://github.com/bigai-nlco/RuleReasoner
data: https://huggingface.co/datasets/RuleReasoner/rule-reasoning
model: https://huggingface.co/RuleReasoner
abstract: >
    Rule-based reasoning has been acknowledged as one of the fundamental problems in reasoning, while deviations in rule formats, types, and complexity in real-world applications pose severe challenges. Recent studies have shown that large reasoning models (LRMs) have remarkable reasoning capabilities, and their performance is substantially enhanced by reinforcement learning (RL). However, it remains an open question whether small reasoning models (SRMs) can learn rule-based reasoning effectively with robust generalization across diverse tasks and domains. To address this, we introduce Reinforced Rule-based Reasoning, a.k.a. RuleReasoner, a simple yet effective method to conduct rule-based reasoning via a wide collection of curated tasks and a novel domain-aware dynamic sampling approach. Specifically, RuleReasoner resamples each training batch by updating the sampling weights of different domains based on historical rewards. This facilitates domain augmentation and flexible online learning schedules for RL, obviating the need for pre-hoc human-engineered mix-training recipes used in existing methods. Empirical evaluations on in-distribution (ID) and out-of-distribution (OOD) benchmarks reveal that RuleReasoner outperforms frontier LRMs by a significant margin (Δ4.1% average points on eight ID tasks and Δ10.4% average points on three OOD tasks over OpenAI-o1). Notably, our approach also exhibits higher computational efficiency compared to prior dynamic sampling methods for RL.
bibtex: >
    @misc{liu2025rulereasoner,
          title={RuleReasoner: Reinforced Rule-based Reasoning via Domain-aware Dynamic Sampling},
          author={Yang Liu and Jiaqi Li and Zilong Zheng},
          year={2025},
          eprint={2506.08672},
          archivePrefix={arXiv},
          primaryClass={cs.CL},
          url={https://arxiv.org/abs/2506.08672},
    }
related_publications:
    - zhao2025absolute
    - li2025latentseek
    - zhang2025amulet
    - wu2025tokenswift
tags:
  - RLVR
  - Reasoning
  - Large Reasoning Model
---

### Domain-aware Policy Optimization with Dynamic Sampling

We propose Domain-aware Dynamic Sampling (DADS), a simple yet effective sampling method for RLVR, aiming to improve the performance of a policy model $\pi_\theta$ for solving multi-domain rule-based reasoning.

<div class="figure-block">
<img src="{{ "/assets/img/projects/liu2025rulereasoner/training_recipe.jpg" }}" width="60%" />
<figcaption>Figure 1. <span style="font-weight: 400">Diagram of RuleReasoner training recipe.</span> </figcaption>
</div>

DADS dynamically adjusts the probability of sampling data from different domains based on their historical rewards. By prioritizing domains that yield lower verifiable rewards or those lagging behind a target reward, DADS enhances sample efficiency to re-sample the training batch $\mathcal{B}_s$ and mitigates the domain imbalance issue, leading to faster and more stable learning of policies that satisfy reward specifications. We instantiate RuleReasoner with the gradient policy algorithm of GRPO variant in this work to demonstrate its effectiveness and efficiency.

### Empirical Results


<div class="figure-block">
<img src="{{ "/assets/img/projects/liu2025rulereasoner/ood_performance_comparison.jpg" }}" />
<figcaption>Figure 2. <span style="font-weight: 400">Out-of-distribution performance comparison between RuleReasoner (8B and 4B) and other frontier reasoning models on challenging rule-based reasoning benchmarks.</span> </figcaption>
</div>


<div class="figure-block">
<img src="{{ "/assets/img/projects/liu2025rulereasoner/id_performance_comparison.jpg" }}" />
<figcaption>Table 1. <span style="font-weight: 400"> Comparison with all baselines on eight ID benchmarks.</span> RuleReasoner (8B and 4B) depicts comparable performance versus a wide range of baselines.</figcaption>
</div>
