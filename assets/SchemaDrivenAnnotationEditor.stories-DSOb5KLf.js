import{jv as p}from"./iframe-CAtQIdHN.js";import{S as a}from"./SchemaDrivenAnnotationEditor-9vCCQHx1.js";import"./index-Chi_LkuB.js";import"./useEntity-BJFovbK0.js";import"./pickBy-OoY_CQtS.js";import"./isString-Daqzr2H6.js";import"./_baseIteratee-_Nd2QfE8.js";import"./useInfiniteQuery-BLpRTFv2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CNGULn-c.js";import"./useSchema-BwewFxO2.js";import"./index-DCeKPwDF.js";import"./enums-C0UsI1cy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CC59DhCt.js";import"./uniq-BUWqKqmn.js";import"./forEach-CWOCpBhE.js";import"./Add-DLzXSET9.js";import"./Grid-B9xtwq2L.js";import"./ListItem-B2k86Eei.js";import"./listItemButtonClasses-DmHw4WH8.js";import"./ListItemIcon-CTLnlKWf.js";import"./MenuItem-CMeMzyXl.js";import"./ListItemText-CLcJC5Hy.js";import"./ArrowUpward-BjvW6mk9.js";import"./ContentCopy-Ch7qkCTH.js";import"./FormControlLabel-CtOo13QD.js";import"./Checkbox-D5FQxyEB.js";import"./SwitchBase-DaWZ8Z7d.js";import"./FormGroup-D5YPq9YV.js";import"./RadioGroup-D3Dpt1pm.js";import"./Radio-CCXhQo-F.js";import"./Slider-DQxNCVLU.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DyMwO9XA.js";import"./DialogBase-nASrT1FI.js";import"./Close-D6EAZUK8.js";import"./HelpPopover-gTGEtHsE.js";import"./MarkdownPopover-BwU3z6dR.js";import"./LightTooltip-B_-PEZcf.js";import"./MarkdownSynapse-Bl9eZLoo.js";import"./SkeletonButton-ikrND2s9.js";import"./SkeletonInlineBlock-BsYWVoeU.js";import"./SkeletonTable-CGYf92GP.js";import"./SkeletonParagraph-BrBu-G7u.js";import"./JsonSchemaForm-F5MMAqHi.js";import"./GridLegacy-gaJNYHXj.js";import"./HelpTwoTone-CvqaW1k5.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CRoPnP6H.js";import"./_createAggregator-BsZhN0Ad.js";import"./_baseMap-CXOYZcZC.js";import"./DateTimePicker-Cp7ABq47.js";import"./useMobilePicker-qwNz3Yju.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-2BEVXnBh.js";import"./index-DVkiAmff.js";import"./Chip-CfWpGXU5.js";import"./Tabs-D8f3f-hN.js";import"./KeyboardArrowRight-DJnldEa8.js";import"./Autocomplete-5LmBIVLz.js";import"./usePreviousProps-NkWMg1Gg.js";import"./use-deep-compare-effect.esm-JJyQDcTJ.js";import"./TextWidget-C26pMp-5.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
