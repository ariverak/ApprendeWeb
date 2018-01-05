import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthServices} from '../../../auth/services/auth-services/auth.service';

@Component({
  selector: 'theme-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  name: string;
  photo: string;
  userMenu = [{id: 0, title: 'Perfil' }, {id:1, title: 'Cerrar Sesión' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private authServices:AuthServices) {
  }
  ngOnInit() {
    let session = localStorage.getItem("session");
    this.name = JSON.parse(session).name;
    this.photo = JSON.parse(session).photo;
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }
  onMenuClick($event){
    if($event.id == 0){

    }else if($event.id == 1){
      this.authServices.logout();
    }
  }
  startSearch() {
  
  }
}
