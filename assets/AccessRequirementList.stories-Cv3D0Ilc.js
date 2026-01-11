import{d as i,e as o,f as a,m as c,h as p,i as g,k as R,l as M,n as _,b as e,H as y,S as E,o as s,p as u,q as n,s as C,t as q,u as P,A as b,v as f,w as t}from"./iframe-BIEbu1W6.js";import{A as w}from"./AccessRequirementList-CV4whMSz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DMlWDqFN.js";import"./index-G6SXchb0.js";import"./_baseOrderBy-v3AVsVKV.js";import"./_baseIteratee-EamAns9I.js";import"./_baseMap-CKXGksU7.js";import"./_baseEach-Ds8ZIurE.js";import"./useQueries-Cdmrbg4h.js";import"./useInfiniteQuery-B0KU597s.js";import"./groupBy-CkDObAnA.js";import"./_createAggregator-DphnR0Lc.js";import"./DialogBase-BOsW7V0r.js";import"./Close-PD-8PwDw.js";import"./HelpPopover-BMpjG3ih.js";import"./MarkdownPopover-D4XSX2HP.js";import"./LightTooltip-Cl8rvG15.js";import"./MarkdownSynapse-C6TGH7qQ.js";import"./SkeletonButton-CYSUqy8V.js";import"./SkeletonInlineBlock-BPt0uiBn.js";import"./SkeletonTable-xs4-qgjj.js";import"./SkeletonParagraph-C7NGLrAr.js";import"./EntityLink-DdFwvXur.js";import"./useEntity-CzT7v2yr.js";import"./pickBy-BSkyHBiD.js";import"./isString-u3kX30a_.js";import"./useSuspenseQuery-B21UYyAc.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D9ouYx9P.js";import"./useGetEntityHeaders-DTgBEshd.js";import"./EntityIcon-BWglqz21.js";import"./ErrorChip-DwxQCugQ.js";import"./Chip-BTFPdc0m.js";import"./UserOrTeamBadge-CzfEaPzE.js";import"./UserBadge-CkpZ8t6W.js";import"./useUserBundle-bL5uBmII.js";import"./MenuItem-DN4nfg1A.js";import"./Card-BRaEJLq9.js";import"./TeamBadge-L6v-eh7R.js";import"./UnmanagedACTAccessRequirementItem-DR3IZxtP.js";import"./RequirementItem-7ooCnbon.js";import"./LockTwoTone-CZBccG1v.js";import"./UserSearchBoxV2-De_D9ris.js";import"./useDebouncedEffect-Bu5GdWCA.js";import"./use-deep-compare-effect.esm-BdamFNJU.js";import"./uniq-BxbLoW-Z.js";import"./without-eMQmSwl1.js";import"./Select-aab027f3.esm-BZ3rq3CA.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Blm_dSEB.js";import"./SelfSignAccessRequirementItem-BMVLe3Wm.js";import"./DataAccessRequestAccessorsFilesForm-B8Zuf1lu.js";import"./enums-BLXwpT5J.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-fQEtxXpS.js";import"./RadioGroup-Dbw0HOdB.js";import"./Radio-CO18wH2-.js";import"./SwitchBase-CInKnVeE.js";import"./FormGroup-8Ko1PbEu.js";import"./FormControlLabel-Bz8ihAzn.js";import"./UploadDocumentField-CggbacG1.js";import"./FileUpload-AzsBqWUK.js";import"./ManagedACTAccessRequirementFormWikiWrapper-fI_rSBLp.js";import"./GridLegacy-CeP0XwCG.js";import"./ResearchProjectForm-C_CQx3kF.js";import"./TextFieldWithWordLimit-B0p8-ESG.js";import"./AuthenticatedRequirement-WOSPQz8P.js";import"./CertificationRequirement-B_7fYJxf.js";import"./TwoFactorAuthEnabledRequirement-ye5QSow5.js";import"./ValidationRequirement-CnljNcX1.js";const Xe={title:"Governance/Data Access Request Flow/AccessRequirementList",component:w,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function d(r){return[_.get(`${e}/auth/v1/2fa`,()=>{const k={status:r?"ENABLED":"DISABLED"};return y.json(k,{status:200})})]}const A={args:{entityId:c.id,renderAsModal:!0},parameters:{msw:{handlers:[...i(e),...d(!1),...o(e),...a(e,void 0,[])]}}},S={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0}]),...R(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},T=[...P,{...u,id:21},{...C,id:22},{...n,id:23},{...q,id:24}],m={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,T),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:"21",concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},{accessRequirementId:"22",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"23",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"24",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),...M(e),_.post(`${e}${b}`,()=>{const r={requirementId:q.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},O={parameters:{msw:{handlers:[...i(e),p(e,!0,!1),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},l={parameters:{msw:{handlers:[...i(e),p(e,!1,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},I={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,[u]),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.REJECTED,rejectedReason:`Thank you for requesting access, but you were rejected. Here's why:
 * You did not meet the requirements.
 * Another reason: you did not meet the requirements.
Feel free to apply again.`}}]),...R(e),...M(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), ...getTwoFactorAuthStatusHandler(false), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [])]
    }
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: true,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.APPROVED
        }
      }, {
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockToUAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, expandedMockAccessRequirements), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: true,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.APPROVED
        }
      }, {
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockToUAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: '21',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '22',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '23',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '24',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getResearchProjectHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockACTAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Verify ARs are grouped by type, and sorted by completion status",...m.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockSelfSignAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true
  }
}`,...O.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockSelfSignAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true
  }
}`,...l.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [mockManagedACTAccessRequirement]), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: false,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.REJECTED,
          rejectedReason: "Thank you for requesting access, but you were rejected. Here's why:\\n * You did not meet the requirements.\\n * Another reason: you did not meet the requirements.\\nFeel free to apply again."
        }
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getResearchProjectHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...I.parameters?.docs?.source}}};const Ze=["NoRequirements","HasMetRequirements","HasUnmetRequirementsOfEveryType","NotValidated","NotCertified","RejectedRequirement"];export{S as HasMetRequirements,m as HasUnmetRequirementsOfEveryType,A as NoRequirements,l as NotCertified,O as NotValidated,I as RejectedRequirement,Ze as __namedExportsOrder,Xe as default};
