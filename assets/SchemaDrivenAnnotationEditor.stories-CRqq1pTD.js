import{jx as p}from"./iframe-CyTUL3rw.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BRiDz33A.js";import"./index-Chi_LkuB.js";import"./useEntity-B6hYLHUM.js";import"./pickBy-CfXQfuB9.js";import"./isString-CZ6zp9s2.js";import"./_baseIteratee-MK8aYcv5.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-8XDsvgry.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-XTC4bn5X.js";import"./useSchema-DCr3bdzm.js";import"./index-X8CLlstI.js";import"./enums-D0dEuLdD.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CY-oKdBS.js";import"./uniq-DVHsjHjL.js";import"./forEach-UWyboym_.js";import"./Add-DBt0ydlm.js";import"./Grid-B8Ch4kur.js";import"./ListItem-CARBcda3.js";import"./listItemButtonClasses-CuHOQPFx.js";import"./ListItemIcon-Dn3yEGq-.js";import"./MenuItem-48CaJz-o.js";import"./ListItemText-BNy5-mGi.js";import"./ArrowUpward-f69XK48r.js";import"./ContentCopy-Dwffha2R.js";import"./FormControlLabel-BoYvZo-l.js";import"./Checkbox-mGc4RGP0.js";import"./SwitchBase-BAQlXzL4.js";import"./FormGroup-BgDNvdHh.js";import"./RadioGroup-BFl8OAX7.js";import"./Radio-COPtt3m4.js";import"./Slider-DZZE-sUo.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BSxA4EpL.js";import"./DialogBase-BmPd6gFD.js";import"./Close-Cs5OhkJ0.js";import"./HelpPopover-Di3M7oAV.js";import"./MarkdownPopover-C7H_W_vs.js";import"./LightTooltip-Br9ozYpY.js";import"./MarkdownSynapse-C3mcPF1h.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonTable-BzEL_yMf.js";import"./SkeletonParagraph-D3EKUoCV.js";import"./JsonSchemaForm-B-92-fm_.js";import"./GridLegacy-CLFoxGKK.js";import"./HelpTwoTone-xLbHQsyy.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BIwKGyld.js";import"./_createAggregator-DRlj7uNe.js";import"./_baseMap-B7oG-iip.js";import"./DateTimePicker-I4UFuVzb.js";import"./useMobilePicker-DX3s4_Y1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BVQ-z-jg.js";import"./index-BOhc23wR.js";import"./Chip-RUiUFPKg.js";import"./Tabs-jtz7i5ZF.js";import"./KeyboardArrowRight-mfGlS2a-.js";import"./Autocomplete-CXkWE5V9.js";import"./usePreviousProps-Bk4ZH_gp.js";import"./use-deep-compare-effect.esm-CaVDTR0-.js";import"./TextWidget-DJhU2myT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
