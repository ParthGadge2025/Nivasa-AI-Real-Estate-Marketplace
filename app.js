const properties = [
 {id:1,name:"Skyline Villa",city:"Pune",area:"Baner",type:"Villa",purpose:"Buy",price:23500000,priceText:"₹2.35 Cr",beds:4,baths:4,sqft:2850,img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",desc:"A spacious modern villa with premium interiors, natural light and a private garden.",match:94},
 {id:2,name:"Urban Nest",city:"Mumbai",area:"Andheri West",type:"Apartment",purpose:"Buy",price:12800000,priceText:"₹1.28 Cr",beds:2,baths:2,sqft:1120,img:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",desc:"Contemporary city apartment close to transit, cafes and everyday essentials.",match:91},
 {id:3,name:"Lakeview Heights",city:"Nagpur",area:"Wardha Road",type:"Apartment",purpose:"Buy",price:7200000,priceText:"₹72 L",beds:3,baths:2,sqft:1580,img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",desc:"Bright 3 BHK with an open balcony, peaceful surroundings and excellent connectivity.",match:89},
 {id:4,name:"Palm Grove House",city:"Bengaluru",area:"Whitefield",type:"House",purpose:"Rent",price:55000,priceText:"₹55K/mo",beds:3,baths:3,sqft:2100,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",desc:"Family-friendly independent home with a landscaped garden and flexible interiors.",match:86},
 {id:5,name:"Cedar Smart Home",city:"Hyderabad",area:"Gachibowli",type:"Apartment",purpose:"Buy",price:9500000,priceText:"₹95 L",beds:3,baths:2,sqft:1700,img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",desc:"Smart-ready apartment designed for work-from-home and modern city living.",match:93},
 {id:6,name:"Greenfield Plot",city:"Pune",area:"Wagholi",type:"Plot",purpose:"Buy",price:4800000,priceText:"₹48 L",beds:0,baths:0,sqft:2400,img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",desc:"Residential plot opportunity in a growing Pune corridor.",match:82},
 {id:7,name:"Coastal Minimal",city:"Chennai",area:"ECR",type:"House",purpose:"Buy",price:14500000,priceText:"₹1.45 Cr",beds:4,baths:3,sqft:2600,img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",desc:"Calm coastal-inspired home with generous rooms and airy living spaces.",match:88},
 {id:8,name:"Metro Studio",city:"Mumbai",area:"Powai",type:"Apartment",purpose:"Rent",price:32000,priceText:"₹32K/mo",beds:1,baths:1,sqft:650,img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",desc:"Compact, stylish studio for professionals seeking a connected location.",match:84},
 {id:9,name:"Orchid Villa",city:"Nagpur",area:"Civil Lines",type:"Villa",purpose:"Buy",price:18500000,priceText:"₹1.85 Cr",beds:4,baths:4,sqft:3200,img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80",desc:"Elegant independent villa with large rooms, parking and premium finishes.",match:90}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let category = "";
let favorites = JSON.parse(localStorage.getItem("nivasaFavorites") || "[]");

function renderProperties(){
  const q = ($("#searchInput").value || "").toLowerCase().trim();
  const city = $("#cityFilter").value;
  const type = $("#typeFilter").value || category;
  const purpose = $("#purposeFilter").value;
  const list = properties.filter(p =>
    (!q || `${p.name} ${p.city} ${p.area} ${p.type}`.toLowerCase().includes(q)) &&
    (!city || p.city===city) && (!type || p.type===type) && (!purpose || p.purpose===purpose)
  );
  $("#propertyGrid").innerHTML = list.length ? list.map(cardHTML).join("") :
    `<div class="tool-card" style="grid-column:1/-1"><h3>No properties found</h3><p>Try a different city, category or search term.</p></div>`;
  $$(".property-card .view-btn").forEach(b => b.onclick=()=>openProperty(+b.dataset.id));
  $$(".property-card .heart").forEach(b=>b.onclick=()=>toggleFavorite(+b.dataset.id,b));
}
function cardHTML(p){
 const saved=favorites.includes(p.id);
 return `<article class="property-card">
  <div class="property-img" style="background-image:url('${p.img}')"><span class="tag">✦ ${p.match}% AI match</span><button class="heart" data-id="${p.id}">${saved?"♥":"♡"}</button></div>
  <div class="property-body"><span class="location">${p.area}, ${p.city} · ${p.purpose}</span><h3>${p.name}</h3><div class="property-bottom"><span class="price">${p.priceText}</span><button class="view-btn" data-id="${p.id}">View</button></div><div class="specs"><span>${p.beds ? p.beds+" Beds" : "Residential"}</span><span>${p.baths ? p.baths+" Baths" : "Plot"}</span><span>${p.sqft.toLocaleString()} sq.ft</span></div></div>
 </article>`;
}
function toggleFavorite(id,btn){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("nivasaFavorites",JSON.stringify(favorites));$("#savedCount").textContent=favorites.length;btn.textContent=favorites.includes(id)?"♥":"♡";}
function openProperty(id){
 const p=properties.find(x=>x.id===id);
 $("#propertyDetail").innerHTML=`<img src="${p.img}" alt="${p.name}"><span class="eyebrow">${p.match}% AI MATCH · ${p.purpose}</span><h2 style="margin-top:8px">${p.name}</h2><p class="muted">${p.area}, ${p.city}</p><p>${p.desc}</p><div class="detail-grid"><div><b>${p.priceText}</b><br><span class="muted">Price</span></div><div><b>${p.beds||"—"}</b><br><span class="muted">Bedrooms</span></div><div><b>${p.sqft.toLocaleString()}</b><br><span class="muted">Sq.ft</span></div></div><button class="btn primary" onclick="document.getElementById('aiModal').classList.remove('hidden');document.getElementById('propertyModal').classList.add('hidden')">✦ Ask AI about this home</button>`;
 $("#propertyModal").classList.remove("hidden");
}
$$(".modal-close").forEach(b=>b.onclick=()=>b.closest(".modal").classList.add("hidden"));
$$(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.add("hidden")}));

$("#searchBtn").onclick=renderProperties;
$("#searchInput").addEventListener("input",renderProperties);
["cityFilter","typeFilter","purposeFilter"].forEach(id=>$("#"+id).addEventListener("change",renderProperties));
$("#resetFilters").onclick=()=>{["searchInput","cityFilter","typeFilter","purposeFilter"].forEach(id=>$("#"+id).value="");category="";$$(".category").forEach(x=>x.classList.toggle("active",x.dataset.cat===""));renderProperties()};
$$(".category").forEach(b=>b.onclick=()=>{category=b.dataset.cat;$$(".category").forEach(x=>x.classList.toggle("active",x===b));$("#typeFilter").value="";renderProperties()});
$("#savedCount").textContent=favorites.length;

function money(n){return "₹"+Math.round(n).toLocaleString("en-IN")}
function calcEMI(){
 let price=+$("#price").value, down=Math.min(+$("#down").value,price-100000), loan=Math.max(price-down,100000);
 let rate=+$("#rate").value/1200, months=+$("#years").value*12;
 let emi=rate?loan*rate*Math.pow(1+rate,months)/(Math.pow(1+rate,months)-1):loan/months;
 $("#priceOut").textContent=money(price);$("#downOut").textContent=money(down);$("#emi").textContent=money(emi);
 $("#emiDetail").textContent=`Loan ${money(loan)} · Total interest ${money(emi*months-loan)}`;
}
["price","down","rate","years"].forEach(id=>$("#"+id).addEventListener("input",calcEMI));calcEMI();

$("#budget").oninput=()=>{let b=+$("#budget").value;$("#budgetOut").textContent=money(b);$("#affordability").textContent=money(b/0.00815).replace(/000$/,"K").replace(/000000$/," Cr")};
$("#matchBtn").onclick=()=>{
 const q=$("#aiPreference").value.toLowerCase();
 let city=(q.match(/pune|mumbai|nagpur|bengaluru|hyderabad|chennai/)||[])[0];
 let nums=q.match(/(\d+)\s*(?:cr|crore|l|lakh)/);
 let budget=nums?parseFloat(nums[1])*(q.includes("cr")||q.includes("crore")?10000000:100000):Infinity;
 let result=properties.filter(p=>(!city||p.city.toLowerCase()===city)&&p.price<=budget).sort((a,b)=>b.match-a.match)[0]||properties[0];
 $("#matchResult").innerHTML=`<b>${result.name}</b> · ${result.city}<br><span class="muted">${result.match}% match · ${result.priceText} · ${result.beds||"Plot"} ${result.beds?"BHK":""}</span>`;
};

const translations={
 en:{navExplore:"Explore",navTools:"Smart Tools",navCalendar:"Calendar",navAbout:"About",heroText:"Discover verified-style listings, compare properties, estimate EMIs and plan visits — all in one beautiful experience.",searchPlaceholder:"Search city, locality or property..."},
 hi:{navExplore:"प्रॉपर्टी",navTools:"स्मार्ट टूल्स",navCalendar:"कैलेंडर",navAbout:"हमारे बारे में",heroText:"प्रॉपर्टी खोजें, तुलना करें, EMI जानें और विज़िट प्लान करें — एक ही जगह।",searchPlaceholder:"शहर या प्रॉपर्टी खोजें..."},
 mr:{navExplore:"मालमत्ता",navTools:"स्मार्ट टूल्स",navCalendar:"कॅलेंडर",navAbout:"आमच्याबद्दल",heroText:"प्रॉपर्टी शोधा, तुलना करा, EMI जाणून घ्या आणि भेटीचे नियोजन करा.",searchPlaceholder:"शहर किंवा प्रॉपर्टी शोधा..."},
 ml:{navExplore:"പ്രോപ്പർട്ടി",navTools:"സ്മാർട്ട് ടൂളുകൾ",navCalendar:"കലണ്ടർ",navAbout:"ഞങ്ങളെക്കുറിച്ച്",heroText:"പ്രോപ്പർട്ടികൾ കണ്ടെത്തുകയും താരതമ്യം ചെയ്യുകയും EMI കണക്കാക്കുകയും സന്ദർശനങ്ങൾ പ്ലാൻ ചെയ്യുകയും ചെയ്യാം.",searchPlaceholder:"നഗരം അല്ലെങ്കിൽ പ്രോപ്പർട്ടി തിരയുക..."},
 ta:{navExplore:"சொத்துகள்",navTools:"ஸ்மார்ட் கருவிகள்",navCalendar:"காலண்டர்",navAbout:"எங்களைப் பற்றி",heroText:"சொத்துகளைத் தேடி, ஒப்பிட்டு, EMI கணக்கிட்டு, பார்வைகளைத் திட்டமிடுங்கள்.",searchPlaceholder:"நகரம் அல்லது சொத்தைத் தேடுங்கள்..."}
};
$("#language").onchange=e=>{let t=translations[e.target.value];$$("[data-i18n]").forEach(el=>el.textContent=t[el.dataset.i18n]||el.textContent);$$("[data-i18n-placeholder]").forEach(el=>el.placeholder=t[el.dataset.i18nPlaceholder]||el.placeholder)};

$("#themeBtn").onclick=()=>{let dark=document.documentElement.getAttribute("data-theme")==="light";document.documentElement.setAttribute("data-theme",dark?"":"light");localStorage.setItem("nivasaTheme",dark?"dark":"light");$("#themeBtn").textContent=dark?"☾":"☀"};
if(localStorage.getItem("nivasaTheme")==="light"){$("#themeBtn").click()}

$("#aiOpen").onclick=()=>$("#aiModal").classList.remove("hidden");
function aiReply(q){
 q=q.toLowerCase();let answer;
 if(q.includes("emi")||q.includes("afford")) answer="For a ₹60,000 monthly EMI at around 8.5% for 20 years, a loan of roughly ₹70 lakh is a useful planning reference. Use the EMI calculator for a precise estimate.";
 else if(q.includes("pune")) answer="For Pune, explore Baner and Wagholi in this demo. Skyline Villa is the highest AI-match property currently listed.";
 else if(q.includes("rent")) answer="You can filter Rent from the marketplace. Metro Studio and Palm Grove House are demo rental listings.";
 else answer="I can help with EMI planning, Pune properties, rentals, and using the marketplace. This demo uses local JavaScript logic rather than a paid AI API.";
 return answer;
}
function sendChat(){let input=$("#chatInput"),q=input.value.trim();if(!q)return;$("#chat").insertAdjacentHTML("beforeend",`<div class="chat-bubble user">${q}</div><div class="chat-bubble bot">${aiReply(q)}</div>`);input.value="";$("#chat").scrollTop=$("#chat").scrollHeight}
$("#chatSend").onclick=sendChat;$("#chatInput").addEventListener("keydown",e=>{if(e.key==="Enter")sendChat()});

let recognition;
$("#voiceBtn").onclick=()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){alert("Voice search is not supported in this browser. Try Chrome or Edge.");return}
 recognition=new SR();recognition.lang=$("#language").value==="hi"?"hi-IN":$("#language").value==="mr"?"mr-IN":"en-IN";
 recognition.onresult=e=>{$("#searchInput").value=e.results[0][0].transcript;renderProperties()};recognition.start();
};

let current=new Date(), selected=new Date();const events=JSON.parse(localStorage.getItem("nivasaEvents")||"{}");
function dateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function renderCalendar(){
 $("#monthTitle").textContent=current.toLocaleDateString("en-US",{month:"long",year:"numeric"});
 const first=new Date(current.getFullYear(),current.getMonth(),1).getDay(), total=new Date(current.getFullYear(),current.getMonth()+1,0).getDate(),today=dateKey(new Date());
 let html="";for(let i=0;i<first;i++)html+=`<button class="day empty"></button>`;
 for(let d=1;d<=total;d++){let date=new Date(current.getFullYear(),current.getMonth(),d),key=dateKey(date);html+=`<button class="day ${key===today?"today":""} ${key===dateKey(selected)?"selected":""}" data-date="${key}">${d}${events[key]?.length?'<sup>•</sup>':""}</button>`}
 $("#calendarDays").innerHTML=html;$$(".day[data-date]").forEach(b=>b.onclick=()=>{selected=new Date(b.dataset.date+"T12:00:00");renderCalendar();renderEvents()});
}
function renderEvents(){let key=dateKey(selected);$("#selectedDate").textContent=selected.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"});let list=events[key]||[];$("#eventList").innerHTML=list.length?list.map((e,i)=>`<div class="event-item">📍 ${e} <button style="float:right;border:0;background:none;color:var(--muted);cursor:pointer" onclick="deleteEvent(${i})">×</button></div>`).join(""):"<p class='muted'>No visits planned for this date.</p>"}
window.deleteEvent=i=>{let key=dateKey(selected);events[key].splice(i,1);if(!events[key].length)delete events[key];localStorage.setItem("nivasaEvents",JSON.stringify(events));renderCalendar();renderEvents()}
$("#addEvent").onclick=()=>{let v=$("#eventInput").value.trim();if(!v)return;let key=dateKey(selected);events[key]=events[key]||[];events[key].push(v);localStorage.setItem("nivasaEvents",JSON.stringify(events));$("#eventInput").value="";renderCalendar();renderEvents()};
$("#prevMonth").onclick=()=>{current.setMonth(current.getMonth()-1);renderCalendar()};$("#nextMonth").onclick=()=>{current.setMonth(current.getMonth()+1);renderCalendar()};renderCalendar();renderEvents();

$("#menuBtn").onclick=()=>{$(".nav-links").style.display=$(".nav-links").style.display==="flex"?"none":"flex"};
window.addEventListener("scroll",()=>{$("#progress").style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+"%"});
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});$$(".reveal").forEach(x=>observer.observe(x));
