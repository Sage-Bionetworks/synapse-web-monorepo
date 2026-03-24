import{jx as p}from"./iframe-BmEDGyjb.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BxXjPzu7.js";import"./index-Chi_LkuB.js";import"./useEntity-556WyfPL.js";import"./pickBy-DD2e3vqq.js";import"./isString-i0acvnu7.js";import"./_baseIteratee-DaFZjSQq.js";import"./useInfiniteQuery-BckXm8pp.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DqFjpoQY.js";import"./useSchema-BlrKEUve.js";import"./index-DiE6VE2F.js";import"./enums-COXbQZi9.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D0lChX0L.js";import"./uniq-BS1rMeBr.js";import"./forEach-CWOCpBhE.js";import"./Add-C3DjTskJ.js";import"./Grid-DnxKXq8X.js";import"./ListItem-ddX_2ep6.js";import"./listItemButtonClasses-Bg5Hn2Ij.js";import"./ListItemIcon-BurNuEDB.js";import"./MenuItem-BK2EpW1E.js";import"./ListItemText-3AUe3yhE.js";import"./ArrowUpward-CBpMudeq.js";import"./ContentCopy-BZosPXBV.js";import"./FormControlLabel-BmQ6KfaB.js";import"./Checkbox-iF1AD3Pq.js";import"./SwitchBase-D5o4ldYs.js";import"./FormGroup-dXyhcsAq.js";import"./RadioGroup-BJcnSUtZ.js";import"./Radio-BujAsrmc.js";import"./Slider-Dx3PK2Qy.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CSeFQT8P.js";import"./DialogBase--Z6amcCK.js";import"./Close-Ba6rPhRO.js";import"./HelpPopover-BBG0qokF.js";import"./MarkdownPopover-w2dEOi0v.js";import"./LightTooltip-D4z_e32b.js";import"./MarkdownSynapse-DScTNbQ4.js";import"./SkeletonButton-Dqpl9ltR.js";import"./SkeletonInlineBlock-gJQ0GVFi.js";import"./SkeletonTable-DO7dretU.js";import"./SkeletonParagraph-BB_2QaC-.js";import"./JsonSchemaForm-Bols31m7.js";import"./GridLegacy-DHbHryfg.js";import"./HelpTwoTone-eNQGAYtV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BJDjeXXl.js";import"./_createAggregator-Btyg6S0g.js";import"./_baseMap-g_RvZdBZ.js";import"./DateTimePicker-D09vbDS1.js";import"./useMobilePicker-rAHKhKyG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-KkDxXuti.js";import"./index-95w8b1hR.js";import"./Chip-COc0F3aL.js";import"./Tabs-CoCQ9ntw.js";import"./KeyboardArrowRight-BSfY5abi.js";import"./Autocomplete-MzGNRBlq.js";import"./usePreviousProps-B__NytRI.js";import"./use-deep-compare-effect.esm-BKzENA5E.js";import"./TextWidget-DXc8Fb1q.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
