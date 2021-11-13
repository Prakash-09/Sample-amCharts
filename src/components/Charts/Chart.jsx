import React from 'react';
import './Chart.css';
import * as am5 from "@amcharts/amcharts5";
import * as html2canvas from "@amcharts/amcharts5";
import * as html2pdf from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import * as am5radar from "@amcharts/amcharts5/radar"
import * as am5xy from "@amcharts/amcharts5/xy";

import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

let rawData = [
    {
        "janssenOneAccelerator": "Select for Success",
        "qualityEnabler": "Upgrade operating model",
        "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q"
        ],
        "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Huimin Yuan",
        "bamAlignment": "TBD",
        "rpaValueScore": "",
        "investmentType": "",
        "projectManager": "",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Select for Success",
        "qualityEnabler": "Upgrade operating model",
        "initiative": "Quality operating model, process, and quality system (for Vaccines)",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQM/JSCQ/BRQC",
        "projectLead": "Huiming Yuan/ ??",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Select for Success",
        "qualityEnabler": "Upgrade operating model",
        "initiative": "Quality operating model upgrade Digital Health",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "R. Famiglietti",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$2.3MM",
        "totalProjectValue": "$2.4MM",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Select for Success",
        "qualityEnabler": "Upgrade operating model",
        "initiative": "Quality Frame Work, operating model, quality system and phase appropriate GMP supporting DPDS",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Brenda Van Assche",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Select for Success",
        "qualityEnabler": "Upgrade operating model",
        "initiative": "Support Product Segmentation by driving Fit for purpose quality framework design and implementation (e.g. POLO, Risk management for late stage products, Delist/divest processes, etc.)",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Angela Costantino",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Select for Success",
        "qualityEnabler": "Q&C expertise specific to new modalities ",
        "initiative": "Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ",
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q"
        ],
        "description": "#N/A",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Huimin Yuan/Amit Khaolkar/Lisa Forian",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Faster innovation speed and approvals",
        "initiative": "xSector R&D operating model (Fit for purpose QMS)",
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q"
        ],
        "description": "Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.",
        "functionalOwnership": "Janssen BRQC",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Faster innovation speed and approvals",
        "initiative": "Support Best product at launch (BPAL) by driving quality framework to strike the balance of speed, cost, and long term LCM needs",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Lisa Forian / Huimin Yuan",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Faster innovation speed and approvals",
        "initiative": "Lead Pharma Proactive Risk Management to advance pipeline product and effective LCM",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Matt Matuszewski",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Contribute with integrated customer insights",
        "initiative": "Patient consumer quality",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q"
        ],
        "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
        "functionalOwnership": "Janssen BQ",
        "projectLead": "Yuderki Tejada-Flotta",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Contribute with integrated customer insights",
        "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q"
        ],
        "description": "#N/A",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Renee Nester",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Contribute with integrated customer insights",
        "initiative": "CXE",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "#N/A",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "Art Caruso",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Contribute with integrated customer insights",
        "initiative": "Combination Product Process Improvements",
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "tbd",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Amit Khanolkar",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Contribute with integrated customer insights",
        "initiative": "AcceleRRAte",
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
        "functionalOwnership": "Janssen BQ",
        "projectLead": "Yuderki Tejada-Flotta",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$1.44MM",
        "totalProjectValue": "Yearly savings 2022+: $ 560K",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Design for Access",
        "qualityEnabler": "Contribute with integrated customer insights",
        "initiative": "Real World Evidence: Complaints Insights / Escalation",
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "#N/A",
        "functionalOwnership": "Janssen BQ",
        "projectLead": "Kate Gillespie",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "Yearly savings 2022+: $ 750 K",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Drive the Debate",
        "qualityEnabler": "Lead and enable proactive dialogue",
        "initiative": "Ongoing dialogue",
        "strategies": [
            "Partner Ecosystem"
        ],
        "description": "#N/A",
        "functionalOwnership": "n/a",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Drive the Debate",
        "qualityEnabler": "Lead and enable proactive dialogue",
        "initiative": "Systematic and holistic orchestration of dialogues with external stakeholders (e.g. industry and regulatory forums)",
        "strategies": [
            "Partner Ecosystem"
        ],
        "description": "#N/A",
        "functionalOwnership": "n/a",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Drive the Debate",
        "qualityEnabler": "Particpate in flagship collaborations",
        "initiative": "Design and lead flagship collaboration projects ",
        "strategies": [
            "Partner Ecosystem"
        ],
        "description": "#N/A",
        "functionalOwnership": "n/a",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Drive the Debate",
        "qualityEnabler": "Particpate in flagship collaborations",
        "initiative": "Systematic orchestration of new collaboration types tailored to stakeholder groups and purpose",
        "strategies": [
            "Partner Ecosystem"
        ],
        "description": "#N/A",
        "functionalOwnership": "n/a",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Build expertise in analytics use cases",
        "initiative": "SCAN",
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "description": "Data and Analytics initiative that deals with identifying the right way to use and collect data in order to make quality decisions. Uses cases have been identified in NC reduction, Speed to market increase and a higher reliability. Primary goal is to prevent issues from arising instead of applying corrective actions.",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Borke Van Belle",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "13.4MM",
        "totalProjectValue": "18MM in CIP savings across Quality and MTO (reduced cycle times, investigation time and scrap increased yield); investment split still being determined.  ",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Build expertise in analytics use cases",
        "initiative": "Technology & Data Savviness in Quality DnA",
        "strategies": [
            "Skillset",
            "Culture of innovation"
        ],
        "description": "Build internal capability to create and deploy technology and automation solutions, and to evolve from descriptive analytics to advanced analytics",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Borke Van Belle",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "1MM",
        "totalProjectValue": "investment to build capabilities not ROI expected ",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Build expertise in analytics use cases",
        "initiative": "Integrated Quality Plans (R&D)",
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "description": "Become more proactive in oder to identify where risks lie by predicting risks before they happen using external insights and based on changes in regulatory environments. Share risk approach with authorities (\"de-risk submissions\").",
        "functionalOwnership": "Janssen BRQC",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Establish enhanced CSV capabilities",
        "initiative": "Lead CSV innovation, e.g. Through collaboration with CSA program",
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem"
        ],
        "description": "#N/A",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Structure quality-related data ecosystem",
        "initiative": "Common Data Layer (CDL)",
        "strategies": [
            "Data & Analytics"
        ],
        "description": "Scalable, flexible & extensible data store - single version of the truth.\nEasily searchable and  provides the right information when it is needed",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Structure quality-related data ecosystem",
        "initiative": "BRQC Data Strategy and Foundation",
        "strategies": [
            "Data & Analytics"
        ],
        "description": "#N/A",
        "functionalOwnership": "Janssen BRQC",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Structure quality-related data ecosystem",
        "initiative": "PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)",
        "strategies": [
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "Initiative that aims to create one single source of truth for all product quality management related documents and information",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "David Enck",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "XX",
        "totalProjectValue": "accumatively XX FTE by 2026",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Structure quality-related data ecosystem",
        "initiative": "Design control platforming for devices",
        "strategies": [],
        "description": "",
        "functionalOwnership": "Janssen PQM",
        "projectLead": "Amit Khanolkar",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Analyze and Disrupt",
        "qualityEnabler": "Structure quality-related data ecosystem",
        "initiative": "BRQC Self-Service Analytics",
        "strategies": [
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "Self-Service Analytics Interface for modern and holistic Performance Management",
        "functionalOwnership": "Janssen BRQC",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Quality Systems Automation",
        "strategies": [
            "Skillset",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Next Gen QS",
        "strategies": [
            "Skillset",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "A. Pericone",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$28MM",
        "totalProjectValue": "$50MM",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Quality Automation",
        "strategies": [
            "Intelligent Automation"
        ],
        "description": "Quality Bots for transactional activities including remote work, Quality Oversight and full automation of Digital Batch Release. ",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Borke Van Belle",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "1.8MM",
        "totalProjectValue": "$1.1MM savings and $4.1MM in avoidance ",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "TrackWise Upgrade",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "L. Hascher",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$3.5M",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "TrackWise Base Business Enhancements",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "description": "Annual charge to support priority enhancements, as defined in the backlog developed by the SUN.  Intent is to phase out funding as we migrate to Next Gen QS",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "O. Randon",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$1.6MM",
        "totalProjectValue": "$0.2MM",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Pharma Segment QS Automation",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Intelligent Automation"
        ],
        "description": "This is a placeholder for annual investments in high value use cases for SEGMENT-LEVEL QS Automation.  As an example, 2021 $ is exploring leverage of MD's RCA Efficiency IA tool, Consumer's Duplicate NC identification Tool (Mahjong) and the Shark-tank idea for use of WalkMe on TrackWise",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "O. Randon",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$4.95MM",
        "totalProjectValue": "$7.5MM",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "APR Scheduling and Efficiencies",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "description": "Project is currently deploying a schedulign tool for APRs in Pharma and Consumer.  Not only will this improve compliance, but will enable an E2E view for products.  Secondary focus is to deploy standard reporting tool (Tableau) to standardize and automate APR report generation.  Cost saving driven by reduction of contract resources currently assembling APRs",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "K. Bruhin",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$1.35MM",
        "totalProjectValue": "$2.1MM",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Wearables Solutions",
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "description": "",
        "functionalOwnership": "Janssen PQS",
        "projectLead": "O. Randon",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "$4.5M",
        "totalProjectValue": "$5M",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "QuantifyTheStateOfQuality",
        "strategies": [
            "Data & Analytics"
        ],
        "description": "Create insights into the performance of Quality across sites by standardizing reports and metrics. Reports will be auto generated to enable us to dedicate more time to value adding work.",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Borke Van Belle",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "2.9MM",
        "totalProjectValue": "$850K in savings and $7.3MM in avoidance ",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "xSector Audit & Supplier Reliability",
        "strategies": [
            "Intelligent Automation"
        ],
        "description": "Initiative focussing on how capabilities of Quality and Compliance as well as Audit can be transferred among the segments",
        "functionalOwnership": "Janssen BRQC",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Supplier Reliability",
        "strategies": [
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "Evolve",
        "strategies": [
            "Intelligent Automation"
        ],
        "description": "Deals with complex E2E labelling process owned by the Regulatory Group. BQ supports the process to improve it from a quality standpoint in a cross-functional governance.",
        "functionalOwnership": "Janssen BQ",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Smart quality assurance processes",
        "initiative": "On Demand Trainings (Pull vs. Push)",
        "strategies": [
            "Skillset",
            "Culture of innovation"
        ],
        "description": "Initiative to create self-service / on-demand learning opportunities instead of pushing / forcing regular trainings",
        "functionalOwnership": "Janssen BRQC",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Optimized, automated, and distributed quality control",
        "initiative": "Digital Product Release ",
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "description": "#N/A",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "735K",
        "totalProjectValue": "990K in savings and 450K in cost avoidance ",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Optimized, automated, and distributed quality control",
        "initiative": "Integrated Quality",
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "description": "For Small and Large Molecules: Deploy real time release testing through real time quality analytics, real time analytical tests. Reduce the cost of quality, gain efficiencies, reduce WIP via enabling real time release at launch and by converting life cycle products. \nDevelop an E2E Real Time Quality and Release Testing infrastructure",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Stefan Bouckard ",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "approximately 2MM investment annually for Quality ",
        "totalProjectValue": "TBD",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Optimized, automated, and distributed quality control",
        "initiative": "Transform Analytical Testing (Lab technology Roadmap) ",
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "description": "",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Hilde Druyts",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "13.6MM ",
        "totalProjectValue": "9,5MM savings +10,1MM inventory + 0,3MM avoidance",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Compete for Patients",
        "qualityEnabler": "Optimized, automated, and distributed quality control",
        "initiative": "Transforming the lab execution ( Ilabs, SMART QA QC) ",
        "strategies": [
            "Intelligent Automation"
        ],
        "description": "Program covering multiple elements such as Paperless Labs and Lab systems  automate and streamline lab sites",
        "functionalOwnership": "Janssen SCQ",
        "projectLead": "Hilde Druyts",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "20.8 MM",
        "totalProjectValue": "12MM savings + 1MM avoidance +10MM inventory reduction",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Across Accelerators",
        "qualityEnabler": "Capability building & Change Mgmt",
        "initiative": "People",
        "strategies": [
            "Skillset",
            "Culture of innovation"
        ],
        "description": "Create a bold and transformed Q&C organization that focuses on the capabilities, development and the culture needed for a prepared and inspired future workforce.",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Across Accelerators",
        "qualityEnabler": "Create one common data lake",
        "initiative": "Data Strategy & Foundation",
        "strategies": [
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "description": "Ensure that high-quality data is available when needed to empower process automation, predict and prevent problems, drive higher quality and greater productivity and fuel our capability in data science and intelligent automation.",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Across Accelerators",
        "qualityEnabler": "Build mutually beneficial partnerships",
        "initiative": "Trusted Partnerships",
        "strategies": [
            "Partner Ecosystem"
        ],
        "description": "Establish a framework with the right-sized toolkit to align on mutually beneficial goals, strategies and outcomes.",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Across Accelerators",
        "qualityEnabler": "Modernize IT infrasctructure",
        "initiative": "Modernize Digital Core (ERP)",
        "strategies": [
            "Data & Analytics"
        ],
        "description": "Modernize the current Pharm ERP landscape",
        "functionalOwnership": "Enterprise Q&C",
        "projectLead": "",
        "bamAlignment": "TBD",
        "rpaValueScore": "TBD",
        "investmentType": "TBD",
        "projectManager": "TBD",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    },
    {
        "janssenOneAccelerator": "Across Accelerators",
        "qualityEnabler": "Modernize IT infrasctructure",
        "initiative": "",
        "strategies": [],
        "description": "",
        "functionalOwnership": "",
        "projectLead": "",
        "bamAlignment": "",
        "rpaValueScore": "",
        "investmentType": "",
        "projectManager": "",
        "projectScore": null,
        "involvedTechnology_system": "",
        "resourceRequirement": "",
        "potentialRisk": "",
        "totalProjectCost": "",
        "totalProjectValue": "",
        "roi": ""
    }
];
let owners = [
    { category: "Enterprise Q&C" },
    { category: "Janssen BRQC" },
    { category: "Janssen PQM" },
    { category: "Janssen PQM" },
    { category: "Janssen BRQC" },
    { category: "n/a" }
];

let numbers = [
    { category: "One" },
    { category: "Two" },
    { category: "Three" },
    { category: "Four" },
    { category: "Five" }
]

let strategies = [
    "Skillset",
    "Culture of innovation",
    "Partner Ecosystem",
    "Operational Efficiencies",
    "Internal Quality Support",
    "Patient & Consumer QMS",
    "Data & Analytics",
    "Intelligent Automation"
];


var data = [
    {
        initiative: "Quality operating model upgrade Digital Health",
        startDate1: 1,
        endDate1: 2,
        owner: owners[0].category
    },
    {
        initiative: "xSector R&D operating model (Fit for purpose QMS)",
        startDate1: 3,
        endDate1: 5,
        owner: owners[0].category
    },
    {
        initiative: "Combination Product Process Improvements",
        startDate2: 2,
        endDate2: 4,
        owner: owners[1].category
    },
    {
        initiative: "Ongoing dialogue",
        startDate2: 5,
        endDate2: 8,
        owner: owners[2].category
    },
    {
        initiative: "Technology & Data Savviness in Quality DnA",
        startDate3: 1,
        endDate3: 3,
        owner: owners[0].category
    },
    {
        initiative: "Quality Automation",
        startDate4: 4,
        endDate4: 8,
        owner: owners[3].category
    },
    {
        initiative: "Pharma Segment QS Automation",
        startDate4: 2,
        endDate4: 3,
        owner: owners[5].category
    },
    {
        initiative: "Trusted Partnerships",
        startDate5: 1,
        endDate5: 5,
        owner: owners[3].category
    },
    {
        initiative: "Integrated Quality",
        startDate5: 6,
        endDate5: 7,
        owner: owners[5].category
    }
];


export default class Chart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalData: {
                janssenOneAccelerator: "Select for Success",
                qualityEnabler: "Upgrade operating model",
                initiative: "Quality operating model, process, and quality system (for BCMA CAR-T)",
                strategies: [
                    "Skillset",
                    "Culture of innovation",
                    "Partner Ecosystem",
                    "Operational Efficiencies",
                    "Internal Quality Support",
                    "Patient & Consumer Q"
                ],
                description: "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
                functionalOwnership: "Janssen PQM",
                projectLead: "Huimin Yuan",
                bamAlignment: "TBD",
                rpaValueScore: "",
                investmentType: "",
                projectManager: "",
                projectScore: null,
                involvedTechnology_system: "",
                resourceRequirement: "",
                potentialRisk: "",
                totalProjectCost: "",
                totalProjectValue: "",
                roi: ""
            }
        }
    }

    componentDidMount() {
        window.jsPDF = window.jspdf.jsPDF;
        window.html2canvas = html2canvas;
        window.html2pdf = html2pdf;

        // let readyFn = this.am5Ready()

        // am5.ready(this.am5Ready()); // end am5.ready()

        this.am5Ready()

    }
    am5Ready() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("container");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);
        // first top level chart for radar guidance
        this.configureGuidanceChart(root);
        this.configureSunburstChart(root);
        this.configureRadarChart(root);


    }

    getColor(start, end) {
        if (start > 0 && end <= 2) {
            return "blue";
        } else if (start > 2 && end <= 4) {
            return "green";
        } else if (start > 4 && end <= 6) {
            return "red";
        } else if (start > 6 && end <= 8) {
            return "green";
        }
    }


    configureGuidanceChart(root) {
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            // startAngle: 180,
            // endAngle: 0,
            layout: root.verticalLayout,
            innerRadius: am5.percent(30),
            height: am5.percent(30),
            width: am5.percent(40),
            dx: 500,
            dy: -100
        }));

        chart.seriesContainer.align = "left";

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
            // startAngle: 180,
            // endAngle: 0,
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));

        series.slices.template.setAll({
            cornerRadius: 5
        });

        series.ticks.template.setAll({
            forceHidden: true
        });

        series.get("colors").set("colors", [
            am5.color(0x004578),
            am5.color(0x106ebe),
            am5.color(0x71afe5),
            am5.color(0xdeecf9),
            am5.color(0xc0c0c0)
        ]);
        series.slices.template.set("toggleKey", "none");

        series.labels.template.setAll({
            fontSize: 10,
            fill: am5.color(0x550000),
            text: "{category}",
            inside: true,
            textType: "circular",
            radius: 15,
            maxWidth: 30
        });
        // series.ticks.template.disabled = true;
        // series.labels.template.text = "{category}";
        // series.labels.template.html = '<i class="material-icons">{icon}</i>';
        // series.slices.template.tooltipText = '{category}';
        // let labelT = series.labels.template;
        // labelT.wrap = true;
        // labelT.fontSize = 11;
        // labelT.maxWidth = 60;
        // labelT.verticalCenter = 'bottom';
        // labelT.horizontalCenter = 'middle';
        // series.dataFields.valueField = 'value';
        // series.dataFields.categoryField = 'category';
        // series.labels.template.radius = am5.percent(-40);
        // series.labels.template.fill = am4core.color("white");
        // series.labels.template.relativeRotation = 90;
        // series.labels.template.maxWidth = 30;
        // series.labels.template.wrap = true;
        // series.labels.template.fontSize = 8;
        series.data.setAll(this.getAccelerators());
        series.appear(1000, 100);
    }

    configureSunburstChart(root) {
        // Create wrapper container
        var container = root.container.children.push(am5.Container.new(root, {
            width: am5.percent(50),
            height: am5.percent(50),
            innerRadius: am5.percent(60),
            layout: root.verticalLayout,
            dx: 400,
            dy: -50
        }));


        // Create series
        // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
        var series = container.children.push(am5hierarchy.Sunburst.new(root, {
            startAngle: 180,
            endAngle: 0,
            singleBranchOnly: true,
            downDepth: 10,
            initialDepth: 30,
            topDepth: 1,
            innerRadius: am5.percent(50),
            valueField: "value",
            categoryField: "name",
            childDataField: "children",
            dx: 0,
            dy: -100
        }));

        series.data.setAll([{
            name: "root",
            children: [{
                name: "First",
                children: [
                    { name: "A1", value: 100 },
                    { name: "A2", value: 60 }
                ]
            },
            {
                name: "Second",
                children: [
                    { name: "B1", value: 135 },
                    { name: "B2", value: 98 }
                ]
            },
            {
                name: "Third",
                children: [
                    {
                        name: "C1",
                        value: 100
                    },
                    { name: "C2", value: 148 },
                    {
                        name: "C3", value: 100
                    },
                    { name: "C4", value: 26 }
                ]
            },
            {
                name: "Fourth",
                children: [
                    { name: "D1", value: 415 },
                    { name: "D2", value: 148 },
                    { name: "D3", value: 89 }
                ]
            },
            {
                name: "Fifth",
                children: [
                    {
                        name: "E1",
                        value: 100

                    },
                    {
                        name: "E2",
                        value: 148
                    }
                ]
            }]
        }]);

        series.selectDataItem(series.dataItems[0]);

        // Make stuff animate on load
        series.appear(1000, 100);

    }

    configureRadarChart(root) {

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/radar-chart/
        var chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "panX",
                wheelY: "zoomX",
                innerRadius: am5.percent(60),
                startAngle: 180,
                endAngle: 0,
                // layout: "none",
                dy: -400
            })
        );

        chart.get("colors").set("step", 2);

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
        var cursor = chart.set("cursor",
            am5radar.RadarCursor.new(root, {
                // behavior: "zoomX"
            }));

        cursor.lineY.set("visible", false);

        // Create axes and their renderers
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
        var yRenderer = am5radar.AxisRendererRadial.new(root, { minGridDistance: 20, strokeOpacity: 0 });
        var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0,
                categoryField: "category",
                renderer: yRenderer
            })
        );
        yAxis.get('renderer').grid.template.setAll({ strokeOpacity: 0 });

        var xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 1,
                max: strategies.length,
                treatZeroAs: 0.000001,
                renderer: am5radar.AxisRendererCircular.new(root, { strokeOpacity: 0 })
            })
        );
        xAxis.get('renderer').grid.template.setAll({ strokeOpacity: 0 });



        // Set date fields
        // https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
        root.dateFormatter.setAll({
            dateFormat: "yyyy-MM-dd",
            dateFields: ["valueX", "openValueX"]
        });

        var ownerColors = ['#CA001B', 'blue', '#CC0099', '#009999', "green", "pink", "red"];
        // Create series
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
        for (var i = 1; i < data.length; i++) {
            var series = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    clustered: true,
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    categoryYField: "owner",
                    valueXField: "endDate" + i,
                    openValueXField: "startDate" + i
                    // fill: getColor("startDate" + i,"endDate" + i)
                    // fillOpacity: 1
                })
            );
            series.columns.template.events.on("click", this.onClickDownload, this);
            series.columns.template.set("cornerRadius", 25);
            series.columns.template.set(
                "tooltipText",
                "{category}: {openValueX} - {valueX}"
            );
            series.data.setAll(data);
            series.appear(2000, 100);
            series.data.setAll(data);
        }


        yAxis.data.setAll(owners);

        chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal", exportable: false }));
        chart.set("scrollbarY", am5.Scrollbar.new(root, { orientation: "vertical", exportable: false }));

        xAxis.data.setAll(data);

        // Animate chart and series in
        // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
        chart.appear(2000, 100);
    }


    getAccelerators() {

        const iconMap = [
            'light-mode',
            'tungsten',
            'question_answer',
            'moving',
            'group',
            'table_view',
        ];
        var accelerators = [...new Set(rawData.map(obj => obj.janssenOneAccelerator))];
        let acceleratorsData = [];
        accelerators.forEach((accelerator, index) => {
            acceleratorsData.push({ "category": accelerator, "value": 1, icon: iconMap[index] });
        });
        return acceleratorsData;
    }

    onClickDownload(ev) {
        console.log("clicked on ", ev.target.dataItem.dataContext);
        // var element = document.getElementById('html-template');
        // html2pdf(element);
        this.setState({ showModal: true })
    }


    render() {
        const { showModal, modalData } = this.state
        const toggleModal = () => this.setState({ showModal: false });
        return (
            <div>
                <div id="container">
                    {/* <div id="sunburstDiv"></div>
                    <div id="pieDiv"></div>
                    <div id="radarDiv"></div> */}
                </div>

                {showModal &&
                    <Modal size={'xl'} isOpen={showModal}>
                        <ModalHeader toggle={toggleModal} className="p-3">{'Data'}</ModalHeader>
                        <ModalBody className='p-2'>
                            <Row xs="1" md="2">
                                {Object.keys(modalData).map((item, itemIdx) =>
                                    <Col key={itemIdx} >
                                        <Row xs="2">
                                            <Col><h6>{item} : </h6></Col>
                                            <Col><p>{modalData[item] === "" ? '---' : modalData[item]}</p></Col>
                                        </Row>
                                    </Col>
                                )}
                            </Row>
                        </ModalBody>
                    </Modal>
                }
            </div>
        )
    }
}