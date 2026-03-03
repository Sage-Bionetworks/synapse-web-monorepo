import{ju as p}from"./iframe-BkPHOFWj.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BvJL8H-l.js";import"./index-Chi_LkuB.js";import"./useEntity-B0KS4UYv.js";import"./pickBy-CmcKUwMm.js";import"./isString-COEEFKQl.js";import"./_baseIteratee-DcTN9bCB.js";import"./useInfiniteQuery-CnlPE4i8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CEgBR25T.js";import"./useSchema-D2jcxHcW.js";import"./index-_bB67NUE.js";import"./enums-ItigRlIe.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-v_Rhmx0E.js";import"./uniq-YIXh5BiE.js";import"./forEach-CWOCpBhE.js";import"./Add-DHe1E9Jz.js";import"./Grid-xxQroJ24.js";import"./ListItem-C9d7TIRU.js";import"./listItemButtonClasses-AE8LoPH9.js";import"./ListItemIcon-D98c6RBB.js";import"./MenuItem-BtphKdVT.js";import"./ListItemText-C7-D8n3o.js";import"./ArrowUpward-A7zzQiKd.js";import"./ContentCopy-Td0iC9yU.js";import"./FormControlLabel-NsEZC7sm.js";import"./Checkbox-3MctZvwC.js";import"./SwitchBase-BEG0UBNi.js";import"./FormGroup-kAZ1gLdT.js";import"./RadioGroup-_8YVa_aB.js";import"./Radio-CV57SEmK.js";import"./Slider-DqSHvbjO.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Ba_H-keT.js";import"./DialogBase-BfMmSQyK.js";import"./Close-DeRoSJW0.js";import"./HelpPopover-D25ENwTX.js";import"./MarkdownPopover-CcRV06SZ.js";import"./LightTooltip-Cy8km7pR.js";import"./MarkdownSynapse-HVoFGBlz.js";import"./SkeletonButton-Du8eM1ph.js";import"./SkeletonInlineBlock-DNcFzW0b.js";import"./SkeletonTable-byD91yhK.js";import"./SkeletonParagraph-Bk8dDX0J.js";import"./JsonSchemaForm-D5-xu-dF.js";import"./GridLegacy-CNU_lLpN.js";import"./HelpTwoTone-DPahBOpz.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-xiLGOgwD.js";import"./_createAggregator-CZlwTSm2.js";import"./_baseMap-BJs1A3zN.js";import"./DateTimePicker-BewVYF1K.js";import"./useMobilePicker-B2isVhm5.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CCVeZZ2B.js";import"./index-ZxbTHjgY.js";import"./Chip-C5nNw1tU.js";import"./Tabs-BrfjOIEK.js";import"./KeyboardArrowRight-CVEcENwl.js";import"./Autocomplete-C4HMm5y0.js";import"./usePreviousProps-DHPXFoXz.js";import"./use-deep-compare-effect.esm-PGsQh5wx.js";import"./TextWidget-BHCOY1CG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
