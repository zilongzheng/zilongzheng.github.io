---
layout: publication
type: inproceedings
title: >
    TokenSwift: Lossless Acceleration of Ultra Long Sequence Generation
author: Wu, Tong and Shen, Junzhe and Jia, Zixia and Wang, Yuxuan and Zheng#, Zilong
abbr: ICML'25
venue: ICML
arxiv: "2502.18890"
year: 2025
selected: true
website: https://bigai-nlco.github.io/TokenSwift/
github_star: true
show_details: true
code: https://github.com/bigai-nlco/TokenSwift
abstract: >
    Generating ultra-long sequences with large language models (LLMs) has become increasingly crucial but remains a highly time-intensive task, particularly for sequences up to 100K tokens. While traditional speculative decoding methods exist, simply extending their generation limits fails to accelerate the process and can be detrimental. Through an in-depth analysis, we identify three major challenges hindering efficient generation: frequent model reloading, dynamic key-value (KV) management and repetitive generation. To address these issues, we introduce TOKENSWIFT, a novel framework designed to substantially accelerate the generation process of ultra-long sequences while maintaining the target model's inherent quality. Experimental results demonstrate that TOKENSWIFT achieves over 3 times speedup across models of varying scales (1.5B, 7B, 8B, 14B) and architectures (MHA, GQA). This acceleration translates to hours of time savings for ultra-long sequence generation, establishing TOKENSWIFT as a scalable and effective solution at unprecedented lengths. Code can be found at <a href="https://github.com/bigai-nlco/TokenSwift">this URL</a>.
bibtex: >
    @inproceedings{wu2025tokenswift,
        title={TokenSwift: Lossless Acceleration of Ultra Long Sequence Generation},
        author={Wu, Tong and Shen, Junzhe and Jia, Zixia and Wang, Yuxuan and Zheng, Zilong},
        booktitle = {Proceedings of the 42nd International Conference on Machine Learning},
        year={2025}
    }
medias:
    - name: X
      url:  https://x.com/ZilongZheng/status/1896843753446609382
related_publications:
    - wu2024cream
---

<div align="center">
<video width="960" height="540" controls>
    <source src="https://github.com/user-attachments/assets/5094fca7-0b12-470c-a7b6-456d254855d1" type="video/mp4">
    Your browser does not support the video tag.
</video>
</div>

<div class="figure-block">
<img src="{{ "/assets/img/projects/wu2025tokenswift/TokenSwift.png" }}" />
<figcaption>Figure 1. <span style="font-weight: 400">An overview of TokenSwift.</span>  First, target model (LLM) with partial KV cache and three linear layers outputs 4 logits in a single forward pass. Tree-based attention is then applied to construct candidate tokens. Secondly, top-
 candidate 4-grams are retrieved accordingly. These candidates compose draft tokens, which are fed into the LLM with full KV cache to generate target tokens. The verification is performed by checking if draft tokens match exactly with target tokens. Finally, we randomly select one of the longest valid draft tokens, and update 4-gram table and KV cache accordingly.
</figcaption>
</div>




Recent advances in large language models (LLMs), amplified by their long context capacities, have demonstrated remarkable proficiency in intricate reasoning ([OpenAI-o1](https://arxiv.org/abs/2412.16720); [DeepSeek-R1](https://arxiv.org/abs/2501.12948)), agentic thinking ([Reflexion](https://proceedings.neurips.cc/paper_files/paper/2023/file/1b44b878bb782e6954cd888628510e90-Paper-Conference.pdf); [ReAct](https://arxiv.org/pdf/2210.03629); [RAM](https://arxiv.org/pdf/2404.12045)), and creative writing ([Wang et al., 2023](https://arxiv.org/pdf/2311.04459); [Mikhaylovskiy, 2023](https://aclanthology.org/2023.inlg-genchal.2.pdf)), etc. These advancements **necessitate the ability to generate lengthy sequences**, *e.g.*, o1-like reasoning tends to generate protracted chain-of-thought trajectories before reaching final conclusions.


However, generating ultra-long sequences (up tp 100K tokens) is painfully slow. For example, generating 100K tokens with LLaMA3.1-8B can take approximately five hours (<a href="#speed">Figure 2</a>), hindering real-world applications.


<div class="figure-block">
  <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/speed.png' | relative_url }}" style="width: 80%; max-width: 600px; height: auto"/>
  <figcaption>Figure 2. <span style="font-weight: 400">Comparison of the time taken to generate 100K tokens using autoregressive (AR) and TokenSwift with prefix length of 4096 on Llama3.1-8b.</span> As seen, TokenSwift accelerates the AR process from nearly 5 hours to just 90 minutes.</figcaption>
</div>


#### Is Speculative Decoding Enough?
A straightforward solution is to take advantage of recent success in speculative decoding (SD). However, existing methods are generally tailored for generating short sequences, *e.g.*, [TriForce](https://arxiv.org/pdf/2404.11912) and [MagicDec](https://arxiv.org/pdf/2408.11049) are limited to generating 256 and 64 tokens, respectively. Directly extending their generation length to 100K tokens would inevitably encounter failures due to KV cache budget constraints. Furthermore, when applied to optimized KV cache architectures such as Group Query Attention (GQA), these methods yield only marginal acceleration gains for short-sequence generation (<a href="#sd_speedup">Figure 3</a>). This observation leads to a pivotal research question:


*Is it possible to achieve model-agnostic **lossless** accelerations, akin to those seen in short-sequence SDs, for generating **ultra-long** sequences, with **minimal** training overhead?*


<div class="figure-block" id="sd_speedup">
  <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/sd_speedup.png' | relative_url }}" style="width: 40%; max-width: 600px; height: auto"/>
</div>

#### Why Ultra-Long Sequences Are a Headache
Generating ultra-long sequences exposes three critical bottlenecks:

1. **Frequent Model Reloading:** When generating  ultra-long sequence, such as 100K tokens, the GPU must reload the model weights over 100,000 times. This repetitive process poses the challenge: How can we reduce the frequency of model reloading?
2. **Prolonged Growing of KV Cache:** [TriForce](https://arxiv.org/pdf/2404.11912) and [MagicDec](https://arxiv.org/pdf/2408.11049) have demonstrated that a small KV cache budget can be used during the drafting phase. While their one-time compression strategy at the prefill stage can handle scenarios with long prefixes and short outputs, it fails to address cases involving ultra-long outputs. The challenge lies in determining when and how to dynamically update the KV cache within limited budget.
3. **Repetitive Content Generation:** When generating sequences of considerable length, *e.g.*, 100K, the model tends to produce repetitive sentences. While eliminating this issue is not our focus, it is still essential and challenging to mitigate repetition patterns in ultra-long sequences.


### TokenSwift: Tailored Solutions for Each Challenge

#### **1. Multi-Token Generation & Token Reutilization**
Instead of generating one token at a time, TokenSwift predicts multiple tokens in a single forward pass. Inspired by Medusa, it adds lightweight linear layers to the base model, and utilizes tree attention to enable *Multi-Token Generation*. To further boost efficiency, it reuses frequent n-grams (phrases) from earlier text, reducing redundant computations.
#### **2. Dynamic KV Cache Management**
TokenSwift intelligently prunes less important KV pairs while preserving critical context. It keeps the initial prompt’s KV cache intact and dynamically updates the rest based on importance scores derived from attention patterns.
#### **3. Contextual Penalty and Random N-gram Selection**
To combat repetition, TokenSwift penalizes recently generated tokens within a sliding window, nudging the model toward diverse outputs. This works alongside sampling strategies like [Nucleus Sampling](https://arxiv.org/pdf/1904.09751), [min-<math><mi>p</mi></math>](https://arxiv.org/pdf/2407.01082), and [<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>η</mi></math>-sampling](https://arxiv.org/pdf/2210.15191)

### Results: 3x Faster, Scalable, and Robust

<a href="#table1">Table 1</a> and <a href="#table2">Table 2</a> are the main results, showing TokenSwift can consistenly achieve over <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn>  <mo>×</mo></math> acceleration across various model scales and architecture.
<div class="figure-block" id="table1">
  <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/table1.png' | relative_url }}" style="width: 100%; max-width: 1000px; height: auto"/>
  <figcaption><span class="dnerf">Table 1.</span> Experimental results for LLaMA2 and LLaMA3.1 under varying prefix lengths, generating sequences from 20K to 100K tokens.</figcaption>
</div>


<div class="figure-block" id="table2">
  <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/table2.png' | relative_url }}" style="width: 100%; max-width: 1000px; height: auto"/>
  <figcaption><span class="dnerf">Table 2.</span> Experimental results of TokenSwift for Qwen2.5 across different scales under prefix length 4096, generating sequences from 20K to 100K tokens. The time is measured in minutes. </figcaption>
</div>


<div style="display: flex; justify-content: center; align-items: flex-start;">
  <div class="figure-block">
    <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/abl_ngram.png' | relative_url }}" style="width: 100%; max-width: 1000px; height: auto"/>
    <figcaption><span class="dnerf">Figure 3.</span> Ablation on Token Reutilization: Enabling Token Reutilization (<math><mi>k</mi></math>=20) significantly improves the overall acceptance rate and speedup throughout the generation process. </figcaption>
  </div>
  <div class="figure-block">
    <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/abl_penalty.png' | relative_url }}" style="width: 100%; max-width: 1000px; height: auto"/>
    <figcaption><span class="dnerf">Figure 4.</span> Ablation on Contextual Penalty: Applying Contextual Penalty significantly improves the diversity of generation despite the sampling method. </figcaption>
  </div>
</div>


  <div class="figure-block" id="case">
  <img src="{{ 'https://bigai-nlco.github.io/TokenSwift/assets/img/case.png' | relative_url }}" style="width: 50%; max-width: 1000px; height: auto"/>
  <figcaption>Figure 5. <span class="dnerf">Case Study on Llama3.1-8b</span> Left: fragments of generated text without Contextual Penalty. Right: fragments of generated text with Contextual Penalty. The <span style="color: blue">blue</span> text is the repetition part. </figcaption>
</div>
