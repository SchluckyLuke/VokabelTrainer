const changeLangBtn = document.getElementById("changeLangBtn");
const enterVocInput = document.getElementById("enterVocInput");
const translateVoc = document.getElementById("translateVoc");
const returnChecked = document.getElementById("returnChecked");
const returnRightAnswer = document.getElementById("returnRightAnswer");
let lang = "f";

let vocs = {
    "la pi\u00e8ce": "das Zimmer", 
    "la chambre": "das Schlafzimmer", 
    "la cuisine": "die K\u00fcche", 
    "la salle \u00e0 manger": 
    "das Esszimmer", 
    "la salle de bains": 
    "das Badezimmer", 
    "les toilettes": "die Toilette", 
    "le bureau": "das Arbeitszimmer,\nauch: der Schreibtisch", 
    "le garage": "die Garage", 
    "le salon": "das Wohnzimmer", 
    "le s\u00e9jour": "hier: das Wohnzimmer", 
    "le jardin": "der Garten", 
    "la piscine": "hier: der Swimmingpool", 
    "la terrasse": "die Terrasse", 
    "la chemin\u00e9e": "der Kamin", 
    "le toit": "das Dach", 
    "le grenier": "der Dachboden", 
    "l'entr\u00e9e": "der Eingang, das Vorzimmer,\nauch: die Vorspeise", 
    "le d\u00e9barras": "der Abstellraum", 
    "la cave": "der Keller", 
    "l'escalier": "die Treppe, die Stiege", 
    "ranger qc.": "etw. aufraumen", 
    "l'\u00e9vier": "die Sp\u00fcle, die Abwasch", 
    "le canap\u00e9": "die Couch", 
    "la machine \u00e0 laver": "die Waschmaschine", 
    "la cuisini\u00e8re (\u00e0 gaz / \u00e9lectrique)": "der Herd (Gas-/ Elektro-)", 
    "le fauteuil": "der (Polster-)Sessel", 
    "le frigo": "der K\u00fchlschrank", 
    "le porte-manteau": "der Kleiderst\u00e4nder", 
    "le four": "der Ofen, das Backrohr", 
    "le lavabo": "das Waschbecken", 
    "le lave-vaisselle": "der Geschirrsp\u00fcler", 
    "le logement": "die Unterkunft", 
    "bruyant/-e": "laut, l\u00e4rmend", 
    "sombre": "dunkel, finster", 
    "tu \u00e9tais": "du warst", 
    "si": "hier: so", 
    "difficile": "schwierig", 
    "la buanderie": "die Waschk\u00fcche,\nder Trockenraum", 
    "le meuble": "das M\u00f6belst\u00fcck", 
    "spacieux/-se": "ger\u00e4umig", 
    "la fen\u00eatre": "das Fenster", 
    "la lampe": "die Lampe", 
    "le placard": "der Kasten", 
    "la table de nuit": "das Nachtk\u00e4stchen", 
    "au-dessus de": "\u00fcber", 
    "le masque": "die Maske", 
    "le tableau": "hier: das Gem\u00e4lde", 
    "donner sur qc.": "zu etw. hin liegen,\nausgerichtet sein", 
    "ensoleill\u00e9/-e": "sonnig", 
    "d\u00e9m\u00e9nager": "umziehen", 
    "l'\u00e9tag\u00e8re": "das Regal", 
    "l'horloge": "die Uhr", 
    "au pied de": "am Fu\u00df von", 
    "le tapis": "der Teppich", 
    "par terre": "am Boden", 
    "se partager qc.": "sich etw. teilen", 
    "l'armoire": "der Kleiderkasten", 
    "le lit superpos\u00e9": "das Stockbett", 
    "le rideau": "der Vorhang", 
    "pr\u00e9parer qc.": "hier: etw. zubereiten", 
    "nettoyer qc.": "etw. putzen, reinigen", 
    "passer l'aspirateur": "staubsaugen", 
    "sortir qn./qc.": "jdn./etw. hinausbringen, auch: ausgehen", 
    "la poubelle": "der M\u00fclleimer, der Mistk\u00fcbel", 
    "l'aide": "die Hilfe", 
    "ne ... pas encore": "noch nicht", 
    "(faire) sortir le chien": "mit dem Hund Gassi gehen", 
    "la responsabilit\u00e9": "die Verantwortung", 
    "\u00e0 part": "abgesehen von, au\u00dfer", 
    "le travail menager": "die Hausarbeit", 
    "une fois par": "einmal pro", 
    "chaque": "jeder/jede/jedes", 
    "tous/toutes": "alle, hier: jeden zweiten Tag", 
    "arroser qc.": "etw. gie\u00dfen", 
    "laver qc.": "etw. waschen", 
    "la vaisselle": "das Geschirr", 
    "le linge": "die W\u00e4sche", 
    "repasser qc.": "etw. b\u00fcgeln", 
    "mettre la table": "den Tisch decken", 
    "d\u00e9barrasser la table": "den Tisch abraumen", 
    "la vitre": "die Fensterscheibe", 
    "faire la poussi\u00e8re": "Staub wischen", 
    "l'animal domestique": "das Haustier", 
    "le cochon d'Inde": "das Meerschweinchen", 
    "le hamster": "der Hamster", 
    "le cochon": "das Schwein", 
    "la tortue": "die Schildkrote", 
    "le lapin": "das Kaninchen", 
    "la souris": "die Maus", 
    "la poule": "die Henne", 
    "justifier qc.": "etw. begr\u00fcnden", 
    "lequel/laquelle": "welcher/welche/welches", 
    "la petite annonce": "das Zeitungsinserat", 
    "en location": "zu vermieten", 
    "id\u00e9alement": "ideal", 
    "plac\u00e9/-e": "hier: gelegen", 
    "proche de": "nahe bei", 
    "lumineux/-se": "hell", 
    "\u00e9quip\u00e9/-e": "ausgestattet", 
    "le parquet": "der Parkettboden", 
    "le chauffe-serviette": "der Handtuchtrockner", 
    "s\u00e9par\u00e9/-e": "getrennt", 
    "la place de parking": "der Parkplatz", 
    "le sous-sol": "das Untergeschoss", 
    "la r\u00e9sidence": "hier: die Wohnanlage", 
    "r\u00e9cent/-e": "hier: neu", 
    "le commerce": "hier: das Gesch\u00e4ft", "\u00e0 proximit\u00e9 (de)": "in der Nahe von", "l'\u00e9tage": "das Stockwerk", "r\u00e9nov\u00e9/-e": "renoviert", "\u00eatre situ\u00e9/-e": "gelegen sein", "agr\u00e9able": "angenehm", "comprendre qc.": "hier: bestehen aus", "la cuisine am\u00e9nag\u00e9e": "die Einbauk\u00fcche", "le balcon": "der Balkon", "disposer de qc.": "\u00fcber etw. verf\u00fcgen", "meubl\u00e9/-e": "m\u00f6bliert", "le plafond": "die Decke (eines Zimmers)", "compos\u00e9/-e de": "bestehend aus", "dont": "hier: wovon", "ouvert/-e": "offen", "avoir besoin de qc.": "etw. brauchen", "vendre qc.": "etw. verkaufen", "louer qc.": "etw. mieten, vermieten", "immobilier/-\u00e8re": "Immobilien-", "le m\u00e8tre carr\u00e9": "der Quadratmeter", "le rez-de-chauss\u00e9e": "das Erdgeschoss", "l'affiche": "das Plakat, das Poster", "le coussin": "der Polster", "se maquiller": "sich schminken", "l'appart": "die Wohnung", "le probl\u00e8me": "das Problem", "le secret": "das Geheimnis", "la naissance": "die Geburt", "moderniser qc.": "etw. modernisieren", "\u00e0 l'int\u00e9rieur (de)": "im Inneren, innen", "le confort": "der Komfort", "enlever qc.": "etw. entfernen, auch: ein\nKleidungsst\u00fcck ausziehen", "le mur": "die Wand, die Mauer", "monter": "hinaufgehen, auch: einsteigen", "garder qc.": "bewahren, auch: halten", "en m\u00eame temps": "zur gleichen Zeit", "la queue": "die Warteschlange", "am\u00e9nager qc.": "etw. einrichten, ausstatten,\n\nl'am\u00e9nagement (m.)\n\nauch: umbauen", "le d\u00e9sordre": "die Unordnung", "la chambre d'amis": "das G\u00e4stezimmer", "\u00e0 deux pas": "wenige Schritte entfernt", "chacun/-e": "jeder/jede", "la part": "der Teil", "remplir qc.": "etw. f\u00fcllen", "vider qc.": "etw. leeren", "s'occuper de qc.": "sich um etw. k\u00fcmmern", "le sol": "der Boden", "rare": "selten", "\u00e9tendre qc.": "hier: etw. aufh\u00e4ngen", "d'un autre c\u00f4t\u00e9": "andererseits", "le bricolage": "das Heimwerken", "la facture": "die Rechnung", "le caddie": "der Einkaufswagen", "le retour": "hier: der R\u00fcckweg", "emmener qn.": "jdn. mitnehmen, hinbringen", "accompagner qn./qc.": "jdn./etw. begleiten", "le/la femme m\u00e9decin": "der/die Arzt/\u00c4rztin", "le/la dentiste": "der/die Zahnarzt/Zahn\u00e4rztin", "la vue": "die Aussicht", "la localisation": "hier: die Lage", 
    "autrefois": "fr\u00fcher, einst", "jouer \u00e0 chat": "Katz und Maus spielen", "jouer \u00e0 cache-cache": "Verstecken spielen", "le terrain de jeux": "der Spielplatz", "le conte de f\u00e9es": "das M\u00e4rchen", "la danse": "der Tanz", "Jeannot et Margot": "H\u00e4nsel und Gretel", "dehors": "drau\u00dfen", "en revanche": "dagegen, hingegen", "le truc": "das Ding", "le souvenir": "die Erinnerung", "l'enfance": "die Kindheit", "se souvenir de qc./qn.": "sich an etw./jdn. erinnern", "se rappeler qc./qn.": "sich an etw./jdn. erinnern", "marcher": "hier: laufen", "le/la chanteur/-se": "der/die S\u00e4nger/-in", "\u00e9norm\u00e9ment": "hier: sehr viel", "emprunter qc.": "etw. ausleihen", "municipal/-e": "Stadt-, Gemeinde-", "recevoir qc.": "etw. erhalten", "Tintin et Milou": "Tim und Struppi", "l'abonnement": "das Abonnement", "le r\u00e9cit": "der Bericht", "exotique": "exotisch", "la pens\u00e9e": "das Denken, die Gedanken,auch: der Geist", "P\u00e2ques": "Ostern, das Osterfest", "les environs": "die Umgebung", "\u00e0 l'\u00e9poque": "damals, einst", "le bac": "die Matura", "la bande": "hier: die Gruppe", "profiter de qc.": "von etw. profitieren", "la jeunesse": "die Jugend", "depuis que": "seit", "de temps en temps": "von Zeit zu Zeit, auch: ab und zu", "continuer a faire qc.": "hier: weiterhin machen", "la feuille": "das Blatt", "jouer aux gendarmes et aux voleurs": "R\u00e4uber und Gendarm spielen", "le/la voleur/-se": "der/die Dieb/-in", "avoir froid": "frieren", "se reposer": "sich entspannen", "d\u00e9tendu/-e": "entspannt", "s'arr\u00eater": "stehen bleiben", "tout de suite": "sofort", "ouvrir qc.": "etw. \u00f6ffnen", "quand m\u00eame": "trotzdem", "\u00e0 ce moment(-l\u00e0)": "in dem Augenblick", "le/la prince/-sse": "der/die Prinz/-essin", "la rencontre": "das Treffen, die Begegnung", "la star": "der Star", "l'accident": "der Unfall", "le personnage": "die Figur, die Person", "se connaitre": "sich kennen (lernen)", "chasser qn./qc.": "jdn./etw. jagen", "le sanglier": "das Wildschwein", "tomber amoureux/-se de qn.": "sich in jdn. verlieben", "le/la fianc\u00e9/-e": "der/die Verlobte/-r", "entre les mains de qn.": "in der Gewalt von jdm.", "le/la Romain/-e": "der/die Romer/-in", "le photomaton": "der Passbildautomat", "jeter qc": "etw. wegwerfen, werfen", "un tas de qc.": "eine Menge an/von", "collectionner qc.": "etw. sammeln", "la recherche": "die Suche", "ne ... plus": "nicht mehr", "l'un apres l'autre": "eine/-r nach dem/der anderen", "des": "ab, seit", "l'instant": "der Augenblick", "sauver qn.": "jdn. retten", "en fait": "eigentlich", "la plan\u00e8te": "der Planet", "extraordinaire": "au\u00dfergew\u00f6hnlich", "ressembler \u00e0 qn.": "jdm. \u00e4hneln", "le baobab": "der Affenbrotbaum", "remarquer qc.": "etw. bemerken", "meme si": "auch wenn", "ne ... rien": "nichts", "monstrueux/-se": "ungeheuerlich", "la sc\u00e8ne": "die Buhne, auch: die Szene", "amuser qn.": "jdn. unterhalten", "enlever qn": "hier: jdn. entf\u00fchren", "le soldat": "der Soldat", "le monstre": "das Ungeheuer", "humilier qn.": "jdn. dem\u00fctigen", "malheureux/-se": "ungl\u00fccklich", "la pierre": "der Stein", "avoir piti\u00e9 de qn.": "mit jdm. Mitleid haben", "l'utilisation": "die Verwendung", "la plupart": "die Mehrheit, die meisten", "l'explication": "die Erklarung", "le texto": "die SMS", "le/la footballeur/-se": "der/die Fu\u00dfballspieler/-in", "l'enseignant/-e": "der/die Lehrer/-in", "s'installer": "sich niederlassen,\nauch: sich setzen", "la victoire": "der Sieg", "l'\u00e9poux/-se": "der/die Ehegatte/-in", "profond/-e": "tief", "la douleur": "der Schmerz", "faire part de qc. \u00e0 qn.": "jdm. etw. mitteilen", "le d\u00e9c\u00e8s": "das Ableben", "survenu/-e": "pl\u00f6tzlich eingetreten", "le dipl\u00f4me universitaire (DU)": "das Universitatsdiplom", "g\u00e9n\u00e9ral/-e": "allgemein", "\u00e9conomique": "wirtschaftlich", "d\u00e9cerner qc. \u00e0 qn.": "etw. an jdn. verleihen", "annoncer qc. \u00e0 qn.": "etw. jdm, ankundigen", "c\u00e9l\u00e9brer qc.": "etw. feiem", "la retraite": "die Pension", "la joie": "die Freude", "prier qn. de faire qc.": "jdn. bitten etw. zu tun", "assister \u00e0 qc.": "hier: an etw. teilnehmen", "la b\u00e9n\u00e9diction nuptiale": "die kirchliche Trauung", "l'annee scolaire": "das Schuljahr", "la dent de lait": "der Milchzahn", "pourtant": "trotzdem, dennoch", "plein de": "viel", "jaloux/-se": "eifers\u00fcchtig", "devenir": "werden", "cueillir qc": "etw. pfl\u00fccken, sammeln", "la fuite": "die Flucht", "cruel/-le": "grausam", "le/la musicien/-ne": "der/die Musiker/-in", "le/la contr\u00f4leur/-se": "der/die Kontrolleur/-in", "l'ile": "die Insel", "juste": "nur, auch: gleich, knapp", "la vache": "die Kuh", "l'\u00e9crivain/-ne": "der/die Schriftsteller/-in", "studieux/-se": "flei\u00dfig, arbeitsam", "sau": "auler", "la b\u00eatise": "die Dummheit", "une fois": "einmal", "en plein air": "im Freien", "cuisiner qc.": "etw. kochen", "organis\u00e9/-e": "organisiert", "la console de jeux": "die Spielekonsole", "le centre d'int\u00e9r\u00e9t": "das Interessensgebiet", "le lac": "der See", "s'ennuyer": "sich langweilen", "Tu penses !": "Wo denkst du hin!", "se perdre de vue": "sich aus den Augen verlieren", "par contre": "dagegen, hingegen", "s\u00e9v\u00e8re": "streng", "oublier qn./qc.": "jdn./etw. vergessen", "le boulot": "die Arbeit", "le/la ch\u00e9ri/-e": "der Liebling, der Schatz", "la fac": "die Universitat", "la d\u00e9couverte": "die Entdeckung", "la libert\u00e9": "die Freiheit", "entier/-\u00e8re": "ganze/-r", "faire la connaissance de": "die Bekanntschaft mit jdm. machen", "attractif/-ve": "anziehend", "d\u00e9prim\u00e9/-e": "deprimiert", "tout \u00e0 coup": "plotzlich", "l'\u00e9picier/-\u00e8re": "der/die Lebensmittelh\u00e4ndler/-in", "apprendre qc. a qn.": "jdm. etw. beibringen", "la formation": "die Ausbildung", "le/la travailleur/-se": "der/die Arbeiter/-in", "quitter qn./qc.": "jdn./etw. verlassen", "le pays natal": "das Geburtsland", "la pauvret\u00e9": "die Armut", "construire qc.": "etw. bauen, konstruieren", "l'avenir": "die Zukunft", "en effet": "allerdings, in der Tat", "au debut": "anfangs", "avoir de la chance": "Gl\u00fcck haben", "faire des m\u00e9nages": "als Putzkraft arbeiten", "contr\u00f3ler qc.": "etw. kontrollieren", "\u00e9nerver qn.": "jdn. nerven", "le moyen": "das Mittel, der Weg", "\u00eatre fier/-\u00e8re de qn.": "stolz auf jdn. sein", "l'immigr\u00e9/-e": "der/die Zuwanderer/Zuwanderin", "national/-e": "national", "international/-e": "international", "la Coupe du Monde": "die Weltmeisterschaft", "'entra\u00eeneur/-se": "der/die Trainer/-in"
};

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
    document.removeEventListener("keydown", onEnterNext);
    document.removeEventListener("keydown", onEnterCheck);
    do{
        if(vocsUsed.length >= vocsLength){
            document.body.innerHTML = "FERTIG!";
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
    document.removeEventListener("keydown", event => {
        if(event.key == "Enter"){
            checkVoc();
        }
    });
    document.removeEventListener("keydown", onEnterCheck);
    document.addEventListener("keydown", onEnterNext);
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

