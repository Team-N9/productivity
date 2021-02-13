<!-- README TITLE -->
# Calgary Hacks 2021: Productivity App  

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Project Information](#project-information)
  + [Dependencies](#dependencies)
* [Getting Started](#getting-started)
  + [Installation](#installation)
* [Usage](#usage)
  + [Explanation](#explanation)
* [Demo](#demo)
* [Team Members](#Team-members)
* [References](#References)

***
<!-- PROJECT INFORMATION -->
## Project Information

This is the repository for *Team9's Productivity App* for CalgaryHacks2021 . 

### Background Information and Hypothesis

COVID-19 is a global pandemic and represents one of the toughest health challenges in 2020 [[1]](#1).

### Dependencies

Currently, [git](https://ubc-mds.github.io/resources_pages/install_ds_stack_mac/#git). It will be implicitly assumed that users have this already installed. 

***
<!-- GETING STARTED -->

## Getting Started

Before getting started, note that the reference sequence has already been provided for convenience, and can be found [here](https://www.ncbi.nlm.nih.gov/nuccore/1798174254). Briefly, the pipeline was built with `Snakemake` and is split into the following steps:

1. Make sure that `git is installed`.

### Installation

To clone the repository, run the following shell command: 
```sh
git clone https://github.com/Team-N9/productivity.git
```

***
<!-- USAGE -->

## Usage 

Once the repository has been downloaded, more effort needs to be done to get the full installation. Unfortunately, an _environment.yml_ could not be provided as `pangolin` must be downloaded in a specific manner. 

### Explanation

1. Extracting FASTQ reads through the `sra-toolkit`.
    -`fasterq-dump --split-files SRR12960723 -O data`: `fasterq-dump` is a faster way to extract _fastq_ files from the `sra-toolkit`. `--split-files` indicate split reads, and the `-O` flag suggests output to a directory called _data_ 
    -afterwards, a `cat` is run to append the two paired ends read files together. If successful, remove the individual _fastq_ to save storage space


### Demo
<!-- DEMO  -->

To be noted: 

1. _combined.fasta_ is a _fasta_ file with the combined _fasta_ from all the samples.
2. _newcombined.fasta_ is another file except all the headers are changed to allow analysis (previously all headers were the same)
3. A series of _.bam_ files such as _SRR12960723.alignments.sorted.bam_ are the results of the allignment between reads and the reference genome provided.
4. Within the results folder, there will be two new files
    - lineage_report.csv which provides a report on the samples and the lineage they were called
    - covid_histogram.png which provides a visual perspective of the same data in the lineage report

Overall, while lineages A and C were anticipated, most samples were classified as lineage B.1. In other manuscripts, however, the B.1 lineage has also spread to North America, and was noted to start in New York City [[4]](#4)[[5]](#5). This specific lineage contains a specific mutation (D614G) within the Spike protein that has been been linked with higher contagion [[6]](#6). Newer reports seem to indicate that both B.1 and A.3 have also been commonly observed across the United States [[7]](#7). However, as the sample size was only limited to 5, it is difficult to come with definitive conclusions about which lineages are most common in Delaware. As more data is later acquired, more evidence can be brought up and perhaps targeted therapies at specific mutations in specific lineages may arise. 

***
<!-- TEAM -->
## Team-members

**Team Member** | **Degree** | **Hobbies** 
------ | ---------- | -------- | ------
Jeremy Fan | Bioinformatics | Annoying my roommate by cooking instant noodles at 3 AM 
***

<!-- REFERENCES -->
## References
<a id="1">[1]</a> 
Lee, M. (2020). Clinical Characteristics Of Early Noncritical Hospitalized Patients With Coronavirus Disease 2019 (Covid-19): A Single-Center Retrospective Study In New York City. doi:10.26226/morressier.5ebc261fffea6f735881a237
