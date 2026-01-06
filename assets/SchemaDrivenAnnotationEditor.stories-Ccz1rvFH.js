import{jF as T}from"./iframe-WWZqBZnn.js";import{S as C}from"./SchemaDrivenAnnotationEditor-eINJUzT-.js";import"./index-r8ZA1smB.js";import"./useEntity-DpT1QpLL.js";import"./pickBy-C2AEEbx-.js";import"./isString-DSQpjcex.js";import"./_baseIteratee-D_0Rph_r.js";import"./useQueries-CE3PXJwM.js";import"./useSuspenseQuery-CMdkSjee.js";import"./useInfiniteQuery-B4gaib9_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-6VBJ-KlW.js";import"./useSchema-CyO2slMl.js";import"./index-84L0Tnv7.js";import"./enums-D770OPnx.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DvB8TnZW.js";import"./uniq-BDsfPFP2.js";import"./forEach-B8iwwgef.js";import"./Add-la66uy_6.js";import"./Grid-D_-lTr5w.js";import"./ListItem-DiDXfibq.js";import"./listItemButtonClasses-ipckdCER.js";import"./ListItemIcon-DmYwKEfz.js";import"./MenuItem-c2wV_LaG.js";import"./ListItemText-BAgiiXKi.js";import"./ArrowUpward-CUEZU4g1.js";import"./ContentCopy-C1bj9f6e.js";import"./FormControlLabel-DW5NMbUe.js";import"./Checkbox-mjCiJNNh.js";import"./SwitchBase-CK146F_7.js";import"./FormGroup-dy5nFBGW.js";import"./RadioGroup-BfDu-6Yp.js";import"./Radio-BLU15orx.js";import"./Slider-DVWnwhff.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-C4iRBvHc.js";import"./DialogBase-8qbfQF_w.js";import"./Close-CZXopQFS.js";import"./HelpPopover-C-TZQPZy.js";import"./MarkdownPopover-DGnHKgxw.js";import"./LightTooltip-VG5tjvb2.js";import"./MarkdownSynapse-CXeQLUv7.js";import"./SkeletonButton-Ce9jKFb5.js";import"./SkeletonInlineBlock-DLew4KjD.js";import"./SkeletonTable-DehOuMuf.js";import"./SkeletonParagraph-CCoh0O-o.js";import"./JsonSchemaForm-CAX3yO6Z.js";import"./GridLegacy-GOQOQRM9.js";import"./HelpTwoTone-CG26-YYm.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-piz9h_xI.js";import"./_createAggregator-CVEJ8I8B.js";import"./_baseMap-DyQ1aIXV.js";import"./DateTimePicker-BLMm4RcW.js";import"./useMobilePicker-SmsUCUKF.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DE48qX-8.js";import"./index-BIyHuP4w.js";import"./Chip-C9TzerSA.js";import"./Tabs-fqdCY7Go.js";import"./KeyboardArrowRight-D3E_O7jS.js";import"./Autocomplete-B2vUytGc.js";import"./usePreviousProps-QTwxmNTO.js";import"./use-deep-compare-effect.esm-C_4QtXFm.js";import"./TextWidget-XaMuAUiU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
