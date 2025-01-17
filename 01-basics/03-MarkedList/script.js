import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const App = {
  name: 'app',
  data() {
    return {
      searchText: '',
      emails: [
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
      ],
    };
  },
  //Попробуйте использовать вычисляемое свойство computed,
  //которое будет на основе исходного массива с Email-ами и значением фильтра вычислять новый массив,
  //содержащий в каждом элементе как Email так и флаг его выделения
  computed: {
    filteredEmails() {
      const searchLow = this.searchText.toLowerCase();
      const flaggedEmails = this.emails.map((email) => ({
        email,
        marked: searchLow && email.toLowerCase().includes(searchLow),
      }));
      return flaggedEmails;
    },
  },
};

const app = createApp(App);
const vm = app.mount('#app');
