import{f as m}from"./vendor-utils-BNQKEpbf.js";class g{CURRENT_VERSION="1.0.0";async generatePDFReport(t,s,n){const e=this.buildReportContent(t,s,n),r=this.generateHTMLReport(e,n);return new Blob([r],{type:"text/html"})}generateCSVExport(t,s,n){const{includeFields:e,dateRange:r,anonymize:o}=n;let i="";if(e.includes("emotions")){const a=this.filterByDateRange(s.emotions,r);i+=this.generateEmotionsCSV(a,t,o),i+=`

`}if(e.includes("sensoryInputs")){const a=this.filterByDateRange(s.sensoryInputs,r);i+=this.generateSensoryCSV(a,t,o),i+=`

`}if(e.includes("goals")&&(i+=this.generateGoalsCSV(s.goals,t,o),i+=`

`),e.includes("trackingEntries")){const a=this.filterByDateRange(s.trackingEntries,r);i+=this.generateTrackingCSV(a,t,o)}return i}generateJSONExport(t,s,n){const{includeFields:e,dateRange:r,anonymize:o}=n,i={version:this.CURRENT_VERSION,exportDate:new Date().toISOString(),options:n,data:{}};if(e.includes("students")&&(i.data.students=o?t.map(a=>this.anonymizeStudent(a)):t),e.includes("emotions")){const a=this.filterByDateRange(s.emotions,r);i.data.emotions=o?a.map(d=>this.anonymizeEmotion(d)):a}if(e.includes("sensoryInputs")){const a=this.filterByDateRange(s.sensoryInputs,r);i.data.sensoryInputs=o?a.map(d=>this.anonymizeSensory(d)):a}if(e.includes("goals")&&(i.data.goals=o?s.goals.map(a=>this.anonymizeGoal(a)):s.goals),e.includes("trackingEntries")){const a=this.filterByDateRange(s.trackingEntries,r);i.data.trackingEntries=o?a.map(d=>this.anonymizeTracking(d)):a}return JSON.stringify(i,null,2)}createFullBackup(t,s){const n=[...s.trackingEntries.map(e=>e.timestamp),...s.emotions.map(e=>e.timestamp),...s.sensoryInputs.map(e=>e.timestamp)].sort((e,r)=>e.getTime()-r.getTime());return{version:this.CURRENT_VERSION,timestamp:new Date,students:t,trackingEntries:s.trackingEntries,emotions:s.emotions,sensoryInputs:s.sensoryInputs,goals:s.goals,metadata:{exportedBy:"Kreativium",totalRecords:s.trackingEntries.length+s.emotions.length+s.sensoryInputs.length+s.goals.length,dateRange:{earliest:n[0]||new Date,latest:n[n.length-1]||new Date}}}}async restoreFromBackup(t){const s=[],n={students:0,trackingEntries:0,emotions:0,sensoryInputs:0,goals:0};try{if(!this.isVersionCompatible(t.version))return s.push(`Backup version ${t.version} is not compatible with current version ${this.CURRENT_VERSION}`),{success:!1,errors:s,imported:n};const e=await this.validateBackupData(t);return e.errors.length>0&&s.push(...e.errors),n.students=e.validStudents.length,n.trackingEntries=e.validTrackingEntries.length,n.emotions=e.validEmotions.length,n.sensoryInputs=e.validSensoryInputs.length,n.goals=e.validGoals.length,{success:s.length===0,errors:s,imported:n}}catch(e){return s.push(`Restore failed: ${e instanceof Error?e.message:"Unknown error"}`),{success:!1,errors:s,imported:n}}}async importFromCSV(t,s){const n=[],e=[];try{const r=t.split(`
`).filter(d=>d.trim()!=="");if(r.length<2)return n.push("CSV file must contain at least a header row and one data row"),{success:!1,errors:n,imported:e};const o=this.parseCSVLine(r[0]),a=this.getRequiredHeaders(s).filter(d=>!o.includes(d));if(a.length>0)return n.push(`Missing required headers: ${a.join(", ")}`),{success:!1,errors:n,imported:e};for(let d=1;d<r.length;d++)try{const l=this.parseCSVLine(r[d]);if(l.length!==o.length){n.push(`Row ${d+1}: Column count mismatch`);continue}const u=this.parseCSVRowData(o,l,s);u&&e.push(u)}catch(l){n.push(`Row ${d+1}: ${l instanceof Error?l.message:"Parse error"}`)}return{success:e.length>0,errors:n,imported:e}}catch(r){return n.push(`Import failed: ${r instanceof Error?r.message:"Unknown error"}`),{success:!1,errors:n,imported:e}}}buildReportContent(t,s,n){return{header:{title:`Progress Report - ${t.name}`,dateRange:n.dateRange?`${m(n.dateRange.start,"MMM dd, yyyy")} - ${m(n.dateRange.end,"MMM dd, yyyy")}`:"All time",generatedDate:m(new Date,"MMM dd, yyyy"),studentInfo:{name:t.name,grade:t.grade,id:t.id}},summary:{totalSessions:s.trackingEntries.length,totalEmotions:s.emotions.length,totalSensoryInputs:s.sensoryInputs.length,activeGoals:s.goals.filter(e=>e.status==="active").length,completedGoals:s.goals.filter(e=>e.status==="achieved").length},emotionAnalysis:this.analyzeEmotionsForReport(s.emotions),sensoryAnalysis:this.analyzeSensoryForReport(s.sensoryInputs),goalProgress:this.analyzeGoalsForReport(s.goals),recommendations:this.generateRecommendations(s)}}generateHTMLReport(t,s){return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.header.title}</title>
    <style>
        body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            margin: 40px; 
            color: #333;
        }
        .header { 
            border-bottom: 2px solid #2563eb; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
        }
        .section { 
            margin-bottom: 30px; 
            page-break-inside: avoid; 
        }
        .summary-grid { 
            display: grid; 
            grid-template-columns: repeat(2, 1fr); 
            gap: 20px; 
            margin: 20px 0; 
        }
        .summary-card { 
            border: 1px solid #e5e7eb; 
            padding: 15px; 
            border-radius: 8px; 
        }
        .chart-placeholder { 
            height: 200px; 
            background: #f9fafb; 
            border: 1px dashed #d1d5db; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            margin: 20px 0; 
        }
        @media print {
            body { margin: 20px; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${t.header.title}</h1>
        <p><strong>Period:</strong> ${t.header.dateRange}</p>
        <p><strong>Generated:</strong> ${t.header.generatedDate}</p>
        <p><strong>Student ID:</strong> ${t.header.studentInfo.id}</p>
        ${t.header.studentInfo.grade?`<p><strong>Grade:</strong> ${t.header.studentInfo.grade}</p>`:""}
    </div>

    <div class="section">
        <h2>Summary</h2>
        <div class="summary-grid">
            <div class="summary-card">
                <h3>Tracking Sessions</h3>
                <p style="font-size: 24px; font-weight: bold;">${t.summary.totalSessions}</p>
            </div>
            <div class="summary-card">
                <h3>Emotions Recorded</h3>
                <p style="font-size: 24px; font-weight: bold;">${t.summary.totalEmotions}</p>
            </div>
            <div class="summary-card">
                <h3>Sensory Inputs</h3>
                <p style="font-size: 24px; font-weight: bold;">${t.summary.totalSensoryInputs}</p>
            </div>
            <div class="summary-card">
                <h3>Active Goals</h3>
                <p style="font-size: 24px; font-weight: bold;">${t.summary.activeGoals}</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Emotional Analysis</h2>
        <p><strong>Most Common Emotion:</strong> ${t.emotionAnalysis.mostCommon}</p>
        <p><strong>Average Intensity:</strong> ${t.emotionAnalysis.avgIntensity}</p>
        <p><strong>Positive Emotion Rate:</strong> ${t.emotionAnalysis.positiveRate}%</p>
        ${s.includeCharts?'<div class="chart-placeholder">Emotion Trends Chart</div>':""}
    </div>

    <div class="section">
        <h2>Sensory Analysis</h2>
        <p><strong>Seeking vs Avoiding:</strong> ${t.sensoryAnalysis.seekingRatio}% seeking</p>
        <p><strong>Most Common Type:</strong> ${t.sensoryAnalysis.mostCommonType}</p>
        ${s.includeCharts?'<div class="chart-placeholder">Sensory Patterns Chart</div>':""}
    </div>

    <div class="section">
        <h2>Goal Progress</h2>
        ${t.goalProgress.map(n=>`
            <div style="margin-bottom: 15px;">
                <h3>${n.title}</h3>
                <p><strong>Progress:</strong> ${n.progress}% complete</p>
                <p><strong>Status:</strong> ${n.status}</p>
            </div>
        `).join("")}
    </div>

    <div class="section">
        <h2>Recommendations</h2>
        <ul>
            ${t.recommendations.map(n=>`<li>${n}</li>`).join("")}
        </ul>
    </div>
</body>
</html>
    `}generateEmotionsCSV(t,s,n){let e=`Date,Student,Emotion,Intensity,Triggers,Notes
`;return t.forEach(r=>{const o=s.find(a=>a.id===r.studentId),i=n?`Student_${r.studentId.slice(-4)}`:o?.name||"Unknown";e+=`${m(r.timestamp,"yyyy-MM-dd HH:mm")},`,e+=`"${i}",`,e+=`"${r.emotion}",`,e+=`${r.intensity},`,e+=`"${r.triggers?.join("; ")||""}",`,e+=`"${r.notes||""}"
`}),e}generateSensoryCSV(t,s,n){let e=`Date,Student,Sensory Type,Response,Intensity,Context,Notes
`;return t.forEach(r=>{const o=s.find(a=>a.id===r.studentId),i=n?`Student_${r.studentId.slice(-4)}`:o?.name||"Unknown";e+=`${m(r.timestamp,"yyyy-MM-dd HH:mm")},`,e+=`"${i}",`,e+=`"${r.sensoryType}",`,e+=`"${r.response}",`,e+=`${r.intensity},`,e+=`"${r.notes||""}",`,e+=`"${r.notes||""}"
`}),e}generateGoalsCSV(t,s,n){let e=`Student,Goal Title,Description,Target Value,Current Progress,Status,Date Created
`;return t.forEach(r=>{const o=s.find(a=>a.id===r.studentId),i=n?`Student_${r.studentId.slice(-4)}`:o?.name||"Unknown";e+=`"${i}",`,e+=`"${r.title}",`,e+=`"${r.description}",`,e+=`${r.targetValue},`,e+=`${r.dataPoints?.length?r.dataPoints[r.dataPoints.length-1].value:0},`,e+=`"${r.status}",`,e+=`${m(r.createdDate,"yyyy-MM-dd")}
`}),e}generateTrackingCSV(t,s,n){let e=`Date,Student,Session Duration,Emotion Count,Sensory Count,Environmental Notes
`;return t.forEach(r=>{const o=s.find(a=>a.id===r.studentId),i=n?`Student_${r.studentId.slice(-4)}`:o?.name||"Unknown";e+=`${m(r.timestamp,"yyyy-MM-dd HH:mm")},`,e+=`"${i}",`,e+="60,",e+=`${r.emotions.length},`,e+=`${r.sensoryInputs.length},`,e+=`"${r.environmentalData?.notes||""}"
`}),e}filterByDateRange(t,s){return s?t.filter(n=>n.timestamp>=s.start&&n.timestamp<=s.end):t}anonymizeStudent(t){return{...t,name:`Student_${t.id.slice(-4)}`,dateOfBirth:void 0}}anonymizeEmotion(t){return{...t,studentId:t.studentId.slice(-4)}}anonymizeSensory(t){return{...t,studentId:t.studentId.slice(-4)}}anonymizeGoal(t){return{...t,studentId:t.studentId.slice(-4)}}anonymizeTracking(t){return{...t,studentId:t.studentId.slice(-4)}}analyzeEmotionsForReport(t){if(t.length===0)return{mostCommon:"No data",avgIntensity:"0.0",positiveRate:"0"};const s=t.reduce((i,a)=>(i[a.emotion]=(i[a.emotion]||0)+1,i),{}),n=Object.entries(s).sort(([,i],[,a])=>a-i)[0][0],e=(t.reduce((i,a)=>i+a.intensity,0)/t.length).toFixed(1),r=t.filter(i=>["happy","calm","focused","excited","proud"].includes(i.emotion.toLowerCase())).length,o=Math.round(r/t.length*100);return{mostCommon:n,avgIntensity:e,positiveRate:o.toString()}}analyzeSensoryForReport(t){if(t.length===0)return{seekingRatio:"0",mostCommonType:"No data"};const s=t.filter(o=>o.response.toLowerCase().includes("seeking")).length,n=Math.round(s/t.length*100),e=t.reduce((o,i)=>(o[i.sensoryType]=(o[i.sensoryType]||0)+1,o),{}),r=Object.entries(e).sort(([,o],[,i])=>i-o)[0][0];return{seekingRatio:n.toString(),mostCommonType:r}}analyzeGoalsForReport(t){return t.map(s=>({title:s.title,progress:Math.round((s.dataPoints?.length?s.dataPoints[s.dataPoints.length-1].value:0)/s.targetValue*100),status:s.status}))}generateRecommendations(t){const s=[];return t.emotions.length>0&&t.emotions.reduce((e,r)=>e+r.intensity,0)/t.emotions.length>7&&s.push("Consider implementing stress reduction strategies"),t.sensoryInputs.length>0&&t.sensoryInputs.filter(e=>e.response.toLowerCase().includes("seeking")).length/t.sensoryInputs.length>.7&&s.push("Provide more structured sensory breaks and tools"),s.length===0&&s.push("Continue current monitoring and support strategies"),s}isVersionCompatible(t){const[s]=t.split(".").map(Number),[n]=this.CURRENT_VERSION.split(".").map(Number);return s<=n}async validateBackupData(t){return{validStudents:t.students||[],validTrackingEntries:t.trackingEntries||[],validEmotions:t.emotions||[],validSensoryInputs:t.sensoryInputs||[],validGoals:t.goals||[],errors:[]}}getRequiredHeaders(t){return{emotions:["Date","Emotion","Intensity"],sensoryInputs:["Date","Sensory Type","Response","Intensity"],students:["Name","Grade"]}[t]||[]}parseCSVLine(t){const s=[];let n="",e=!1;for(let r=0;r<t.length;r++){const o=t[r];o==='"'?e=!e:o===","&&!e?(s.push(n.trim()),n=""):n+=o}return s.push(n.trim()),s}parseCSVRowData(t,s,n){const e={};switch(t.forEach((r,o)=>{e[r]=s[o]}),n){case"emotions":return{id:crypto.randomUUID(),emotion:e.Emotion,intensity:parseInt(e.Intensity)||0,timestamp:new Date(e.Date),studentId:"",triggers:e.Triggers?e.Triggers.split(";"):[],notes:e.Notes||""};case"sensoryInputs":return{id:crypto.randomUUID(),sensoryType:e["Sensory Type"],response:e.Response,intensity:parseInt(e.Intensity)||0,timestamp:new Date(e.Date),studentId:"",context:e.Context||"",notes:e.Notes||""};case"students":return{id:crypto.randomUUID(),name:e.Name,grade:e.Grade,createdAt:new Date,goals:[],baselineData:{emotionalRegulation:5,sensoryProcessing:5,environmentalPreferences:{}}};default:return null}}}const h=new g;export{h as exportSystem};
