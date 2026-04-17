import{jx as p}from"./iframe-Bg-s9pTZ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DvkR9edC.js";import"./index-Chi_LkuB.js";import"./useEntity-BQmjN6b5.js";import"./pickBy-B2wdFJ_u.js";import"./isString-DrOnGG_f.js";import"./_baseIteratee-BAr5j981.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Camq04G4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CK8Dqze5.js";import"./useSchema-4046P1pH.js";import"./index-DPV0Zypt.js";import"./enums-CxQY3rUi.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BxudFW9Z.js";import"./uniq-BV4GmJ4R.js";import"./forEach-UWyboym_.js";import"./Add-Drxp90V0.js";import"./Grid-CDUSb_WG.js";import"./ListItem-DGasfxS0.js";import"./listItemButtonClasses-rzI78vlT.js";import"./ListItemIcon-BI107j-v.js";import"./MenuItem-D2-zdb04.js";import"./ListItemText-Drl8uMns.js";import"./ArrowUpward-CVnw1kxY.js";import"./ContentCopy-DRJUoDTG.js";import"./FormControlLabel-HKnEx2oy.js";import"./Checkbox-D-ymD47b.js";import"./SwitchBase-CW3A8DBo.js";import"./FormGroup-CDV06DZJ.js";import"./RadioGroup-Du_zJv84.js";import"./Radio-DHH1jft6.js";import"./Slider-BKiG8Bs-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D8nwHqWo.js";import"./DialogBase-DgBP91vj.js";import"./Close-1Ub5h9Ti.js";import"./HelpPopover-cbNyKjRR.js";import"./MarkdownPopover-DsmK9fKf.js";import"./LightTooltip-CZzLKYGi.js";import"./MarkdownSynapse-xJpqab6Z.js";import"./SkeletonButton-Dp_QSsYr.js";import"./SkeletonInlineBlock-BF2HGXEd.js";import"./SkeletonTable-Bbn4NeNZ.js";import"./SkeletonParagraph-B9vNapgZ.js";import"./JsonSchemaForm-CXfHQLsC.js";import"./GridLegacy-DsmLgFy-.js";import"./HelpTwoTone-Bl0xh4dR.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CDTHAEzh.js";import"./_createAggregator-DKHQwFu4.js";import"./_baseMap-B33d-4DG.js";import"./DateTimePicker-Cubxsfvt.js";import"./useMobilePicker-B40Scfro.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-1EM0CRRz.js";import"./index-BjGPL7ol.js";import"./Chip-DPIa4PAj.js";import"./Tabs-uQQPCBmX.js";import"./KeyboardArrowRight-Bpuh-xhS.js";import"./Autocomplete-DItW-jcs.js";import"./usePreviousProps-CqDukbv0.js";import"./use-deep-compare-effect.esm-3URqCwq7.js";import"./TextWidget-B8p7D2OC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
