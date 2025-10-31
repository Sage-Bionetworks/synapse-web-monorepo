import{jB as T}from"./iframe-Ci1lmE8g.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CbQavxyg.js";import"./index-r8ZA1smB.js";import"./useEntity-vafuLvak.js";import"./pickBy-DBr0S374.js";import"./isString-D4RD_z4s.js";import"./_baseIteratee-BQlpWk-E.js";import"./useQueries-DsbpWbBj.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DWL-Og4B.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DbW89d5B.js";import"./useSchema-D-Qbz9Jb.js";import"./index-Cy9X1tra.js";import"./enums-DHUNt8f7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_dLu_fx.js";import"./uniq-DZseOKB0.js";import"./forEach-B8iwwgef.js";import"./Grid-C8ZSRzfO.js";import"./ListItem-CTeWo3cQ.js";import"./listItemButtonClasses-CkwAkACD.js";import"./ListItemIcon-BZCG7_P3.js";import"./MenuItem-DNhPNPdH.js";import"./ListItemText-B9vILOEk.js";import"./ArrowUpward-DhpXUuv9.js";import"./ContentCopy-DWqbG0qY.js";import"./FormControlLabel-CP9zrs5G.js";import"./Checkbox-CfXy5gYt.js";import"./SwitchBase-Dywev717.js";import"./FormGroup-BsM0vA4B.js";import"./RadioGroup-BSAFIhhK.js";import"./Radio-Dr9D4Szr.js";import"./Slider-uOaYJiAy.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-C00Ejex4.js";import"./DialogBase-BYGdPH-i.js";import"./Close-CELbEfBf.js";import"./HelpPopover-Dp5xAO-J.js";import"./MarkdownPopover-C8x7eb7i.js";import"./LightTooltip-D8-ypvp8.js";import"./MarkdownSynapse-3G1qoarh.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonTable-DkbE7er9.js";import"./SkeletonParagraph-ITJPOI8x.js";import"./JsonSchemaForm-eW00ofVJ.js";import"./GridLegacy-DUg-By5k.js";import"./HelpTwoTone-D4XikXWV.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CGpBq9nU.js";import"./_createAggregator-BD97Dewg.js";import"./_baseMap-DOU_FLyJ.js";import"./DateTimePicker-B_yQoAdF.js";import"./useMobilePicker-D_2a6BAV.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CfqlEkVW.js";import"./index-BdMb-1ps.js";import"./Chip-7ZjY8iwO.js";import"./Tabs-CK6w5ovm.js";import"./KeyboardArrowRight-CyBo1b-k.js";import"./Autocomplete-BgFeKQE2.js";import"./usePreviousProps-CmCVe5f3.js";import"./use-deep-compare-effect.esm-CoZjJuVi.js";import"./TextWidget-DqUrQSB2.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
