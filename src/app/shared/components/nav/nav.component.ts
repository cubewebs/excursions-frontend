import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Activities',
        icon: 'pi pi-fw pi-table',
        routerLink: '/',
      },
      //   ,
      //   {
      //     label: 'Edit',
      //     icon: 'pi pi-fw pi-pencil',
      //     items: [
      //       {
      //         label: 'Left',
      //         icon: 'pi pi-fw pi-align-left',
      //       },
      //       {
      //         label: 'Right',
      //         icon: 'pi pi-fw pi-align-right',
      //       },
      //       {
      //         label: 'Center',
      //         icon: 'pi pi-fw pi-align-center',
      //       },
      //       {
      //         label: 'Justify',
      //         icon: 'pi pi-fw pi-align-justify',
      //       },
      //     ],
      //   },
      //   {
      //     label: 'Users',
      //     icon: 'pi pi-fw pi-user',
      //     items: [
      //       {
      //         label: 'New',
      //         icon: 'pi pi-fw pi-user-plus',
      //       },
      //       {
      //         label: 'Delete',
      //         icon: 'pi pi-fw pi-user-minus',
      //       },
      //       {
      //         label: 'Search',
      //         icon: 'pi pi-fw pi-users',
      //         items: [
      //           {
      //             label: 'Filter',
      //             icon: 'pi pi-fw pi-filter',
      //             items: [
      //               {
      //                 label: 'Print',
      //                 icon: 'pi pi-fw pi-print',
      //               },
      //             ],
      //           },
      //           {
      //             icon: 'pi pi-fw pi-bars',
      //             label: 'List',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     label: 'Events',
      //     icon: 'pi pi-fw pi-calendar',
      //     items: [
      //       {
      //         label: 'Edit',
      //         icon: 'pi pi-fw pi-pencil',
      //         items: [
      //           {
      //             label: 'Save',
      //             icon: 'pi pi-fw pi-calendar-plus',
      //           },
      //           {
      //             label: 'Delete',
      //             icon: 'pi pi-fw pi-calendar-minus',
      //           },
      //         ],
      //       },
      //       {
      //         label: 'Archieve',
      //         icon: 'pi pi-fw pi-calendar-times',
      //         items: [
      //           {
      //             label: 'Remove',
      //             icon: 'pi pi-fw pi-calendar-minus',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     label: 'Quit',
      //     icon: 'pi pi-fw pi-power-off',
      //   },
    ];
  }
}
