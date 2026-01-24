---
layout: publication
type: article
title: >
    Native Parallel Reasoner: Reasoning in Parallelism via Self-Distilled Reinforcement Learning
author: Wu, Tong and Liu, Yang and Bai, Jun and Jia, Zixia and Zhang, Shuyi and Lin, Ziyong and Wang, Yanting and Zhu, Song-Chun and Zheng#, Zilong
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
  - zhao2025diverct
  - zhao2025absolute
---
