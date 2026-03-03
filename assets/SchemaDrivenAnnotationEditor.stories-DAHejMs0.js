import{ju as p}from"./iframe-DRnLZq4W.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DTRej2z1.js";import"./index-Chi_LkuB.js";import"./useEntity-BoL3AsOb.js";import"./pickBy-DgdC9X2n.js";import"./isString-jqYJCv8E.js";import"./_baseIteratee-CGgYpGW3.js";import"./useInfiniteQuery-CEfwzGx4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CqorM4vH.js";import"./useSchema-E5bhqGnb.js";import"./index-Bk0Kt1mB.js";import"./enums-B5fUPIcP.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ZawQhoV0.js";import"./uniq-sxyr_hIR.js";import"./forEach-CWOCpBhE.js";import"./Add-D2TvzV75.js";import"./Grid-ocV7cG9J.js";import"./ListItem-CTleHzKz.js";import"./listItemButtonClasses-B9Hm_ZqE.js";import"./ListItemIcon-DvtddtPN.js";import"./MenuItem-FdihTtHL.js";import"./ListItemText-DPte6nTG.js";import"./ArrowUpward-_xlYQb8E.js";import"./ContentCopy-BKAYT7q0.js";import"./FormControlLabel-ChAxAa_4.js";import"./Checkbox-CkzF06aO.js";import"./SwitchBase-D8YwYWem.js";import"./FormGroup-Dj3Xs-iq.js";import"./RadioGroup-CK8-a8Pz.js";import"./Radio-o0e-HG66.js";import"./Slider-Bcei-1_u.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CeVKY213.js";import"./DialogBase-DBv4DzqI.js";import"./Close-Lw7VtlJf.js";import"./HelpPopover-QWyK0RpX.js";import"./MarkdownPopover-DkKnwS9d.js";import"./LightTooltip-BATo5oyN.js";import"./MarkdownSynapse-BmDBsUdI.js";import"./SkeletonButton-DKOFMwSN.js";import"./SkeletonInlineBlock-qphYniCB.js";import"./SkeletonTable-BRvwRKgI.js";import"./SkeletonParagraph-gWuTxaCe.js";import"./JsonSchemaForm-qYiuIOlz.js";import"./GridLegacy-Bt9b4rzV.js";import"./HelpTwoTone-BG2ahwvD.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BS2jY_3e.js";import"./_createAggregator-DjrWQ8gC.js";import"./_baseMap-UYxvI7CQ.js";import"./DateTimePicker-DuzHFl-e.js";import"./useMobilePicker-CLusb-Sj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment--Hh6Lf7Q.js";import"./index-C6Fl73J9.js";import"./Chip-X2PFaiz1.js";import"./Tabs-I2C72dZ1.js";import"./KeyboardArrowRight-sTgRoBfy.js";import"./Autocomplete-xEHaF-WV.js";import"./usePreviousProps-Cw5ajIaX.js";import"./use-deep-compare-effect.esm-ADfqYNtl.js";import"./TextWidget-D8Gc78mG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
