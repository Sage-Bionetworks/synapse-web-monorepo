import{ju as p}from"./iframe-BjBBiDsW.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CQ4rMlqx.js";import"./index-Chi_LkuB.js";import"./useEntity-CofmP_Ww.js";import"./pickBy-BzGO56ob.js";import"./isString-Cr72riR3.js";import"./_baseIteratee-C9y3TvvF.js";import"./useInfiniteQuery-Bv0FdpMA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CUXukPKv.js";import"./useSchema-D6yiCT66.js";import"./index-CpWFBBDJ.js";import"./enums-DParUuBL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BmEqmHzA.js";import"./uniq-Cf0oueQT.js";import"./forEach-CWOCpBhE.js";import"./Add-BZdlDFwf.js";import"./Grid-BDro-XsP.js";import"./ListItem-zjaN5wyq.js";import"./listItemButtonClasses-CgQWHpQN.js";import"./ListItemIcon-fhjcn0L9.js";import"./MenuItem-BSCaFnRG.js";import"./ListItemText-xUISyJ4q.js";import"./ArrowUpward-DtQUXDrT.js";import"./ContentCopy-DD8eVNkE.js";import"./FormControlLabel-CzFzYJgz.js";import"./Checkbox-BCnKoQnO.js";import"./SwitchBase-hUejxJGt.js";import"./FormGroup-ayQk_S-J.js";import"./RadioGroup-DwAYFpdq.js";import"./Radio-BVUIeMr1.js";import"./Slider-Dbr--JYS.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D0UfN1Xa.js";import"./DialogBase-czf-e16q.js";import"./Close-L1FnxEBh.js";import"./HelpPopover-BtucvZ0a.js";import"./MarkdownPopover-DE2XYuuV.js";import"./LightTooltip-DhGFGjue.js";import"./MarkdownSynapse-BDqMYaol.js";import"./SkeletonButton-Bl0qAliy.js";import"./SkeletonInlineBlock-Cx_wfJlM.js";import"./SkeletonTable-DFpSOBHH.js";import"./SkeletonParagraph-CeuyOR5i.js";import"./JsonSchemaForm-pPC5pVgQ.js";import"./GridLegacy-GY6L6yLH.js";import"./HelpTwoTone-DKl0Z1ST.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CQ7VVjUy.js";import"./_createAggregator-Cfbw10QH.js";import"./_baseMap-BgKfZnKQ.js";import"./DateTimePicker-DNYh58r4.js";import"./useMobilePicker-Cs8r8enX.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B4-nXnK2.js";import"./index-ILKMxz0s.js";import"./Chip-DPNGaouF.js";import"./Tabs-BxCVJNcH.js";import"./KeyboardArrowRight-D-2aNwg9.js";import"./Autocomplete-J1hRFHz_.js";import"./usePreviousProps-FnLDYwst.js";import"./use-deep-compare-effect.esm-LRI6-38D.js";import"./TextWidget-QldYXglZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
