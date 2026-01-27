---
layout: publication
type: article
title: >
    Native Parallel Reasoner: Reasoning in Parallelism via Self-Distilled Reinforcement Learning
author: Wu*, Tong and Liu*, Yang and Bai*, Jun and Jia, Zixia and Zhang, Shuyi and Lin, Ziyong and Wang, Yanting and Zhu, Song-Chun and Zheng#, Zilong
year: 2026
selected: true
arxiv: "2512.07461"
code: https://github.com/bigai-nlco/Native-Parallel-Reasoner
website: https://bigai-nlco.github.io/Native-Parallel-Reasoner/
github_star: true
show_details: true
preprint: true
medias:
  - name: X
    url: https://x.com/ZilongZheng/status/1998252267783516444
  - name: "YouTube"
    url: https://youtu.be/oxzs2KExNiE
badges:
  - url: https://huggingface.co/papers/2512.07461
    src: >
      <span class="hf-paper-badge">#1 Paper of the Day</span>
abstract: >
    We introduce Native Parallel Reasoner (NPR), a teacher-free framework that enables Large Language Models (LLMs) to self-evolve genuine parallel reasoning capabilities. NPR transforms the model from sequential emulation to native parallel cognition through three key innovations: 1) a self-distilled progressive training paradigm that transitions from ``cold-start'' format discovery to strict topological constraints without external supervision; 2) a novel Parallel-Aware Policy Optimization (PAPO) algorithm that optimizes branching policies directly within the execution graph, allowing the model to learn adaptive decomposition via trial and error; and 3) a robust NPR Engine that refactors memory management and flow control of SGLang to enable stable, large-scale parallel RL training. Across eight reasoning benchmarks, NPR trained on Qwen3-4B achieves performance gains of up to 24.5% and inference speedups up to 4.6x. Unlike prior baselines that often fall back to autoregressive decoding, NPR demonstrates 100% genuine parallel execution, establishing a new standard for self-evolving, efficient, and scalable agentic reasoning.
bibtex: >
    @misc{wu2025npr,
        title={Native Parallel Reasoner: Reasoning in Parallelism via Self-Distilled Reinforcement Learning},
        author={Tong Wu and Yang Liu and Jun Bai and Zixia Jia and Shuyi Zhang and Ziyong Lin and Yanting Wang and Song-Chun Zhu and Zilong Zheng},
        year={2025},
        eprint={2512.07461},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2512.07461},
    }
related_publications:
  - li2025latentseek
  - liu2025rulereasoner
  - qin2025rqr
  - zhao2025absolute
---

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025npr/teaser.png" }}" width="100%" />
<figcaption>Figure 1. <span style="font-weight: 400">Native Parallel Reasoner (NPR)</span> transforms a base model from sequential chain-of-thought (CoT) to native parallel reasoning via a self-distilled progressive training paradigm. Compared with previous SoTA, NPR achieves high reasoning accuracy, genuine parallelism and token acceleration. The illustrated results are evaluated on the AIME25 benchmark.</figcaption>
</div>

### Why Should Reasoning Go Wider?

The rapid development of super-scale Large Language Models (LLMs) like Gemini 3 and GPT-5 has fundamentally changed the focus of AI research. We are moving beyond simply achieving semantic fluency toward enabling deep, multi-step agentic reasoning.

While current methods allow for "deeper" test-time scaling to solve complex problems sequentially, the new dominant requirement for advanced agentic AI is "wider" reasoning capacity, i.e., parallel reasoning, enabling the model to explore diverse trajectories in parallel rather than being limited to a single, linear thought process.

<div class="column is-centered has-text-centered">
    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/oxzs2KExNiE?si=ixzdrNf1fp-ySw0C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Method Overview

NPR adpots a three-stage curriculum, as illustrated in Figure 2, to progressively induce, ground, and amplify this capability: (1) NPR-ZERO, which utilizes reinforcement learning to induce a parallel formatting schema without external supervision; (2) NPR-BETA, which stabilizes the model's parallel primitives through supervised fine-tuning on self-distilled data; and (3) NPR, which employs a novel parallel-aware RL (PAPO) algorithm to robustly optimize the native parallel reasoning performance.

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025npr/npr-overview.png" }}" width="100%" />
<figcaption>Figure 2. <span style="font-weight: 400">An overview of the NPR training framework.</span></figcaption>
</div>

### Parallel-Aware Policy Optimization (PAPO)

Parallel-Aware Policy Optimization (PAPO) (Figure 3) effectively leverages RL to enhance parallel reasoning, leading to more generalized agentic behavior. It builds on the SFT foundation with four key modifications to stabilize training and enforce parallel semantics:

1. NPR-Engine Rollouts: We utilize our custom NPR-Engine to strictly enforce the Map–Process–Reduce flow, ensuring all generated trajectories have valid parallel structure.
2. Structural Filtering: We apply schema-level filtering during rollout to guarantee high-quality, structurally correct samples enter optimization.
3. Batch-level Normalization: To counteract the variance collapse caused by filtering, we adopt batch-level advantage normalization, stabilizing the training process.
4. On-Policy Objective: To preserve crucial gradients on special tokens (which control parallel semantics) and avoid the instability of PPO's importance-sampling, we eliminate reweighting and adopt a strict on-policy objective, which both stabilizes and speeds up training.

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025npr/PAPO.png" }}" width="100%" />
<figcaption>Figure 3. <span style="font-weight: 400">Comparison of GRPO-style RL and Parallel-Aware Policy Optimization (PAPO).</span></figcaption>
</div>

### Key Results: NPR Performance Advantages

NPR significantly surpasses strong baselines across reasoning benchmarks (See Table 1), stem from three major architectural advantages:

1. **Training Data Advantage:** Replacing sequential data with our NPR self-distillation corpus consistently improves solution correctness. The overall score increases by +8.9 points (50.1 to 59.0), with maximum gains observed on ZebraLogic (+15.9).
2. **Parallel SFT Advantage:** Switching to Parallel SFT eliminates the restrictive inter-step dependency of sequential methods, enabling flexible task decomposition. This results in a net performance gain and increased overall robustness (58.2 to 59.0).
3. **Parallel RL Advantage:** Applying PAPO effectively amplifies high-reward solution modes through tailored parallel optimization. This leads to a substantial overall boost in average performance from 62.0 to 65.0, with AIME24 improving by +6.2.

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025npr/npr-results.png" }}" width="100%" />
<figcaption>Table 1. <span style="font-weight: 400">Performance of sequential and parallel reasoners on reasoning benchmarks.</span></figcaption>
</div>

### Stable Parallel Reasoning Triggering

We compare the parallel reasoning trigger rate between our NPR model and the Multiverse baseline (See Table 2). This rate measures a model's propensity to generate simultaneous, non-sequential thought structures during problem-solving.
- Multiverse (Inconsistent): The Multiverse model, which relies on a progressive sequential-to-parallel training paradigm, demonstrates poor and highly inconsistent performance.
- NPR (Holistic & Consistent): In sharp contrast, our NPR model, trained with an end-to-end parallel pipeline (SFT and RL), achieves a perfect 100.0% parallel reasoning trigger rate across all evaluated datasets.

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025npr/npr-parallel_rate.png" }}" width="100%" />
<figcaption>Table 2. <span style="font-weight: 400">Comparison of parallel reasoning trigger rates between NPR and MultiVerse.</span></figcaption>
</div>

### Extreme Inference Acceleration

We evaluate token throughput and acceleration rate against Multiverse and autoregressive (AR) baselines. As shown in Table 3, NPR consistently achieves the strongest efficiency and substantial speedups:

- Superior Overall Efficiency: NPR consistently outperforms Multiverse by 1.3× to 2.4× and surpasses AR baselines across all five evaluation benchmarks.
- Scaling with Difficulty: NPR's efficiency advantage increases with task difficulty, validating our hypothesis that NPR excels when simultaneous exploration of multiple solution paths is required.
- Maximum Speedup: The highest acceleration rates are observed on the most challenging tasks: AIME25 (4.6×) and HMMT25 (4.1×), significantly higher than simpler tasks like AMC23 (2.9×).

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025npr/npr-efficiency.png" }}" width="100%" />
<figcaption>Table 3. <span style="font-weight: 400">Evaluation results of tokens per second (TPS) and speedup ratio.</span> The speedup ratio (denoted as Speedup) is calculated by comparing with sequential reasoning baseline.</figcaption>
</div>
