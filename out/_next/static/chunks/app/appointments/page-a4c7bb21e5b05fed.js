(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{7376:function(e,t,r){Promise.resolve().then(r.bind(r,5672))},5672:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7437),n=r(3023),s=r(2265),d=r(1291),o=r(7158),i=r(8249),c=r(9311);function l(e){let{className:t,classNames:r,showOutsideDays:s=!0,...l}=e;return(0,a.jsx)(i._W,{showOutsideDays:s,className:(0,c.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,c.cn)((0,n.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,c.cn)((0,n.d)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...r},components:{IconLeft:e=>{let{...t}=e;return(0,a.jsx)(d.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,a.jsx)(o.Z,{className:"h-4 w-4"})}},...l})}l.displayName="Calendar";var u=r(6110),m=r(8203);function f(){let[e,t]=(0,s.useState)(new Date),r=[{date:new Date(2024,2,28),time:"10:00 AM",doctor:"Dr. Smith",department:"Cardiology",type:"Check-up",location:"Main Building, Room 305"},{date:new Date(2024,3,15),time:"2:30 PM",doctor:"Dr. Johnson",department:"General Medicine",type:"Follow-up",location:"West Wing, Room 210"}],d=r.filter(t=>t.date.toDateString()===(null==e?void 0:e.toDateString()));return(0,a.jsxs)("div",{className:"p-8",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Appointments"}),(0,a.jsx)("p",{className:"text-muted-foreground",children:"Manage your upcoming appointments"})]}),(0,a.jsx)(n.z,{children:"Schedule New Appointment"})]}),(0,a.jsxs)("div",{className:"grid gap-6 md:grid-cols-2",children:[(0,a.jsxs)(u.Zb,{className:"p-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,a.jsx)(m.Z,{className:"h-5 w-5"}),(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Calendar"})]}),(0,a.jsx)(l,{mode:"single",selected:e,onSelect:t,className:"rounded-md border"})]}),(0,a.jsxs)(u.Zb,{className:"p-6",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold mb-4",children:e?(0,a.jsxs)(a.Fragment,{children:["Appointments for ",e.toLocaleDateString()]}):"Select a date"}),(0,a.jsx)("div",{className:"space-y-4",children:d.length>0?d.map((e,t)=>(0,a.jsx)(u.Zb,{className:"p-4",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("p",{className:"font-medium",children:e.time}),(0,a.jsx)("p",{className:"text-muted-foreground",children:e.type})]}),(0,a.jsx)("p",{className:"font-medium",children:e.doctor}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.department}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.location})]})},t)):(0,a.jsx)("p",{className:"text-muted-foreground",children:"No appointments scheduled for this date"})})]})]})]})}},3023:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return c}});var a=r(7437),n=r(2265),s=r(7256),d=r(9213),o=r(9311);let i=(0,d.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:d,asChild:c=!1,...l}=e,u=c?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:d,className:r})),ref:t,...l})});c.displayName="Button"},6110:function(e,t,r){"use strict";r.d(t,{Zb:function(){return d}});var a=r(7437),n=r(2265),s=r(9311);let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});d.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});i.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});c.displayName="CardDescription";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});l.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(7042),n=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}}},function(e){e.O(0,[533,116,971,864,744],function(){return e(e.s=7376)}),_N_E=e.O()}]);