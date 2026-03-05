import{ju as p}from"./iframe-Bppf-2Xb.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C9YGPgcJ.js";import"./index-Chi_LkuB.js";import"./useEntity-CPxUyPJP.js";import"./pickBy-B-6VfkUC.js";import"./isString-VAhxbzMi.js";import"./_baseIteratee-1VZeL6zj.js";import"./useInfiniteQuery-B_o5exK7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cgh82wex.js";import"./useSchema-CEGRROgj.js";import"./index-C1S7RXtV.js";import"./enums-BzXSnWoc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-1yxKPV3_.js";import"./uniq-B_jSDjY0.js";import"./forEach-CWOCpBhE.js";import"./Add-BRXqot_x.js";import"./Grid-C5JIyy_C.js";import"./ListItem-Bk_1syXI.js";import"./listItemButtonClasses-DCoAU_xh.js";import"./ListItemIcon-BYINN8kR.js";import"./MenuItem-BorCkjPg.js";import"./ListItemText-DWIfHyzH.js";import"./ArrowUpward-D_3qs7FE.js";import"./ContentCopy-BQ6LNC6I.js";import"./FormControlLabel-C6SYwhBq.js";import"./Checkbox-KFSiL-LF.js";import"./SwitchBase-Cos52nG1.js";import"./FormGroup-CvBdfYO5.js";import"./RadioGroup-BD75nQgO.js";import"./Radio-1ii9XX1D.js";import"./Slider-D5wSPeRF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Gd10OZKA.js";import"./DialogBase-DiQjK8QP.js";import"./Close-C0gBeEqv.js";import"./HelpPopover-CFG8wYnx.js";import"./MarkdownPopover-DEUp7YgC.js";import"./LightTooltip-CGlFhZF-.js";import"./MarkdownSynapse-CXgwuaB5.js";import"./SkeletonButton-BFle63Mn.js";import"./SkeletonInlineBlock-DZgUMGJu.js";import"./SkeletonTable-BMvof9lJ.js";import"./SkeletonParagraph-Cgi3RpEx.js";import"./JsonSchemaForm-DE6XNHfL.js";import"./GridLegacy-Be0uHKUP.js";import"./HelpTwoTone-Bz6TaFnT.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BfKgKALF.js";import"./_createAggregator-BHfkgqJr.js";import"./_baseMap-Cd31eUCi.js";import"./DateTimePicker-B3U_pi2k.js";import"./useMobilePicker-Cpm_hdzs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BINY0DBJ.js";import"./index-Cee3WZrY.js";import"./Chip-B-8xLvKL.js";import"./Tabs-CQCPA53V.js";import"./KeyboardArrowRight-DLWzZ8Dz.js";import"./Autocomplete-CgNaC8dX.js";import"./usePreviousProps-CcejWT8-.js";import"./use-deep-compare-effect.esm-BA26f4Nj.js";import"./TextWidget-BZmZTrZV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
