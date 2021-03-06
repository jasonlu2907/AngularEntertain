import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'items/:itemId', component: ItemDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cart', component: CartComponent },
    { path: '', component: HomeComponent },

    // { path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);