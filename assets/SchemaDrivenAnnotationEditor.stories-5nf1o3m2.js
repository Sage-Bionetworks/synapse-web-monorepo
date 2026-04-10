import{jw as p}from"./iframe-BCS2zFLE.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BHZACvk4.js";import"./index-Chi_LkuB.js";import"./useEntity-RNacaqvz.js";import"./pickBy-CnMUFS2E.js";import"./isString-C9PyDJdm.js";import"./_baseIteratee-CNNmt5Ou.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C7RDpDyE.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czrapiy_.js";import"./useSchema-2jYZJgMV.js";import"./index-BYGWYrFd.js";import"./enums-kokurATL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DR-ZM-OT.js";import"./uniq-DROKfxkE.js";import"./forEach-UWyboym_.js";import"./Add-CyreqsEp.js";import"./Grid-LqL3SHkR.js";import"./ListItem-vzlQW0vR.js";import"./listItemButtonClasses-CaYoUFjn.js";import"./ListItemIcon-B9ELcqov.js";import"./MenuItem-p1NQf3Mg.js";import"./ListItemText-LyLhql8E.js";import"./ArrowUpward-CnIismav.js";import"./ContentCopy-Bk0lnM9f.js";import"./FormControlLabel-CuWbK74X.js";import"./Checkbox-CRlsiFLX.js";import"./SwitchBase-BktFrpMy.js";import"./FormGroup-CC82Fw5i.js";import"./RadioGroup-CTo50XVK.js";import"./Radio-D_chF1FW.js";import"./Slider-BA99ECYN.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BsPPfOv5.js";import"./DialogBase-DQkj6zY_.js";import"./Close-D_V12edy.js";import"./HelpPopover-S99r4Lui.js";import"./MarkdownPopover-BSxLlxLY.js";import"./LightTooltip-CQxu9Yos.js";import"./MarkdownSynapse-CJf-YsFP.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonTable-D-hZBWBR.js";import"./SkeletonParagraph-Ch_An-pk.js";import"./JsonSchemaForm-DV3jmWS_.js";import"./GridLegacy-B03z6nHU.js";import"./HelpTwoTone-D7gGCUf1.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D3fmEvsL.js";import"./_createAggregator-uLAI0WRG.js";import"./_baseMap-D6Z2KTJp.js";import"./DateTimePicker-w8EDcnV1.js";import"./useMobilePicker-BO0dzjRM.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CEGO8EV3.js";import"./index-BEuukshQ.js";import"./Chip-BWwS-E8w.js";import"./Tabs-5GaVjlbR.js";import"./KeyboardArrowRight-Cy0H-NDq.js";import"./Autocomplete-CGtpzGiq.js";import"./usePreviousProps-Dzc1i5J4.js";import"./use-deep-compare-effect.esm-Bi8PX7wg.js";import"./TextWidget-B9nrT8pT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
