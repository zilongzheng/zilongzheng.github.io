---
layout: publication
type: article
title: >
    RSIHub: A Composable Framework for Agent-Evolution Methods
author: Zimu Wang* and Xiaobo Wang* and Siyu Ye* and Jiaqi Li* and Silin Chen and Yuling Shi and Ruobing Wang and Jingjing Zhang and Chaofan Wang and Kai Wu and Mengnan Qi and Kai Cai and Xiaodong Gu# and Zilong Zheng#
arxiv: "2610.32253"
year: 2026
preprint: true 
selected: true
code: https://github.com/simple-agent-lab/RSIHub
website: https://simpleagentlab.com/rsihub/
abstract: >
    Agent-evolution methods use execution feedback to improve prompts, skills, tools, and orchestration, but their implementations often rebuild the same experimental machinery. We present RSIHub, an open-source framework for building, comparing, and extending these methods on shared infrastructure. Recipes compose reusable operators and declare mutable resources; RSIHub supplies execution, evaluation, recovery, and lineage. Researchers can focus on evolution policy while evaluation stays outside the mutable surface and results remain tied to candidates and evaluation conditions. We instantiate AHE, Hyperagents, A-Evolve, and GEPA without modifying the framework core, keeping method-specific logic in recipes and operators. We evaluate them with MiniSWE and Codex on Terminal Bench 2 and $\tau^3$ Banking under fixed model and evaluator configurations. The largest observed overall pass@1 gain is 13.5 percentage points, while method rankings vary across settings and optimization gains do not always transfer to held-out tasks. RSIHub provides a common protocol for comparing evolution policies, inspectable candidate histories, and reusable components for developing new methods.

bibtex: >
    @misc{wang2026rsihubcomposableframeworkagentevolution,
      title={RSIHub: A Composable Framework for Agent-Evolution Methods}, 
      author={Zimu Wang and Xiaobo Wang and Siyu Ye and Jiaqi Li and Silin Chen and Yuling Shi and Ruobing Wang and Jingjing Zhang and Chaofan Wang and Kai Wu and Mengnan Qi and Kai Cai and Xiaodong Gu and Zilong Zheng},
      year={2026},
      eprint={2610.32253},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2610.32253}, 
    }
related_publications:
    - li2025latentseek
    - zhao2025absolute
    - wu2026npr
---
