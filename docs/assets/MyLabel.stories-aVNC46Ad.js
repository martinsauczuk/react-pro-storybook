import{j as x}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const o=({label:s,size:g="normal",color:v="primary",allCaps:z=!1,fontColor:_="#aaaaaa"})=>x.jsx("span",{className:`${g} text-${v}`,style:{textTransform:`${z==!0?"uppercase":"none"}`,color:_},children:s});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:{value:"#aaaaaa"},description:"",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const L={title:"UI/MyLabel",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"inline-radio"}}},e={args:{label:"Basic label",size:"normal",color:"primary"}},a={args:{label:"AllCaps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",size:"h1",color:"secondary"}},l={args:{label:"CustomColor label",size:"normal",fontColor:"#27d98e"}};var n,t,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic label',
    size: 'normal',
    color: 'primary'
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps label',
    size: 'normal',
    allCaps: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    size: 'h1',
    color: 'secondary'
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,C,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor label',
    size: 'normal',
    fontColor: '#27d98e'
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const V=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,V as __namedExportsOrder,L as default};
