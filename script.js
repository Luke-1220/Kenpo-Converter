const dictionary = {
  //上から順に適用される
  //before : after
  "," : "、",
  "，" : "、",
  "あります" : "ある",
  "できます" : "できる",
  "含みます" : "含む",
  "含まれます" : "含まれる",
  "いいます" : "いう",
  "言います" : "言う",
  "限ります" : "限る",
  "負います" : "負ふ",
  "呼びます" : "呼ぶ",
  "思います" : "思う",
  "困ります" : "困る",
  "よります" : "よる",
  "かかります" : "かかる",
  "しまいます" : "しまう",
  "みなします" : "みなす",
  "してしまいます" : "する",
  "になります" : "となる",
  "でございます" : "です",
  "ます" : "なる",
  "おきます" : "おく",
  "なります" : "なる",
  "おります" : "いる",
  "します" : "する",
  "います" : "いる",
  "されません" : "されない",
  "できません" : "できない",
  "ありません" : "ない",
  "負いません" : "負わない",
  "限りません" : "限らない",
  "してください" : "しなければならない",
  "行っていただく" : "行う",
  "思います" : "思う",
  "は、" : "は、これを",
  "よって" : "よつて",
  "あって" : "あつて",
  "または" : "又は",
  "全て" : "すべて",
  "どんな" : "いかなる",
  "誰でも" : "何人も、",
  "ように" : "やうに",
  "用いる" : "用ひる",
  "負う" : "負ふ",
  "かつ" : "且つ",
  "また、" : "又、",
  "禁止する" : "禁ずる",
  "ご利用" : "利用",
  "利用される" : "利用する",
  "ですが" : "だが",
  "したいですね" : "したい",
  "悩みましたね" : "悩んだ",
  "いませんでした" : "いなかった",
  "もらいました" : "もらった",
  "しました" : "した",
  "入りました" : "入った",
  "分かりました" : "分かった",
  "あきました" : "あいた",
  "ありました" : "あった",
  "なりました" : "なった",
  "抱きました" : "抱いた",
  "べました" : "べた",
  "めました" : "めた",
  "いました" : "いた",
  "でした" : "だった",
  "たりませんでした" : "たらなかった",
  "いませんでした" : "いなかった",
  "なりません" : "ならない",
  "いません" : "いない",
  "お客様" : "国民",
  "社長" : "総理大臣",
  "社員" : "公務員",
  "従業員" : "公務員",
  "当社" : "国",
  "利用規約" : "憲法",
  "プライバシーポリシー" : "憲法",
  "規約" : "憲法",
  "条件" : "法",
  "株式会社" : "国",
  "グループ会社" : "周辺国家",
  "グループ企業" : "周辺国家",
  "子会社" : "隣国",
  "会社" : "国",
  "国内企業" : "我が国",
  "企業" : "国",
  "決算" : "国会予算",
  "Apple" : "大林檎帝国",
  "Google" : "グーグル共和国",
  "FaceBook" : "顔本県",
  "ユーザー" : "国民",
  "ユーザ" : "国民",
  "無料" : "無償",
  "与えられ" : "与へられ",
  "行う" : "行ふ",
  "もしくは" : "若しくは",
  "あるいは" : "若しくは",
  "ご利用になる" : "利用する",
  "ご利用" : "利用",
  "ご自身" : "自己",
  "ご本人" : "本人",
  "私たち" : "われら",
  "信じる" : "信ずる",
  "ほか" : "他",
  "ただし" : "但し",
  "ならびに" : "並びに",
  "および" : "及び",
  "たとえば" : "例えば",
  "ひとつ" : "一つ",
  "人たち" : "人民",
  "人々" : "人民",
  "お住まい" : "在住",
  "デバイス" : "端末",
  "やつ" : "もの",
  "させていただきますので" : "するため",
  "お読みください" : "読まなければならない",
  "に同意していただく" : "が同意する",
  "同意いただいた" : "同意した",
  "いただけますと" : "いただけると",
  "なんて" : "という",
  "せいで" : "ために",
  "のに、" : "のにも関わらず、",
  "でしょう" : "だろう",
  "ちょっと" : "多少",
  "ないですね" : "ない。",
  "んですけど" : "のだが",
  "たけど" : "たが",
  "うえで" : "上で",
  "おわび" : "お詫び",
  "きのう" : "昨日",
  "きょうは" : "今日は",
  "できる" : "出来る",
  "おきましょう" : "おかなければならない",
  "！" : "。",
  "！！" : "。",
  "!" : "。",
  //"" : "",
  //絶対最後
  "いです" : "い",
  "れます" : "れる",
  "です" : "である",
  "ました" : "た",
  "ます。" : "る。",
  "わ" : "は"
};

var url = "";
var param = "";

//var clipboard = new ClipboardJS('.copybtn');

window.onload = function () {
  const searchParams = new URLSearchParams(decodeURI(location.search));
  param = searchParams.get('q');
  var input = document.getElementById('input');
  input.value = param;
  generate();
};

function generate(){
  //var tweet = document.getElementById('tweet');
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var text = input.value;
  param = encodeURI(text);
  url = location.href.replace(/\?.*$/,"") + "?q=" + param;
  console.log(url);
  for (let change in dictionary){
    var regExp = new RegExp(change, 'g'),
    text = text.replace(regExp,dictionary[change]);
  };
  output.value = text;
};

function reset(){
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  input.value = null;
  output.value = null;
};
