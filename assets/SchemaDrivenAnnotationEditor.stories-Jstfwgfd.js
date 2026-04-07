import{jw as p}from"./iframe-CA42Mn9q.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D8ojl3xF.js";import"./index-Chi_LkuB.js";import"./useEntity-CU14jxI-.js";import"./pickBy-x6qhMxFk.js";import"./isString-C-nM3PI9.js";import"./_baseIteratee-Bs1FcXpk.js";import"./useInfiniteQuery-uipgRME6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C7vol-cD.js";import"./useSchema-BSoiSdI3.js";import"./index-B7o2bmsL.js";import"./enums-CsJ1jbRu.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C5i0FLu_.js";import"./uniq-biRh0X9x.js";import"./forEach-UWyboym_.js";import"./Add-BFelGBox.js";import"./Grid-B4lamEEo.js";import"./ListItem-CZe7JS5c.js";import"./listItemButtonClasses-CRjUe2Vi.js";import"./ListItemIcon-CzifDA4B.js";import"./MenuItem-BtHpeBI3.js";import"./ListItemText-rNjPJM0V.js";import"./ArrowUpward-CT7HLLEd.js";import"./ContentCopy-B8mTItlK.js";import"./FormControlLabel-DyBRYtGv.js";import"./Checkbox-DGCzgHVy.js";import"./SwitchBase-COFpZMHN.js";import"./FormGroup-DcGJePCZ.js";import"./RadioGroup-DTym7F7_.js";import"./Radio-Co2yso-D.js";import"./Slider-BrtENULU.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BSBfViGH.js";import"./DialogBase-DPa9xviX.js";import"./Close-BxAT1Y3p.js";import"./HelpPopover-_39XgxVX.js";import"./MarkdownPopover-Cw4pup3u.js";import"./LightTooltip-CkVaiv9P.js";import"./MarkdownSynapse-BtRsfIl6.js";import"./SkeletonButton-BBbLk1YB.js";import"./SkeletonInlineBlock-COfhdDsT.js";import"./SkeletonTable--UszwM1d.js";import"./SkeletonParagraph-CDHIPMz9.js";import"./JsonSchemaForm-CnD40rNB.js";import"./GridLegacy-nAhtZnNO.js";import"./HelpTwoTone-CM59umWY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-mrsMEO2c.js";import"./_createAggregator-CNUCDTmu.js";import"./_baseMap-2hGsRQwM.js";import"./DateTimePicker-CW8HLR2V.js";import"./useMobilePicker-BwuXEafH.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-r6hR1iV4.js";import"./index-D60w0tLm.js";import"./Chip-CtbWqGj5.js";import"./Tabs-CbEnmF2c.js";import"./KeyboardArrowRight-BqHHp7mK.js";import"./Autocomplete-CgHWwNDH.js";import"./usePreviousProps-B1BOdqtH.js";import"./use-deep-compare-effect.esm-caUuArQa.js";import"./TextWidget-CT2ExeLM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
