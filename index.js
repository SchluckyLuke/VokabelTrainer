const changeLangBtn = document.getElementById("changeLangBtn");
const enterVocInput = document.getElementById("enterVocInput");
const translateVoc = document.getElementById("translateVoc");
const returnChecked = document.getElementById("returnChecked");
const returnRightAnswer = document.getElementById("returnRightAnswer");
let lang = "f";

let vocs = {
    /* "slightly": "ein bisschen", "to trust sb.": "jmdm. vertrauen", "series": "(TV-/Streaming-)Serie", "anxious": "verunsichert, nerv\u00f6s", "confident": "selbstbewusst", "to meet up with sb.": "sich mit jmdm. treffen", "to fit in (with sb.)": "hineinpassen, sich einf\u00fcgen\n(in eine Gruppe)", "to please sb.": "jmdn.zufriedenstellen,\njmdm. gefallen", "to have sth. in common with sb.": "etw. mit jmdm. gemeinsam\nhaben", "to get involved (in sth.)": "sich (auf etw.) einlassen\n(bei etw.) mitmochen,", "in return": "im Gegenzug", "point of view": "Sichtweise, Einstellung", "to take sb.'s feelings into account": "auf jmds. Gef\u00fchle R\u00fccksicht\nnehmen", "to agree on sth.": "sich auf etw. einigen", "expression": "Ausdruck, Wendung", "to keep in touch with sb.": "bleiben\nmit jmdm. in Kontakt", "to hang out with sb.": "mit jmdm. abh\u00e4ngen", "to catch up with sb.": "sich auf den neuesten\nStand bringen, mit jmdm.\nNeuigkeiten austauschen", "to turn on sb.": "sich gegen jmdn. wenden", "to let sb. down": "jmdn. entt\u00e4uschen/im Stich\nlassen", "to stand by sb.": "zu jmdm. stehen", "to calm sb. down": "jmdn. beruhigen", "to cheer sb. up": "jmdn. aufheitern", "to depend on sb.": "sich auf jmdn. verlassen", "to gossip about sb.": "\u00fcber jmdn. tratschen", "to keep a secret": "ein Geheimnis bewahren", "privacy": "Privatsph\u00e4re", "to give sb. some advice": "jmdm. einen Rat erteilen", "honest": "ehrlich", "to make/keep a promise": "ein Versprechen geben/\nhalten", "to make a fool of yourself": "sich l\u00e4cherlich machen/\nblamieren", "That's none of your business.": "Das geht dich nichts an.", "to talk sb. out of sth.": "jmdm. etw. ausreden", "to make a fuss": "machen\nein Theater/ein Getue", "to solve a problem": "ein Problem l\u00f6sen", "addicted": "abh\u00e4ngig, s\u00fcchtig", "leaflet": "Brosch\u00fcre", "to tell on sb.": "jmdn. verraten/verpetzen", "skill": "Fertigkeit, F\u00e4higkeit, Geschick", "major": "Haupt -...; wichtig; \nhier: grundlegend", "to be supportive/to support sb.": "jmdn. unterst\u00fctzen", 
    "to put sb.'s needs before your own": "jmds. Bed\u00fcrfnisse \u00fcber die\neigenen stellen", "to go out of your way for sb.": "sich f\u00fcr jmdn. besondere\nM\u00fche geben/ins Zeug legen", "to maintain a strong bond": "eine starke Beziehung aufrechterhalten", "thoughtful": "aufmerksam, f\u00fcrsorglich", "to care for sb.": "hier: jmdn. gernhaben", "paragraph": "Absatz", "to bully sb.": "jmdn. schikanieren", "to provide sth.": "etw.zur Verf\u00fcgung stellen", "to get used to sth.": "sich an etw. gew\u00f6hnen", "hostel": "hier: Wohn-/Sch\u00fclerheim", "isle": "(kleine) Insel", "to make sb.'s life a misery": "jmdm. das Leben zur Qual \nmachen", "to board": "im Internat wohnen", "staff": "Personal, Angestellte", "to be on duty": "Dienst haben", "nightmare": "Albtraum", "to look forward to sth.": "sich auf etw. freuen", "huge": "riesig, gewaltig", "harbour": "Hafen", "dizzy": "schwindlig", "prison": "Gef\u00e4ngnis", "abroad": "im Ausland", "to imagine sth.": "sich etw. vorstellen", "school exchange": "Sch\u00fcleraustausch", "to take part in sth.": "an etw. teilnehmen", "to learn a trade": "ein Handwerk/einen Beruf \nerlernen", "given name": "Vorname", "to work in medicine": "im medizinischen Bereich\narbeiten", "acquaintance": "Bekannte/r", "couple": "Paar", "enemy": "Feind/in", "bride/groom": "Braut/Br\u00e4utigam", "mate": "Kumpel, Freund/in", "pal": "Kumpel, Freund/in", "relative": "Verwandte/r", "sibling": "Geschwister", "stranger": "Fremde/r", "to get to know about sth.": "\u00fcber etw. erfahren,\netw. kennenlernen", "to look similar": "\u00e4hnlich aussehen", "rather": "ziemlich, eher", "quite": "ziemlich", "employee": "Angestellte/r, \nArbeitnehmer/in", "to grab sth.": "sich etw. schnappen", "behaviour": "Verhalten", "current": "momentan, aktuell", "choice": "Entscheidung, (Aus-)Wahl", "grateful": "dankbar", "reliable": "verl\u00e4sslich, zuverl\u00e4ssig", "kind": "liebensw\u00fcrdig, freundlich", "patient": "geduldig", "to reflect on sth.": "\u00fcber etw. nachdenken/reflektieren", "to take a look at sth.": "sich etw. ansehen", "challenge": "Herausforderung",
    "bar chart": "Balken-/S\u00e4ulendiagramm", "to publish sth.": "etw.ver\u00f6ffentlichen/\nherousbringen", "leisure activity": "Freizeitbesch\u00e4ftigung", "u sed to do sth.": "etw. fr\u00fcher (in der\nVergangenheit)\ngetan haben", "to relax": "(sich) entspannen", "to affect sb./sth.": "sich auf jmdn./etw.\nauswirken", "time off": "Auszeit, Freizeit", "random": "wah llos, willk\u00fcrlich", "to sleep in": "(sich) ausschlafen", "to listen in on sb.": "jmdn. belauschen", "to comp lain about sth.": "sich \u00fcber etw. beschweren", "to wonder": "sich fragen", "move": "hier: (Schach-)Zug", "to be/get distracted": "abgelenkt werden", "to give sb. dark looks": "jmdn. b\u00f6se anschouen", "to lose focus": "die Konzentration verlieren", "knowledge": "Wissen", "equipment": "Ausr\u00fcstung", "expertise": "Sochkenntnis, Kompetenz", "prompt": "Aufgabenstellung, Hinweis,\nAnleitung", "challenging": "herousfordernd", "punting": "Stechkahn fahren", "to get stuck": "feststecken", "mud": "Schlamm", "to let go of sb./sth.": "jmdn./etw. loslassen", "to rescue sb.": "jmdn. retten", "by the time": "hier: als", "to reach sb./sth.": "jmdn./etw. erreichen", "to slide down": "herun terrutschen", "to notice sth.": "etw. bemerken", "to keep sth. in mind": "etw. bedenken", "to get/catch sb.'s attention": "jmds. Aufmerksamkeit\nerregen", "to give sth. a personal touch": "etw.eine pers\u00f6n liche Note\nverleihen", "silent": "still; stumm", "ill": "krank", "on special occasions": "zu besonderen Anldssen", "diet": "Ern\u00e4hrung(sweise)", 
    "after-school dub": "freiwilliger Nachmittagsunterricht", "a wide range of": "eine gro\u00dfe Auswahl von,\nein breites Spektrum an", "robotics": "Robotertechnik", "foreground/background": "Vordergrund/Hintergrund", "upper/lower/left/right comer": "obere/untere/linke/rechte\nEcke", "to appear": "oussehen, scheinen", "focused": "konzentriert", "cheerful": "fr\u00f6hlich, heiter", "pleased": "zufrieden, erfreut", "to sponsor sb./sth.": "jrndn./etw. sponsern", "to make use of sth.": "von etw. Gebrauch machen", "panel discussion": "Podiumsdiskussion", "representative": "Vertreter/in", "to suggest sth.": "etw. vorschlogen", "benefit": "Nutzen, Vorteil", "athletics": "Leichtathletik", "STEM: science, technology, engineering, mathematics": "MINT (Mathematik, Infarmatik, Naturwissenschaften, Technik)", "to be in favour of sth.": "f\u00fcr etw. sein", "expected": "erwartet", "experience": "Erfohrung, Erlebnis", "to concentrate on sth.": "sich auf etw. konzentrieren", "satisfying": "zufriedenstellend,\nbefriedigend", "importance": "Wichtigkeit", "percentage": "Prozentanteil", "to be allowed to do sth.": "etw. d\u00fcrfen; es ist einem\nerlaubt, etw. zu tun", "entertoinment": "Unterhaltung: \nUnterhaltungs -...", "device": "Ger\u00e4t", "in fact": "sogar, genau genommen,\ntats\u00e4chlich", "to examine sth.": "etw. untersuchen", "among": "unter", "on average": "im Durchschnitt", "at least": "mindestens", "source": "Quelle", "to inspire sb.": "imdn. inspirieren", "increasingly": "zunehmend", "significant": "wichtig, signifikant", "to run an errand": "eine Besorgung machen,\netw. erledigen", "figure": "Zahl, Betrag, Wert", "to socialise (with sb.)": "mit jmdm. Kontakt kn\u00fcpfen/pflegen", "to improve sth.": "etw. verbessern", "exhibition": "Ausstellung",
    "to sort sth.": "etw. sortieren/einordnen", "caption": "Bildtext, Bildunterschrift", "to make fun of sb./sth.": "sich \u00fcber jmdn./etw. lustig\nmachen", "point": "Pointe, Sinn", "I don't get it.": "Ich versteh's/kapier's nicht.", "to have a bigger say about sth.": "bei etw. ein gr\u00f6\u00dferes\nMitspracherecht haben", "outdated": "\u00fcberhalt, veraltet", "primary school": "Volksschule", "essential": "essenziell, wesentlich", "strict": "streng", "understanding": "verst\u00e4ndnisvoll", "punctual": "p\u00fcnktlich", "to argue sth.": "etw. begr\u00fcnden", "besides": "au\u00dferdern, \u00fcberdies", "for instance": "zum Beispiel", "whether": "ob", "to go along with sb./sth.": "jmdm./etw. zustimmen,\nmit etw. einhergehen", "link": "Verbindung", "mostly": "haupts\u00e4chlich, meistens", "to consist of sth.": "aus etw. bestehen", "therefore": "deshalb, deswegen", "to require sb. to do sth.": "etw. von jmdm. verlangen", "no matter how/who/what/ ...": "egal, wie/wer/was ...", "to show (sth.) off": "angeben (mit etw.)", "to go together": "zusammenpassen", "to punish": "bestrafen", "to expect sb. to do sth.": "von jmdm. erwarten,\netw. zu tun", "to ha ve access to sth.": "Zugang zu etw.haben", "to comment on sth.": "etw. kommentieren, einen\nKommentar zu etw.\nabgeben", "o come across sth.": "auf etw sto\u00dfen,\n\u00fcber etw. stolpem", "to throw the dice": "w\u00fcrfeln", "to toke turns doing sth.": "sich bei etw. abwechse ln,\netw. obwechseind tun", "IT: information \ntechnology": "Informatik", "equipment": "Ausstottung, Ausr\u00fcstung", "fleld trip": "Exkursion", "appearance": "Ausschen", "a handsome man": "ein gutaussehender Mann", "cute": "s\u00fc\u00df, niedlich", "chubby": "pummelig, dicklich", "frai": "gebrechlich, schwach", "easy-going": "locker, unkompliziert", "rude": "unh\u00f6flich", "bossy": "herrisch, rechthaberisch", "brave": "mutiq", "mean": "gemein", "nasty": "scheu \u00dflich; fies", "selfish": "egoistisch", "outgoing": "kontaktfreudig,\naufgeschlossen", "bad-tempered": "\u00fcbellaunig, grantig", "proud": "stolz", "disappointed": "enttduscht", "helpless": "hilflos", "furious": "zornig, rasend", "to be fed up with sth.": "etw. satthaben,\nvon etw. die Nase\nvoll haben", "annoyed": "ver\u00e4rgert, genervt", "frightened": "ver\u00e4ngstigt", "terrifled": "sehr verdngstigt", "quality": "Eigenschaft, Beschaffenheit, Qualit\u00e4t", "valuable": "wertvoll", "useless": "nutzlos", "disgusting": "ekehaft", "mute": "stumm", 
    "freezing": "eiskalt", "chill": "frisch, k\u00fchl", "ancient": "antik, (ur)alt", "old-fashioned": "altmodisch", "to attend sth.": "etw. besuchen,\nan etw. teilnehmen", "to save/share a file": "eine Datei abspeichern/\nteilen", "to reboot the computer": "den Computer neu starten", "to mute/unmute the microphone": "Das Mikrophon ein-/ausschalten", "to flx. sth.": "etw. beheben/reparieren/\nin Ordnung bringen", "flickering": "flimmemd, flackernd", "to blur the background": "den Hintergrund\nunkenntlich machen", "absolutely": "vollkommen, total (zur\nVerst\u00e4rkung der Aussage)", "not at all": "\u00fcberhaupt nicht", "hardly": "koum", 
    "such a ... / such an ...": "so ein/e ... , solch ein/e ...", "education": "Bildung, Ausbildung", "curriculum": "Lehrplan", "to be divided into sth": "in etw. aufgeteilt/unterteilt \nsein", "secondary school": "Mittelschule, Oberstufe", "form": "Klasse, Jahrgang", "depending on ...": "abh\u00e4ngig von ... , je nach ...", "law": "Rechtswissenschaft, Jus; \nGesetz, Recht", "politics": "hier: politische Bildung", "entrance exam": "Aufnahmepr\u00fcfung", "confusing": "verwirrend", "boarding school": "Internat", "regulation": "Vorschrift", "elementary school": "Volksschule", "high school": "Mittelschule, Oberstufe", "grade": "ahrgang, Klasse, Schulnote", "in addition to sth.": "neben etw. zus\u00e4tzlich zu \netw.", "core su bject": "Kernfach, Hauptfach", "sociol studies": "Sozialkunde", "optional": "wahlweise, freiwillig", "elective": "Wah Ifach/Wahlpflichtfach", "apart from sth.": "abgesehen von etw.", "extracurricular activity": "unverbindliche \u00dcbung", "debating dub": "Debattierklub", "track and fleld": "Leichtathletik", "to graduate": "seinen Abschluss machen", "SAT: Scholastic Aptitude/Assessment Test": "Studienberechtigungs-pr\u00fcfung (in den USA)", "politician": "Politiker/in", "to compete with sb.": "sich mit jmdm. messen,\nmit jmdm. konkurrieren/\nin Wettbewerb treten", "preparation": "Vorbereitung", "former": "ehemalige/r/s", "to instruct sb.": "jmdn.unterweisen/\nausbilden", "to register sb./sth.": "jmdn./etw. eintragen/\n(an)melden", "to be absent": "feh len, abwesend sein", "researcher": "Forscher/in", "to receive sth.": "etw. erhalten", "to lead sth.": "etw. onf\u00fchren/leiten", "to develop sth.": "etw. entwickeln", "keen": "begeistert, leidenschoftlich", "to do some revision": "den (Lern-)Stoff\nwiederholen", "to achieve sth.": "etw. erreichen", "comparatively large": "vergleichsweise gro\u00df", "in one go": "auf einmal, auf einen Sitz", "to limit sth.": "etw. beschr\u00e4nken", "stem": "(Wort-)Stamm", "educational": "Bildungs -...; schulisch; \nerzieherisch", "to qualify (for sth.)": "sich (f\u00fcr etw.) qualifizieren", "vocational school": "berufsbildende Schule", "comprehensive school": "Gesamtschule (ab 11 Jahren)", "selecti ve school": "Schule, die ihre Sch\u00fcler/-\ninnen ausw\u00e4hlen kann", "caretaker/janitor": "Housmeister/in", 
    "headteacher/principal": "Direktor/in", "form teacher/homeroom": "Klassenvorstand/Klassenvorst\u00e4ndin", "to cram for an exam": "f\u00fcr eine Pr\u00fcfung b\u00fcffeln/\npauken", "to revise for an exam": "f\u00fcr eine Pr\u00fcfung lernen", "to pass a test/an exam": "einen Test/eine Pr\u00fcfung\nbestehen", "to take an exam": "eine Pr\u00fcfung machen", "to sign up for sth.": "sich f\u00fcr etw. anmelden", "hard-working": "flei\u00dfig", "ambitious": "ehrgeizig", "responsible": "hier: verantwortungs-\nbewusst", "to be eager to leam": "wissbegierig sein", "capable": "f\u00e4hig, kompetent" */

    // "schola": "Schule", "disc\u00edpulus": "Sch\u00fcler", "esse": "sein", "disc\u00edpula": "Sch\u00fclerin", "et": "und, auch", "am\u0101re": "lieben", "intr\u0101re": "eintreten", "cl\u0101m\u0101re": "rufen, schreien", "puella": "M\u00e4dchen", "salv\u0113!/ salv\u0113te!": "sei/seid gegr\u00fc\u00dft!", "magistra": "Lehrerin", "gaud\u0113re": "sich freuen", "vid\u0113re": "sehen", "am\u012bca": "Freundin", "h\u012bc": "hier", "novus,-a,-um": "neu, jung", "n\u014dn": "nicht", "sed": "aber, (nach Verneinung) sondern", "spect\u0101re": "betrachten, schauen", "s\u014dlum": "nur", "mon\u0113re": "(er)mahnen, warnen", "err\u0101re": "(sich) irren", "h\u016bm\u0101nus,-a,-um": "menschlich", "tac\u0113re": "schweigen", "bonus,-a,-um, b\u011bn\u011b": "gut", "ibi": "dort", "rid\u0113re": "lachen, auslachen", "filia": "Tochter", "satis": "genug", "\u00edterum": "wieder, ein zweites Mal", "val\u0113!/ val\u0113te!": "leb/lebt wohl!", "respond\u0113re": "antworten"

}

for(let i = 0; i <= localStorage.length; i++){
    vocs[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
}
delete vocs.null;
console.log(vocs);

let vocsUsed = []

// Länge des Objekts
const vocsLength = Object.keys(vocs).length;

let ranVoc;
let ranVocIndex;

function onEnterCheck(event){
    if(event.key == "Enter"){
        checkVoc();
    }
}

function onEnterNext(event){
    if(event.key == "Enter"){
        setRanVoc();
    }
}

function setRanVoc(){
    // Zufälligen Key auswählen
    document.removeEventListener("keydown", onEnterCheck);
    do{
        if(vocsUsed.length >= vocsLength){
            document.body.innerHTML = "FERTIG!";
            document.body.style.color = "white";
            vocsUsed = [];
            document.addEventListener("keydown", event => {
                if(event.key == "Enter"){
                    window.location.href = "index.html";
                }
            })
        }
        else{
            if(lang == "f"){
                ranVocIndex = Math.floor(Math.random() * vocsLength); 
                ranVoc = Object.keys(vocs)[ranVocIndex];
            }
            else{
                ranVocIndex = Math.floor(Math.random() * vocsLength);
                ranVoc = Object.values(vocs)[ranVocIndex];
            }
        }
    }while(vocsUsed.includes(ranVoc) && vocsUsed.length != vocsLength);

    translateVoc.textContent = ranVoc;

    document.addEventListener("keydown", onEnterCheck);

    enterVocInput.value = "";
    returnChecked.textContent = "";
    returnRightAnswer.textContent = "";
}

function checkVoc(){
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    returnChecked.classList.remove("right", "wrong");
    if(lang == "f"){
        if(enterVocInput.value == vocs[ranVoc]){
            returnChecked.textContent = "Richtig!";
            returnChecked.classList.add("right");
            vocsUsed.push(ranVoc);
        }
        else{
            returnChecked.textContent = "Falsch...";
            returnRightAnswer.textContent = vocs[ranVoc]
            returnChecked.classList.add("wrong");
        }
    }
    else{
        if(enterVocInput.value == getKeyByValue(vocs, ranVoc)){
            returnChecked.textContent = "Richtig!";
            returnChecked.classList.add("right");
            vocsUsed.push(ranVoc);
        }
        else{
            returnChecked.textContent = "Falsch";
            returnRightAnswer.textContent = getKeyByValue(vocs, ranVoc);
            returnChecked.classList.add("wrong");
        }
        
    }

    function skipVoc(event){
        if(event.key === "ArrowRight"){
            vocsUsed.push(ranVoc);
            setRanVoc();
        }
        else if(event.key === "Enter"){
            setRanVoc();
        }
        document.removeEventListener("keydown", skipVoc)
    }

    document.removeEventListener("keydown", onEnterCheck);
    document.addEventListener("keydown", skipVoc);
}

function beforeSetRanVoc(){
    document.addEventListener("keydown", event => {
        if(event.key == "Enter"){
            setRanVoc();
        }
    })
    
}

function startTrainer(){
    setRanVoc()
}

function changeLanguage(){
    lang = lang == "d" ? "f": "d";
    changeLangBtn.textContent = lang == "d" ? "Französisch -> Deutsch": "Deutsch -> Französisch";
}