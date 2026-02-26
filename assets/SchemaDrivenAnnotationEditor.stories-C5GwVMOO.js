import{ju as p}from"./iframe-HR5efO_6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bnf98Hn-.js";import"./index-Chi_LkuB.js";import"./useEntity-CRLsg8GB.js";import"./pickBy-B4lHgJ27.js";import"./isString-DCUbJhtU.js";import"./_baseIteratee-CTXbCQzb.js";import"./useInfiniteQuery-BffcSkFX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OkomfHu0.js";import"./useSchema-afdXrp53.js";import"./index-1dgX1C3K.js";import"./enums-DwbyUcCH.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DeceRv-z.js";import"./uniq-BkxzrQ3D.js";import"./forEach-CWOCpBhE.js";import"./Add-BEiUgytS.js";import"./Grid-Crcn3maU.js";import"./ListItem-BxL9gmb1.js";import"./listItemButtonClasses-M7LT5_He.js";import"./ListItemIcon-C1urDyEd.js";import"./MenuItem-BBTtHw-Z.js";import"./ListItemText-eV1etz5l.js";import"./ArrowUpward-3PxnkKCA.js";import"./ContentCopy-Dp4ZTKbT.js";import"./FormControlLabel-B64hA87S.js";import"./Checkbox-CZhCtDAe.js";import"./SwitchBase-Bx2dA3EB.js";import"./FormGroup-hLVMEmoo.js";import"./RadioGroup-BMNqRdN6.js";import"./Radio-DKiY7dcP.js";import"./Slider-ByALUZPF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BDKUD8yD.js";import"./DialogBase-CheFJngv.js";import"./Close-DAks8q53.js";import"./HelpPopover-C2dZwoeG.js";import"./MarkdownPopover-DV3WT5Oj.js";import"./LightTooltip-DgluAXFh.js";import"./MarkdownSynapse-BD_kELiG.js";import"./SkeletonButton-CpPX_nit.js";import"./SkeletonInlineBlock-pMLRfvW-.js";import"./SkeletonTable-Bm63jMKW.js";import"./SkeletonParagraph-BGy70kQG.js";import"./JsonSchemaForm-Dj5ZUtfE.js";import"./GridLegacy-EIvDRdIz.js";import"./HelpTwoTone-BGQt32MU.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bu_IPWh2.js";import"./_createAggregator-CoVzYINY.js";import"./_baseMap-d573cvgi.js";import"./DateTimePicker-CmY4lMHo.js";import"./useMobilePicker-DWEuINnV.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-UzXna9jk.js";import"./index-BuKVPeEG.js";import"./Chip-CBQKgw7F.js";import"./Tabs-Br3Nl9Pf.js";import"./KeyboardArrowRight-CS8JwbMl.js";import"./Autocomplete-B42fI3Xd.js";import"./usePreviousProps-VqM79vRJ.js";import"./use-deep-compare-effect.esm-BfvhFq7j.js";import"./TextWidget-DrxmTkQI.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
