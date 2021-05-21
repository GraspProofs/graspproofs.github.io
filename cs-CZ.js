//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
function plural(n) {
    return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dny' : 'dní');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'měsíce' : 'měsíců');
            } else {
                return result + 'měsíci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
    }
}

var cs = moment.defineLocale('cs', {
    months : months,
    monthsShort : monthsShort,
    monthsParse : (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    shortMonthsParse : (function (monthsShort) {
        var i, _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse : (function (months) {
        var i, _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months)),
    weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat : {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd D. MMMM YYYY H:mm',
        l : 'D. M. YYYY'
    },
    calendar : {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : 'před %s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse : /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return cs;

})));

bobrilRegisterTranslations('cs-CZ',[function (n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1];
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one'
      : ((i >= 2 && i <= 4) && v0) ? 'few'
      : (!v0) ? 'many'
      : 'other';
}," ",","],["GraPro - Důkazy z teorie grafů","Výroková logika","Typy důkazů","Důkazy z teorie grafů","Tvrzení 3 (O listech stromu)","Tvrzení:  Jestliže "," je netriviální strom, pak "," obsahuje list (resp. obsahuje alespoň dva listy).","Dokazujeme implikaci: ","Jestliže","je strom s alespoň dvěma vrcholy, pak "," obsahuje list (resp. obsahuje alespoň dva listy).","Lze dokázat přímým důkazem."," je strom s alespoň dvěma vrcholy. ","Z definice stromu plyne, že strom "," je souvislý graf. ","Dle definice souvislosti pro každé dva vrcholy stromu"," existuje cesta, která tyto vrcholy spojuje. ","Označme ","cestu maximální délky ve stromu ","Je zřejmé, že délka cesty "," je nejméně 1, takže ","Tvrdíme, že vrchol "," je list. ","Dokážeme sporem: "," není list, pak existuje hrana ",", která obsahuje vrchol "," a vrchol ",". Hrana "," je různá od první hrany "," cesty ",", tedy "," pak hrana "," společně s částí cesty "," od "," do "," tvoří kružnici. Dostali jsme spor s definicí stromu.",", pak můžeme rozšířit cestu "," o hranu ","Dostaneme spor s předpokladem, že cesta má maximální délku. ","Nebo ",", vrchol "," je izolovaný ","a pak není spojen s žádným jiným vrcholem stromu. Pak "," má dvě komponenty souvislosti a podle definice souvislosti "," není souvislý a dostáváme spor s definicí stromu.","Dokázali jsme, že vrchol ","Analogicky můžeme dokázat, že vrchol ","Pro každý graf "," platí: "," je netriviální strom, "," pak ","Strom"," je souvislý graf, který neobsahuje kružnici. Značíme písmenem "," (ze slova tree).","Netriviální strom"," má alespoň dva vrcholy.","List"," je vrchol stromu, který má stupeň 1 (vychází z něj jedna hrana).","Výrok ","Implikace ",": jestliže platí výrok ",", pak platí výrok ","."," je souvislý graf, který neobsahuje kružnici.","Souvislý graf"," je graf, ve kterém existuje mezi každými jeho dvěma vrcholy cesta. ","Cesta"," je sled s navzájem různými vrcholy, tj. pro ","Důkaz sporem: ","Vytvoříme negaci věty, odvozujeme logické důsledky až dojdeme k výroku ","Kružnice "," Předpoklad: Strom je souvislý graf, který neobsahuje kružnici → spor","je delší než cesta ","V tomto případě je "," nesouvislý graf.","Izolovaný vrchol"," je vrchol se stupněm nula.","Jestliže "," je netriviální strom, pak obsahuje list (resp. obsahuje alespoň dva listy)."])