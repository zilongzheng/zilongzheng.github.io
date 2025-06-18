---
layout: publication
type: inproceedings
title: >
    MCU: An Evaluation Framework for Open-Ended Game Agents
author: Zheng*, Xinyue and Lin*, Haowei and He, Kaichen and Wang, Zihao and Zheng#, Zilong and Liang#, Yitao
abbr: ICML'25
arxiv: 2310.08367
code: https://github.com/CraftJarvis/MCU
venue: ICML
year: 2025
award: Spotlight Paper
website: https://craftjarvis.github.io/MCU/
show_details: true
selected: true
abstract: >
    Developing AI agents capable of interacting with open-world environments to solve diverse tasks is a compelling challenge. However, evaluating such open-ended agents remains difficult, with current benchmarks facing scalability limitations. To address this, we introduce <em>Minecraft Universe</em> (MCU), a comprehensive evaluation framework set within the open-world video game Minecraft. MCU incorporates three key components: (1) an expanding collection of 3,452 composable atomic tasks that encompasses 11 major categories and 41 subcategories of challenges; (2) a task composition mechanism capable of generating infinite diverse tasks with varying difficulty; and (3) a general evaluation framework that achieves 91.5% alignment with human ratings for open-ended task assessment. Empirical results reveal that even state-of-the-art foundation agents struggle with the increasing diversity and complexity of tasks. These findings highlight the necessity of MCU as a robust benchmark to drive progress in AI agent development within open-ended environments.
bibtex: >
    @inproceedings{zheng2025mcu,
        title={MCU: An Evaluation Framework for Open-Ended Game Agents},
        author={Zheng, Xinyue and Lin, Haowei and He, Kaichen and Wang, Zihao and Zheng, Zilong and Liang, Yitao},
        booktitle = {Proceedings of the 42nd International Conference on Machine Learning},
        year={2025}
    }
related_publications:
    - wang2024jarvis1
---

<div class="figure-block">
<img src="{{ "/assets/img/projects/zheng2025mcu/teaser.png" }}" />
<figcaption><span style="font-weight: 400">An overview of MCU.</span> <span style="font-weight: 400">a.</span> Benchmarking pipeline. MCU includes two main components: task generation and trajectory evaluation. The LLM-based task configuration generator instantiates the environment with the necessary prerequisites, random factors, and task descriptions for diverse atomic tasks. These configurations are verified using an environment simulator. The VLM-based evaluator assesses each task trajectory in video form across multiple dimensions, providing comprehensive performance insights. MCU offers a model-agnostic evaluation interface based on Minestudio (Cai et al., 2024a), making it suitable for various agents. <span style="font-weight: 400">b.</span> Task category distribution. The atomic task set is sourced from the Minecraft wiki, in-game data, existing benchmarks, and brainstorming sessions. It spans 11 major categories and 41 subcategories, ensuring high inter-task diversity. For readers unfamiliar with Minecraft, we illustrate the real-world challenges associated with different task categories to provide context. </figcaption>
</div>
