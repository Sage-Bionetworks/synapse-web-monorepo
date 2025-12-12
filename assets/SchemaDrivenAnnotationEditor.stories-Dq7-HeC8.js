import{jF as T}from"./iframe-Bv3225dD.js";import{S as C}from"./SchemaDrivenAnnotationEditor-C9THDXxi.js";import"./index-r8ZA1smB.js";import"./useEntity-CM9ADOJ9.js";import"./pickBy-BvhQ5hmN.js";import"./isString-G0a_V30m.js";import"./_baseIteratee-BbIJeIRd.js";import"./useQueries-B6UcJV_V.js";import"./useSuspenseQuery-CdjgNkyv.js";import"./useInfiniteQuery-DqOQ-5wt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuH6QspR.js";import"./useSchema-B7OKo8bT.js";import"./index-D7sCcUVB.js";import"./enums-Cb0ccR3X.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BMhe4q5x.js";import"./uniq-C3G06xsZ.js";import"./forEach-B8iwwgef.js";import"./Add-CctUut3f.js";import"./Grid-B_MI4q89.js";import"./ListItem-WLaZXmmW.js";import"./listItemButtonClasses-D4nxibAL.js";import"./ListItemIcon-Bj-sUtIN.js";import"./MenuItem-BwJ2Gdnn.js";import"./ListItemText-C2NLr-eL.js";import"./ArrowUpward-CK6bJZH5.js";import"./ContentCopy-Cre75UY0.js";import"./FormControlLabel-CwYdHBQ1.js";import"./Checkbox-C8aMdRVE.js";import"./SwitchBase-BxXcDErD.js";import"./FormGroup-C4AqOSVc.js";import"./RadioGroup-2SMG8QBU.js";import"./Radio-B0x2u1zK.js";import"./Slider-BFTfjz7c.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-8fhdwQpp.js";import"./DialogBase-YjOHat3W.js";import"./Close-Zwo2uolh.js";import"./HelpPopover-4giAWybE.js";import"./MarkdownPopover-BGsl_EJS.js";import"./LightTooltip-fCebiKMM.js";import"./MarkdownSynapse-Cfnzx3pH.js";import"./SkeletonButton-DJp9easj.js";import"./SkeletonInlineBlock-Bq5p5oKd.js";import"./SkeletonTable-DN4iiShU.js";import"./SkeletonParagraph-CLTPxESa.js";import"./JsonSchemaForm-B8i6uhYV.js";import"./GridLegacy-DRvMoZ0d.js";import"./HelpTwoTone-DQqIBFTI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DGLU1Cre.js";import"./_createAggregator-p4_cw1yh.js";import"./_baseMap-huRy0dl9.js";import"./DateTimePicker-vKntucfM.js";import"./useMobilePicker-BSkrNk5u.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BvfJaRdm.js";import"./index-CZarqvXf.js";import"./Chip-B2GRsUoa.js";import"./Tabs-CEnq41Er.js";import"./KeyboardArrowRight-BftGfMtJ.js";import"./Autocomplete-DapENeZ9.js";import"./usePreviousProps-BcAwrMJ-.js";import"./use-deep-compare-effect.esm-CIvVRqff.js";import"./TextWidget-DsJcql93.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
