import{jx as p}from"./iframe-BuKUHwYF.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CzABMie1.js";import"./index-Chi_LkuB.js";import"./useEntity-CSgo2ceg.js";import"./pickBy-B8SdrGtN.js";import"./isString-BCGF8_pc.js";import"./_baseIteratee-CXSP4y8a.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BrWu3fho.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bu-4xrzr.js";import"./useSchema-Btu0cfQl.js";import"./index-BZGMxTWz.js";import"./enums-Cde8Rohj.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B9FQUCG9.js";import"./uniq-BQOOE8HE.js";import"./forEach-UWyboym_.js";import"./Add-CsbQbGtz.js";import"./Grid-D5sZRbIA.js";import"./ListItem-BzWaE6Rk.js";import"./listItemButtonClasses-l-4efrzS.js";import"./ListItemIcon-nn3fG4Pw.js";import"./MenuItem-DmEYYO79.js";import"./ListItemText-TYQpdw4y.js";import"./ArrowUpward-H_KdcryI.js";import"./ContentCopy-DQ3Nt7Lg.js";import"./FormControlLabel-BQKBoEMA.js";import"./Checkbox-rNgXiDJm.js";import"./SwitchBase-Cq5wm8XC.js";import"./FormGroup-ScuvxNkT.js";import"./RadioGroup-ChAui0H3.js";import"./Radio-wRbUmLyc.js";import"./Slider-DKfeGjFN.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BDmP_pr5.js";import"./DialogBase-C4vg5HBd.js";import"./Close-D3qIPQRQ.js";import"./HelpPopover-D_lIBi9b.js";import"./MarkdownPopover-NRLWKKDC.js";import"./LightTooltip-C8cY03H6.js";import"./MarkdownSynapse-CiDjaR4B.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonTable-Ca_8DlU1.js";import"./SkeletonParagraph-CA2_vLea.js";import"./JsonSchemaForm-C40gMg12.js";import"./GridLegacy-Cp05DaqE.js";import"./HelpTwoTone-_W0_O2Q_.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CE7Pxy6_.js";import"./_createAggregator-BrkWVJ6j.js";import"./_baseMap-C0fo_1yR.js";import"./DateTimePicker-C6laZgzw.js";import"./useMobilePicker-FFwjvKwG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BorpTZZE.js";import"./index-BkSKqIFv.js";import"./Chip-D3Gu_L5i.js";import"./Tabs-Bfnxuk7u.js";import"./KeyboardArrowRight-BNqJKDnO.js";import"./Autocomplete-DlWKEogE.js";import"./usePreviousProps-DfueR3FT.js";import"./use-deep-compare-effect.esm-NDu0HAxR.js";import"./TextWidget-DkJbni4E.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
