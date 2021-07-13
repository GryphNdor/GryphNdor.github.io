(self.webpackChunkcomputer_science_stuff=self.webpackChunkcomputer_science_stuff||[]).push([[653],{5163:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},Highlight:function(){return p},default:function(){return d}});var a=i(2122),o=i(9756),l=(i(7294),i(3905)),n=["components"],r={id:"beach-boiis",title:"Beach-Boiis",custom_edit_url:null},s=void 0,c={unversionedId:"Projects/beach-boiis",id:"Projects/beach-boiis",isDocsHomePage:!1,title:"Beach-Boiis",description:"<span",source:"@site/docs/Projects/Beach-Boiis.md",sourceDirName:"Projects",slug:"/Projects/beach-boiis",permalink:"/Projects/beach-boiis",editUrl:null,version:"current",frontMatter:{id:"beach-boiis",title:"Beach-Boiis",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Data Structures",permalink:"/notes/data-structures"},next:{title:"On Cue",permalink:"/Projects/on-cue"}},u=[{value:"Partner",id:"partner",children:[]},{value:"Project Overview",id:"project-overview",children:[]},{value:"Development",id:"development",children:[{value:"Issues / Resolution",id:"issues--resolution",children:[]},{value:"To-Dos",id:"to-dos",children:[]}]}],p=function(e){var t=e.children,i=e.color,a=e.fontColor;return(0,l.kt)("span",{style:{backgroundColor:i,borderRadius:"2px",color:a?"black":"white",padding:"0.2rem"}},t)},h={toc:u,Highlight:p};function d(e){var t=e.components,i=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"partner"},"Partner"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/TheWeeWooMachine"},"TheWeeWooMachine")),(0,l.kt)("h2",{id:"project-overview"},"Project Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A mobile volleyball game that involves timing both tapping/swiping to get the ball over the net"),(0,l.kt)("li",{parentName:"ul"},"The player has to tap the screen at the right time or they will lose the game"),(0,l.kt)("li",{parentName:"ul"},"Each tap/swipe increments a scoreboard by one"),(0,l.kt)("li",{parentName:"ul"},"List of scores are displayed at the end of the game"),(0,l.kt)("li",{parentName:"ul"},"Later on there could be multiplayer integration with players having to control their own avatar's actions"),(0,l.kt)("li",{parentName:"ul"},"Simple graphic design similar to ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Mu5GPEYDZZw"},"Im Ping Pong King"))),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For this app to work on both mobile and PC we went with a PWA React App"),(0,l.kt)("li",{parentName:"ul"},"We used ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-swipeable"},"react-swipeable")," to handle the movements and used plain JS to render and handle gameplay logic")),(0,l.kt)("h3",{id:"issues--resolution"},"Issues / Resolution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p,{color:"#C590E8",mdxType:"Highlight"},"Issue #1:")," Getting the game to adapt (meaning receive input) using React ",(0,l.kt)("code",null,"useState")," hook"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"Resolved:")," Had to refactor the code to use plain vanilla JS and use a pseudo-state constructor for the object. Also had to use React ",(0,l.kt)("code",null,"useRef")," hooks to bind the object to the state"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p,{color:"#C590E8",mdxType:"Highlight"},"Issue #2:")," Getting the ball to in a fluid motion over the net"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"Resolved")," Not a terribly hard fix but to get the ball to curve, we had to use a ",(0,l.kt)("a",{href:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve"}," B\xe9zier Curve ")," and implement a midpoint & endpoint generator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p,{color:"#C590E8",mdxType:"Highlight"},"Issue #3:")," Callback error"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"Resolved")," Me writing silly code that checked if the ref existed and not the ",(0,l.kt)("code",null,"ref.current"))),(0,l.kt)("h3",{id:"to-dos"},"To-Dos"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Adding swipe direction (aka setting left/right & spiking left/right)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Player Avatar movement"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Implement Pause Buttom"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Menu + Scene Switcher"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SFX")))}d.isMDXComponent=!0}}]);