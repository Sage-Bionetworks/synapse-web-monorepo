import{ju as p}from"./iframe-DlAeJyvm.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DNyDOOd2.js";import"./index-Chi_LkuB.js";import"./useEntity-C7X-K5Kk.js";import"./pickBy-CQSawNAW.js";import"./isString-DGjPWBPW.js";import"./_baseIteratee-BeJgVukd.js";import"./useInfiniteQuery-DNMsj4KR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8qC_DhMP.js";import"./useSchema-YpvZcu-9.js";import"./index-ypCwGXPR.js";import"./enums-D3RbDQXJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B3PWukHy.js";import"./uniq-B3YPAm3j.js";import"./forEach-CWOCpBhE.js";import"./Add-CohpqKwD.js";import"./Grid-C5BqjR7G.js";import"./ListItem-DwPba7y1.js";import"./listItemButtonClasses-D1HBp4ip.js";import"./ListItemIcon-DmUKs7Qz.js";import"./MenuItem-Bx5CSZWI.js";import"./ListItemText-Cd60kjBQ.js";import"./ArrowUpward-ComofllD.js";import"./ContentCopy-Kirrl3b9.js";import"./FormControlLabel-BXRXUZd8.js";import"./Checkbox-BWImtRE8.js";import"./SwitchBase-dZ1Go2iy.js";import"./FormGroup-CdEuxaUS.js";import"./RadioGroup-DgRE642y.js";import"./Radio-BocJ6uE_.js";import"./Slider-HStJPeT6.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BREVjTJW.js";import"./DialogBase-BrTsbhWa.js";import"./Close-DIOhH67l.js";import"./HelpPopover-C7aATcX6.js";import"./MarkdownPopover-CipjSExT.js";import"./LightTooltip-D-pIKqvq.js";import"./MarkdownSynapse-DknW4l8A.js";import"./SkeletonButton-BcA4f8OA.js";import"./SkeletonInlineBlock-NsF75vHh.js";import"./SkeletonTable-DPSdTVk3.js";import"./SkeletonParagraph-B7DNR62K.js";import"./JsonSchemaForm-BR3vGWC5.js";import"./GridLegacy-CUABnJa6.js";import"./HelpTwoTone-DOhuEPO6.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BgbRYDAy.js";import"./_createAggregator-CWcspDPY.js";import"./_baseMap-CH41Ntgo.js";import"./DateTimePicker-Bx9WpwH9.js";import"./useMobilePicker-Fsox28uO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BcSUicm_.js";import"./index-CRBkYYcS.js";import"./Chip-CopACKXK.js";import"./Tabs-DilX55ZU.js";import"./KeyboardArrowRight-BJVCYelc.js";import"./Autocomplete-Bp8wAKkz.js";import"./usePreviousProps-0ItZLv7W.js";import"./use-deep-compare-effect.esm-B-RqfxgB.js";import"./TextWidget-BGxxgWHS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
