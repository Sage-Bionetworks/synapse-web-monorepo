import{m as i,g as a,b as e,c as m,d as o,e as c,f as u,S as C,h as s,i as g,k as n,l as b,n as _,o as p,p as H,q as P,s as y,A as k,t as M,H as E,u as f,v as t}from"./iframe-BDH9K3aQ.js";import{A as T}from"./AccessRequirementList-Dk-oPzk0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DABEgAy5.js";import"./index-BEXoIJDe.js";import"./_baseOrderBy-Dgg6c-Or.js";import"./_baseIteratee-gLwaiEgY.js";import"./_baseMap-CoKNYOGS.js";import"./_baseEach-C6kEqMCn.js";import"./useInfiniteQuery-CsOZNg3u.js";import"./groupBy-CsRRKJdh.js";import"./_createAggregator-CxLL64-G.js";import"./DialogBase-B3CH9IvN.js";import"./Close-BQ3Dsdqr.js";import"./HelpPopover-rgAqoORW.js";import"./MarkdownPopover-DSGPjAkb.js";import"./LightTooltip-CH8V7Sc-.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonTable-DpnDnZ6A.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./EntityLink-DSce9suh.js";import"./useEntity-BCHA_6TA.js";import"./pickBy-DIU2iB-5.js";import"./isString-yINtZ7vY.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCJbb9bm.js";import"./useGetEntityHeaders-BLOU8M4r.js";import"./EntityIcon-BLJ6fJg1.js";import"./ErrorChip-B-_ogSw1.js";import"./Chip-DozeHiZL.js";import"./UserOrTeamBadge-BtOsH5S_.js";import"./UserBadge-B2zVNa36.js";import"./useUserBundle-BHTJB607.js";import"./MenuItem-x7e5wLEf.js";import"./Card-BL3I6Ntg.js";import"./TeamBadge-DAPD5zpQ.js";import"./UnmanagedACTAccessRequirementItem-ByCGv425.js";import"./RequirementItem-H4w1jjZ7.js";import"./CheckTwoTone-pYnYaaJv.js";import"./ManagedACTAccessRequirementItemView-B12tAVUu.js";import"./SelfSignAccessRequirementItem-nHLgsX5k.js";import"./DataAccessRequestAccessorsFilesForm-oHcTCLNz.js";import"./enums-D6cq4fo8.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-tViP_YN6.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DYSh8nX5.js";import"./UserSearchBox-CJ-fBakk.js";import"./useDebouncedEffect-B44LhlfG.js";import"./Autocomplete-CwnIKOhs.js";import"./usePreviousProps-DxAgpis0.js";import"./RadioGroup-B486Tz3Q.js";import"./Radio-B6e-jRet.js";import"./SwitchBase-DtmVnPYE.js";import"./FormGroup-Ccm6WI4f.js";import"./FormControlLabel-hO8hM_0u.js";import"./UploadDocumentField-CiX3f6dE.js";import"./FileUpload-CmI0DnkA.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DLE2Pmdx.js";import"./GridLegacy-DAzkTeTm.js";import"./ResearchProjectForm-DRkWXVYU.js";import"./TextFieldWithWordLimit-Cge7STdi.js";import"./AuthenticatedRequirement-CSZIcYqF.js";import"./CertificationRequirement-enlXZDfP.js";import"./TwoFactorAuthEnabledRequirement-C22ehKBf.js";import"./ValidationRequirement-CGpsxey0.js";const ze={title:"Governance/Data Access Request Flow/AccessRequirementList",component:T,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function d(r){return[y.get(`${e}/auth/v1/2fa`,()=>{const w={status:r?"ENABLED":"DISABLED"};return E.json(w,{status:200})})]}const A={args:{entityId:i.id,renderAsModal:!0},parameters:{msw:{handlers:[...a(e),...d(!1),...o(e),...c(e,void 0,[])]}}},O={parameters:{msw:{handlers:[...a(e),m(e,!0,!0),...d(!0),...o(e),...c(e),...u(e,[{accessRequirementId:g.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:C.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:b.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:_.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0}]),...p(e)]}},args:{entityId:i.id,isAuthenticated:!0,renderAsModal:!0}},h=[...H,{...g,id:21},{...b,id:22},{...n,id:23},{..._,id:24}],R={parameters:{msw:{handlers:[...a(e),m(e,!0,!0),...d(!0),...o(e),...c(e,void 0,h),...u(e,[{accessRequirementId:g.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:C.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:b.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:_.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:"21",concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},{accessRequirementId:"22",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"23",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"24",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...p(e),...P(e),y.post(`${e}${k}`,()=>{const r={requirementId:_.id,submitterId:t.toString(),accessorId:t.toString(),state:M.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return E.json(r,{status:201})})]}},args:{entityId:i.id,isAuthenticated:!0,renderAsModal:!0}},S={parameters:{msw:{handlers:[...a(e),m(e,!0,!1),...d(!0),...o(e),...c(e),...u(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...p(e),y.post(`${e}${k}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:M.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return E.json(r,{status:201})})]}},args:{entityId:i.id,renderAsModal:!0,isAuthenticated:!0}},l={parameters:{msw:{handlers:[...a(e),m(e,!1,!0),...d(!0),...o(e),...c(e),...u(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...p(e),y.post(`${e}${k}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:M.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return E.json(r,{status:201})})]}},args:{entityId:i.id,renderAsModal:!0,isAuthenticated:!0}},I={parameters:{msw:{handlers:[...a(e),m(e,!0,!0),...d(!0),...o(e),...c(e,void 0,[g]),...u(e,[{accessRequirementId:g.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:C.REJECTED,rejectedReason:`Thank you for requesting access, but you were rejected. Here's why:
 * You did not meet the requirements.
 * Another reason: you did not meet the requirements.
Feel free to apply again.`}}]),...p(e),...P(e)]}},args:{entityId:i.id,isAuthenticated:!0,renderAsModal:!0}},q={args:{entityId:i.id,isAuthenticated:!0,renderAsModal:!0},parameters:{msw:{handlers:[...a(e),m(e,!0,!0),...d(!0),...o(e),...c(e,void 0,[f]),...u(e,[{accessRequirementId:f.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...p(e)]}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), ...getTwoFactorAuthStatusHandler(false), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [])]
    }
  }
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Verify ARs are grouped by type, and sorted by completion status",...R.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [mockLockAccessRequirement]), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockLockAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...q.parameters?.docs?.source}}};const Qe=["NoRequirements","HasMetRequirements","HasUnmetRequirementsOfEveryType","NotValidated","NotCertified","RejectedRequirement","LockAccessRequirement"];export{O as HasMetRequirements,R as HasUnmetRequirementsOfEveryType,q as LockAccessRequirement,A as NoRequirements,l as NotCertified,S as NotValidated,I as RejectedRequirement,Qe as __namedExportsOrder,ze as default};
