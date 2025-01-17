var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => DurumCubuguAlinti
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// components/SampleModal.ts
var import_obsidian = require("obsidian");
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Alıntı yenilendi");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleModal_default = SampleModal;

// components/DurumCubuguAlintiSettingTab.ts
var import_obsidian2 = require("obsidian");
var DurumCubuguAlintiSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Alıntı-1" });
    new import_obsidian2.Setting(containerEl).setName("ALINTI").setDesc("Sizi harekete geçiren nedir?").addText((text) => text.setPlaceholder("Alıntıyı giriniz").setValue(this.plugin.settings.quote).onChange(async (value) => {
      console.log("Soz: " + value);
      this.plugin.settings.quote = value;
      await this.plugin.saveSettings();
    }));
  }
};
var DurumCubuguAlintiSettingTab_default = DurumCubuguAlintiSettingTab;

// main.ts
var DEFAULT_SETTINGS = [
{ quote:"Ve şöyle de: Hamd O Allâh’a ki, hiçbir çocuk edinmedi, mülkte ortağı yoktur, âciz olmayıp bir yardımcıya da ihtiyâcı yoktur. Tekbîr getirerek O’nu noksanlıklardan yücelt de yücelt. Kur’ân-ı Kerîm, İsrâ Sûresi, Âyet: 17/111"},
{ quote:"Gerçek hükümdâr olan Allâh yücedir. Sana vahyedilmesi tamamlanmadan önce Kur’ân-ı okumakta acele etme. “Rabbim! İlmimi arttır” de. Kur’ân-ı Kerîm, Tâhâ (Tâ-Hâ) Sûresi, Âyet: 20/114"},
{ quote:"Benim Rabb’ım Allâh’tır. O’nâ hiçbir şeyi ortak koşmam. Hadîs-i Şerîf, Hz. Muhammed (s.a.v.); Râvî: Hz. Esmâ (r.anhâ)"},
{ quote:"Güzel, veciz konuşmanın sırrı; lüzumsuz, fuzûlî sözleri terk etmektir. Hz. Ebû Bekir (r.a.)"},
{ quote:"Bir adamı yüzüne karşı övmek, onu boğazlamaktır. Hz. Ömer (r.a.)"},
{ quote:"Cehâlet öyle binektir ki, üzerine binen zelîl olur, arkadaşlık yapan yolunu kaybeder. Hz. Osman (r.a.)"},
{ quote:"Bin zulme uğrasan da bir zulüm yapma. Hz. Ali (k.v.)"},
{ quote:"Bir mûm diğer bir mûmu tutuşturmakla ışığından bir şey kaybetmez. Mevlânâ Celâleddîn-i Rûmî (rha.)"},
{ quote:"Bir çivi yüzünden bir nal, bir nal yüzünden bir ât, bir ât yüzünden de bir âtlı gidiverir. Benjamin Franklin"},
{ quote:"Gülün dikenine değil, kokusuna ve rengine bakın. Prof. Dr. Mahmûd Es’ad Coşan (rha.)"},
{ quote:"Siyâsetle ilgilenmeyebilirsiniz fakat devleti yönetecek kadar veya yönetenlere ışık olacak kadar siyâseti de biliniz. Mehmet Keçeci"},
{ quote:"İyiliği gizlemek, kötülüğü gizlemekten daha üstündür. Ebû Bekir Ferrâ (rha.)"},
{ quote:"Bilmediklerimi ayağımın altına alsaydım başım göğe ererdi/değerdi. İmâm-ı A’zam Ebû Hanîfe Nu’mân b. Sâbit bin Zûtâ (Zevta) (bin Mâh) bin Merzubân (rha.)"},
{ quote:"İnsan, alışkanlıklarının çocuğudur. İbn-i Haldûn (rha.)"},
{ quote:"Güzel söz söyleyen, kimseden kötü söz işitmez. Firdevsî"},
{ quote:"Avcı nice al (tuzak, hîle) bilirse, ayı da onca yol bilir. KâşgarlıMahmûd"},
{ quote:"Birliğin kederi, ayrılığın sefâsından daha hayırlıdır. Yahya bin Muâz bin Ca’fer er-Râzî (rha.)"},
{ quote:"Bütün kötülüklerin anahtarı, hiddettir. Ca’fer bin Muhammed (rha.)"},
{ quote:"Kesilmiş koyuna derisinin yüzülmesi elem vermez. Hz. Esmâ (r.anhâ)"},
{ quote:"Güzel ahlâk; cömertlik, bağışlayıcılık, sabır ve tahammüldür. Hasan-ı Basri (rha.)"},
{ quote:"En iyi nasihât; iyi örnek olmaktır. Malcolm X"},
{ quote:"Hayât, îmân ve cihâddır. Hz. Hüseyin (r.a.)"},
{ quote:"Hayatında ekmeği yenmeyen kimsenin adı, ölümünden sonra anılmaz. Şeyh Sa’dî-i Şîrâzî (rha.)"},
{ quote:"Hiç kimse, diğer bir kimsenin kulu değildir. Hz. Ali (r.a.)"},
{ quote:"Uzun mesâfelere ulaşmak, yakın mesâfeleri aşmakla mümkündür. İmâm-ı Gazzâlî (rha.)"},
{ quote:"Târih değil, hatâlar tekerrür ediyor. II. Abdülhamîd Hân (rha.)"},
{ quote:"Her kalbin çarpıntısı kendi ecelinin ayak sesleridir. Bâyezid-i Bestâmî (rha.)"},
{ quote:"Mal cimrilerde, silah korkaklarda, karar da zayıflarda olursa işler bozulur. Hz. Ebû Bekir (r.a.)"},
{ quote:"Kibir, bele bağlanmış taş gibidir.Onunla ne yüzülür ne de uçulur. Hacı Bayrâm-ı Velî (rha.)"},
{ quote:"Bıçak kendi sapını kesmez. Kore Özlü Sözü"},
{ quote:"Yarım hâkim maldan, yarım hekîm cândan, yarım hoca’da îmândan eder. Türk Atasözü"},
{ quote: "Bilgelik, insanın en değerli hazinesidir. - Sokrates" },
{ quote: "Bilgelik, hayatın en büyük armağanıdır. - Platon" },
{ quote: "Bilgelik, insanı yücelten ve onu mutlu eden bir güçtür. - Konfüçyüs" },
{ quote: "Bilgelik, karanlığı aydınlatan bir ışıktır. - Lao Tzu" },
{ quote: "Bilgelik, hayatın anlamını kavramaktır. - Aristoteles" },
{ quote: "Bilgelik, insanın kendisini tanımasıdır. - Epiktetos" },
{ quote: "Bilgelik, hayatın zorluklarıyla başa çıkma yoludur. - Seneca" },
{ quote: "Bilgelik, insanı erdemli kılan bir özelliktir. - Marcus Aurelius"},
{ quote: "Bilgelik, hayatın en değerli hazinesidir. - Cicero" },
{ quote: "Bilgelik, insanı mutlu ve huzurlu kılan bir güçtür. - Epikür" },
];

var DurumCubuguAlinti = class extends import_obsidian3.Plugin {
    async onload() {
        await this.loadSettings();
        const statusBar = this.addStatusBarItem();

        // İlk alıntıyı doğrudan burada oluştur
        const initialQuote = this.getRandomQuote();
        const quoteElement = statusBar.createEl("span", { text: `${this.truncateQuote(initialQuote)} 📚` });
        quoteElement.style.cursor = "pointer"; // Tıklanabilir olduğunu belirtmek için imleci değiştir

        // Tam alıntıyı göstermek için fare üzerine geldiğinde bir menü açma
        quoteElement.title = this.getFullQuote(initialQuote); // Tam alıntıyı gösteren bilgi balonu

        // Durum çubuğuna tıklama olayı ekleniyor
        quoteElement.addEventListener("click", () => {
            this.updateStatusBar(statusBar); // Durum çubuğuna tıklandığında alıntıyı güncelle
        });

        const ribbonIconEl = this.addRibbonIcon("star", "Alıntıyı yenile", (evt) => {
            console.log("Şerit tıklandı");
            this.updateStatusBar(statusBar); // Her tıklandığında alıntıyı güncelle
        });

        this.addCommand({
            id: "alinti",
            name: "Durum Çubuğu Alıntıları",
            callback: () => {
                this.updateStatusBar(statusBar); // Komut çalıştığında alıntıyı güncelle
            }
        });

        this.addSettingTab(new DurumCubuguAlintiSettingTab_default(this.app, this));
    }

    updateStatusBar(statusBar) {
        statusBar.empty(); // Önce mevcut içeriği temizle
        const randomQuote = this.getRandomQuote();
        const quoteElement = statusBar.createEl("span", { text: `${this.truncateQuote(randomQuote)} 📚` });
        quoteElement.style.cursor = "pointer"; // Tıklanabilir olduğunu belirtmek için imleci değiştir

        // Tam alıntıyı göstermek için fare üzerine geldiğinde bir menü açma
        quoteElement.title = this.getFullQuote(randomQuote); // Tam alıntıyı gösteren bilgi balonu

        // Durum çubuğuna tıklama olayı ekleniyor
        quoteElement.addEventListener("click", () => {
            this.updateStatusBar(statusBar); // Durum çubuğuna tıklandığında alıntıyı güncelle
        });
    }

    getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * DEFAULT_SETTINGS.length);
        return DEFAULT_SETTINGS[randomIndex].quote;
    }

    truncateQuote(quote) {
        // Alıntıyı 60 karakter ile sınırla
        return quote.length > 60 ? quote.substring(0, 60) + "..." : quote;
    }

    getFullQuote(quote) {
        // Tam alıntıyı döndür
        return quote;
    }

    onunload() {
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
};
