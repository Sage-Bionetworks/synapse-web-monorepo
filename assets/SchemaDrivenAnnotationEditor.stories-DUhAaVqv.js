import{jH as p}from"./iframe-B-rWBBOy.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C1uCM9C7.js";import"./index-Chi_LkuB.js";import"./useEntity-L7-UAX9e.js";import"./pickBy-BlV6ms5O.js";import"./isString-Cj7Rti5o.js";import"./_baseIteratee-BVfqOHkP.js";import"./useQueries-BF3c9QfY.js";import"./useSuspenseQuery-BilXPZyB.js";import"./useInfiniteQuery-BF0L2vpl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-M0ZItEnQ.js";import"./useSchema-Cha04akE.js";import"./index-tYU5GJWh.js";import"./enums-ajHqNJFU.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BBdk3TAU.js";import"./uniq-CJRdgA9T.js";import"./forEach-CWOCpBhE.js";import"./Add-jxNSXAbs.js";import"./Grid-BdoL564Q.js";import"./ListItem-ChCGYBcn.js";import"./listItemButtonClasses-Borf8tjx.js";import"./ListItemIcon-CZ67glqR.js";import"./MenuItem-rdxON32h.js";import"./ListItemText-BjBY9pjF.js";import"./ArrowUpward-DrZw_RI-.js";import"./ContentCopy-CziZZt5A.js";import"./FormControlLabel-vJNidZPz.js";import"./Checkbox-C1HJ2Aam.js";import"./SwitchBase-DBQd13iY.js";import"./FormGroup-iNAtjv_H.js";import"./RadioGroup-DzGF0RLq.js";import"./Radio-Dx8yI8Vf.js";import"./Slider-K8G_EBPU.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CTssCfny.js";import"./DialogBase-CPTrGtI1.js";import"./Close-CpX3wYP0.js";import"./HelpPopover-q5ekk2th.js";import"./MarkdownPopover-b-Sbeuph.js";import"./LightTooltip-BemyKtyu.js";import"./MarkdownSynapse-CjIEyYww.js";import"./SkeletonButton-C55ygy2r.js";import"./SkeletonInlineBlock-Cpev2ljV.js";import"./SkeletonTable-GTeIPnR6.js";import"./SkeletonParagraph-IppQ387m.js";import"./JsonSchemaForm-Dsh5ktWu.js";import"./GridLegacy-ObhHvjrA.js";import"./HelpTwoTone-BNZv33n-.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dq7CKKwm.js";import"./_createAggregator-B_RDxbRc.js";import"./_baseMap-CcdUGJ7r.js";import"./DateTimePicker-C3hYvKsi.js";import"./useMobilePicker-C22HmEzy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-EMuIDNUH.js";import"./index-BmrJEvkQ.js";import"./Chip-WQPXL1Rn.js";import"./Tabs-CQM_Dviu.js";import"./KeyboardArrowRight-Cn5zzdUM.js";import"./Autocomplete-Dz2SEq1Y.js";import"./usePreviousProps-DVYxLWpq.js";import"./use-deep-compare-effect.esm-C9UyT4bf.js";import"./TextWidget-Cs7IL1qi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
