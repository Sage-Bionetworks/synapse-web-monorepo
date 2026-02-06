import{jI as p}from"./iframe-CL1UF9wq.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CWHOCdzK.js";import"./index-Chi_LkuB.js";import"./useEntity-D195lckg.js";import"./pickBy-Dh62N0PQ.js";import"./isString-Bk_2wf3u.js";import"./_baseIteratee-DMV55V0L.js";import"./useQueries-NvxyI8_9.js";import"./useSuspenseQuery-LePCNQBH.js";import"./useInfiniteQuery-DWi368jF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BEcFfxs5.js";import"./useSchema-CLt8KsUA.js";import"./index-C_VS7e0_.js";import"./enums-C46JrnLF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bcjl1bpK.js";import"./uniq-BczlDYoN.js";import"./forEach-CWOCpBhE.js";import"./Add-wAQLjUyN.js";import"./Grid-BA52H04o.js";import"./ListItem-BwABetlb.js";import"./listItemButtonClasses-C02VQ1J6.js";import"./ListItemIcon-CbcKYjGn.js";import"./MenuItem-LKo31BtE.js";import"./ListItemText-5CEhn3nz.js";import"./ArrowUpward-CHY2wzP0.js";import"./ContentCopy-C12K-Xgg.js";import"./FormControlLabel-CYpBZGqx.js";import"./Checkbox-D2ule7FR.js";import"./SwitchBase-CZN2jDS4.js";import"./FormGroup-D8Ocobxf.js";import"./RadioGroup-04Bd-wn_.js";import"./Radio-C7rC3Lmu.js";import"./Slider-CJxMFe0z.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BgArY7GH.js";import"./DialogBase-D_WMzDU9.js";import"./Close-BWRQhN2m.js";import"./HelpPopover-jj4j5zDP.js";import"./MarkdownPopover-BLBfaCop.js";import"./LightTooltip-DY-wPTTk.js";import"./MarkdownSynapse-CdtBHZEE.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonTable-DMqnct0i.js";import"./SkeletonParagraph-D55VBz6b.js";import"./JsonSchemaForm-kCyXQMKG.js";import"./GridLegacy-CcNSqfTl.js";import"./HelpTwoTone-o_u3o2Hq.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B-yZMmX9.js";import"./_createAggregator-BqE9c8uK.js";import"./_baseMap-OqYiEbFz.js";import"./DateTimePicker-BaN8Ah46.js";import"./useMobilePicker-J7eeA4ny.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DFPs_6TF.js";import"./index-D_p7qk7E.js";import"./Chip-DXWiT4yo.js";import"./Tabs-DL2Gsrb_.js";import"./KeyboardArrowRight-dy3Z24dK.js";import"./Autocomplete-CFb4DNDP.js";import"./usePreviousProps-D-L7dkh6.js";import"./use-deep-compare-effect.esm-BsYNt22s.js";import"./TextWidget-BpFTeI0X.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
