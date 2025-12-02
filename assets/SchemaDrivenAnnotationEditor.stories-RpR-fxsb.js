import{jK as T}from"./iframe-ClyxPfmc.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BWqU5cQn.js";import"./index-r8ZA1smB.js";import"./useEntity-3ZGC1Zu9.js";import"./pickBy-CCFUe152.js";import"./isString-Bzx34bEP.js";import"./_baseIteratee-9Jql63Gf.js";import"./useQueries-CSThz8EB.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Cqgwy5DL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bj2snGnH.js";import"./useSchema-DM3OH4vK.js";import"./index-BhkAn1JN.js";import"./enums-Bj7hG8A6.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BKNPTxf-.js";import"./uniq-wuCvyXTJ.js";import"./forEach-B8iwwgef.js";import"./Grid-C_QyTJ9i.js";import"./ListItem-CLLjVL2P.js";import"./listItemButtonClasses-DGqufEfc.js";import"./ListItemIcon-Dh7ejqpK.js";import"./MenuItem-DP0olmzU.js";import"./ListItemText-DF7KL4Xc.js";import"./ArrowUpward-ngBPF0_q.js";import"./ContentCopy-Bh_NIZiY.js";import"./FormControlLabel-DuHvGhLT.js";import"./Checkbox-rnd4zaCH.js";import"./SwitchBase-DZhxFchy.js";import"./FormGroup-Kmu_LrXP.js";import"./RadioGroup-BBy3Hmyu.js";import"./Radio-DK8_6UyJ.js";import"./Slider-U8Cw9CpO.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BsTE_PBt.js";import"./DialogBase-Bta8Ocnf.js";import"./Close-D1ca1SeS.js";import"./HelpPopover-CX_ddDkl.js";import"./MarkdownPopover-dvWKxOZ7.js";import"./LightTooltip-x_r9dSqG.js";import"./MarkdownSynapse-DQFUbqu6.js";import"./SkeletonButton-JqUeiWK5.js";import"./SkeletonInlineBlock-CyrAtLJW.js";import"./SkeletonTable-ClI70_Q3.js";import"./SkeletonParagraph-BsIbpmnA.js";import"./JsonSchemaForm-2NU8-H8G.js";import"./GridLegacy-CJeXaJhd.js";import"./HelpTwoTone-D37_LTXc.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DOjpUFyl.js";import"./_createAggregator-DrEIYQ6O.js";import"./_baseMap-BZX5HvhC.js";import"./DateTimePicker-BvGgbZh3.js";import"./useMobilePicker-DMSop4c-.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CCHJ5Mz_.js";import"./index-DAlOmM9o.js";import"./Chip-Bt2Da9Ss.js";import"./Tabs-oN_18-Fs.js";import"./KeyboardArrowRight-S8TZ-WNd.js";import"./Autocomplete-DR_OgZ0e.js";import"./usePreviousProps-iqJ5Wr2Y.js";import"./use-deep-compare-effect.esm-vk4Z9RWV.js";import"./TextWidget-DskSxXNP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
