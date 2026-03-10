import{jy as p}from"./iframe-DJOT8ubk.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dgna-cLb.js";import"./index-Chi_LkuB.js";import"./useEntity-BYI2LyM0.js";import"./pickBy-Bw8c6iXR.js";import"./isString-V0uzYRo2.js";import"./_baseIteratee-CSLaR471.js";import"./useInfiniteQuery-D5oLhJn7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B5pDt8NK.js";import"./useSchema-CAqdlpUH.js";import"./index-DPWIUnPV.js";import"./enums-BrRBD9tt.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C7K8H9C3.js";import"./uniq-zh-G_n8z.js";import"./forEach-CWOCpBhE.js";import"./Add-F2RYjGK_.js";import"./Grid-CIa2Y_N7.js";import"./ListItem-B_CEgXdE.js";import"./listItemButtonClasses-ClnhnfoV.js";import"./ListItemIcon-RXzkWSto.js";import"./MenuItem-D1_UwcJ_.js";import"./ListItemText-mH_xhqmw.js";import"./ArrowUpward-BZJ3ttI1.js";import"./ContentCopy-CchFBmf2.js";import"./FormControlLabel--J53tQKK.js";import"./Checkbox-DIxTHw96.js";import"./SwitchBase-Dh2EEgQv.js";import"./FormGroup-C-zR252h.js";import"./RadioGroup-53pTIizH.js";import"./Radio--EuSn90K.js";import"./Slider-BF9CsqjD.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D-4hDJN8.js";import"./DialogBase-C-V5Cw2E.js";import"./Close-DdNyWCxq.js";import"./HelpPopover-Ce02sqI5.js";import"./MarkdownPopover-DiesQhNw.js";import"./LightTooltip-C1GNiWuq.js";import"./MarkdownSynapse-BCTt75oT.js";import"./SkeletonButton-AJ5Zwmr0.js";import"./SkeletonInlineBlock-x0qIf0wc.js";import"./SkeletonTable-DlP5X3HC.js";import"./SkeletonParagraph-COpY1z9l.js";import"./JsonSchemaForm-DL6e44zI.js";import"./GridLegacy-B9UQub11.js";import"./HelpTwoTone-Q8tOtZbR.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BJjNSKMA.js";import"./_createAggregator-DcgKR7Gh.js";import"./_baseMap-ffY1WrHn.js";import"./DateTimePicker-BizqX1tb.js";import"./useMobilePicker-VqhC_brq.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BLNpvc8n.js";import"./index-C3UiH5jH.js";import"./Chip-OZ5AEEU1.js";import"./Tabs-DryfmWXe.js";import"./KeyboardArrowRight-Phc3Kbrh.js";import"./Autocomplete-BF44-1eo.js";import"./usePreviousProps-BQpd1Tk5.js";import"./use-deep-compare-effect.esm-CUhLaRS3.js";import"./TextWidget-LqrUuPEU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
