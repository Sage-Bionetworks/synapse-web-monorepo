import{d as i,e as o,f as a,m as c,h as p,i as g,k as R,l as x,n as _,b as e,H as y,S as E,o as s,p as u,q as n,s as C,t as q,u as Y,A as b,v as f,w as t}from"./iframe-BPjtn3Py.js";import{A as z}from"./AccessRequirementList-DFbnwGtN.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BcvsiSa4.js";import"./index-MU1GfQRJ.js";import"./_baseOrderBy-CdXv1--t.js";import"./_baseIteratee-BO1Lzx2o.js";import"./_baseMap-jzXUhPol.js";import"./_baseEach-RhlMNDap.js";import"./useQueries-D_0vtMqr.js";import"./useInfiniteQuery-Bh3zdLrB.js";import"./groupBy-Devd54Lj.js";import"./_createAggregator-ch_DvEKH.js";import"./DialogBase-CwUJKQgZ.js";import"./Close-D3DgklsR.js";import"./HelpPopover-DC_dXnpY.js";import"./MarkdownPopover-BqDmByvq.js";import"./LightTooltip-CRT29ubt.js";import"./MarkdownSynapse-C8_fbXMJ.js";import"./SkeletonButton-D4b9c6Gf.js";import"./SkeletonInlineBlock-DU00_odl.js";import"./SkeletonTable-Dybo1wxv.js";import"./SkeletonParagraph-D1AtTIOG.js";import"./EntityLink-CTz-OkGZ.js";import"./useEntity-BvLnmvTw.js";import"./pickBy-B9uRmH6n.js";import"./isString-DVm4aFm_.js";import"./useSuspenseQuery-CJees8i4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8UvGpf8k.js";import"./useGetEntityHeaders-3tTzjCTv.js";import"./EntityIcon-BJm0nRzh.js";import"./ErrorChip-CsYTdNGD.js";import"./Chip-B9tVR_eV.js";import"./UserOrTeamBadge-CvQQyNTE.js";import"./UserBadge-_zSHqQoY.js";import"./useUserBundle-w7U_abFB.js";import"./MenuItem-BbZL7_By.js";import"./Card-D9_DNnXX.js";import"./TeamBadge-C5SnUHZ3.js";import"./UnmanagedACTAccessRequirementItem-m_vESpmB.js";import"./RequirementItem-jw8AWu0Z.js";import"./LockTwoTone-D6Sev2uz.js";import"./UserSearchBoxV2-C6-eAcJ-.js";import"./useDebouncedEffect-BxWATv1s.js";import"./use-deep-compare-effect.esm-D8lyhZzE.js";import"./uniq-MZuYRl1i.js";import"./without-BVn3ALXy.js";import"./Select-aab027f3.esm-diu2ihAm.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DEXJ77q4.js";import"./SelfSignAccessRequirementItem-1bVVoY2C.js";import"./DataAccessRequestAccessorsFilesForm-C2jotEQF.js";import"./enums-DfIrwVZM.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-VneBUp_b.js";import"./RadioGroup-Dj2x-IZ8.js";import"./Radio-mLeYf0CT.js";import"./SwitchBase-CecYQ9Z7.js";import"./FormGroup-C4t7alHD.js";import"./FormControlLabel-B9Z-sxvt.js";import"./UploadDocumentField-BVcry1ap.js";import"./FileUpload-CbxwYF3z.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DDAJC3D_.js";import"./GridLegacy-DBLQIMgV.js";import"./ResearchProjectForm-BRQWHDnA.js";import"./TextFieldWithWordLimit-B0Wk91yL.js";import"./AuthenticatedRequirement-pZIH4ohn.js";import"./CertificationRequirement-DVKZXcF_.js";import"./TwoFactorAuthEnabledRequirement-CEd7sILC.js";import"./ValidationRequirement-Q6LVrahg.js";const Ot={title:"Governance/Data Access Request Flow/AccessRequirementList",component:z,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function d(r){return[_.get(`${e}/auth/v1/2fa`,()=>{const J={status:r?"ENABLED":"DISABLED"};return y.json(J,{status:200})})]}const A={args:{entityId:c.id,renderAsModal:!0},parameters:{msw:{handlers:[...i(e),...d(!1),...o(e),...a(e,void 0,[])]}}},S={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0}]),...R(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},Q=[...Y,{...u,id:21},{...C,id:22},{...n,id:23},{...q,id:24}],m={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,Q),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:"21",concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},{accessRequirementId:"22",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"23",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"24",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),...x(e),_.post(`${e}${b}`,()=>{const r={requirementId:q.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},O={parameters:{msw:{handlers:[...i(e),p(e,!0,!1),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},l={parameters:{msw:{handlers:[...i(e),p(e,!1,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},I={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,[u]),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.REJECTED,rejectedReason:`Thank you for requesting access, but you were rejected. Here's why:
 * You did not meet the requirements.
 * Another reason: you did not meet the requirements.
Feel free to apply again.`}}]),...R(e),...x(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}};var M,k,P;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), ...getTwoFactorAuthStatusHandler(false), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [])]
    }
  }
}`,...(P=(k=A.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,T,H;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(T=S.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var v,B,h,K,N;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(B=m.parameters)==null?void 0:B.docs)==null?void 0:h.source},description:{story:"Verify ARs are grouped by type, and sorted by completion status",...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var D,G,U;O.parameters={...O.parameters,docs:{...(D=O.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(U=(G=O.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,F,j;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(j=(F=l.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var $,W,L;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(W=I.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const lt=["NoRequirements","HasMetRequirements","HasUnmetRequirementsOfEveryType","NotValidated","NotCertified","RejectedRequirement"];export{S as HasMetRequirements,m as HasUnmetRequirementsOfEveryType,A as NoRequirements,l as NotCertified,O as NotValidated,I as RejectedRequirement,lt as __namedExportsOrder,Ot as default};
