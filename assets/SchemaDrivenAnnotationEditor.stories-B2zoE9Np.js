import{jJ as T}from"./iframe-DOnL1WnT.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DLQJAgpw.js";import"./index-r8ZA1smB.js";import"./useEntity-DFUeyftv.js";import"./pickBy-JkvQMS-p.js";import"./isString-DRItR6Nw.js";import"./_baseIteratee-BuXwAMpp.js";import"./useQueries-Dpcoofnd.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DBtR-i50.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-u7iqnHCV.js";import"./useSchema-BZNiOdF4.js";import"./index-C27pn0HF.js";import"./enums-C5CnfqdH.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DlkX0Ljy.js";import"./uniq-f0PXychf.js";import"./forEach-B8iwwgef.js";import"./Grid-OsvXf4Gv.js";import"./ListItem-JILh_ASi.js";import"./listItemButtonClasses-95cHtwzX.js";import"./ListItemIcon-qxR3vn2N.js";import"./MenuItem-hhLXKwPr.js";import"./ListItemText-CFen04Iy.js";import"./ArrowUpward-aZlsBoxU.js";import"./ContentCopy-8MrSrIPm.js";import"./FormControlLabel-BONTN4Fq.js";import"./Checkbox-2y8gbEUD.js";import"./SwitchBase-BK6ATdaZ.js";import"./FormGroup-BhwkjhUK.js";import"./RadioGroup-BMwR7Qqy.js";import"./Radio-DqYWrmTT.js";import"./Slider-QOFhTxQA.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DBlD3c8E.js";import"./DialogBase-CKf_63Ui.js";import"./Close-MJ_nsuDC.js";import"./HelpPopover-D86Vst7Z.js";import"./MarkdownPopover-CauQ5K7i.js";import"./LightTooltip-bfiAMs0U.js";import"./MarkdownSynapse-BF6cile7.js";import"./SkeletonButton-B9cG9K33.js";import"./SkeletonInlineBlock-BUPDznw3.js";import"./SkeletonTable-PXKcpraC.js";import"./SkeletonParagraph-BmRLG4OY.js";import"./JsonSchemaForm-DzPHzwhN.js";import"./GridLegacy-DxcU_KGs.js";import"./HelpTwoTone-ghlzruZj.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-cyF0-Maf.js";import"./_createAggregator-CWo4lX6u.js";import"./_baseMap-D9xJeZVA.js";import"./DateTimePicker-D-Btf8hM.js";import"./useMobilePicker-CHNFDQiY.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-B7i6LfX-.js";import"./index-BSAtyD83.js";import"./Chip-C754RM17.js";import"./Tabs-CQuL8dic.js";import"./KeyboardArrowRight-NZSnjH7Z.js";import"./Autocomplete-CNPwHldL.js";import"./usePreviousProps-CAQSiXsQ.js";import"./use-deep-compare-effect.esm-BKm0Hfaf.js";import"./TextWidget-DH9V-xrP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
