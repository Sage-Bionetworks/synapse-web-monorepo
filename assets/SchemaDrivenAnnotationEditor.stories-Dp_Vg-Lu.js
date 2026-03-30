import{jx as p}from"./iframe-DIHgldxa.js";import{S as a}from"./SchemaDrivenAnnotationEditor-M1uSFoQ2.js";import"./index-Chi_LkuB.js";import"./useEntity-C5K14HDn.js";import"./pickBy-YfaqetyA.js";import"./isString-Ol6H3siH.js";import"./_baseIteratee-Co0Mhj_4.js";import"./useInfiniteQuery-C7SfxOXc.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DN9g0Aiw.js";import"./useSchema-C2sm2zro.js";import"./index-jd66Hn8T.js";import"./enums-DaoRynqS.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BM-VXKp0.js";import"./uniq-BY1boyVs.js";import"./forEach-CWOCpBhE.js";import"./Add-CU6x7TZY.js";import"./Grid-BJrpEgUY.js";import"./ListItem-W-fnM1Bm.js";import"./listItemButtonClasses-Yu4fYD5n.js";import"./ListItemIcon-CAaCEPc9.js";import"./MenuItem-CAWhO3PR.js";import"./ListItemText-BYjxlygu.js";import"./ArrowUpward-BriKkDUn.js";import"./ContentCopy-CTUPgN0N.js";import"./FormControlLabel-BU8VsySU.js";import"./Checkbox-B53VCuVQ.js";import"./SwitchBase-DMcEJh9k.js";import"./FormGroup-DGuDXGb-.js";import"./RadioGroup-9Mo_BuPT.js";import"./Radio-B4NrnNRa.js";import"./Slider-BkleLmUF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B1pUQtYb.js";import"./DialogBase-BoGr-CRZ.js";import"./Close-B9FxdBmj.js";import"./HelpPopover-CojtIfyp.js";import"./MarkdownPopover-Brc4t5Ga.js";import"./LightTooltip-BLPTEgz7.js";import"./MarkdownSynapse-VQjxuG79.js";import"./SkeletonButton-CflRIFGp.js";import"./SkeletonInlineBlock-eDwQJ6BQ.js";import"./SkeletonTable-kyH1U49B.js";import"./SkeletonParagraph-Bj2Sqp59.js";import"./JsonSchemaForm-DjeVFsKq.js";import"./GridLegacy-BB5G6PtN.js";import"./HelpTwoTone-NhdB6_le.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cy2FTdOV.js";import"./_createAggregator-Y-Oqz1LK.js";import"./_baseMap-DOg7hwfO.js";import"./DateTimePicker-DSkAKAGD.js";import"./useMobilePicker-KcDZndVf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DI3hHKxw.js";import"./index-DnH41gKI.js";import"./Chip-RTYTkfR-.js";import"./Tabs-DxhbpIef.js";import"./KeyboardArrowRight-DrHaN3DT.js";import"./Autocomplete-VkSTe4Ag.js";import"./usePreviousProps-iY9qJYwG.js";import"./use-deep-compare-effect.esm-DS48TQUp.js";import"./TextWidget-DfrSPpTr.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
