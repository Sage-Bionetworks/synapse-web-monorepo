// import healthSvg from '@/assets/health.svg?url'
import B2AI_ORG_114_svg from '@/assets/B2AI_ORG_114.svg?url'
import B2AI_ORG_115_svg from '@/assets/B2AI_ORG_115.svg?url'
import B2AI_ORG_116_svg from '@/assets/B2AI_ORG_116.svg?url'
import B2AI_ORG_117_svg from '@/assets/B2AI_ORG_117.svg?url'

import B2AI_ORG_114_html from '@/assets/B2AI_ORG_114_d4d.html?raw'
import B2AI_ORG_116_html from '@/assets/B2AI_ORG_116_d4d.html?raw'
import B2AI_ORG_117_html from '@/assets/B2AI_ORG_117_d4d.html?raw'

export const imageUrls = {
  'B2AI_ORG:114': B2AI_ORG_114_svg,
  'B2AI_ORG:115': B2AI_ORG_115_svg,
  'B2AI_ORG:116': B2AI_ORG_116_svg,
  'B2AI_ORG:117': B2AI_ORG_117_svg,
}

export const GCInfo = {
  'B2AI_ORG:114': {
    orgName: 'Salutogenesis Grand Challenge',
    aka: 'AI-READI',
    other:
      'Artificial Intelligence Ready and Equitable Atlas for Diabetes Insights',
    d4dHtml: B2AI_ORG_114_html,
    svg: B2AI_ORG_114_svg,
  },
  'B2AI_ORG:115': {
    orgName: 'AI/ML for Clinical Care Grand Challenge',
    aka: 'CHoRUS',
    other:
      'Patient-Focused Collaborative Hospital Repository Uniting Standards',
    svg: B2AI_ORG_115_svg,
  },
  'B2AI_ORG:116': {
    orgName: 'Functional Genomics Grand Challenge',
    aka: 'CM4AI',
    other: 'Cell Maps for AI',
    d4dHtml: B2AI_ORG_116_html,
    svg: B2AI_ORG_116_svg,
  },
  'B2AI_ORG:117': {
    orgName: 'Precision Public Health Grand Challenge',
    aka: 'Voice',
    other: 'Voice as a Biomarker of Health',
    d4dHtml: B2AI_ORG_117_html,
    svg: B2AI_ORG_117_svg,
  },
}

GCInfo['B2AI_ORG:114'].d4dHtml = `
<div class="container">
<h1>DatasetCollection</h1>
<ul>
    <li><span class="yaml-key">resources:</span>
        <ul>
            <li>
                <div class="list-item-card main-resource-card">
                    <div class="card-header">Flagship Dataset of Type 2 Diabetes from the AI-READI Project</div>
                    <ul>
                        <li><span class="yaml-key">id:</span> <span class="yaml-value">10.60775/fairhub.2</span></li>
                        <li><span class="yaml-key">version:</span> <span class="yaml-value">2.0.0</span></li>
                        <li><span class="yaml-key">doi:</span> <span class="yaml-value">10.60775/fairhub.2</span></li>
                        <li><span class="yaml-key">issued:</span> <span class="yaml-value">2024-11-08</span></li>
                        <li><span class="yaml-key">description:</span> <span class="yaml-value">This dataset contains data from 1067 participants that was collected between July 19, 2023 and July 31, 2024. Data from multiple modalities are included. A full list is provided in the Data Standards section below. The data in this dataset contain no protected health information (PHI). Information related to the sex and race/ethnicity of the participants as well as medication used has also been removed. The dataset contains 165,051 files and is around 2.01 TB in size. A detailed description of the dataset is available in the AI-READI documentation for v2.0.0 of the dataset at docs.aireadi.org.</span></li>
                        <li><span class="yaml-key">keywords:</span> <span class="simple-list-container"><span class="yaml-value">Diabetes mellitus</span><span class="yaml-value">Machine Learning</span><span class="yaml-value">Artificial Intelligence</span><span class="yaml-value">Electrocardiography</span><span class="yaml-value">Continuous Glucose Monitoring</span><span class="yaml-value">Retinal imaging</span><span class="yaml-value">Eye exam</span></span></li>
                        <li><span class="yaml-key">bytes:</span> <span class="yaml-value">2209863334298</span></li>
                        <li><span class="yaml-key">publisher:</span>
                            <ul>
                                <li><span class="yaml-key">name:</span> <span class="yaml-value">FAIRhub</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">conforms_to:</span> <span class="yaml-value">Clinical Dataset Structure (CDS) v0.1.1</span></li>
                        <li><span class="yaml-key">was_derived_from:</span> <span class="yaml-value">10.60775/fairhub.1</span></li>
                        <li><span class="yaml-key">creators:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">AI-READI Consortium</div>
                                        <ul>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">funders:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">Funder: NIH</div>
                                        <ul>
                                            <li><span class="yaml-key">grant:</span>
                                                <ul>
                                                    <li><span class="yaml-key">name:</span> <span class="yaml-value">NIH Bridge2AI Common Fund program</span></li>
                                                    <li><span class="yaml-key">grant_number:</span> <span class="yaml-value">1OT2OD032644</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">instances:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">Type: Participants</div>
                                        <ul>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">Instances represent participants in the study.</span></li>
                                            <li><span class="yaml-key">counts:</span> <span class="yaml-value">1067</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">Type: Files</div>
                                        <ul>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">Instances represent data files.</span></li>
                                            <li><span class="yaml-key">counts:</span> <span class="yaml-value">165051</span></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">is_deidentified:</span>
                            <ul>
                                <li><span class="yaml-key">identifiable_elements_present:</span> <span class="yaml-value">false</span></li>
                                <li><span class="yaml-key">description:</span> <span class="yaml-value">The data in this dataset contain no protected health information (PHI). Information related to the sex and race/ethnicity of the participants as well as medication used has also been removed.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">sensitive_elements:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card">
                                        <ul>
                                            <li><span class="yaml-key">sensitive_elements_present:</span> <span class="yaml-value">true</span></li>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">The dataset contains health information related to Type 2 Diabetes Mellitus (T2DM). Information that could directly reveal race or ethnic origins of participants, and specific medication details, have been removed from this version of the dataset.</span></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">subpopulations:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card">
                                        <ul>
                                            <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">false</span></li>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">For the publicly released dataset version 2.0.0, information used to directly identify subpopulations based on sex and race/ethnicity has been removed. Demographic information for the original cohort, as used in suggested conceptual splits, is detailed in the 'subsets' attribute of this dataset.</span></li>
                                            <li><span class="yaml-key">identification:</span> <span class="yaml-value">[]</span></li>
                                            <li><span class="yaml-key">distribution:</span> <span class="yaml-value">[]</span></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">purposes:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The Artificial Intelligence Ready and Exploratory Atlas for Diabetes Insights (AI-READI) project seeks to create a flagship ethically-sourced dataset to enable future generations of artificial intelligence/machine learning (AI/ML) research to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health. The long-term objective for this project is to develop a foundational dataset in T2DM, agnostic to existing classification criteria or biases, which can be used to reconstruct a temporal atlas of T2DM development and reversal towards health (i.e., salutogenesis). Data will be optimized for downstream AI/ML research and made publicly available.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">tasks:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Enable future generations of artificial intelligence/machine learning (AI/ML) research to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health. Reconstruct a temporal atlas of T2DM development and reversal towards health.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">acquisition_methods:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Data was collected from 1067 participants using multiple modalities. These include: cardiac_ecg (WaveForm DataBase), clinical_data (Observational Medical Outcomes Partnership Common Data Model), environment (Earth Science Data Systems format), retinal_flio (DICOM), retinal_oct (DICOM), retinal_octa (DICOM), retinal_photography (DICOM), wearable_activity_monitor (Open mHealth), wearable_blood_glucose (Open mHealth). The protocol is detailed at docs.aireadi.org.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">collection_mechanisms:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Mechanisms include 12 lead ECG, Holter monitor, smartwatch, REDCap for clinical data, custom environmental sensor, fluorescence lifetime imaging ophthalmoscopy (FLIO), optical coherence tomography (OCT), optical coherence tomography angiography (OCTA), retinal photography, wearable fitness tracker, continuous glucose monitoring (CGM) device. Data organized following Clinical Dataset Structure (CDS) v0.1.1.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">data_collectors:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The AI-READI team of investigators.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">collection_timeframes:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Data was collected between July 19, 2023 and July 31, 2024.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">ethical_reviews:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The project aims to create an 'ethically-sourced dataset'. Specific ethical review board details or documentation links are not provided in this summary but would be expected for such a study. The protocol is available at docs.aireadi.org.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">preprocessing_strategies:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Processing for v2.0.0 is 'automated + custom'. Specific preprocessing steps include removal of protected health information (PHI), and removal of information related to sex, race/ethnicity, and specific medication used by participants (broader diabetes management categories are retained for splits).</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">raw_sources:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The distributed dataset has undergone de-identification and removal of certain variables. The text does not explicitly state if the 'raw' data prior to these modifications is saved or accessible separately.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">existing_uses:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The provided text describes the dataset's availability and intended uses; specific existing publications or systems using this v2.0.0 are not detailed on this page. Usage statistics (FAIRhub) show 3 views and no citations as of the document's context.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">use_repository:</span>
                            <ul>
                                <li><span class="yaml-key">description:</span> <span class="yaml-value">The Zenodo community (zenodo.org/communities/aireadi) and GitHub organization (github.com/AI-READI) may list projects or papers using the dataset. The FAIRhub page also has a 'Cited by' section.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">other_tasks:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The primary task is AI/ML research for T2DM insights and salutogenesis. Other potential tasks could include specific studies on individual data modalities or development of new data standards based on the CDS structure used.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">discouraged_uses:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Attempting to re-identify participants. Using the data for research unrelated to type 2 diabetes (as per access agreement). Any use that would violate the custom license terms detailed at https://doi.org/10.5281/zenodo.10642459.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">distribution_formats:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Accessible via FAIRhub. The dataset contains 165,051 files. Data types and their file formats: cardiac_ecg (WFDB), clinical_data (CSV, OMOP CDM), environment (ESDS), retinal_flio (DICOM), retinal_oct (DICOM), retinal_octa (DICOM), retinal_photography (DICOM), wearable_activity_monitor (Open mHealth), wearable_blood_glucose (Open mHealth).</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">distribution_dates:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Version 2.0.0: Nov 8, 2024</span></li>
                                <li class="description-list-item"><span class="yaml-value">Version 1.0.0: May 3, 2024</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">license_and_use_terms:</span>
                            <ul>
                                <li><span class="yaml-key">description:</span> <span class="yaml-value">This work is licensed under a custom license specifically tailored to enable the reuse of the AI-READI dataset for commercial or research purposes while putting strong requirements around data usage, security, and secondary sharing. More details are available in the License file included in the dataset and also available at https://doi.org/10.5281/zenodo.10642459.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">ip_restrictions:</span>
                            <ul>
                                <li><span class="yaml-key">description:</span> <span class="yaml-value">Accessing the dataset requires: Login in through a verified ID system. Agreeing to use the data only for type 2 diabetes related research. Agreeing to the license terms which set certain restrictions and obligations for data usage.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">maintainers:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">The AI-READI project (aireadi.org) is expected to maintain the dataset. Contact for the dataset is via https://aireadi.org/contact.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">updates:</span>
                            <ul>
                                <li class="description-list-item"><span class="yaml-value">Changes between versions are provided in the CHANGELOG file (also at docs.aireadi.org). Version 2.0.0 represents an update from v1.0.0 with more participants and refined processing.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">version_access:</span>
                            <ul>
                                <li><span class="yaml-key">description:</span> <span class="yaml-value">Multiple versions of the dataset are available and versioned with DOIs (e.g., Version 2.0.0: 10.60775/fairhub.2, Version 1.0.0: 10.60775/fairhub.1). FAIRhub lists these versions.</span></li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">external_resources:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card" style="background-color: #eef;">
                                        <div class="card-header">Documentation of the dataset: docs.aireadi.org (see Dataset v2.0.0 for this version)</div>
                                        <ul>
                                            <li><span class="yaml-value"><a href="https://docs.aireadi.org" target="_blank">docs.aireadi.org</a></span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-item-card" style="background-color: #eef;">
                                        <div class="card-header">AI-READI project website: aireadi.org</div>
                                        <ul>
                                            <li><span class="yaml-value"><a href="https://aireadi.org" target="_blank">aireadi.org</a></span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-item-card" style="background-color: #eef;">
                                        <div class="card-header">Zenodo community of the AI-READI project: zenodo.org/communities/aireadi</div>
                                        <ul>
                                            <li><span class="yaml-value"><a href="https://zenodo.org/communities/aireadi" target="_blank">zenodo.org/communities/aireadi</a></span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-item-card" style="background-color: #eef;">
                                        <div class="card-header">GitHub organization of the AI-READI project: github.com/AI-READI</div>
                                        <ul>
                                            <li><span class="yaml-value"><a href="https://github.com/AI-READI" target="_blank">github.com/AI-READI</a></span></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><span class="yaml-key">subsets:</span>
                            <ul>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">Training Set (Suggested Split)</div>
                                        <ul>
                                            <li><span class="yaml-key">is_data_split:</span> <span class="yaml-value">true</span></li>
                                            <li><span class="yaml-key">is_subpopulation:</span> <span class="yaml-value">false</span></li>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">Suggested training split comprising 747 participants.</span></li>
                                            <li><span class="yaml-key">instances:</span>
                                                <ul>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <div class="card-header">Type: Participants</div>
                                                            <ul>
                                                                <li><span class="yaml-key">counts:</span> <span class="yaml-value">747</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><span class="yaml-key">subpopulations:</span>
                                                <ul>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Race/Ethnicity</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">Hispanic: 144, Asian: 167, Black: 211, White: 225</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Sex</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">Male: 302, Female: 445</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Diabetes Status</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">No DM: 292, Lifestyle: 162, Oral: 235, Insulin: 58</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">Validation Set (Suggested Split)</div>
                                        <ul>
                                            <li><span class="yaml-key">is_data_split:</span> <span class="yaml-value">true</span></li>
                                            <li><span class="yaml-key">is_subpopulation:</span> <span class="yaml-value">false</span></li>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">Suggested validation split comprising 160 participants.</span></li>
                                            <li><span class="yaml-key">instances:</span>
                                                <ul>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <div class="card-header">Type: Participants</div>
                                                            <ul>
                                                                <li><span class="yaml-key">counts:</span> <span class="yaml-value">160</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><span class="yaml-key">subpopulations:</span>
                                                <ul>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Race/Ethnicity</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">Hispanic: 40, Asian: 40, Black: 40, White: 40</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Sex</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">Male: 80, Female: 80</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Diabetes Status</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">No DM: 40, Lifestyle: 40, Oral: 47, Insulin: 33</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-item-card">
                                        <div class="card-header">Test Set (Suggested Split)</div>
                                        <ul>
                                            <li><span class="yaml-key">is_data_split:</span> <span class="yaml-value">true</span></li>
                                            <li><span class="yaml-key">is_subpopulation:</span> <span class="yaml-value">false</span></li>
                                            <li><span class="yaml-key">description:</span> <span class="yaml-value">Suggested test split comprising 160 participants.</span></li>
                                            <li><span class="yaml-key">instances:</span>
                                                <ul>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <div class="card-header">Type: Participants</div>
                                                            <ul>
                                                                <li><span class="yaml-key">counts:</span> <span class="yaml-value">160</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><span class="yaml-key">subpopulations:</span>
                                                <ul>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Race/Ethnicity</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">Hispanic: 40, Asian: 40, Black: 40, White: 40</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Sex</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">Male: 80, Female: 80</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="list-item-card">
                                                            <ul>
                                                                <li><span class="yaml-key">subpopulation_elements_present:</span> <span class="yaml-value">true</span></li>
                                                                <li><span class="yaml-key">identification:</span> <span class="yaml-value">Diabetes Status</span></li>
                                                                <li><span class="yaml-key">distribution:</span> <span class="yaml-value">No DM: 40, Lifestyle: 40, Oral: 40, Insulin: 40</span></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
</ul>
</div>`
