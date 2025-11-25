import{jK as T}from"./iframe-TYPaZ6LN.js";import{S as C}from"./SchemaDrivenAnnotationEditor-7wEvwGRx.js";import"./index-r8ZA1smB.js";import"./useEntity-TVgfB3Kt.js";import"./pickBy-Dfp_86sg.js";import"./isString-DFDrWyde.js";import"./_baseIteratee-BPacOvsO.js";import"./useQueries-DChvZEmX.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DGBLsrXS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DlfQKmuq.js";import"./useSchema-kjSTbiQX.js";import"./index-Cn0Ujih4.js";import"./enums-zL8CB_sd.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-WuiEJq7T.js";import"./uniq-CrS56XKU.js";import"./forEach-B8iwwgef.js";import"./Grid-DpofsVqj.js";import"./ListItem-B9zaj-tc.js";import"./listItemButtonClasses-XoWfpIRR.js";import"./ListItemIcon-Cpt5t2dR.js";import"./MenuItem--XzA7FJc.js";import"./ListItemText-D2wFxJ5M.js";import"./ArrowUpward-D4Xt0UZD.js";import"./ContentCopy-DU01rDif.js";import"./FormControlLabel-CFIZDz1l.js";import"./Checkbox-DwR_QE3H.js";import"./SwitchBase-Cm31-ZuN.js";import"./FormGroup-BREKUiMV.js";import"./RadioGroup-DFMIqGd-.js";import"./Radio-BHCqxIY1.js";import"./Slider-WxXTGT1q.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DPmq4FUs.js";import"./DialogBase-2bW80153.js";import"./Close-5hmioipF.js";import"./HelpPopover-7_yWsHqt.js";import"./MarkdownPopover-DXfCvJzS.js";import"./LightTooltip-DMsvcwJu.js";import"./MarkdownSynapse-DUiCZcKp.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonTable-CKGrlPmE.js";import"./SkeletonParagraph-CEVUjrsB.js";import"./JsonSchemaForm-Bb6Ne-Zp.js";import"./GridLegacy-C8o6hZh3.js";import"./HelpTwoTone-DqIvkX0S.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dc0sMzgw.js";import"./_createAggregator-CRIUnh4s.js";import"./_baseMap-DhxkwXW9.js";import"./DateTimePicker-BOfSB9uA.js";import"./useMobilePicker-Co2V32JQ.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BWq8sWaH.js";import"./index-C_dXWgcu.js";import"./Chip-CqTIrq2s.js";import"./Tabs-jCur8L7y.js";import"./KeyboardArrowRight-CpHPgGgN.js";import"./Autocomplete-DpfJWd1A.js";import"./usePreviousProps-DeNrApD0.js";import"./use-deep-compare-effect.esm-CZAnXGsk.js";import"./TextWidget-CxZ0u2GE.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
