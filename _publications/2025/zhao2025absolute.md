---
layout: publication
type: article
title: >
    Absolute Zero: Reinforced Self-play Reasoning with Zero Data
author: Zhao, Andrew and Wu, Yiran and Yue, Yang and Wu, Tong and Xu, Quentin and Yue, Yang and Lin, Matthieu and Wang, Shenzhi and Wu, Qingyun and Zheng#, Zilong and Huang#, Gao
year: 2025
selected: true
arxiv: "2505.03335"
code: https://github.com/LeapLabTHU/Absolute-Zero-Reasoner
website: https://andrewzh112.github.io/absolute-zero-reasoner/
model: https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b
github_star: true
show_details: true
abbr: NeurIPS'25
venue: NeurIPS
award: Spotlight
medias:
  - name: Wired
    url: https://www.wired.com/story/ai-models-keep-learning-after-training-research/
  - name: X
    url: https://x.com/_AndrewZhao/status/1919920459748909288
badges:
  - url: https://huggingface.co/papers/2505.03335
    src: >
      <span class="hf-paper-badge">#1 Paper of the Day</span>

abstract: >
    Reinforcement learning with verifiable rewards (RLVR) has shown promise in enhancing the reasoning capabilities of large language models by learning directly from outcome-based rewards. Recent RLVR works that operate under the zero setting avoid supervision in labeling the reasoning process, but still depend on manually curated collections of questions and answers for training. The scarcity of high-quality, human-produced examples raises concerns about the long-term scalability of relying on human supervision, a challenge already evident in the domain of language model pretraining. Furthermore, in a hypothetical future where AI surpasses human intelligence, tasks provided by humans may offer limited learning potential for a superintelligent system. To address these concerns, we propose a new RLVR paradigm called Absolute Zero, in which a single model learns to propose tasks that maximize its own learning progress and improves reasoning by solving them, without relying on any external data. Under this paradigm, we introduce the Absolute Zero Reasoner (AZR), a system that self-evolves its training curriculum and reasoning ability by using a code executor to both validate proposed code reasoning tasks and verify answers, serving as an unified source of verifiable reward to guide open-ended yet grounded learning. Despite being trained entirely without external data, AZR achieves overall SOTA performance on coding and mathematical reasoning tasks, outperforming existing zero-setting models that rely on tens of thousands of in-domain human-curated examples. Furthermore, we demonstrate that AZR can be effectively applied across different model scales and is compatible with various model classes.
bibtex: >
    @inproceedings{zhao2025absolutezero,
        title={Absolute Zero: Reinforced Self-play Reasoning with Zero Data},
        author={Andrew Zhao and Yiran Wu and Yang Yue and Tong Wu and Quentin Xu and Yang Yue and Matthieu Lin and Shenzhi Wang and Qingyun Wu and Zilong Zheng and Gao Huang},
        year={2025},
        booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
        url={https://arxiv.org/abs/2505.03335},
    }
related_publications:
  - li2025latentseek
  - zhao2025diverct
---

### Out-of-Distribution General Reasoning Performance

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/azr_teaser.jpg" }}" />
<figcaption>Figure 1. <span style="font-weight: 400">Absolute Zero Reasoner achieves state-of-the-art performance with <span class="highlight">ZERO DATA</span>.</span> Without relying on any gold labels or human-defined queries, our Absolute Zero Reasoner trained using our proposed self-play approach demonstrates remarkable out-of-distribution reasoning capabilities, even outperforming models trained on tens of thousands of expert-labeled in-domain examples.</figcaption>
</div>


### Absolute Zero Paradigm

Traditional approaches to training reasoning models rely heavily on human-curated data:
- **Supervised Fine-Tuning (SFT)** requires datasets with human-written queries, rationales, and answers.
- **Reinforcement Learning with Verifiable Rewards (RLVR)** still needs human-labeled tasks and answers, even if the model generates its own reasoning.

The **Absolute Zero** paradigm eliminates this dependency on human data. The model simultaneously proposes tasks, solves them, and learns from both stages through self-play. As shown in Figure 1, the agent autonomously creates tasks optimized for learnability and learns to solve them using a unified model.

The agent $$\pi$$ acts in two roles: as a proposer $$\pi^{\text{propose}}$$ that generates tasks $$\tau$$, and as a solver $$\pi^{\text{solve}}$$ that produces answers $$y$$. The environment e validates proposed tasks into $$(x, y\star)$$ pairs and provides both learnability rewards $$r^{\text{propose}}$$ and solution rewards $$r^{\text{solve}}$$. This enables continuous self-improvement without any human-curated data.


<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/az.png" }}" />
<figcaption>Figure 1. <span style="font-weight: 400">Absolute Zero Paradigm.</span>  Supervised learning relies on human-curated reasoning traces for behavior cloning. Reinforcement learning from verified rewards enables agents to self-learn reasoning, but still depends on expert-defined learning distribution and a respective set of curated QA pairs, demanding domain expertise and manual effort. In contrast, we introduce a new paradigm, Absolute Zero, for training reasoning models without any human-curated data. We envision that the agent should autonomously propose tasks optimized for learnability and learn how to solve them using a unified model. The agent learns by interacting with an environment that provides verifiable feedback, enabling reliable and continuous self-improvement entirely without human intervention.</figcaption>
</div>

### Absolute Zero Reasoner

The Absolute Zero Reasoner (AZR) is our first implementation of the Absolute Zero Paradigm. AZR uses a unified language model that serves dual roles while learning through code-based reasoning challenges. The model works through a continuous self-improvement loop without requiring any human-curated data.


#### Propose and Solve Roles
The Absolute Zero Reasoner employs a unified model that acts in two complementary roles:

- **Proposer Role:** Generates tasks with high learning potential - neither too easy nor impossible for the current solver. The model is rewarded for creating challenges that provide meaningful learning opportunities.
- **Solver Role:** Attempts to solve the proposed problems, receiving binary rewards based on the correctness of solutions, verified through Python execution.

For the proposer, we design a specialized reward function based on Monte Carlo rollouts that encourages the generation of tasks with optimal difficulty - problems where the solver sometimes succeeds and sometimes fails. This creates the richest learning signal for continuous improvement.

#### Reasoning Modes
As shown in Figure 2, the Absolute Zero Reasoner operates across three fundamental reasoning modes, each focusing on different aspects of a triplet (program, input, output):

- **Deduction:** Predicting the output given a program and input, capturing step-by-step logical reasoning. This tests the model's ability to trace program execution.
- **Abduction:** Inferring a plausible input given a program and its output, resembling trial-and-error or search processes. This tests the model's ability to work backward from results.
- **Induction:** Synthesizing a program from input-output examples, requiring generalization from partial information. This tests the model's ability to discover underlying patterns.

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/azr.png" }}" />
<figcaption>Figure 2. <span style="font-weight: 400">Absolute Zero Reasoner Training Overview.</span> At every iteration, Absolute Zero Reasoner first PROPOSES a batch of tasks, conditioned on past self-generated triplets stored in a buffer and a particular task type: abduction, deduction, or induction. From these generated tasks, Python is used to filter and construct valid code-based reasoning questions. A learnability reward $r_{\rm propose}$ is also calculated for each proposed task. The Absolute Zero Reasoner then SOLVES the batch of reasoning questions. Python is used again to verify the generated responses and compute the accuracy reward $r_{\rm resolve}$. Finally, the Absolute Zero Reasoner is jointly updated using both $r_{\rm propose}$ and $r_{\rm resolve}$ across all three task types, using TRR++.</figcaption>
</div>

#### Absolute Zero Reasoner Algorithm

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/algorithm.png" }}" />
<figcaption>Algorithm 1. <span style="font-weight: 400">Self-Play Training of Absolute Zero Reasoner (AZR)</span>  </figcaption>
</div>

### Results

#### Main Results

<div class="figure-block">
<table class="table-hover" data-toggle="table" width="100%">
    <thead>
        <tr>
            <th>Model</th>
            <th>Base</th>
            <th>#data</th>
            <th>HEval<sup>+</sup></th>
            <th>MBPP<sup>+</sup></th>
            <th>LCBv5</th>
            <th>AME24</th>
            <th>AME25</th>
            <th>AMC</th>
            <th>M500</th>
            <th>Minva</th>
            <th>Olypiad</th>
            <th>CAvg</th>
            <th>MAvg</th>
            <th>AVG</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="15"><span style="font-weight: 400">Base Models</span></td>
        </tr>
        <tr>
            <td style="font-weight: 400">Qwen2.5-7B</td>
            <td>-</td>
            <td>-</td>
            <td>73.2</td>
            <td>65.3</td>
            <td>17.5</td>
            <td>6.7</td>
            <td>3.3</td>
            <td>37.5</td>
            <td>64.8</td>
            <td>25.0</td>
            <td>27.7</td>
            <td>52.0</td>
            <td>27.5</td>
            <td>39.8</td>
        </tr>
        <tr>
            <td style="font-weight: 400">Qwen2.5-7B-Ins</td>
            <td>-</td>
            <td>-</td>
            <td>75.0</td>
            <td>68.5</td>
            <td>25.5</td>
            <td>13.3</td>
            <td>6.7</td>
            <td>52.5</td>
            <td>76.4</td>
            <td>35.7</td>
            <td>37.6</td>
            <td>56.3</td>
            <td>37.0</td>
            <td>46.7</td>
        </tr>
        <tr>
            <td style="font-weight: 400">Qwen2.5-7B-Coder</td>
            <td>-</td>
            <td>-</td>
            <td>80.5</td>
            <td>69.3</td>
            <td>19.9</td>
            <td>6.7</td>
            <td>3.3</td>
            <td>40.0</td>
            <td>54.0</td>
            <td>17.3</td>
            <td>21.9</td>
            <td>56.6</td>
            <td>23.9</td>
            <td>40.2</td>
        </tr>
        <tr>
            <td style="font-weight: 400">Qwen2.5-7B-Math</td>
            <td>-</td>
            <td>-</td>
            <td>61.0</td>
            <td>57.9</td>
            <td>16.2</td>
            <td>10.0</td>
            <td>16.7</td>
            <td>42.5</td>
            <td>64.2</td>
            <td>15.4</td>
            <td>28.0</td>
            <td>45.0</td>
            <td>29.5</td>
            <td>37.3</td>
        </tr>
        <tr>
            <td colspan="15"><span style="font-weight: 400">Zero-Style Reasoners Trained on Curated Coding Data</span></td>
        </tr>
        <tr>
            <td style="font-weight: 400">AceCoder-RM</td>
            <td>Ins</td>
            <td>22k</td>
            <td>79.9</td>
            <td>71.4</td>
            <td>23.6</td>
            <td>20.0</td>
            <td>6.7</td>
            <td>50.0</td>
            <td>76.4</td>
            <td>34.6</td>
            <td>36.7</td>
            <td>58.3</td>
            <td>37.4</td>
            <td>47.9</td>
        </tr>
        <tr>
            <td style="font-weight: 400">AceCoder-Rule</td>
            <td>Ins</td>
            <td>22k</td>
            <td>77.4</td>
            <td>69.0</td>
            <td>19.9</td>
            <td>13.3</td>
            <td>6.7</td>
            <td>50.0</td>
            <td>76.0</td>
            <td>37.5</td>
            <td>37.8</td>
            <td>55.4</td>
            <td>36.9</td>
            <td>46.2</td>
        </tr>
        <tr>
            <td style="font-weight: 400">AceCoder-RM</td>
            <td>Coder</td>
            <td>22k</td>
            <td>78.0</td>
            <td>66.4</td>
            <td>27.5</td>
            <td>13.3</td>
            <td>3.3</td>
            <td>27.5</td>
            <td>62.6</td>
            <td>29.4</td>
            <td>29.0</td>
            <td>57.3</td>
            <td>27.5</td>
            <td>42.4</td>
        </tr>
        <tr>
            <td style="font-weight: 400">AceCoder-Rule</td>
            <td>Coder</td>
            <td>22k</td>
            <td>80.5</td>
            <td>70.4</td>
            <td>29.0</td>
            <td>6.7</td>
            <td>6.7</td>
            <td>40.0</td>
            <td>62.8</td>
            <td>27.6</td>
            <td>27.4</td>
            <td>60.0</td>
            <td>28.5</td>
            <td>44.3</td>
        </tr>
        <tr>
            <td style="font-weight: 400">CodeR1-LC2k</td>
            <td>Ins</td>
            <td>2k</td>
            <td>81.7</td>
            <td>71.7</td>
            <td>28.1</td>
            <td>13.3</td>
            <td>10.0</td>
            <td>45.0</td>
            <td>75.0</td>
            <td>33.5</td>
            <td>36.7</td>
            <td>60.5</td>
            <td>35.6</td>
            <td>48.0</td>
        </tr>
        <tr>
            <td style="font-weight: 400">CodeR1-12k</td>
            <td>Ins</td>
            <td>12k</td>
            <td>81.1</td>
            <td>73.5</td>
            <td>29.3</td>
            <td>13.3</td>
            <td>3.3</td>
            <td>37.5</td>
            <td>74.0</td>
            <td>35.7</td>
            <td>36.9</td>
            <td>61.3</td>
            <td>33.5</td>
            <td>47.4</td>
        </tr>
        <tr>
            <td colspan="15"><span style="font-weight: 400">Zero-Style Reasoners Trained on Curated Math Data</span></td>
        </tr>
        <tr>
            <td style="font-weight: 400">PRIME-Zero</td>
            <td>Coder</td>
            <td>484k</td>
            <td>49.4</td>
            <td>51.1</td>
            <td>11.0</td>
            <td>23.3</td>
            <td>23.3</td>
            <td>67.5</td>
            <td>81.2</td>
            <td>37.9</td>
            <td>41.8</td>
            <td>37.2</td>
            <td class="best-result">45.8</td>
            <td>41.5</td>
        </tr>
        <tr>
            <td style="font-weight: 400">SimpleRL-Zoo</td>
            <td>Base</td>
            <td>8.5k</td>
            <td>73.2</td>
            <td>63.2</td>
            <td>25.6</td>
            <td>16.7</td>
            <td>3.3</td>
            <td>57.5</td>
            <td>77.0</td>
            <td>35.7</td>
            <td>41.0</td>
            <td>54.0</td>
            <td>38.5</td>
            <td>46.3</td>
        </tr>
        <tr>
            <td style="font-weight: 400">Oat-Zero</td>
            <td>Math</td>
            <td>8.5k</td>
            <td>62.2</td>
            <td>59.0</td>
            <td>15.2</td>
            <td>30.0</td>
            <td>16.7</td>
            <td>62.5</td>
            <td>80.0</td>
            <td>34.9</td>
            <td>41.6</td>
            <td>45.5</td>
            <td>44.3</td>
            <td>44.9</td>
        </tr>
        <tr>
            <td style="font-weight: 400">ORZ</td>
            <td>Base</td>
            <td>57k</td>
            <td>80.5</td>
            <td>64.3</td>
            <td>22.0</td>
            <td>13.3</td>
            <td>16.7</td>
            <td>60.0</td>
            <td>81.8</td>
            <td>32.7</td>
            <td>45.0</td>
            <td>55.6</td>
            <td>41.6</td>
            <td>48.6</td>
        </tr>
        <tr>
            <td  colspan="15"><span style="font-weight: 400">Absolute Zero Training w/ No Curated Data (Ours)</span></td>
        </tr>
        <tr style="background-color:rgba(37, 99, 235, 0.1)">
            <td style="font-weight: 400">AZR (Ours)</td>
            <td>Base</td>
            <td class="best-result">0</td>
            <td>71.3 <span style="color:rgb(239, 68, 68)">-1.9</span></td>
            <td>69.1 <span style="color:rgb(16, 185, 129)">+3.8</span></td>
            <td>25.3 <span style="color:rgb(16, 185, 129)">+7.8</span></td>
            <td>13.3 <span style="color:rgb(16, 185, 129)">+6.6</span></td>
            <td>13.3 <span style="color:rgb(16, 185, 129)">+10.0</span></td>
            <td>52.5 <span style="color:rgb(16, 185, 129)">+15.0</span></td>
            <td>74.4 <span style="color:rgb(16, 185, 129)">+9.6</span></td>
            <td>38.2 <span style="color:rgb(16, 185, 129)">+13.2</span></td>
            <td>38.5 <span style="color:rgb(16, 185, 129)">+10.8</span></td>
            <td>55.2 <span style="color:rgb(16, 185, 129)">+3.2</span></td>
            <td>38.4 <span style="color:rgb(16, 185, 129)">+10.9</span></td>
            <td>46.8 <span style="color:rgb(16, 185, 129)">+7.0</span></td>
        </tr>
        <tr style="background-color:rgba(37, 99, 235, 0.1)">
            <td style="font-weight: 400">AZR (Ours)</td>
            <td>Coder</td>
            <td class="best-result">0</td>
            <td>83.5 <span style="color:rgb(16, 185, 129)">+3.0</span></td>
            <td>69.6 <span style="color:rgb(16, 185, 129)">+0.3</span></td>
            <td>31.7 <span style="color:rgb(16, 185, 129)">+11.8</span></td>
            <td>20.0 <span style="color:rgb(16, 185, 129)">+13.3</span></td>
            <td>10.0 <span style="color:rgb(16, 185, 129)">+6.7</span></td>
            <td>57.5 <span style="color:rgb(16, 185, 129)">+17.5</span></td>
            <td>72.6 <span style="color:rgb(16, 185, 129)">+22.6</span></td>
            <td>36.4 <span style="color:rgb(16, 185, 129)">+19.1</span></td>
            <td>38.2 <span style="color:rgb(16, 185, 129)">+16.3</span></td>
            <td class="best-result">61.6 <span style="color:rgb(16, 185, 129)">+5.0</span></td>
            <td>39.1 <span style="color:rgb(16, 185, 129)">+15.2</span></td>
            <td class="best-result">50.4 <span style="color:rgb(16, 185, 129)">+10.2</span></td>
        </tr>
    </tbody>
</table>
<figcaption>Table 1. <span style="font-weight: 400">Performance of RL-Trained Reasoner on Reasoning Benchmarks Based on Qwen2.5-7B Models.</span> Performance of various models is evaluated on three standard code benchmarks (HumanEval+, MBPP+, LCB v5) and six math benchmarks (AIME'24, AIME'25, AMC'23, MATH500, Minerva, OlympiadBench). Average performance across coding and math benchmarks is calculated as average of the two averages: AVG = (CAvg + MAvg) / 2. We use + for absolute percentage increase from base model. All models are trained using different variants of the Qwen2.5-7B model, with the variant and data usage labeled.</figcaption>
</div>

#### Scaling Results

<div class="figure-block">
<table class="table-hover" data-toggle="table" width="100%">
      <thead>
          <tr>
              <th>Model Family</th>
              <th>Variant</th>
              <th>Code Avg</th>
              <th>Math Avg</th>
              <th>Total Avg</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td style="font-weight: 400">Qwen2.5-3B Coder</td>
              <td></td>
              <td>51.2</td>
              <td>18.8</td>
              <td>35.0</td>
          </tr>
          <tr style="background-color:rgba(37, 99, 235, 0.1)">
              <td style="font-weight: 400">Qwen2.5-3B Coder</td>
              <td>+ AZR (Ours)</td>
              <td style="font-weight: 400">54.9 <span style="color:rgb(16, 185, 129)">+3.7</span></td>
              <td style="font-weight: 400">26.5 <span style="color:rgb(16, 185, 129)">+7.7</span></td>
              <td style="font-weight: 400">40.7 <span style="color:rgb(16, 185, 129)">+5.7</span></td>
          </tr>
          <tr>
              <td class="section-header" colspan="5"></td>
          </tr>
          <tr>
              <td style="font-weight: 400">Qwen2.5-7B Coder</td>
              <td></td>
              <td>56.6</td>
              <td>23.9</td>
              <td>40.2</td>
          </tr>
          <tr style="background-color:rgba(37, 99, 235, 0.1)">
              <td style="font-weight: 400">Qwen2.5-7B Coder</td>
              <td>+ AZR (Ours)</td>
              <td style="font-weight: 400">61.6 <span style="color:rgb(16, 185, 129)">+5.0</span></td>
              <td style="font-weight: 400">39.1 <span style="color:rgb(16, 185, 129)">+15.2</span></td>
              <td style="font-weight: 400">50.4 <span style="color:rgb(16, 185, 129)">+10.2</span></td>
          </tr>
          <tr>
              <td class="section-header" colspan="5"></td>
          </tr>
          <tr>
              <td style="font-weight: 400">Qwen2.5-14B Coder</td>
              <td></td>
              <td>60.0</td>
              <td>20.2</td>
              <td>40.1</td>
          </tr>
          <tr style="background-color:rgba(37, 99, 235, 0.1)">
              <td style="font-weight: 400">Qwen2.5-14B Coder</td>
              <td>+ AZR (Ours)</td>
              <td style="font-weight: 400">63.6 <span style="color:rgb(16, 185, 129)">+3.6</span></td>
              <td style="font-weight: 400">43.0 <span style="color:rgb(16, 185, 129)">+22.8</span></td>
              <td style="font-weight: 400">53.3 <span style="color:rgb(16, 185, 129)">+13.2</span></td>
          </tr>
      </tbody>
  </table>
  <figcaption>Table 2. <span style="font-weight: 400">Out-of-distribution reasoning performance</span> across different model sizes, reported as the average of code tasks, math tasks, and their overall average. We examine the effects of scaling model size from 3B to 14B parameters.
  </figcaption>
</div>

Given the strong performance of coder models in the 7B category, we extend the analysis by evaluating smaller and larger variants: `Qwen2.5-3B-Coder` and `Qwen2.5-14B-Coder`. Due to the absence of existing baselines for these zero-style reasoner models, we compare each model's performance to its corresponding base coder model.

The results reveal a clear trend: our method delivers *greater gains on larger, more capable models*. In the in-distribution setting, the 7B and 14B models continue to improve beyond 200 training steps, whereas the smaller 3B model appears to plateau. For out-of-distribution domains, larger models also show greater overall performance improvements than smaller ones: +5.7, +10.2, +13.2 overall performance gains, respectively for 3B, 7B and 14B. This is an encouraging sign, suggesting that scaling enhances the effectiveness of AZR. In future work, we aim to investigate the scaling laws that govern performance in the Absolute Zero paradigm.

#### Other Key Findings

- **Code priors amplify reasoning.** The base Qwen-Coder-7b model started with math performance 3.6 points lower than Qwen-7b. But after AZR training for both models, the coder variant surpassed the base by 0.7 points, suggesting that strong coding capabilities may potentially amplify overall reasoning improvements after AZR training.

- **Cross domain transfer is more pronounced for AZR.** After RLVR, expert code models raise math accuracy by only 0.65 points on average, whereas AZR-Base-7B and AZR-Coder-7B trained on self-proposed code reasoning tasks improve math average by 10.9 and 15.2, respectively, demonstrating much stronger generalized reasoning capability gains.

- **Comments as intermediate plans emerge naturally.** When solving code induction tasks, AZR often interleaves step-by-step plans as comments and code (see Figure 4), resembling the ReAct prompting framework. Similar behavior has been observed in much larger formal-math models such as DeepSeek Prover v2 (671B). We therefore believe that allowing the model to use intermediate scratch-pads when generating long-form answers may be beneficial in other domains as well.

- **Cognitive Behaviors and Token length depends on reasoning mode.** Distinct cognitive behaviors—such as step-by-step reasoning, enumeration, and trial-and-error all emerged through AZR training, but different behaviors are particularly evident across different types of tasks, a canonical example is trial-and-error in abduction, as shown in Figure 5. Furthermore token counts grow over AZR training, but the magnitude of increase also differs by task types: abduction grows the most because the model performs trial-and-error until output matches, whereas deduction and induction grow modestly.

- **Safety alarms ringing.** We observe AZR with Llama3.1-8b as the base occasionally produces concerning chains of thought, we term the "uh-oh moment", example shown in Figure 6, highlighting the need for future work on safety-aware training.

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/react_program.png" }}" />
<figcaption>Figure 4. <span style="font-weight: 400">Example of Comments as Intermediate Plans.</span> The model naturally develops a habit of using comments as intermediate planning steps when solving complex reasoning tasks, similar to the ReAct prompting framework. This emergent behavior demonstrates how the model breaks down problems into manageable steps through self-commentary.
</figcaption>
</div>

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/aaa.png" }}" />
<figcaption>Figure 5. <span style="font-weight: 400">Example of a Model-Proposed Task and Its Response for Solving an Abduction Task.</span> (Left) The model autonomously proposes an input and program for the abduction task. We execute the program to verify its validity and obtain the corresponding output. (Right) The model's reasoning process when solving the abduction task: given the code and output, it attempts to infer the original input. The model begins by analyzing the program, proposes an initial input, and reasons through the code to produce an output. If there is a mismatch, it reflects on the discrepancy and iteratively adjusts the input until the generated output matches the target. Interestingly, the agent arrives at a different input than the gold one, but since it produces the correct output, the answer is considered correct.
</figcaption>
</div>

<div class="figure-block">
<img src="{{ "/assets/img/projects/zhao2025absolute/uh_oh.png" }}" />
<figcaption>Figure 6. <span style="font-weight: 400">Example of "Uh-Oh Moment" in AZR Training.</span> When using Llama3.1-8b as the base model, we occasionally observe concerning chains of thought during reasoning. This example highlights the need for safety-aware training in future iterations of the Absolute Zero paradigm.
</figcaption>
</div>
