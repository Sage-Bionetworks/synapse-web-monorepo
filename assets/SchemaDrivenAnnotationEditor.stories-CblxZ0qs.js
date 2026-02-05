import{jH as p}from"./iframe-Fj4lak5c.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B3-WGFEa.js";import"./index-Chi_LkuB.js";import"./useEntity-CsvyAHgM.js";import"./pickBy-DWGrTkiK.js";import"./isString-CPqjMqSr.js";import"./_baseIteratee-CMx6DeJF.js";import"./useQueries-ootAa_T1.js";import"./useSuspenseQuery-DCz9tJ8h.js";import"./useInfiniteQuery-CbadcZWG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CMAJQSrF.js";import"./useSchema-BAKNIFXW.js";import"./index-DNqXuQP7.js";import"./enums-et0ymZew.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DNtmXHsZ.js";import"./uniq-CTl5AwKM.js";import"./forEach-CWOCpBhE.js";import"./Add-CkOgASx_.js";import"./Grid-DgOwfEQi.js";import"./ListItem-By4wjk0j.js";import"./listItemButtonClasses-DJ1LX7Q2.js";import"./ListItemIcon-CSHx2Jkd.js";import"./MenuItem-B8CcEiWE.js";import"./ListItemText-MwTyHL5K.js";import"./ArrowUpward-BHD9DoK-.js";import"./ContentCopy-Cueojq3r.js";import"./FormControlLabel-B3G8i6At.js";import"./Checkbox-C1OqAc7h.js";import"./SwitchBase-oqrHKWjW.js";import"./FormGroup-Cbv8Y0_i.js";import"./RadioGroup-CI3vyDHN.js";import"./Radio-D4cCgHVZ.js";import"./Slider-BF_Z8nFi.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DfmVN50m.js";import"./DialogBase-DO9GwF3-.js";import"./Close-D8Dcnzwn.js";import"./HelpPopover-Dir9cMCM.js";import"./MarkdownPopover-CTr2IYFG.js";import"./LightTooltip-BvGcOz9H.js";import"./MarkdownSynapse-o56dOjAb.js";import"./SkeletonButton-Caf_IZFe.js";import"./SkeletonInlineBlock-BlJ5s_Kh.js";import"./SkeletonTable-t4KSioMX.js";import"./SkeletonParagraph-CrmOE7Us.js";import"./JsonSchemaForm-DOgbwUrM.js";import"./GridLegacy-DvxmOunu.js";import"./HelpTwoTone-CMicZohx.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-RnLXNBcX.js";import"./_createAggregator-D7S27SJf.js";import"./_baseMap-BixPoDUC.js";import"./DateTimePicker-CY6mUMfd.js";import"./useMobilePicker-g2pZ3HUm.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-W-fmil8B.js";import"./index-_4NbbnB5.js";import"./Chip-CGB0K5Hb.js";import"./Tabs-kWlA5ENP.js";import"./KeyboardArrowRight-FzBnfznX.js";import"./Autocomplete-BixN2QaB.js";import"./usePreviousProps-D80ZqI7V.js";import"./use-deep-compare-effect.esm-Cxsm155F.js";import"./TextWidget-BsDzpmgs.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
