import{jJ as T}from"./iframe-eAL3LCN3.js";import{S as C}from"./SchemaDrivenAnnotationEditor-4Q_p5AUd.js";import"./index-r8ZA1smB.js";import"./useEntity-BOjdGhFs.js";import"./pickBy-kMsgLJaN.js";import"./isString-DzsNsaKp.js";import"./_baseIteratee-YB6gKiVY.js";import"./useQueries-D_stMPeC.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BIjxq0oU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-y8BKwpar.js";import"./useSchema-IrEBIwAC.js";import"./index-BMstfcGc.js";import"./enums-CviBKuSj.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-YQyv94F6.js";import"./uniq-CaqcideB.js";import"./forEach-B8iwwgef.js";import"./Grid-DjAh0WD2.js";import"./ListItem-0Wknt0-_.js";import"./listItemButtonClasses-BbPpudDY.js";import"./ListItemIcon-CNXOKLkW.js";import"./MenuItem-BJhOgCUi.js";import"./ListItemText-CGnaLQEL.js";import"./ArrowUpward-jm12jgb0.js";import"./ContentCopy-Y72eCMcx.js";import"./FormControlLabel-CMRXKWRo.js";import"./Checkbox-B4sC4_8_.js";import"./SwitchBase-C39Yd_tq.js";import"./FormGroup-CQzLuXlP.js";import"./RadioGroup-BuGo_EUf.js";import"./Radio-BZhrVxO-.js";import"./Slider-D80sk5RF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BmYHNfkM.js";import"./DialogBase-VybCyXNM.js";import"./Close-B1d24Q-1.js";import"./HelpPopover-oNhZ2sNv.js";import"./MarkdownPopover-C79aMDza.js";import"./LightTooltip-B-34NBpO.js";import"./MarkdownSynapse-CpKA-VNQ.js";import"./SkeletonButton-aT1VkMB9.js";import"./SkeletonInlineBlock-04pSbxC0.js";import"./SkeletonTable-BgcTNkHb.js";import"./SkeletonParagraph-DUeQUQ73.js";import"./JsonSchemaForm-9yi-Hk-J.js";import"./GridLegacy-wr3MdAJt.js";import"./HelpTwoTone-GZi9Vara.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DcviVXwW.js";import"./_createAggregator-BeTUuFJK.js";import"./_baseMap-BQ8tF--O.js";import"./DateTimePicker-Ct9SE9_6.js";import"./useMobilePicker-Ds7fm33O.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BcnpsIzg.js";import"./index-Dfyq_HAj.js";import"./Chip-BhAQmrv0.js";import"./Tabs-B2xoOZaD.js";import"./KeyboardArrowRight-rhpU0df4.js";import"./Autocomplete-Bkm6TWjj.js";import"./usePreviousProps-C8PHFUeo.js";import"./use-deep-compare-effect.esm-bDex8thB.js";import"./TextWidget-B1VA4_Cq.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
