import{jy as p}from"./iframe-9Dp3veeu.js";import{S as a}from"./SchemaDrivenAnnotationEditor-PM82XcGi.js";import"./index-Chi_LkuB.js";import"./useEntity-D50J89pv.js";import"./pickBy-CpMnZzU7.js";import"./isString-BcDOty8O.js";import"./_baseIteratee-BdYCFxHU.js";import"./useInfiniteQuery-Db6GiRYb.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BzblwMUL.js";import"./useSchema-BkqzFNZj.js";import"./index-DnWf3wDq.js";import"./enums-KK4WHYJG.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CZKI3vcT.js";import"./uniq-VUUwasH2.js";import"./forEach-CWOCpBhE.js";import"./Add-NvW7mw1v.js";import"./Grid-VfSnU_P-.js";import"./ListItem-BZFztavt.js";import"./listItemButtonClasses-DxeChUKh.js";import"./ListItemIcon-DkBssbRY.js";import"./MenuItem-BJVfKgip.js";import"./ListItemText-BI69gNvQ.js";import"./ArrowUpward-BDiiybNV.js";import"./ContentCopy-DgCqBIJc.js";import"./FormControlLabel-98dMFZJR.js";import"./Checkbox-C2Z84l4l.js";import"./SwitchBase-Cy2X8wXP.js";import"./FormGroup-B_IQchHw.js";import"./RadioGroup-BcG21RaG.js";import"./Radio-BWAawDBb.js";import"./Slider-MSCj6dhH.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-0O1Dp5pK.js";import"./DialogBase-wgKSPL2s.js";import"./Close-RKCQt29o.js";import"./HelpPopover-CV1i3nJO.js";import"./MarkdownPopover-DoQCnLPw.js";import"./LightTooltip-TjP4VxGs.js";import"./MarkdownSynapse-D2Pk-B6S.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./SkeletonParagraph-Cn0395FS.js";import"./JsonSchemaForm-Uk6LvMCe.js";import"./GridLegacy-WR7HZGDy.js";import"./HelpTwoTone-ZpSWrSRV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DnimklLW.js";import"./_createAggregator-COp81B3V.js";import"./_baseMap-BE81D0D0.js";import"./DateTimePicker-B_sywq7Z.js";import"./useMobilePicker-JjyIbzsn.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-mswjGCl0.js";import"./index-SBatv29g.js";import"./Chip-gPffx778.js";import"./Tabs-BFE48Hzr.js";import"./KeyboardArrowRight-DJ2y5xT2.js";import"./Autocomplete-BX3KJxwY.js";import"./usePreviousProps-BSOQdJeP.js";import"./use-deep-compare-effect.esm-ARdEFuBi.js";import"./TextWidget-4DMoZVTC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
