(window.webpackJsonpweatherinfo=window.webpackJsonpweatherinfo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(6),l=a.n(n),i=(a(13),a(14),a(1)),s={city:"BOSTON",tempLabel:"metric",todayWeather:{},weeklyWeather:[],prevCities:["BOSTON"],lastCitySel:"BOSTON"},m=JSON.parse(localStorage.getItem("cityInfo")),d=Object(c.createContext)(),o=function(e){var t=Object(c.useState)(m||s),a=Object(i.a)(t,2),n=a[0],l=a[1];return Object(c.useEffect)(function(){localStorage.setItem("cityInfo",JSON.stringify(n))},[n]),r.a.createElement(d.Provider,{value:[n,l]},e.children)},u=a(17),p=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 30.8 42.5",xmlSpace:"preserve",height:"70%",width:"70%"},r.a.createElement("path",{id:"Moon",className:"yellow",d:"M15.3,21.4C15,12.1,21.1,4.2,29.7,1.7c-2.8-1.2-5.8-1.8-9.1-1.7C8.9,0.4-0.3,10.1,0,21.9 c0.3,11.7,10.1,20.9,21.9,20.6c3.2-0.1,6.3-0.9,8.9-2.3C22.2,38.3,15.6,30.7,15.3,21.4z"}))))},y=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 55.1 60",xmlSpace:"preserve"},r.a.createElement("g",{id:"Cloud_2"},r.a.createElement("g",{id:"Rain_2"},r.a.createElement("path",{id:"rain_2_left",className:"white",d:"M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S20.7,44.7,20.7,46.4z"}),r.a.createElement("path",{id:"rain_2_mid",className:"white",d:"M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S31.4,44.7,31.4,46.4z"}),r.a.createElement("path",{id:"rain_2_right",className:"white",d:"M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S41.3,44.7,41.3,46.4z"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"1s",keyTimes:"0;1",repeatCount:"indefinite",type:"translate",values:"0 0;0 10",calcMode:"linear"}),r.a.createElement("animate",{attributeName:"opacity",attributeType:"XML",dur:"1s",keyTimes:"0;1",repeatCount:"indefinite",values:"1;0",calcMode:"linear"})),r.a.createElement("g",{id:"White_cloud_2"},r.a.createElement("path",{id:"XMLID_14_",className:"white",d:"M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"}),r.a.createElement("circle",{id:"XMLID_13_",className:"white",cx:"17.4",cy:"17.3",r:"9.3"}),r.a.createElement("circle",{id:"XMLID_10_",className:"white",cx:"34.5",cy:"15.6",r:"15.6"}))))))},E=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 55.1 52.5",xmlSpace:"preserve"},r.a.createElement("g",{id:"Cloud_7"},r.a.createElement("g",{id:"White_cloud_7"},r.a.createElement("path",{id:"XMLID_8_",className:"white",d:"M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"}),r.a.createElement("circle",{id:"XMLID_5_",className:"white",cx:"17.4",cy:"17.3",r:"9.3"}),r.a.createElement("circle",{id:"XMLID_1_",className:"white",cx:"34.5",cy:"15.6",r:"15.6"})),r.a.createElement("circle",{className:"white",cx:"37",cy:"43.5",r:"3"},r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"1.5s",keyTimes:"0;0.33;0.66;1",repeatCount:"indefinite",type:"translate",values:"1 -2;3 2; 1 4; 2 6",calcMode:"linear"})),r.a.createElement("circle",{className:"white",cx:"27",cy:"43.5",r:"3"},r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"1.5s",keyTimes:"0;0.33;0.66;1",repeatCount:"indefinite",type:"translate",values:"1 -2;3 2; 1 4; 2 6",calcMode:"linear"})),r.a.createElement("circle",{className:"white",cx:"17",cy:"43.5",r:"3"},r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"1.5s",keyTimes:"0;0.33;0.66;1",repeatCount:"indefinite",type:"translate",values:"1 -2;3 2; 1 4; 2 6",calcMode:"linear"}))))))},h=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 44.9 44.9",xmlSpace:"preserve",height:"100%",width:"100%"},r.a.createElement("g",{id:"Sun"},r.a.createElement("circle",{id:"XMLID_61_",className:"yellow",cx:"22.4",cy:"22.6",r:"11"}),r.a.createElement("g",null,r.a.createElement("path",{id:"XMLID_60_",className:"yellow",d:"M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6 v7C23.2,7.8,22.9,8.1,22.6,8.1z"}),r.a.createElement("path",{id:"XMLID_59_",className:"yellow",d:"M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7 C23.2,37,22.9,36.8,22.6,36.8z"}),r.a.createElement("path",{id:"XMLID_58_",className:"yellow",d:"M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7 C7.8,21.7,8.1,21.9,8.1,22.3z"}),r.a.createElement("path",{id:"XMLID_57_",className:"yellow",d:"M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7 C37,21.7,36.8,21.9,36.8,22.3z"}),r.a.createElement("path",{id:"XMLID_56_",className:"yellow",d:"M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3 c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z"}),r.a.createElement("path",{id:"XMLID_55_",className:"yellow",d:"M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3 c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z"}),r.a.createElement("path",{id:"XMLID_54_",className:"yellow",d:"M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9 C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z"}),r.a.createElement("path",{id:"XMLID_53_",className:"yellow",d:"M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3 c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z"}),r.a.createElement("animate",{attributeName:"opacity",attributeType:"XML",dur:"0.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1;0.6;1",calcMode:"linear"}))))))},v=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.7 48.7",xmlSpace:"preserve"},r.a.createElement("g",{id:"Cloud_4"},r.a.createElement("g",{id:"White_cloud_4"},r.a.createElement("path",{id:"XMLID_69_",className:"white",d:"M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"}),r.a.createElement("circle",{id:"XMLID_68_",className:"white",cx:"17.4",cy:"22.8",r:"9.3"}),r.a.createElement("circle",{id:"XMLID_67_",className:"white",cx:"34.5",cy:"21.1",r:"15.6"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;5;0",calcMode:"linear"})),r.a.createElement("g",{id:"Gray_cloud_4"},r.a.createElement("path",{id:"XMLID_65_",className:"gray",d:"M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"}),r.a.createElement("circle",{id:"XMLID_64_",className:"gray",cx:"45.7",cy:"10.7",r:"10.7"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;-3;0",calcMode:"linear"})),r.a.createElement("g",{id:"Lightning_4"},r.a.createElement("path",{id:"XMLID_79_",className:"yellow",d:"M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5 c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3 c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0 l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"}),r.a.createElement("animate",{attributeType:"XML",attributeName:"opacity",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1;0;1",calcMode:"linear"}))))))},w=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.7 40",xmlSpace:"preserve"},r.a.createElement("g",{id:"Cloud_1"},r.a.createElement("g",{id:"White_cloud_1"},r.a.createElement("path",{id:"XMLID_2_",className:"white",d:"M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"}),r.a.createElement("circle",{id:"XMLID_3_",className:"white",cx:"17.4",cy:"22.8",r:"9.3"}),r.a.createElement("circle",{id:"XMLID_4_",className:"white",cx:"34.5",cy:"21.1",r:"15.6"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;5;0",calcMode:"linear"})),r.a.createElement("g",{id:"Gray_cloud_1"},r.a.createElement("path",{id:"XMLID_6_",className:"gray",d:"M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"}),r.a.createElement("circle",{id:"XMLID_7_",className:"gray",cx:"45.7",cy:"10.7",r:"10.7"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;-3;0",calcMode:"linear"}))))))},_=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 61.7 42.8",xmlSpace:"preserve"},r.a.createElement("g",{id:"Cloud_3"},r.a.createElement("g",{id:"White_cloud_3"},r.a.createElement("path",{id:"XMLID_24_",className:"white",d:"M47.2,42.8H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0C0,30.5,3.5,27,7.9,27h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,39.2,51.6,42.8,47.2,42.8z"}),r.a.createElement("circle",{id:"XMLID_23_",className:"white",cx:"17.4",cy:"25.5",r:"9.3"}),r.a.createElement("circle",{id:"XMLID_22_",className:"white",cx:"34.5",cy:"23.9",r:"15.6"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;5;0",calcMode:"linear"})),r.a.createElement("g",{id:"Sun_3"},r.a.createElement("circle",{id:"XMLID_30_",className:"yellow",cx:"31.4",cy:"18.5",r:"9"}),r.a.createElement("g",null,r.a.createElement("path",{id:"XMLID_31_",className:"yellow",d:"M31.4,6.6L31.4,6.6c-0.4,0-0.6-0.3-0.6-0.6V0.6C30.8,0.3,31,0,31.3,0l0.1,0 C31.7,0,32,0.3,32,0.6v5.5C32,6.4,31.7,6.6,31.4,6.6z"}),r.a.createElement("path",{id:"XMLID_34_",className:"yellow",d:"M31.4,30.1L31.4,30.1c-0.4,0-0.6,0.3-0.6,0.6v5.5c0,0.3,0.3,0.6,0.6,0.6h0.1 c0.3,0,0.6-0.3,0.6-0.6v-5.5C32,30.4,31.7,30.1,31.4,30.1z"}),r.a.createElement("path",{id:"XMLID_35_",className:"yellow",d:"M19.6,18.3L19.6,18.3c0,0.4-0.3,0.6-0.6,0.6h-5.5c-0.3,0-0.6-0.3-0.6-0.6v-0.1 c0-0.3,0.3-0.6,0.6-0.6H19C19.3,17.8,19.6,18,19.6,18.3z"}),r.a.createElement("path",{id:"XMLID_33_",className:"yellow",d:"M43.1,18.3L43.1,18.3c0,0.4,0.3,0.6,0.6,0.6h5.5c0.3,0,0.6-0.3,0.6-0.6v-0.1 c0-0.3-0.3-0.6-0.6-0.6h-5.5C43.4,17.8,43.1,18,43.1,18.3z"}),r.a.createElement("path",{id:"XMLID_37_",className:"yellow",d:"M22.4,26L22.4,26c0.3,0.3,0.2,0.7,0,0.9l-4.2,3.6c-0.2,0.2-0.6,0.2-0.8-0.1l-0.1-0.1 c-0.2-0.2-0.2-0.6,0.1-0.8l4.2-3.6C21.9,25.8,22.2,25.8,22.4,26z"}),r.a.createElement("path",{id:"XMLID_36_",className:"yellow",d:"M40.3,10.7L40.3,10.7c0.3,0.3,0.6,0.3,0.8,0.1l4.2-3.6c0.2-0.2,0.3-0.6,0.1-0.8l-0.1-0.1 c-0.2-0.2-0.6-0.3-0.8-0.1l-4.2,3.6C40.1,10.1,40,10.5,40.3,10.7z"}),r.a.createElement("path",{id:"XMLID_39_",className:"yellow",d:"M22.4,10.8L22.4,10.8c0.3-0.3,0.2-0.7,0-0.9l-4.2-3.6c-0.2-0.2-0.6-0.2-0.8,0.1l-0.1,0.1 c-0.2,0.2-0.2,0.6,0.1,0.8l4.2,3.6C21.9,11,22.2,11,22.4,10.8z"}),r.a.createElement("path",{id:"XMLID_38_",className:"yellow",d:"M40.3,26.1L40.3,26.1c0.3-0.3,0.6-0.3,0.8-0.1l4.2,3.6c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1 c-0.2,0.2-0.6,0.3-0.8,0.1l-4.2-3.6C40.1,26.7,40,26.3,40.3,26.1z"}),r.a.createElement("animate",{attributeName:"opacity",attributeType:"XML",dur:"0.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1;0.6;1",calcMode:"linear"}))),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",type:"scale",values:"1;1",calcMode:"linear"})),r.a.createElement("g",{id:"Gray_cloud_3"},r.a.createElement("path",{id:"XMLID_20_",className:"gray",d:"M55.7,25.1H34.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C61.7,22.4,59,25.1,55.7,25.1z"}),r.a.createElement("circle",{id:"XMLID_19_",className:"gray",cx:"46.7",cy:"13.4",r:"10.7"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;-3;0",calcMode:"linear"})))))},f=function(){return r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"element"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.7 44.4",xmlSpace:"preserve"},r.a.createElement("g",{id:"Cloud_5"},r.a.createElement("g",{id:"White_cloud_5"},r.a.createElement("path",{id:"XMLID_49_",className:"white",d:"M47.2,44.4H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,40.9,51.6,44.4,47.2,44.4z"}),r.a.createElement("circle",{id:"XMLID_48_",className:"white",cx:"17.4",cy:"27.2",r:"9.3"}),r.a.createElement("circle",{id:"XMLID_47_",className:"white",cx:"34.5",cy:"25.5",r:"15.6"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;5;0",calcMode:"linear"})),r.a.createElement("path",{id:"Moon_5",className:"yellow",d:"M33.6,17.9c-0.2-7.7,4.9-14.4,12-16.4c-2.3-1-4.9-1.5-7.6-1.5c-9.8,0.3-17.5,8.5-17.2,18.3 c0.3,9.8,8.5,17.5,18.3,17.2c2.7-0.1,5.2-0.8,7.5-1.9C39.3,32,33.8,25.6,33.6,17.9z"}),r.a.createElement("g",{id:"Gray_cloud_5"},r.a.createElement("path",{id:"XMLID_45_",className:"gray",d:"M54.7,26.8H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,24.1,58,26.8,54.7,26.8z"}),r.a.createElement("circle",{id:"XMLID_43_",className:"gray",cx:"45.7",cy:"15.1",r:"10.7"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"6s",keyTimes:"0;0.5;1",repeatCount:"indefinite",type:"translate",values:"0;-3;0",calcMode:"linear"}))))))},N=function(e){return["03d","03n","04d","04n","50d","50n"].includes(e)?r.a.createElement(w,null):"02d"===e?r.a.createElement(_,null):"02n"===e?r.a.createElement(f,null):"01n"===e?r.a.createElement(p,null):["09d","09n","10d","10n"].includes(e)?r.a.createElement(y,null):["13d","13n"].includes(e)?r.a.createElement(E,null):"01d"===e?r.a.createElement(h,null):["11d","11n"].includes(e)?r.a.createElement(v,null):void 0},M=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,1)[0];return r.a.createElement("div",{className:"curWeather-container"},r.a.createElement("div",{className:"curTemp"},r.a.createElement(function(){var e=t.todayWeather.city+", "+t.todayWeather.country,a=t.todayWeather.temp,c="imperial"===t.tempLabel?"\xb0F":"\xb0C";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"daysTemp"},a,r.a.createElement("span",{className:"tempSymbol"},c)),r.a.createElement("div",{className:"curCity"},e))},null)),r.a.createElement(function(){var e=Object(u.a)(t.todayWeather.sunrise).toTimeString().slice(0,5),a=Object(u.a)(t.todayWeather.sunset).toTimeString().slice(0,5),c=t.todayWeather.humidity+"%",n=t.todayWeather.airPressure+" hPa",l=t.todayWeather.windSpeed+("imperial"===t.tempLabel?" mph":" m/s");return r.a.createElement("div",{className:"extraInfo"},r.a.createElement("div",{className:"humidity"},r.a.createElement("span",null,"Humidity:")," ",r.a.createElement("span",null,c)),r.a.createElement("div",{className:"airPressure"},r.a.createElement("span",null,"Air Pressure: "),r.a.createElement("span",null,n)),r.a.createElement("div",{className:"windSpeed"},r.a.createElement("span",null,"Wind Speed:")," ",r.a.createElement("span",null,l)),r.a.createElement("div",{className:"sunrise"},r.a.createElement("span",null,"Sunrise:")," ",r.a.createElement("span",null,e)),r.a.createElement("div",{className:"sunset"},r.a.createElement("span",null,"Sunset:")," ",r.a.createElement("span",null,a)))},null),r.a.createElement("div",{className:"weatherInfo"},function(){var e=t.todayWeather.animation;return N(e)}(),r.a.createElement(function(){var e=t.todayWeather.weatherDesc;return r.a.createElement("div",null,r.a.createElement("div",{className:"description"},e))},null)))},x=a(4),L=a(2),C=a.n(L),b=a(3),g=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,2),a=t[0],r=t[1],n="weather",l="forecast",s=function(e){return"https://api.openweathermap.org/data/2.5/"+e+"?q="+a.city+"&units="+a.tempLabel+"&APPID=e07d8ddac54eade82bcdb237b5cf6279"};function m(){return(m=Object(b.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s(n));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,p(a);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function o(){return(o=Object(b.a)(C.a.mark(function e(){var t,a,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s(l),{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.list.filter(function(e){return"12:00"===e.dt_txt.slice(11,16)}),y(c);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var p=function(e){var t={};t.temp=Math.floor(e.main.temp),t.humidity=e.main.humidity,t.airPressure=e.main.pressure,t.windSpeed=e.wind.speed,t.weatherDesc=e.weather[0].description,t.animation=e.weather[0].icon,t.sunrise=e.sys.sunrise,t.sunset=e.sys.sunset,t.city=e.name,t.country=e.sys.country,r(function(e){return{city:e.city,tempLabel:e.tempLabel,todayWeather:t,weeklyWeather:e.weeklyWeather,prevCities:e.prevCities,lastCitySel:e.lastCitySel}})},y=function(e){var t=e.map(function(e){return{temp:Math.floor(e.main.temp),animation:e.weather[0].icon,day:(t=e.dt,Object(u.a)(t).toDateString().slice(0,3))};var t});r(function(e){return{city:e.city,tempLabel:e.tempLabel,todayWeather:e.todayWeather,weeklyWeather:t,prevCities:e.prevCities,lastCitySel:e.lastCitySel}})},E=function(e){console.log(e),a.city=a.lastCitySel};Object(c.useEffect)(function(){(function(){return m.apply(this,arguments)})().catch(function(e){E(e)}),function(){return o.apply(this,arguments)}().catch(function(e){E(e)})},[a.city,a.tempLabel])},X=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useContext)(d),s=Object(i.a)(l,2),m=s[0],o=s[1],u=function(e){o(function(t){return{city:t.city,tempLabel:e,todayWeather:t.todayWeather,weeklyWeather:t.weeklyWeather,prevCities:Object(x.a)(t.prevCities),lastCitySel:t.lastCitySel}})};return g(),r.a.createElement("div",{className:"searchbar"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==a.replace(/\s+/g,"")){var t=[m.city].concat(Object(x.a)(m.prevCities)),c=t.filter(function(e,a){return t.indexOf(e)===a}).slice(0,5);o(function(e){return{city:a,tempLabel:e.tempLabel,todayWeather:e.todayWeather,weeklyWeather:e.weeklyWeather,prevCities:c,lastCitySel:e.city}}),n("")}}},r.a.createElement("input",{className:"search",type:"text",placeholder:"Enter City or Place (eg. London or London, UK",value:a,onChange:function(e){n(e.target.value.toUpperCase())},key:"1"})),r.a.createElement("div",{className:"radioImperial"},r.a.createElement("input",{name:"temp",type:"radio",onClick:function(){u("imperial")},checked:"imperial"===m.tempLabel}),r.a.createElement("span",{className:"imperial"},"\xb0F")),r.a.createElement("div",{className:"radioMetric"},r.a.createElement("input",{name:"temp",type:"radio",onClick:function(){u("metric")},checked:"metric"===m.tempLabel}),r.a.createElement("span",{className:"metric"},"\xb0C")))},k=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,1)[0],a=0,n=function(){return a++},l="imperial"===t.tempLabel?"\xb0F":"\xb0C",s=t.weeklyWeather;return r.a.createElement("div",{className:"weekDisplay"},s.map(function(e){return r.a.createElement("div",{className:"weeklyInfo",key:n()},r.a.createElement("div",{className:"weeklyDay",key:n()},e.day),N(e.animation),r.a.createElement("div",{className:"weeklyTemp",key:n()},e.temp+" "+l))}))},I=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,2),a=t[0],n=t[1],l=99999;return r.a.createElement("div",{className:"prevSearches"},r.a.createElement("h1",{className:"title"},"Previous Searches"),r.a.createElement("div",{className:"cities"},a.prevCities.map(function(e){return r.a.createElement("div",{className:"city",key:l++,onClick:function(){return n(function(t){return{city:e,tempLabel:t.tempLabel,todayWeather:t.todayWeather,weeklyWeather:t.weeklyWeather,prevCities:t.prevCities,lastCitySel:t.city}})}},e)})))};var T=function(){return r.a.createElement(o,null,r.a.createElement("div",{className:"App"},r.a.createElement(X,null),r.a.createElement(M,null),r.a.createElement(k,null),r.a.createElement(I,null)))};l.a.render(r.a.createElement(T,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.44f24762.chunk.js.map