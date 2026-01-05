import{jF as T}from"./iframe-DboE6cus.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DSsjYSqO.js";import"./index-r8ZA1smB.js";import"./useEntity-CMX5rKD0.js";import"./pickBy-De-F_gE6.js";import"./isString-CMmq4jp5.js";import"./_baseIteratee-DwrTBovl.js";import"./useQueries-C-iJVLAg.js";import"./useSuspenseQuery-NbcqIP5u.js";import"./useInfiniteQuery-C-3LxYU-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJztbhCS.js";import"./useSchema-B7ucI8Vb.js";import"./index-jqjhSn4q.js";import"./enums-BNGHHkmT.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-peTWZHvj.js";import"./uniq-BMr5GqOn.js";import"./forEach-B8iwwgef.js";import"./Add-m_psvyGC.js";import"./Grid-xRSGKOBv.js";import"./ListItem-Bnuen2re.js";import"./listItemButtonClasses-BrIJegSU.js";import"./ListItemIcon-Dq6pRsgt.js";import"./MenuItem-BC-hmB5d.js";import"./ListItemText-DGZ85jYH.js";import"./ArrowUpward-Lq6JS8kD.js";import"./ContentCopy-CH_PQmNG.js";import"./FormControlLabel-RkfWwutG.js";import"./Checkbox-zAn0p-gG.js";import"./SwitchBase-BQgRTlGW.js";import"./FormGroup-C1vewgLo.js";import"./RadioGroup-WZKkox_T.js";import"./Radio-BvMfB3cH.js";import"./Slider-BZxw9hKp.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BkYcFRKi.js";import"./DialogBase-Cryo8IG-.js";import"./Close-Dh32M8lz.js";import"./HelpPopover-D6Yfo8ak.js";import"./MarkdownPopover-DZsWRurj.js";import"./LightTooltip-tMJWkQpL.js";import"./MarkdownSynapse-CacsHCKs.js";import"./SkeletonButton-D8m5msQb.js";import"./SkeletonInlineBlock-Dnql_wpL.js";import"./SkeletonTable-B7bdJ0qY.js";import"./SkeletonParagraph-C746jxi4.js";import"./JsonSchemaForm-F_jejxMz.js";import"./GridLegacy-_V269eSF.js";import"./HelpTwoTone-CQQJr6Dg.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BMGJ6D2U.js";import"./_createAggregator-CNKe7IR4.js";import"./_baseMap-CxtrX0CY.js";import"./DateTimePicker-BznVq5vn.js";import"./useMobilePicker-7WPwqDkM.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DTwacMDa.js";import"./index-BzXSeNW_.js";import"./Chip-D7TLsmcp.js";import"./Tabs-QcE3K5hu.js";import"./KeyboardArrowRight-Csm7ZeiV.js";import"./Autocomplete-BD_j_UzU.js";import"./usePreviousProps-b3S4W7_i.js";import"./use-deep-compare-effect.esm-C-rD7OfE.js";import"./TextWidget-HcVo1g7Y.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
