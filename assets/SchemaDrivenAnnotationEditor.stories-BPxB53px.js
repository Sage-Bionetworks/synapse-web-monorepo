import{jx as p}from"./iframe-DlbWcGN2.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BTOqZe5Y.js";import"./index-Chi_LkuB.js";import"./useEntity-B3m7rAsd.js";import"./pickBy-BVWVK5RI.js";import"./isString-BE-JE0d2.js";import"./_baseIteratee-zBmYV8lZ.js";import"./useInfiniteQuery-EmSFUzRL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bb-PLcEz.js";import"./useSchema-CqHFZmWs.js";import"./index-DH0MY8eC.js";import"./enums-DIWpo0Pm.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DR9OfBR9.js";import"./uniq-DKgJpKyz.js";import"./forEach-CWOCpBhE.js";import"./Add-CuP6fwc1.js";import"./Grid-BM0Djy_Q.js";import"./ListItem-Cp-QQlS2.js";import"./listItemButtonClasses-CltND6A7.js";import"./ListItemIcon-B1WJ4-Ld.js";import"./MenuItem-y9tFSlzR.js";import"./ListItemText-BvmDh4jW.js";import"./ArrowUpward-Dy_llndP.js";import"./ContentCopy-DhS0PKcn.js";import"./FormControlLabel-CdDhVpIz.js";import"./Checkbox-CcAZ2GlS.js";import"./SwitchBase-CK2q1rGh.js";import"./FormGroup-BqtfAfJB.js";import"./RadioGroup-ufmF1bYT.js";import"./Radio-Di4fsXKc.js";import"./Slider-DCnRn7wT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-52XVYQBi.js";import"./DialogBase-iPKdwKl0.js";import"./Close-ClY7c3V4.js";import"./HelpPopover-D8qjwvMR.js";import"./MarkdownPopover-Dqmv7u1m.js";import"./LightTooltip-jUz17zhr.js";import"./MarkdownSynapse-DBEf5gPX.js";import"./SkeletonButton-dCMet_AC.js";import"./SkeletonInlineBlock-Zv-gdja3.js";import"./SkeletonTable-CLjRwafm.js";import"./SkeletonParagraph-CTcAcvxB.js";import"./JsonSchemaForm-bKL3SM-M.js";import"./GridLegacy-BatwzeOV.js";import"./HelpTwoTone-ZBxse12v.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-LhdnqlEe.js";import"./_createAggregator-BgBf_n3z.js";import"./_baseMap-CPbOR7vb.js";import"./DateTimePicker-D94EkrQ3.js";import"./useMobilePicker-B9ZJ2wCe.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D-sqnBO3.js";import"./index-CPDGSnl2.js";import"./Chip-B6dYwJrn.js";import"./Tabs-CYTHju5p.js";import"./KeyboardArrowRight-CpLoSs9H.js";import"./Autocomplete-D79HtMO7.js";import"./usePreviousProps-BDqNGxJz.js";import"./use-deep-compare-effect.esm-Dh6CqU-e.js";import"./TextWidget-CCtID-Ri.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
