function Populate() {
    AddChampions();
    AddItems();
    AddTables();
    DragSetup();
}

function AddChampions() {
    var tableContent = "";
    tableContent += "<table class='tableRight'><tbody class='container'><tr id='Champion'>"
    const addRecord = (record) => {
        tableContent += `<td><div><img class="champIcons" src='images/champs/${record}Square.png' alt=${record}</div></td>`;
    }

    ChampionList.forEach(addRecord);
    tableContent += "</tr></tbody></table>";
    document.getElementById("Champions").innerHTML = tableContent;
}

function AddItems() {
    let tableContent = "";
    tableContent += "<table class='tableRight'><tbody class='container'><tr id='Item'>"
    const addRecord = (record) => {
        tableContent += `<td><div><img class="itemIcons" src='images/items/${record}_item.png' alt=${record}</div></td>`;
    }

    ItemList.forEach(addRecord);
    tableContent += "</tr></tbody></table>";
    document.getElementById("Items").innerHTML = tableContent;
}

function AddTables() {
    let tableContent = "<h2>Early Game</h2><table class='tablelong'><tr>";
    tableContent = BuildTables(tableContent);
    document.getElementById("earlyTable").innerHTML = tableContent;

    tableContent = "<h2>Mid Game</h2><table class='tablelong'><tr>";
    tableContent = BuildTables(tableContent);
    document.getElementById("midTable").innerHTML = tableContent;

    tableContent = "<h2>Late Game</h2><table class='tablelong'><tr>";
    tableContent = BuildTables(tableContent);
    document.getElementById("lateTable").innerHTML = tableContent;
}

function BuildTables(tableContent) {
    for (i= 0; i<=9; i++) {
        tableContent += '<td><div class="drop-target"></div></td>';
    }
    tableContent += "</tr><tr>";
    for (i= 0; i<=9; i++) {
        tableContent += '<td class="tdlong"><div class="drop-target-item"></div></td>';
    }
    tableContent += "</tr></table>";
    return tableContent;
}

function DragSetup() {
    dragula([ document.querySelector( '#Champion' ) ].concat(
        Array.from( document.querySelectorAll('.drop-target') )
  ), {
        copy: function (el, source) {
          return source === document.getElementById('Champion')
        },
        accepts: function (el, target) {
          return target !== document.getElementById('Champion')
        },
        removeOnSpill: true
      });

    dragula([ document.querySelector( '#Item' ) ].concat(
        Array.from( document.querySelectorAll('.drop-target-item') )
  ), {
        copy: function (el, source) {
          return source === document.getElementById('Item')
        },
        accepts: function (el, target) {
          return target !== document.getElementById('Item')
        },
        removeOnSpill: true
      });
}

function screenshot(el) {
    document.documentElement.scrollTop = 0

    hideBorders(); //Dont Want borders in the downloaded image

    html2canvas(document.querySelector("#drop-area")).then(canvas => {
        var image = canvas.toDataURL("image/png");
        
        //Add These To open image in new window
        //var newTab = window.open();
        //newTab.document.body.innerHTML = '<img src=' + image + '>';

        //Download to image
        saveAs(image, 'file.png');
    });
    replaceBorders();
}

function hideBorders() {
    var borders = document.getElementsByClassName('drop-target');
    for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = 'none';
    }
    borders = document.getElementsByClassName('drop-target-item');
    for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = 'none';
    }
}

function replaceBorders() {
    var borders = document.getElementsByClassName('drop-target');
    for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = '2px dashed #D9D9D9';
    }
    borders = document.getElementsByClassName('drop-target-item');
    for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = '2px dashed #D9D9D9';
    }
}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

function earlyCheck() {
    var checkBox = document.getElementById("earlyCheck");
    var area = document.getElementById("earlyTable");

    if (checkBox.checked == true) {
        area.style.display = "block";
    } else {
        area.style.display = "none";
    }
}

function midCheck() {
    var checkBox = document.getElementById("midCheck");
    var area = document.getElementById("midTable");

    if (checkBox.checked == true) {
        area.style.display = "block";
    } else {
        area.style.display = "none";
    }
}

function lateCheck() {
    var checkBox = document.getElementById("lateCheck");
    var area = document.getElementById("lateTable");

    if (checkBox.checked == true) {
        area.style.display = "block";
    } else {
        area.style.display = "none";
    }
}


let ChampionList = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'Aurelion_Sol', 'Blitzcrank', 'Brand', 'Braum', 'Camille', 'ChoGath', 'Darius', 'Draven',
                    'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Jayce', 'Jinx', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen',
                    'KhaZix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Miss_Fortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pantheon',
                    'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'Varus', 'Vayne', 'Veigar', 'Vi', 'Volibear',
                    'Warwick', 'Yasuo', 'Zed'];

// Season 2 Items
let ItemList = ['BF_Sword', 'Recurve_Bow', 'Needlessly_Large_Rod', 'Tear_of_the_Goddess', 'Chain_Vest', 'Negatron_Cloak', 'Giants_Belt', 'Sparring_Gloves', 'Spatula',
                'Blade_of_the_Ruined_King', 'Deathblade', 'Dragons_Claw', 'Force_of_Nature', 'Frozen_Heart', 'Frozen_Mallet', 'Giant_Slayer',
                'Guardian_Angel', 'Guinsoos_Rageblade', 'Hand_of_Justice', 'Hextech_Gunblade', 'Hush', 'Iceborn_Gauntlet', 'Infinity_Edge',
                'Ionic_Spark', 'Jeweled_Gauntlet', 'Locket_of_the_Iron_Solari', 'Lord_Dominiks_Regards', 'Ludens_Echo', 'Morellonomicon',
                'Phantom_Dancer', 'Quicksilver', 'Rabadons_Deathcap', 'Rapid_Firecannon', 'Red_Buff', 'Redemption', 'Runaans_Hurricane',
                'Seraphs_Embrace', 'Spear_of_Shojin', 'Statikk_Shiv', 'Sword_Breaker', 'Talisman_of_Ascension', 'The_Black_Cleaver', 'The_Bloodthirster',
                'Thiefs_Gloves', 'Thornmail', 'Titanic_Hydra', 'Trap_Claw', 'Wardens_Mail', 'Warmogs_Armor', 'Wooglets_Witchcap', 'Youmuus_Ghostblade',
                'Zekes_Herald', 'Zephyr'];

/* Season 1 Items
let ItemList = ['BF_Sword', 'Recurve_Bow', 'Needlessly_Large_Rod', 'Tear_of_the_Goddess', 'Chain_Vest', 'Negatron_Cloak', 'Giants_Belt', 'Spatula',
                'Blade_of_the_Ruined_King', 'Darkin', 'Dervish_Blade', 'Dragons_Claw', 'Force_of_Nature', 'Frozen_Heart',
                'Frozen_Mallet', 'Guardian_Angel', 'Guinsoos_Rageblade', 'Hextech_Gunblade', 'Hush', 'Infinity_Edge', 'Ionic_Spark',
                'Knights_Vow', 'Locket_of_the_Iron_Solari', 'Ludens_Echo', 'Morellonomicon', 'Phantom_Dancer',
                'Rabadons_Deathcap', 'Rapid_Firecannon', 'Red_Buff', 'Redemption', 'Runaans_Hurricane', 'Seraphs_Embrace',
                'Spear_of_Shojin', 'Statikk_Shiv', 'Sword_Breaker', 'Sword_of_the_Divine', 'The_Bloodthirster',
                'Thornmail', 'Titanic_Hydra', 'Warmogs_Armor', 'Youmuus_Ghostblade', 'Yuumi', 'Zekes_Herald', 'Zephyr'];
*/
