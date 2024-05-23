import {createApp} from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";


// PrimeVue Theme
import 'primevue/resources/themes/aura-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';

// PrimeIcons
import 'primeicons/primeicons.css';

// PrimeFlex
import 'primeflex/primeflex.css';

// PrimeVue Services
import ToastService from "primevue/toastservice";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";

// PrimeVue Components
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import FileUpload from "primevue/fileupload";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputNumber from "primevue/inputnumber";
import FloatLabel from "primevue/floatlabel";
import Checkbox from "primevue/checkbox";
import Rating from "primevue/rating";
import Avatar from "primevue/avatar";
import DataView from 'primevue/dataview';
import Badge from "primevue/badge";
import Image from "primevue/image";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Divider from "primevue/divider";
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional
import router from "./router/index.js";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .use(ToastService)
    .use(DialogService)
    .use(ConfirmationService)
    .component('pv-data-view', DataView)
    .component('pv-data-view-layout-options', DataViewLayoutOptions)
    .component('pv-button', Button)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-row', Row)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-sidebar', Sidebar)
    .component('pv-menu', Menu)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag', Tag)
    .component('pv-card', Card)
    .component('pv-file-upload', FileUpload)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-number', InputNumber)
    .component('pv-float-label', FloatLabel)
    .component('pv-checkbox', Checkbox)
    .component('pv-rating', Rating)
    .component('pv-avatar', Avatar)
    .component('pv-badge', Badge)
    .component('pv-image', Image)
    .component('pv-accordion', Accordion)
    .component('pv-accordion-tab', AccordionTab)
    .component('pv-divider', Divider)
    .mount('#app')

