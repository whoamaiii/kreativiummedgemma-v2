import{j as s}from"./vendor-ui-BGGfvU-n.js";import{a as u}from"./vendor-react-BiKKw5Rc.js";import{c as q,u as V,B as f,C as _,d as H,e as L,b as z,k as J,J as v}from"./index-p40y1I9K.js";import{I as x}from"./input-Gpuq0ah-.js";import{L as m}from"./label-DPtwVyR_.js";import{T as U}from"./textarea-2v1IUrdg.js";import{C as b}from"./checkbox-wCMB9JkF.js";import{S as W,a as Y,b as K,c as Q,d as X}from"./select-Df25Jq5p.js";import{D as Z,a as ee,b as se,c as te,d as re,e as ie}from"./dialog-91XSgeKl.js";import{B as ne}from"./badge-XQGYYPGp.js";import{F as oe}from"./file-text-x8qZG1DU.js";import{D as ae}from"./download-B5AHGw6a.js";import{f as c,v as de,u as le,r as ce}from"./vendor-utils-BNQKEpbf.js";import"./3d-DUDogAyU.js";import"./logger-Bi5o39IC.js";import"./i18n-DNqVcHxj.js";import"./check-JkTn6zF0.js";import"./x-CtjkR7Fw.js";/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=q("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),y=[{id:"progress-summary",name:"reports.templates.progress-summary.name",description:"reports.templates.progress-summary.description",sections:["student-info","goal-progress","recent-activities","recommendations"]},{id:"iep-meeting",name:"reports.templates.iep-meeting.name",description:"reports.templates.iep-meeting.description",sections:["student-info","goal-progress","behavioral-patterns","environmental-factors","recommendations","next-steps"]},{id:"behavioral-analysis",name:"reports.templates.behavioral-analysis.name",description:"reports.templates.behavioral-analysis.description",sections:["student-info","behavioral-patterns","sensory-patterns","environmental-factors","interventions"]},{id:"quarterly-review",name:"reports.templates.quarterly-review.name",description:"reports.templates.quarterly-review.description",sections:["student-info","goal-progress","data-trends","achievements","challenges","next-quarter-planning"]}],Te=({student:p,goals:j,trackingEntries:w,emotions:C,sensoryInputs:$})=>{const{tCommon:n}=V(),[T,M]=u.useState(!1),[D,k]=u.useState("progress-summary"),[o,g]=u.useState({title:"",dateRange:{start:c(le(ce(new Date,1)),"yyyy-MM-dd"),end:c(de(new Date),"yyyy-MM-dd")},sections:[],includeCharts:!0,includeRawData:!1,customNotes:"",reportingTeacher:"",schoolDistrict:""});u.useRef(null);const S=e=>{const t=y.find(d=>d.id===e);t&&(k(e),g(d=>({...d,title:n(t.name),sections:t.sections})))},N=()=>{const e=new Date(o.dateRange.start),t=new Date(o.dateRange.end);if(isNaN(e.getTime())||isNaN(t.getTime()))return v.error(n("reports.builder.errors.invalidDateRange")),null;if(e>t)return v.error(n("reports.builder.errors.startBeforeEnd")),null;const d=w.filter(i=>i.timestamp>=e&&i.timestamp<=t),r=C.filter(i=>i.timestamp>=e&&i.timestamp<=t),a=$.filter(i=>i.timestamp>=e&&i.timestamp<=t),h=j.map(i=>{const l=i.dataPoints.filter(P=>P.timestamp>=e&&P.timestamp<=t),G=l.length>1?l[l.length-1].value-l[0].value:0;return{...i,progressInPeriod:l.length,progressChange:G,currentValue:i.dataPoints.length>0?i.dataPoints[i.dataPoints.length-1].value:0}}),E=r.reduce((i,l)=>(i[l.emotion]=(i[l.emotion]||0)+1,i),{}),A=r.length>0?r.reduce((i,l)=>i+l.intensity,0)/r.length:0,F=a.filter(i=>i.response==="seeking").length,I=a.filter(i=>i.response==="avoiding").length,O=a.reduce((i,l)=>(i[l.sensoryType]=(i[l.sensoryType]||0)+1,i),{});return{period:{start:e,end:t},totalSessions:d.length,goalProgress:h,emotionSummary:E,avgEmotionIntensity:A,sensorySummary:O,sensorySeekingCount:F,sensoryAvoidingCount:I,achievements:h.filter(i=>i.progressChange>0),challenges:h.filter(i=>i.progressChange<0||i.currentProgress<50)}},R=()=>{const e=N(),t=window.open("","_blank");if(!t)return;const d=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${o.title} - ${p.name}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 40px; 
              line-height: 1.6;
              color: #333;
            }
            .header { 
              text-align: center; 
              border-bottom: 2px solid #4f46e5; 
              padding-bottom: 20px; 
              margin-bottom: 30px;
            }
            .section { 
              margin-bottom: 30px; 
              page-break-inside: avoid;
            }
            .section h2 { 
              color: #4f46e5; 
              border-bottom: 1px solid #e5e7eb; 
              padding-bottom: 10px;
            }
            .goal-card {
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              padding: 15px;
              margin-bottom: 15px;
              background: #f9fafb;
            }
            .progress-bar {
              background: #e5e7eb;
              height: 10px;
              border-radius: 5px;
              overflow: hidden;
              margin: 10px 0;
            }
            .progress-fill {
              background: #4f46e5;
              height: 100%;
              transition: width 0.3s ease;
            }
            .metric {
              display: inline-block;
              margin: 10px 15px 10px 0;
              padding: 10px;
              background: #f3f4f6;
              border-radius: 6px;
              min-width: 120px;
              text-align: center;
            }
            .metric-value {
              font-size: 24px;
              font-weight: bold;
              color: #4f46e5;
            }
            .metric-label {
              font-size: 12px;
              color: #6b7280;
              text-transform: uppercase;
            }
            @media print {
              body { margin: 20px; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${o.title}</h1>
            <h2>${p.name}</h2>
            <p>Report Period: ${c(e.period.start,"MMMM dd, yyyy")} - ${c(e.period.end,"MMMM dd, yyyy")}</p>
            <p>Generated: ${c(new Date,"MMMM dd, yyyy")}</p>
            ${o.reportingTeacher?`<p>Prepared by: ${o.reportingTeacher}</p>`:""}
            ${o.schoolDistrict?`<p>School District: ${o.schoolDistrict}</p>`:""}
          </div>

          ${o.sections.includes("student-info")?`
            <div class="section">
              <h2>Student Information</h2>
              <p><strong>Name:</strong> ${p.name}</p>
              ${p.grade?`<p><strong>Grade:</strong> ${p.grade}</p>`:""}
              ${p.dateOfBirth?`<p><strong>Date of Birth:</strong> ${p.dateOfBirth}</p>`:""}
              <p><strong>Program Start Date:</strong> ${c(p.createdAt,"MMMM dd, yyyy")}</p>
              ${p.notes?`<p><strong>Notes:</strong> ${p.notes}</p>`:""}
            </div>
          `:""}

          ${o.sections.includes("goal-progress")?`
            <div class="section">
              <h2>IEP Goal Progress</h2>
              ${e.goalProgress.map(r=>`
                <div class="goal-card">
                  <h3>${r.title}</h3>
                  <p><strong>Category:</strong> ${r.category}</p>
                  <p><strong>Target Date:</strong> ${c(r.targetDate,"MMMM dd, yyyy")}</p>
                  <p><strong>Current Progress:</strong> ${Math.round(r.currentProgress)}%</p>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: ${r.currentProgress}%"></div>
                  </div>
                  <p><strong>Measurable Objective:</strong> ${r.measurableObjective}</p>
                  ${r.progressInPeriod>0?`<p><strong>Data Points in Period:</strong> ${r.progressInPeriod}</p>`:""}
                  ${r.progressChange!==0?`<p><strong>Change in Period:</strong> ${r.progressChange>0?"+":""}${r.progressChange.toFixed(1)}</p>`:""}
                </div>
              `).join("")}
            </div>
          `:""}

          ${o.sections.includes("behavioral-patterns")?`
            <div class="section">
              <h2>Emotional and Behavioral Patterns</h2>
              <div class="metric">
                <div class="metric-value">${e.totalSessions}</div>
                <div class="metric-label">Total Sessions</div>
              </div>
              <div class="metric">
                <div class="metric-value">${e.avgEmotionIntensity.toFixed(1)}</div>
                <div class="metric-label">Avg Intensity</div>
              </div>
              
              <h3>Emotion Distribution</h3>
              ${Object.entries(e.emotionSummary).map(([r,a])=>`
                <p><strong>${r.charAt(0).toUpperCase()+r.slice(1)}:</strong> ${a} occurrences</p>
              `).join("")}
            </div>
          `:""}

          ${o.sections.includes("sensory-patterns")?`
            <div class="section">
              <h2>Sensory Processing Patterns</h2>
              <div class="metric">
                <div class="metric-value">${e.sensorySeekingCount}</div>
                <div class="metric-label">Seeking Behaviors</div>
              </div>
              <div class="metric">
                <div class="metric-value">${e.sensoryAvoidingCount}</div>
                <div class="metric-label">Avoiding Behaviors</div>
              </div>
              
              <h3>Sensory Type Distribution</h3>
              ${Object.entries(e.sensorySummary).map(([r,a])=>`
                <p><strong>${r.charAt(0).toUpperCase()+r.slice(1)}:</strong> ${a} entries</p>
              `).join("")}
            </div>
          `:""}

          ${o.sections.includes("achievements")?`
            <div class="section">
              <h2>Achievements and Progress</h2>
              ${e.achievements.length>0?e.achievements.map(r=>`
                  <div class="goal-card">
                    <h4>${r.title}</h4>
                    <p>Progress improved by ${r.progressChange.toFixed(1)} points</p>
                    <p>Current: ${Math.round(r.currentProgress)}% complete</p>
                  </div>
                `).join(""):"<p>No significant progress improvements detected in this period.</p>"}
            </div>
          `:""}

          ${o.sections.includes("challenges")?`
            <div class="section">
              <h2>Areas Needing Attention</h2>
              ${e.challenges.length>0?e.challenges.map(r=>`
                  <div class="goal-card">
                    <h4>${r.title}</h4>
                    <p>Current Progress: ${Math.round(r.currentProgress)}%</p>
                    ${r.progressChange<0?`<p>⚠️ Progress declined by ${Math.abs(r.progressChange).toFixed(1)} points</p>`:""}
                    ${r.currentProgress<50?"<p>📈 Consider intensifying interventions</p>":""}
                  </div>
                `).join(""):"<p>No significant challenges identified in this period.</p>"}
            </div>
          `:""}

          ${o.sections.includes("recommendations")?`
            <div class="section">
              <h2>Recommendations</h2>
              <ul>
                ${e.challenges.length>0?"<li>Consider reviewing and adjusting intervention strategies for goals showing limited progress</li>":""}
                ${e.avgEmotionIntensity>3.5?"<li>High emotional intensity noted - consider additional calming strategies</li>":""}
                ${e.sensoryAvoidingCount>e.sensorySeekingCount?"<li>Student shows more sensory avoiding behaviors - review environmental accommodations</li>":""}
                ${e.totalSessions<8?"<li>Consider increasing data collection frequency for better trend analysis</li>":""}
                <li>Continue current successful strategies and interventions</li>
                <li>Regular team meetings to discuss progress and adjust goals as needed</li>
              </ul>
            </div>
          `:""}

          ${o.customNotes?`
            <div class="section">
              <h2>Additional Notes</h2>
              <p>${o.customNotes.replace(/\n/g,"<br>")}</p>
            </div>
          `:""}

          <div class="section">
            <h2>Data Collection Summary</h2>
            <p>This report is based on ${e.totalSessions} tracking sessions, ${C.length} emotional observations, and ${$.length} sensory input recordings collected from ${c(e.period.start,"MMMM dd, yyyy")} to ${c(e.period.end,"MMMM dd, yyyy")}.</p>
          </div>
        </body>
      </html>
    `;t.document.write(d),t.document.close(),t.focus(),setTimeout(()=>{t.print()},1e3),v.success(n("reports.builder.toast.reportGenerated"))},B=()=>{const e=N(),d=[["Report Type","Student Name","Period Start","Period End","Total Sessions","Goals Count"],[o.title,p.name,c(e.period.start,"yyyy-MM-dd"),c(e.period.end,"yyyy-MM-dd"),e.totalSessions.toString(),j.length.toString()],[],["Goal Progress"],["Goal Title","Category","Current Progress (%)","Target Date","Status"],...e.goalProgress.map(a=>[a.title,a.category,Math.round(a.currentProgress).toString(),c(a.targetDate,"yyyy-MM-dd"),a.status]),[],["Emotion Summary"],["Emotion","Count"],...Object.entries(e.emotionSummary),[],["Sensory Summary"],["Sensory Type","Count"],...Object.entries(e.sensorySummary)].map(a=>a.map(h=>`"${h}"`).join(",")).join(`
`),r=new Blob([d],{type:"text/csv"});J(r,`${p.name.replace(/\s+/g,"_")}_${o.title.replace(/\s+/g,"_")}_${c(new Date,"yyyy-MM-dd")}.csv`),v.success(n("reports.builder.toast.csvExported"))};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold",children:n("reports.builder.title")}),s.jsx("p",{className:"text-muted-foreground",children:n("reports.builder.description")})]}),s.jsxs(Z,{open:T,onOpenChange:M,children:[s.jsx(ee,{asChild:!0,children:s.jsxs(f,{className:"bg-gradient-primary hover:opacity-90 font-dyslexia",children:[s.jsx(oe,{className:"h-4 w-4 mr-2"}),"Create Report"]})}),s.jsxs(se,{className:"max-w-4xl max-h-[80vh] overflow-y-auto",children:[s.jsxs(te,{children:[s.jsx(re,{children:n("reports.builder.title")}),s.jsx(ie,{children:String(n("reports.builder.description"))})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx(m,{children:n("reports.builder.form.reportTemplate")}),s.jsxs(W,{value:D,onValueChange:S,children:[s.jsx(Y,{children:s.jsx(K,{})}),s.jsx(Q,{children:y.map(e=>s.jsx(X,{value:e.id,children:n(e.name)},e.id))})]}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:n(y.find(e=>e.id===D)?.description||"")})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"reportTitle",children:n("reports.builder.form.reportTitle")}),s.jsx(x,{id:"reportTitle",value:o.title,onChange:e=>g(t=>({...t,title:e.target.value}))})]}),s.jsxs("div",{children:[s.jsx(m,{htmlFor:"teacher",children:n("reports.builder.form.reportingTeacher")}),s.jsx(x,{id:"teacher",value:o.reportingTeacher,onChange:e=>g(t=>({...t,reportingTeacher:e.target.value})),placeholder:n("reports.builder.form.reportingTeacherPlaceholder")})]})]}),s.jsxs("div",{children:[s.jsx(m,{children:n("reports.builder.form.reportPeriod")}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-1",children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"startDate",className:"text-sm",children:n("reports.builder.form.startDate")}),s.jsx(x,{id:"startDate",type:"date",value:o.dateRange.start,onChange:e=>g(t=>({...t,dateRange:{...t.dateRange,start:e.target.value}}))})]}),s.jsxs("div",{children:[s.jsx(m,{htmlFor:"endDate",className:"text-sm",children:n("reports.builder.form.endDate")}),s.jsx(x,{id:"endDate",type:"date",value:o.dateRange.end,onChange:e=>g(t=>({...t,dateRange:{...t.dateRange,end:e.target.value}}))})]})]})]}),s.jsxs("div",{children:[s.jsx(m,{children:n("reports.builder.form.reportSections")}),s.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:["student-info","goal-progress","behavioral-patterns","sensory-patterns","environmental-factors","achievements","challenges","recommendations","next-steps","interventions"].map(e=>({id:e,label:n(`reports.builder.sections.${e}`)})).map(e=>s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(b,{id:e.id,checked:o.sections.includes(e.id),onCheckedChange:t=>{g(d=>({...d,sections:t?[...d.sections,e.id]:d.sections.filter(r=>r!==e.id)}))}}),s.jsx(m,{htmlFor:e.id,className:"text-sm",children:e.label})]},e.id))})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(b,{id:"includeCharts",checked:o.includeCharts,onCheckedChange:e=>g(t=>({...t,includeCharts:!!e}))}),s.jsx(m,{htmlFor:"includeCharts",children:n("reports.builder.form.includeCharts")})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(b,{id:"includeRawData",checked:o.includeRawData,onCheckedChange:e=>g(t=>({...t,includeRawData:!!e}))}),s.jsx(m,{htmlFor:"includeRawData",children:n("reports.builder.form.includeRawData")})]})]}),s.jsxs("div",{children:[s.jsx(m,{htmlFor:"customNotes",children:n("reports.builder.form.additionalNotes")}),s.jsx(U,{id:"customNotes",value:o.customNotes,onChange:e=>g(t=>({...t,customNotes:e.target.value})),placeholder:n("reports.builder.form.additionalNotesPlaceholder"),rows:3})]}),s.jsxs("div",{className:"flex gap-2 justify-end",children:[s.jsxs(f,{variant:"outline",onClick:B,children:[s.jsx(ae,{className:"h-4 w-4 mr-2"}),n("reports.builder.form.exportCsv")]}),s.jsxs(f,{onClick:R,children:[s.jsx(pe,{className:"h-4 w-4 mr-2"}),n("reports.builder.form.generatePdf")]})]})]})]})]})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:y.map(e=>s.jsxs(_,{className:"bg-gradient-card border-0 shadow-soft cursor-pointer hover:shadow-lg transition-shadow",onClick:()=>{S(e.id),M(!0)},children:[s.jsx(H,{className:"pb-2",children:s.jsx(L,{className:"text-sm",children:n(e.name)})}),s.jsxs(z,{children:[s.jsx("p",{className:"text-xs text-muted-foreground mb-3",children:n(e.description)}),s.jsx(ne,{variant:"outline",className:"text-xs",children:n("reports.sectionsCount",{count:e.sections.length})})]})]},e.id))})]})};export{Te as ReportBuilder};
