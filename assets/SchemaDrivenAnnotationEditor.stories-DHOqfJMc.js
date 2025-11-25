import{jK as T}from"./iframe-BwBHmtLn.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Dd5Wk-34.js";import"./index-r8ZA1smB.js";import"./useEntity-VdSX6HFa.js";import"./pickBy-SGpUKNIm.js";import"./isString-Ru5-ZTb-.js";import"./_baseIteratee-DYrIx3nY.js";import"./useQueries-D_h17kYr.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CJ62jRAa.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C9ptpfuq.js";import"./useSchema-DFkNw1WF.js";import"./index-xzZEVFc_.js";import"./enums-DXQ7RhWZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BeAKbU8I.js";import"./uniq-VDdpS32t.js";import"./forEach-B8iwwgef.js";import"./Grid-DVF-F4ru.js";import"./ListItem-K23_5bnf.js";import"./listItemButtonClasses-qkDTYFPm.js";import"./ListItemIcon-Bh_hxp4A.js";import"./MenuItem-CkdRDM7m.js";import"./ListItemText-Ls82WF9B.js";import"./ArrowUpward-BVa6s-7k.js";import"./ContentCopy-CzG64GZy.js";import"./FormControlLabel-Bd9SHTvK.js";import"./Checkbox-CrrPL_ha.js";import"./SwitchBase-DfrfkHUB.js";import"./FormGroup-Cc2TMiO2.js";import"./RadioGroup-D7fI1WM6.js";import"./Radio-C_tCGuqd.js";import"./Slider-CLlFvqTI.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-LuKTcSOQ.js";import"./DialogBase-CGGylDq4.js";import"./Close-BfixGz6h.js";import"./HelpPopover-CaVwFHNp.js";import"./MarkdownPopover-BoTNWuCk.js";import"./LightTooltip-B1vNEQPg.js";import"./MarkdownSynapse-C2XjXP5O.js";import"./SkeletonButton-BTCaeByw.js";import"./SkeletonInlineBlock-ZHAchM_I.js";import"./SkeletonTable-CwWx9Hg9.js";import"./SkeletonParagraph-CvcuNn1V.js";import"./JsonSchemaForm-BsEk_hgn.js";import"./GridLegacy-DBp44r90.js";import"./HelpTwoTone-qZHkmI1Z.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cz7MFjdZ.js";import"./_createAggregator-D1MfdguL.js";import"./_baseMap-7X1852e3.js";import"./DateTimePicker-BReFKTRO.js";import"./useMobilePicker-DCZyx8nK.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CRwuWGqd.js";import"./index-Cofbk_Be.js";import"./Chip-DeqIQwfV.js";import"./Tabs-BeoGRdvJ.js";import"./KeyboardArrowRight-C-63BGv5.js";import"./Autocomplete-rR4kr0CR.js";import"./usePreviousProps-BT7V12Qo.js";import"./use-deep-compare-effect.esm-B5pmyylT.js";import"./TextWidget-CxtmzJQo.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
