let currentRow = 0;
let currentCol = 0;
let selected = [];
const answers = ["coming","common","comply","copper","corner","costly","county","couple","course","covers","create","credit","crisis","custom","damage","danger","dealer","debate","decade","decide","defeat","defend","define","degree","demand","depend","deputy","desert","design","desire","detail","detect","device","differ","dinner","direct","doctor","dollar","domain","double","driven","driver","during","easily","eating","editor","effect","effort","eighth","either","eleven","emerge","empire","employ","enable","ending","energy","engage","engine","enough","ensure","entire","entity","equity","escape","estate","ethnic","exceed","except","excess","expand","expect","expert","export","extend","extent","fabric","facing","factor","failed","fairly","fallen","family","famous","father","fellow","female","figure","filing","finger","finish","fiscal","flight","flying","follow","forced","forest","forget","formal","format","former","foster","fought","fourth","French","friend","future","garden","gather","gender","german","global","golden","ground","growth","guilty","handed","handle","happen","hardly","headed","health","height","hidden","holder","honest","impact","import","income","indeed","injury","inside","intend","intent","invest","island","itself","jersey","joseph","junior","killed","labour","latest","latter","launch","lawyer","leader","league","leaves","legacy","length","lesson","letter","lights","likely","linked","liquid","listen","little","living","losing","lucent","luxury","mainly","making","manage","manner","manual","margin","marine","marked","market","martin","master","matter","mature","medium","member","memory","mental","merely","merger","method","middle","miller","mining","minute","mirror","mobile","modern","modest","module","moment","morris","mostly","mother","motion","moving","murder","museum","mutual","myself","narrow","nation","native","nature","nearby","nearly","nights","nobody","normal","notice","notion","number","object","obtain","office","offset","online","option","orange","origin","output","oxford","packed","palace","parent","partly","patent","people","period","permit","person","phrase","picked","planet","player","please","plenty","pocket","police","policy","prefer","pretty","prince","prison","profit","proper","proven","public","pursue","raised","random","rarely","rather","rating","reader","really","reason","recall","recent","record","reduce","reform","regard","regime","region","relate","relief","remain","remote","remove","repair","repeat","replay","report","rescue","resort","result","retail","retain","return","reveal","review","reward","riding","rising","robust","ruling","safety","salary","sample","saving","saying","scheme","school","screen","search","season","second","secret","sector","secure","seeing","select","seller","senior","series","server","settle","severe","sexual","should","signal","signed","silent","silver","simple","simply","single","sister","slight","smooth","social","solely","sought","source","soviet","speech","spirit","spoken","spread","spring","square","stable","status","steady","stolen","strain","stream","street","stress","strict","strike","string","strong","struck","studio","submit","sudden","suffer","summer","summit","supply","surely","survey","switch","symbol","system","taking","talent","target","taught","tenant","tender","tennis","thanks","theory","thirty","though","threat","thrown","ticket","timely","timing","tissue","toward","travel","treaty","trying","twelve","twenty","unable","unique","united","unless","unlike","update","useful","valley","varied","vendor","versus","victim","vision","visual","volume","walker","wealth","weekly","weight","wholly","window","winner","winter","within","wonder","worker","wright","writer","yellow"]

let timeDif = new Date().getTime() - new Date("02/16/2022").getTime();
let dayDif = Math.floor(timeDif / (1000 * 3600 * 24));

let todaysWord = answers[dayDif];

function generateBoard () {
  let board = document.querySelectorAll('.game')[0];
  for(let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for(let k = 0; k < 6; k++) {
      let box = document.createElement('div');
      box.classList.add('box');
      box.id = `${i}-${k}`;
      row.appendChild(box);
    }
    board.appendChild(row);
  }
}

function matchRow(row) {
  let w = todaysWord.toUpperCase().split('');
  for(let i = 0; i < 6; i++) {
    let l = selected[i];
    if(w[i]==l) document.getElementById(`${row}-${i}`).classList.add('green');
    else if(w.includes(l)) document.getElementById(`${row}-${i}`).classList.add('yellow');
    else document.getElementById(`${row}-${i}`).classList.add('gray');
  }
}

function watch(e){
  let keynum = e.keyCode;
  console.log(currentRow, currentCol);
  
  if(keynum == 13) {
    if(selected.length == 6 && answers.includes(selected.join('').toLowerCase())) {
      if(selected.join('')==answers) {
        matchRow(currentRow);
      } else {
        matchRow(currentRow);
        selected = [];
        currentRow++;
        currentCol = 0;
      }
    }
  } else if (keynum >= 65 && keynum <= 90) {
    if(selected.length < 6) {
      selected.push(String.fromCharCode(keynum));
      document.getElementById(`${currentRow}-${currentCol}`).innerHTML = String.fromCharCode(keynum);
      currentCol+=1;
    }
  } else if(keynum == 8) {
    selected.splice(selected.length-1, 1);
    document.getElementById(`${currentRow}-${currentCol-1}`).innerHTML = '';
    currentCol = currentCol-1;
  } else {
    e.preventDefault();
  }
}

window.onkeydown = watch;

window.onload = () => generateBoard();