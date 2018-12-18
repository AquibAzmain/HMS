import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'student',
        short_label: 'S',
        name: 'ছাত্র',
        type: 'link',
        icon: 'ti-id-badge'
      },
      {
        state: 'employee',
        short_label: 'E',
        name: 'কর্মকর্তা/কর্মচারী',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'store',
        short_label: 'S',
        name: 'হল স্টোর',
        type: 'link',
        icon: 'ti-package'
      },
      {
        state: 'accounting',
        short_label: 'A',
        name: 'হিসাবনিকাশ',
        type: 'link',
        icon: 'ti-money'
      },
      {
        state: 'residence',
        short_label: 'R',
        name: 'আবাসিক',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'notifications',
        short_label: 'N',
        name: 'নোটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      },
      {
        state: 'users',
        short_label: 'U',
        name: 'সিস্টেম ব্যবহারকারী',
        type: 'link',
        icon: 'ti-user'
      },
    ],
  }
];

const PROVOST_MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'student',
        short_label: 'S',
        name: 'ছাত্র',
        type: 'link',
        icon: 'ti-id-badge'
      },
      {
        state: 'employee',
        short_label: 'E',
        name: 'কর্মকর্তা/কর্মচারী',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'store',
        short_label: 'S',
        name: 'হল স্টোর',
        type: 'link',
        icon: 'ti-package'
      },
      {
        state: 'accounting',
        short_label: 'A',
        name: 'হিসাবনিকাশ',
        type: 'link',
        icon: 'ti-money'
      },
      {
        state: 'residence',
        short_label: 'R',
        name: 'আবাসিক',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'notifications',
        short_label: 'N',
        name: 'নোটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      }
    ],
  }
];

const HO_MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'student',
        short_label: 'S',
        name: 'ছাত্র',
        type: 'link',
        icon: 'ti-id-badge'
      },
      {
        state: 'employee',
        short_label: 'E',
        name: 'কর্মকর্তা/কর্মচারী',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'store',
        short_label: 'S',
        name: 'হল স্টোর',
        type: 'link',
        icon: 'ti-package'
      },
      {
        state: 'residence',
        short_label: 'R',
        name: 'আবাসিক',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'notifications',
        short_label: 'N',
        name: 'নোটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      }
    ],
  }
];
const HT_MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'student',
        short_label: 'S',
        name: 'ছাত্র',
        type: 'link',
        icon: 'ti-id-badge'
      },
      {
        state: 'residence',
        short_label: 'R',
        name: 'আবাসিক',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'notifications',
        short_label: 'N',
        name: 'নোটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      }
    ],
  }
];

const ACC_MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'accounting',
        short_label: 'A',
        name: 'হিসাবনিকাশ',
        type: 'link',
        icon: 'ti-money'
      },
      {
        state: 'notifications',
        short_label: 'N',
        name: 'নোটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      }
    ],
  }
];

const ADMIN_MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'notifications',
        short_label: 'N',
        name: 'নোটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      },
      {
        state: 'users',
        short_label: 'U',
        name: 'সিস্টেম ব্যবহারকারী',
        type: 'link',
        icon: 'ti-user'
      },
    ],
  }
];
@Injectable()
export class MenuItems {
  getAll(role): Menu[] {
    if (role=='provost'){
      return PROVOST_MENUITEMS;
    }
    else if (role=='hallOfficer'){
      return HO_MENUITEMS;
    }
    else if (role=='houseTutor'){
      return HT_MENUITEMS;
    }
    else if (role=='accountant'){
      return ACC_MENUITEMS;
    }
    else if (role=='admin'){
      return ADMIN_MENUITEMS;
    }
    
  }
}
