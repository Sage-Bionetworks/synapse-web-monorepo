import{jJ as p}from"./iframe-BYI6UvQX.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CRgA5ksu.js";import"./index-Chi_LkuB.js";import"./useEntity-dbI9pFoY.js";import"./pickBy-BNXvQbxg.js";import"./isString-CmVKC18Y.js";import"./_baseIteratee-pBFRPpfw.js";import"./useQueries-CWXoKjwZ.js";import"./useSuspenseQuery-CyhHWdVP.js";import"./useInfiniteQuery-BV081oyQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CmhLH8R-.js";import"./useSchema-BV7K6Am-.js";import"./index-Chgjogt9.js";import"./enums-DUAaKESZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ClZ52RoH.js";import"./uniq-DXRNdgIY.js";import"./forEach-CWOCpBhE.js";import"./Add-Cnnihtur.js";import"./Grid-L5qrXUIJ.js";import"./ListItem-BpFFySgY.js";import"./listItemButtonClasses-DiELUu0G.js";import"./ListItemIcon-CEF41Smh.js";import"./MenuItem-x7kd2x5J.js";import"./ListItemText-Dck5BxXi.js";import"./ArrowUpward-DINAIp7n.js";import"./ContentCopy-B9n9c5vg.js";import"./FormControlLabel-Cz68SJYk.js";import"./Checkbox-pSIFJ5K9.js";import"./SwitchBase-wy1xArrI.js";import"./FormGroup-BUh7qyUl.js";import"./RadioGroup-DmxKohOh.js";import"./Radio-yHfqDIgQ.js";import"./Slider-DCT6udhH.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-toxY45nm.js";import"./DialogBase-C1QyiwVh.js";import"./Close-Clh2xDFP.js";import"./HelpPopover-DhAbnR7s.js";import"./MarkdownPopover-B8qxAI9Z.js";import"./LightTooltip-BPs4I3gS.js";import"./MarkdownSynapse-DLgizTv6.js";import"./SkeletonButton-moYwMGBJ.js";import"./SkeletonInlineBlock-CvF0ovYz.js";import"./SkeletonTable-D-cfGk8m.js";import"./SkeletonParagraph-BUXmdzG2.js";import"./JsonSchemaForm-BrsaoUaa.js";import"./GridLegacy--ncYMh8e.js";import"./HelpTwoTone-CAlB_KKo.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Du30YXzz.js";import"./_createAggregator-Ddx1LTyi.js";import"./_baseMap-DvfJE8ol.js";import"./DateTimePicker-iXC-eDmr.js";import"./useMobilePicker-DYn98tHh.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DHiOenVW.js";import"./index-CWsmnNqr.js";import"./Chip-CzyNjUbD.js";import"./Tabs-CqDV0787.js";import"./KeyboardArrowRight-BGpF7ALs.js";import"./Autocomplete-CZmcknlD.js";import"./usePreviousProps-CE-CeNM-.js";import"./use-deep-compare-effect.esm-Da56MkFi.js";import"./TextWidget-VcZy09qP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
