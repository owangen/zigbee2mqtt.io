"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14148],{899869:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-362ad4ca","path":"/devices/WL4200.html","title":"Sinopé WL4200 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé WL4200 control via MQTT","description":"Integrate your Sinopé WL4200 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-07-20T23:08:11.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Water_leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1671571696000},"filePathRelative":"devices/WL4200.md"}')},420555:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(166252);const r=(0,a._)("h1",{id:"sinope-wl4200",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#sinope-wl4200","aria-hidden":"true"},"#"),(0,a.Uk)(" Sinopé WL4200")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"WL4200")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Zigbee smart water leak detector")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"water_leak, battery_low, temperature, battery, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WL4200.jpg",alt:"Sinopé WL4200"})])],-1),c=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water_leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water_leak is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),p={},m=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[o,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,a.w5)((()=>[(0,a.Uk)("Sinopé")])),_:1})])]),d,u,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),c,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);